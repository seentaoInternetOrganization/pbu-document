/**
 * @author AngusC
 * @description 工具
 */

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
exports.MODE = require('./mode').default;
exports.ELEMENT_TYPE = require('./elementType').default;

/**
 * 元素类型
 */
exports.ELEMENT = {
    /**
     * 输入框
     */
    INPUT: 'INPUT',
    /**
     * 带搜索输入框
     */
    SELECT: 'SELECT',
    /**
     * checkbox
     */
    CHECK_BOX: 'CHECK_BOX',
}

/**
 * 甄别方式
 */
exports.EXAMINE = {
    /**
     * 单编辑框
     */
    SINGLE: 'SINGLE',
    /**
     * 多编辑框
     */
    MULTI_ELM: 'MULTI_ELM',
    /**
     * 多行集合
     */
    MULTI_LINE: 'MULTI_LINE',
    /**
     * 合计栏
     */
    SETTLEMENT: 'SETTLEMENT'
}

exports.EXAMINE_COLOR = {
    SINGLE: '#FF756E',
    MULTI_ELM: '#A28DDD',
    MULTI_LINE: '#95DF7D',
    SETTLEMENT: '#FAA755'
}

exports.EXAMINE_NAME = {
    SINGLE: '单编辑框',
    MULTI_ELM: '多编辑框',
    MULTI_LINE: '多行集合',
    SETTLEMENT: '合计栏'
}

exports.indexElementsByName = function (elements) {

};
