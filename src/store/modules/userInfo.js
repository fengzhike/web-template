/**
 * @file userInfo.js
 * @description 用户信息 store
 */

// import http from 'Http';

export default {
    namespaced: true,
    state: () => ({
        userInfo: {
            name: '张三',
        },
        count: 1,
    }),
    getters: {
        msg: state => {
            return `${state.userInfo.name} 是个好同志`;
        }
    },
    actions: {
        addCount({commit}, num) {
            commit('addCount', num);
        }
    },
    mutations: {
        addCount(state, num) {
            state.count += num;
        }
    }
};