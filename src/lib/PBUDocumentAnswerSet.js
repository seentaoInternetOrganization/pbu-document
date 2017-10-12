/**
 * @author AngusC
 * @description 单据配置答案
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PBUDocument from '../container';
import { MODE } from '../constants';

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
    onCopyChange
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
        onSubjectSelected,
        loading,
        onCopyChange
    }

    return (
        <PBUDocument mode={MODE.ANSWER_SET}
                    {...docProps}
            />
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
     * 加载中效果
     */
    loading: PropTypes.bool,
    /**
     * 切换联次回调
     */
    onCopyChange: PropTypes.func,
}

PBUDocumentAnswerSet.defaultProps = {
    docConfigUrl: '',
    docCode: '',
}

export default PBUDocumentAnswerSet;
