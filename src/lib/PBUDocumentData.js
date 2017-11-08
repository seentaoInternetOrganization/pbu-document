/**
 * @author AngusC
 * @description 查看背景单据内容
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MainContainer from '../main';
import ReadOnly from '../components/readonly';
import { Button } from 'antd';
import styles from '../main.less';
import classnames from 'classnames';

function firstCopy(visibleSheet) {
    if (!visibleSheet
        || visibleSheet.split(',').indexOf('1') == -1) {
        return 0
    }

    return visibleSheet.split(',').indexOf('1')
}

class PBUDocumentData extends Component {
    state = {
        currentCopy: firstCopy(this.props.visibleSheet)
    }

    componentDidMount() {
        this.setState({
            currentCopy: firstCopy(this.props.visibleSheet)
        })
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            currentCopy: firstCopy(nextProps.visibleSheet)
        })
    }

    onCopyChange = (copy) => {
        this.setState({
            currentCopy: copy
        })
    }

    render() {
        const {
            docConfigUrl,
            docData,
            visibleSheet,
            activityId,
        } = this.props;

        const { currentCopy } = this.state;

        const renderCopies = () => {

            if (!visibleSheet) {
                return null;
            }

            const copyNodes = [];
            const visibleCopies = visibleSheet.split(',')

            for (let i = 0; i < visibleCopies.length; i++) {

                if (visibleCopies[i] !== '1') {
                    continue
                }

                let className = '';
                let title = `${i+1}`;

                if (i === currentCopy) {
                    className = styles.highlight
                    title = `第${title}联`
                }

                copyNodes.push((
                    <button key={i}
                        className={className}
                        type='ghost'
                        onClick={e => this.onCopyChange(i)}
                        >{title}</button>
                ))
            }

            return (
                <div className={styles.copy}>
                    {copyNodes}
                </div>
            )
        }

        const docProps = {
            docData,
            activityId,
        }

        return (
            <div className={styles.container}>
                {renderCopies()}
                <MainContainer className={styles.main_container}
                            docConfigUrl={docConfigUrl}>
                    <ReadOnly showAnswer={false}
                            highlightAnswer={false}
                            currentCopy={this.state.currentCopy}
                        {...docProps} />
                </MainContainer>
            </div>
        )
    }
}

export default PBUDocumentData;

PBUDocumentData.propTypes = {
    /**
     * 单据编码
     */
    docCode: PropTypes.string,
    /**
     * 单据配置文件地址
     */
    docConfigUrl: PropTypes.string.isRequired,
    /**
     * 数据集合
     */
    docData: PropTypes.object.isRequired,
    /**
     * 可见联次
     */
    visibleSheet: PropTypes.string,
    /**
     * 当前活动节点id
     */
    activityId: PropTypes.string.isRequired,
}
