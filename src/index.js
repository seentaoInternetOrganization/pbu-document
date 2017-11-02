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
import { Button } from 'antd';

// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0066/config/djy0066.json";
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0089/config/DJY0089.json";
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0071/config/DJY0071.json"
const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0064/config/DJY0064.json"
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0067/config/DJY0067.json"
// const docConfigUrl = "http://47.93.23.65:8080/stest/document.sales";


// Render
// ReactDOM.render((<PBUDocument configUrl={docConfigUrl}
//                                 mode='DATA_INIT'
//                                 // mode='EXAMINE_SET'
//                                 docCode='DJY0066'
//                                 docData={mockData.docData}
//                             />), document.getElementById('app'));

// ReactDOM.render((<PBUDocumentDataInit docConfigUrl={docConfigUrl}
//                                 docCode='DJY0066'
//                                 docData={mockData.docData}
//                                 totalPage={3}
//                                 activityId='18bcf3382fa8c93d'
//                             />), document.getElementById('app'));
// ReactDOM.render((<PBUDocumentExamineSet docConfigUrl={docConfigUrl}
//                                         docCode='DJY0066'
//                                         loading={false}
//                                     />), document.getElementById('app'))
let currentCopy = 0;

function onCopyChange(copy) {
    console.log('copy = !!! ', copy);
    currentCopy = copy;
}

class Demo extends Component {
    state = {
        currentCopy: 0,
        subjectTotals: [],
        // docData: {
        //     examines: []
        // },
        docData: mockData.docData,
        empty: true,
    }

    onCopyChange = (copy) => {
        this.setState({
            currentCopy: copy
        })
    }

    onSearchSubjects = (value, subjectId) => {
        console.log('value = ', value, ' subjectId = ', subjectId);

        setTimeout(() => {
            this.setState({
                subjectTotals: mockSubjects.accountingSubjects
            })
        }, 500);
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
                <div style={{ display: 'inline-block', width: 100, height: 100 }}/>
                {/* <Button type='primary' onClick={() => {
                    this.setState({
                        empty: !this.state.empty,
                        docData: this.state.empty ? { all: {}, data: []} : mockData.docData
                    })
                }}>切换</Button> */}
                <PBUDocumentAnswerSet docConfigUrl={docConfigUrl}
                                            docCode='DJY0066'
                                            docData={this.state.docData}
                                            activityId='18bcf3382fa8c93d'
                                            currentCopy={currentCopy}
                                            onCopyChange={this.onCopyChange}
                                            subjectTotals={this.state.subjectTotals}
                                            onSearchSubjects={this.onSearchSubjects}
                                            subjectsTopLevel={mockSubjects.accountingSubjects}
                                            subjectsTree={mockSubjects.accountingSubjects}
                                            answerDesc={'哈哈哈哈'}
                                            uploadProps={{...uploadProps}}
                                            totalPage={2}
                                            onDocChange={ data => {
                                                this.setState({
                                                    docData: data
                                                })
                                            }}
                                            // loading={true}
                                        />
                                        {/* <PBUDocumentExamineSet docConfigUrl={docConfigUrl}
                                                                                docCode='DJY0066'
                                                                                loading={false}
                                                                                docData={mockData.docData}
                                                                            /> */}
                                                                            {/* <div style={{ display: 'inline-block'}}>
                                        <PBUDocumentPreview docConfigUrl={docConfigUrl}
                                            docData={mockData.docData}/>
                                        </div> */}
                                        {/* <PBUDocumentDataInit docConfigUrl={docConfigUrl}
                                                                        docCode='DJY0066'
                                                                        docData={mockData.docData}
                                                                        totalPage={3}
                                                                        activityId='18bcf3382fa8c93d'
                                                                    /> */}
                                        {/* <PBUDocumentData docConfigUrl={docConfigUrl}
                                            docData={mockData.docData}
                                            visibleSheet={'1,1,1,'}
                                            activityId='18bcf3382fa8c93' /> */}
                                        {/* <div style={{ display: 'inline-block' }}>
                                            <PBUDocumentAnswer docConfigUrl={docConfigUrl}
                                                docData={mockData.docData}
                                                subjectsTopLevel={mockSubjects.accountingSubjects}
                                                subjectsTree={mockSubjects.accountingSubjects}
                                                activityId='18bcf3382fa8c93' />
                                        </div> */}
                                        {/* <PBUDocumentEdit
                                            docConfigUrl={docConfigUrl}
                                                docCode='DJY0066'
                                                docData={this.state.docData}
                                                activityId='18bcf3382fa8c93d'
                                                subjectTotals={this.state.subjectTotals}
                                                onSearchSubjects={this.onSearchSubjects}
                                                subjectsTopLevel={mockSubjects.accountingSubjects}
                                                subjectsTree={mockSubjects.accountingSubjects}
                                                hasErrorInfo={true}
                                                onDocChange={ data => {
                                                    console.log('data = ', data);
                                                    this.setState({
                                                        docData: data
                                                    })
                                                }}
                                        /> */}
                                    </div>
        )
    }
}

ReactDOM.render((<Demo />), document.getElementById('app'));
