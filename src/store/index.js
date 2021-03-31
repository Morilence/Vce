import Vue from "vue";
import Vuex from "vuex";
import themes from "./themes";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        config: {
            lang: null,
            editorCommonOptions: {
                // session options
                tabSize: 4,
                // renderer options
                theme: `ace/theme/${themes.textmate.name}`,
                fontSize: "15px",
                // extension options
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            }
        },
        project: {
            name: "Untitled",
            isdir: true,
            children: [
                {
                    name: "assets",
                    isdir: true,
                    children: [
                        {
                            name: "images",
                            isdir: true,
                            children: [
                                { name: "logo.ico", isdir: false },
                                { name: "zxy.png", isdir: false },
                                { name: "myx.jpg", isdir: false }
                            ]
                        },
                        {
                            name: "videos",
                            isdir: true,
                            children: []
                        },
                        {
                            name: "fonts",
                            isdir: true,
                            children: []
                        }
                    ]
                },
                {
                    name: "libs",
                    isdir: true,
                    children: [
                        {
                            name: "jQuery",
                            isdir: true,
                            children: [
                                {
                                    name: "jquery-3.4.1.min.js",
                                    isdir: false
                                }
                            ]
                        },
                        {
                            name: "Swiper",
                            isdir: true,
                            children: [
                                {
                                    name: "swiper-bundle.min.js",
                                    isdir: false
                                },
                                {
                                    name: "swiper-bundle.min.css",
                                    isdir: false
                                }
                            ]
                        },
                        {
                            name: "videojs",
                            isdir: true,
                            children: [
                                {
                                    name: "video.min.js",
                                    isdir: false
                                },
                                {
                                    name: "video-css.js",
                                    isdir: false
                                }
                            ]
                        },
                        { name: "anime.js", isdir: false },
                        { name: "normalize.css", isdir: false },
                        { name: "template-web.js", isdir: false },
                        { name: "vue.js", isdir: false }
                    ]
                },
                {
                    name: "index.html",
                    isdir: false
                },
                {
                    name: "index.css",
                    isdir: false
                },
                {
                    name: "index.js",
                    isdir: false
                }
            ]
        },
        // cursor style
        cursor: "auto",
        currentActiveItem: null
    },
    mutations: {
        setCursor(state, style) {
            state.cursor = style;
        },
        setConfig(state, cfg) {
            Object.assign(state.config, cfg);
            localStorage.setItem("config", JSON.stringify(state.config));
        },
        setProject(state, proj) {
            state.project = proj;
            localStorage.setItem("project", JSON.stringify(state.project));
        },
        setCurrentActiveItem(state, item) {
            state.currentActiveItem = JSON.parse(JSON.stringify(item));
        }
    },
    actions: {},
    modules: {}
});
