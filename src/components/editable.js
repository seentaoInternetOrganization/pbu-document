/**
 * @author AngusC
 * @description 可编辑单据
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DocBG from './background';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { AutoComplete } from 'antd';

const EditableDoc = ({
    config,
    all,
    glas,
    sls,
    ratioHeight,
    ratioWidth,
    bgClassName,
    onSubjectChange,
    onSubjectBlur,
    onItemChange,
    mode,
    activityId,
}) => {

    const onElementChange = (item, value) => {
        let data;

        if (item.constraint) {
            //暂时先只考虑这几种情况
            switch (item.type) {
                case ELEMENT.INTEGER:
                    data = parseInt(value)
                    break;
                case ELEMENT.FLOAT:
                    data = parseFloat(value)
                    break;
                default:
                    data = value
                    break;
            }

            if (item.constraint
                && item.constraint.maxValue
                && parseFloat(value) > item.constraint.maxValue) {
                data = '';
            }

            if (item.constraint
                &&item.constraint.minValue
                && parseFloat(value) < item.constraint.minValue) {
                data = '';
            }

        }else {
            data = value;
        }

        onItemChange(item, data);
    }

    const renderElements = () => {
        const elementNodes = Object.values(config.elements).map((item, index) => {
            const { pos } = item;
            let value = '';

            if (all[item.name]) {
                //如果此字段存在answer，则展示answer
                if (all[item.name].answer) {
                    value = all[item.name].answer;
                }
                //如果此字段同时存在预置数据，则预置数据优先
                if (all[item.name].data) {
                    value = all[item.name].data;
                }
            }

            let readonly = {};

            if (mode === MODE.ANSWER_SET
                && all[item.name]
                && all[item.name].data) {
                readonly = {
                    readOnly: 'readonly',
                    disabled: true
                }
            }

            let highlightOpt = {
                backgroundColor: 'none'
            };

            if (all[item.name]
                && !all[item.name].data
                && all[item.name].answer
                && all[item.name].activityId === activityId) {
                highlightOpt = {
                    backgroundColor: '#3DCC61'
                }
            }

            switch (item.type) {
                case ELEMENT.INPUT:
                case ELEMENT.INTEGER:
                case ELEMENT.FLOAT:
                    return (
                        <input key={`${item.name}_${index}`}
                                    name={item.name}
                                    style={{
                                        left: pos.left * ratioWidth,
                                        top: pos.top * ratioHeight,
                                        width: pos.width * ratioWidth,
                                        height: pos.height * ratioHeight,
                                        ...highlightOpt,
                                        ...item.style
                                    }}
                                    {...readonly}
                                    value={value}
                                    onChange={e => {
                                        onItemChange(item, e.target.value)
                                    }}
                                />
                    )
                    break;

                case ELEMENT.GLA:
                    return (
                        <AutoComplete key={`${item.name}_${index}`}
                            name={item.name}
                            dataSource={glas}
                            value={value}
                            style={{
                                left: pos.left * ratioWidth,
                                top: (pos.top - 4) * ratioHeight,
                                width: pos.width * ratioWidth,
                                height: pos.height * ratioHeight,
                                ...highlightOpt,
                                ...item.style
                            }}
                            {...readonly}
                            onChange={value => onSubjectChange(item, value)}
                            onBlur={value => onSubjectBlur(glas, item, value)}
                        />
                    )
                    break;

                case ELEMENT.SL:
                    return (
                        <AutoComplete key={`${item.name}_${index}`}
                            name={item.name}
                            dataSource={sls}
                            value={value}
                            style={{
                                left: pos.left * ratioWidth,
                                top: (pos.top - 4) * ratioHeight,
                                width: pos.width * ratioWidth,
                                height: pos.height * ratioHeight,
                                ...highlightOpt,
                                ...item.style
                            }}
                            {...readonly}
                            onChange={value => onSubjectChange(item, value, all[item.gla] && all[item.gla].data ? all[item.gla].data : '' )}
                            onBlur={value => onSubjectBlur(sls, item, value)}
                        />
                    )
                    break;

                case ELEMENT.CHECK_BOX:
                    return (
                        <input key={`${item.name}_${index}`}
                                    type="checkbox"
                                    style={{
                                        left: pos.left * ratioWidth,
                                        top: pos.top * ratioHeight,
                                        width: pos.width * ratioWidth,
                                        height: pos.height * ratioHeight,
                                        ...item.style
                                    }}
                                />
                    )
                    break;

                case ELEMENT.ACCOUNT:

                    break;

                case ELEMENT.TEXT_AREA:

                    break;
            }
        })

        return elementNodes;
    }

    return (
        <DocBG className={bgClassName}
              ratioWidth={ratioWidth}
              ratioHeight={ratioHeight}
              config={config}>
            {renderElements()}
        </DocBG>
    )
}

export default EditableDoc;

EditableDoc.propTypes = {
    mode: PropTypes.oneOf([MODE.DATA_INIT, MODE.ANSWER_SET]),
    config: PropTypes.object.isRequired,
    all: PropTypes.object,
    glas: PropTypes.array,
    sls: PropTypes.array,
    ratioHeight: PropTypes.number,
    ratioWidth: PropTypes.number,
    bgClassName: PropTypes.string,
    onSubjectChange: PropTypes.func,
    onSubjectBlur: PropTypes.func,
    onItemChange: PropTypes.func,
    activityId: PropTypes.string.isRequired,
}

EditableDoc.defaultProps = {
    mode: MODE.DATA_INIT,
    all: {},
    glas: [],
    sls: [],
    ratioHeight: 1,
    ratioWidth: 1,
    onSubjectChange: () => {},
    onSubjectBlur: () => {},
    onItemChange: () => {},
    activityId: 'ERR_ACTIVITY_ID',
}
