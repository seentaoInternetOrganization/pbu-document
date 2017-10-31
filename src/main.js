/**
 * @author AngusC
 * @description root 组件，加载配置文件
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { loadConfig } from './utils';

export default class MainContainer extends Component {
    state = {
        docConfig: [],
        errMsg: '加载中...',
    }

    loadDocConfig(props) {
        const { docConfigUrl } = props;
        this.setState({
            docConfig: [],
            errMsg: '加载中...',
        })
        loadConfig(docConfigUrl, docConfig => {
            if (!docConfig || docConfig.length < 1) {
                this.setState({
                    errMsg: '加载失败'
                })
            }else {
                this.setState({
                    docConfig: docConfig,
                })
            }
        })
    }

    componentDidMount() {
        this.loadDocConfig(this.props);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.docConfigUrl === this.props.docConfigUrl) {
            return
        }
        
        this.loadDocConfig(nextProps);
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
                    errMsg
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
}