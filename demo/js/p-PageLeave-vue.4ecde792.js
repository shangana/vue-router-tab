(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["p-PageLeave-vue"],{"5e6b":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-page"},[a("h2",[e._v("页面离开确认")]),a("p",[e._v("你在 "),a("strong",{staticClass:"text-strong"},[e._v(e._s(e.pageTime))]),e._v(" 秒前打开本页面")]),e._m(0),a("input",{directives:[{name:"model",rawName:"v-model",value:e.editValue,expression:"editValue"}],attrs:{type:"text"},domProps:{value:e.editValue},on:{input:function(t){t.target.composing||(e.editValue=t.target.value)}}}),a("p",[a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.refresh()}}},[e._v("刷新")]),a("a",{staticClass:"demo-btn",on:{click:function(t){return e.$routerTab.close()}}},[e._v("关闭")]),a("router-link",{staticClass:"demo-btn",attrs:{to:"?id="+(+(this.$route.query.id||0)+1)}},[e._v("替换")])],1)])},n=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",[a("strong",{staticClass:"text-strong"},[e._v("修改输入框的值")]),e._v("后，页面在页签关闭/刷新/被替换时将会确认提示\n  ")])}],r=a("df9a"),s={name:"PageLeave",mixins:[r["a"]],data:function(){var e="初始值";return{value:e,editValue:e}},beforePageLeave:function(e,t,a,i){var n={close:"关闭",refresh:"刷新",replace:"替换"},r=n[i],s="您确认要".concat(r,"页签“").concat(a.title,"”吗？");this.editValue!==this.value?confirm(s)?e():t("拒绝了页面离开"):e()}},c=s,o=a("2877"),u=Object(o["a"])(c,i,n,!1,null,null,null);t["default"]=u.exports},df9a:function(e,t,a){"use strict";t["a"]={data:function(){return{openTime:new Date,pageTime:0}},activated:function(){this.updatePageTime()},deactivated:function(){this.clearPageTimer()},beforeDestroy:function(){this.clearPageTimer()},methods:{calcPageTime:function(){this.pageTime=Math.floor((new Date-this.openTime)/1e3)},updatePageTime:function(){this.calcPageTime(),this.clearPageTimer(),this.pageTimer=setInterval(this.calcPageTime,1e3)},clearPageTimer:function(){clearInterval(this.pageTimer)}}}}}]);
//# sourceMappingURL=p-PageLeave-vue.4ecde792.js.map