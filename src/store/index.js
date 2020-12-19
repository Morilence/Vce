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
        project: [
            {
                title: "",
                expand: true,
                children: [],
                content: ``
            }
        ],
        currentFileInfo: {}
    },
    mutations: {
        setConfig(state, cfg) {
            for (let prop in cfg) {
                if (Object.prototype.hasOwnProperty.call(state.config, prop)) {
                    state.config[prop] = cfg[prop];
                }
            }
            localStorage.setItem("config", JSON.stringify(state.config));
        },
        setProject(state, proj) {
            state.project = proj;
            localStorage.setItem("project", JSON.stringify(state.project));
        },
        setCurrentFileInfo(state, info) {
            for (let prop in info) {
                if (Object.prototype.hasOwnProperty.call(state.currentFileInfo, prop)) {
                    state.currentFileInfo[prop] = info[prop];
                }
            }
        }
    },
    actions: {},
    modules: {}
});
