(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ajax"],{"0dbb":function(t,e,n){},4483:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{padding:"1em"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.src,expression:"src"}],attrs:{type:"text"},domProps:{value:t.src},on:{input:function(e){e.target.composing||(t.src=e.target.value)}}}),n("pre",[t._v(t._s(t.text))]),n("Ajax",{attrs:{src:t.src},on:{success:t.onAjaxFinish}})],1)},c=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("link")},u=[],a=n("b012"),i=n("bc3a"),o={props:{src:{type:String,default:null}},data:function(){return{source:null}},methods:{fetch:a((function(t){var e=this,n=i["CancelToken"].source();this.source=n,this.$axios.get(t,{cancelToken:n.token}).then((function(t){e.$emit("success",t)})).catch((function(t){e.$axios.isCancel(t)||e.$emit("error",t)}))}),300),cancel:function(){this.source&&this.source.cancel()}},watch:{src:function(t,e){t!==e&&(this.source&&this.source.cancel(),null!=t&&this.fetch(t))}},mounted:function(){null!=this.src&&this.fetch(this.src)},beforeDestroy:function(){this.source&&this.source.cancel()}},l=o,f=n("2877"),h=Object(f["a"])(l,r,u,!1,null,null,null),p=h.exports,d={data:function(){return{src:"/assets/ajax-test.txt",text:""}},components:{Ajax:p},methods:{onAjaxFinish:function(t){this.text="string"===typeof t.data?t.data:JSON.stringify(t.data,0,4)}}},m=d,v=Object(f["a"])(m,s,c,!1,null,null,null);e["default"]=v.exports},"7b3d":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("router-view")],1)},c=[],r={},u=r,a=(n("a0af"),n("2877")),i=Object(a["a"])(u,s,c,!1,null,"06bb1e53",null);e["default"]=i.exports},a0af:function(t,e,n){"use strict";n("0dbb")},b012:function(t,e){function n(t,e,n){var s,c,r,u,a;function i(){var o=Date.now()-u;o<e&&o>=0?s=setTimeout(i,e-o):(s=null,n||(a=t.apply(r,c),r=c=null))}null==e&&(e=100);var o=function(){r=this,c=arguments,u=Date.now();var o=n&&!s;return s||(s=setTimeout(i,e)),o&&(a=t.apply(r,c),r=c=null),a};return o.clear=function(){s&&(clearTimeout(s),s=null)},o.flush=function(){s&&(a=t.apply(r,c),r=c=null,clearTimeout(s),s=null)},o}n.debounce=n,t.exports=n}}]);
//# sourceMappingURL=ajax.92d9b2bd.js.map