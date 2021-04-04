<template>
    <ul id="file-explorer" @click="onClick($event)" @contextmenu.prevent="onContextMenu($event)">
        <f-item class="root" ref="root" :layer="0" :catalog="''" :item="this.$store.state.project" />
    </ul>
</template>

<script>
// FList & FItem were registered in global(main.js).
import ops from "@/store/ops";
export default {
    name: "FileExplorer",
    data() {
        return {};
    },
    methods: {
        // use event delegation to reduce memory consumption
        onClick(evt) {
            if (evt.target.classList.contains("flabel")) {
                const itemElem = evt.target.parentNode;
                // reference of target in $store.state.project
                const item = ops.findItemByPath(itemElem.dataset.path, this.$store.state.project);
                if (item.isdir) {
                    item.isfolded = !item.isfolded;
                }
                this.$store.commit("setCurrentActiveItem", item);
                this.$store.commit("saveCurrentActiveItem");
                this.$store.commit("saveProject");
            }
        },
        onContextMenu(evt) {
            if (evt.target.classList.contains("flabel")) {
                // const itemElem = evt.target.parentNode;
            }
        }
    },
    mounted() {}
};
</script>

<style lang="stylus">
#file-explorer
    position relative

    height 100%
    padding-left 0
    background-color rgb(245, 245, 245)

    overflow hidden
    user-select none

    .root

        & > .flabel
            padding 8px 0

            background-color transparent
            font-weight bold

            transition none

            & > .ficon
                display none

            &:hover
                background-color transparent
</style>
