/**
 * @author AngusC
 * @description 单据背景组件
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'validator/lib/isEmpty';
import { Spin } from 'antd';

// const DocBG = ({ config, ratioWidth, ratioHeight, children, className, currentCopy }) => {
//
//     return (
//         <div className={className}
//             style={{
//             background: `#FFFFFF url(${config[currentCopy].backgroundImage}) no-repeat center center`,
//             width: config[currentCopy].width * ratioWidth,
//             height: config[currentCopy].height * ratioHeight,
//             ...config[currentCopy].style
//         }}>
//             {children}
//         </div>
//     )
// }

class DocBG extends Component {
    state = {
        loading: false,
        currentCopy: 0,
    }

    loadBackgroundImg(imgUrl, callback) {
        const image = document.createElement('img');
        image.src = imgUrl;
        image.onload = callback;
    }

    componentDidMount() {
        this.setState({
            loading: true,
            currentCopy: this.props.currentCopy
        })
        this.loadBackgroundImg(this.props.config[this.props.currentCopy].backgroundImage, () => {
            this.setState({
                loading: false
            })
            this.props.onBackgroundLoaded()
        })
    }

    componentWillReceiveProps(nextProps) {
        if (this.state.currentCopy === nextProps.currentCopy) {
            return;
        }

        this.setState({
            loading: true
        })
        this.loadBackgroundImg(nextProps.config[nextProps.currentCopy].backgroundImage, () => {
            this.setState({
                loading: false
            })
            nextProps.onBackgroundLoaded()
        })
    }

    render() {
        const { config, ratioWidth, ratioHeight, children, className, currentCopy } = this.props;
        const { loading } = this.state;

        let style = {
            width: config[currentCopy].width * ratioWidth,
            height: config[currentCopy].height * ratioHeight,
            ...config[currentCopy].style
        };

        if (!loading) {
            style = {
                background: `#FFFFFF url(${config[currentCopy].backgroundImage}) no-repeat center center`,
                width: config[currentCopy].width * ratioWidth,
                height: config[currentCopy].height * ratioHeight,
                ...config[currentCopy].style
            }
        }

        return (
            <div key={`${loading}_${currentCopy}`}
                className={className}
                style={style}>
                {loading
                    ?
                    <div style={{
                        width:'100%',
                        textAlign: 'center',
                        position: 'absolute',
                        top: '48%'
                    }}>
                        <Spin tip="单据加载中..."/>
                    </div>
                    :
                    children
                }
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
