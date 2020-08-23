/**
 * @file baseData.dev.js
 * @description 开发环境基本数据配置, 注意baseData 不在entry 内，所以改变baseData不会触发自动compile, 需要重启webpack
 */

const commonData = require('./commonData');

module.exports = Object.assign(commonData, {
    host: 'http://dev.qq.com',
    //外部链接
    link: {
    },
});