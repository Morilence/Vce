<template>
    <div id="file-explorer">
        <f-item class="root" ref="root" :layer="0" :item="proj" />
    </div>
</template>

<script>
// FList & FItem were registered in global(main.js).
export default {
    name: "FileExplorer",
    data() {
        return {
            proj: {
                name: "Untitled",
                isdir: true,
                children: []
            }
        };
    },
    mounted() {
        this.proj = this.$store.state.project;
        this.$refs.root.toggleFoldedState();
    }
};
</script>

<style lang="stylus">
#file-explorer
    position relative

    height 100%
    background-color rgb(245, 245, 245)

    overflow hidden
    user-select none

    .root

        & > .flabel
            padding 8px 0

            // border-top 1px solid rgb(240, 240, 240)
            // border-bottom 1px solid rgb(240, 240, 240)
            background-color transparent
            font-weight bold

            transition none

            & > .ficon
                display none

            &:hover
                background-color transparent
</style>
