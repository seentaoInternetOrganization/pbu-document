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

const PBUDocumentAnswer = ({
    docConfigUrl,
    docData,
    visibleSheet,
    activityId,
    onAccountTitleSubejctSelected,
    onAccountDetailSubjectSelected,
    subjectsTopLevel,
    subjectsTree,
}) => {

    const docProps = {
        docData,
        activityId,
    }

    return (
        <MainContainer docConfigUrl={docConfigUrl}>
            <ReadOnly showAnswer={true}
                    highlightAnswer={true}
                {...docProps} />
        </MainContainer>
    )
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
