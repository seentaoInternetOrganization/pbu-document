/**
 * @author AngusC
 * @description 单据科目PopoverView
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './accountSubject.less';
import { Popover, Table, Button } from 'antd';

const AccountSubjectPopover = ({
    subjectsTopLevel,
    subjectsTree,
    onAccountDetailRowClicked,
    onAccountTitleSelected,
    isDataInit,
    currentAccountTitle,
    config,
    visible,
    normalEdit,
    onBlur,
    hasErrorInfo,
}) => {

    const childrenGenerator = children => {
        const nodes = children.map((item, index) => {
            const node = {
                key: `child_${item.subjectId}_${index}`,
                childSubjectCode: item.subjectCode,
                subjectName: item.subjectName,
                subjectId: item.subjectId,
                isAnswerSetted: item.isAnswerSetted,
                isInitDataSetted: item.isInitDataSetted,
            }

            let childrenOpt = {};

            if (children.children) {
                childrenOpt = {
                    children: childrenGenerator(children.children)
                }
            }

            return {
                ...node,
                ...childrenOpt
            }
        })

        return nodes;
    }

    if (config[0].hasSubject) {
        const subjectNodes = subjectsTopLevel.map((subject, index) => {

            const data = Array.isArray(subjectsTree) ? subjectsTree.map((item, index) => {
                let childrenOpt = {};

                if (item.children) {
                    const childrenNodes = childrenGenerator(item.children)

                    childrenOpt = {
                        children: childrenNodes
                    }
                }

                return {
                    key: index,
                    subjectCode: item.subjectCode,
                    subjectName: item.subjectName,
                    subjectId: item.subjectId,
                    isAnswerSetted: item.isAnswerSetted,
                    isInitDataSetted: item.isInitDataSetted,
                    ...childrenOpt
                }
            }) : [];

            const renderCell = (text, record, index) => {

                if (record.children) {
                    return text;
                }

                if (normalEdit) {

                    if (hasErrorInfo
                        && record.isAnswerSetted
                        && !record.isAnswered) {
                        return <span style={{ background: '#FFFF80' }}>{text}</span>
                    }

                    return text
                }

                if (isDataInit) {
                    if (record.isInitDataSetted) {
                        return text;
                    }
                }else {
                    if (record.isAnswerSetted) {
                        return text;
                    }
                }

                return <span style={{ color: 'rgba(0, 0, 0, 0.25)' }}>{text}</span>
            }

            const columns = [
                {
                    title: (
                        <span style={{ visibility: 'hidden' }}>e</span>
                    ),
                    key: 'e',
                    width: 10
                },
                {
                    title: ( <span style={{ textAlign: 'center' }}>{'科目编码'}</span> ),
                    key: 'subjectCode',
                    dataIndex: 'subjectCode',
                    render: renderCell
                },
                {
                    title: ( <span style={{ visibility: 'hidden' }}>科目编码</span> ),
                    key: 'childSubjectCode',
                    dataIndex: 'childSubjectCode',
                    render: renderCell
                },
                {
                    title: '科目名称',
                    dataIndex: 'subjectName',
                    key: 'subjectName',
                    render: renderCell
                },
            ]

            const title = (
                <div className={styles.subject_title}>{subject.subjectName}</div>
            )

            const content = (
                <div style={{
                    width: 370,
                    height: 256,
                    overflow:'scroll'
                }}>
                    <Table
                        loading={subjectsTree === 'loading'}
                        size={'small'}
                        columns={columns}
                        dataSource={data}
                        pagination={false}
                        bordered={true}
                        onRowClick={onAccountDetailRowClicked}
                    />
                </div>
            )

            return (
                <Popover key={`${subject.subjectId}_${index}`}
                        title={title}
                        style={{ height:256, width:370 }}
                        onVisibleChange={visible => {
                            onAccountTitleSelected(subject)
                        }}
                        content={content}>
                    <Button type="ghost">
                        {subject.subjectName}
                        <span className={styles.arrow}></span>
                    </Button>
                </Popover>
            )
        });

        return (
            <div className={normalEdit ? styles.normal : styles.subject}>
                {subjectNodes}
            </div>
        )
    }

    return null;

}

export default AccountSubjectPopover;
