/**
 * @author AngusC
 * @description 编辑内容容器
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocValues from './editValues';
import styles from './editValues.less'
import { ELEMENT } from '../constants';
import isEmpty from 'validator/lib/isEmpty';
import AccountSubjectPopover from './accountSubject';

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
        this.resetSelectHeightOfAntd()
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
        this.resetSelectHeightOfAntd()
    }

    onBackgroundLoaded = () => {
        this.resetSelectHeightOfAntd()
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
        this.onItemChange(item, { value }, !isEmpty(value))
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

    onCopyChange = (copy) => {
        this.setState({
            currentCopy: copy
        })
    }

    render() {
        const { config, ratioHeight, ratioWidth, activityId, hasErrorInfo, subjectsTopLevel, subjectsTree } = this.props
        const { docData, glas, sls, subjectVisible, currentAccountTitle, currentCopy } = this.state

        const renderCopies = () => {

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
                        onClick={e => this.onCopyChange(i)}
                        >{title}</button>
                ))
            }

            return (
                <div className={styles.copy}>
                    {copyNodes}
                </div>
            )
        }

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
                {renderCopies()}
                <div className={classnames(styles.doc, { [styles.showCopy] : config.length > 1})}>
                    <DocValues bgClassName={styles.container}
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
                            hasErrorInfo={hasErrorInfo}/>
                </div>
            </div>
        )
    }
}
