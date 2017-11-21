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
import { getDescendantantProp, excludePropertiesOfObject } from '../utils';
import { resetSelectHeightOfAntd, subjectOfPropsInCustom, genValue } from './docUtils';
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
        currentAccountTitle: subjectOfPropsInCustom(this.props, 'subjectTitle'),
        currentAccountDetail: subjectOfPropsInCustom(this.props, 'subjectDetail'),
        currentCopy: this.props.currentCopy,
    }

    componentDidMount() {
        resetSelectHeightOfAntd(this.props.config, this.refs.docBG)
        this.setState({
            glas: combineSubjects(this.props.subjectTotals),
            sls: combineSubjects(this.props.subjectDetails),
            docData: combineDataToState(this.props),
            currentAccountTitle: subjectOfPropsInCustom(this.props, 'subjectTitle'),
            currentAccountDetail: subjectOfPropsInCustom(this.props, 'subjectDetail'),
            currentCopy: this.props.currentCopy,
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            glas: combineSubjects(nextProps.subjectTotals),
            sls: combineSubjects(nextProps.subjectDetails),
            docData: combineDataToState(nextProps),
            currentCopy: nextProps.currentCopy,
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
        }, ['activityId', 'value', 'subjectName'])

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
            })

            cb && cb()
        })
    }

    onNormalItemChange = (item, value) => {
        if (Array.isArray(value)) {
            this.onItemChange(item, genValue(value), value.length > 0)
        }else {
            this.onItemChange(item, genValue(value), !isEmpty(value))
        }
    }

    onSubjectSearch = (item, value, subjectId) => {
        this.onItemChange(item, { subjectName: value, }, !isEmpty(value), () => {
            this.props.onSearchSubjects(value, subjectId, item.gla && item.gla)
        })
    }

    onSubjectSelected = (item, value, option) => {
        this.onItemChange(item, { ...genValue(value), subjectName: option.text, }, !isEmpty(value), () => {
            if (item.type === ELEMENT.GLA) {
                this.props.onSearchSubjects('', value, item.name)
            }
        })
    }

    onSubjectBlur = (item, value, dataSource) => {
        const selected = dataSource.find(item => {
            return item.text === value
        })

        if (selected) {
            this.onItemChange(item, { value: selected.value, subjectName: value }, !isEmpty(value))
        }else {
            // this.onItemChange(item, { value: '', subjectName: '' }, false)
            this.onItemChange(item, { }, false)
        }
    }

    onAccountTitleSelected = subject => {
        const { docData } = this.state

        this.setState({
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
            subjectVisible: false
        }, () => {
            this.setState({
                subjectVisible: true
            })
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
        const { all, errors } = docData

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
        //只能显示预置的科目或自己选择的科目
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
            && errors
            && errors.indexOf(item.name) !== -1) {
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

        //预置数据不可编辑
        if (all[item.name]
            && all[item.name].data) {
            return false
        }
        //碎片任务流转过来的之前节点的答案也只是作为背景数据不可编辑
        if (all[item.name]
            && all[item.name].answer
            && all[item.name].activityId !== activityId) {
            return false
        }
        //流程任务流转过来的之前节点的学生填写的内容也不可编辑
        if (all[item.name]
            && all[item.name].value
            && all[item.name].activityId !== activityId) {
            return false
        }

        if (item.type === ELEMENT.SL) {
            if (!all[item.gla]) {
                return false
            }
            //没有设置对应的总账科目时不可编辑明细
            if (all[item.gla] && all[item.gla].activityId !== activityId) {
                //碎片任务的答案
                return all[item.gla].answer && !isEmpty(all[item.gla].answer)
            }

            //流程任务的预置数据和学生流转数据
            return all[item.gla]
                    && all[item.gla].activityId
                    && all[item.gla].activityId === activityId
                    && ((all[item.gla].value && !isEmpty(all[item.gla].value) )
                     || (all[item.gla].data && !isEmpty(all[item.gla].data)))
        }

        if (!all[item.name]) {
            return true
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
