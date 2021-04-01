<template>
    <div id="project-viewer">
        <file-explorer ref="fexplr" />
        <div ref="sash" :class="{ sash: true, active: isSashActivated }" @mousedown.self="enableSash()"></div>
        <file-displayer ref="fdiplr" />
    </div>
</template>

<script>
import FileExplorer from "./FileExplorer";
import FileDisplayer from "./FileDisplayer";
export default {
    name: "ProjectViewer",
    components: {
        FileExplorer,
        FileDisplayer
    },
    data() {
        return {
            isSashActivated: false
        };
    },
    methods: {
        enableSash() {
            this.isSashActivated = true;
            this.$refs.fexplr.$el.style.pointerEvents = "null";
            this.$refs.fdiplr.$el.style.pointerEvents = "null";
            this.$store.commit("setCursorStyle", "col-resize");
        },
        disableSash() {
            this.isSashActivated = false;
            this.$refs.fexplr.$el.style.pointerEvents = "auto";
            this.$refs.fdiplr.$el.style.pointerEvents = "auto";
            this.$store.commit("setCursorStyle", "auto");
        },
        changeLayout(diff, activityBarWidth) {
            this.$refs.sash.style.left = `${diff}px`;
            this.$refs.fexplr.$el.style.width = `${diff}px`;
            // rounding can eliminate the scrollbar flashing
            this.$refs.fdiplr.$el.style.width = `${Math.round(window.innerWidth - diff - activityBarWidth)}px`;
            this.$refs.fdiplr.$refs.editor.ace.renderer.scrollBarH.element.style.width = `${Math.round(
                window.innerWidth - diff - activityBarWidth - this.$refs.fdiplr.$refs.editor.ace.renderer.gutterWidth
            )}px`;
            this.$nextTick(() => {
                this.$refs.fdiplr.$refs.editor.ace.resize();
                this.$refs.fdiplr.$refs.editor.contentXScroll.update();
                this.$refs.fdiplr.$refs.editor.contentYScroll.update();
            });
        },
        onSashDragging(evt) {
            if (this.isSashActivated && window.innerWidth > this.$store.state.config.minWidth) {
                const distanceToViewportLeft = evt.clientX;
                const activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
                const fexplrMinWidth = this.$store.state.config.fileExplorerOptions.minWidth;
                const fdiplrMinWidth = this.$store.state.config.fileDisplayerOptions.minWidth;
                let diff = distanceToViewportLeft - activityBarWidth;
                if (diff < fexplrMinWidth) diff = fexplrMinWidth;
                if (distanceToViewportLeft > window.innerWidth - fdiplrMinWidth)
                    diff = window.innerWidth - fdiplrMinWidth - activityBarWidth;
                this.$options.methods.changeLayout.bind(this)(diff, activityBarWidth);
            }
        },
        onWindowResizing() {
            const distanceToViewportLeft =
                this.$refs.sash.getBoundingClientRect().left + this.$refs.sash.getBoundingClientRect().width / 2;
            const activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
            const fexplrMinWidth = this.$store.state.config.fileExplorerOptions.minWidth;
            const fdiplrMinWidth = this.$store.state.config.fileDisplayerOptions.minWidth;
            let diff = distanceToViewportLeft - activityBarWidth;
            if (
                distanceToViewportLeft > window.innerWidth - fdiplrMinWidth &&
                distanceToViewportLeft > activityBarWidth + fexplrMinWidth
            ) {
                diff = window.innerWidth - fdiplrMinWidth - activityBarWidth;
                if (diff < fexplrMinWidth) diff = fexplrMinWidth;
            }
            this.$options.methods.changeLayout.bind(this)(diff, activityBarWidth);
        }
    },
    mounted() {
        // init & rounding can eliminate the scrollbar flashing
        this.$refs.fdiplr.$el.style.width = `${Math.round(this.$refs.fdiplr.$el.getBoundingClientRect().width)}px`;
        this.$refs.fdiplr.$refs.editor.ace.renderer.scrollBarH.element.style.width = `${Math.round(
            this.$refs.fdiplr.$el.getBoundingClientRect().width -
                this.$refs.fdiplr.$refs.editor.ace.renderer.gutterWidth
        )}px`;

        // global event handlers
        window.addEventListener("mouseup", this.$options.methods.disableSash.bind(this));
        window.addEventListener("mousemove", this.$options.methods.onSashDragging.bind(this));
        window.addEventListener("resize", this.$options.methods.onWindowResizing.bind(this));
        this.$once("hook:beforeDestroy", () => {
            window.removeEventListener("mouseup", this.$options.methods.disableSash.bind(this));
            window.removeEventListener("mousemove", this.$options.methods.onSashDragging.bind(this));
            window.removeEventListener("resize", this.$options.methods.onWindowResizing.bind(this));
        });
    }
};
</script>

<style lang="stylus">
#project-viewer
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    position relative

    width 100%
    height 100%

    .sash
        position absolute
        top 0
        left 200px

        width 4.5px
        height 100%
        transform translateX(-50%)
        transition background-color 0.3s

        cursor col-resize
        user-select none
        z-index 10

        &.active
            background-color rgba(0, 122, 204, 0.8)

    #file-explorer
        flex-shrink 0
        width 200px
        min-width 170px

    #file-displayer
        width 100%
        min-width 300px
</style>
