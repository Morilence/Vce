<template>
    <div ref="ace" class="ace-editor"></div>
</template>

<script>
/* eslint-disable indent */
import Ace from "ace-builds";
import "ace-builds/webpack-resolver";
import "ace-builds/src-noconflict/ext-language_tools";
import exttable from "@/store/exttable";
export default {
    name: "AceEditor",
    props: {
        cursorStyle: {
            type: String,
            default: "auto"
        },
        commonOptions: {
            type: Object,
            default: () => {}
        }
    },
    data() {
        return {
            // lock for preventing the changing of cursorPos by ace.setValue()
            isCursorPosCanBeSaved: true
        };
    },
    computed: {
        // currentActiveItem may need to be modified, so can't be as a prop
        currentActiveItem: {
            get() {
                return this.$store.state.currentActiveItem;
            }
        }
    },
    methods: {},
    watch: {
        cursorStyle: {
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
        commonOptions: {
            handler(opts) {
                this.ace.setOptions(opts);
            }
        },
        currentActiveItem: {
            handler(item) {
                if (item != null && !item.isdir) {
                    const ext = item.name.split(".").pop();
                    this.ace.setOptions({ mode: exttable[ext].mode });
                    this.isCursorPosCanBeSaved = false;
                    if (item.content == undefined) this.$store.commit("setPropsOfCurrentActiveItem", { content: "" });
                    this.ace.setValue(item.content, 1);
                    this.isCursorPosCanBeSaved = true;
                    if (item.cursorPos) this.ace.moveCursorTo(item.cursorPos.row, item.cursorPos.column);
                }
            }
        }
    },
    mounted() {
        this.ace = Ace.edit(this.$el);
        this.ace.setOptions(this.commonOptions);
        // shortcut key bindings
        this.ace.commands.addCommand({
            name: "save",
            bindKey: { win: "Ctrl-S", mac: "Command-S" },
            exec: () => {
                this.$store.commit("setPropsOfCurrentActiveItem", { content: this.ace.getValue() });
                this.$store.commit("saveProject");
            }
        });
        // event listeners
        this.ace.selection.on("changeCursor", () => {
            if (this.isCursorPosCanBeSaved) {
                const cursorPos = this.ace.selection.getCursor();
                this.$store.commit("setPropsOfCurrentActiveItem", { cursorPos });
            }
        });
        // destroy & release
        this.$once("hook:beforeDestroy", () => {
            this.ace.destroy();
            this.ace = null;
        });
    }
};
</script>

<style lang="stylus" scoped>
.ace-editor
    width 100%
    min-width 300px
    height 100%
    box-sizing border-box

    user-select none
</style>
