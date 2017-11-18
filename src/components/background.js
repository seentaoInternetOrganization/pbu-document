/**
 * @author AngusC
 * @description 单据背景组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'validator/lib/isEmpty';
import { Spin } from 'antd';

class DocBG extends Component {
    state = {
        loading: false,
        currentCopy: this.props.currentCopy,
    }

    componentDidMount() {
        this.setState({
            currentCopy: this.props.currentCopy
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentCopy: this.props.currentCopy
        })
    }

    render() {
        const { config, ratioWidth, ratioHeight, children, className, currentCopy } = this.props;
        const { loading } = this.state;

        //最大可渲染联次
        const copyToRender = () => {
            if (currentCopy > config.length - 1) {
                return config.length - 1
            }

            return currentCopy
        }

        const style = {
                backgroundImage: `url(${config[copyToRender()].backgroundImage})`,
                backgroundColor: '#FFFFFF',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                width: config[copyToRender()].width * ratioWidth,
                height: config[copyToRender()].height * ratioHeight,
                ...config[copyToRender()].style
            }
        const bgKey = config[copyToRender()].backgroundImage

        return (
            <div key={`${loading}_${bgKey}`}
                className={className}
                style={style}>
                <span style={{ display: 'none' }}>{config[copyToRender()].backgroundImage}</span>
                {children}
            </div>
        )
    }
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
    currentCopy: PropTypes.number,
    /**
     * 背景图片已经加载成功
     */
    onBackgroundLoaded: PropTypes.func,
}

DocBG.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    currentCopy: 0,
    onBackgroundLoaded: () => {}
}
