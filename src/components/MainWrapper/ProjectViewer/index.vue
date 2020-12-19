<template>
    <div id="project-viewer">
        <file-explorer ref="fexplr" />
        <div ref="sash" class="sash" @mousedown="enableSash()"></div>
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
            this.$refs.fexplr.$el.style.pointerEvents = "null";
            this.$refs.fdiplr.$el.style.pointerEvents = "null";
            this.isSashActivated = !this.isSashActivated ? true : false;
        },
        disableSash() {
            this.isSashActivated = this.isSashActivated ? false : true;
            this.$refs.fexplr.$el.style.pointerEvents = "auto";
            this.$refs.fdiplr.$el.style.pointerEvents = "auto";
        },
        slide(evt) {
            if (this.isSashActivated) {
                let distanceToPageLeft = evt.clientX;
                let activityBarWidth = this.$parent.$refs.activbar.$el.getBoundingClientRect().width;
                if (distanceToPageLeft > activityBarWidth + 170 && distanceToPageLeft < window.innerWidth - 300) {
                    this.$refs.sash.style.left = `${distanceToPageLeft - activityBarWidth}px`;
                    this.$refs.fexplr.$el.style.minWidth = `${distanceToPageLeft - activityBarWidth}px`;
                }
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
        left 170px

        width 6px
        height 100%
        transform translateX(-3px)

        cursor col-resize
        user-select none
        z-index 10

    #file-explorer
        flex 0 0 0
        min-width 170px

    #file-displayer
        flex 1 0 0
        min-width 300px
</style>
