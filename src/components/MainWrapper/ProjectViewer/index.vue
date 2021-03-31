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
            this.$store.commit("setCursor", "col-resize");
        },
        disableSash() {
            this.isSashActivated = false;
            this.$refs.fexplr.$el.style.pointerEvents = "auto";
            this.$refs.fdiplr.$el.style.pointerEvents = "auto";
            this.$store.commit("setCursor", "auto");
        },
        slide(evt) {
            if (this.isSashActivated) {
                let distanceToViewportLeft = evt.clientX;
                let activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
                let diff = distanceToViewportLeft - activityBarWidth;
                if (diff < 170) diff = 170;
                if (distanceToViewportLeft > window.innerWidth - 300) diff = window.innerWidth - 300 - activityBarWidth;
                this.$refs.sash.style.left = `${diff}px`;
                this.$refs.fexplr.$el.style.width = `${diff}px`;
            }
        }
    },
    mounted() {
        window.addEventListener("mouseup", this.$options.methods.disableSash.bind(this));
        window.addEventListener("mousemove", this.$options.methods.slide.bind(this));
        this.$once("hook:beforeDestroy", () => {
            window.removeEventListener("mouseup", this.$options.methods.disableSash.bind(this));
            window.removeEventListener("mousemove", this.$options.methods.slide.bind(this));
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
        // flex 1 0 0
        min-width 300px
</style>
