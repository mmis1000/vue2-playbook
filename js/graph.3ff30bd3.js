(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["graph"],{"53e4":function(t,e,r){"use strict";r("96cf");var n=r("795b"),o=r.n(n);function a(t,e,r,n,a,i,c){try{var u=t[i](c),s=u.value}catch(l){return void r(l)}u.done?e(s):o.a.resolve(s).then(n,a)}function i(t){return function(){var e=this,r=arguments;return new o.a(function(n,o){var i=t.apply(e,r);function c(t){a(i,n,o,c,u,"next",t)}function u(t){a(i,n,o,c,u,"throw",t)}c(void 0)})}}r.d(e,"a",function(){return c}),r.d(e,"b",function(){return u});var c={name:"sub-tree",functional:!0,render:function(t,e){var r=e.props,n=r.template,o=r.data;return n(o)}},u={name:"tree-root",functional:!0,components:{TreeRoot:function(){var t=i(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",u);case 1:case"end":return t.stop()}},t)}));function e(){return t.apply(this,arguments)}return e}()},render:function(t,e){var r=e.props.data,n=e.props.depth||0,o=e.scopedSlots.default,a=[o({data:r,depth:n,template:function(r){return t("tree-root",{attrs:{data:r,depth:n+1},scopedSlots:e.scopedSlots},[])}})];return a}}},6022:function(t,e,r){"use strict";var n=r("a13b"),o=r.n(n);o.a},"8b30":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"page"},[r("div",{staticClass:"top"},[t._v("\n    combine draggable component and recusive component, these magic can be easilly achieved\n  ")]),r("div",{staticClass:"container"},[r("div",{staticClass:"center"},[r("tree-root",{attrs:{data:t.items},scopedSlots:t._u([{key:"default",fn:function(e){var n=e.depth,o=e.data,a=e.template;return t._l(o,function(e,i){return r("div",{key:i,staticClass:"offseted",on:{click:function(t){t.stopPropagation()},pointerdown:function(t){t.stopPropagation()}}},[r("drag",{staticClass:"main-item",staticStyle:{left:"0",top:"0",position:"absolute"},style:{background:e.background},attrs:{left:e.x,top:e.y,options:{grid:[20,20],containment:".container"}},on:{"update:left":function(r){return t.$set(e,"x",r)},"update:top":function(r){return t.$set(e,"y",r)}}},[r("svg",{staticStyle:{position:"absolute","pointer-events":"none"},style:{left:e.x>0?"-"+e.x+"px":"0",top:e.y>0?"-"+e.y+"px":"0"},attrs:{height:Math.max(Math.abs(e.y),4),width:Math.max(Math.abs(e.x),4)}},[r("line",{staticStyle:{"stroke-width":"2"},style:{stroke:e.background},attrs:{x1:e.x*e.y>0?0:Math.abs(e.x),y1:"0",x2:e.x*e.y<=0?0:Math.abs(e.x),y2:Math.abs(e.y)}})]),r("div",{staticClass:"header"},[t._v("Item Depth "+t._s(n))]),r("input",{directives:[{name:"model",rawName:"v-model",value:e.x,expression:"sub.x"}],attrs:{type:"number"},domProps:{value:e.x},on:{input:function(r){r.target.composing||t.$set(e,"x",r.target.value)}}}),r("input",{directives:[{name:"model",rawName:"v-model",value:e.y,expression:"sub.y"}],attrs:{type:"number"},domProps:{value:e.y},on:{input:function(r){r.target.composing||t.$set(e,"y",r.target.value)}}}),r("button",{on:{pointerdown:function(r){return t.addChild(e)}}},[t._v("Add child")]),n>0?r("button",{on:{pointerdown:function(r){return t.removeMe(o,e)}}},[t._v("Remove Me")]):t._e(),r("sub-tree",t._b({},"sub-tree",{depth:n+1,data:e.children,template:a},!1))],1)],1)})}}])})],1)])])},o=[],a=r("3ce3"),i=r("53e4"),c={components:{Drag:a["a"],SubTree:i["a"],TreeRoot:i["b"]},data:function(){return{items:[{x:0,y:0,children:[],background:"#fff"}]}},methods:{removeMe:function(t,e){var r=t.indexOf(e);r>=0&&t.splice(r,1)},addChild:function(t,e,r){t.children.push({x:null!=e?e:20*(t.children.length+1),y:null!=r?r:20*(t.children.length+1),background:"rgba(".concat(192+~~(64*Math.random()),", ").concat(192+~~(64*Math.random()),", ").concat(192+~~(64*Math.random()),", 0.5)"),children:[]})}}},u=c,s=(r("6022"),r("2877")),l=Object(s["a"])(u,n,o,!1,null,"c7a19dbc",null);e["default"]=l.exports},"96cf":function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,a=Object.create(o.prototype),i=new O(n||[]);return a._invoke=E(t,r,i),a}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",f="executing",p="completed",d={};function v(){}function y(){}function m(){}var g={};g[a]=function(){return this};var w=Object.getPrototypeOf,b=w&&w(w(j([])));b&&b!==r&&n.call(b,a)&&(g=b);var x=m.prototype=v.prototype=Object.create(g);function L(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function _(t){function e(r,o,a,i){var c=s(t[r],t,o);if("throw"!==c.type){var u=c.arg,l=u.value;return l&&"object"===typeof l&&n.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,i)},function(t){e("throw",t,a,i)}):Promise.resolve(l).then(function(t){u.value=t,a(u)},function(t){return e("throw",t,a,i)})}i(c.arg)}var r;function o(t,n){function o(){return new Promise(function(r,o){e(t,n,r,o)})}return r=r?r.then(o,o):o()}this._invoke=o}function E(t,e,r){var n=l;return function(o,a){if(n===f)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw a;return P()}r.method=o,r.arg=a;while(1){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=f;var u=s(t,e,r);if("normal"===u.type){if(n=r.done?p:h,u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=p,r.method="throw",r.arg=u.arg)}}}function k(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator["return"]&&(r.method="return",r.arg=e,k(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function S(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function M(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(S,this),this.reset(!0)}function j(t){if(t){var r=t[a];if(r)return r.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){while(++o<t.length)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:P}}function P(){return{value:e,done:!0}}return y.prototype=x.constructor=m,m.constructor=y,m[c]=y.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},L(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o){var a=new _(u(e,r,n,o));return t.isGeneratorFunction(r)?a:a.next().then(function(t){return t.done?t.value:a.next()})},L(x),x[c]="Generator",x[a]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){while(e.length){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=j,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(M),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(u&&s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),M(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;M(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:j(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=n}catch(o){Function("r","regeneratorRuntime = r")(n)}},a13b:function(t,e,r){}}]);
//# sourceMappingURL=graph.3ff30bd3.js.map