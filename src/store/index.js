import Vue from "vue";
import Vuex from "vuex";
import themes from "./themes";
import mock from "../mock";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        config: {
            lang: null,
            fileExplorerOptions: {
                minWidth: 170,
                itemIndentStep: 11
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
        cursor: "auto",
        // currentActiveItem the partial reference of project
        currentActiveItem: null
    },
    mutations: {
        setConfig(state, cfg) {
            Object.assign(state.config, cfg);
            localStorage.setItem("config", JSON.stringify(state.config));
        },
        saveProject(state) {
            localStorage.setItem("project", JSON.stringify(state.project));
        },
        setProject(state, proj) {
            state.project = proj;
        },
        setCursor(state, style) {
            state.cursor = style;
        },
        setPropsOfCurrentActiveItem(state, obj) {
            Object.keys(obj).forEach(prop => {
                state.currentActiveItem[prop] = obj[prop];
            });
        },
        setCurrentActiveItem(state, item) {
            state.currentActiveItem = item;
        }
    },
    actions: {},
    modules: {}
});
