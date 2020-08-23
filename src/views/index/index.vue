<template>
    <div>{{msg}}</div>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name: 'index',
    computed: {
        ...mapGetters('userInfo', [
            'msg',
        ]),
    },
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
