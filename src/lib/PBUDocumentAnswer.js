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

class PBUDocumentAnswer extends Component {

    state = {
        currentAccountTitle: null,
        subjectVisible: false,
    }

    onAccountTitleSelected = subject => {

        this.setState({
            currentAccountTitle: subject,
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
        } = this.props;

        const docProps = {
            docData,
            activityId,
        }

        const { currentAccountTitle, subjectVisible } = this.state

        return (
            <div className={styles.container}>
                <MainContainer className={styles.main_container}
                            docConfigUrl={docConfigUrl}>
                    <AccountSubjectPopover subjectsTopLevel={subjectsTopLevel}
                                subjectsTree={subjectsTree}
                                currentAccountTitle={currentAccountTitle}
                                onAccountDetailRowClicked={this.onAccountDetailRowClicked}
                                onAccountTitleSelected={this.onAccountTitleSelected}
                                isDataInit={false}
                                visible={subjectVisible}/>
                    <ReadOnly showAnswer={true}
                            highlightAnswer={true}
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
}

PBUDocumentAnswer.defaultProps = {
    onAccountTitleSubejctSelected: subject => {
        console.log('subject = ', subject);
    },
    onAccountDetailSubjectSelected: subject => {
        console.log('subject = ', subject);
    },
}
