/**
 * @author AngusC
 * @description 查看答案
 * 普通单据查看答案
 * 账目类查看答案
 * 本activityId高亮背景显示
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../main';
import ReadOnly from '../components/readonly';
import AccountSubjectPopover from '../components/accountSubject';
import styles from '../main.less';
import CopyGroup from '../components/copyGroup'
import { firstCopy } from '../components/docUtils'

class PBUDocumentAnswer extends Component {

    state = {
        currentAccountTitle: null,
        subjectVisible: false,
        currentCopy: firstCopy(this.props.visibleSheet)
    }

    componentDidMount() {
        this.setState({
            currentCopy: firstCopy(this.props.visibleSheet)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentCopy: firstCopy(nextProps.visibleSheet)
        })
    }

    onCopyChange = (copy) => {
        this.setState({
            currentCopy: copy
        })
    }

    onAccountTitleSelected = subject => {

        this.setState({
            currentAccountTitle: subject,
            subjectVisible: true,
        });

        this.props.onAccountTitleSubejctSelected(subject);
    }

    onAccountDetailRowClicked = (record, index, e) => {
        const subject = {
            subjectId: record.subjectId,
            subjectName: record.subjectName,
            subjectCode: record.subjectCode ? record.subjectCode : record.childSubjectCode
        }

        this.setState({
            currentAccountDetail: subject,
            subjectVisible: false
        })

        this.props.onAccountDetailSubjectSelected(subject)
    }

    render() {
        const {
            docConfigUrl,
            docData,
            visibleSheet,
            activityId,
            onAccountTitleSubejctSelected,
            onAccountDetailSubjectSelected,
            subjectsTopLevel,
            subjectsTree,
            onConfigLoaded,
            currentPage,
        } = this.props;

        const docProps = {
            docData,
            activityId,
            currentPage,
        }

        const { currentAccountTitle, subjectVisible, currentCopy } = this.state

        return (
            <div className={styles.container}>
                <CopyGroup currentCopy={currentCopy}
                            className={styles.copy}
                            visibleSheet={visibleSheet}
                            selectedClsName={styles.highlight}
                            onCopyChange={this.onCopyChange}/>
                <MainContainer className={styles.main_container}
                            docConfigUrl={docConfigUrl}
                            onConfigLoaded={onConfigLoaded}>
                    <AccountSubjectPopover subjectsTopLevel={subjectsTopLevel}
                                subjectsTree={subjectsTree}
                                currentAccountTitle={currentAccountTitle}
                                onAccountDetailRowClicked={this.onAccountDetailRowClicked}
                                onAccountTitleSelected={this.onAccountTitleSelected}
                                isDataInit={false}
                                visible={subjectVisible}/>
                    <ReadOnly showAnswer={true}
                            highlightAnswer={true}
                            currentCopy={this.state.currentCopy}
                        {...docProps} />
                </MainContainer>
            </div>
        )
    }
}

export default PBUDocumentAnswer;

PBUDocumentAnswer.propTypes = {
    /**
     * 单据编码
     */
    docCode: PropTypes.string,
    /**
     * 单据配置文件地址
     */
    docConfigUrl: PropTypes.string.isRequired,
    /**
     * 数据集合
     */
    docData: PropTypes.object.isRequired,
    /**
     * 可见联次
     */
    visibleSheet: PropTypes.string,
    /**
     * 当前活动节点id
     */
    activityId: PropTypes.string.isRequired,
    /**
     * 账单所属会计科目即第0级被选中时的回调
     */
    onAccountTitleSubejctSelected: PropTypes.func,
    /**
     * 账单所属会计明细科目被选中时的回调
     */
    onAccountDetailSubjectSelected: PropTypes.func,
    /**
     * 第0级科目分类
     */
    subjectsTopLevel: PropTypes.array,
    /**
     * 第0级科目分类对应的子分类
     */
    subjectsTree: PropTypes.any,
    /**
     * 当单据配置文件加载完毕时的回调
     * @param {Object} docConfig 单据配置文件信息
     */
    onConfigLoaded: PropTypes.func,
    /**
     * 当前页
     */
    currentPage: PropTypes.number,
}

PBUDocumentAnswer.defaultProps = {
    onAccountTitleSubejctSelected: subject => {
        console.log('subject = ', subject);
    },
    onAccountDetailSubjectSelected: subject => {
        console.log('subject = ', subject);
    },
    currentPage: 1,
}
