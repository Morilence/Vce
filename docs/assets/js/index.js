(function(e){function t(t){for(var i,r,n=t[0],c=t[1],l=t[2],f=0,p=[];f<n.length;f++)r=n[f],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,n=1;n<a.length;n++){var c=a[n];0!==s[c]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=a[0]))}return e}var i={},s={index:0},o=[];function r(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=i,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(a,i,function(t){return e[t]}.bind(null,i));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],c=n.push.bind(n);n.push=t,n=n.slice();for(var l=0;l<n.length;l++)t(n[l]);var d=c;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0d41":function(e,t,a){"use strict";a("15db")},"147a":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,".flist[data-v-23319564]{width:100%;padding-left:0;margin:0 0}",""]),e.exports=t},"15db":function(e,t,a){var i=a("acde");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("a5874114",i,!0,{sourceMap:!1,shadowMode:!1})},"16c0":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#file-displayer{position:relative;height:100%;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}",""]),e.exports=t},"244d":function(e,t,a){"use strict";a("75a0")},"298f":function(e,t,a){var i=a("e11f");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("1e1ebbf1",i,!0,{sourceMap:!1,shadowMode:!1})},"2b33":function(e,t,a){"use strict";a("2d24")},"2d24":function(e,t,a){var i=a("147a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("102376ae",i,!0,{sourceMap:!1,shadowMode:!1})},"2f58":function(e,t,a){"use strict";a("d3df")},"36d6":function(e,t,a){var i=a("3c96");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("cf66168c",i,!0,{sourceMap:!1,shadowMode:!1})},"39ff":function(e,t,a){var i=a("4d45");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("75115bda",i,!0,{sourceMap:!1,shadowMode:!1})},"3c96":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#title-bar{width:100%;height:100%}",""]),e.exports=t},"4d45":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#file-explorer{position:relative;height:100%;padding-left:0;background-color:#f5f5f5;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}#file-explorer .root>.flabel{padding:8px 0;background-color:transparent;font-weight:700;transition:none}#file-explorer .root>.flabel>.ficon{display:none}#file-explorer .root>.flabel:hover{background-color:transparent}",""]),e.exports=t},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("vue-scroll",[a("div",{ref:"app",style:{cursor:e.$store.state.cursorStyle},attrs:{id:"app"}},[a("title-bar"),a("main-wrapper"),a("status-bar")],1)])},o=[],r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{attrs:{id:"title-bar"}})},n=[],c={name:"TitleBar"},l=c,d=(a("9468"),a("2877")),f=Object(d["a"])(l,r,n,!1,null,null,null),p=f.exports,m=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"main-wrapper"}},[a("activity-bar",{ref:"activbar"}),a("project-viewer")],1)},u=[],h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"activity-bar"}})},g=[],v={name:"ActivityBar"},b=v,y=(a("0d41"),Object(d["a"])(b,h,g,!1,null,null,null)),w=y.exports,_=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"project-viewer"}},[a("file-explorer",{ref:"fexplr"}),a("div",{ref:"sash",class:{sash:!0,active:e.isSashActivated},on:{mousedown:function(t){return t.target!==t.currentTarget?null:e.enableSash()}}}),a("file-displayer",{ref:"fdiplr"})],1)},x=[],$=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{attrs:{id:"file-explorer"}},[a("f-item",{ref:"root",staticClass:"root",attrs:{layer:0,catalog:"",item:this.$store.state.project}})],1)},C=[],S={name:"FileExplorer",data:function(){return{}},mounted:function(){}},k=S,j=(a("decc"),Object(d["a"])(k,$,C,!1,null,null,null)),O=j.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"file-displayer"}},[a("ace-editor",{ref:"editor",attrs:{cursorStyle:e.$store.state.cursorStyle,commonOptions:e.$store.state.config.editorCommonOptions}})],1)},I=[],z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{ref:"ace",staticClass:"ace-editor"})},A=[],P=(a("b0c0"),a("ac1f"),a("1276"),a("6d4f")),M=a.n(P),B=(a("65d8"),a("da79"),a("b7f5")),W={bmp:{ficon:["fas","file-image"]},gif:{ficon:["fas","file-image"]},ico:{ficon:["fas","file-image"]},jpg:{ficon:["fas","file-image"]},jpeg:{ficon:["fas","file-image"]},png:{ficon:["fas","file-image"]},svg:{ficon:["fas","file-image"]},tif:{ficon:["fas","file-image"]},webp:{ficon:["fas","file-image"]},c:{mode:"ace/mode/c_cpp",ficon:["fas","file"]},cpp:{mode:"ace/mode/c_cpp",ficon:["fas","file"]},cs:{mode:"ace/mode/csharp",ficon:["fas","file"]},css:{mode:"ace/mode/css",ficon:["fas","file"]},h:{mode:"ace/mode/c_cpp",ficon:["fas","file"]},html:{mode:"ace/mode/html",ficon:["fas","file"]},java:{mode:"ace/mode/java",ficon:["fas","file"]},js:{mode:"ace/mode/javascript",ficon:["fas","file"]},json:{mode:"ace/mode/json",ficon:["fas","file"]},json5:{mode:"ace/mode/json5",ficon:["fas","file"]},md:{mode:"ace/mode/markdown",ficon:["fas","file"]},php:{mode:"ace/mode/php",ficon:["fas","file"]},py:{mode:"ace/mode/python",ficon:["fas","file"]},txt:{mode:"ace/mode/text",ficon:["fas","file"]}},L={name:"AceEditor",props:{cursorStyle:{type:String,default:"auto"},commonOptions:{type:Object,default:function(){}}},data:function(){return{isCursorPosCanBeSaved:!0}},computed:{currentActiveItem:{get:function(){return this.$store.state.currentActiveItem}}},watch:{cursorStyle:{handler:function(e){switch(e){case"col-resize":this.$el.querySelector(".ace_gutter").style.pointerEvents="none",this.$el.querySelector(".ace_gutter-layer").style.pointerEvents="none",this.$el.querySelector(".ace_scroller").style.pointerEvents="none";break;case"auto":default:this.$el.querySelector(".ace_gutter").style.pointerEvents="auto",this.$el.querySelector(".ace_gutter-layer").style.pointerEvents="auto",this.$el.querySelector(".ace_scroller").style.pointerEvents="auto";break}}},commonOptions:{handler:function(e){this.ace.setOptions(e)}},currentActiveItem:{handler:function(e){var t=this;if(null!=e&&!e.isdir){var a=e.name.split(".").pop();this.ace.setOptions({mode:W[a].mode}),this.isCursorPosCanBeSaved=!1,void 0==e.content&&this.$store.commit("setPropsOfCurrentActiveItem",{content:""}),this.ace.setValue(e.content,1),this.isCursorPosCanBeSaved=!0,e.cursorPos&&this.ace.moveCursorTo(e.cursorPos.row,e.cursorPos.column),setTimeout((function(){t.contentXScroll.update(),t.contentYScroll.update()}),0)}}}},mounted:function(){var e=this;this.ace=M.a.edit(this.$el),this.ace.setOptions(this.commonOptions),this.contentXScroll=new B["a"](this.ace.renderer.scrollBarH.element,{wheelPropagation:!1,suppressScrollY:!0}),this.contentYScroll=new B["a"](this.ace.renderer.scrollBarV.element,{wheelPropagation:!1,suppressScrollX:!0}),this.ace.commands.addCommand({name:"save",bindKey:{win:"Ctrl-S",mac:"Command-S"},exec:function(){e.$store.commit("setPropsOfCurrentActiveItem",{content:e.ace.getValue()}),e.$store.commit("save")}}),this.ace.selection.on("changeCursor",(function(){if(e.isCursorPosCanBeSaved){var t=e.ace.selection.getCursor();e.$store.commit("setPropsOfCurrentActiveItem",{cursorPos:t})}})),this.$once("hook:beforeDestroy",(function(){e.contentXScroll.destroy(),e.contentXScroll=null,e.contentYScroll.destroy(),e.contentYScroll=null,e.ace.destroy(),e.ace=null}))}},F=L,T=(a("2f58"),Object(d["a"])(F,z,A,!1,null,"50d59f8a",null)),D=T.exports,q={name:"FileDisplayer",components:{AceEditor:D},computed:{}},R=q,J=(a("244d"),Object(d["a"])(R,E,I,!1,null,null,null)),V=J.exports,X={name:"ProjectViewer",components:{FileExplorer:O,FileDisplayer:V},data:function(){return{isSashActivated:!1}},methods:{enableSash:function(){this.isSashActivated=!0,this.$refs.fexplr.$el.style.pointerEvents="null",this.$refs.fdiplr.$el.style.pointerEvents="null",this.$store.commit("setCursorStyle","col-resize")},disableSash:function(){this.isSashActivated=!1,this.$refs.fexplr.$el.style.pointerEvents="auto",this.$refs.fdiplr.$el.style.pointerEvents="auto",this.$store.commit("setCursorStyle","auto")},changeLayout:function(e){var t=this,a=this.$parent.$refs.activbar.$el.getBoundingClientRect().width,i=this.$store.state.config.fileDisplayerOptions.minWidth;this.$refs.sash.style.left="".concat(e,"px"),this.$refs.fexplr.$el.style.width="".concat(e,"px");var s=window.innerWidth-e-a<i?i:window.innerWidth-e-a;this.$refs.fdiplr.$el.style.width="".concat(Math.round(s),"px"),this.$refs.fdiplr.$refs.editor.ace.renderer.scrollBarH.element.style.width="".concat(Math.round(s-this.$refs.fdiplr.$refs.editor.ace.renderer.gutterWidth),"px"),this.$nextTick((function(){t.$refs.fdiplr.$refs.editor.ace.resize(),t.$refs.fdiplr.$refs.editor.contentXScroll.update(),t.$refs.fdiplr.$refs.editor.contentYScroll.update()}))},onSashDragging:function(e){if(this.isSashActivated&&window.innerWidth>this.$store.state.config.minWidth){var t=e.clientX,a=this.$parent.$refs.activbar.$el.getBoundingClientRect().width,i=this.$store.state.config.fileExplorerOptions.minWidth,s=this.$store.state.config.fileDisplayerOptions.minWidth,o=t-a;o<i&&(o=i),t>window.innerWidth-s&&(o=window.innerWidth-s-a),this.$options.methods.changeLayout.bind(this)(o)}},onWindowResizing:function(){var e=this.$refs.sash.getBoundingClientRect().left+this.$refs.sash.getBoundingClientRect().width/2,t=this.$parent.$refs.activbar.$el.getBoundingClientRect().width,a=this.$store.state.config.fileExplorerOptions.minWidth,i=this.$store.state.config.fileDisplayerOptions.minWidth,s=e-t;e>window.innerWidth-i&&e>t+a&&(s=window.innerWidth-i-t,s<a&&(s=a)),this.$options.methods.changeLayout.bind(this)(s)}},mounted:function(){var e=this;this.$refs.fdiplr.$el.style.width="".concat(Math.round(this.$refs.fdiplr.$el.getBoundingClientRect().width),"px"),this.$refs.fdiplr.$refs.editor.ace.renderer.scrollBarH.element.style.width="".concat(Math.round(this.$refs.fdiplr.$el.getBoundingClientRect().width-this.$refs.fdiplr.$refs.editor.ace.renderer.gutterWidth),"px"),window.addEventListener("mouseup",this.$options.methods.disableSash.bind(this)),window.addEventListener("mousemove",this.$options.methods.onSashDragging.bind(this)),window.addEventListener("resize",this.$options.methods.onWindowResizing.bind(this)),this.$once("hook:beforeDestroy",(function(){window.removeEventListener("mouseup",e.$options.methods.disableSash.bind(e)),window.removeEventListener("mousemove",e.$options.methods.onSashDragging.bind(e)),window.removeEventListener("resize",e.$options.methods.onWindowResizing.bind(e))}))}},N=X,Y=(a("ba2a"),Object(d["a"])(N,_,x,!1,null,null,null)),H=Y.exports,U={name:"MainWrapper",components:{ActivityBar:w,ProjectViewer:H},data:function(){return{tabs:[]}}},K=U,Q=(a("db81"),Object(d["a"])(K,m,u,!1,null,null,null)),G=Q.exports,Z=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{attrs:{id:"status-bar"}})},ee=[],te={name:"StatusBar"},ae=te,ie=(a("697b"),Object(d["a"])(ae,Z,ee,!1,null,null,null)),se=ie.exports,oe=(a("4160"),a("b64b"),a("159b"),{config:{primary_text_rgb:"48, 49, 51",regular_text_rgb:"96, 98, 102",secondary_text_rgb:"144, 147, 153",placeholder_rgb:"192, 196, 204"},set:function(e){var t=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};Object.assign(this.config,a),Object.keys(this.config).forEach((function(a){e.style.setProperty("--".concat(a),t.config[a])}))}}),re={name:"App",components:{TitleBar:p,MainWrapper:G,StatusBar:se},methods:{readLocalConfig:function(){null!=localStorage.getItem("config")&&this.$store.commit("setConfig",JSON.parse(localStorage.getItem("config")))},readLocalProject:function(){null!=localStorage.getItem("project")&&this.$store.commit("setProject",JSON.parse(localStorage.getItem("project")))},readLocalCurrentActiveItem:function(){var e=this;null!=localStorage.getItem("currentActiveItem")&&this.$store.commit("setCurrentActiveItem",JSON.parse(localStorage.getItem("currentActiveItem"))),this.$store.state.currentActiveItem.isdir||this.$nextTick((function(){var t=document.createEvent("HTMLEvents");t.initEvent("click",!0,!0),document.querySelector('[data-path="'.concat(e.$store.state.currentActiveItem.path,'"] .flabel')).dispatchEvent(t)}))}},mounted:function(){this.readLocalConfig(),this.readLocalProject(),this.readLocalCurrentActiveItem(),oe.set(this.$refs.app)}},ne=re,ce=(a("7faf"),Object(d["a"])(ne,s,o,!1,null,null,null)),le=ce.exports,de=a("8c4f");i["default"].use(de["a"]);var fe=[],pe=new de["a"]({routes:fe}),me=pe,ue=a("2f62"),he={ambiance:{name:"ambiance",themeClass:"ace-ambiance"},chaos:{name:"chaos",themeClass:"ace-chaos"},chrome:{name:"chrome",themeClass:"ace-chrome"},clouds:{name:"clouds",themeClass:"ace-clouds"},clouds_midnight:{name:"clouds_midnight",themeClass:"ace-clouds-midnight"},cobalt:{name:"cobalt",themeClass:"ace-cobalt"},crimson_editor:{name:"crimson_editor",themeClass:"ace-crimson-editor"},dawn:{name:"dawn",themeClass:"ace-dawn"},dracula:{name:"dracula",themeClass:"ace-dracula"},dreamweaver:{name:"dreamweaver",themeClass:"ace-dreamweaver"},eclipse:{name:"eclipse",themeClass:"ace-eclipse"},github:{name:"github",themeClass:"ace-github"},gob:{name:"gob",themeClass:"ace-gob"},gruvbox:{name:"gruvbox",themeClass:"ace-gruvbox"},idle_fingers:{name:"idle_fingers",themeClass:"ace-idle-fingers"},iplastic:{name:"iplastic",themeClass:"ace-iplastic"},katzenmilch:{name:"katzenmilch",themeClass:"ace-katzenmilch"},kr_theme:{name:"kr_theme",themeClass:"ace-kr-theme"},kuroir:{name:"kuroir",themeClass:"ace-kuroir"},merbivore:{name:"merbivore",themeClass:"ace-merbivore"},merbivore_soft:{name:"merbivore_soft",themeClass:"ace-merbivore-soft"},mono_industrial:{name:"mono_industrial",themeClass:"ace-mono-industrial"},monokai:{name:"monokai",themeClass:"ace-monokai"},nord_dark:{name:"nord_dark",themeClass:"ace-nord-dark"},pastel_on_dark:{name:"pastel_on_dark",themeClass:"ace-pastel-on-dark"},solarized_dark:{name:"solarized_dark",themeClass:"ace-solarized-dark"},solarized_light:{name:"solarized_light",themeClass:"ace-solarized-light"},sqlserver:{name:"sqlserver",themeClass:"ace-sqlserver"},terminal:{name:"terminal",themeClass:"ace-terminal-theme"},textmate:{name:"textmate",themeClass:"ace-tm"},tomorrow:{name:"tomorrow",themeClass:"ace-tomorrow"},tomorrow_night:{name:"tomorrow_night",themeClass:"ace-tomorrow-night"},tomorrow_night_blue:{name:"tomorrow_night_blue",themeClass:"ace-tomorrow-night-blue"},tomorrow_night_bright:{name:"tomorrow_night_bright",themeClass:"ace-tomorrow-night-bright"},tomorrow_night_eighties:{name:"tomorrow_night_eighties",themeClass:"ace-tomorrow-night-eighties"},twilight:{name:"twilight",themeClass:"ace-twilight"},vibrant_ink:{name:"vibrant_ink",themeClass:"ace-vibrant-ink"},xcode:{name:"xcode",themeClass:"ace-xcode"}},ge={project:{version:1.04,name:"Untitled",isdir:!0,isfolded:!1,children:[{name:"src",isdir:!0,isfolded:!0,children:[{name:"assets",isdir:!0,isfolded:!0,children:[{name:"images",isdir:!0,isfolded:!0,children:[{name:"logo.ico",isdir:!1},{name:"portrait.png",isdir:!1},{name:"banner.jpg",isdir:!1}]},{name:"videos",isdir:!0,isfolded:!0,children:[]},{name:"fonts",isdir:!0,isfolded:!0,children:[]}]},{name:"libs",isdir:!0,isfolded:!0,children:[{name:"normalize.css",isdir:!1,content:"I don't want to copy anymore...\nhttps://necolas.github.io/normalize.css/latest/normalize.css"}]},{name:"index.html",isdir:!1,content:'<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta http-equiv="X-UA-Compatible" content="IE=edge">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>tiny-progress</title>\n    <link rel="stylesheet" href="https://www.morilence.com/sundries/tiny-progress/libs/tinyprogress.css">\n    <link rel="stylesheet" href="./index.css">\n    <script src="https://www.morilence.com/sundries/tiny-progress/libs/tinyprogress.js"><\/script>\n    <script src="./index.js"><\/script>\n</head>\n<body>\n    <div id="app">\n        <div class="progress"></div>\n    </div>\n</body>\n</html>'},{name:"index.css",isdir:!1,content:"html, body {\n    padding: 0;\n    margin: 0;\n    height: 100vh;;\n}\n\n#app {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    min-width: 500px;\n    height: 100%;\n    margin: 0 auto;\n\n    background-color: blueviolet;\n}\n\n.tiny-progress {\n    width: 320px;\n    height: 6px;\n}"},{name:"index.js",isdir:!1,content:'const tprogress = new TinyProgress(".progress", {\n    height: "8px",\n    thumbDiam: "16px"\n});\n\ntprogress.on("seek", logger);\ntprogress.on("slidingstart", logger);\ntprogress.on("sliding", logger);\ntprogress.on("slidingend", logger);\n// tprogress.on("loadedchange", logger);\n// tprogress.on("playedchange", logger);\ntprogress.setLoaded(0.75);\ntprogress.setPlayed(0.45);\n\nfunction logger (evt) {\n    console.log("%c"+(evt.percentage * 100).toFixed(2)+"%. %c["+evt.type+"]", "color: greenyellow;", "color: blueviolet"); \n}'}]},{name:"current files/dirs are all static.txt",isdir:!1,content:"Just as the name says, but you can save your changes by Ctrl+S."},{name:"readme.md",isdir:!1,content:"# Vce\n\n## Intro\n\nVce is an online editor developed mainly on Vue and Ace.\n\n## Why Vce ?\n\n+ One is that developers can finish to frame simple projects in some new and temporary PC/Pad environment with this small little-smart editor.\n+ The second is to be able to do some project level progress presentation or development demonstration in some emergency situations.\n+ Third, the author is also expected to encapsulate it as a library so that more developers can refer to their pages and applications.\n\n## Features\n\n+ no backend\n+ use localStorage to achieve data persistence\n+ support most common editor operations (shortcut, basic tips, auto-completion...)\n- irregular update and repair\n- a very lonely author\n\n## Caveats\n\nI'm still in development, so if you come across some fantastic bug, just fuck off them.\n\n## Epilogue\n\nBye..."}]}};i["default"].use(ue["a"]);var ve=new ue["a"].Store({state:{config:{lang:null,minWidth:518,activityBar:{width:48},fileExplorerOptions:{minWidth:170,itemIndentStep:11},fileDisplayerOptions:{minWidth:300},editorCommonOptions:{tabSize:4,theme:"ace/theme/".concat(he.textmate.name),fontSize:"14px",enableBasicAutocompletion:!0,enableLiveAutocompletion:!0}},project:ge.project,cursorStyle:"auto",currentActiveItem:{name:"readme.md",path:"Untitled/readme.md",isdir:!1}},mutations:{setConfig:function(e,t){Object.assign(e.config,t),localStorage.setItem("config",JSON.stringify(e.config))},setProject:function(e,t){e.project=t.version&&t.version>=ge.project.version?t:ge.project},setCursorStyle:function(e,t){e.cursorStyle=t},setCurrentActiveItem:function(e,t){e.currentActiveItem=t},setPropsOfCurrentActiveItem:function(e,t){Object.keys(t).forEach((function(a){e.currentActiveItem[a]=t[a]}))},save:function(e){localStorage.setItem("project",JSON.stringify(e.project)),localStorage.setItem("currentActiveItem",JSON.stringify(e.currentActiveItem))}},actions:{},modules:{}}),be=(a("f5df1"),a("ad3d")),ye=a("ecee"),we=a("c074"),_e=a("77a0"),xe=a.n(_e),$e=(a("7da8"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"flist"},e._l(e.list,(function(t,i){return a("f-item",{key:i,attrs:{layer:e.layer,catalog:e.catalog,item:t}})})),1)}),Ce=[],Se=(a("a9e3"),{name:"flist",props:{layer:{type:Number,default:0},catalog:{type:String,default:""},list:{type:Array,default:function(){return[]}}}}),ke=Se,je=(a("2b33"),Object(d["a"])(ke,$e,Ce,!1,null,"23319564",null)),Oe=je.exports,Ee=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.item.isdir?a("li",{class:{fitem:!0,dir:!0,folded:e.isFolded,active:e.path==e.$store.state.currentActiveItem.path},attrs:{"data-path":e.path}},[a("div",{staticClass:"flabel",style:{paddingLeft:(e.layer+1)*e.$store.state.config.fileExplorerOptions.itemIndentStep+"px",pointerEvents:"col-resize"==e.$store.state.cursorStyle?"none":"auto"},on:{click:function(t){return e.onItemClick(e.item)}}},[a("font-awesome-icon",{staticClass:"farrow",attrs:{icon:["fas","caret-right"]}}),a("font-awesome-icon",{staticClass:"ficon ",attrs:{icon:["fas",e.isFolded?"folder":"folder-open"]}}),a("span",{staticClass:"fname"},[e._v(e._s(e.item.name))])],1),a("f-list",{attrs:{layer:e.layer+1,list:e.item.children,catalog:""+(""==e.catalog?e.item.name:e.catalog+"/"+e.item.name)}})],1):a("li",{class:{fitem:!0,file:!0,active:e.path==e.$store.state.currentActiveItem.path},attrs:{"data-path":e.path}},[a("div",{staticClass:"flabel",style:{paddingLeft:(e.layer+1)*e.$store.state.config.fileExplorerOptions.itemIndentStep+"px",pointerEvents:"col-resize"==e.$store.state.cursorStyle?"none":"auto"},on:{click:function(t){return e.onItemClick(e.item)}}},[a("span",{staticClass:"farrow"}),a("font-awesome-icon",{staticClass:"ficon ",attrs:{icon:e.icon(e.item.name)}}),a("span",{staticClass:"fname"},[e._v(e._s(e.item.name))])],1)])},Ie=[],ze=(a("99af"),{name:"fitem",props:{layer:{type:Number,default:0},catalog:{type:String,default:""},item:{type:Object,default:function(){return{}}}},data:function(){return{isFolded:this.item.isfolded}},computed:{path:{get:function(){return"".concat(this.catalog,"/").concat(this.item.name)}},icon:{get:function(){return function(e){return W[e.split(".").pop()].ficon}}}},watch:{item:{handler:function(e){this.isFolded=e.isfolded}}},methods:{onItemClick:function(e){this.$store.commit("setCurrentActiveItem",e),this.$store.commit("setPropsOfCurrentActiveItem",{path:this.path}),e.isdir&&(this.$options.methods.toggleFoldedState.bind(this)(),this.$store.commit("setPropsOfCurrentActiveItem",{isfolded:this.isFolded})),this.$store.commit("save")},toggleFoldedState:function(){this.isFolded=!this.isFolded}}}),Ae=ze,Pe=(a("ffd2"),Object(d["a"])(Ae,Ee,Ie,!1,null,"56a90484",null)),Me=Pe.exports;i["default"].config.productionTip=!1,i["default"].component("font-awesome-icon",be["a"]),ye["c"].add(we["b"]),ye["c"].add(we["a"]),ye["c"].add(we["c"]),ye["c"].add(we["d"]),ye["c"].add(we["e"]),ye["c"].add(we["f"]),i["default"].use(xe.a,{name:"vueScroll",ops:{vuescroll:{mode:"native",sizeStrategy:"percent",detectResize:!0,wheelScrollDuration:360},scrollPanel:{easing:"easeInOutQuad"},rail:{gutterOfSide:"4px"},bar:{size:"8px",background:"rgb(144, 147, 153)",opacity:.2}}}),i["default"].component("FList",Oe),i["default"].component("FItem",Me),new i["default"]({router:me,store:ve,render:function(e){return e(le)}}).$mount("#app")},"5e52":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,".ace-editor[data-v-50d59f8a]{width:100%;min-width:300px;height:100%;box-sizing:border-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail].ps--clicking,.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail]:focus,.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail]:hover,.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail].ps--clicking,.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail]:focus,.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail]:hover{background-color:hsla(0,0%,39.2%,.05);opacity:.9}.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__thumb],.ace-editor[data-v-50d59f8a] .ps [class*=ps__thumb]{border-radius:0;background-color:#ccc;opacity:.2;transition:opacity .3s}.ace-editor[data-v-50d59f8a] .ps:hover[class*=ps--scrolling] [class*=ps__thumb],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail].ps--clicking [class*=ps__thumb],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail]:hover [class*=ps__thumb],.ace-editor[data-v-50d59f8a] .ps[class*=ps--scrolling] [class*=ps__thumb],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail].ps--clicking [class*=ps__thumb],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail]:hover [class*=ps__thumb]{border-radius:0;background-color:#ccc;opacity:.6}.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail].ps--clicking [class*=ps__thumb-x],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail]:hover [class*=ps__thumb-x],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__thumb-x],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail].ps--clicking [class*=ps__thumb-x],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail]:hover [class*=ps__thumb-x],.ace-editor[data-v-50d59f8a] .ps [class*=ps__thumb-x]{height:10.5px}.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail].ps--clicking [class*=ps__thumb-y],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__rail]:hover [class*=ps__thumb-y],.ace-editor[data-v-50d59f8a] .ps:hover [class*=ps__thumb-y],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail].ps--clicking [class*=ps__thumb-y],.ace-editor[data-v-50d59f8a] .ps [class*=ps__rail]:hover [class*=ps__thumb-y],.ace-editor[data-v-50d59f8a] .ps [class*=ps__thumb-y]{width:10.5px}",""]),e.exports=t},"627a":function(e,t,a){var i=a("994a");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("01cb7313",i,!0,{sourceMap:!1,shadowMode:!1})},"697b":function(e,t,a){"use strict";a("e00b")},"75a0":function(e,t,a){var i=a("16c0");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("908f421e",i,!0,{sourceMap:!1,shadowMode:!1})},"7faf":function(e,t,a){"use strict";a("627a")},9468:function(e,t,a){"use strict";a("36d6")},"994a":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#app,body,html{width:100vw;height:100vh}#app{display:grid;grid-template-rows:30px 1fr 22px;position:relative;min-width:518px;min-height:480px;box-sizing:border-box;overflow:hidden;color:rgb(var(--primary_text_rgb));font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",""]),e.exports=t},"9dc3":function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#project-viewer{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;position:relative;width:100%;height:100%}#project-viewer .sash{position:absolute;top:0;left:200px;width:4.5px;height:100%;transform:translateX(-50%);transition:background-color .3s;cursor:col-resize;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:10}#project-viewer .sash.active{background-color:rgba(0,122,204,.8)}#project-viewer #file-explorer{flex-shrink:0;width:200px;min-width:170px}#project-viewer #file-displayer{width:100%;min-width:300px}",""]),e.exports=t},a4da:function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#status-bar{width:100%;height:100%}",""]),e.exports=t},acde:function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#activity-bar{flex-shrink:0;width:48px;height:100%}",""]),e.exports=t},ba2a:function(e,t,a){"use strict";a("c1af")},c1af:function(e,t,a){var i=a("9dc3");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("7e56d8fd",i,!0,{sourceMap:!1,shadowMode:!1})},d3df:function(e,t,a){var i=a("5e52");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("2d1ceb15",i,!0,{sourceMap:!1,shadowMode:!1})},db81:function(e,t,a){"use strict";a("298f")},decc:function(e,t,a){"use strict";a("39ff")},e006:function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,".fitem[data-v-56a90484]{width:100%;box-sizing:border-box;list-style:none;white-space:nowrap}.fitem .flabel[data-v-56a90484]{display:flex;justify-content:flex-start;align-items:center;padding:4.5px 0 4.5px 5px;transition:background-color .2s;cursor:pointer}.fitem .flabel .farrow[data-v-56a90484]{width:13px;min-width:13px;max-width:13px;margin-right:4px;font-size:13px;transform:rotate(90deg);transition:transform .1s}.fitem .flabel .ficon[data-v-56a90484]{width:16.5px;min-width:16.5px;max-width:16.5px;margin-right:4px;box-sizing:border-box;font-size:14px}.fitem .flabel .ficon[data-icon=folder-open][data-v-56a90484]{padding-left:1px;font-size:15.5px}.fitem .flabel .fname[data-v-56a90484]{font-size:14px}.fitem .flabel[data-v-56a90484]:hover{background-color:hsla(0,0%,100%,.45)}.fitem.dir.folded .farrow[data-v-56a90484]{transform:rotate(0deg)}.fitem.dir.folded .flist[data-v-56a90484]{display:none}.fitem.active>.flabel[data-v-56a90484]{background-color:#fff}",""]),e.exports=t},e00b:function(e,t,a){var i=a("a4da");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("11ac6858",i,!0,{sourceMap:!1,shadowMode:!1})},e11f:function(e,t,a){var i=a("4bad");t=i(!1),t.push([e.i,"#main-wrapper{display:flex;flex-direction:row;justify-content:flex-start;align-items:center;position:relative;width:100%;height:100%;box-sizing:border-box}",""]),e.exports=t},f1b8:function(e,t,a){var i=a("e006");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var s=a("499e").default;s("4faa00c3",i,!0,{sourceMap:!1,shadowMode:!1})},ffd2:function(e,t,a){"use strict";a("f1b8")}});