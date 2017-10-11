/**
 * @author Chenzhyc
 * @description 预置数据组件
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import DocBG from './background';
import DocEditable from './editable';
import styles from './dataInit.less';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { Button , Select, Tag, AutoComplete, Icon, Upload, message, Popover, Table } from 'antd';
import isNumeric from 'validator/lib/isNumeric';
import isEmpty from 'validator/lib/isEmpty';
import mockSubjects from '../mock/mockSubject.json';

const Option = Select.Option;
const { CheckableTag } = Tag;

const mockSubject = mockSubjects.accountingSubjects;

class DataInit extends Component {

    state = {
        all: {},
        glas: [],
        sls: [],
        currentSubject: '',
        answerArea: ''
    }

    componentDidMount() {
        this.resetSelectHeightOfAntd()
        this.setState({
            glas: this.combineSubjects(this.props.subjectTotals),
            sls: this.combineSubjects(this.props.subjectDetails)
        })
        this.combineDataToState(this.props);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            glas: this.combineSubjects(nextProps.subjectTotals),
            sls: this.combineSubjects(nextProps.subjectDetails)
        })
        this.combineDataToState(nextProps);
    }

    componentDidUpdate() {
        this.resetSelectHeightOfAntd()
    }

    combineDataToState(props) {
        const { data } = props;

        if (!data
            || !data.all) {
            return;
        }

        const newAll = {
            ...data.all
        }

        this.setState({
            all: newAll
        })
    }

    //处理总账科目和明细账科目
    combineSubjects(subjects) {
        const combined = subjects.map(subject => {
            return {
                value: subject.subjectId,
                text: subject.subjectName
            }
        });

        return combined;
    }

    resetSelectHeightOfAntd() {
        const { config } = this.props;
        const selectHeight = [];

        Object.values(config[0].elements).forEach(item => {
            if (item.type === ELEMENT.GLA
                || item.type === ELEMENT.SL) {
                selectHeight.push(`${item.pos.height}px`);
            }
        })

        //might be a hack
        const selectNodes = this.refs.docBG.getElementsByClassName('ant-select-selection--single');

        for (let i = 0; i < selectNodes.length; i++) {
            selectNodes[i].style.height = selectHeight[i];
            selectNodes[i].style.backgroundColor = 'transparent';
        }
    }

    onItemChange = (item, value) => {
        const { all } = this.state;
        const { activityId, isDataInit } = this.props;

        const newAll = {
            ...all
        };

        let activityOpt = {
            activityId,
        }

        if (isEmpty(value)) {
            activityOpt = {
                activityId: ''
            }
        }

        if (isDataInit) {
            newAll[item.name] = {
                ...all[item.name],
                data: value,
                ...activityOpt
            };
        }else {
            newAll[item.name] = {
                ...all[item.name],
                answer: value,
                ...activityOpt
            };
        }

        this.setState({
            all: newAll
        })
    }

    onSubjectBlur = (subjects, item, value) => {
        const { all } = this.state;
        const { activityId, isDataInit } = this.props;

        const selected = subjects.find(item => {
            return item.text === value
                    || item.value === value;
        })

        const newAll = {
            ...all
        };

        if (!selected) {

            if (all[item.name]
                && all[item.name].subjectName
                && !isEmpty(all[item.name].subjectName)) {
                return;
            }

            newAll[item.name] = {
                ...all[item.name],
                data: '',
                answer: '',
                subjectName: '',
                activityId: ''
            };
        }else {

            if (isDataInit) {
                newAll[item.name] ={
                    ...all[item.name],
                    data: selected.value,
                    subjectName: selected.text,
                    activityId,
                };
            }else {
                newAll[item.name] ={
                    ...all[item.name],
                    answer: selected.value,
                    subjectName: selected.text,
                    activityId,
                };
            }
        }

        this.setState({
            all: newAll,
            currentSubject: '',
        })
    }

    onSubjectChange = (item, value, totalSubjectId) => {
        const { all } = this.state;
        const { activityId, isDataInit } = this.props;

        const newAll = {
            ...all
        };

        if (isDataInit) {
            newAll[item.name] = {
                ...all[item.name],
                data: value,
                activityId
            };
        }else {
            newAll[item.name] = {
                ...all[item.name],
                answer: value,
                activityId
            };
        }

        this.setState({
            all: newAll,
            currentSubject: item.name
        })

        this.props.onSearchSubjects(value, totalSubjectId ? totalSubjectId : '');
    }

    onSave = () => {
        const { all, answerArea } = this.state;
        if (!this.props.data
            || !this.props.data.examines) {
            message.warning('无甄别信息，请检查参数!');
            return;
        }
        const { examines } = this.props.data;
        const { isDataInit } = this.props;
        const data = [];
        const answer = [];

        examines.forEach(item => {
            let sortIfExist = {};

            if (item.sortOrder && Array.isArray(item.sortOrder)) {
                sortIfExist = {
                    sortOrder: item.sortOrder
                }
            }

            const dataToPush = {
                examineId: item.examineId,
                examineType: item.examineType,
                examineName: item.examineName,
                ...sortIfExist,
            }
            let willPush = false;

            Object.keys(item).forEach(elmName => {
                if (isDataInit) {
                    if (all[elmName]
                        && all[elmName].data) {
                        dataToPush[elmName] = all[elmName].data;
                        willPush = true;
                    }
                }else {
                    if (all[elmName]
                        && all[elmName].answer) {
                        dataToPush[elmName] = all[elmName].answer;
                        willPush = true;
                    }
                }
            })

            willPush && isDataInit && data.push(dataToPush);
            willPush && !isDataInit && answer.push(dataToPush);
        })

        let valueOpt = {};

        if (isDataInit) {
            valueOpt = {
                data
            }
        }else {
            valueOpt = {
                answer
            }
        }

        const dataFinal = {
            examines,
            all,
            ...valueOpt
        }

        if (this.props.isDataInit) {
            this.props.onSave(dataFinal);
        }else {
            this.props.onSave(dataFinal, answerArea);
        }
    }

    appendPage = () => {
        this.onSave();
        this.props.onAppendPage();
    }

    onAnswerChange = (value) => {
        this.setState({
            answerArea: value
        })
    }

    render() {
        const {
            config,
            ratioHeight,
            ratioWidth,
            onRemovePage,
            totalPage,
            currentPage,
            onPageChange,
            activityId,
            isDataInit,
            uploadProps,
            subjectsTopLevel,
            subjectsTree,
            onSubjectSelected,
        } = this.props;

        const { all, glas, sls, currentSubject, answerArea } = this.state;
        const docProps = {
            config,
            all,
            glas,
            sls,
            ratioHeight,
            ratioWidth,
            bgClassName: isDataInit ? styles.main_container : styles.bill,
            onSubjectChange: this.onSubjectChange,
            onSubjectBlur: this.onSubjectBlur,
            onItemChange: this.onItemChange,
            activityId,
            currentSubject,
            isDataInit
        }

        const renderTags = () => {
            const tagNodes = [];

            for (let i = 0; i < totalPage; i++) {
                let highlightOpt = {};

                if (currentPage == i + 1) {
                    highlightOpt = {
                        color: '#3DCC61'
                    }
                }

                tagNodes.push(
                    <Tag key={i}
                        {...highlightOpt}
                        closable={i !== 0}
                        onClick={e => {
                            this.onSave();
                            onPageChange(i + 1);
                        }}
                        onClose={e => {
                            onRemovePage(i + 1)
                        }}>
                        {i+1}
                    </Tag>
                )
            }

            return tagNodes;
        }

        //渲染答案描述区域
        const renderAnswerArea = () => {
            if (!isDataInit) {
                return (
                    <section className={styles.right_container}>
                        {/* <div>
                            <h2>财务专用章设置：</h2>
                            <div className={styles.btn_group}>
                                <Button className={styles.current}>人名章</Button>
                                <Button>合同章</Button>
                                <Button>什么章</Button>
                            </div>
                        </div> */}
                        <div>
                            <h2>答案解析：</h2>
                            {/* <div className={styles.txt}>富文本</div> */}
                            <textarea className={styles.txt}
                                    placeholder={'请输入答案解析'}
                                    onChange={e => this.onAnswerChange(e.target.value)}
                                    value={answerArea}/>
                        </div>
                        <div className={styles.upload}>
                            <h2>上传答案文档：</h2>
                            <Upload {...uploadProps}>
                                <Button><Icon type="upload" />上传答案文档</Button>
                            </Upload>
                            <span className={styles.tip}>doc、xls、ppt、pdf   文件最大支持10M</span>
                        </div>
                    </section>
                )
            }
        }

        //渲染单据
        const renderDoc = () => {
            if (isDataInit) {
                return <DocEditable {...docProps} />
            }else {
                return (
                    <section className={styles.bill_wrap}>
                        <DocEditable {...docProps} />
                    </section>
                )
            }
        }

        const subSubjects = () => {
            const columns = [
                { title: '', dataIndex: 'subjectCode', key: 'subjectCode' },
                { title: '', dataIndex: 'subjectName', key: 'subjectName' },
            ]

            const data = subjectsTree.map((item, index) => {
                return {
                    key: index,
                    subjectCode: item.subjectCode,
                    subjectName: item.subjectName,
                }
            })

            return (
                <div>
                    <Table
                        loading={!subjectsTree.length > 0}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        bordered={false}
                    />
                </div>
            )
        }

        const renderSubjects = () => {
            if (config[0].hasSubject) {
                const subjectNodes = subjectsTopLevel.map((subject, index) => {

                    const data = subjectsTree.map((item, index) => {
                        let childrenOpt = {};

                        if (item.children) {
                            const childrenNodes = subjectsTree.map((item, j) => {
                                return {
                                    key: 'child_' + index+'_'+j,
                                    subjectCode: item.subjectCode,
                                    subjectName: item.subjectName
                                }
                            })

                            childrenOpt = {
                                children: childrenNodes
                            }
                        }

                        return {
                            key: index,
                            subjectCode: item.subjectCode,
                            subjectName: item.subjectName,
                            ...childrenOpt
                        }
                    });

                    const columns = [
                        { title: (
                            <span style={{ visibility: 'hidden' }}>expend</span>
                        ), key: 'expends' },
                        { title: '科目编码', dataIndex: 'subjectCode', key: 'subjectCode' },
                        { title: (
                            <span style={{ visibility: 'hidden' }}>科目编码</span>
                        ), dataIndex: 'subjectId', key: 'subjectId' },
                        { title: '科目名称', dataIndex: 'subjectName', key: 'subjectName' },
                    ]

                    const content = (
                        <div style={{
                            width: 370,
                            height: 256,
                            overflow:'scroll'
                        }}>
                            <Table
                                loading={!subjectsTree.length > 0}
                                size={'small'}
                                columns={columns}
                                dataSource={data}
                                pagination={false}
                                bordered={true}
                            />
                        </div>
                    )

                    return (
                        <Popover key={`${subject.subjectId}_${index}`}
                                title={subject.subjectName}
                                style={{height:256, width:370}}
                                content={content}>
                            <Button type="ghost">
                                {subject.subjectName}
                                <span className={styles.arrow}></span>
                            </Button>
                        </Popover>
                    )
                });

                return (
                    <div className={styles.subject}>
                        {subjectNodes}
                    </div>
                )
            }
        }

        return (
            <section className={styles.container} ref='docBG'>
	            <div className={styles.sub_nav}>
                    {renderSubjects()}
                    <Button className={styles.btn_save} type="primary" onClick={this.onSave}>保存</Button>
                </div>
                {renderAnswerArea()}
                {renderDoc()}
                <div className={isDataInit ? classnames(styles.tags, styles.tags_mid) : styles.tags }>
                    {renderTags()}
                    <Button size="small" type="dashed" onClick={this.appendPage}>+ 续页</Button>
                </div>
            </section>
        )
    }
}

