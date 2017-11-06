/**
 * @author Chenzhyc
 * @description 单据工具集
 */

import isEmpty from 'validator/lib/isEmpty';
import isNumeric from 'validator/lib/isNumeric';
import isFloat from 'validator/lib/isFloat';
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
            return isFloat(value) && testNumber(item, value)
            break;
    }

    return true
}

/**
 * 根据examines和all，生成对应的keyOfAll
 * @param  {Array} examines 甄别信息数组
 * @param  {String} keyOfAll all中要取的key, 可取值`data`,`answer`, `value`
 * @param  {Object} all      documentBody中的all
 * @return {Array}          新生成的数组
 */
export function mapExaminesWithAll(examines, keyOfAll, all) {
    if (examines.length == 0
        || !all
        || !keyOfAll
        || isEmpty(keyOfAll)) {
        return []
    }

    //每项元素固定的key
    const staticItems = ['examineId', 'examineType', 'examineName', 'sortOrder']

    function sortOrder(item) {
        if (item.sortOrder
            && Array.isArray(item.sortOrder)) {
            return {
                sortOrder: item.sortOrder
            }
        }
    }

    function excludeStaticProperty(key) {
        return !staticItems.includes(key)
    }
    //先排除掉未填过值，然后拼装
    return examines.filter(item => {
        return Object.keys(item)
        .filter(excludeStaticProperty)
        .filter(key => {
            return all[key] && all[key][keyOfAll]
        }).length > 0
    }).map(item => {
        return Object.keys(item)
        .filter(excludeStaticProperty)
        .filter(key => {
            return all[key] && all[key][keyOfAll]
        })
        .reduce((sum, key) => {
            return {
                ...sum,
                [key]: all[key][keyOfAll],
                ...sortOrder(item)
            }
        }, {
            examineId: item.examineId,
            examineType: item.examineType,
            examineName: item.examineName
        })
    })
}
