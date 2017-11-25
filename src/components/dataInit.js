/**
 * @author AngusC
 * @description 预置数据组件
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import styles from './dataInit.less';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { Button , Select, Tag, AutoComplete, Icon, Upload, message, Popover, Table, Affix } from 'antd';
import isNumeric from 'validator/lib/isNumeric';
import isEmpty from 'validator/lib/isEmpty';
import AccountSubjectPopover from './accountSubject';
import { mapExaminesWithAll, combineDataToState, combineSubjects, resetSelectHeightOfAntd, subjectOfPropsInCustom, saveAs, isCurrentActivityEmpty, isAllEmpty } from './docUtils';
import DocEditor from './docEditor';
import { getDescendantantProp, excludePropertiesOfObject } from '../utils';
import CopyGroup from './copyGroup';
import md5 from 'blueimp-md5'

const Option = Select.Option;
const { CheckableTag } = Tag;


class DataInit extends Component {

    state = {
        docData: combineDataToState(this.props),
        glas: [],
        sls: [],
        subjectVisible: false,
        currentAccountTitle: subjectOfPropsInCustom(this.props, 'subjectTitle'),
        currentAccountDetail: subjectOfPropsInCustom(this.props, 'subjectDetail'),
        currentCopy: this.props.currentCopy,
        answerArea: this.props.answerDesc,
    }

    componentDidMount() {
        resetSelectHeightOfAntd(this.props.config, this.refs.docBG)
        this.setState({
            glas: combineSubjects(this.props.subjectTotals),
            sls: combineSubjects(this.props.subjectDetails),
            docData: combineDataToState(this.props),
            currentCopy: this.props.currentCopy,
            answerArea: this.props.answerDesc,
            currentAccountTitle: subjectOfPropsInCustom(this.props, 'subjectTitle'),
            currentAccountDetail: subjectOfPropsInCustom(this.props, 'subjectDetail')
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            glas: combineSubjects(nextProps.subjectTotals),
            sls: combineSubjects(nextProps.subjectDetails),
            docData: combineDataToState(nextProps),
            currentCopy: nextProps.currentCopy,
            answerArea: nextProps.answerDesc,
            currentAccountTitle: subjectOfPropsInCustom(nextProps, 'subjectTitle'),
            currentAccountDetail: subjectOfPropsInCustom(nextProps, 'subjectDetail')
        })
    }

    componentDidUpdate() {
        resetSelectHeightOfAntd(this.props.config, this.refs.docBG)
    }

    onItemChange = (item, valueProps, addActivityId, cb) => {
        const { activityId } = this.props
        const { docData } = this.state

        const activityOpt = () => {
            if (addActivityId) {
                return {
                    activityId
                }
            }else {
                return { }
            }
        }

        const newItemInAll = excludePropertiesOfObject({
            ...docData.all[item.name]
        }, ['answer', 'activityId', 'data', 'subjectName'])

        const genNewAll = () => {
            if (Object.keys(newItemInAll).length === 0
                && Object.keys(valueProps).length === 0
                && Object.keys(activityOpt()).length === 0) {

                return excludePropertiesOfObject(docData.all, item.name)
            }else {
                return {
                    ...docData.all,
                    [item.name]: {
                        ...newItemInAll,
                        ...valueProps,
                        ...activityOpt()
                    }
                }
            }
        }

        this.setState({
            docData: {
                ...docData,
                all: genNewAll()
            }
        }, () => {
            this.props.onDocChange({
                ...docData,
                all: genNewAll()
            }, this.state.answerArea)

            cb && cb()
        })
    }

    onNormalItemChange = (item, value) => {
        const { isDataInit } = this.props

        //自定义单据中的Checkbox的value为数组
        if (Array.isArray(value)) {
            this.onItemChange(item, saveAs(value, isDataInit), value.length > 0)
        }else {
            this.onItemChange(item, saveAs(value, isDataInit), !isEmpty(value))
        }
    }

    onSubjectSearch = (item, value, subjectId) => {
        const { isDataInit } = this.props
        this.onItemChange(item, { ...saveAs(value, isDataInit), subjectName: value, }, !isEmpty(value), () => {
            this.props.onSearchSubjects(value, subjectId, item.gla && item.gla)
        })
    }

    onSubjectSelected = (item, value, option) => {
        const { isDataInit } = this.props
        this.onItemChange(item, { ...saveAs(value, isDataInit), subjectName: option.text, }, !isEmpty(value), () => {
            if (item.type === ELEMENT.GLA) {
                this.props.onSearchSubjects('', value, item.name)
            }
        })
    }

    onSubjectBlur = (item, value, dataSource) => {
        const { isDataInit } = this.props
        const selected = dataSource.find(item => {
            return item.text === value
        })

        if (selected) {
            this.onItemChange(item, { ...saveAs(selected.value, isDataInit), subjectName: value }, !isEmpty(value))
        }else {
            // this.onItemChange(item, { ...saveAs('', isDataInit), subjectName: '' }, false)
            this.onItemChange(item, { ...saveAs('', isDataInit) }, false)
        }
    }

    onSave = () => {
        const { docData, answerArea, currentAccountDetail } = this.state;
        const { activityId, originalDocData } = this.props

        let examines = [];

        if (this.props.data
            && this.props.data.examines) {
            examines = this.props.data.examines;
        }

        if (this.props.config[0].hasSubject) {
            if (!currentAccountDetail) {
                message.warning('请先选择科目!');
                return false
            }
        }

        const { isDataInit, currentPage } = this.props;

        let valueOpt = {};

        if (isDataInit) {
            valueOpt = {
                data: mapExaminesWithAll(examines, 'data', docData.all, activityId)
            }
        }else {
            valueOpt = {
                answers: mapExaminesWithAll(examines, 'answer', docData.all, activityId)
            }
        }

        const dataFinal = {
            examines,
            all: docData.all,
            custom: docData.custom,
            ...valueOpt
        }

        const isBodyEmpty = isCurrentActivityEmpty(activityId, docData.all, isDataInit ? 'data' : 'answer')
        //当前数据hash
        const currentHash = md5(JSON.stringify(docData.all))
        //原始数据hash
        const originalHash = originalDocData.all ? md5(JSON.stringify(originalDocData.all)) : md5(JSON.stringify({}))

        if (originalHash === currentHash) {
            return true
        }

        if (this.props.isDataInit) {
            this.props.onSave(currentPage, JSON.stringify(dataFinal), isBodyEmpty);
        }else {
            this.props.onSave(currentPage, JSON.stringify(dataFinal), answerArea, isBodyEmpty);
        }

        return true
    }

    appendPage = () => {
        const { docData } = this.state

        if (isAllEmpty(docData.all)) {
            message.warning('本页单据无数据，无法续页')
            return
        }

        return this.onSave() && this.props.onAppendPage();
    }

    onAnswerChange = (value) => {
        this.setState({
            answerArea: value
        })

        this.props.onDocChange({
            ...this.props.data,
        }, value)
    }

    onBackgroundLoaded = () => {
        this.resetSelectHeightOfAntd()
    }

    onAccountTitleSelected = subject => {
        const { docData } = this.state
        this.setState({
            subjectVisible: true,
        });

        this.props.onAccountTitleSubejctSelected(subject);
    }

    onAccountDetailRowClicked = (record, index, e) => {
        const { docData, currentAccountDetail, currentAccountTitle } = this.state

        const subject = {
            subjectId: record.subjectId,
            subjectName: record.subjectName,
            subjectCode: record.subjectCode ? record.subjectCode : record.childSubjectCode
        }

        if (currentAccountDetail) {
            this.onSave()
        }

        this.setState({
            subjectVisible: false
        }, () => {
            this.setState({
                subjectVisible: true
            })
        })

        this.props.onAccountDetailSubjectSelected(subject)
    }

    onCopyChange = (copy) => {
        this.setState({
            currentCopy: copy
        })
    }

    //要展示的value
    valueToShow = item => {
        const { editable, hasErrorInfo, activityId } = this.props
        const { docData } = this.state
        const { all } = docData

        if (item.type === ELEMENT.LABEL) {
            if (item.textValue) {
                return item.textValue
            }else if (item.equalTo
                    && docData.custom
                    && getDescendantantProp(docData.custom, item.equalTo)) {
                return getDescendantantProp(docData.custom, item.equalTo)
            }

            return;
        }

        if (!all[item.name]) {
            return;
        }

        if (all[item.name].subjectName) {
            return all[item.name].subjectName
        }

        //展示预置的数据，非本activityId的答案和学生填写的value
        if (all[item.name].data) {
            return all[item.name].data
        }else if (all[item.name].answer) {
            return all[item.name].answer
        }
    }

    //元素是否可编辑
    canEdit = item => {
        const { hasErrorInfo, activityId, isDataInit } = this.props
        const { docData, currentCopy } = this.state
        const { all } = docData
        //非第一联不可编辑
        if (currentCopy > 0) {
            return false
        }

        if (all[item.name]
            && all[item.name].activityId
            && all[item.name].activityId === activityId) {

            if (isDataInit
                && all[item.name].answer) {
                    return false
            }else if (!isDataInit
                        && all[item.name].data) {
                    return false
            }
        }

        if (item.type === ELEMENT.SL) {
            //没有设置对应的总账科目时不可编辑明细
            return all[item.gla]
                    && (
                        (
                            all[item.gla].answer && !isEmpty(all[item.gla].answer)
                        )
                        ||
                        (
                            all[item.gla].data && !isEmpty(all[item.gla].data)
                        )
                    )
                    &&
                    (
                        !all[item.name] || !all[item.name].activityId || all[item.name].activityId === activityId
                    )
        }

        if (!all[item.name]) {
            return true
        }

        //如果此元素不属于本节点，则不允许编辑
        if (all[item.name].activityId
            && all[item.name].activityId !== activityId) {
            return false
        }

        return true
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
            onCopyChange,
            onAccountTitleSubejctSelected,
            onAccountDetailSubjectSelected,
        } = this.props;

        const { docData, glas, sls, currentSubject, answerArea, currentAccountTitle, subjectVisible, currentCopy } = this.state;

        const docProps = {
            config,
            docData,
            glas,
            sls,
            ratioHeight,
            ratioWidth,
            bgClassName: isDataInit ? styles.main_container : styles.bill,
            onSubjectBlur: this.onSubjectBlur,
            onItemChange: this.onNormalItemChange,
            onSubjectSearch: this.onSubjectSearch,
            onSubjectSelected: this.onSubjectSelected,
            activityId,
            currentSubject,
            isDataInit,
            currentCopy,
            disabledColor: { color: 'lightgrey' },
            canEdit: this.canEdit,
            valueToShow: this.valueToShow,
            currentPage,
        }

        const renderTags = () => {
            const tagNodes = Array.from(Array(totalPage).keys()).map(i => {
                const highlightOpt = (currentPage == i + 1) ? {
                    color: '#3DCC61'
                } : {}

                return (
                    <Tag key={`tag_${i}`}
                        {...highlightOpt}
                        closable={totalPage > 1}
                        onClick={e => {
                            e.preventDefault();
                            this.onSave() && onPageChange(i + 1)
                        }}
                        onClose={e => {
                            e.preventDefault();
                            e.stopPropagation();
                            onRemovePage(i + 1)
                        }}>
                        {i + 1}
                    </Tag>
                )
            })

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
                                    maxLength={500}
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

        const renderPage = () => {
            return (
                <div className={classnames(styles.tags, {[styles.tags_mid]: isDataInit, [styles.tags_left]: !isDataInit})}>
                    {renderTags()}
                    {currentPage === totalPage && <Button size="small" type="dashed" onClick={this.appendPage}>+ 续页</Button>}
                </div>
            )
        }

        //渲染单据
        const renderDoc = () => {

            const docNodes = () => {
                return (
                    <div style={{ display: "inline-block", textAlign: 'left', width: config[0].width }}>
                        <DocEditor {...docProps}/>
                        {renderPage()}
                    </div>
                )
            }

            if (isDataInit) {
                return docNodes()
            }else {
                return (
                    <section className={styles.bill_wrap}>
                        {docNodes()}
                    </section>
                )
            }
        }

        return (
            <div className={styles.outter_container}>
                <div style={{ textAlign: 'left' }}>
                    <CopyGroup currentCopy={currentCopy}
                            className={styles.copy}
                            visibleSheet={Array.from(Array(config.length).keys()).fill('1').join(',')}
                            selectedClsName={styles.highlight}
                            onCopyChange={this.onCopyChange}/>
                </div>
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
    subjectsTree: PropTypes.any,
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
    /**
     * [onSubjectBlur description]
     */
    onSubjectBlur: PropTypes.func,
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
    onSave: (page, data, answer, isBodyEmpty) => {
        console.log('page = ', page);
        console.log(`data = ${data}`);
        console.log('answer = ', answer);
        console.log('isBodyEmpty = ', isBodyEmpty);
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
    },
    currentCopy: 0
}
