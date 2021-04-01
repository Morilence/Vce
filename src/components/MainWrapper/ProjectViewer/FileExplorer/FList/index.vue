<template>
    <ul class="flist">
        <f-item v-for="(item, index) in list" :key="index" :layer="layer" :catalog="catalog" :item="item" />
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
        catalog: {
            type: String,
            default: ""
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
