/**
 * @author AngusC
 * @description 单据配置答案
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../main';
import DataInit from '../components/dataInit';

const PBUDocumentAnswerSet = ({
    docConfigUrl,
    docCode,
    docData,
    subjectTotals,
    subjectDetails,
    onSearchSubjects,
    onRemovePage,
    onAppendPage,
    onPageChange,
    totalPage,
    currentPage,
    currentCopy,
    activityId,
    onSave,
    uploadProps,
    subjectsTopLevel,
    subjectsTree,
    onSubjectSelected,
    loading,
    onCopyChange,
    /**
     * 账单所属会计科目即第0级被选中时的回调
     */
    onAccountTitleSubejctSelected,
    /**
     * 账单所属会计明细科目被选中时的回调
     */
    onAccountDetailSubjectSelected,
    answerDesc,
    onDocChange,
}) => {
    const docProps = {
        docConfigUrl,
        docCode,
        docData,
        subjectTotals,
        subjectDetails,
        onSearchSubjects,
        onRemovePage,
        onAppendPage,
        onPageChange,
        totalPage,
        currentPage,
        currentCopy,
        activityId,
        onSave,
        uploadProps,
        subjectsTopLevel,
        subjectsTree,
        loading,
        onCopyChange,
        /**
         * 账单所属会计科目即第0级被选中时的回调
         */
        onAccountTitleSubejctSelected,
        /**
         * 账单所属会计明细科目被选中时的回调
         */
        onAccountDetailSubjectSelected,
        answerDesc,
        onDocChange,
    }

    return (
        <MainContainer docConfigUrl={docConfigUrl}>
            <DataInit ratioHeight={1}
                        ratioWidth={1}
                        data={docData}
                        loading={loading}
                        isDataInit={false}
                        {...docProps}
                    />
        </MainContainer>
    )
}

PBUDocumentAnswerSet.propTypes = {
    /**
     * 单据配置文件地址
     */
    docConfigUrl: PropTypes.string.isRequired,
    /**
     * 单据编码
     */
    docCode: PropTypes.string.isRequired,
    /**
     * 数据集合
     */
    docData: PropTypes.object.isRequired,
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
     * 续页回调，会触发onSave
     */
    onAppendPage: PropTypes.func,
    /**
     * 切换页，会触发onSave
     */
    onPageChange: PropTypes.func,
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
     * 当前节点Id
     */
    activityId: PropTypes.string.isRequired,
    /**
     * 保存数据
     */
    onSave: PropTypes.func,
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
     * 第0级科目分类
     */
    subjectsTopLevel: PropTypes.array,
    /**
     * 第0级科目分类对应的子分类
     */
    subjectsTree: PropTypes.array,
    /**
     * 加载中效果
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
     * onChange
     */
    onDocChange: PropTypes.func,
}

PBUDocumentAnswerSet.defaultProps = {
    docConfigUrl: '',
    docCode: '',
    answerDesc: ''
}

export default PBUDocumentAnswerSet;
