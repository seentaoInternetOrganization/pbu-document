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
exports.indexElementsByName = function (elements) {

};
