<template>
    <div ref="ace" class="ace-editor"></div>
</template>

<script>
import Ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools";
import "@convergencelabs/ace-collab-ext/css/ace-collab-ext.min.css";
export default {
    name: "AceEditor",
    data() {
        return {
            mode: null,
            commonOptions: this.$store.state.config.editorCommonOptions
        };
    },
    computed: {
        options: {
            get() {
                let opts = { mode: this.mode };
                for (let opt in this.commonOptions) {
                    opts[opt] = this.commonOptions[opt];
                }
                return opts;
            }
        }
    },
    methods: {},
    watch: {
        options: {
            handler() {
                this.ace.setOptions(this.options);
            }
        }
    },
    mounted() {
        this.ace = Ace.edit(this.$el);
        this.ace.setOptions(this.options);
    },
    beforeDestroy() {
        this.ace.destroy();
        this.ace = null;
    }
};
</script>

<style lang="stylus" scoped>
.ace-editor
    width 100%
    min-width 300px
    height 100%
</style>
