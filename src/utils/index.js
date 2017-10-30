/**
 * @author AngusC
 * @description 工具
 */

// const fetch = require('whatwg-fetch');
// console.log('fetch = ', fetch);

import 'whatwg-fetch';
/**
* 矩形碰撞检测
* @param  {Object} r1 [description]
* @param  {Object} r2 [description]
* @return {Boolean}    [description]
*/
exports.intersectRect = function(r1, r2) {
    return !(r2.left > (r1.left + r1.width)
    || (r2.left + r2.width) < r1.left
    || r2.top > (r1.top + r1.height)
    || (r2.top + r2.height) < r1.top);
}

/**
 * 加载单据配置文件
 * @param  {String}   url      配置文件地址
 * @param  {Function} callback 加载后的回调
 */
exports.loadConfig = function(url, callback) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        callback(data.docConfig)
    })
    .catch(err => {
        console.log('err = ', err);
        callback();
    });
}

/**
 * md5 hash
 * @type {String}
 */
exports.md5 = require('blueimp-md5');
/**
 * 根据属性描述`desc`获取`obj`的子代的属性
 * @eg:
 * const obj = {a: {b: {c: 0}}};
 * const c = getDescendantantProp(obj, "a.b.c")
 * //c = 0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
 * @param  {Object} obj  [description]
 * @param  {String} desc [description]
 * @return {Object}      [description]
 */
exports.getDescendantantProp = function (obj, desc) {
    if (!obj) {
        return;
    }

    if (!desc) {
        return obj;
    }

    const arr = desc.split('.');

    while(arr.length) {
        if (obj) {
            obj = obj[arr.shift()];
        }else {
            return;
        }
    }

    return obj;
};


/**
 * 获取可显示的联
 * @param  {Object} config      单据配置信息
 * @param  {Number} currentCopy 期望显示的联
 * @return {Number}             允许显示的联
 */
exports.copyToShow = function(config, currentCopy) {
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
