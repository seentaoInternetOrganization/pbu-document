/**
 * @author AngusC
 * @description 单据配置答案
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PBUDocument from '../container';
import { MODE } from '../constants';

const PBUDocumentAnswerSet = ({ docConfigUrl, docCode, docData, onSave }) => {

    return (
        <div>
            配置答案
        </div>
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
    docData: PropTypes.object,
    /**
     * 数据保存时触发
     */
    onSave: PropTypes.func,
}

PBUDocumentAnswerSet.defaultProps = {
    docConfigUrl: '',
    docCode: '',
}

export default PBUDocumentAnswerSet;
