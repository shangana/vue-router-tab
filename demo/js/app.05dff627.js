(function(e){function t(t){for(var a,i,u=t[0],s=t[1],l=t[2],c=0,d=[];c<u.length;c++)i=u[c],r[i]&&d.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},i={app:0},r={app:0},o=[];function u(e){return s.p+"js/"+({"ly-Default-vue":"ly-Default-vue","ly-GlobalRule-vue":"ly-GlobalRule-vue","ly-InitialTabs-vue":"ly-InitialTabs-vue","ly-Language-vue":"ly-Language-vue","ly-LanguageCustom-vue":"ly-LanguageCustom-vue","ly-Slot-vue":"ly-Slot-vue","ly-Transition-vue":"ly-Transition-vue","p-404-vue":"p-404-vue","p-Page-vue":"p-Page-vue","p-PageLeave-vue":"p-PageLeave-vue","p-Rule-vue":"p-Rule-vue","p-TabDynamic-vue":"p-TabDynamic-vue"}[e]||e)+"."+{"ly-Default-vue":"fc26fb42","ly-GlobalRule-vue":"49e6b52f","ly-InitialTabs-vue":"6e91bb7a","ly-Language-vue":"2fabc4e5","ly-LanguageCustom-vue":"85324b10","ly-Slot-vue":"52ef4e9d","ly-Transition-vue":"edb01c71","p-404-vue":"668d986a","p-Page-vue":"37d0104d","p-PageLeave-vue":"2b7ca27b","p-Rule-vue":"0ddecb56","p-TabDynamic-vue":"17d6f998"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"ly-Slot-vue":1,"ly-Transition-vue":1,"p-Page-vue":1,"p-Rule-vue":1,"p-TabDynamic-vue":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise(function(t,n){for(var a="css/"+({"ly-Default-vue":"ly-Default-vue","ly-GlobalRule-vue":"ly-GlobalRule-vue","ly-InitialTabs-vue":"ly-InitialTabs-vue","ly-Language-vue":"ly-Language-vue","ly-LanguageCustom-vue":"ly-LanguageCustom-vue","ly-Slot-vue":"ly-Slot-vue","ly-Transition-vue":"ly-Transition-vue","p-404-vue":"p-404-vue","p-Page-vue":"p-Page-vue","p-PageLeave-vue":"p-PageLeave-vue","p-Rule-vue":"p-Rule-vue","p-TabDynamic-vue":"p-TabDynamic-vue"}[e]||e)+"."+{"ly-Default-vue":"31d6cfe0","ly-GlobalRule-vue":"31d6cfe0","ly-InitialTabs-vue":"31d6cfe0","ly-Language-vue":"31d6cfe0","ly-LanguageCustom-vue":"31d6cfe0","ly-Slot-vue":"6d9209c1","ly-Transition-vue":"2c9d8b96","p-404-vue":"31d6cfe0","p-Page-vue":"374a5ea5","p-PageLeave-vue":"31d6cfe0","p-Rule-vue":"f7413b0a","p-TabDynamic-vue":"7fb4ba3e"}[e]+".css",r=s.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var l=o[u],c=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(c===a||c===r))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){l=d[u],c=l.getAttribute("data-href");if(c===a||c===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.request=a,delete i[e],f.parentNode.removeChild(f),n(o)},f.href=r;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){i[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=o);var l,c=document.createElement("script");c.charset="utf-8",c.timeout=120,s.nc&&c.setAttribute("nonce",s.nc),c.src=u(e),l=function(t){c.onerror=c.onload=null,clearTimeout(d);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+a+": "+i+")");o.type=a,o.request=i,n[1](o)}r[e]=void 0}};var d=setTimeout(function(){l({type:"timeout",target:c})},12e4);c.onerror=c.onload=l,document.head.appendChild(c)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0ca0":function(e,t,n){"use strict";var a=n("4f78"),i=n.n(a);i.a},"0da6":function(e,t,n){},"1a5d":function(e,t,n){var a={"./404.vue":["8cdb","p-404-vue"],"./Page.vue":["2048","p-Page-vue"],"./PageLeave.vue":["5e6b","p-PageLeave-vue"],"./Rule.vue":["2dd9","p-Rule-vue"],"./TabDynamic.vue":["7b6a","p-TabDynamic-vue"]};function i(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(a)},i.id="1a5d",e.exports=i},"1ef7":function(e,t,n){"use strict";var a=n("e73d"),i=n.n(a);i.a},2348:function(e,t,n){},"4f78":function(e,t,n){},"4ffd":function(e,t,n){e.exports=n.p+"img/logo.6a5bef90.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),i=(n("7f7f"),{created:function(){var e=this.$route,t=this.$vnode,n=t&&t.data.routerAlive;if(!n)return!1;this._isRouterPage=!0;var a=n.getAliveId(e),i=n.set(a,{route:e,vm:this});this.$watch("routeTab",function(e,t){i.tab="string"===typeof e?{title:e}:e,n.set(a,i)},{deep:!0,immediate:!0})},activated:function(){var e=this.$routerTab,t=this.$vnode,n=this._isRouterPage;if(!n)return!1;var a=t.componentOptions.Ctor.cid;this._ctorId&&this._ctorId!==a&&(this.$destroy(),e.refreshTab()),this._ctorId=a}}),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"router-tab"},[n("header",{staticClass:"router-tab-header"},[n("div",{staticClass:"router-tab-scroll"},[n("transition-group",e._b({staticClass:"router-tab-nav",attrs:{tag:"ul"},on:{"after-enter":e.onTabTransitionEnd,"after-leave":e.onTabTransitionEnd}},"transition-group","string"===typeof e.tabTransition?{name:e.tabTransition}:e.tabTransition,!1),e._l(e.items,function(t,a){var i=t.id,r=t.to,o=t.title,u=t.icon,s=t.tips,l=t.closable;return n("router-link",{key:i||r,staticClass:"router-tab-item",class:{actived:e.activedTab===i,contextmenu:e.contextmenu.id===i},attrs:{tag:"li",title:s||o||"",to:r},nativeOn:{contextmenu:function(t){return t.preventDefault(),function(t){return e.showContextmenu(i,a,t)}(t)}}},[e._t("default",[u?n("i",{staticClass:"tab-icon",class:u}):e._e(),n("span",{staticClass:"tab-title"},[e._v(e._s(o||e.lang.tab.untitled))]),!1!==l&&e.items.length>1?n("i",{staticClass:"tab-close",attrs:{title:e.lang.contextmenu.close},on:{click:function(t){return t.preventDefault(),e.closeTab(i)}}}):e._e()],null,{tab:e.items[a],tabs:e.items,index:a})],2)}),1)],1),n("a",{staticClass:"el-icon-caret-left nav-prev",on:{click:function(t){return e.tabScroll("left")}}}),n("a",{staticClass:"el-icon-caret-right nav-next",on:{click:function(t){return e.tabScroll("right")}}})]),n("div",{staticClass:"router-tab-container",class:{loading:e.loading}},[n("router-alive",{ref:"routerAlive",attrs:{"alive-id":e.aliveId},on:{update:e.updateTab}},[n("transition",e._b({attrs:{appear:""},on:{"after-enter":e.onPageTransitionEnd,"after-leave":e.onPageTransitionEnd}},"transition","string"===typeof e.pageTransition?{name:e.pageTransition}:e.pageTransition,!1),[e.isRouterAlive?n("router-view",e._b({ref:"routerView"},"router-view",e.routerView,!1)):e._e()],1)],1)],1),n("transition",{attrs:{name:"router-tab-zoom-lt"}},[e.contextmenu.id?n("div",{staticClass:"router-tab-contextmenu",style:"left: "+e.contextmenu.left+"px; top: "+e.contextmenu.top+"px;"},[n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.isContextTabActived},on:{click:function(t){e.isContextTabActived&&e.refreshTab(e.contextmenu.id)}}},[e._v("\n        "+e._s(e.lang.contextmenu.refresh)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:e.items.length<2},on:{click:function(t){e.items.length>1&&e.refreshAll()}}},[e._v("\n        "+e._s(e.lang.contextmenu.refreshAll)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.isContextTabCanBeClosed},on:{click:function(t){e.isContextTabCanBeClosed&&e.closeTab(e.contextmenu.id)}}},[e._v("\n        "+e._s(e.lang.contextmenu.close)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.tabsLeft.length},on:{click:function(t){e.tabsLeft.length&&e.closeMulti(e.tabsLeft)}}},[e._v("\n        "+e._s(e.lang.contextmenu.closeLefts)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.tabsRight.length},on:{click:function(t){e.tabsRight.length&&e.closeMulti(e.tabsRight)}}},[e._v("\n        "+e._s(e.lang.contextmenu.closeRights)+"\n      ")]),n("a",{staticClass:"contextmenu-item",attrs:{disabled:!e.tabsOther.length},on:{click:function(t){e.tabsOther.length&&e.closeMulti(e.tabsOther)}}},[e._v("\n        "+e._s(e.lang.contextmenu.closeOthers)+"\n      ")])]):e._e()])],1)},o=[],u=n("a4bb"),s=n.n(u),l=(n("a481"),n("795b")),c=n.n(l),d=(n("28a5"),n("7514"),n("5176")),f=n.n(d),v=(n("20d6"),n("4917"),n("7618")),h=n("4aa6"),p=n.n(h),b=n("a745"),m=n.n(b),g=n("5d73"),y=n.n(g),T=p()(null),x=[],C="[vue-router-tab]:";function _(e){return void 0!==e&&null!==e}function L(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:200,n=null;return function(){var a=this,i=arguments;clearTimeout(n),n=setTimeout(function(){e.call(a,i)},t)}}function R(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=c.a.resolve(),a=t?"finally":"then",i=!0,r=!1,o=void 0;try{for(var u,s=y()(e);!(i=(u=s.next()).done);i=!0){var l=u.value;n=n[a](l)}}catch(d){r=!0,o=d}finally{try{i||null==s.return||s.return()}finally{if(r)throw o}}return n}function O(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;e.scrollTo?e.scrollTo({left:t,top:n,behavior:"smooth"}):(e.scrollLeft=t,e.scrollTop=n)}function $(e){if(m()(e))for(var t=0;t<e.length;t++){var n=e[t];if(_(n)&&(_(n.componentOptions)||A(n)))return n}}function k(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.$route,t=e.meta&&e.meta.aliveId||this.aliveId||"path";return"function"===typeof t?t.bind(this)(e):e[t]}function A(e){return e.isComment&&e.asyncFactory}function P(e){return e.hash?e.fullPath.replace(e.hash,""):e.fullPath}function w(e,t){return P(e)===P(t)}function I(e){var t=e.matched;return t[t.length-1].components.default}function S(e,t){return I(e)===I(t)}var j={name:"RouterAlive",props:{aliveId:{type:[String,Function],default:"path"}},beforeCreate:function(){f()(this,{cache:p()(null),lastRoute:this.$route})},render:function(){var e=this.$slots.default,t=$(e),n=t&&t.componentOptions;if(n){var a=this.cache,i=this.$route,r=this.lastRoute,o="transition"===n.tag?n.children[0]:t;if(o&&o.componentOptions){var u=this.getAliveId(),s=a[u],l=s||T,c=l.vm,d=l.route,f=!1,v=r!==i,h=v&&S(i,r);v&&(this.lastRoute=i,s||this.set(u,{route:i})),c&&(w(d,i)?o.componentInstance=c:(c.$destroy(),s.vm=null,f=!0)),h&&(f=!0),f&&this.$routerTab.reloadRouter(),o.data.keepAlive=!0,o.data.routerAlive=this}}return t||e&&e[0]},methods:{getAliveId:k,set:function(e,t){var n=this.cache;return this.$emit("update",e,t),n[e]=t},remove:function(e){var t=this.cache,n=t[e];n&&(n.vm&&n.vm.$destroy(),delete t[e]),this.$emit("remove",[e])},clear:function(e){var t=this.cache[e],n=t&&t.vm;n&&(n.$destroy(),t.vm=null)}}},E={tab:{untitled:"无标题"},contextmenu:{refresh:"刷新",refreshAll:"刷新所有",close:"关闭",closeLefts:"关闭左侧",closeRights:"关闭右侧",closeOthers:"关闭其他"},msg:{keepOneTab:"至少应保留1个页签"}},D={tab:{untitled:"Untitled"},contextmenu:{refresh:"Refresh",refreshAll:"Refresh All",close:"Close",closeLefts:"Close to the Left",closeRights:"Close to the Right",closeOthers:"Close Others"},msg:{keepOneTab:"Keep at least 1 tab"}},G={"zh-CN":E,en:D},M={name:"RouterTab",components:{RouterAlive:j},props:{aliveId:j.props.aliveId,i18n:{type:[String,Object],default:"zh-CN"},tabs:{type:Array,default:function(){return[]}},routerView:Object,tabTransition:{type:[String,Object],default:"router-tab-zoom"},pageTransition:{type:[String,Object],default:function(){return{name:"router-tab-swap",mode:"out-in"}}}},data:function(){return{loading:!1,items:[],activedTab:null,isRouterAlive:!0,contextmenu:{id:null,index:-1,left:0,top:0}}},computed:{lang:function(){var e=null,t=this.i18n;return"string"===typeof t?e=G[t]:"object"===Object(v["a"])(t)&&(e=t),e||(e=G["en"]),e},isContextTabActived:function(){return this.contextmenu.id===this.activedTab},isContextTabCanBeClosed:function(){var e=this.items,t=this.contextmenu,n=e[t.index];return e.length>1&&n&&!1!==n.closable},tabsLeft:function(){var e=this.items,t=this.contextmenu,n=t.id,a=t.index;return n?e.slice(0,a).filter(function(e){var t=e.closable;return!1!==t}):x},tabsRight:function(){var e=this.items,t=this.contextmenu,n=t.id,a=t.index;return n?e.slice(a+1).filter(function(e){var t=e.closable;return!1!==t}):x},tabsOther:function(){var e=this.items,t=this.contextmenu.id;return t?e.filter(function(e){var n=e.closable,a=e.id;return!1!==n&&t!==a}):x}},watch:{$route:function(e){this.loading=!1,this.hideContextmenu(),this.updateActivedTab(),this.fixCommentPage()},activedTab:function(){var e=this;this.$nextTick(function(){var t=e.$el.querySelector(".router-tab-nav .actived"),n=e.$el.querySelector(".router-tab-scroll");if(t){var a=t.offsetLeft,i=n.scrollLeft;(a<i||a+t.clientWidth>i+n.clientWidth)&&e.adjust()}})},"contextmenu.id":function(e,t){var n=this;!t&&e?document.addEventListener("click",this.onClick=function(e){e.target!==n.$el.querySelector(".router-tab-contextmenu")&&n.hideContextmenu()}):t&&!e&&document.removeEventListener("click",this.onClick)}},beforeCreate:function(){a["a"].prototype.$routerTab=this},created:function(){this.getTabItems(),this.updateActivedTab(),this.$router.beforeEach(this.routerPageLeaveGuard),this.$nextTick(this.adjust)},mounted:function(){window.addEventListener("resize",this.onResize=L(this.adjust))},destroyed:function(){window.removeEventListener("resize",this.onResize)},methods:{getAliveId:k,routerPageLeaveGuard:function(e,t,n){if(this._isDestroyed){var a=this.$router.beforeHooks,i=a.indexOf(this.routerPageLeaveGuard);i>-1&&a.splice(i,1),n()}else{var r=this.getAliveId(e),o=this.$refs.routerAlive,u=o&&o.cache[r]||T,s=u.route;s&&!w(e,s)?this.pageLeavePromise(r,"replace").then(function(){return n()}).catch(function(){return n(!1)}):n()}},getTabItems:function(){var e=this,t=this.tabs,n=this.$router,a={};this.items=t.map(function(t,i){var r="string"===typeof t?{to:t}:t||T,o=r.to,u=r.closable,s=r.title,l=r.tips,c=o&&n.match(o);if(c){var d=e.getRouteTab(c),f=d.id;if(!a[f])return s&&(d.title=s),l&&(d.tips=l),d.closable=!1!==u,a[f]=d}}).filter(function(e){return!!e})},updateActivedTab:function(){this.activedTab=this.getAliveId()},updateTab:function(e,t){var n=t.route,a=t.tab,i=this.items,r=this.getRouteTab,o=i.findIndex(function(t){var n=t.id;return n===e}),u=f()(r(n),a);if(o>-1){var s=i[o];u.closable=!1!==s.closable,this.$set(i,o,u)}else i.push(u)},getTabIdByLocation:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var n=this.$router.match(e,this.$router.currentRoute);if(!t)return this.getAliveId(n);var a=P(n),i=this.items.find(function(e){var t=e.to;return t.split("#")[0]===a});return i?i.id:void 0}},getRouteTab:function(e){var t=this.getAliveId(e),n=e.fullPath,a=e.meta,i=a.title,r=a.icon,o=a.tips;return{id:t,to:n,title:i,icon:r,tips:o}},pageLeavePromise:function(e,t){var n=this;return new c.a(function(a,i){var r=n.$refs.routerAlive,o=n.items.find(function(t){return t.id===e}),u=r.cache[e]||T,s=u.vm,l=s&&s.$vnode.componentOptions.Ctor.options.beforePageLeave;"function"===typeof l?l.bind(s)(a,i,o,t):a()})},closeTabItem:function(e){var t=this.items,n=this.$refs.routerAlive,a=t.findIndex(function(t){return t.id===e});return 1===t.length?c.a.reject(new Error(this.lang.msg.keepOneTab)):this.pageLeavePromise(e,"close").then(function(){n.remove(e),a>-1&&t.splice(a,1)}).catch(function(e){})},close:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var n=this.getTabIdByLocation(e,t);n&&this.closeTab(n)}else this.closeTab()},closeTab:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.activedTab,t=this.activedTab,n=this.items,a=this.$router,i=n.findIndex(function(t){return t.id===e});this.closeTabItem(e).then(function(){if(t===e){var r=n[i]||n[i-1];a.replace(r.to)}}).catch(function(e){return console.warn(C,e.message)})},closeMulti:function(e){var t=this,n=this.items,a=this.$router,i=this.contextmenu,r=this.closeTabItem,o=n.find(function(e){var t=e.id;return t===i.id});R(e.map(function(e){var t=e.id;return function(){r(t)}})).finally(function(){-1===n.findIndex(function(e){var n=e.id;return n===t.activedTab})&&a.replace(o.to)})},refresh:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(e){var n=this.getTabIdByLocation(e,t);n&&this.refreshTab(n)}else this.refreshTab()},refreshTab:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.activedTab;this.pageLeavePromise(t,"refresh").then(function(){e.$refs.routerAlive.clear(t),t===e.activedTab&&e.reloadRouter()})},refreshAll:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=this.$refs.routerAlive,a=n.cache,i=s()(a).map(function(a){return function(){if(!t)return e.pageLeavePromise(a,"refresh").then(function(){n.clear(a)});n.clear(a)}});R(i).finally(this.reloadRouter)},reloadRouter:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.isRouterAlive=!1,t&&this.$nextTick(function(){e.isRouterAlive=!0})},onTabTransitionEnd:function(){this.adjust()},onPageTransitionEnd:function(){this.isRouterAlive||(this.isRouterAlive=!0)},showContextmenu:function(e,t,n){var a=n||T,i=a.y,r=a.x;f()(this.contextmenu,{id:e,index:t,top:i,left:r})},hideContextmenu:function(){this.showContextmenu(null,-1)},tabScroll:function(e){var t=this.$el.querySelector(".router-tab-header"),n=t.querySelector(".router-tab-scroll"),a=t.clientWidth-110;O(n,n.scrollLeft+("left"===e?-a:a))},adjust:function(){var e=this.$el.querySelector(".router-tab-header"),t=e.querySelector(".router-tab-scroll"),n=t.querySelector(".router-tab-nav"),a=n.querySelector(".actived"),i=n.clientWidth>t.clientWidth;e.classList[i?"add":"remove"]("is-scroll"),a&&i&&O(t,a.offsetLeft+(a.clientWidth-t.clientWidth)/2)},fixCommentPage:function(){8===this.$refs.routerAlive.$el.nodeType&&this.reloadRouter(!0)}}},q=M,N=(n("f143"),n("d8de"),n("2877")),B=Object(N["a"])(q,r,o,!1,null,null,null),z=B.exports;z.install=function e(t,n){e.installed||(e.installed=!0,t.component(z.name,z),t.mixin(i))},"undefined"!==typeof window&&window.Vue&&window.Vue.use(z);var V=z,W=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-ct",class:{"sidebar-open":e.sidebarOpen}},[n("app-header",{on:{"sidebar-change":function(t){e.sidebarOpen=!e.sidebarOpen}}}),n("div",{staticClass:"app-bd"},[n("div",{staticClass:"app-sd-mask",on:{click:function(t){e.sidebarOpen=!1}}}),n("app-aside"),n("router-view")],1)],1)},U=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("header",{staticClass:"app-hd"},[a("div",{staticClass:"app-home"},[a("a",{staticClass:"rt-icon-menu toggle-side",on:{click:function(t){return e.$emit("sidebar-change")}}}),a("img",{staticClass:"site-logo",attrs:{src:n("4ffd"),alt:"Vue Router Tab - logo"}}),e._m(0)]),a("site-link")],1)},H=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"site-title"},[n("a",{attrs:{href:"../"}},[e._v("Vue Router Tab")]),e._v(" - Demo\n    ")])}],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"site-link"},e._l(e.links,function(e,t){var a=e.label,i=e.icon,r=e.url;return n("a",{key:t,class:"rt-icon-"+i,attrs:{href:r,target:0===r.indexOf("http")?"_blank":"_self",title:a}})}),0)},K=[],Q={name:"SiteLink",data:function(){return{links:[{label:"GitHub",icon:"github",url:"https://github.com/bhuh12/vue-router-tab"},{label:"文档和API",icon:"api",url:"https://bhuh12.github.io/vue-router-tab/"},{label:"作者主页",icon:"home",url:"https://bhuh.net"},{label:"问题和建议",icon:"feedback",url:"mailto: bihaiyouhong12@126.com?subject="+encodeURIComponent("vue-router-tab 问题和建议")}]}}},X=Q,Y=(n("6672"),Object(N["a"])(X,J,K,!1,null,"69ad53d2",null)),Z=Y.exports,ee={name:"AppHeader",components:{SiteLink:Z}},te=ee,ne=(n("0ca0"),Object(N["a"])(te,F,H,!1,null,"5bc45ed8",null)),ae=ne.exports,ie=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",{staticClass:"app-sd"},[n("div",{staticClass:"app-sd-menu"},e._l(e.menu,function(e,t){return n("menu-group",{key:t,attrs:{data:e}})}),1),n("footer",{staticClass:"app-sd-ft"},[n("site-link")],1)])},re=[],oe=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data.children&&e.data.children.length?n("div",{staticClass:"menu-group"},[n("menu-item",{attrs:{data:e.data}}),n("div",{staticClass:"menu-list"},e._l(e.data.children,function(e,t){return n("menu-group",{key:t,attrs:{data:e}})}),1)],1):n("menu-item",{attrs:{data:e.data}})},ue=[],se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.data.text&&!e.data.to?n("h3",{staticClass:"menu-title"},[e._v(e._s(e.data.text))]):e.data.to?n("router-link",{staticClass:"menu-item",attrs:{to:e.data.to}},[e._v(e._s(e.data.text))]):e._e()},le=[],ce={name:"MenuItem",props:{data:Object}},de=ce,fe=Object(N["a"])(de,se,le,!1,null,null,null),ve=fe.exports,he={name:"MenuGroup",props:{data:Object},components:{MenuItem:ve}},pe=he,be=(n("7e0a"),Object(N["a"])(pe,oe,ue,!1,null,"9c52df0e",null)),me=be.exports,ge={name:"AppAside",components:{MenuGroup:me,SiteLink:Z},data:function(){return{menu:[{text:"RouterTab 配置",children:[{text:"默认配置",to:"/default/"},{text:"过渡效果",to:"/transition/"},{text:"初始展示页签",to:"/initial-tabs/"},{text:"语言配置",children:[{text:"指定语言",to:"/lang-en/"},{text:"自定义语言",to:"/lang-custom"}]},{text:"自定义页签模板",to:"/slot/"}]},{text:"页签规则",children:[{text:"默认页签规则",to:"/default/rule/a/1"},{text:"全局页签规则",to:"/global-rule/rule/a/1"},{text:"路由页签规则",to:"/default/route-rule/a/1"}]},{text:"页面配置",children:[{text:"动态更新页签配置",to:"/default/tab-dynamic"},{text:"页面离开确认",to:"/initial-tabs/page-leave"}]}]}}},ye=ge,Te=(n("1ef7"),Object(N["a"])(ye,ie,re,!1,null,"8cc0cffa",null)),xe=Te.exports,Ce={name:"App",components:{AppHeader:ae,AppAside:xe},data:function(){return{sidebarOpen:!1}},watch:{$route:function(e){this.sidebarOpen=!1}}},_e=Ce,Le=(n("8c44"),n("f2ab"),Object(N["a"])(_e,W,U,!1,null,"6a3320e2",null)),Re=Le.exports,Oe=n("8c4f"),$e=function(e){return function(){return n("1a5d")("./".concat(e,".vue"))}},ke=function(e){return function(){return n("df99")("./".concat(e,".vue"))}};a["a"].use(Oe["a"]);var Ae=[{path:"page/:id",component:$e("Page"),meta:{title:"页面",icon:"rt-icon-doc"}},{path:"rule/:catalog/:type",component:$e("Rule"),meta:{title:"默认规则",icon:"rt-icon-log"}},{path:"route-rule/:catalog/:type",component:$e("Rule"),meta:{title:"路由规则",icon:"rt-icon-log",aliveId:function(e){return"route-rule/".concat(e.params.catalog)}}},{path:"tab-dynamic",component:$e("TabDynamic"),meta:{title:"动态更新页签",icon:"rt-icon-log"}},{path:"page-leave",component:$e("PageLeave"),meta:{title:"页面离开确认",icon:"rt-icon-contact"}}],Pe=new Oe["a"]({routes:[{path:"/",redirect:"/default/page/1"},{path:"/default/",component:ke("Default"),redirect:"/default/page/1",children:Ae},{path:"/transition/",component:ke("Transition"),redirect:"/transition/page/1",children:Ae},{path:"/initial-tabs/",component:ke("InitialTabs"),redirect:"/initial-tabs/page/1",children:Ae},{path:"/lang-en/",component:ke("Language"),redirect:"/lang-en/page/1",children:Ae},{path:"/lang-custom/",component:ke("LanguageCustom"),redirect:"/lang-custom/page/1",children:Ae},{path:"/slot/",component:ke("Slot"),redirect:"/slot/page/1",children:Ae},{path:"/global-rule/",component:ke("GlobalRule"),redirect:"/global-rule/rule/a/1",children:Ae},{path:"/404",component:$e("404"),meta:{title:"找不到页面",icon:"rt-icon-warning"}},{path:"*",redirect:"/404"}]});a["a"].config.productionTip=!1,a["a"].use(V),new a["a"]({router:Pe,render:function(e){return e(Re)}}).$mount("#app")},6672:function(e,t,n){"use strict";var a=n("9be5"),i=n.n(a);i.a},"67f5":function(e,t,n){},"7e0a":function(e,t,n){"use strict";var a=n("b9ba"),i=n.n(a);i.a},"8c44":function(e,t,n){"use strict";var a=n("0da6"),i=n.n(a);i.a},"9be5":function(e,t,n){},a273:function(e,t,n){},b9ba:function(e,t,n){},d8de:function(e,t,n){"use strict";var a=n("67f5"),i=n.n(a);i.a},df99:function(e,t,n){var a={"./Default.vue":["01f6","ly-Default-vue"],"./GlobalRule.vue":["d0e4","ly-GlobalRule-vue"],"./InitialTabs.vue":["3958","ly-InitialTabs-vue"],"./Language.vue":["5346","ly-Language-vue"],"./LanguageCustom.vue":["bed4","ly-LanguageCustom-vue"],"./Slot.vue":["e8ef","ly-Slot-vue"],"./Transition.vue":["208c","ly-Transition-vue"]};function i(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n(e)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}i.keys=function(){return Object.keys(a)},i.id="df99",e.exports=i},e73d:function(e,t,n){},f143:function(e,t,n){"use strict";var a=n("2348"),i=n.n(a);i.a},f2ab:function(e,t,n){"use strict";var a=n("a273"),i=n.n(a);i.a}});
//# sourceMappingURL=app.05dff627.js.map