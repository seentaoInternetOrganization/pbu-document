/**
 * @author AngusC
 * @description 单据背景组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
// import { MODE } from '../utils';


const DocBG = ({ config, ratioWidth, ratioHeight, children, className }) => {
    // let className = styles.container;
    //
    // switch (mode) {
    //     case MODE.PREVIEW:
    //         className = styles.container;
    //         break;
    //     case MODE.EXAMINE_SET:
    //         className = classnames(styles.container, styles.left);
    //         break;
    // }

    return (
        <div className={className}
            style={{
            background: `#FFFFFF url(${config.backgroundImage}) no-repeat center center`,
            width: config.width * ratioWidth,
            height: config.height * ratioHeight,
            ...config.style
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
    config: PropTypes.object.isRequired,
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
    className: PropTypes.string
    // /**
    //  * 模式
    //  */
    // mode: PropTypes.oneOf(Object.keys(MODE)).isRequired,
}

DocBG.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1
}
