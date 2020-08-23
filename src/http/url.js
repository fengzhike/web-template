/**
 * @file url.js
 * @description 接口地址
 */

// 引入外部平台的接口
// var {tesla} = baseData;

// wiki 接口 context
var prefix = '/wikiidxweb';

var url = {
    personInfo: '/personal/info',
    favSpace: '/favourite/space',
    favPage: '/favourite/page',
    rencentPage: '/recently/page',
    followingPage: '/follow/page',
    noticeInfo: '/notice/info',
    recommend: '/recommend/page',
    logout: '/logout',
    addGroup: '/group/add',
    updateGroup: '/group/update',
    delGroup: '/group/delete',
    moveSpace: '/space/move',
};

for (var key in url) {
    url[key] = prefix + url[key];
}

url.suggest = '/rest/quicknav/1/search',

// url.teslaPush = `${tesla.host}${tesla.push}`;

module.exports = url;