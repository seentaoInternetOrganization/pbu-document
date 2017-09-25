/**
 * @author AngusC
 * @description 权重及甄别项设置
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PBUDocument from '../container';
import { MODE } from '../constants';

const PBUDocumentExamineSet = ({ docConfigUrl, docCode, docData, onSave }) => {

    return (
        <PBUDocument docConfigUrl={docConfigUrl}
                    mode={MODE.EXAMINE_SET}
                    docCode={docCode}
                    docData={docData}
                    onSave={onSave}
                />
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
    docCode: PropTypes.string.isRequired,
    /**
     * 数据集合
     */
    docData: PropTypes.object,
    /**
     * 保存回调
     * @param {Object} data
     */
    onSave: PropTypes.func,
}

PBUDocumentExamineSet.defaultProps = {

}

export default PBUDocumentExamineSet;
