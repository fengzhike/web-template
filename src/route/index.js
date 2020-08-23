/**
 * @file index.js
 * @description 路由入口文件
 */

import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

const Index = () => import(/* webpackChunkName: "home" */ '../views/index/index.vue');
const About = () => import(/* webpackChunkName: "about" */ '../views/About/index.vue');

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})
