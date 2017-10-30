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
import { Button , Select, Tag, AutoComplete, Icon, Upload, message, Popover, Table, Affix } from 'antd';
import isNumeric from 'validator/lib/isNumeric';
import isEmpty from 'validator/lib/isEmpty';
import AccountSubjectPopover from './accountSubject';

const Option = Select.Option;
const { CheckableTag } = Tag;

class DataInit extends Component {

    state = {
        all: this.props.data && this.props.data.all ? this.props.data.all : {},
        glas: [],
        sls: [],
        currentSubject: '',
        answerArea: this.props.answerDesc,
        /**
         * 选中的单据所属的会计科目
         */
        currentAccountTitle: null,
        /**
         * 选中的明细科目
         */
        currentAccountDetail: null,
        custom: this.props.data && this.props.data.custom ? this.props.data.custom : {},
        subjectVisible: false,
    }

    componentDidMount() {
        this.resetSelectHeightOfAntd()
        this.setState({
            glas: this.combineSubjects(this.props.subjectTotals),
            sls: this.combineSubjects(this.props.subjectDetails),
            answerArea: this.props.answerDesc
        })
        this.combineDataToState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            glas: this.combineSubjects(nextProps.subjectTotals),
            sls: this.combineSubjects(nextProps.subjectDetails),
            answerArea: nextProps.answerDesc
        })

        this.combineDataToState(nextProps);
        // if (nextProps.currentPage !== this.props.currentPage
        //     || nextProps.activityId !== this.props.activityId) {
        //     this.combineDataToState(nextProps);
        //     return;
        // }
        //
        // if (!(this.props.data
        //     && this.props.data.all)) {
        //     this.combineDataToState(nextProps);
        //     return;
        // }
    }

    componentDidUpdate() {
        this.resetSelectHeightOfAntd()
    }

    combineDataToState(props) {
        const { data } = props;

        if (!data
            || !data.all) {
            return;
        }

        const newAll = {
            ...data.all
        }

        const newCustom = {
            ...data.custom
        }

        this.setState({
            all: newAll,
            custom: newCustom
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
        const { activityId, isDataInit } = this.props;
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

        if (isDataInit) {
            newAll[item.name] = {
                ...all[item.name],
                data: value,
                ...activityOpt
            };
        }else {
            newAll[item.name] = {
                ...all[item.name],
                answer: value,
                ...activityOpt
            };
        }

        this.setState({
            all: newAll
        })

        this.props.onDocChange({
            ...this.props.data,
            all: newAll
        })
    }

    onSubjectBlur = (subjects, item, value) => {
        const { all } = this.state;
        const { activityId, isDataInit } = this.props;

        const selected = subjects.find(item => {
            return item.text === value
                    || item.value === value;
        })

        const newAll = {
            ...all
        };

        if (!selected) {

            if (all[item.name]
                && all[item.name].subjectName
                && !isEmpty(all[item.name].subjectName)) {
                return;
            }

            newAll[item.name] = {
                ...all[item.name],
                data: '',
                answer: '',
                subjectName: '',
                activityId: ''
            };
        }else {

            if (isDataInit) {
                newAll[item.name] = {
                    ...all[item.name],
                    data: selected.value,
                    subjectName: selected.text,
                    activityId,
                };
            }else {
                newAll[item.name] = {
                    ...all[item.name],
                    answer: selected.value,
                    subjectName: selected.text,
                    activityId,
                };
            }
        }

        this.setState({
            all: newAll,
            currentSubject: '',
        })

        this.props.onDocChange({
            ...this.props.data,
            all: newAll
        })
    }

    onSubjectChange = (item, value, totalSubjectId) => {
        const { all } = this.state;
        const { activityId, isDataInit } = this.props;

        const newAll = {
            ...all
        };

        if (isDataInit) {
            newAll[item.name] = {
                ...all[item.name],
                data: value,
                subjectName: '',
                activityId
            };
        }else {
            newAll[item.name] = {
                ...all[item.name],
                answer: value,
                subjectName: '',
                activityId
            };
        }

        this.setState({
            all: newAll,
            currentSubject: item.name
        })

        this.props.onDocChange({
            ...this.props.data,
            all: newAll
        })
        this.props.onSearchSubjects(value, totalSubjectId ? totalSubjectId : '');
    }

    onSave = () => {
        const { all, answerArea, currentAccountDetail, custom } = this.state;

        let examines = [];

        if (this.props.data
            && this.props.data.examines) {
            examines = this.props.data.examines;
        }

        if (this.props.config[0].hasSubject) {
            if (currentAccountDetail === null) {
                message.warning('请先选择科目!');
                return;
            }
        }

        const { isDataInit, currentPage } = this.props;
        const data = [];
        const answer = [];

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
                if (isDataInit) {
                    if (all[elmName]
                        && all[elmName].data) {
                        dataToPush[elmName] = all[elmName].data;
                        willPush = true;
                    }
                }else {
                    if (all[elmName]
                        && all[elmName].answer) {
                        dataToPush[elmName] = all[elmName].answer;
                        willPush = true;
                    }
                }
            })

            willPush && isDataInit && data.push(dataToPush);
            willPush && !isDataInit && answer.push(dataToPush);
        })

        let valueOpt = {};

        if (isDataInit) {
            valueOpt = {
                data
            }
        }else {
            valueOpt = {
                answer
            }
        }

        const dataFinal = {
            examines,
            all,
            custom,
            ...valueOpt
        }

        if (this.props.isDataInit
            || isEmpty(answerArea)) {
            this.props.onSave(currentPage, JSON.stringify(dataFinal));
        }else {
            this.props.onSave(currentPage, JSON.stringify(dataFinal), answerArea);
        }
    }

    appendPage = () => {
        this.onSave();
        this.props.onAppendPage();
    }

    onAnswerChange = (value) => {
        this.setState({
            answerArea: value
        })
    }

    onBackgroundLoaded = () => {
        this.resetSelectHeightOfAntd()
    }

    onAccountTitleSelected = subject => {
        this.setState({
            currentAccountTitle: subject,
            custom: {
                ...this.state.custom,
                subjectTitle: subject,
            },
            subjectVisible: true,
        });

        this.props.onAccountTitleSubejctSelected(subject);
    }

    onAccountDetailRowClicked = (record, index, e) => {
        if (record.children) {
            return;
        }

        const subject = {
            subjectId: record.subjectId,
            subjectName: record.subjectName,
            subjectCode: record.subjectCode ? record.subjectCode : record.childSubjectCode
        }

        this.setState({
            currentAccountDetail: subject,
            custom: {
                ...this.state.custom,
                subjectDetail: subject,
            },
            subjectVisible: false
        })

        this.props.onAccountDetailSubjectSelected(subject)
    }

    render() {
        const {
            config,
            ratioHeight,
            ratioWidth,
            onRemovePage,
            totalPage,
            currentPage,
            onPageChange,
            activityId,
            isDataInit,
            uploadProps,
            subjectsTopLevel,
            subjectsTree,
            onSubjectSelected,
            loading,
            currentCopy,
            onCopyChange,
            onAccountTitleSubejctSelected,
            onAccountDetailSubjectSelected,
        } = this.props;

        const { all, glas, sls, currentSubject, answerArea, currentAccountTitle, custom, subjectVisible } = this.state;
        const docProps = {
            config,
            all,
            glas,
            sls,
            ratioHeight,
            ratioWidth,
            bgClassName: isDataInit ? styles.main_container : styles.bill,
            onSubjectChange: this.onSubjectChange,
            onSubjectBlur: this.onSubjectBlur,
            onItemChange: this.onItemChange,
            activityId,
            currentSubject,
            isDataInit,
            currentCopy,
            onBackgroundLoaded: this.onBackgroundLoaded,
            custom
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
                    <Tag key={`tag_${i}`}
                        {...highlightOpt}
                        closable={totalPage > 1}
                        onClick={e => {
                            e.preventDefault();
                            this.onSave();
                            onPageChange(i + 1);
                        }}
                        onClose={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            onRemovePage(i + 1)
                        }}>
                        {i+1}
                    </Tag>
                )
            }

            return tagNodes;
        }

        //渲染答案描述区域
        const renderAnswerArea = () => {
            if (!isDataInit) {
                return (
                    <section className={styles.right_container}>
                        <div>
                            <h2>答案解析：</h2>
                            <textarea className={styles.txt}
                                    placeholder={'请输入答案解析'}
                                    onChange={e => this.onAnswerChange(e.target.value)}
                                    value={answerArea}/>
                        </div>
                        <div className={styles.upload}>
                            <h2>上传答案文档：</h2>
                            <Upload {...uploadProps}>
                                <Button><Icon type="upload" />上传答案文档</Button>
                            </Upload>
                            <span className={styles.tip}>目前只支持pdf   文件最大支持10M</span>
                        </div>
                    </section>
                )
            }
        }

        //渲染单据
        const renderDoc = () => {
            if (isDataInit) {
                return <DocEditable {...docProps} />
            }else {
                return (
                    <section className={styles.bill_wrap}>
                        <DocEditable {...docProps} />
                    </section>
                )
            }
        }

        const renderCopies = () => {
            if (config.length > 1) {
                const copyNodes = [];

                for (let i = 0; i < config.length; i++) {
                    let className = '';
                    let title = `${i+1}`;

                    if (i === currentCopy) {
                        className = styles.highlight
                        title = `第${title}联`
                    }

                    copyNodes.push((
                        <button key={i}
                            className={className}
                            type='ghost'
                            onClick={e => onCopyChange(i)}>{title}</button>
                    ))
                }

                return (
                    <div className={styles.copy}>
                        {copyNodes}
                    </div>
                )
            }
        }

        return (
            <div className={styles.outter_container}>
                {renderCopies()}
                <section className={styles.container} ref='docBG'>
    	            <div className={styles.sub_nav}>
                        <AccountSubjectPopover subjectsTopLevel={subjectsTopLevel}
                                    subjectsTree={subjectsTree}
                                    currentAccountTitle={currentAccountTitle}
                                    onAccountDetailRowClicked={this.onAccountDetailRowClicked}
                                    onAccountTitleSelected={this.onAccountTitleSelected}
                                    isDataInit={isDataInit}
                                    visible={subjectVisible}
                                    config={config}/>
                        <Button className={styles.btn_save} type="primary" loading={loading} onClick={this.onSave}>保存</Button>
                    </div>
                    {renderAnswerArea()}
                    {renderDoc()}
                    <div className={isDataInit ? classnames(styles.tags, styles.tags_mid) : styles.tags }>
                        {renderTags()}
                        <Button size="small" type="dashed" onClick={this.appendPage}>+ 续页</Button>
                    </div>
                </section>
            </div>
        )
    }
}

