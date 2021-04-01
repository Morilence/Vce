<template>
    <div id="file-displayer">
        <ace-editor
            ref="editor"
            :cursorStyle="$store.state.cursorStyle"
            :commonOptions="$store.state.config.editorCommonOptions"
        />
    </div>
</template>

<script>
/* eslint-disable indent */
import AceEditor from "./AceEditor";
export default {
    name: "FileDisplayer",
    components: {
        AceEditor
    },
    computed: {}
};
</script>

<style lang="stylus">
#file-displayer
    position relative

    height 100%
    box-sizing border-box

    user-select none
</style>
