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
import DataInit from './components/dataInit';

export default class PBUDocument extends Component {
    state = {
        docConfig: [],
        errMsg: '加载中...',
        ratioWidth: 1,
        ratioHeight: 1,
    }

    loadDocConfig(props) {
        const { docRatio, currentCopy, docConfigUrl } = props;
        loadConfig(docConfigUrl, docConfig => {
            if (!docConfig || docConfig.length < 1) {
                this.setState({
                    errMsg: '加载失败'
                })
            }else {
                const config = docConfig[currentCopy];
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
        this.loadDocConfig(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.loadDocConfig(nextProps);
    }

    render() {
        const {
            mode,
            docRatio,
            docData,
            subjectTotals,
            subjectDetails,
            onSearchSubjects,
            onRemovePage,
            onAppendPage,
            onPageChange,
            totalPage,
            currentPage,
            currentCopy,
            activityId,
            onSave,
            subjectsTopLevel,
            subjectsTree,
            onSubjectSelected,
            loading,
            onCopyChange,
            onAccountTitleSubejctSelected,
            onAccountDetailSubjectSelected,
            uploadProps,
            answerDesc,
            onDocChange,
        } = this.props;

        const { docConfig, errMsg, ratioWidth, ratioHeight } = this.state;

        const docEditProps = {
            subjectTotals,
            subjectDetails,
            onSearchSubjects,
            onRemovePage,
            onAppendPage,
            onPageChange,
            totalPage,
            currentPage,
            currentCopy,
            activityId,
            onSave,
            subjectsTopLevel,
            subjectsTree,
            onSubjectSelected,
            onCopyChange,
            onAccountTitleSubejctSelected,
            onAccountDetailSubjectSelected,
            answerDesc,
            uploadProps,
            onDocChange
        }

        //单据预览
        const renderPreview = () => {
            return (
                <DocReadOnly ratioWidth={ratioWidth}
                            ratioHeight={ratioHeight}
                            config={docConfig}
                            loading={loading}
                            data={docData}
                        />
            )
        }
        //权重设置
        const renderExamineSet = () => {
            return <EditWeight ratioWidth={1}
                                ratioHeight={1}
                                config={docConfig[0]}
                                data={docData}
                                loading={loading}
                                onSave={onSave}
                            />
        }
        //预置数据
        const renderDataInit = () => {

            return <DataInit ratioHeight={1}
                            ratioWidth={1}
                            config={docConfig}
                            data={docData}
                            loading={loading}
                            {...docEditProps}
                        />
        }

        //设置答案
        const renderAnswerSet = () => {
            return <DataInit ratioHeight={1}
                            ratioWidth={1}
                            config={docConfig}
                            data={docData}
                            isDataInit={false}
                            loading={loading}
                            {...docEditProps}
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
                case MODE.DATA_INIT:
                    return renderDataInit();
                    break;
                case MODE.ANSWER_SET:
                    return renderAnswerSet();
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
    docConfigUrl: PropTypes.string.isRequired,
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
    docData: PropTypes.object,
    /**
     * 总账科目
     */
    subjectTotals: PropTypes.array,
    /**
     * 明细账科目
     */
    subjectDetails: PropTypes.array,
    /**
     * 搜索科目时的回调
     */
    onSearchSubjects: PropTypes.func,
    /**
     * 删除页回调
     */
    onRemovePage: PropTypes.func,
    /**
     * 续页回调，会触发onSave
     */
    onAppendPage: PropTypes.func,
    /**
     * 切换页，会触发onSave
     */
    onPageChange: PropTypes.func,
    /**
     * 总页数
     */
    totalPage: PropTypes.number,
    /**
     * 当前页
     */
    currentPage: PropTypes.number,
    /**
     * 当前联
     */
    currentCopy: PropTypes.number,
    /**
     * 当前节点Id
     */
    activityId: PropTypes.string,
    /**
     * 保存
     */
    onSave: PropTypes.func,
    /**
     * 第0级科目分类
     */
    subjectsTopLevel: PropTypes.array,
    /**
     * 第0级科目分类对应的子分类
     */
    subjectsTree: PropTypes.array,
    /**
     * 会计科目分类被选中时的回调
     * @deprecated
     */
    onSubjectSelected: PropTypes.func,
    /**
     * 加载中效果
     */
    loading: PropTypes.bool,
    /**
     * 切换联次回调
     */
    onCopyChange: PropTypes.func,
    /**
     * 账单所属会计科目即第0级被选中时的回调
     */
    onAccountTitleSubejctSelected: PropTypes.func,
    /**
     * 账单所属会计明细科目被选中时的回调
     */
    onAccountDetailSubjectSelected: PropTypes.func,
    /**
     * 上传组件参数
     * @see https://ant.design/components/upload/
     */
    uploadProps: PropTypes.object,
    /**
     * 答案描述
     */
    answerDesc: PropTypes.string,
    /**
     * onChange
     */
    onDocChange: PropTypes.func,
}

PBUDocument.defaultProps = {
    docRatio: 1,
    currentCopy: 0,
}
