/**
 * @author AngusC
 * @description 单据预览，单据预览会展示单据的权重值和甄别方式
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PBUDocument from '../container';
import { MODE } from '../constants';

const PBUDocumentPreview = ({ docConfigUrl, docData, docCode, loading }) => {

    return (
        <PBUDocument docConfigUrl={docConfigUrl}
                    mode={MODE.PREVIEW}
                    docCode={docCode}
                    docData={docData}
                    loading={loading}
                />
    )
}

PBUDocumentPreview.propTypes = {
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
     * 加载中效果
     */
    loading: PropTypes.bool,
}

PBUDocumentPreview.defaultProps = {
    docConfigUrl: '',
    docCode: '',
}

export default PBUDocumentPreview;
