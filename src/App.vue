<template>
    <vue-scroll>
        <div id="app">
            <title-bar />
            <main-wrapper />
            <status-bar />
        </div>
    </vue-scroll>
</template>

<script>
import TitleBar from "./components/TitleBar";
import MainWrapper from "./components/MainWrapper";
import StatusBar from "./components/StatusBar";
export default {
    name: "App",
    components: {
        TitleBar,
        MainWrapper,
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
    min-width 520px
    height 100vh
    min-height 480px
    box-sizing border-box

    font-family Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
</style>
