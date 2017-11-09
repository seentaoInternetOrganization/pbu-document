/**
 * @author AngusC
 * @description 编辑内容容器
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocEditor from './docEditor';
import styles from './docEditor.less'
import { ELEMENT } from '../constants';
import isEmpty from 'validator/lib/isEmpty';
import AccountSubjectPopover from './accountSubject';
import { getDescendantantProp } from '../utils';
import { resetSelectHeightOfAntd } from './docUtils';
import CopyGroup from './copyGroup'


//处理总账科目和明细账科目
function combineSubjects(subjects) {
    if (!Array.isArray(subjects)) {
        return []
    }

    const combined = subjects.map(subject => {
        return {
            value: subject.subjectId,
            text: subject.subjectName
        }
    });

    return combined;
}

function combineDataToState(props) {
    if (!props.docData) {
        return { all: {} }
    }

    if (!props.docData.all) {
        return {
            ...props.docData,
            all: {}
        }
    }

    return props.docData
}

export default class EditValuesContainer extends Component {
    state = {
        docData: combineDataToState(this.props),
        glas: [],
        sls: [],
        subjectVisible: false,
        currentAccountTitle: null,
        currentCopy: this.props.currentCopy,
    }

    componentDidMount() {
        resetSelectHeightOfAntd(this.props.config, this.refs.docBG)
        this.setState({
            glas: combineSubjects(this.props.subjectTotals),
            sls: combineSubjects(this.props.subjectDetails),
            docData: combineDataToState(this.props),
            currentCopy: this.props.currentCopy,
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            glas: combineSubjects(nextProps.subjectTotals),
            sls: combineSubjects(nextProps.subjectDetails),
            docData: combineDataToState(nextProps),
            currentCopy: nextProps.currentCopy,
        })
    }

    componentDidUpdate() {
        resetSelectHeightOfAntd(this.props.config, this.refs.docBG)
    }

    onItemChange = (item, valueProps, addActivityId) => {
        const { activityId } = this.props

        const activityOpt = () => {
            if (addActivityId) {
                return {
                    activityId
                }
            }else {
                return {
                    activityId: ''
                }
            }
        }

        const { docData } = this.state

        const newAll = {
            ...docData.all,
            [item.name]: {
                ...docData.all[item.name],
                ...valueProps,
                ...activityOpt()
            }
        }

        this.setState({
            docData: {
                ...docData,
                all: newAll
            }
        })

        this.props.onDocChange({
            ...docData,
            all: newAll
        })
    }

    onNormalItemChange = (item, value) => {
        if (Array.isArray(value)) {
            this.onItemChange(item, { value }, value.length > 0)
        }else {
            this.onItemChange(item, { value }, !isEmpty(value))
        }
    }

    onSubjectSearch = (item, value, subjectId) => {
        this.onItemChange(item, { value: '', subjectName: value, }, !isEmpty(value))
        this.props.onSearchSubjects(value, subjectId)
    }

    onSubjectSelected = (item, value, option) => {
        this.onItemChange(item, { value, subjectName: option.text, }, !isEmpty(value))
    }

    onSubjectBlur = (item, value, dataSource) => {
        const selected = dataSource.find(item => {
            return item.text === value
        })

        if (selected) {
            this.onItemChange(item, { value: selected.value, subjectName: value }, !isEmpty(value))
        }

        this.props.onSubjectBlur()
    }

    onAccountTitleSelected = subject => {
        const { docData } = this.state
        this.setState({
            currentAccountTitle: subject,
            docData: {
                ...docData,
                custom: {
                    ...docData.custom,
                    subjectTitle: subject,
                },
            },
            subjectVisible: true,
        });

        this.props.onAccountTitleSubejctSelected(subject);
    }

    onAccountDetailRowClicked = (record, index, e) => {
        const { docData } = this.state
        const subject = {
            subjectId: record.subjectId,
            subjectName: record.subjectName,
            subjectCode: record.subjectCode ? record.subjectCode : record.childSubjectCode
        }

        this.setState({
            currentAccountDetail: subject,
            docData: {
                ...docData,
                custom: {
                    ...docData.custom,
                    subjectDetail: subject,
                },
            },
            subjectVisible: false
        })

        this.props.onAccountDetailSubjectSelected(subject)
    }

    onCopyChange = copy => {
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
        }else if (all[item.name].answer
                && all[item.name].activityId !== activityId) {
            return all[item.name].answer
        }else if (all[item.name].value) {
            return all[item.name].value
        }

        if (hasErrorInfo
            && all[item.name].hasOwnProperty('correct')
            && !all[item.name].correct) {
            return ''
        }
    }

    //元素是否可编辑
    canEdit = item => {
        const { editable, hasErrorInfo, activityId } = this.props
        const { docData, currentCopy } = this.state
        const { all } = docData
        //非第一联不可编辑
        if (currentCopy > 0
            || !editable) {
            return false
        }

        if (all[item.name]
            && all[item.name].data) {
            return false;
        }

        if (item.type === ELEMENT.SL) {
            //没有设置对应的总账科目时不可编辑明细
            return all[item.gla]
                    && all[item.gla].value
                    && !isEmpty(all[item.gla].value)
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
        const { config, ratioHeight, ratioWidth, activityId, hasErrorInfo, subjectsTopLevel, subjectsTree, editable } = this.props
        const { docData, glas, sls, subjectVisible, currentAccountTitle, currentCopy } = this.state

        return (
            <div ref={'docBG'} className={styles.main_container}>
                <AccountSubjectPopover subjectsTopLevel={subjectsTopLevel}
                            subjectsTree={subjectsTree}
                            currentAccountTitle={currentAccountTitle}
                            onAccountDetailRowClicked={this.onAccountDetailRowClicked}
                            onAccountTitleSelected={this.onAccountTitleSelected}
                            normalEdit={true}
                            visible={subjectVisible}
                            hasErrorInfo={hasErrorInfo}
                            config={config}/>
                <CopyGroup currentCopy={currentCopy}
                            className={styles.copy}
                            visibleSheet={Array.from(Array(config.length).keys()).fill('1').join(',')}
                            selectedClsName={styles.highlight}
                            onCopyChange={this.onCopyChange}/>
                <div className={styles.doc}>
                    <DocEditor bgClassName={styles.container}
                            config={config}
                            docData={docData}
                            glas={glas}
                            sls={sls}
                            currentCopy={currentCopy}
                            ratioHeight={ratioHeight}
                            ratioWidth={ratioWidth}
                            activityId={activityId}
                            onItemChange={this.onNormalItemChange}
                            onSubjectSearch={this.onSubjectSearch}
                            onSubjectSelected={this.onSubjectSelected}
                            onSubjectBlur={this.onSubjectBlur}
                            hasErrorInfo={hasErrorInfo}
                            canEdit={this.canEdit}
                            valueToShow={this.valueToShow}
                            editable={editable}/>
                </div>
            </div>
        )
    }
}
