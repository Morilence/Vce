<template>
    <div id="file-displayer">
        <ace-editor
            ref="editor"
            :cursorStyle="$store.state.cursorStyle"
            :commonOptions="$store.state.config.editorCommonOptions"
        />
        <blank-page :class="{ show: isBlankPageShow }" />
    </div>
</template>

<script>
/* eslint-disable indent */
import BlankPage from "./BlankPage";
import AceEditor from "./AceEditor";
import ext from "@/store/ext";
export default {
    name: "FileDisplayer",
    components: {
        BlankPage,
        AceEditor
    },
    data() {
        return {
            isBlankPageShow: true
        };
    },
    methods: {
        switchPage(page) {
            this.showPage = page;
        }
    },
    computed: {
        currentActiveItem: {
            get() {
                return this.$store.state.currentActiveItem;
            }
        }
    },
    watch: {
        currentActiveItem: {
            handler(item) {
                if (!item.isdir) {
                    this.isBlankPageShow = !ext.table[ext.extname(item.name)].ficon.includes("file");
                }
            }
        }
    }
};
</script>

<style lang="stylus">
#file-displayer
    position relative

    height 100%
    box-sizing border-box

    user-select none
</style>
