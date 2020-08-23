/**
 * @file index.js
 * @description 项目初始化入口
 */

import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

import './assets/style/index.less';
require('./assets/svg');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);