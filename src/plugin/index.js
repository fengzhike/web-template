/**
 * @file vue 插件入口
 * 包含 全局方法，属性， filter, 指令
 */

import util from './util';
import filter from './filter';
import component from './component';

export default function(Vue) {
    // 添加实例常量
    (Vue.prototype).baseData = baseData;

    // 添加全局方法
    for (let key in util) {
        (Vue.prototype)[key] = util[key];
    }

    // 注册全局组件
    for (let key in component) {
        Vue.component(`wiki-${key}`, component[key]);
    }

    // 注册过滤器
    for (let key in filter) {
        Vue.filter(key, filter[key]);
    }

    // 注册指令
}