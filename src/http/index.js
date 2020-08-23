/**
 * @file index.js
 * @description 请求入口部分
 */

import http from './http';
import url from './url.js';

export default {
    getUserInfo() {
        return http({url: url.personInfo, method: 'get'});
    },
};

