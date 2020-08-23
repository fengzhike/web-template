/**
 * @file index.js
 * @description store 入口
 */

import React from 'react';
import UserInfo from './modules/userInfo';
import Main from './modules/main';

class RootStore {
    constructor() {
        this.userStore = new UserInfo(this);
        this.mainStore = new Main(this);
    }
}

export const store = new RootStore();
export const StoreContext = React.createContext({});