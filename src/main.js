import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// normalize.css
import "normalize.css/normalize.css";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCaretRight as fasCaretRight,
    faCaretDown as fasCaretDown,
    faFile as fasFile,
    faFileImage as fasFileImage,
    faFolder as fasFolder,
    faFolderOpen as fasFolderOpen
} from "@fortawesome/free-solid-svg-icons";
Vue.component("font-awesome-icon", FontAwesomeIcon);
library.add(fasCaretRight);
library.add(fasCaretDown);
library.add(fasFile);
library.add(fasFileImage);
library.add(fasFolder);
library.add(fasFolderOpen);

// vue-scroll
import vuescroll from "vuescroll";
Vue.use(vuescroll, {
    name: "vueScroll",
    ops: {
        vuescroll: {
            mode: "native",
            sizeStrategy: "percent",
            detectResize: true,
            wheelScrollDuration: 360
        },
        scrollPanel: {
            easing: "easeInOutQuad"
        },
        rail: {
            gutterOfSide: "4px"
        },
        bar: {
            size: "8px",
            background: "rgb(144, 147, 153)",
            opacity: 0.2
        }
    }
});

// iview
// import { Tabs, Tree } from "view-design";
// import "view-design/dist/styles/iview.css";
// Vue.component("Tabs", Tabs);
// Vue.component("Table", Tree);

// custom components
import FList from "./components/MainWrapper/ProjectViewer/FileExplorer/FList";
import FItem from "./components/MainWrapper/ProjectViewer/FileExplorer/FItem";
Vue.component("FList", FList);
Vue.component("FItem", FItem);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
