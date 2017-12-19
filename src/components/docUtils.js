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
        lineHeight: `${pos.height * ratioHeight}px`,
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

/**
 * 过滤掉value中的padStart信息
 * @param  {Object} item  [description]
 * @param  {String} value [description]
 * @return {String}       [description]
 */
export function filterValue(item, value) {
    if (item.constraint) {
        if (item.constraint.padStart) {
            return value.replace(item.constraint.padStart, '')
        }else if (item.constraint.localeFormatWith) {
            return Number(value.replace(/[^0-9\.-]+/g,"")).toString()
        }
    }

    return value
}

//判断输入的内容的合法性
export function canChange(item, value) {
    const _value = filterValue(item, value)
    //输入空，通过
    if (typeof _value === 'string'
        && isEmpty(_value)) {
        return true
    }

    switch (item.type) {
        case ELEMENT.INTEGER:
            return isNumeric(_value) && testNumber(item, _value)
            break;

        case ELEMENT.FLOAT:
            return isFloat(_value) && testNumber(item, _value)
            break;
    }

    return true
}

/**
 * 根据examines和all，生成对应的keyOfAll
 * @param  {Array} examines 甄别信息数组
 * @param  {String} keyOfAll all中要取的key, 可取值`data`,`answer`, `value`
 * @param  {Object} all      documentBody中的all
 * @param {String} activityId 活动id,只处理activityId的数据
 * @return {Array}          新生成的数组
 */
export function mapExaminesWithAll(examines, keyOfAll, all, activityId) {

    if(!examines || !keyOfAll || !all){
        return [];
    }

    if (examines.length === 0
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

    function valueOfKey(key) {
        if (all[key]
            && all[key][keyOfAll]
            && all[key].activityId
            && activityId === all[key].activityId) {
            return all[key][keyOfAll]
        }

        return ''
    }

    // return examines.map(item => {
    //     return Object.keys(item)
    //     .filter(excludeStaticProperty)
    //     .reduce((sum, key) => {
    //
    //         return {
    //             ...sum,
    //             [key]: valueOfKey(key),
    //             ...sortOrder(item)
    //         }
    //     }, {
    //         examineId: item.examineId,
    //         examineType: item.examineType,
    //         examineName: item.examineName
    //     })
    // })

    // 先排除掉未填过值，然后拼装
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

//处理总账科目和明细账科目
export function combineSubjects(subjects) {
    if (!Array.isArray(subjects)) {
        return []
    }

    const combined = subjects.map(subject => {
        return {
            value: subject.subjectId,
            text: subject.subjectName
        }
    });

    return combined;
}

export function combineDataToState(props) {
    if (!props.docData) {
        return { all: {} }
    }

    if (!props.docData.all) {
        return {
            ...props.docData,
            all: {}
        }
    }

    return props.docData
}

/**
 * 重置antd的Select或AutoComplete组件的高度，a hack
 * @param {Array} config 单据配置文件
 */
export function resetSelectHeightOfAntd(config, dom) {
    if (!config
        || !Array.isArray(config)
        || config.length == 0
        || !config[0].elements) {
        return
    }
    const selectHeight = [];

    Object.values(config[0].elements).forEach(item => {
        if (item.type === ELEMENT.GLA
            || item.type === ELEMENT.SL
            || item.type === ELEMENT.SELECT) {
            selectHeight.push(`${item.pos.height}px`);
        }
    })

    //might be a hack
    const selectNodes = dom.getElementsByClassName('ant-select-selection--single');

    for (let i = 0; i < selectNodes.length; i++) {
        selectNodes[i].style.height = selectHeight[i];
        selectNodes[i].style.backgroundColor = 'transparent';
    }
}

/**
 * 将value转换成item.type类型的value
 * @param  {Object} item  [description]
 * @param  {String} value [description]
 * @return {[type]}       [description]
 */
export function formatValueOfItem(item, value) {
    //输入空，原样返回
    if (typeof value === 'string'
        && isEmpty(value)) {
        return value
    }

    if (!item) {
        return value
    }

    switch (item.type) {
        case ELEMENT.INTEGER:
            return parseInt(value).toString()
            break;
    }

    return value
}

/**
 * 过滤出docData中的custom中的信息
 * @param  {Object} props [description]
 * @param  {String} key   要取的属性
 * @return {String}       [description]
 */
export function subjectOfPropsInCustom(props, key) {

    if (key
        && props
        && props.docData
        && props.docData.custom
        && props.docData.custom[key]) {
        return props.docData.custom[key]
    }
}

/**
 * 根据visibleSheet来展示第一联
 * @param  {[type]} visibleSheet [description]
 * @return {[type]}              [description]
 */
export function firstCopy(visibleSheet) {
    if (!visibleSheet
        || visibleSheet.split(',').indexOf('1') == -1) {
        return 0
    }

    return visibleSheet.split(',').indexOf('1')
}

/**
 * 保存为
 */
export function saveAs(value, isDataInit) {

    if (!value) {
        return { }
    }

    if (Array.isArray(value) && value.length === 0) {
        return { }
    }

    if (typeof value === 'string' && isEmpty(value)) {
        return { }
    }

    if (isDataInit) {
        return {
            data: value,
        }
    }else {
        return {
            answer: value
        }
    }
}

/**
 * 当前活动节点是否为空
 * @param  {String}  activityId [description]
 * @param  {Object}  all        [description]
 * @param  {String}  keyOfAll   [description]
 * @return {Boolean}            [description]
 */
export function isCurrentActivityEmpty(activityId, all, keyOfAll) {

    if (!all || Object.keys(all).length === 0) {
        return true
    }

    const found = Object.keys(all).find(key => {
        return all[key].activityId === activityId
                && all[key][keyOfAll]
                && all[key][keyOfAll].length > 0
    })

    if (found) {
        return false
    }

    return true
}

/**
 * 是否有数据
 * @param  {Object}  all [description]
 * @return {Boolean}     [description]
 */
export function isAllEmpty(all) {
    if (!all || Object.keys(all).length === 0) {
        return true
    }

    return false

    // const found = Object.keys(all).find(key => {
    //     return Object.keys(all[key]).length > 0
    // })
    //
    // return !!!found
}

/**
 * 过滤学生端value
 * @param  {[type]} value [description]
 * @return {[type]}       [description]
 */
export function genValue(value) {
    if (!value) {
        return {}
    }

    if (typeof value === 'string' && isEmpty(value)) {
        return {}
    }

    if (Array.isArray(value) && value.length === 0) {
        return {}
    }

    return { value }
}
