/**
 * @author AngusC
 * @description 答案展示，背景数据展示
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DocBG from './background';
import bgStyles from './background.css';
import { ELEMENT } from '../constants';
import { getDescendantantProp } from '../utils';
import { copyToShow } from './docUtils';
import { Checkbox, Radio, Select } from 'antd';
const Option = Select.Option;
const CheckboxGroup = Checkbox.Group;
const RadioGroup = Radio.Group;

const ReadOnly = ({
    config,
    ratioWidth,
    ratioHeight,
    docData,
    currentCopy,
    showAnswer,
    highlightAnswer,
    activityId
}) => {

    //是否高亮显示此元素
    const highlightItem = item => {
        const { all } = docData;

        if (showAnswer
            && highlightAnswer) {
            if (all[item.name]
                && all[item.name].answer
                && all[item.name].activityId === activityId) {
                return true;
            }
        }

        return false;
    }

    //获取元素要展示的值
    const valueToShow = item => {
        const { all } = docData;

        if (item.type === ELEMENT.LABEL) {
            if (item.textValue) {
                return item.textValue
            }else if (item.equalTo
                    && docData.custom
                    && getDescendantantProp(docData.custom, item.equalTo)) {
                return getDescendantantProp(docData.custom, item.equalTo)
            }

            return '';
        }

        if (!all[item.name]) {
            return;
        }

        if (all[item.name].subjectName) {
            return all[item.name].subjectName
        }

        if (showAnswer) {
            //展示答案，预置数据
            if (all[item.name].answer) {
                return all[item.name].answer
            }else if (all[item.name].data) {
                return all[item.name].data
            }
        }else {
            //展示预置的数据，非本activityId的答案和学生填写的value
            if (all[item.name].data) {
                return all[item.name].data
            }else if (all[item.name].answer
                    && all[item.name].activityId !== activityId) {
                return all[item.name].answer
            }else if (all[item.name].value) {
                return all[item.name].value
            }
        }
    }

    //获取元素基础样式
    const basicStyleOfItem = item => {
        const { pos } = item;

        const backgroundStyle = highlightItem(item) ? {
            background: '#FFFF80'
        } : { }

        const style = {
            left: pos.left * ratioWidth,
            top: pos.top * ratioHeight,
            width: pos.width * ratioWidth,
            height: pos.height * ratioHeight,
            ...backgroundStyle,
            ...item.style
        }

        return style
    }

    //渲染单行文本元素
    const renderNormalItem = (item, index) => {
        const value = valueToShow(item)

        if (!value && value !== '') {
            return null
        }

        const style = {
            ...basicStyleOfItem(item),
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
        }

        return (
            <span key={`readonly_${index}`}
                title={value}
                style={style}>
                {value}
            </span>
        )
    }

    //渲染多行文本元素
    const renderTextareaItem = (item, index) => {
        const value = valueToShow(item);

        if (!value) {
            return null
        }

        const style = {
            ...basicStyleOfItem(item),
            resize: 'none',
        }

        return (
            <textarea key={`readonly_${index}`}
                        style={style}
                        value={value}
                        readOnly={'readonly'}
                    />
        )
    }

    //复选框
    const renderCheckBox = (item, index) => {
        if (!item.options) {
            return (
                <input key={`${item.name}_${index}`}
                            type="checkbox"
                            style={basicStyleOfItem(item)}
                        />
            )
        }else {
            return (
                <div key={`${item.name}_${index}`}
                    style={basicStyleOfItem(item)}>
                    <div style={{ position: 'relative', top: '50%', transform: 'translateY(-50%)' }}>
                        <CheckboxGroup options={item.options}
                                    disabled={true}
                                    value={valueToShow(item)}
                        />
                    </div>
                </div>
            )
        }
    }

    //单选框
    const renderRadio = (item, index) => {
        return (
            <div key={`${item.name}_${index}`}
                style={basicStyleOfItem(item)}>
                <RadioGroup style={{
                    position: 'relative',
                    top: '50%',
                    transform: 'translateY(-50%)'
                }}  disabled={true}
                    value={valueToShow(item)}
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
            <Select key={`${item.name}_${index}`}
                    disabled={true}
                    value={valueToShow(item)}
                    allowClear={true}
                    style={basicStyleOfItem(item)}>
                {renderOptions(item.options)}
            </Select>
        )
    }

    const renderElements = () => {
        //无数据或不存在all
        if (!docData
            || !docData.all) {
            return null;
        }

        const copy = copyToShow(config, currentCopy);

        const elementNodes = Object.values(config[copy].elements).map((item, index) => {

            switch (item.type) {
                case ELEMENT.INPUT:
                case ELEMENT.INTEGER:
                case ELEMENT.FLOAT:
                case ELEMENT.GLA:
                case ELEMENT.SL:
                case ELEMENT.LABEL:
                    return renderNormalItem(item, index)
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
        })

        return elementNodes;
    }

    return (
        <DocBG className={bgStyles.container}
                ratioWidth={ratioWidth}
                ratioHeight={ratioHeight}
                currentCopy={currentCopy}
                config={config}>
            {renderElements()}
        </DocBG>
    )
}

export default ReadOnly;

ReadOnly.propTypes = {
    /**
     * 单据配置信息，当前联的
     */
    config: PropTypes.array,
    /**
     * 横向缩放比例，默认1
     */
    ratioWidth: PropTypes.number,
    /**
     * 纵向缩放比例，默认1
     */
    ratioHeight: PropTypes.number,
    /**
     * 需要展示的数据，权重和甄别方式相关
     */
    docData: PropTypes.object,
    /**
     * 是否高亮展示本activityId答案字段，默认false
     */
    highlightAnswer: PropTypes.bool,
    /**
     * 要展示的联次，默认0, 0, 1, 2
     */
    currentCopy: PropTypes.number,
    /**
     * 是否为显示答案，默认false
     */
    showAnswer: PropTypes.bool,
    /**
     * 当前活动节点id
     */
    activityId: PropTypes.string.isRequired,
}

ReadOnly.defaultProps = {
    highlightAnswer: false,
    currentCopy: 0,
    showAnswer: false,
    ratioWidth: 1,
    ratioHeight: 1,
}
