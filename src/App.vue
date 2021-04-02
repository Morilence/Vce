<template>
    <vue-scroll>
        <div id="app" ref="app" :style="{ cursor: $store.state.cursorStyle }">
            <title-bar />
            <main-wrapper ref="mwrapper" />
            <status-bar />
        </div>
    </vue-scroll>
</template>

<script>
import TitleBar from "./components/TitleBar";
import MainWrapper from "./components/MainWrapper";
import StatusBar from "./components/StatusBar";
import cssvar from "./style/cssvar";
export default {
    name: "App",
    components: {
        TitleBar,
        MainWrapper,
        StatusBar
    },
    computed: {
        CONFIG: {
            get() {
                return this.$store.state.config;
            }
        }
    },
    methods: {
        // refresh the whole app to apply the new state's change.
        refresh() {
            const ProjectViewer = this.$refs.mwrapper.$refs.projviewer;
            this.$nextTick(() => {
                ProjectViewer.adjustLayout(this.CONFIG.fileExplorerOptions.initialWidth);
            });
        },
        readLocalConfig() {
            if (localStorage.getItem("config") != null) {
                const config = JSON.parse(localStorage.getItem("config"));
                this.$store.commit("setConfig", config);
                // this.$store.commit("setFileExplorerOptions", config.fileExplorerOptions);
            }
        },
        readLocalProject() {
            if (localStorage.getItem("project") != null) {
                this.$store.commit("setProject", JSON.parse(localStorage.getItem("project")));
            }
        },
        readLocalCurrentActiveItem() {
            if (localStorage.getItem("currentActiveItem") != null) {
                this.$store.commit("setCurrentActiveItem", JSON.parse(localStorage.getItem("currentActiveItem")));
            }
            if (!this.$store.state.currentActiveItem.isdir) {
                this.$nextTick(() => {
                    const evt = document.createEvent("HTMLEvents");
                    evt.initEvent("click", true, true);
                    document
                        .querySelector(`[data-path="${this.$store.state.currentActiveItem.path}"] .flabel`)
                        .dispatchEvent(evt);
                });
            }
        }
    },
    mounted() {
        // init (after all components are mounted)
        this.readLocalConfig();
        this.readLocalProject();
        this.readLocalCurrentActiveItem();
        // rerender
        cssvar.set(this.$refs.app, {
            title_bar_height: `${this.CONFIG.titleBar.height}px`,
            status_bar_height: `${this.CONFIG.statusBar.height}px`,
            activity_bar_width: `${this.CONFIG.activityBar.width}px`,
            app_min_width: `${this.CONFIG.minWidth}px`,
            fexplr_min_width: `${this.CONFIG.fileExplorerOptions.minWidth}px`,
            fdiplr_min_width: `${this.CONFIG.fileDisplayerOptions.minWidth}px`
        });
        this.refresh();
    }
};
</script>

<style lang="stylus">
// global
html,
body
    width 100vw
    height 100vh

#app
    display grid
    grid-template-rows: var(--title_bar_height) 1fr var(--status_bar_height)

    position relative

    width 100vw
    min-width var(--app_min_width)
    height 100vh
    min-height 480px
    box-sizing border-box

    overflow hidden

    color @css{rgb(var(--primary_text_rgb))}
    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
