/**
 * @author AngusC
 * @description root 组件，加载配置文件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadConfig } from './utils';
import isEmpty from 'validator/lib/isEmpty';
import { Spin } from 'antd';

export default class MainContainer extends Component {
    state = {
        docConfig: [],
        errMsg: '加载中...',
    }

    loadDocConfig(props) {
        const { docConfigUrl } = props;

        if (!docConfigUrl
            || isEmpty(docConfigUrl)) {
            return
        }

        this.setState({
            docConfig: [],
            errMsg: '加载中...',
        }, () => {
            loadConfig(docConfigUrl, docConfig => {
                if (!docConfig || docConfig.length < 1) {
                    this.setState({
                        errMsg: '.'
                    })
                }else {
                    this.setState({
                        docConfig: docConfig,
                    })
                    this.props.onConfigLoaded(docConfig)
                }
            })
        })
    }

    componentDidMount() {
        this.loadDocConfig(this.props);
    }

    render() {
        const { docConfig, errMsg } = this.state;

        const renderChildren = () => {
            const childrenNodes = React.Children.map(this.props.children, child =>
                React.cloneElement(child, { config: docConfig })
            );
            return childrenNodes
        }

        return (
            <div className={this.props.className}>
                {
                    docConfig.length > 0 ?
                    renderChildren()
                    :
                    <Spin />
                }
            </div>
        )
    }
}

MainContainer.propTypes = {
    /**
     * 单据配置文件
     */
    docConfigUrl: PropTypes.string.isRequired,
    /**
     * 类名
     */
    className: PropTypes.string,
    /**
     * 当单据配置文件加载完毕时的回调
     * @param {Object} docConfig 单据配置文件信息
     */
    onConfigLoaded: PropTypes.func,
}

MainContainer.defaultProps = {
    onConfigLoaded: config => {
        console.log('config');
    }
}
