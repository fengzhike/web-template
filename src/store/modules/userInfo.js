/**
 * @file userInfo.js
 * @description 用户信息store
 */

import {observable, computed, action} from 'mobx';
import http from 'Http';
export default class UserInfo {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable userInfo = {
        name: '张三'
    };

    @action.bound getUserInfo() {
        return http.getUserInfo().then(result => {
            if (result) {
                this.userInfo = result;
            }
        });
    }
}