/**
 * @author AngusC
 * @description 单据
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import md5 from 'blueimp-md5';
import { loadConfig } from './utils';
import { MODE } from './constants';
import DocReadOnly from './components/readonly';
import EditWeight from './components/editWeight';

export default class PBUDocument extends Component {
    state = {
        docConfig: [],
        errMsg: '加载中...',
        ratioWidth: 1,
        ratioHeight: 1,
    }

    loadDocConfig() {
        const { docRatio } = this.props;
        loadConfig(this.props.configUrl, docConfig => {
            if (!docConfig || docConfig.length < 1) {
                this.setState({
                    errMsg: '加载失败'
                })
            }else {
                const config = docConfig[0];
                const ratioWidth = docRatio;
                const ratioHeight = docRatio;

                this.setState({
                    docConfig: docConfig,
                    ratioWidth,
                    ratioHeight
                })
            }
        })
    }

    componentDidMount() {
        this.loadDocConfig();
    }

    render() {
        const { mode, docRatio, docData } = this.props;
        const { docConfig, errMsg, ratioWidth, ratioHeight } = this.state;

        const renderPreview = () => {
            return (
                <DocReadOnly ratioWidth={ratioWidth}
                            ratioHeight={ratioHeight}
                            config={docConfig[0]}
                            data={docData}
                        />
            )
        }

        const renderExamineSet = () => {
            return <EditWeight ratioWidth={1}
                                ratioHeight={1}
                                config={docConfig[0]}
                                data={docData}
                            />
        }

        const renderMode = () => {
            switch (mode) {
                case MODE.PREVIEW:
                    return renderPreview();
                    break;
                case MODE.EXAMINE_SET:
                    return renderExamineSet();
                    break;
            }
        }

        return (
            <div>
                {
                    docConfig.length > 0 ?
                    renderMode()
                    :
                    errMsg
                }
            </div>
        )
    }
}

PBUDocument.propTypes = {
    /**
     * 模式
     */
    mode: PropTypes.oneOf(Object.keys(MODE)).isRequired,
    /**
     * 单据配置文件地址
     */
    configUrl: PropTypes.string.isRequired,
    /**
     * 单据编码
     */
    docCode: PropTypes.string.isRequired,
    /**
     * 单据缩放系数，默认1，mode为EXAMINE_SET时无效
     */
    docRatio: PropTypes.number,
    /**
     * 单据数据集合
     */
    docData: PropTypes.object
}

PBUDocument.defaultProps = {
    docRatio: 1
}
