/**
 * @file main.js
 * @description 用户信息store
 */

import {observable, action} from 'mobx';
import http from 'Http';
export default class Main {
    constructor(rootStore) {
        this.rootStore = rootStore;
    }

    @observable count = 1;

    @action.bound plusCount() {
        this.count ++;
    }
}