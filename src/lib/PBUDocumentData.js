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
import CopyGroup from '../components/copyGroup'
import { firstCopy } from '../components/docUtils'

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
            currentPage,
        } = this.props;

        const { currentCopy } = this.state;

        const docProps = {
            docData,
            activityId,
            currentPage,
        }

        return (
            <div className={styles.container}>
                <CopyGroup currentCopy={currentCopy}
                            className={styles.copy}
                            visibleSheet={visibleSheet}
                            selectedClsName={styles.highlight}
                            onCopyChange={this.onCopyChange}/>
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
    /**
     * 当前页
     */
    currentPage: PropTypes.number,
}
