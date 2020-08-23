/**
 * @file 生产环境变量
 */

const commonData = require('./commonData');

module.exports = Object.assign(commonData, {
    host: 'http://test.qq.com',
    //外部链接
    link: {
    },
});