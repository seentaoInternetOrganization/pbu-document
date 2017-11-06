/**
 * @author AngusC
 * @description 学生编辑用组件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../main';
import EditValuesContainer from '../components/editValuesContainer';

const PBUDocumentEdit = ({
    docConfigUrl,
    docCode,
    docData,
    subjectTotals,
    subjectDetails,
    currentCopy,
    activityId,
    subjectsTopLevel,
    subjectsTree,
    hasErrorInfo,
    onSearchSubjects,
    onDocChange,
    onAccountTitleSubejctSelected,
    onAccountDetailSubjectSelected,
    editable,
    onConfigLoaded,
}) => {

    const docProps = {
        docConfigUrl,
        docCode,
        docData,
        subjectTotals,
        subjectDetails,
        currentCopy,
        activityId,
        subjectsTopLevel,
        subjectsTree,
        hasErrorInfo,
        onSearchSubjects,
        onDocChange,
        onAccountTitleSubejctSelected,
        onAccountDetailSubjectSelected,
        editable,
    }

    return (
        <MainContainer docConfigUrl={docConfigUrl}
                    onConfigLoaded={onConfigLoaded}>
            <EditValuesContainer ratioHeight={1}
                        ratioWidth={1}
                        {...docProps}
                    />
        </MainContainer>
    )
}

PBUDocumentEdit.propTypes = {
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
     * 当前联
     */
    currentCopy: PropTypes.number,
    /**
     * 当前节点Id
     */
    activityId: PropTypes.string.isRequired,
    /**
     * 第0级科目分类
     */
    subjectsTopLevel: PropTypes.array,
    /**
     * 第0级科目分类对应的子分类
     */
    subjectsTree: PropTypes.any,
    /**
     * 搜索科目时的回调
     */
    onSearchSubjects: PropTypes.func,
    /**
     * 是否显示标错信息，默认false
     */
    hasErrorInfo: PropTypes.bool,
    /**
     * 账单所属会计科目即第0级被选中时的回调
     */
    onAccountTitleSubejctSelected: PropTypes.func,
    /**
     * 账单所属会计明细科目被选中时的回调
     */
    onAccountDetailSubjectSelected: PropTypes.func,
    /**
     * 是否可编辑，默认true
     */
    editable: PropTypes.bool,
    /**
     * onChange回调
     */
    onDocChange: PropTypes.func,
    /**
     * 当单据配置文件加载完毕时的回调
     * @param {Object} docConfig 单据配置文件信息
     */
    onConfigLoaded: PropTypes.func,
}

PBUDocumentEdit.defaultProps = {
    hasErrorInfo: false,
    subjectTotals: [],
    subjectDetails: [],
    subjectsTopLevel: [],
    subjectsTree: [],
    currentCopy: 0,
    onAccountTitleSubejctSelected: subject => {
        console.log('subject = ', subject);
    },
    onAccountDetailSubjectSelected: subject => {
        console.log('subject = ', subject);
    },
    onSearchSubjects: (value, subjectId) => {
        console.log('value = ', value, ' subjectId = ', subjectId);
    },
    editable: true,
    onDocChange: data => {
        console.log('data = ', data);
    }
}

export default PBUDocumentEdit;
