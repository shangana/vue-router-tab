(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-Page-vue"],{"30be":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("table",{staticClass:"demo-table"},[a("tr",[a("th",{attrs:{width:"80"}},[t._v("\n      name\n    ")]),a("td",[t._v(t._s(t.$route.name))])]),a("tr",[a("th",[t._v("path")]),a("td",[t._v(t._s(t.$route.path))])]),a("tr",[a("th",[t._v("params")]),a("td",[t._v(t._s(t.$route.params))])]),a("tr",[a("th",[t._v("query")]),a("td",[t._v(t._s(t.$route.query))])]),a("tr",[a("th",[t._v("hash")]),a("td",[t._v(t._s(t.$route.hash))])]),a("tr",[a("th",[t._v("fullPath")]),a("td",[t._v(t._s(t.$route.fullPath))])])])},r=[],s=a("0c7c"),c={},i=Object(s["a"])(c,n,r,!1,null,null,null);e["a"]=i.exports},"778e":function(t,e,a){"use strict";e["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}},c21b:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-page"},[a("h2",{on:{click:t.click}},[t._v("\n    页面"+t._s(t.pageId)+"\n  ")]),a("p",[t._v("你在 "),a("strong",{staticClass:"text-strong"},[t._v(t._s(t.pageTime))]),t._v(" 秒前打开本页面")]),a("h3",[t._v("页签操作")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.refresh()}}},[t._v("刷新当前页面")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.close()}}},[t._v("关闭当前页面")])]),a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+t.nextId}},[t._v("\n      打开“页面"+t._s(t.nextId)+"”\n    ")])],1),t.prevId>0?a("p",[a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+t.prevId}},[t._v("\n      打开“页面"+t._s(t.prevId)+"”\n    ")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"../page/"+t.prevId},nativeOn:{click:function(e){return t.$routerTab.refresh("../page/"+t.prevId)}}},[t._v("\n      全新打开“页面"+t._s(t.prevId)+"”\n    ")])],1):t._e(),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$router.push("../tab-dynamic")}}},[t._v("打开“动态更新页签”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.close("../tab-dynamic")}}},[t._v("关闭“动态更新页签”")])]),a("h4",[t._v("iframe 页签")]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.openIframeTab("https://www.baidu.com","百度")}}},[t._v("打开“百度”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.refreshIframeTab("https://www.baidu.com")}}},[t._v("刷新“百度”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.closeIframeTab("https://www.baidu.com")}}},[t._v("关闭“百度”")])]),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.openIframeTab("https://map.baidu.com/","百度地图","rt-icon-web")}}},[t._v("打开“百度地图”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.refreshIframeTab("https://map.baidu.com/")}}},[t._v("刷新“百度地图”")]),a("a",{staticClass:"demo-btn",on:{click:function(e){return t.$routerTab.closeIframeTab("https://map.baidu.com/")}}},[t._v("关闭“百度地图”")])]),t._m(0),a("h3",[t._v("路由信息")]),a("page-route-info")],1)},r=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("input",{attrs:{type:"text"}})])}],s=a("778e"),c=a("30be"),i={name:"Page",components:{PageRouteInfo:c["a"]},mixins:[s["a"]],data:function(){var t=this.$route.params.id;return{pageId:t,nextId:+t+1,prevId:+t-1,routeTab:{title:"页面"+t}}},methods:{click:function(){console.log("页面".concat(this.pageId))}}},o=i,u=a("0c7c"),l=Object(u["a"])(o,n,r,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=p-Page-vue.4a22f9da.js.map