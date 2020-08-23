/**
 * @file 处理网络请求的通用部分, 如超时
 */

import axios from 'axios';

const underline = '_';

axios.defaults.headers.get['Content-type'] = 'application/json; charset=utf-8';

axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

axios.interceptors.response.use(undefined, error => {
    if (error.code === 'ECONNABORTED' && error.message.indexOf('timeout') !== -1) {
        console.log('请求超时，请稍后重试');
        return Promise.reject({msg: 'SERVER TIMEOUT'});
    }
});

export default function ({url, method = 'post', params = {}, data = {}, errmsg = '服务异常', headers = {}, timeout = 8000}) {
    params[underline] = Date.now();
    if ('get' === method) {
        params = ({...params, ...data});
        data = null;
    }
    return axios({
        url: url,
        method,
        params,
        headers,
        timeout,
        data
    })
    .then(res => {
        const contentType = res.headers['content-type'] || '';
        const respJson = res.data;

        if ('text/plain' === contentType.split(';')[0]) {
            return respJson;
        };

        if (respJson.errNo !== 200) {
            // 接口无权限重定向
            if (respJson.errNo === 403) {
                window.location.href = respJson.url;
            } else {
                return Promise.reject(respJson);
            }
        }
        return respJson.result;

    })
    .catch(err => {
        if (type === 'wiki') {
            // message.error(err.message || errmsg);
        }
    });
}
