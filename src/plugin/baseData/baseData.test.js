/**
 * @file baseData.test.js
 * @description 测试环境全局变量
 */

const commonData = require('./commonData');

module.exports = Object.assign(commonData, {
    env: 'test',
    host: 'http://test.qq.com',
    //外部链接
    link: {
    },
});