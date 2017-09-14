/**
 * @author AngusC
 * @description 单据
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import md5 from 'blueimp-md5';
import { MODE, loadConfig } from './utils';
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
        const { docWidth, docHeight } = this.props;
        loadConfig(this.props.configUrl, docConfig => {
            if (!docConfig || docConfig.length < 1) {
                this.setState({
                    errMsg: '加载失败'
                })
            }else {
                const config = docConfig[0];
                const ratioWidth = parseFloat(docWidth)/config.width;
                const ratioHeight = parseFloat(docHeight)/config.height;

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
        const { mode, docWidth, docHeight, docData } = this.props;
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
            return <EditWeight ratioWidth={ratioWidth}
                                ratioHeight={ratioHeight}
                                config={docConfig[0]}
                                // data={docData}
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
     * 单据宽度，默认跟随config
     */
    docWidth: PropTypes.number,
    /**
     * 单据高度，默认跟随config
     */
    docHeight: PropTypes.number,
    /**
     * 单据数据集合
     */
    docData: PropTypes.object
}

PBUDocument.defaultProps = {
    docWidth: 1,
    docHeight: 1
}
