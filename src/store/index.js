import Vue from "vue";
import Vuex from "vuex";
import themes from "./themes";
import mock from "../mock";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        config: {
            lang: null,
            minWidth: 518,
            activityBar: {
                width: 48
            },
            fileExplorerOptions: {
                minWidth: 170,
                itemIndentStep: 11
            },
            fileDisplayerOptions: {
                minWidth: 300
            },
            editorCommonOptions: {
                // session options
                tabSize: 4,
                // renderer options
                theme: `ace/theme/${themes.textmate.name}`,
                fontSize: "14px",
                // extension options
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true
            }
        },
        project: mock.project,
        // cursor style
        cursorStyle: "auto",
        // currentActiveItem the partial reference of project
        currentActiveItem: {
            name: "readme.md",
            path: "Untitled/readme.md",
            isdir: false
        }
    },
    mutations: {
        setConfig(state, cfg) {
            Object.assign(state.config, cfg);
            localStorage.setItem("config", JSON.stringify(state.config));
        },
        setProject(state, proj) {
            state.project = proj.version && proj.version >= mock.project.version ? proj : mock.project;
        },
        setCursorStyle(state, style) {
            state.cursorStyle = style;
        },
        setCurrentActiveItem(state, item) {
            state.currentActiveItem = item;
        },
        setPropsOfCurrentActiveItem(state, obj) {
            Object.keys(obj).forEach(prop => {
                state.currentActiveItem[prop] = obj[prop];
            });
        },
        save(state) {
            localStorage.setItem("project", JSON.stringify(state.project));
            localStorage.setItem("currentActiveItem", JSON.stringify(state.currentActiveItem));
        }
    },
    actions: {},
    modules: {}
});
