(function(e){function t(t){for(var a,r,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)r=s[l],i[r]&&f.push(i[r][0]),i[r]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(e[a]=u[a]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(a=!1)}a&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var a={},r={app:0},i={app:0},o=[];function s(e){return u.p+"js/"+({"ly-Default-vue":"ly-Default-vue","ly-GlobalRule-vue":"ly-GlobalRule-vue","ly-InitialTabs-vue":"ly-InitialTabs-vue","ly-LangCustom-vue":"ly-LangCustom-vue","ly-LangEn-vue":"ly-LangEn-vue","ly-Slot-vue":"ly-Slot-vue","ly-Transition-vue":"ly-Transition-vue","p-404-vue":"p-404-vue","p-Page-vue":"p-Page-vue","p-PageLeave-vue":"p-PageLeave-vue","p-Rule-vue":"p-Rule-vue","p-TabDynamic-vue":"p-TabDynamic-vue"}[e]||e)+"."+{"ly-Default-vue":"19afee46","ly-GlobalRule-vue":"55459966","ly-InitialTabs-vue":"6fd35926","ly-LangCustom-vue":"104e0ffd","ly-LangEn-vue":"96dd72c4","ly-Slot-vue":"75c9f4fb","ly-Transition-vue":"3a585269","p-404-vue":"0b5827c7","p-Page-vue":"0738c875","p-PageLeave-vue":"cc9aef84","p-Rule-vue":"d385ab8b","p-TabDynamic-vue":"b3e7d415"}[e]+".js"}function u(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"ly-Slot-vue":1,"ly-Transition-vue":1,"p-Page-vue":1,"p-Rule-vue":1,"p-TabDynamic-vue":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise(function(t,n){for(var a="css/"+({"ly-Default-vue":"ly-Default-vue","ly-GlobalRule-vue":"ly-GlobalRule-vue","ly-InitialTabs-vue":"ly-InitialTabs-vue","ly-LangCustom-vue":"ly-LangCustom-vue","ly-LangEn-vue":"ly-LangEn-vue","ly-Slot-vue":"ly-Slot-vue","ly-Transition-vue":"ly-Transition-vue","p-404-vue":"p-404-vue","p-Page-vue":"p-Page-vue","p-PageLeave-vue":"p-PageLeave-vue","p-Rule-vue":"p-Rule-vue","p-TabDynamic-vue":"p-TabDynamic-vue"}[e]||e)+"."+{"ly-Default-vue":"31d6cfe0","ly-GlobalRule-vue":"31d6cfe0","ly-InitialTabs-vue":"31d6cfe0","ly-LangCustom-vue":"31d6cfe0","ly-LangEn-vue":"31d6cfe0","ly-Slot-vue":"6539babd","ly-Transition-vue":"c6decbd7","p-404-vue":"31d6cfe0","p-Page-vue":"01ac4f60","p-PageLeave-vue":"31d6cfe0","p-Rule-vue":"68386332","p-TabDynamic-vue":"45c9dad3"}[e]+".css",i=u.p+a,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var c=o[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===a||l===i))return t()}var f=document.getElementsByTagName("style");for(s=0;s<f.length;s++){c=f[s],l=c.getAttribute("data-href");if(l===a||l===i)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete r[e],d.parentNode.removeChild(d),n(o)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){r[e]=0}));var a=i[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=i[e]=[t,n]});t.push(a[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(e),c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=i[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+r+")");o.type=a,o.request=r,n[1](o)}i[e]=void 0}};var f=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=a,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)u.d(n,a,function(t){return e[t]}.bind(null,a));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var f=0;f<c.length;f++)t(c[f]);var d=l;o.push(["a1ec","chunk-vendors"]),n()})({"048d":function(e,t,n){},"04aa":function(e,t,n){},"084c":function(e,t,n){"use strict";var a=n("26bf"),r=n.n(a);r.a},"0893":function(e,t,n){},"125f":function(e,t,n){"use strict";var a=n("048d"),r=n.n(a);r.a},"26bf":function(e,t,n){},"4ba7":function(e,t,n){"use strict";var a=n("7d25"),r=n.n(a);r.a},6547:function(e,t,n){"use strict";var a=n("0893"),r=n.n(a);r.a},"74e9":function(e,t,n){},"7d25":function(e,t,n){},"830e":function(e,t,n){"use strict";var a=n("8bcc"),r=n.n(a);r.a},"8bcc":function(e,t,n){},a1ec:function(e,t,n){"use strict";n.r(t);n("744f"),n("6c7b"),n("7514"),n("20d6"),n("1c4c"),n("6762"),n("cadf"),n("e804"),n("55dd"),n("d04f"),n("c8ce"),n("217b"),n("7f7f"),n("f400"),n("7f25"),n("536b"),n("d9ab"),n("f9ab"),n("32d7"),n("25c9"),n("9f3c"),n("042e"),n("c7c6"),n("f4ff"),n("049f"),n("7872"),n("a69f"),n("0b21"),n("6c1a"),n("c7c62"),n("84b4"),n("c5f6"),n("2e37"),n("fca0"),n("7cdf"),n("ee1d"),n("b1b1"),n("87f3"),n("9278"),n("5df2"),n("04ff"),n("f751"),n("4504"),n("fee7"),n("ffc1"),n("0d6d"),n("9986"),n("8e6e"),n("25db"),n("e4f7"),n("b9a1"),n("64d5"),n("9aea"),n("db97"),n("66c8"),n("57f0"),n("165b"),n("456d"),n("cf6a"),n("fd24"),n("8615"),n("551c"),n("097d"),n("df1b"),n("2397"),n("88ca"),n("ba16"),n("d185"),n("ebde"),n("2d34"),n("f6b3"),n("2251"),n("c698"),n("a19f"),n("9253"),n("9275"),n("3b2b"),n("3846"),n("4917"),n("a481"),n("28a5"),n("386d"),n("6b54"),n("4f7f"),n("8a81"),n("ac4d"),n("8449"),n("9c86"),n("fa83"),n("48c0"),n("a032"),n("aef6"),n("d263"),n("6c37"),n("9ec8"),n("5695"),n("2fdb"),n("d0b0"),n("5df3"),n("b54a"),n("f576"),n("ed50"),n("788d"),n("14b9"),n("f386"),n("f559"),n("1448"),n("673e"),n("242a"),n("c66f"),n("b05c"),n("34ef"),n("6aa2"),n("15ac"),n("af56"),n("b6e4"),n("9c29"),n("63d9"),n("4dda"),n("10ad"),n("c02b"),n("4795d"),n("130f"),n("ac6a"),n("96cf");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router-tab"},[n("header",{staticClass:"router-tab-header"},[n("div",{staticClass:"router-tab-scroll"},[n("transition-group",e._b({staticClass:"router-tab-nav",attrs:{tag:"ul"},on:{"after-enter":e.onTabTransitionEnd,"after-leave":e.onTabTransitionEnd}},"transition-group","string"===typeof e.tabTransition?{name:e.tabTransition}:e.tabTransition,!1),e._l(e.items,function(t,a){var r=t.id,i=t.to,o=t.title,s=t.icon,u=t.tips,c=t.closable;return n("router-link",{key:r||i,staticClass:"router-tab-item",class:{actived:e.activedTab===r,contextmenu:e.contextmenu.id===r},attrs:{tag:"li",title:u||o||"",to:i},nativeOn:{contextmenu:function(t){return t.preventDefault(),function(t){return e.showContextmenu(r,a,t)}(t)}}},[e._t("default",[s?n("i",{staticClass:"tab-icon",class:s}):e._e(),n("span",{staticClass:"tab-title"},[e._v(e._s(o||e.lang.tab.untitled))]),!1!==c&&e.items.length>1?n("i",{staticClass:"tab-close",attrs:{title:e.lang.contextmenu.close},on:{click:function(t){return t.preventDefault(),e.closeTab(r)}}}):e._e()],null,{tab:e.items[a],tabs:e.items,index:a})],2)}),1)],1),n("a",{staticClass:"el-icon-caret-left nav-prev",on:{click:function(t){return e.tabScroll("left")}}}),n("a",{staticClass:"el-icon-caret-right nav-next",on:{click:function(t){return e.tabScroll("right")}}})]),n("div",{staticClass:"router-tab-container",class:{loading:e.loading}},[n("router-alive",{ref:"routerAlive",attrs:{"alive-id":e.aliveId},on:{update:e.updateTab}},[n("transition",e._b({attrs:{appear:""},on:{"after-enter":e.onPageTransitionEnd,"after-leave":e.onPageTransitionEnd}},"transition","string"===typeof e.pageTransition?{name:e.pageTransition}:e.pageTransition,!1),[e.isRouterAlive?n("router-view",e._b({ref:"routerView",staticClass:"router-tab-page"},"router-view",e.routerView,!1)):e._e()],1)],1),n("transition-group",e._b({staticClass:"router-tab-iframes",attrs:{tag:"div"}},"transition-group","string"===typeof e.pageTransition?{name:e.pageTransition}:e.pageTransition,!1),e._l(e.iframes,function(t){return n("iframe",{directives:[{name:"show",rawName:"v-show",value:t===e.currentIframe,expression:"url === currentIframe"}],key:t,staticClass:"router-tab-iframe",attrs:{src:t,frameborder:"0"}})}),0)],1),n("transition",{attrs:{name:"router-tab-zoom"}},[e.contextmenu.id?n("div",{staticClass:"router-tab-contextmenu",style:"left: "+e.contextmenu.left+"px; top: "+e.contextmenu.top+"px;"},[n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.isContextTabActived},on:{click:function(t){e.isContextTabActived&&e.refreshTab(e.contextmenu.id)}}},[e._v("\n        "+e._s(e.lang.contextmenu.refresh)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:e.items.length<2},on:{click:function(t){e.items.length>1&&e.refreshAll()}}},[e._v("\n        "+e._s(e.lang.contextmenu.refreshAll)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.isContextTabCanBeClosed},on:{click:function(t){e.isContextTabCanBeClosed&&e.closeTab(e.contextmenu.id)}}},[e._v("\n        "+e._s(e.lang.contextmenu.close)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.tabsLeft.length},on:{click:function(t){e.tabsLeft.length&&e.closeMulti(e.tabsLeft)}}},[e._v("\n        "+e._s(e.lang.contextmenu.closeLefts)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.tabsRight.length},on:{click:function(t){e.tabsRight.length&&e.closeMulti(e.tabsRight)}}},[e._v("\n        "+e._s(e.lang.contextmenu.closeRights)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.tabsOther.length},on:{click:function(t){e.tabsOther.length&&e.closeMulti(e.tabsOther)}}},[e._v("\n        "+e._s(e.lang.contextmenu.closeOthers)+"\n      ")])]):e._e()])],1)},i=[],o=n("4795"),s=n.n(o),u=Object.create(null),c=[];function l(e){return void 0!==e&&null!==e}function f(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=null;return function(){var a=this,r=arguments;clearTimeout(n),n=setTimeout(function(){e.call(a,r)},t)}}var d={path:function(e){return e.path},fullpath:function(e){return e.fullPath.replace(e.hash,"")}};function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$route,t=e.meta&&e.meta.aliveId||this.aliveId;return"string"===typeof t&&(t=d[t.toLowerCase()]),"function"!==typeof t&&(t=d.path),t.bind(this)(e)}function v(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.scrollTo?e.scrollTo({left:t,top:n,behavior:"smooth"}):(e.scrollLeft=t,e.scrollTop=n)}function p(e){if(Array.isArray(e))for(var t=0;t<e.length;t++){var n=e[t];if(l(n)&&(l(n.componentOptions)||b(n)))return n}}function b(e){return e.isComment&&e.asyncFactory}function m(e){return e.hash?e.fullPath.replace(e.hash,""):e.fullPath}function g(e,t){return m(e)===m(t)}function y(e){var t=e.matched;return t[t.length-1].components.default}function x(e,t){return y(e)===y(t)}var T={tab:{untitled:"无标题"},contextmenu:{refresh:"刷新",refreshAll:"刷新所有",close:"关闭",closeLefts:"关闭左侧",closeRights:"关闭右侧",closeOthers:"关闭其他"},msg:{keepOneTab:"至少应保留1个页签"}},C={tab:{untitled:"Untitled"},contextmenu:{refresh:"Refresh",refreshAll:"Refresh All",close:"Close",closeLefts:"Close to the Left",closeRights:"Close to the Right",closeOthers:"Close Others"},msg:{keepOneTab:"Keep at least 1 tab"}},w={"zh-CN":T,en:C},k={name:"RouterAlive",props:{aliveId:{type:[String,Function],default:"path"}},beforeCreate:function(){Object.assign(this,{cache:Object.create(null),lastRoute:this.$route})},render:function(){var e=this.$slots.default,t=p(e),n=t&&t.componentOptions;if(n){var a=this.cache,r=this.$route,i=this.lastRoute,o="transition"===n.tag?n.children[0]:t;if(o&&o.componentOptions){var s=this.getAliveId(),c=a[s],l=c||u,f=l.vm,d=l.route,h=!1,v=i!==r,b=v&&x(r,i);v&&(this.lastRoute=r,c||this.set(s,{route:r})),f&&(g(d,r)?o.componentInstance=f:(f.$destroy(),c.vm=null,h=!0)),b&&(h=!0),h&&this.$routerTab.reloadRouter(),o.data.keepAlive=!0,o.data.routerAlive=this}}return t||e&&e[0]},methods:{getAliveId:h,set:function(e,t){var n=this.cache;return this.$emit("update",e,t),n[e]=t},remove:function(e){var t=this.cache,n=t[e];n&&(n.vm&&n.vm.$destroy(),delete t[e]),this.$emit("remove",[e])},clear:function(e){var t=this.cache[e],n=t&&t.vm;n&&(n.$destroy(),t.vm=null)}}},_={data:function(){return{iframes:[],currentIframe:null}},methods:{getIframePath:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,a="".concat(this.basePath,"/iframe/").concat(encodeURIComponent(e));return t&&(a+="/"+t,n&&(a+="/"+n)),a},openIframeTab:function(e,t,n){var a=this.getIframePath(e,t,n);this.$router.push(a)},closeIframeTab:function(e){var t=this.getIframePath(e);this.close(t,!1)},refreshIframeTab:function(e){var t=this.getIframePath(e);this.refresh(t,!1)}}};function L(e,t,n,a,r,i,o){try{var s=e[i](o),u=s.value}catch(c){return void n(c)}s.done?t(u):Promise.resolve(u).then(a,r)}function O(e){return function(){var t=this,n=arguments;return new Promise(function(a,r){var i=e.apply(t,n);function o(e){L(i,a,r,o,s,"next",e)}function s(e){L(i,a,r,o,s,"throw",e)}o(void 0)})}}function P(e){return P="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P(e)}var $={name:"RouterTab",components:{RouterAlive:k},mixins:[_],props:{aliveId:k.props.aliveId,i18n:{type:[String,Object],default:"zh-CN"},tabs:{type:Array,default:function(){return[]}},routerView:Object,tabTransition:{type:[String,Object],default:"router-tab-zoom"},pageTransition:{type:[String,Object],default:function(){return{name:"router-tab-swap",mode:"out-in"}}}},data:function(){return{loading:!1,items:[],activedTab:null,isRouterAlive:!0,contextmenu:{id:null,index:-1,left:0,top:0}}},computed:{lang:function(){var e=null,t=this.i18n;return"string"===typeof t?e=w[t]:"object"===P(t)&&(e=t),e||(e=w["en"]),e},isContextTabActived:function(){return this.contextmenu.id===this.activedTab},isContextTabCanBeClosed:function(){var e=this.items,t=this.contextmenu,n=e[t.index];return e.length>1&&n&&!1!==n.closable},tabsLeft:function(){var e=this.items,t=this.contextmenu,n=t.id,a=t.index;return n?e.slice(0,a).filter(function(e){var t=e.closable;return!1!==t}):c},tabsRight:function(){var e=this.items,t=this.contextmenu,n=t.id,a=t.index;return n?e.slice(a+1).filter(function(e){var t=e.closable;return!1!==t}):c},tabsOther:function(){var e=this.items,t=this.contextmenu.id;return t?e.filter(function(e){var n=e.closable,a=e.id;return!1!==n&&t!==a}):c}},watch:{$route:function(e){this.loading=!1,this.hideContextmenu(),this.updateActivedTab(),this.fixCommentPage()},activedTab:function(){var e=O(s.a.mark(function e(){var t,n,a,r;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.$nextTick();case 2:t=this.$el.querySelector(".router-tab-nav .actived"),n=this.$el.querySelector(".router-tab-scroll"),t&&(a=t.offsetLeft,r=n.scrollLeft,(a<r||a+t.clientWidth>r+n.clientWidth)&&this.adjust());case 5:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),"contextmenu.id":function(e,t){var n=this;!t&&e?document.addEventListener("click",this.onClick=function(e){e.target!==n.$el.querySelector(".router-tab-contextmenu")&&n.hideContextmenu()}):t&&!e&&document.removeEventListener("click",this.onClick)}},beforeCreate:function(){a["a"].prototype.$routerTab=this;var e=this.$route.matched;this.basePath=(e[e.length-2]||{}).path},created:function(){this.getTabItems(),this.updateActivedTab(),this.$router.beforeEach(this.routerPageLeaveGuard),this.$nextTick(this.adjust)},mounted:function(){window.addEventListener("resize",this.onResize=f(this.adjust))},destroyed:function(){window.removeEventListener("resize",this.onResize)},methods:{getAliveId:h,routerPageLeaveGuard:function(e,t,n){if(this._isDestroyed){var a=this.$router.beforeHooks,r=a.indexOf(this.routerPageLeaveGuard);r>-1&&a.splice(r,1),n()}else{var i=this.getAliveId(e),o=this.$refs.routerAlive,s=o&&o.cache[i]||u,c=s.route;c&&!g(e,c)?this.pageLeavePromise(i,"replace").then(function(){return n()}).catch(function(){return n(!1)}):n()}},getTabItems:function(){var e=this,t=this.tabs,n=this.$router,a={};this.items=t.map(function(t,r){var i="string"===typeof t?{to:t}:t||u,o=i.to,s=i.closable,c=i.title,l=i.tips,f=o&&n.match(o);if(f){var d=e.getRouteTab(f),h=d.id;if(!a[h])return c&&(d.title=c),l&&(d.tips=l),d.closable=!1!==s,a[h]=d}}).filter(function(e){return!!e})},updateActivedTab:function(){this.activedTab=this.getAliveId()},updateTab:function(e,t){var n=t.route,a=t.tab,r=this.items,i=r.findIndex(function(t){var n=t.id;return n===e}),o=Object.assign(this.getRouteTab(n),a);if(i>-1){var s=r[i];o.closable=!1!==s.closable,this.$set(r,i,o)}else r.push(o)},getIdByLocation:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var n=this.$router.match(e,this.$router.currentRoute);if(!t)return this.getAliveId(n);var a=m(n),r=this.items.find(function(e){var t=e.to;return t.split("#")[0]===a});return r?r.id:void 0}},getRouteTab:function(e){var t=this.getAliveId(e),n=e.fullPath,a=e.meta,r=a.title,i=a.icon,o=a.tips;return{id:t,to:n,title:r,icon:i,tips:o}},pageLeavePromise:function(e,t){var n=this;return new Promise(function(a,r){var i=n.$refs.routerAlive,o=n.items.find(function(t){return t.id===e}),s=i.cache[e]||u,c=s.vm,l=c&&c.$vnode.componentOptions.Ctor.options.beforePageLeave;"function"===typeof l?l.bind(c)(a,r,o,t):a()})},removeTab:function(){var e=O(s.a.mark(function e(t){var n,a,r;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(n=this.items,a=this.$refs.routerAlive,r=n.findIndex(function(e){return e.id===t}),1!==n.length){e.next=5;break}throw new Error(this.lang.msg.keepOneTab);case 5:return e.prev=5,e.next=8,this.pageLeavePromise(t,"close");case 8:a.remove(t),r>-1&&n.splice(r,1),e.next=14;break;case 12:e.prev=12,e.t0=e["catch"](5);case 14:case"end":return e.stop()}},e,this,[[5,12]])}));function t(t){return e.apply(this,arguments)}return t}(),close:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var n=this.getIdByLocation(e,t);n&&this.closeTab(n)}else this.closeTab()},closeTab:function(){var e=O(s.a.mark(function e(){var t,n,a,r,i,o,u=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:this.activedTab,n=this.activedTab,a=this.items,r=this.$router,i=a.findIndex(function(e){return e.id===t}),e.prev=3,e.next=6,this.removeTab(t);case 6:n===t&&(o=a[i]||a[i-1],r.replace(o.to)),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](3),console.warn(e.t0);case 12:case"end":return e.stop()}},e,this,[[3,9]])}));function t(){return e.apply(this,arguments)}return t}(),closeMulti:function(){var e=O(s.a.mark(function e(t){var n,a,r,i,o,u,c,l,f,d,h=this;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:n=this.items,a=this.$router,r=this.contextmenu,i=n.find(function(e){var t=e.id;return t===r.id}),o=!0,u=!1,c=void 0,e.prev=5,l=t[Symbol.iterator]();case 7:if(o=(f=l.next()).done){e.next=19;break}return d=f.value.id,e.prev=9,e.next=12,this.removeTab(d);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e["catch"](9);case 16:o=!0,e.next=7;break;case 19:e.next=25;break;case 21:e.prev=21,e.t1=e["catch"](5),u=!0,c=e.t1;case 25:e.prev=25,e.prev=26,o||null==l.return||l.return();case 28:if(e.prev=28,!u){e.next=31;break}throw c;case 31:return e.finish(28);case 32:return e.finish(25);case 33:-1===n.findIndex(function(e){var t=e.id;return t===h.activedTab})&&a.replace(i.to);case 34:case"end":return e.stop()}},e,this,[[5,21,25,33],[9,14],[26,,28,32]])}));function t(t){return e.apply(this,arguments)}return t}(),refresh:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var n=this.getIdByLocation(e,t);n&&this.refreshTab(n)}else this.refreshTab()},refreshTab:function(){var e=O(s.a.mark(function e(){var t,n=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=n.length>0&&void 0!==n[0]?n[0]:this.activedTab,e.prev=1,e.next=4,this.pageLeavePromise(t,"refresh");case 4:this.$refs.routerAlive.clear(t),t===this.activedTab&&this.reloadRouter(),e.next=10;break;case 8:e.prev=8,e.t0=e["catch"](1);case 10:case"end":return e.stop()}},e,this,[[1,8]])}));function t(){return e.apply(this,arguments)}return t}(),refreshAll:function(){var e=O(s.a.mark(function e(){var t,n,a,r,i=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:t=i.length>0&&void 0!==i[0]&&i[0],n=this.$refs.routerAlive,a=n.cache,e.t0=s.a.keys(a);case 4:if((e.t1=e.t0()).done){e.next=20;break}if(r=e.t1.value,t){e.next=17;break}return e.prev=7,e.next=10,this.pageLeavePromise(r,"refresh");case 10:n.clear(r),e.next=15;break;case 13:e.prev=13,e.t2=e["catch"](7);case 15:e.next=18;break;case 17:n.clear(r);case 18:e.next=4;break;case 20:this.reloadRouter();case 21:case"end":return e.stop()}},e,this,[[7,13]])}));function t(){return e.apply(this,arguments)}return t}(),reloadRouter:function(){var e=O(s.a.mark(function e(){var t,n=arguments;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(t=n.length>0&&void 0!==n[0]&&n[0],this.isRouterAlive=!1,!t){e.next=6;break}return e.next=5,this.$nextTick();case 5:this.isRouterAlive=!0;case 6:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),onTabTransitionEnd:function(){this.adjust()},onPageTransitionEnd:function(){this.isRouterAlive||(this.isRouterAlive=!0)},showContextmenu:function(e,t,n){var a=n||u,r=a.clientY,i=a.clientX;Object.assign(this.contextmenu,{id:e,index:t,top:r,left:i})},hideContextmenu:function(){this.showContextmenu(null,-1)},tabScroll:function(e){var t=this.$el.querySelector(".router-tab-header"),n=t.querySelector(".router-tab-scroll"),a=t.clientWidth-110;v(n,n.scrollLeft+("left"===e?-a:a))},adjust:function(){var e=this.$el.querySelector(".router-tab-header"),t=e.querySelector(".router-tab-scroll"),n=t.querySelector(".router-tab-nav"),a=n.querySelector(".actived"),r=n.clientWidth>t.clientWidth;e.classList[r?"add":"remove"]("is-scroll"),a&&r&&v(t,a.offsetLeft+(a.clientWidth-t.clientWidth)/2)},fixCommentPage:function(){8===this.$refs.routerAlive.$el.nodeType&&this.reloadRouter(!0)}}},R=$,A=(n("e42d"),n("4ba7"),n("0c7c")),I=Object(A["a"])(R,r,i,!1,null,null,null),S=I.exports,E={created:function(){var e=this.$route,t=this.$vnode,n=t&&t.data.routerAlive;if(!n)return!1;this._isRouterPage=!0;var a=n.getAliveId(e),r=n.set(a,{route:e,vm:this});this.$watch("routeTab",function(e,t){r.tab="string"===typeof e?{title:e}:e,n.set(a,r)},{deep:!0,immediate:!0})},activated:function(){if(!this._isRouterPage)return!1;var e=this.$vnode.componentOptions.Ctor.cid;this._ctorId&&this._ctorId!==e&&(this.$destroy(),this.$routerTab.refreshTab()),this._ctorId=e}},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router-tab-iframe-fake"})},D=[],G={name:"Iframe",props:{src:String,title:String,icon:String},data:function(){return{routeTab:null}},mounted:function(){var e=this.src,t=this.title,n=this.icon,a=this.$routerTab,r=a.iframes;this.routeTab={title:t,icon:n},r.includes(e)||r.push(e),a.currentIframe=e},activated:function(){this.$routerTab.currentIframe=this.src},deactivated:function(){this.$routerTab.currentIframe=null},destroyed:function(){var e=this.src,t=this.$routerTab.iframes,n=t.indexOf(e);n>-1&&t.splice(n,1)}},M=G,q=Object(A["a"])(M,j,D,!1,null,null,null),N=q.exports,B=[{path:"iframe/:src/:title?/:icon?",component:N,props:!0,meta:{aliveId:function(e){return"iframe-".concat(e.params.src)}}}];S.install=function e(t,n){e.installed||(e.installed=!0,t.component(S.name,S),t.mixin(E))},"undefined"!==typeof window&&window.Vue&&window.Vue.use(S);var z=S,V=B,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-ct",class:{"sidebar-open":e.sidebarOpen}},[n("app-header",{on:{"sidebar-change":function(t){e.sidebarOpen=!e.sidebarOpen}}}),n("div",{staticClass:"app-bd"},[n("div",{staticClass:"app-sd-mask",on:{click:function(t){e.sidebarOpen=!1}}}),n("app-aside"),n("router-view")],1)],1)},U=[],F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"app-hd"},[n("div",{staticClass:"app-home"},[n("a",{staticClass:"rt-icon-menu toggle-side",on:{click:function(t){return e.$emit("sidebar-change")}}}),n("img",{staticClass:"site-logo",attrs:{src:"img/logo.png",alt:"Vue Router Tab - logo"}}),e._m(0)]),n("site-link")],1)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"site-title"},[n("a",{attrs:{href:"../"}},[e._v("Vue Router Tab")]),e._v(" - Demo\n    ")])}],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-link"},e._l(e.links,function(e,t){var a=e.label,r=e.icon,i=e.url;return n("a",{key:t,class:"rt-icon-"+r,attrs:{href:i,target:0===i.indexOf("http")?"_blank":"_self",title:a}})}),0)},K=[],X={name:"SiteLink",data:function(){return{links:[{label:"GitHub",icon:"github",url:"https://github.com/bhuh12/vue-router-tab"},{label:"文档和API",icon:"api",url:"https://bhuh12.github.io/vue-router-tab/"},{label:"Issues",icon:"feedback",url:"https://github.com/bhuh12/vue-router-tab/issues"},{label:"作者主页",icon:"home",url:"https://bhuh.net"}]}}},Y=X,Q=(n("c603"),Object(A["a"])(Y,J,K,!1,null,"619b4480",null)),Z=Q.exports,ee={name:"AppHeader",components:{SiteLink:Z}},te=ee,ne=(n("c7ff"),Object(A["a"])(te,F,H,!1,null,"30316ca0",null)),ae=ne.exports,re=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"app-sd"},[n("div",{staticClass:"app-sd-menu"},e._l(e.menu,function(e,t){return n("menu-group",{key:t,attrs:{data:e}})}),1),n("footer",{staticClass:"app-sd-ft"},[n("site-link")],1)])},ie=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data.children&&e.data.children.length?n("div",{staticClass:"menu-group"},[n("menu-item",{attrs:{data:e.data}}),n("div",{staticClass:"menu-list"},e._l(e.data.children,function(e,t){return n("menu-group",{key:t,attrs:{data:e}})}),1)],1):n("menu-item",{attrs:{data:e.data}})},se=[],ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data.text&&!e.data.to?n("h3",{staticClass:"menu-title"},[e._v("\n  "+e._s(e.data.text)+"\n")]):e.data.to?n("router-link",{staticClass:"menu-item",attrs:{to:e.data.to}},[e._v("\n  "+e._s(e.data.text)+"\n")]):e._e()},ce=[],le={name:"MenuItem",props:{data:Object}},fe=le,de=Object(A["a"])(fe,ue,ce,!1,null,null,null),he=de.exports,ve={name:"MenuGroup",components:{MenuItem:he},props:{data:Object}},pe=ve,be=(n("6547"),Object(A["a"])(pe,oe,se,!1,null,"67a4e7ba",null)),me=be.exports,ge={name:"AppAside",components:{MenuGroup:me,SiteLink:Z},data:function(){return{menu:[{text:"RouterTab 配置",children:[{text:"默认配置",to:"/default/"},{text:"过渡效果",to:"/transition/"},{text:"初始展示页签",to:"/initial-tabs/"},{text:"语言配置",children:[{text:"指定语言",to:"/lang-en/"},{text:"自定义语言",to:"/lang-custom"}]},{text:"自定义页签模板",to:"/slot/"}]},{text:"页签规则",children:[{text:"默认页签规则",to:"/default/rule/a/1"},{text:"全局页签规则",to:"/global-rule/rule/a/1"},{text:"路由页签规则",to:"/default/route-rule/a/1"}]},{text:"页面配置",children:[{text:"动态更新页签配置",to:"/default/tab-dynamic"},{text:"页面离开确认",to:"/initial-tabs/page-leave"}]}]}}},ye=ge,xe=(n("084c"),Object(A["a"])(ye,re,ie,!1,null,"4523c380",null)),Te=xe.exports,Ce={name:"App",components:{AppHeader:ae,AppAside:Te},data:function(){return{sidebarOpen:!1}},watch:{$route:function(e){this.sidebarOpen=!1}}},we=Ce,ke=(n("125f"),n("830e"),Object(A["a"])(we,W,U,!1,null,"3c5ab644",null)),_e=ke.exports,Le=n("8c4f");function Oe(e){return Re(e)||$e(e)||Pe()}function Pe(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function $e(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}function Re(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}var Ae=function(e){return function(){return n("ae02")("./".concat(e,".vue"))}},Ie=function(e){return function(){return n("a7f4")("./".concat(e,".vue"))}};a["a"].use(Le["a"]);var Se=[{path:"page/:id",component:Ae("Page"),meta:{title:"页面",icon:"rt-icon-doc"}},{path:"rule/:catalog/:type",component:Ae("Rule"),meta:{title:"默认规则",icon:"rt-icon-log"}},{path:"route-rule/:catalog/:type",component:Ae("Rule"),meta:{title:"路由规则",icon:"rt-icon-log",aliveId:function(e){return"route-rule/".concat(e.params.catalog)}}},{path:"tab-dynamic",component:Ae("TabDynamic"),meta:{title:"动态更新页签",icon:"rt-icon-log"}},{path:"page-leave",component:Ae("PageLeave"),meta:{title:"页面离开确认",icon:"rt-icon-contact"}}].concat(Oe(V)),Ee=new Le["a"]({routes:[{path:"/",redirect:"/default/page/1"},{path:"/default/",component:Ie("Default"),redirect:"/default/page/1",children:Se},{path:"/transition/",component:Ie("Transition"),redirect:"/transition/page/1",children:Se},{path:"/initial-tabs/",component:Ie("InitialTabs"),redirect:"/initial-tabs/page/1",children:Se},{path:"/lang-en/",component:Ie("LangEn"),redirect:"/lang-en/page/1",children:Se},{path:"/lang-custom/",component:Ie("LangCustom"),redirect:"/lang-custom/page/1",children:Se},{path:"/slot/",component:Ie("Slot"),redirect:"/slot/page/1",children:Se},{path:"/global-rule/",component:Ie("GlobalRule"),redirect:"/global-rule/rule/a/1",children:Se},{path:"/404",component:Ae("404"),meta:{title:"找不到页面",icon:"rt-icon-warning"}},{path:"*",redirect:"/404"}]});a["a"].config.productionTip=!1,a["a"].use(z),new a["a"]({router:Ee,render:function(e){return e(_e)}}).$mount("#app")},a7f4:function(e,t,n){var a={"./Default.vue":["e5dc","ly-Default-vue"],"./GlobalRule.vue":["23d1","ly-GlobalRule-vue"],"./InitialTabs.vue":["11ce","ly-InitialTabs-vue"],"./LangCustom.vue":["d97e","ly-LangCustom-vue"],"./LangEn.vue":["3d06","ly-LangEn-vue"],"./Slot.vue":["8b7f","ly-Slot-vue"],"./Transition.vue":["65c9","ly-Transition-vue"]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id="a7f4",e.exports=r},ae02:function(e,t,n){var a={"./404.vue":["608c","p-404-vue"],"./Page.vue":["c21b","p-Page-vue"],"./PageLeave.vue":["8f6a","p-PageLeave-vue"],"./Rule.vue":["3883","p-Rule-vue"],"./TabDynamic.vue":["0c1f","p-TabDynamic-vue"]};function r(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}r.keys=function(){return Object.keys(a)},r.id="ae02",e.exports=r},b818:function(e,t,n){},c603:function(e,t,n){"use strict";var a=n("74e9"),r=n.n(a);r.a},c7ff:function(e,t,n){"use strict";var a=n("b818"),r=n.n(a);r.a},e42d:function(e,t,n){"use strict";var a=n("04aa"),r=n.n(a);r.a}});
//# sourceMappingURL=app.97600ea8.js.map