/**
 * @author AngusC
 * @description 学生编辑单据区域
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DocBG from './background';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE, DOC_TYPE } from '../constants';
import { AutoComplete, message, Tooltip, Checkbox, Radio, Select, Input } from 'antd';
import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';
import { copyToShow, basicStyleOfItem, testNumber, canChange, filterValue, formatValueOfItem } from './docUtils';
const Option = AutoComplete.Option;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

const DocEditor = ({
    config,
    docData,
    glas,
    sls,
    ratioHeight,
    ratioWidth,
    bgClassName,
    onItemChange,
    activityId,
    currentCopy,
    currentSubject,
    hasErrorInfo,
    onSubjectSearch,
    onSubjectSelected,
    onSubjectBlur,
    editable,
    disabledColor,
    valueToShow,
    canEdit,
    currentPage,
}) => {

    const { all, errors } = docData;

    //元素onChange监听
    const onElementChange = (item, value) => {
        if (canChange(item, value)) {
            if (item.constraint) {
                if (isEmpty(filterValue(item, value))) {
                    return onItemChange(item, value)
                }

                if (item.constraint.padStart) {
                    if (item.constraint.maxLength) {
                        onItemChange(item, filterValue(item, value).padStart(item.constraint.maxLength, item.constraint.padStart))
                        return
                    }else {
                        const _value = formatValueOfItem(item, filterValue(item, value))
                        onItemChange(item, `${item.constraint.padStart}${_value}`)
                        return
                    }
                }
            }

            const _value = formatValueOfItem(item, value)
            onItemChange(item, _value)
        }
    }

    const onElementBlur = (item, value) => {
        if (isEmpty(value)) {
            return
        }
        //只处理浮点型
        if (item.type === ELEMENT.FLOAT) {
            if (item.constraint) {
                if (item.constraint.padStart) {
                    const _value = parseFloat(filterValue(item, value))
                                    .toFixed(item.constraint && item.constraint.toFixed)
                                    .toString()
                    onItemChange(item, `${item.constraint.padStart}${_value}`)
                    return
                }else if (item.constraint.localeFormatWith) {
                    const _value = Number(value.replace(/[^0-9\.-]+/g,""));
                    onItemChange(item, _value.toLocaleString(item.constraint.localeFormatWith.locales, item.constraint.localeFormatWith.options))
                    return
                }
            }

            const _value = parseFloat(filterValue(item, value))

            if (item.constraint && item.constraint.toFixed) {
                onItemChange(item, _value.toFixed(item.constraint && item.constraint.toFixed).toString())
                return
            }
            onItemChange(item, _value.toString())
            return
        }else if (item.type === ELEMENT.INPUT
            || item.type === ELEMENT.TEXT_AREA) {
            onItemChange(item, value.trim())
        }
    }

    //元素自身的样式
    const styleOfItem = item => {
        const wrapperStyles = (_item) => {

            if (hasErrorInfo
                && errors
                && errors.indexOf(_item.name) !== -1) {
                return basicStyleOfItem(_item, true, '#FFFF80')
            }

            if (!all[_item.name]) {
                return basicStyleOfItem(_item)
            }

            if (!hasErrorInfo) {
                return basicStyleOfItem(_item)
            }

            return basicStyleOfItem(_item)
        }

        /**
         * 可编辑状态的下拉搜索选择和TEXT_AREA不需要overflow, textOverflow和whiteSpace属性
         */
        if ((item.type === ELEMENT.GLA
            || item.type === ELEMENT.SL) && canEdit(item)) {
            return wrapperStyles(item)
        }

        if (item.type === ELEMENT.TEXT_AREA) {
            return wrapperStyles(item)
        }

        return {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            ...wrapperStyles(item),
        }
    }

    //渲染只读元素，包括Label
    const renderReadOnlyItem = (item, index) => {
        const value = valueToShow(item)

        if (item.type === ELEMENT.LABEL) {

            if (!value
                && value !== ''
                && (!config[0].docType || config[0].docType === DOC_TYPE.DEFAULT)) {
                return null
            }

            return (
                <span key={`readonly_${index}_${currentPage}`}
                    title={value}
                    style={styleOfItem(item)}>
                    {value}
                </span>
            )
        }
        //非第一联展示原始颜色，第一联展示灰色
        if (currentCopy > 0) {
            return (
                <span key={`readonly_${index}_${currentPage}`}
                    name={item.name}
                    title={value}
                    style={{...styleOfItem(item)}}>
                    {value}
                </span>
            )
        }else {
            return (
                <span key={`readonly_${index}_${currentPage}`}
                    name={item.name}
                    title={value}
                    style={{...styleOfItem(item), ...disabledColor}}>
                    {value}
                </span>
            )
        }
    }

    //渲染普通文本输入框
    const renderNormalItem = (item, index) => {
        return (
            <input key={`${item.name}_${index}_${currentPage}`}
                        name={item.name}
                        style={styleOfItem(item)}
                        title={valueToShow(item) ? valueToShow(item) : ''}
                        value={valueToShow(item) ? valueToShow(item) : ''}
                        onChange={e => {
                            onElementChange(item, e.target.value)
                        }}
                        onBlur={e => {
                            onElementBlur(item, e.target.value)
                        }}
                    />
        )
    }

    //渲染下拉选择元素
    const renderSelectItem = (item, index, dataSource) => {

        const styleOfSelect = {
            ...styleOfItem(item),
            top: styleOfItem(item).top - 4,
            fontSize: 'inherit',
        }

        const glaSubjectId = () => {
            if (item.type === ELEMENT.SL) {
                return all[item.gla].value || all[item.gla].data || all[item.gla].answer
            }
        }

        const renderOption = option => {
            return (
                <Option key={option.value}>
                    <Tooltip title={option.text}>
                        {option.text}
                    </Tooltip>
                </Option>
            )
        }

        return (
            <AutoComplete key={`${item.name}_${index}_${currentPage}`}
                name={item.name}
                value={valueToShow(item)}
                style={styleOfSelect}
                onSearch={value => {
                    onSubjectSearch(item, value, glaSubjectId())
                }}
                onSelect={(value, option) => {
                    onSubjectSelected(item, value, {
                        text: option.props.children.props.children,
                        value: value
                    })
                }}
                onBlur={value => {
                    onSubjectBlur(item, value, dataSource)
                }}
                dataSource={dataSource.map(renderOption)}
            >
                <input key={`${item.name}_${index}_${currentPage}`}
                    style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
                    onFocus={e => {
                        onSubjectSearch(item, '', glaSubjectId())
                    }}
                    name={item.name}
                    title={valueToShow(item)}/>
            </AutoComplete>
        )
    }

    //渲染多行文本元素
    const renderTextareaItem = (item, index) => {
        const value = valueToShow(item) ? valueToShow(item) : '';

        const style = {
            ...styleOfItem(item),
            resize: 'none',
        }

        return canEdit(item)
        ?
        (
            <textarea key={`textarea_${item.name}_${index}_${currentPage}`}
                    name={item.name}
                    style={style}
                    value={value}
                    onChange={e => {
                        onElementChange(item, e.target.value)
                    }}
                />
        )
        :
        (
            <textarea key={`textarea_${item.name}_${index}_${currentPage}`}
                    name={item.name}
                    style={{...style, ...disabledColor}}
                    value={value}
                    readOnly={'readonly'}
                    onChange={e => {
                        onElementChange(item, e.target.value)
                    }}
                />
        )
    }

    //复选框
    const renderCheckBox = (item, index) => {
        if (!item.options) {
            return (
                <input key={`${item.name}_${index}_${currentPage}`}
                            name={item.name}
                            type="checkbox"
                            style={basicStyleOfItem(item)}
                        />
            )
        }else {
            return (
                <div key={`${item.name}_${index}_${currentPage}`}
                    name={item.name}
                    style={basicStyleOfItem(item)}>
                    <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                        <CheckboxGroup options={item.options}
                                    disabled={!canEdit(item)}
                                    value={valueToShow(item)}
                                onChange={value => onElementChange(item, value)}
                        />
                    </div>
                </div>
            )
        }
    }

    //单选框
    const renderRadio = (item, index) => {
        return (
            <div key={`${item.name}_${index}_${currentPage}`}
                name={item.name}
                style={basicStyleOfItem(item)}>
                <RadioGroup style={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}  disabled={!canEdit(item)}
                    value={valueToShow(item)}
                    onChange={e => onElementChange(item, e.target.value)}
                    options={item.options}/>
            </div>
        )
    }

    //下拉选择框
    const renderSelect = (item, index) => {
        const renderOptions = options => {
            if (!options) {
                return null
            }

            return options.map(option => {
                return (
                    <Option key={option}
                            value={option}>
                            {option}
                        </Option>
                )
            })
        }

        return (
            <Select key={`${item.name}_${index}_${currentPage}`}
                    disabled={!canEdit(item)}
                    value={valueToShow(item)}
                    allowClear={true}
                    onChange={value => onElementChange(item, value ? value : '')}
                    style={basicStyleOfItem(item)}>
                {renderOptions(item.options)}
            </Select>
        )
    }

    //渲染元素们
    const renderElements = () => {

        const copy = copyToShow(config, currentCopy)

        const elementNodes = Object.values(config[copy].elements).map((item, index) => {

            switch (item.type) {
                case ELEMENT.INPUT:
                case ELEMENT.INTEGER:
                case ELEMENT.FLOAT:
                    return canEdit(item) ? renderNormalItem(item, index) : renderReadOnlyItem(item, index)
                    break;

                case ELEMENT.GLA:
                    return canEdit(item) ? renderSelectItem(item, index, glas) : renderReadOnlyItem(item, index)
                    break;
                case ELEMENT.SL:
                    return canEdit(item) ? renderSelectItem(item, index, sls) : renderReadOnlyItem(item, index)
                    break;

                case ELEMENT.LABEL:
                    return renderReadOnlyItem(item, index)
                    break;

                case ELEMENT.TEXT_AREA:
                    return renderTextareaItem(item, index)
                    break;
                case ELEMENT.CHECK_BOX:
                    return renderCheckBox(item, index)
                    break;

                case ELEMENT.RADIO:
                    return renderRadio(item, index)
                    break

                case ELEMENT.SELECT:
                    return renderSelect(item, index)
                    break;
            }
        });

        return elementNodes;
    }

    return (
        <DocBG className={bgClassName}
              ratioWidth={ratioWidth}
              ratioHeight={ratioHeight}
              currentCopy={currentCopy}
              config={config}>
            {renderElements()}
        </DocBG>
    )
}

export default DocEditor;

DocEditor.propTypes = {
    config: PropTypes.array,
    docData: PropTypes.object,
    glas: PropTypes.array,
    sls: PropTypes.array,
    ratioHeight: PropTypes.number,
    ratioWidth: PropTypes.number,
    bgClassName: PropTypes.string,
    onItemChange: PropTypes.func,
    activityId: PropTypes.string,
    currentCopy: PropTypes.number,
    hasErrorInfo: PropTypes.bool,
    onSubjectSearch: PropTypes.func,
    onSubjectSelected: PropTypes.func,
    onSubjectBlur: PropTypes.func,
    disabledColor: PropTypes.object,
    canEdit: PropTypes.func,
    valueToShow: PropTypes.func,
}

DocEditor.defaultProps = {
    onItemChange: (item, value) => {
        console.log('value = ', value);
    },
    editable: true,
    hasErrorInfo: false,
    disabledColor: {},
    canEdit: () => {},
    valueToShow: () => {},
    currentPage: 1,
}
