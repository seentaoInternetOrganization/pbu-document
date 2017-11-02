/**
 * @author Chenzhyc
 * @description 单据工具集
 */

import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';
import isDecimal from 'validator/lib/isDecimal';
import { ELEMENT, EXAMINE, EXAMINE_COLOR, MODE } from '../constants';

/**
* 获取可显示的联
* @param  {Object} config      单据配置信息
* @param  {Number} currentCopy 期望显示的联
* @return {Number}             允许显示的联
*/
export function copyToShow(config, currentCopy) {
    if (!currentCopy) {
        return 0
    }
    //如果当前单据只有1联，则返回0
    if (config.length === 1) {
        return 0
    }
    //如果传入的当前联大于总联数，则返回0
    if (currentCopy > config.length - 1) {
        return 0
    }
    //只有当前联存在元素信息时才返回当前联
    if (config[currentCopy].elements) {
        return currentCopy
    }

    return 0
}
/**
 * 元素基本样式获取
 * @param  {Object} item [description]
 * @return {Object}      [description]
 */
export function basicStyleOfItem(item, highlightItem, highlightColor, ratioWidth = 1, ratioHeight = 1) {
    const { pos } = item;

    const backgroundStyle = highlightItem ? {
        background: highlightColor
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

//判断数字合法性
export function testNumber(item, value) {

    if (!item.constraint) {
        return true;
    }

    const tooBig = item.constraint.maxValue && parseFloat(value) > item.constraint.maxValue
    const tooSmall = item.constraint.minValue && parseFloat(value) < item.constraint.minValue

    return !(tooBig || tooSmall)
}

//判断输入的内容的合法性
export function canChange(item, value) {
    //输入空，通过
    if (isEmpty(value)) {
        return true
    }

    switch (item.type) {
        case ELEMENT.INTEGER:
            return isNumeric(value) && testNumber(item, value)
            break;

        case ELEMENT.FLOAT:
            return isDecimal(value) && testNumber(item, value)
            break;
    }

    return true
}
