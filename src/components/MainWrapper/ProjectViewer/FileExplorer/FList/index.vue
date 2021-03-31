<template>
    <ul class="flist">
        <f-item v-for="(item, index) in list" :key="index" :layer="layer" :item="item" />
    </ul>
</template>

<script>
export default {
    name: "flist",
    props: {
        layer: {
            type: Number,
            default: 0
        },
        list: {
            type: Array,
            default() {
                return [];
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.flist
    width 100%
    padding-left 0
    margin 0 0
</style>
