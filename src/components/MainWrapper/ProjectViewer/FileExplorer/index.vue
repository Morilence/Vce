<template>
    <ul id="file-explorer">
        <f-item class="root" ref="root" :layer="0" :item="this.$store.state.project" />
    </ul>
</template>

<script>
// FList & FItem were registered in global(main.js).
export default {
    name: "FileExplorer",
    data() {
        return {};
    },
    mounted() {
        this.$refs.root.toggleFoldedState();
    }
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
