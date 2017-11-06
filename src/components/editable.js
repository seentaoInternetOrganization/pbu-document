/**
 * @author AngusC
 * @description 可编辑单据
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DocBG from './background';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { AutoComplete, message, Tooltip } from 'antd';
import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';
import isFloat from 'validator/lib/isFloat';
import { getDescendantantProp } from '../utils';
import { canChange } from './docUtils';
const Option = AutoComplete.Option;

const DocEditable = ({
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
    currentCopy,
    currentSubject,
    isDataInit,
    onBackgroundLoaded,
    custom,
}) => {
    //明细账输入时必须先输入总账科目
    const onSubjectDetailChange = (item, value) => {
        if (isDataInit) {
            if (all[item.gla]
                && all[item.gla].data
                && !isEmpty(all[item.gla].data)) {
                onSubjectChange(item, value, all[item.gla].data)
                return;
            }
        }else {
            if (all[item.gla]
                && all[item.gla].answer
                && !isEmpty(all[item.gla].answer)) {
                onSubjectChange(item, value, all[item.gla].answer)
            }
            return;
        }

        message.warning('请先选择总账科目');
        return;
    }

    const onElementChange = (item, value) => {
        if (canChange(item, value)) {
            onItemChange(item, value)
        }
    }

    const renderElements = () => {
        const elementNodes = Object.values(config[0].elements).map((item, index) => {
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

                if (item.type === ELEMENT.GLA
                    || item.type === ELEMENT.SL) {
                    if (currentSubject !== item.name) {
                        value = all[item.name].subjectName
                    }
                }
            }

            let readonly = {};
            //存在activityId且不是当前节点，则不可修改
            if ((all[item.name] && all[item.name].activityId
                && all[item.name].activityId !== activityId)
                || currentCopy > 0) {
                readonly = {
                    readOnly: 'readonly',
                    disabled: true
                }
            }

            let highlightOpt = {
                color: 'rgba(0, 0, 0, 0.25)'
            };
            //有本节点设置的预置数据或答案的话此元素高亮
            if (all[item.name]
                && all[item.name].activityId
                && all[item.name].activityId === activityId) {

                if (isDataInit
                    && all[item.name].answer
                    && !isEmpty(all[item.name].answer)) {
                        readonly = {
                            readOnly: 'readonly',
                            disabled: true
                        }
                }else if (!isDataInit
                            && all[item.name].data
                            && !isEmpty(all[item.name].data)) {
                            readonly = {
                                readOnly: 'readonly',
                                disabled: true
                            }
                }else {
                    highlightOpt = {
                        color: 'unset'
                    }
                }
            }else {
                highlightOpt = {
                    color: 'rgba(0, 0, 0, 0.25)'
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
                                        onElementChange(item, e.target.value)
                                    }}
                                />
                    )
                    break;

                case ELEMENT.GLA:
                    return (
                        <AutoComplete key={`${item.name}_${index}`}
                            name={item.name}
                            // dataSource={glas}
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
                            onSearch={value => onSubjectChange(item, value)}
                            onSelect={value => onSubjectBlur(glas, item, value)}
                            onBlur={value => onSubjectBlur(glas, item, value)}
                        >
                            {glas.map(item => {
                                return (
                                    <Option key={item.value}>
                                        <Tooltip title={item.text}>
                                            {item.text}
                                        </Tooltip>
                                    </Option>
                                )
                            })}
                        </AutoComplete>
                    )
                    break;

                case ELEMENT.SL:

                    if (isDataInit) {
                        if (all[item.gla]
                            && all[item.gla].data
                            && !isEmpty(all[item.gla].data)) {
                                readonly = {
                                    ...readonly
                                }
                        }else {
                            readonly = {
                                readOnly: 'readonly',
                                disabled: true
                            }
                        }

                    }else {
                        if (all[item.gla]
                            && all[item.gla].answer
                            && !isEmpty(all[item.gla].answer)) {
                                readonly = {
                                    ...readonly
                                }
                        }else {
                            readonly = {
                                readOnly: 'readonly',
                                disabled: true
                            }
                        }
                    }

                    return (
                        <AutoComplete key={`${item.name}_${index}`}
                            name={item.name}
                            // dataSource={sls}
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
                            onSearch={value => onSubjectDetailChange(item, value)}
                            onSelect={value => onSubjectBlur(sls, item, value)}
                            onBlur={value => onSubjectBlur(sls, item, value)}
                        >
                            {sls.map(item => {
                                return (
                                    <Option key={item.value}>
                                        <Tooltip title={item.text}>
                                            {item.text}
                                        </Tooltip>
                                    </Option>
                                )
                            })}
                        </AutoComplete>
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

                case ELEMENT.LABEL:
                    return (
                        <span key={`${item.name}_${index}`}
                            name={item.name}
                            style={{
                                left: pos.left * ratioWidth,
                                top: pos.top * ratioHeight,
                                width: pos.width * ratioWidth,
                                height: pos.height * ratioHeight,
                                ...item.style
                            }}>
                                {item.textValue && item.textValue}
                                {
                                    item.equalTo
                                    && getDescendantantProp(custom, item.equalTo)
                                    && getDescendantantProp(custom, item.equalTo)
                                }
                            </span>
                    )
                    break;

                case ELEMENT.TEXT_AREA:
                    return (
                        <textarea key={`${item.name}_${index}`}
                                    name={item.name}
                                    style={{
                                        left: pos.left * ratioWidth,
                                        top: pos.top * ratioHeight,
                                        width: pos.width * ratioWidth,
                                        height: pos.height * ratioHeight,
                                        resize: 'none',
                                        ...highlightOpt,
                                        ...item.style
                                    }}
                                    {...readonly}
                                    value={value}
                                    onChange={e => {
                                        onElementChange(item, e.target.value)
                                    }}
                                />
                    )
                    break;
            }
        })

        return elementNodes;
    }

    return (
        <DocBG className={bgClassName}
              ratioWidth={ratioWidth}
              ratioHeight={ratioHeight}
              currentCopy={currentCopy}
              onBackgroundLoaded={onBackgroundLoaded}
              config={config}>
            {renderElements()}
        </DocBG>
    )
}

export default DocEditable;

DocEditable.propTypes = {
    mode: PropTypes.oneOf([MODE.DATA_INIT, MODE.ANSWER_SET]),
    config: PropTypes.array.isRequired,
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
    currentCopy: PropTypes.number,
    onBackgroundLoaded: PropTypes.func,
}

DocEditable.defaultProps = {
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
    currentCopy: 0,
    onBackgroundLoaded: () => {}
}
