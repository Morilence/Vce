<template>
    <div id="file-displayer">
        <ace-editor
            :cursor="$store.state.cursor"
            :mode="mode"
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
    computed: {
        mode: {
            get() {
                if (this.$store.state.currentActiveItem && !this.$store.state.currentActiveItem.isdir) {
                    switch (this.$store.state.currentActiveItem.name.split(".").pop()) {
                        case "html":
                            return "ace/mode/html";
                        case "css":
                            return "ace/mode/css";
                        case "js":
                            return "ace/mode/javascript";
                        default:
                            return "ace/mode/text";
                    }
                } else {
                    return `ace/mode/text`;
                }
            }
        }
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
