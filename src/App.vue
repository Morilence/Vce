<template>
    <vue-scroll>
        <div id="app">
            <title-bar />
            <ace-editor />
            <status-bar />
        </div>
    </vue-scroll>
</template>

<script>
import TitleBar from "./components/TitleBar.vue";
import AceEditor from "./components/AceEditor.vue";
import StatusBar from "./components/StatusBar.vue";
export default {
    name: "App",
    components: {
        TitleBar,
        AceEditor,
        StatusBar
    },
    methods: {
        readLocalConfig() {
            if (localStorage.getItem("config") != null) {
                this.$store.commit("setConfig", JSON.parse(localStorage.getItem("config")));
            }
        },
        readLocalProject() {
            if (localStorage.getItem("project") != null) {
                this.$store.commit("setProject", JSON.parse(localStorage.getItem("project")));
            }
        }
    },
    mounted() {
        // init(after all components are mounted)
        this.readLocalConfig();
        this.readLocalProject();
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
    grid-template-rows: 30px 1fr 22px

    position relative

    width 100vw
    min-width 1080px
    height 100vh
    min-height 480px
    box-sizing border-box

    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
