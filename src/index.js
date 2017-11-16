import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PBUDocument from './container';
import mockData from './mock/mockData.json';
import PBUDocumentDataInit from './lib/PBUDocumentDataInit';
import PBUDocumentExamineSet from './lib/PBUDocumentExamineSet';
import PBUDocumentAnswerSet from './lib/PBUDocumentAnswerSet';
import PBUDocumentPreview from './lib/PBUDocumentPreview';
import PBUDocumentAnswer from './lib/PBUDocumentAnswer';
import PBUDocumentData from './lib/PBUDocumentData';
import PBUDocumentEdit from './lib/PBUDocumentEdit';
import mockSubjects from './mock/mockSubject.json';
import { Button, message } from 'antd';
import { mapExaminesWithAll } from './components/docUtils'

// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0066/config/djy0066.json";
const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0089/config/DJY0089.json";
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0071/config/DJY0071.json"
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0064/config/DJY0064.json"
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0067/config/DJY0067.json"
// const docConfigUrl = "http://47.93.23.65:8080/stest/document.sales";
// const docConfigUrl = "https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/excel_document/document/q4qhej/q4qhej.json"

let currentCopy = 0;

function onCopyChange(copy) {
    console.log('copy = !!! ', copy);
    currentCopy = copy;
}

class Demo extends Component {
    state = {
        currentCopy: 0,
        subjectTotals: [],
        subjectDetails: [],
        // subjectTotals: [],
        // docData: {
        //     examines: []
        // },
        // docData: mockData.docData,
        docData: { all: { }, custom: {
            enterprise: {
                provinceName: '黑龙江',
                documentRegionCode: '11000153130'
            },
            serialNum: '12345869'
        } },
        empty: true,
        answerDesc: '哈哈哈哈',
        totalPage: 1,
        currentPage: 1,
    }

    onCopyChange = (copy) => {
        console.log('copy = ', copy);
        this.setState({
            currentCopy: copy
        })
    }

    onSearchSubjects = (value, subjectId, name) => {
        console.log('onSearchSubjects value = ', value, ' subjectId = ', subjectId, ' name = ', name);
        this.setState({
            subjectTotals: mockSubjects.accountingSubjects,
            subjectDetails: mockSubjects.accountingSubjects,
        })
        // setTimeout(() => {
        //     this.setState({
        //         subjectTotals: mockSubjects.accountingSubjects
        //     })
        // }, 500);
    }

