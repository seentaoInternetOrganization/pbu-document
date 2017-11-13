/**
 * @author AngusC
 * @description 学生编辑单据区域
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DocBG from './background';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { AutoComplete, message, Tooltip, Checkbox, Radio, Select } from 'antd';
import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';
import { copyToShow, basicStyleOfItem, testNumber, canChange, filterValue } from './docUtils';
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
            if (item.constraint
                && item.constraint.padStart) {

                if (isEmpty(filterValue(item, value))) {
                    return onItemChange(item, value)
                }

                if (item.constraint.maxLength) {
                    onItemChange(item, filterValue(item, value).padStart(item.constraint.maxLength, item.constraint.padStart))
                }else {
                    onItemChange(item, value.startsWith(item.constraint.padStart) ? value : `${item.constraint.padStart}${value}`)
                }
            }else {
                onItemChange(item, value)
            }
        }
    }

    //元素自身的样式
    const styleOfItem = item => {
        if (!all[item.name]) {
            return basicStyleOfItem(item)
        }

        if (!hasErrorInfo) {
            return basicStyleOfItem(item)
        }

        if (errors
            && errors[item.name]) {
            return basicStyleOfItem(item, true, '#FFFF80')
        }else {
            return basicStyleOfItem(item)
        }
    }

    //渲染只读元素，包括Label
    const renderReadOnlyItem = (item, index) => {
        const value = valueToShow(item)

        if (!value && value !== '') {
            return null
        }

        if (item.type === ELEMENT.LABEL) {
            return (
                <span key={`readonly_${index}_${currentPage}`}
                    style={styleOfItem(item)}>
                    {value}
                </span>
            )
        }
        //非第一联展示原始颜色，第一联展示灰色
        if (currentCopy > 0) {
            return (
                <span key={`readonly_${index}_${currentPage}`}
                    style={{...styleOfItem(item)}}>
                    {value}
                </span>
            )
        }else {
            return (
                <span key={`readonly_${index}_${currentPage}`}
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
                        value={valueToShow(item) ? valueToShow(item) : ''}
                        onChange={e => {
                            onElementChange(item, e.target.value)
                        }}
                    />
        )
    }

    //渲染下拉选择元素
    const renderSelectItem = (item, index, dataSource) => {

        const styleOfSelect = {
            ...styleOfItem(item),
            top: styleOfItem(item).top - 4
        }

        const glaSubjectId = () => {
            if (item.type === ELEMENT.SL) {
                return all[item.gla].value || all[item.gla].data || all[item.gla].answer
            }
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
            >
                {dataSource.map(item => {
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
    }

    //渲染多行文本元素
    const renderTextareaItem = (item, index) => {
        const value = valueToShow(item);

        const style = {
            ...styleOfItem(item),
            resize: 'none',
        }

        return canEdit(item)
        ?
        (
            <textarea key={`textarea_${index}_${currentPage}`}
                    style={style}
                    value={value}
                    onChange={e => {
                        onElementChange(item, e.target.value)
                    }}
                />
        )
        :
        (
            <textarea key={`textarea_${index}_${currentPage}`}
                    style={style}
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
                            type="checkbox"
                            style={basicStyleOfItem(item)}
                        />
            )
        }else {
            return (
                <div key={`${item.name}_${index}_${currentPage}`}
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
