/**
 * @author AngusC
 * @description 学生编辑单据区域
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import DocBG from './background';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';
import { AutoComplete, message } from 'antd';
import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';
import isDecimal from 'validator/lib/isDecimal';
import { getDescendantantProp } from '../utils';
import { copyToShow, basicStyleOfItem, testNumber, canChange } from './docUtils';

const DocValues = ({
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
}) => {

    const { all } = docData;
    //要展示的value
    const valueToShow = item => {

        if (item.type === ELEMENT.LABEL) {
            if (item.textValue) {
                return item.textValue
            }else if (item.equalTo
                    && docData.custom
                    && getDescendantantProp(docData.custom, item.equalTo)) {
                return getDescendantantProp(docData.custom, item.equalTo)
            }

            return;
        }

        if (!all[item.name]) {
            return;
        }

        if (all[item.name].subjectName) {
            return all[item.name].subjectName
        }

        //展示预置的数据，非本activityId的答案和学生填写的value
        if (all[item.name].data) {
            return all[item.name].data
        }else if (all[item.name].answer
                && all[item.name].activityId !== activityId) {
            return all[item.name].answer
        }else if (all[item.name].value) {
            return all[item.name].value
        }

        if (hasErrorInfo
            && all[item.name].hasOwnProperty('correct')
            && !all[item.name].correct) {
            return ''
        }
    }

    //元素onChange监听
    const onElementChange = (item, value) => {
        if (canChange(item, value)) {
            onItemChange(item, value)
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

        if (all[item.name].hasOwnProperty('correct')
            && !all[item.name].correct) {
            return basicStyleOfItem(item, true, '#FFFF80')
        }else {
            return basicStyleOfItem(item)
        }
    }

    //元素是否可编辑
    const canEdit = item => {
        //非第一联不可编辑
        if (currentCopy > 0
            || !editable) {
            return false
        }

        if (all[item.name]
            && all[item.name].data) {
            return false;
        }

        if (item.type === ELEMENT.SL) {
            //没有设置对应的总账科目时不可编辑明细
            return all[item.gla]
                    && all[item.gla].value
                    && !isEmpty(all[item.gla].value)
        }

        if (!all[item.name]) {
            return true
        }

        //如果此元素不属于本节点，则不允许编辑
        if (all[item.name].activityId
            && all[item.name].activityId !== activityId) {
            return false
        }

        return true
    }

    //渲染只读元素，包括Label
    const renderReadOnlyItem = (item, index) => {
        const value = valueToShow(item)

        if (!value && value !== '') {
            return null
        }

        return (
            <span key={`readonly_${index}`}
                style={styleOfItem(item)}>
                {value}
            </span>
        )
    }

    //渲染普通文本输入框
    const renderNormalItem = (item, index) => {
        return (
            <input key={`${item.name}_${index}`}
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
                return all[item.gla].value
            }
        }

        return (
            <AutoComplete key={`${item.name}_${index}`}
                name={item.name}
                dataSource={dataSource}
                value={valueToShow(item)}
                style={styleOfSelect}
                onSearch={value => {
                    onSubjectSearch(item, value, glaSubjectId())
                }}
                onSelect={(value, option) => {
                    onSubjectSelected(item, value, {
                        text: option.props.children,
                        value: value
                    })
                }}
                onBlur={value => {
                    onSubjectBlur(item, value, dataSource)
                }}
            />
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
            <textarea key={`textarea_${index}`}
                    style={style}
                    value={value}
                    onChange={e => {
                        onElementChange(item, e.target.value)
                    }}
                />
        )
        :
        (
            <textarea key={`textarea_${index}`}
                    style={style}
                    value={value}
                    readOnly={'readonly'}
                    onChange={e => {
                        onElementChange(item, e.target.value)
                    }}
                />
        )
    }

    //渲染元素们
    const renderElements = () => {

        const copy = copyToShow(config, currentCopy)

        const elementNodes = Object.values(config[copy].elements).map((item, index) => {
            /**
             * 忽略checkbox
             */
            if (item.type === ELEMENT.CHECK_BOX) {
                return null
            }

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

export default DocValues;

DocValues.propTypes = {
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
}

DocValues.defaultProps = {
    onItemChange: (item, value) => {
        console.log('value = ', value);
    }
}
