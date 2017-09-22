import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PBUDocument from './container';
import mockData from './mock/mockData.json';

const docConfigUrl = "https://oss-public.seentao.com/webapps/pbu_document/DJY0066/config/djy0066.json";
// Render
ReactDOM.render((<PBUDocument configUrl={docConfigUrl}
                                mode='DATA_INIT'
                                // mode='EXAMINE_SET'
                                docCode='DJY0066'
                                docData={mockData.docData}
                            />), document.getElementById('app'));
