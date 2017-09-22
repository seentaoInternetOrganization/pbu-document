/**
 * @author Chenzhyc
 * @description 预置数据组件
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import styles from './dataInit.less';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { Button , Select, Tag, AutoComplete } from 'antd';
import isNumeric from 'validator/lib/isNumeric';


const Option = Select.Option;
const tags=['1', '2', '3'];
const { CheckableTag } = Tag;

const mockSubject = [
{
"subjectId":"000001",
"subjectName":"001-科目1",
"code":"1"
},
{
"subjectId":"000002",
"subjectName":"002-科目2",
"code":"2"
},
{
"subjectId":"000003",
"subjectName":"003-科目3",
"code":"3"
},{
"subjectId":"000004",
"subjectName":"004-科目4",
"code":"4"
},{
"subjectId":"000005",
"subjectName":"005-科目5",
"code":"5"
},{
"subjectId":"000006",
"subjectName":"006-科目6",
"code":"6"
},{
"subjectId":"000007",
"subjectName":"007-科目7",
"code":"7"
},{
"subjectId":"000008",
"subjectName":"008-科目8",
"code":"8"
}
]

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

    //处理总账科目
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

        Object.values(config.elements).forEach(item => {
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

        const newAll = {
            ...all
        };

        if (item.constraint) {
            //暂时先只考虑这几种情况
            switch (item.type) {
                case ELEMENT.INTEGER:
                    if (item.constraint.maxValue
                        && parseInt(value) > item.constraint.maxValue) {
                        return;
                    }

                    if (item.constraint.minValue
                        && parseInt(value) < item.constraint.minValue) {
                        return;
                    }
                    newAll[item.name] = {
                        ...all[item.name],
                        data: parseInt(value)
                    };
                    break;
                case ELEMENT.FLOAT:
                    if (item.constraint.maxValue
                        && parseFloat(value) > item.constraint.maxValue) {
                        return;
                    }

                    if (item.constraint.minValue
                        && parseFloat(value) < item.constraint.minValue) {
                        return;
                    }
                    newAll[item.name] = {
                        ...all[item.name],
                        data: parseFloat(value)
                    };

                    break;
                default:
                    newAll[item.name] = {
                        ...all[item.name],
                        data: value
                    };
                    break;
            }
        }else {
            newAll[item.name] = {
                ...all[item.name],
                data: value
            };
        }

        this.setState({
            all: newAll
        })
    }

    onSubjectBlur = (subjects, item, value) => {
        const { all } = this.state;

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
                subjectName: ''
            };
        }else {
            newAll[item.name] ={
                ...all[item.name],
                data: selected.value,
                subjectName: selected.text
            };
        }

        this.setState({
            all: newAll
        })
    }

    onSubjectChange = (item, value, totalSubjectId) => {

        const { all } = this.state;
        const newAll = {
            ...all
        };
        newAll[item.name] = {
            ...all[item.name],
            data: value
        };
        this.setState({
            all: newAll
        })

        this.props.onSearchSubjects(value, totalSubjectId ? totalSubjectId : '');
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

        console.log('dataFinal = ', JSON.stringify(dataFinal));
    }

    render() {
        const { config, ratioHeight, ratioWidth } = this.props;
        const { all, glas, sls } = this.state;

        const renderElements = () => {
            const elementNodes = Object.values(config.elements).map((item, index) => {
                const { pos } = item;

                let defaultValue = '';

                switch (item.type) {
                    case ELEMENT.INPUT:
                        return (
                            <input key={`${item.name}_${index}`}
                                        name={item.name}
                                        style={{
                                            left: pos.left * ratioWidth,
                                            top: pos.top * ratioHeight,
                                            width: pos.width * ratioWidth,
                                            height: pos.height * ratioHeight,
                                            ...item.style
                                        }}
                                        value={all[item.name] && all[item.name].data ? all[item.name].data : defaultValue}
                                        onChange={e => {
                                            this.onItemChange(item, e.target.value)
                                        }}
                                    />
                        )
                        break;

                    case ELEMENT.INTEGER:
                        return (
                            <input key={`${item.name}_${index}`}
                                        name={item.name}
                                        style={{
                                            left: pos.left * ratioWidth,
                                            top: pos.top * ratioHeight,
                                            width: pos.width * ratioWidth,
                                            height: pos.height * ratioHeight,
                                            ...item.style
                                        }}
                                        value={all[item.name] && all[item.name].data ? all[item.name].data : defaultValue}
                                        onChange={e => {
                                            this.onItemChange(item, e.target.value)
                                        }}
                                    />
                        )
                        break;

                    case ELEMENT.FLOAT:
                        return (
                            <input key={`${item.name}_${index}`}
                                        name={item.name}
                                        style={{
                                            left: pos.left * ratioWidth,
                                            top: pos.top * ratioHeight,
                                            width: pos.width * ratioWidth,
                                            height: pos.height * ratioHeight,
                                            ...item.style
                                        }}
                                        value={all[item.name] && all[item.name].data ? all[item.name].data : defaultValue}
                                        onChange={e => {
                                            this.onItemChange(item, e.target.value)
                                        }}
                                    />
                        )
                        break;

                    case ELEMENT.GLA:
                        return (
                            <AutoComplete key={`${item.name}_${index}`}
                                name={item.name}
                                dataSource={glas}
                                value={all[item.name] && all[item.name].data ? all[item.name].data : defaultValue}
                                style={{
                                    left: pos.left * ratioWidth,
                                    top: (pos.top - 4) * ratioHeight,
                                    width: pos.width * ratioWidth,
                                    height: pos.height * ratioHeight,
                                    backgroundColor: 'none',
                                    ...item.style
                                }}
                                onChange={value => this.onSubjectChange(item, value)}
                                onBlur={value => this.onSubjectBlur(glas, item, value)}
                            />
                        )
                        break;

                    case ELEMENT.SL:
                        return (
                            <AutoComplete key={`${item.name}_${index}`}
                                name={item.name}
                                dataSource={sls}
                                value={all[item.name] && all[item.name].data ? all[item.name].data : defaultValue}
                                style={{
                                    left: pos.left * ratioWidth,
                                    top: (pos.top - 4) * ratioHeight,
                                    width: pos.width * ratioWidth,
                                    height: pos.height * ratioHeight,
                                    backgroundColor: 'none',
                                    ...item.style
                                }}
                                onChange={value => this.onSubjectChange(item, value, all[item.gla] && all[item.gla].data ? all[item.gla].data : '' )}
                                onBlur={value => this.onSubjectBlur(sls, item, value)}
                            />
                        )
                        break;

                    case ELEMENT.CHECK_BOX:
                        return (
                            <input key={`${item.name}_${index}`}
                                        type="checkbox"
                                        style={{
                                            left: pos.left * ratioWidth,
                                            top: pos.top * ratioHeight,
                                            width: pos.width * ratioWidth,
                                            height: pos.height * ratioHeight,
                                            ...item.style
                                        }}
                                    />
                        )
                        break;

                    case ELEMENT.ACCOUNT:

                        break;

                    case ELEMENT.TEXT_AREA:

                        break;
                }
            })

            return elementNodes;
        }

        return (
            <section className={styles.container} ref='docBG'>
	            <div className={styles.sub_nav}>
                    <Button type="primary" onClick={this.onSave}>保存</Button>
                </div>
                <DocBG className={styles.main_container}
                      ratioWidth={ratioWidth}
                      ratioHeight={ratioHeight}
                      config={config}>
                    {renderElements()}
                </DocBG>
                <div className={styles.tags}>
                    {tags.map((tag, index) => {
                        const tagElem = (
                            <Tag key={tag}>
                                {tag}
                            </Tag>
                        );
                        return tagElem;
                    })}
                    <Button size="small" type="dashed">+ 续页</Button>
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
    config: PropTypes.object.isRequired,
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
    data: PropTypes.object,
    subjectTotal: PropTypes.array,
    subjectDetail: PropTypes.array,
    onSearchTotalSubjects: PropTypes.func,
    onSearchDetailSubjects: PropTypes.func,
}


DataInit.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null,
    subjectTotal: mockSubject,
    subjectDetail: mockSubject,
    onSearchSubjects: (value, subjectId) => {
        console.log(`onSearchTotalSubjects ${value} subjectId ${subjectId}`);
    },
}