export default DataInit;

DataInit.propTypes = {
    /**
     * 单据配置信息，当前联的
     */
    config: PropTypes.array.isRequired,
    /**
     * 横向缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 纵向缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
    /**
     * 带过来的数据
     */
    data: PropTypes.object.isRequired,
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
     * 总页数
     */
    totalPage: PropTypes.number,
    /**
     * 当前页
     */
    currentPage: PropTypes.number,
    /**
     * 续页回调，会触发onSave
     */
    onAppendPage: PropTypes.func,
    /**
     * 切换页，会触发onSave
     */
    onPageChange: PropTypes.func,
    /**
     * 保存数据
     * @param {Object} data
     */
    onSave: PropTypes.func,
    /**
     * 当前节点Id
     * @type {String}
     */
    activityId: PropTypes.string.isRequired,
    /**
     * 预置数据还是设置答案
     */
    isDataInit: PropTypes.bool,
    /**
     * 上传组件参数
     */
    uploadProps: PropTypes.object,
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
     */
    onSubjectSelected: PropTypes.func,
}


DataInit.defaultProps = {
    ratioWidth: 1,
    ratioHeight: 1,
    data: null,
    // subjectTotal: mockSubject,
    // subjectDetail: mockSubject,
    subjectTotals: [],
    subjectDetails: [],
    subjectsTopLevel: mockSubject,
    subjectsTree: mockSubject,
    // subjectsTopLevel: [],
    // subjectsTree: [],
    onSubjectSelected: subject => {
        console.log('subject selected ', subject);
    },
    totalPage: 1,
    currentPage: 1,
    onSearchSubjects: (value, subjectId) => {
        console.log(`onSearchTotalSubjects ${value} subjectId ${subjectId}`);
    },
    onRemovePage: page => {
        console.log(`page ${page}`);
    },
    onAppendPage: () => {

    },
    onPageChange: page => {
        console.log(`page ${page}`);
    },
    onSave: (data, answer) => {
        console.log(`data = ${JSON.stringify(data)}`);
        console.log('answer = ', answer);
    },
    isDataInit: true,
    uploadProps: {
        name: 'file',
        action: '//jsonplaceholder.typicode.com/posts/',
        onChange(info) {
            if (info.file.status !== 'uploading') {
                console.log(info.file, info.fileList);
            }
            if (info.file.status === 'done') {
                message.success(`${info.file.name} file uploaded successfully`);
            } else if (info.file.status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
    }
}
