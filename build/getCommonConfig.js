/**
 * 生产环境获取webpack.config中的入口
 */

const path = require('path');
const fs = require('fs');

function getEntryKey(src) {
    const extName = path.extname(src);
    return path.basename(src, extName);
}

exports.getEntries = getEntries;

function getEntries(rootPath) {
    const files = fs.readdirSync(rootPath);

    const entries = {};

    files.forEach(fileName => {
        entries[getEntryKey(path.join(rootPath, fileName))] = path.resolve(rootPath, fileName);
    })

    return entries;
};

// getEntries('./src/lib');