export default DataInit;

DataInit.propTypes = {
    /**
     * 单据配置信息，当前联的
     */
    config: PropTypes.array,
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
    subjectTotals: PropTypes.array,
    /**
     * 明细账科目
     */
    subjectDetails: PropTypes.array,
    /**
     * 搜索科目时的回调
     */
    onSearchSubjects: PropTypes.func,
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
     * 当前联
     */
    currentCopy: PropTypes.number,
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
    /**
     * 预置数据还是设置答案
     */
    isDataInit: PropTypes.bool,
    /**
     * 第0级科目分类
     */
    subjectsTopLevel: PropTypes.array,
    /**
     * 第0级科目分类对应的子分类
     */
    subjectsTree: PropTypes.array,
    /**
     * 会计科目分类被选中时的回调
     */
    onSubjectSelected: PropTypes.func,
    /**
     * 加载中
     */
    loading: PropTypes.bool,
    /**
     * 切换联次回调
     */
    onCopyChange: PropTypes.func,
    /**
     * 账单所属会计科目即第0级被选中时的回调
     */
    onAccountTitleSubejctSelected: PropTypes.func,
    /**
     * 账单所属会计明细科目被选中时的回调
     */
    onAccountDetailSubjectSelected: PropTypes.func,
    /**
     * 上传组件参数
     * @see https://ant.design/components/upload/
     */
    uploadProps: PropTypes.object,
    /**
     * 答案描述
     */
    answerDesc: PropTypes.string,
    /**
     * onChange
     */
    onDocChange: PropTypes.func,
}


DataInit.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null,
    // subjectTotals: mockSubject,
    // subjectDetails: mockSubject,
    subjectTotals: [],
    subjectDetails: [],
    // subjectsTopLevel: mockSubject,
    // subjectsTree: mockSubject,
    subjectsTopLevel: [],
    subjectsTree: [],
    onSubjectSelected: subject => {
        console.log('subject selected ', subject);
    },
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
    onSave: (page, data, answer) => {
        console.log('page = ', page);
        console.log(`data = ${data}`);
        console.log('answer = ', answer);
    },
    isDataInit: true,
    uploadProps: {
        name: 'file',
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    },
    onCopyChange: copy => {
        console.log(`copy = ${copy}`);
    },
    onAccountTitleSubejctSelected: subject => {
        console.log('subject = ', subject);
    },
    onAccountDetailSubjectSelected: subject => {
        console.log('subject = ', subject);
    },
    onDocChange: data => {
        console.log('data = ', data);
    }
}
