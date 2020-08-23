/**
 * @file url.js
 * @description 接口地址
 */

// wiki 接口 context
var prefix = '/wikiidxweb';

var url = {
    personInfo: '/personal/info',
};

for (var key in url) {
    url[key] = prefix + url[key];
}

module.exports = url;