/**
 * @author AngusC
 * @description 单据背景组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const DocBG = ({ config, ratioWidth, ratioHeight, children, className, copy }) => {

    return (
        <div className={className}
            style={{
            background: `#FFFFFF url(${config[copy].backgroundImage}) no-repeat center center`,
            width: config[copy].width * ratioWidth,
            height: config[copy].height * ratioHeight,
            ...config[copy].style
        }}>
            {children}
        </div>
    )
}

export default DocBG;

DocBG.propTypes = {
    /**
     * 单据当前联配置
     */
    config: PropTypes.array.isRequired,
    /**
     * 宽度缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 高度缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
    /**
     * className
     */
    className: PropTypes.string,
    /**
     * 当前联次
     */
    copy: PropTypes.number,
}

DocBG.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    copy: 0,
}
