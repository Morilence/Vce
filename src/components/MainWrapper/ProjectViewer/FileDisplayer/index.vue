<template>
    <div id="file-displayer">
        <ace-editor
            :cursor="$store.state.cursor"
            :mode="'ace/mode/html'"
            :commonOptions="$store.state.config.editorCommonOptions"
        />
    </div>
</template>

<script>
import AceEditor from "./AceEditor";
export default {
    name: "FileDisplayer",
    components: {
        AceEditor
    }
};
</script>

<style lang="stylus">
#file-displayer
    position relative

    width 100%
    height 100%

    user-select none
</style>
