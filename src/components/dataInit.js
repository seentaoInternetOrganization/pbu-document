/**
 * @author Chenzhyc
 * @description 预置数据组件
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import DocEditable from './editable';
import styles from './dataInit.less';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { Button , Select, Tag, AutoComplete } from 'antd';
import isNumeric from 'validator/lib/isNumeric';
import isEmpty from 'validator/lib/isEmpty';
import mockSubjects from '../mock/mockSubject.json';

const Option = Select.Option;
const { CheckableTag } = Tag;

const mockSubject = mockSubjects.accountingSubjects;

class DataInit extends Component {

    state = {
        all: {},
        glas: [],
        sls: []
    }

    componentDidMount() {
        this.resetSelectHeightOfAntd()
        this.setState({
            glas: this.combineSubjects(this.props.subjectTotal),
            sls: this.combineSubjects(this.props.subjectDetail)
        })
        this.combineDataToState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            glas: this.combineSubjects(nextProps.subjectTotal),
            sls: this.combineSubjects(nextProps.subjectDetail)
        })
        this.combineDataToState(nextProps);
    }

    componentDidUpdate() {
        this.resetSelectHeightOfAntd()
    }

    combineDataToState(props) {
        const { data } = props;

        if (!data) {
            return;
        }

        const newAll = {
            ...data.all
        }

        this.setState({
            all: newAll
        })
    }

    //处理总账科目和明细账科目
    combineSubjects(subjects) {
        const combined = subjects.map(subject => {
            return {
                value: subject.subjectId,
                text: subject.subjectName
            }
        });

        return combined;
    }

    resetSelectHeightOfAntd() {
        const { config } = this.props;
        const selectHeight = [];

        Object.values(config[0].elements).forEach(item => {
            if (item.type === ELEMENT.GLA
                || item.type === ELEMENT.SL) {
                selectHeight.push(`${item.pos.height}px`);
            }
        })

        //might be a hack
        const selectNodes = this.refs.docBG.getElementsByClassName('ant-select-selection--single');

        for (let i = 0; i < selectNodes.length; i++) {
            selectNodes[i].style.height = selectHeight[i];
            selectNodes[i].style.backgroundColor = 'transparent';
        }
    }

    onItemChange = (item, value) => {
        const { all } = this.state;
        const { activityId } = this.props;

        const newAll = {
            ...all
        };

        let activityOpt = {
            activityId,
        }

        if (isEmpty(value)) {
            activityOpt = {
                activityId: ''
            }
        }

        newAll[item.name] = {
            ...all[item.name],
            data: value,
            ...activityOpt
        };

        this.setState({
            all: newAll
        })
    }

    onSubjectBlur = (subjects, item, value) => {
        const { all } = this.state;
        const { activityId } = this.props;

        const selected = subjects.find(item => {
            return item.text === value
                    || item.value === value;
        })

        const newAll = {
            ...all
        };

        if (!selected) {
            newAll[item.name] = {
                ...all[item.name],
                data: '',
                subjectName: '',
                activityId: ''
            };
        }else {
            newAll[item.name] ={
                ...all[item.name],
                data: selected.value,
                subjectName: selected.text,
                activityId,
            };
        }

        this.setState({
            all: newAll
        })
    }

    onSubjectChange = (item, value, totalSubjectId) => {
        const { all } = this.state;
        const { activityId } = this.props;

        const newAll = {
            ...all
        };
        newAll[item.name] = {
            ...all[item.name],
            data: value,
            activityId,
        };
        this.setState({
            all: newAll
        })

        this.props.onSearchSubjects(item.name, value, totalSubjectId ? totalSubjectId : '');
    }

    onSave = () => {
        const { all } = this.state;
        const { examines } = this.props.data;
        const data = [];

        examines.forEach(item => {
            let sortIfExist = {};

            if (item.sortOrder && Array.isArray(item.sortOrder)) {
                sortIfExist = {
                    sortOrder: item.sortOrder
                }
            }

            const dataToPush = {
                examineId: item.examineId,
                examineType: item.examineType,
                examineName: item.examineName,
                ...sortIfExist,
            }
            let willPush = false;

            Object.keys(item).forEach(elmName => {
                if (all[elmName]
                    && all[elmName].data) {
                    dataToPush[elmName] = all[elmName].data;
                    willPush = true;
                }
            })

            willPush && data.push(dataToPush);
        })

        const dataFinal = {
            examines,
            all,
            data
        }

        this.props.onSave(dataFinal);
    }

    appendPage = () => {
        this.onSave();
        this.props.onAppendPage();
    }

    render() {
        const { config, ratioHeight, ratioWidth, onRemovePage, totalPage, currentPage, onPageChange, activityId } = this.props;
        const { all, glas, sls } = this.state;
        const docProps = {
            config,
            all,
            glas,
            sls,
            ratioHeight,
            ratioWidth,
            bgClassName: styles.main_container,
            onSubjectChange: this.onSubjectChange,
            onSubjectBlur: this.onSubjectBlur,
            onItemChange: this.onItemChange,
            activityId,
        }

        const renderTags = () => {
            const tagNodes = [];

            for (let i = 0; i < totalPage; i++) {
                let highlightOpt = {};

                if (currentPage == i + 1) {
                    highlightOpt = {
                        color: '#3DCC61'
                    }
                }

                tagNodes.push(
                    <Tag key={i}
                        {...highlightOpt}
                        closable={i !== 0}
                        onClick={e => {
                            this.onSave();
                            onPageChange(i + 1);
                        }}
                        onClose={e => {
                            onRemovePage(i + 1)
                        }}>
                        {i+1}
                    </Tag>
                )
            }

            return tagNodes;
        }

        return (
            <section className={styles.container} ref='docBG'>
	            <div className={styles.sub_nav}>
                    <Button type="primary" onClick={this.onSave}>保存</Button>
                </div>
                <DocEditable {...docProps} />
                <div className={styles.tags}>
                    {renderTags()}
                    <Button size="small" type="dashed" onClick={this.appendPage}>+ 续页</Button>
                </div>
            </section>
        )
    }
}

export default DataInit;

DataInit.propTypes = {
    /**
     * 单据配置信息，当前联的
     */
    config: PropTypes.array.isRequired,
    /**
     * 横向缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 纵向缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
    /**
     * 带过来的数据
     */
    data: PropTypes.object.isRequired,
    /**
     * 总账科目
     */
    subjectTotal: PropTypes.array,
    /**
     * 明细账科目
     */
    subjectDetail: PropTypes.array,
    /**
     * 搜索总账科目时的回调
     */
    onSearchTotalSubjects: PropTypes.func,
    /**
     * 搜索明细账时的回调
     */
    onSearchDetailSubjects: PropTypes.func,
    /**
     * 删除页回调
     */
    onRemovePage: PropTypes.func,
    /**
     * 总页数
     */
    totalPage: PropTypes.number,
    /**
     * 当前页
     */
    currentPage: PropTypes.number,
    /**
     * 续页回调，会触发onSave
     */
    onAppendPage: PropTypes.func,
    /**
     * 切换页，会触发onSave
     */
    onPageChange: PropTypes.func,
    /**
     * 保存数据
     * @param {Object} data
     */
    onSave: PropTypes.func,
    /**
     * 当前节点Id
     * @type {String}
     */
    activityId: PropTypes.string.isRequired,
}


DataInit.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null,
    subjectTotal: mockSubject,
    subjectDetail: mockSubject,
    totalPage: 1,
    currentPage: 1,
    onSearchSubjects: (value, subjectId) => {
        console.log(`onSearchTotalSubjects ${value} subjectId ${subjectId}`);
    },
    onRemovePage: page => {
        console.log(`page ${page}`);
    },
    onAppendPage: () => {

    },
    onPageChange: page => {
        console.log(`page ${page}`);
    },
    onSave: data => {
        console.log(`data = ${JSON.stringify(data)}`);
    }
}
