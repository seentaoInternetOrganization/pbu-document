/**
 * @author AngusC
 * @description 编辑权重头部
 */

import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './editWeight.css';
import reactComposition from 'react-composition';
import { EXAMINE } from '../constants';
import { Button } from 'antd';

/**
 * 对象转入examines中
 * @param  {[type]} groups   [description]
 * @param  {[type]} examines [description]
 * @return {[type]}          [description]
 */
function groupsToExamines(groups, examines) {
    if (!groups || !Array.isArray(examines)) {
        return;
    }

    Object.values(groups).forEach((item, index) => {
        if (item.examineType) {
            examines.push(item);
        }else {
            groupsToExamines(item, examines);
        }
    })
}

/**
 * 对all分组
 * @param  {[type]} all    [description]
 * @param  {[type]} groups [description]
 * @return {[type]}        [description]
 */
function groupAll(all, groups) {
    if (!all || !groups) {
        return;
    }

    /**
     * 先根据examineId 进行分组，如果是examineType为MULTI_LINE的话，则同行为一组
     */
    Object.values(all).forEach((item, index) => {
        switch (item.examineType) {
            case EXAMINE.MULTI_ELM:
                if (!groups.hasOwnProperty(item.examineId)) {
                    //去除不必要的item.element项
                    groups[item.examineId] = {
                        examineType:item.examineType,
                        examineId:item.examineId,
                        examineName:item.examineName
                    };
                }
                groups[item.examineId][item.element.name] = item.weight;
                break;

            case EXAMINE.MULTI_LINE:
                if (!(groups.hasOwnProperty(item.examineId)
                    && groups[item.examineId].hasOwnProperty(`row${item.element.table.row}`))) {
                    groups[item.examineId] = {
                        ...groups[item.examineId]
                    };
                    groups[item.examineId][`row${item.element.table.row}`] = {
                        examineType:item.examineType,
                        examineId:item.examineId,
                        examineName:item.examineName
                    }

                    if (!groups[item.examineId][`row${item.element.table.row}`].hasOwnProperty('sortOrder')) {
                        groups[item.examineId][`row${item.element.table.row}`]['sortOrder'] = [];
                    }
                }
                groups[item.examineId][`row${item.element.table.row}`]['sortOrder'].push(item.element.name);
                groups[item.examineId][`row${item.element.table.row}`][item.element.name] = item.weight;
                break;

            case EXAMINE.SINGLE:
            case EXAMINE.SETTLEMENT:
                if (!groups.hasOwnProperty(item.examineId)) {
                    groups[item.examineId] = {};
                }

                if (!groups[item.examineId].hasOwnProperty(item.element.name)) {
                    groups[item.examineId][item.element.name] = {};
                }

                groups[item.examineId][item.element.name] = {
                    examineType:item.examineType,
                    examineId:item.examineId,
                    examineName:item.examineName
                }

                groups[item.examineId][item.element.name][item.element.name] = item.weight;
                break;

        }
    });
}

/**
 * 生成新的all，剔除element
 * @param  {[type]} all      [description]
 * @return {[type]}          [description]
 */
function examinesToAll(all) {
    if (!all) {
        return;
    }

    const newAll = {};
    Object.values(all).forEach(item => {
        newAll[item.element.name] = {
            examineType:item.examineType,
            examineId:item.examineId,
            examineName:item.examineName,
            weight: item.weight
        }
    })

    return newAll;
}

const EditWeightHeader = ({
    config,
    all,
    selectedTag,
    editTagId,
    editTempValue,
    onSave,
    onClearAll,
    onSelectTags,
    onTagDoubleClick,
    onTagBlur,
    onRemoveByTagId,
    onEditTag,
    loading
}) => {

    const onSaveClick = () => {
        const examines = [];
        const groups = {};


        groupAll(all, groups);
        groupsToExamines(groups, examines);
        const newAll = examinesToAll(all);
        const data = {
            all: newAll,
            examines: examines
        };
        console.log('data = ', JSON.stringify(data));
        onSave(data);
    }

    const renderTags = () => {
        const temp = [];
        Object.values(all).forEach((item, index) => {
            if (temp.findIndex(o => {
                return o.examineId === item.examineId;
            }) !== -1) {
                return;
            }

            temp.push(item);
        })

        let tagLength = 0;
        const tagNodes = temp.map((item, index) => {
            let className = item.examineId === selectedTag ? styles.highlight : styles.tag;
            tagLength = tagLength + item.examineName.length;

            return (
                <li key={`${item.examineId}_${index}`}
                    className={className}
                    onClick={() => {
                        onSelectTags(item.examineId)
                    }}
                    onDoubleClick={() => {
                        onTagDoubleClick(item.examineId, item.examineName)
                    }}
                >
                    {
                        editTagId === item.examineId
                        ?
                        <input
                            value={editTempValue}
                            onKeyPress={e => {
                                if (e.key === 'Enter') {
                                    onTagBlur();
                                }
                            }}
                            onBlur={onTagBlur}
                                {...reactComposition({
                                    onChange: onEditTag
                                })}
                             />
                        :
                        <b>
                            {item.examineName}
                        </b>
                    }

                    <span className={styles.delete} onClick={e => {
                        e.stopPropagation();
                        onRemoveByTagId(item.examineId)
                    }}>
                        <i className={styles.iconfont}/>
                    </span>
                </li>
            )
        })

        return (
            <div className={styles.menus}>
                {tagLength > 30 && <span className={styles.pre}><i className={styles.iconfont}/></span>}
                <div>
                    <ul>
                        {tagNodes}
                    </ul>
                </div>
                {tagLength > 30 && <span className={styles.next}><i className={styles.iconfont}/></span>}
            </div>
        )
    }

    return (
        <div className={styles.sub_nav}>
            <h2>{config.title}</h2>
                {renderTags()}
            <div className={styles.btn_group}>
                <Button type='ghost' className={styles.clear} onClick={onClearAll}>清除</Button>
                <Button type='primary' onClick={onSaveClick} loading={loading}>保存</Button>
            </div>
        </div>
    )
}

export default EditWeightHeader;
