/**
 * @author AngusC
 * @description 预置数据
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PBUDocument from '../container';
import { MODE } from '../constants';

const PBUDocumentDataInit = ({
    docConfigUrl,
    docCode,
    docData,
    subjectTotal,
    subjectDetail,
    onSearchTotalSubjects,
    onSearchDetailSubjects,
    onRemovePage,
    totalPage,
    currentPage
}) => {

    const docProps = {
        docConfigUrl,
        docCode,
        docData,
        subjectTotal,
        subjectDetail,
        onSearchTotalSubjects,
        onSearchDetailSubjects,
        onRemovePage,
        totalPage,
        currentPage
    }

    return (
        <PBUDocument mode={MODE.DATA_INIT}
                    {...docProps}
            />
    )
}


PBUDocumentDataInit.propTypes = {
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
    docData: PropTypes.object,
    /**
     * 总账科目
     */
    subjectTotal: PropTypes.array,
    /**
     * 明细账科目
     */
    subjectDetail: PropTypes.array,
    /**
     * 搜索总账科目时的回调
     */
    onSearchTotalSubjects: PropTypes.func,
    /**
     * 搜索明细账时的回调
     */
    onSearchDetailSubjects: PropTypes.func,
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
}

PBUDocumentDataInit.defaultProps = {
    docConfigUrl: '',
    docCode: '',
    currentCopy: 0,
}

export default PBUDocumentDataInit;
