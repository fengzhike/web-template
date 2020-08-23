/**
 * @file baseData.online.js
 * @description 生产环境全局变量
 */

const commonData = require('./commonData');

module.exports = Object.assign(commonData, {
    env: 'production',
    host: 'http://test.qq.com',
    //外部链接
    link: {
    },
});