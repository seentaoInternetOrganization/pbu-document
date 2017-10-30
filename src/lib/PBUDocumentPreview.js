/**
 * @author AngusC
 * @description 单据预览，单据预览会展示单据的权重值和甄别方式
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../main';
import DocWeight from '../components/weight';

const PBUDocumentPreview = ({
    docConfigUrl,
    docData,
    docCode,
    loading,
    ratioWidth,
    ratioHeight
}) => {

    return (
        <MainContainer docConfigUrl={docConfigUrl}>
            <DocWeight ratioWidth={ratioWidth}
                        ratioHeight={ratioHeight}
                        loading={loading}
                        data={docData}
                    />
        </MainContainer>
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
    /**
     * 横向缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 纵向缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
}

PBUDocumentPreview.defaultProps = {
    docConfigUrl: '',
    docCode: '',
    ratioWidth: 1,
    ratioHeight: 1,
}

export default PBUDocumentPreview;