    render() {
        const uploadProps = {
            name: 'file',
            action: '/',
            onChange(info) {
                console.log('!!!!!!!!');
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
        // console.log('this.state.docData = ', this.state.docData);
        // console.log('empty = ', this.state.empty);
        return (
            <div style={{ textAlign: 'left' }}>
                {/* <div style={{ display: 'inline-block', width: 100, height: 100 }}/> */}
                {/* <Button type='primary' onClick={() => {
                    this.setState({
                        empty: !this.state.empty,
                        docData: this.state.empty ? { all: {}, data: []} : mockData.docData
                    })
                }}>切换</Button> */}
                <span>设置权重及甄别方式</span>
                <PBUDocumentExamineSet docConfigUrl={docConfigUrl}
                                        docCode='DJY0066'
                                        loading={false}
                                        docData={mockData.docData}/>
                <div>权重及甄别方式预览</div>
                <div style={{ display: 'inline-block'}}>
                    <PBUDocumentPreview docConfigUrl={docConfigUrl} docData={mockData.docData}/>
                </div>
                <div>预置数据</div>
                <PBUDocumentDataInit docConfigUrl={docConfigUrl}
                                    docData={this.state.docData}
                                    activityId='18bcf3382fa8c93d'
                                    currentCopy={currentCopy}
                                    onCopyChange={this.onCopyChange}
                                    subjectTotals={this.state.subjectTotals}
                                    onSearchSubjects={this.onSearchSubjects}
                                    subjectsTopLevel={mockSubjects.accountingSubjects}
                                    subjectsTree={mockSubjects.accountingSubjects}
                                    uploadProps={{...uploadProps}}
                                    totalPage={2}
                                    onSubjectBlur={() => {
                                        console.log('!!!!!!!onSubjectBlur');
                                        this.setState({
                                            subjectTotals: [],
                                        })
                                    }}
                                    onAccountTitleSubejctSelected={ subject => {
                                        console.log('subject = ', subject);
                                        this.setState({
                                            docData: {
                                                ...this.state.docData,
                                                custom: {
                                                    ...this.state.docData.custom,
                                                    subjectTitle: subject
                                                }
                                            }
                                        })
                                    }}
                                    onAccountDetailSubjectSelected={ subject => {
                                        console.log('subject = ', subject);
                                        this.setState({
                                            docData: {
                                                ...this.state.docData,
                                                custom: {
                                                    ...this.state.docData.custom,
                                                    subjectDetail: subject
                                                }
                                            }

                                        })
                                    }}
                                    onDocChange={ data => {
                                        this.setState({
                                            docData: data
                                        })
                                    }}/>
                <span>设置答案</span>
                <PBUDocumentAnswerSet docConfigUrl={docConfigUrl}
                                    docCode='DJY0066'
                                    docData={this.state.docData}
                                    activityId='18bcf3382fa8c93d'
                                    currentPage={this.state.currentPage}
                                    currentCopy={currentCopy}
                                    onCopyChange={this.onCopyChange}
                                    subjectTotals={this.state.subjectTotals}
                                    onSearchSubjects={this.onSearchSubjects}
                                    subjectsTopLevel={mockSubjects.accountingSubjects}
                                    subjectsTree={mockSubjects.accountingSubjects}
                                    answerDesc={this.state.answerDesc}
                                    onAppendPage={() => {
                                        this.setState({
                                            totalPage: this.state.totalPage + 1,
                                            currentPage: this.state.currentPage + 1,
                                            docData: {
                                                all: {}
                                            }
                                        })
                                    }}
                                    onSubjectBlur={() => {
                                        console.log('!!!!!!!onSubjectBlur');
                                    }}
                                    onAccountTitleSubejctSelected={ subject => {
                                        console.log('subject = ', subject);
                                        this.setState({
                                            docData: {
                                                ...this.state.docData,
                                                custom: {
                                                    ...this.state.docData.custom,
                                                    subjectTitle: subject
                                                }
                                            }
                                        })
                                    }}
                                    onAccountDetailSubjectSelected={ subject => {
                                        console.log('subject = ', subject);
                                        this.setState({
                                            docData: {
                                                ...this.state.docData,
                                                custom: {
                                                    ...this.state.docData.custom,
                                                    subjectDetail: subject
                                                }
                                            }

                                        })
                                    }}
                                    uploadProps={{...uploadProps}}
                                    totalPage={this.state.totalPage}
                                    onDocChange={ (data, answerDesc) => {
                                        this.setState({
                                            docData: data,
                                            answerDesc,
                                        })
                                    }}/>
                <div>背景单据展示</div>
                <PBUDocumentData docConfigUrl={docConfigUrl}
                    docData={this.state.docData}
                    visibleSheet={'0,1,1,'}
                    activityId='18bcf3382fa8c93' />
                <div>查看答案</div>
                <div style={{ display: 'inline-block' }}>
                    <PBUDocumentAnswer docConfigUrl={docConfigUrl}
                        docData={this.state.docData}
                        visibleSheet={'0,1,1,'}
                        onConfigLoaded={config => {
                            console.log('config = ', config);
                            // setTimeout(() => {
                            //     // console.log('mockData.docData = ', JSON.parse(JSON.stringify(mockData.docData)));
                            //     this.setState({
                            //         docData: mockData.docData
                            //     })
                            // }, 3000)
                        }}
                        subjectsTopLevel={mockSubjects.accountingSubjects}
                        subjectsTree={mockSubjects.accountingSubjects}
                        activityId='18bcf3382fa8c93d' />
                </div>
                <div>编辑内容</div>
                <PBUDocumentEdit
                    docConfigUrl={docConfigUrl}
                        docCode='DJY0066'
                        docData={this.state.docData}
                        activityId='18bcf3382fa8c93d'
                        subjectTotals={this.state.subjectTotals}
                        subjectDetails={this.state.subjectDetails}
                        onSearchSubjects={this.onSearchSubjects}
                        subjectsTopLevel={mockSubjects.accountingSubjects}
                        subjectsTree={mockSubjects.accountingSubjects}
                        onConfigLoaded={config => {
                            console.log('!!!!config = ', config);
                        }}
                        hasErrorInfo={true}
                        onDocChange={ data => {
                            this.setState({
                                docData: data
                            })
                        }}
                        onAccountTitleSubejctSelected={ subject => {
                            console.log('subject = ', subject);
                            this.setState({
                                docData: {
                                    ...this.state.docData,
                                    custom: {
                                        ...this.state.docData.custom,
                                        subjectTitle: subject
                                    }
                                }
                            })
                        }}
                        onAccountDetailSubjectSelected={ subject => {
                            console.log('subject = ', subject);
                            this.setState({
                                docData: {
                                    ...this.state.docData,
                                    custom: {
                                        ...this.state.docData.custom,
                                        subjectDetail: subject
                                    }
                                }

                            })
                        }}
                />
            </div>
        )
    }
}

ReactDOM.render((<Demo />), document.getElementById('app'));
//
//
// console.log('mockSubjects.accountingSubjects = ', mockSubjects.accountingSubjects);
//
// /**
//  * 根据obj生成一个新的obj对象副本，新的对象中不包括obj中的key属性，此函数不会修改旧的obj对象
//  * @param  {Object} obj
//  * @param  {String} key 要排除掉的属性
//  * @return {Object}     不包括key的新对象
//  */
// function excludePropertyOfObject(obj, key) {
//     if (!obj
//         || typeof obj !== 'object'
//         || !key
//         || typeof key !== 'string') {
//         return
//     }
//
//     return Object.keys(obj)
//     .filter(_key => {
//         return _key !== key
//     })
//     .reduce((sum, _key) => {
//         return {
//             ...sum,
//             [_key]: obj[_key]
//         }
//     }, {})
// }
//
// /**
//  * 如果科目设置了答案，但是children里面并未设置答案则将children过滤掉
//  * @param  {Array}  _children 科目的children
//  * @return {Object}
//  */
// function hasChildren(_children) {
//     const children = excludeSubjectsOfNoAnswer(_children)
//
//     if (!children || children.length === 0) {
//         return {}
//     }else {
//         return {
//             children
//         }
//     }
// }
// /**
//  * 过滤掉没有设置过答案的科目
//  * @param  {Array} _subjects 科目数组
//  * @return {Array}           过滤后的结果
//  */
// function excludeSubjectsOfNoAnswer(_subjects) {
//     if (!_subjects
//         || _subjects.length === 0) {
//         return _subjects
//     }
//
//     const subjects = _subjects.filter(subject => {
//         return subject.isAnswerSetted === 1
//     }).map(subject => {
//         return {
//             ...excludePropertyOfObject(subject, 'children'),
//             ...hasChildren(subject.children)
//         }
//     })
//
//     return subjects
// }
//
// console.log('after excludeSubjectsOfNoAnswer = ',excludeSubjectsOfNoAnswer(mockSubjects.accountingSubjects));
