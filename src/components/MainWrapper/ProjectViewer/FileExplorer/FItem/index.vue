<template>
    <div :class="{ fitem: true, folded: isFolded }">
        <div
            class="flabel"
            :style="{
                paddingLeft: `${(layer + 1) * 10}px`,
                pointerEvents: $store.state.cursor == 'col-resize' ? 'none' : 'auto'
            }"
            @click="onItemClick(item)"
        >
            <font-awesome-icon v-if="item.isdir" class="farrow" :icon="['fas', 'caret-right']" />
            <span v-else class="farrow"></span>
            <font-awesome-icon
                class="ficon "
                :icon="['fas', item.isdir ? (isFolded ? 'folder' : 'folder-open') : 'file']"
            />
            <span class="fname">{{ item.name }}</span>
        </div>
        <f-list v-if="item.children" :layer="layer + 1" :list="item.children" />
    </div>
</template>

<script>
export default {
    name: "fitem",
    props: {
        layer: {
            type: Number,
            default: 0
        },
        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    data() {
        return {
            isFolded: true
        };
    },
    methods: {
        // handlers
        onItemClick(item) {
            this.$options.methods.toggleFoldedState.bind(this)();
            this.$store.commit("setCurrentActiveItem", item);
        },
        // public methods
        toggleFoldedState() {
            this.isFolded = !this.isFolded;
        }
    }
};
</script>

<style lang="stylus" scoped>
.fitem
    width 100%
    box-sizing border-box
    white-space nowrap

    .flabel
        display flex
        justify-content flex-start
        align-items center

        padding 4.5px 0 4.5px 5px
        transition background-color 0.2s
        cursor pointer

        .farrow
            width 13px
            min-width 13px
            max-width 13px
            margin-right 4px

            font-size 13px

            transform rotate(90deg)
            transition transform 0.1s

        .ficon
            width 16.5px
            min-width 16.5px
            max-width 16.5px
            margin-right 4px
            box-sizing border-box

            font-size 14px

            &[data-icon="folder-open"]
                padding-left 1px
                font-size 15.5px

        .fname
            font-size 14px

        &:hover
            background-color #fff

    &.folded
        .farrow
            transform rotate(0deg)

        .flist
            display none
</style>
