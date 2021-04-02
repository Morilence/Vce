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
    computed: {
        CONFIG: {
            get() {
                return this.$store.state.config;
            }
        }
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
        // adjust layout by the width of FileExplorer
        adjustLayout(fexplrWidth) {
            const activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
            const fdiplrMinWidth = this.CONFIG.fileDisplayerOptions.minWidth;
            this.$refs.sash.style.left = `${fexplrWidth}px`;
            this.$refs.fexplr.$el.style.width = `${fexplrWidth}px`;
            let fdiplrWidth =
                window.innerWidth - fexplrWidth - activityBarWidth < fdiplrMinWidth
                    ? fdiplrMinWidth
                    : window.innerWidth - fexplrWidth - activityBarWidth;
            // rounding can eliminate the scrollbar flashing
            this.$refs.fdiplr.$el.style.width = `${Math.round(fdiplrWidth)}px`;
            this.$refs.fdiplr.$refs.editor.ace.renderer.scrollBarH.element.style.width = `${Math.round(
                fdiplrWidth - this.$refs.fdiplr.$refs.editor.ace.renderer.gutterWidth
            )}px`;
            this.$store.commit("setFileExplorerOptions", { initialWidth: fexplrWidth });
            this.$store.commit("saveConfig");
            this.$nextTick(() => {
                this.$refs.fdiplr.$refs.editor.ace.resize();
                this.$refs.fdiplr.$refs.editor.contentXScroll.update();
                this.$refs.fdiplr.$refs.editor.contentYScroll.update();
            });
        },
        onSashDragging(evt) {
            if (this.isSashActivated && window.innerWidth > this.CONFIG.minWidth) {
                const distanceToViewportLeft = evt.clientX;
                const activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
                const fexplrMinWidth = this.CONFIG.fileExplorerOptions.minWidth;
                const fdiplrMinWidth = this.CONFIG.fileDisplayerOptions.minWidth;
                let fexplrWidth = distanceToViewportLeft - activityBarWidth;
                if (fexplrWidth < fexplrMinWidth) fexplrWidth = fexplrMinWidth;
                if (distanceToViewportLeft > window.innerWidth - fdiplrMinWidth)
                    fexplrWidth = window.innerWidth - fdiplrMinWidth - activityBarWidth;
                this.$options.methods.adjustLayout.bind(this)(fexplrWidth);
            }
        },
        onWindowResizing() {
            const distanceToViewportLeft =
                this.$refs.sash.getBoundingClientRect().left + this.$refs.sash.getBoundingClientRect().width / 2;
            const activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
            const fexplrMinWidth = this.CONFIG.fileExplorerOptions.minWidth;
            const fdiplrMinWidth = this.CONFIG.fileDisplayerOptions.minWidth;
            let fexplrWidth = distanceToViewportLeft - activityBarWidth;
            if (
                distanceToViewportLeft > window.innerWidth - fdiplrMinWidth &&
                distanceToViewportLeft > activityBarWidth + fexplrMinWidth
            ) {
                fexplrWidth = window.innerWidth - fdiplrMinWidth - activityBarWidth;
                if (fexplrWidth < fexplrMinWidth) fexplrWidth = fexplrMinWidth;
            }
            this.$options.methods.adjustLayout.bind(this)(fexplrWidth);
        }
    },
    mounted() {
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
        z-index 12

        &.active
            background-color rgba(0, 122, 204, 0.8)

    #file-explorer
        flex-shrink 0
        width 200px
        min-width var(--fexplr_min_width)

    #file-displayer
        width 100%
        min-width var(--fdiplr_min_width)
</style>
