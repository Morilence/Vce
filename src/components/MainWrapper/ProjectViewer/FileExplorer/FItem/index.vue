<template>
    <li
        v-if="item.isdir"
        :class="{
            fitem: true,
            folded: item.isfolded,
            active: path == $store.state.currentActiveItem.path
        }"
        :data-path="path"
        :data-type="'directory'"
    >
        <div
            class="flabel"
            :style="{
                paddingLeft: `${(layer + 1) * $store.state.config.fileExplorerOptions.itemIndentStep}px`,
                pointerEvents: $store.state.cursorStyle == 'col-resize' ? 'none' : 'auto'
            }"
        >
            <font-awesome-icon class="farrow" :icon="['fas', 'caret-right']" />
            <font-awesome-icon class="ficon" :icon="['fas', item.isfolded ? 'folder' : 'folder-open']" />
            <span class="fname">{{ item.name }}</span>
        </div>
        <f-list
            :layer="layer + 1"
            :list="item.children"
            :catalog="`${catalog == '' ? item.name : `${catalog}/${item.name}`}`"
        />
    </li>
    <li
        v-else
        :class="{ fitem: true, active: path == $store.state.currentActiveItem.path }"
        :data-path="path"
        :data-type="'file'"
    >
        <div
            class="flabel"
            :style="{
                paddingLeft: `${(layer + 1) * $store.state.config.fileExplorerOptions.itemIndentStep}px`,
                pointerEvents: $store.state.cursorStyle == 'col-resize' ? 'none' : 'auto'
            }"
        >
            <span class="farrow"></span>
            <font-awesome-icon class="ficon" :icon="icon(item.name)" />
            <span class="fname">{{ item.name }}</span>
        </div>
    </li>
</template>

<script>
import ext from "@/store/ext";
export default {
    name: "fitem",
    props: {
        layer: {
            type: Number,
            default: 0
        },
        catalog: {
            type: String,
            default: ""
        },
        item: {
            type: Object,
            default() {
                return {};
            }
        }
    },
    computed: {
        path: {
            get() {
                return this.catalog ? `${this.catalog}/${this.item.name}` : this.item.name;
            }
        },
        icon: {
            get() {
                return name => {
                    return ext.table[ext.extname(name)] ? ext.table[ext.extname(name)].ficon : ["fas", "file"];
                };
            }
        }
    }
};
</script>

<style lang="stylus" scoped>
.fitem
    width 100%
    box-sizing border-box
    list-style none
    white-space nowrap

    .flabel
        display flex
        justify-content flex-start
        align-items center

        padding 4.5px 0 4.5px 5px
        // transition background-color 0.1s
        cursor pointer

        .farrow
            width 13px
            min-width 13px
            max-width 13px
            margin-right 4px

            font-size 13px

            transform rotate(90deg)
            transition transform 0.1s

            pointer-events none

        .ficon
            width 16.5px
            min-width 16.5px
            max-width 16.5px
            margin-right 4px
            box-sizing border-box

            font-size 14px

            pointer-events none

            &[data-icon="folder-open"]
                padding-left 1px
                font-size 15.5px

        .fname
            font-size 14px
            pointer-events none

        &:hover
            background-color rgba(255, 255, 255, 0.4)

    &[data-type="directory"].folded
        .farrow
            transform rotate(0deg)

        .flist
            display none

    &.active
        & > .flabel
            background-color #fff
</style>
