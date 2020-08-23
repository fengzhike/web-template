<template>
    <div>
        {{count}}
        <button @click="e => addCount(1)">click to add</button>
    </div>
</template>
<script>
import {mapState, mapActions} from 'vuex';
export default {
    name: 'about',
    computed: {
        ...mapState('userInfo', [
            'count'
        ]),
    },
    methods: {
        ...mapActions('userInfo', [
            'addCount'
        ]),
    },
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>
