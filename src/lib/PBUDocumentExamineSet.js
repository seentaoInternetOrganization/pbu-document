/**
 * @author AngusC
 * @description 权重及甄别项设置
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../main';
import EditWeight from '../components/editWeight';


const PBUDocumentExamineSet = ({ docConfigUrl, docCode, docData, onSave, loading }) => {
    return (
        <MainContainer docConfigUrl={docConfigUrl}>
            <EditWeight ratioWidth={1}
                        ratioHeight={1}
                        data={docData}
                        loading={loading}
                        onSave={onSave}
                />
        </MainContainer>
    )
}


PBUDocumentExamineSet.propTypes = {
    /**
     * 单据配置文件地址
     */
    docConfigUrl: PropTypes.string.isRequired,
    /**
     * 单据编码
     */
    docCode: PropTypes.string,
    /**
     * 数据集合
     */
    docData: PropTypes.object,
    /**
     * 保存回调
     * @param {Object} data
     */
    onSave: PropTypes.func,
    /**
     * 加载中效果
     */
    loading: PropTypes.bool,
}

PBUDocumentExamineSet.defaultProps = {

}

export default PBUDocumentExamineSet;
