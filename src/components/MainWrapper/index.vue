<template>
    <div id="main-wrapper">
        <activity-bar ref="activbar" />
        <project-viewer ref="projviewer" />
    </div>
</template>

<script>
import ActivityBar from "./ActivityBar";
import ProjectViewer from "./ProjectViewer";
export default {
    name: "MainWrapper",
    components: {
        ActivityBar,
        ProjectViewer
    },
    data() {
        return {
            tabs: []
        };
    }
};
</script>

<style lang="stylus">
#main-wrapper
    display flex
    flex-direction row
    justify-content flex-start
    align-items center

    position relative

    width 100%
    height 100%
    box-sizing border-box
</style>
