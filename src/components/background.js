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
        if (this.props.currentCopy > this.props.config.length - 1) {
            return;
        }

        if (isEmpty(this.props.config[this.props.currentCopy].backgroundImage)) {
            this.setState({
                loading: false,
                currentCopy: this.props.currentCopy
            })
            // this.props.onBackgroundLoaded()
        }else {
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
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.currentCopy > nextProps.config.length - 1) {
            return;
        }

        if (this.state.currentCopy === nextProps.currentCopy) {
            return;
        }

        if (isEmpty(nextProps.config[nextProps.currentCopy].backgroundImage)) {
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

        //最大可渲染联次
        const copyToRender = () => {
            if (currentCopy > config.length - 1) {
                return config.length - 1
            }

            return currentCopy
        }

        let style = {
            width: config[copyToRender()].width * ratioWidth,
            height: config[copyToRender()].height * ratioHeight,
            ...config[copyToRender()].style
        };

        if (!loading) {
            style = {
                background: `#FFFFFF url(${config[copyToRender()].backgroundImage}) no-repeat center center`,
                width: config[copyToRender()].width * ratioWidth,
                height: config[copyToRender()].height * ratioHeight,
                ...config[copyToRender()].style
            }
        }

        return (
            <div key={`${loading}_${copyToRender()}`}
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
