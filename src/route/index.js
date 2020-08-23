/**
 * @file index.js
 * @description 路由入口文件
 */

import loadable from '@loadable/component'

export default [
    {
        key: 'index',
        path: '/',
        component: loadable(
            () => import('../views/index'),
        )
    },
    {
        key: 'about',
        path: '/about',
        component: loadable(
            () => import('../views/about'),
        )
    }
]