import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PBUDocument from './container';
import mockData from './mock/mockData.json';
import { PBUDocumentDataInit } from './lib';

const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0066/config/djy0066.json";
// const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0089/config/DJY0089_1.json";

// Render
// ReactDOM.render((<PBUDocument configUrl={docConfigUrl}
//                                 mode='DATA_INIT'
//                                 // mode='EXAMINE_SET'
//                                 docCode='DJY0066'
//                                 docData={mockData.docData}
//                             />), document.getElementById('app'));

ReactDOM.render((<PBUDocumentDataInit docConfigUrl={docConfigUrl}
                                mode='DATA_INIT'
                                // mode='EXAMINE_SET'
                                docCode='DJY0066'
                                docData={mockData.docData}
                            />), document.getElementById('app'));
