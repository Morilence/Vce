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
import exttable from "@/store/exttable";
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
                    const ext = this.$store.state.currentActiveItem.name.split(".").pop();
                    return exttable[ext].mode;
                } else {
                    return exttable["txt"].mode;
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
