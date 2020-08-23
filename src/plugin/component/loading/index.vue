<template>
    <div
        v-show="show"
        class="loading">
        {{text}}
    </div>
</template>
<script>
export default {
    name: 'loading',
    props: {
        show: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            default: '加载中'
        }
    }
}
</script>
<style lang="less" scoped>
@import './index.less';
</style>