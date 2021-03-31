<template>
    <div ref="ace" class="ace-editor"></div>
</template>

<script>
/* eslint-disable indent */
import Ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools";
export default {
    name: "AceEditor",
    props: {
        cursor: {
            type: String,
            default: "auto"
        },
        mode: {
            type: String,
            default: null
        },
        commonOptions: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {};
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
        cursor: {
            handler(newVal) {
                switch (newVal) {
                    case "col-resize":
                        this.$el.querySelector(".ace_gutter").style.pointerEvents = "none";
                        this.$el.querySelector(".ace_gutter-layer").style.pointerEvents = "none";
                        this.$el.querySelector(".ace_scroller").style.pointerEvents = "none";
                        break;
                    case "auto":
                    default:
                        this.$el.querySelector(".ace_gutter").style.pointerEvents = "auto";
                        this.$el.querySelector(".ace_gutter-layer").style.pointerEvents = "auto";
                        this.$el.querySelector(".ace_scroller").style.pointerEvents = "auto";
                        break;
                }
            }
        },
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

    user-select none
</style>
