/**
 * @file index.js
 * @description 状态入口
 */

import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import userInfo from './modules/userInfo';

export default new Vuex.Store({
    modules: {
        userInfo
    }
});
