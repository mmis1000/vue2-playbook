(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uml"],{"03a3":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",[n("button",{on:{click:t.addItem}},[t._v("Add")])]),t._l(t.items,(function(e){return n("drag",{key:e.id,staticStyle:{left:"0",top:"0",position:"absolute",padding:"2em"},style:{background:e.background},attrs:{left:e.x,top:e.y,options:{grid:[20,20],containment:".container"}},on:{"update:left":function(n){return t.$set(e,"x",n)},"update:top":function(n){return t.$set(e,"y",n)}}},[null==t.first?n("button",{on:{click:function(n){return t.clickFirst(e)}}},[t._v("Link")]):n("button",{on:{click:function(n){return t.clickSecond(e)}}},[t._v("To")])])})),t._l(t.mappedLines,(function(t){return n("svg",{key:t.id,staticStyle:{position:"absolute","pointer-events":"none"},style:{left:Math.min(t.first.x,t.second.x)-2+"px",top:Math.min(t.first.y,t.second.y)-2+"px"},attrs:{width:Math.max(Math.abs(t.first.x-t.second.x)+4,4),height:Math.max(Math.abs(t.first.y-t.second.y)+4,4)}},[n("line",{staticStyle:{"stroke-width":"2"},style:{stroke:t.background},attrs:{x1:(t.first.x-t.second.x)*(t.first.y-t.second.y)>0?2:Math.abs(t.first.x-t.second.x)+2,y1:"2",x2:(t.first.x-t.second.x)*(t.first.y-t.second.y)<=0?2:Math.abs(t.first.x-t.second.x)+2,y2:Math.abs(t.first.y-t.second.y)+2}})])}))],2)},i=[],a=(n("99af"),n("7db0"),n("d81d"),n("5530")),o=n("3ce3"),c={components:{Drag:o["a"]},data:function(){return{items:[],lines:[],first:null}},computed:{mappedLines:function(){var t=this;return this.lines.map((function(e){return Object(a["a"])(Object(a["a"])({},e),{},{first:Object(a["a"])({},t.items.find((function(t){return t.id===e.first}))||{x:0,y:0}),second:Object(a["a"])({},t.items.find((function(t){return t.id===e.second}))||{x:0,y:0})})}))}},methods:{addItem:function(){this.items.push({x:0,y:0,background:"rgba(".concat(192+~~(64*Math.random()),", ").concat(192+~~(64*Math.random()),", ").concat(192+~~(64*Math.random()),", 0.5)"),id:Math.random()})},clickFirst:function(t){this.first=t.id},clickSecond:function(t){this.lines.push({first:this.first,second:t.id,background:"rgba(".concat(192+~~(64*Math.random()),", ").concat(192+~~(64*Math.random()),", ").concat(192+~~(64*Math.random()),", 0.5)"),id:Math.random()}),this.first=null}}},s=c,u=(n("e912"),n("2877")),f=Object(u["a"])(s,r,i,!1,null,"558ce806",null);e["default"]=f.exports},"06c5":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a630"),n("fb6a"),n("b0c0"),n("d3b7"),n("25f0"),n("3ca3");var r=n("6b75");function i(t,e){if(t){if("string"===typeof t)return Object(r["a"])(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Object(r["a"])(t,e):void 0}}},"14c3":function(t,e,n){var r=n("c6b6"),i=n("9263");t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var a=n.call(t,e);if("object"!==typeof a)throw TypeError("RegExp exec method returned something other than an Object or null");return a}if("RegExp"!==r(t))throw TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},1852:function(t,e,n){},"19fa":function(t,e,n){"use strict";n("905d")},"1da1":function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("d3b7");function r(t,e,n,r,i,a,o){try{var c=t[a](o),s=c.value}catch(u){return void n(u)}c.done?e(s):Promise.resolve(s).then(r,i)}function i(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var o=t.apply(e,n);function c(t){r(o,i,a,c,s,"next",t)}function s(t){r(o,i,a,c,s,"throw",t)}c(void 0)}))}}},"25f0":function(t,e,n){"use strict";var r=n("6eeb"),i=n("825a"),a=n("d039"),o=n("ad6d"),c="toString",s=RegExp.prototype,u=s[c],f=a((function(){return"/a/b"!=u.call({source:"a",flags:"b"})})),l=u.name!=c;(f||l)&&r(RegExp.prototype,c,(function(){var t=i(this),e=String(t.source),n=t.flags,r=String(void 0===n&&t instanceof RegExp&&!("flags"in s)?o.call(t):n);return"/"+e+"/"+r}),{unsafe:!0})},"3ca3":function(t,e,n){"use strict";var r=n("6547").charAt,i=n("69f3"),a=n("7dd0"),o="String Iterator",c=i.set,s=i.getterFor(o);a(String,"String",(function(t){c(this,{type:o,string:String(t),index:0})}),(function(){var t,e=s(this),n=e.string,i=e.index;return i>=n.length?{value:void 0,done:!0}:(t=r(n,i),e.index+=t.length,{value:t,done:!1})}))},"4df4":function(t,e,n){"use strict";var r=n("0366"),i=n("7b0b"),a=n("9bdd"),o=n("e95a"),c=n("50c4"),s=n("8418"),u=n("35a1");t.exports=function(t){var e,n,f,l,h,d,p=i(t),v="function"==typeof this?this:Array,g=arguments.length,y=g>1?arguments[1]:void 0,b=void 0!==y,m=u(p),x=0;if(b&&(y=r(y,g>2?arguments[2]:void 0,2)),void 0==m||v==Array&&o(m))for(e=c(p.length),n=new v(e);e>x;x++)d=b?y(p[x],x):p[x],s(n,x,d);else for(l=m.call(p),h=l.next,n=new v;!(f=h.call(l)).done;x++)d=b?a(l,y,[f.value,x],!0):f.value,s(n,x,d);return n.length=x,n}},5319:function(t,e,n){"use strict";var r=n("d784"),i=n("825a"),a=n("7b0b"),o=n("50c4"),c=n("a691"),s=n("1d80"),u=n("8aa5"),f=n("14c3"),l=Math.max,h=Math.min,d=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,v=/\$([$&'`]|\d\d?)/g,g=function(t){return void 0===t?t:String(t)};r("replace",2,(function(t,e,n,r){var y=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,m=y?"$":"$0";return[function(n,r){var i=s(this),a=void 0==n?void 0:n[t];return void 0!==a?a.call(n,i,r):e.call(String(i),n,r)},function(t,r){if(!y&&b||"string"===typeof r&&-1===r.indexOf(m)){var a=n(e,t,this,r);if(a.done)return a.value}var s=i(t),d=String(this),p="function"===typeof r;p||(r=String(r));var v=s.global;if(v){var w=s.unicode;s.lastIndex=0}var E=[];while(1){var S=f(s,d);if(null===S)break;if(E.push(S),!v)break;var k=String(S[0]);""===k&&(s.lastIndex=u(d,o(s.lastIndex),w))}for(var O="",L=0,D=0;D<E.length;D++){S=E[D];for(var I=String(S[0]),_=l(h(c(S.index),d.length),0),A=[],R=1;R<S.length;R++)A.push(g(S[R]));var j=S.groups;if(p){var M=[I].concat(A,_,d);void 0!==j&&M.push(j);var N=String(r.apply(void 0,M))}else N=x(I,d,_,A,j,r);_>=L&&(O+=d.slice(L,_)+N,L=_+I.length)}return O+d.slice(L)}];function x(t,n,r,i,o,c){var s=r+t.length,u=i.length,f=v;return void 0!==o&&(o=a(o),f=p),e.call(c,f,(function(e,a){var c;switch(a.charAt(0)){case"$":return"$";case"&":return t;case"`":return n.slice(0,r);case"'":return n.slice(s);case"<":c=o[a.slice(1,-1)];break;default:var f=+a;if(0===f)return e;if(f>u){var l=d(f/10);return 0===l?e:l<=u?void 0===i[l-1]?a.charAt(1):i[l-1]+a.charAt(1):e}c=i[f-1]}return void 0===c?"":c}))}}))},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var r=n("1d80"),i=n("5899"),a="["+i+"]",o=RegExp("^"+a+a+"*"),c=RegExp(a+a+"*$"),s=function(t){return function(e){var n=String(r(e));return 1&t&&(n=n.replace(o,"")),2&t&&(n=n.replace(c,"")),n}};t.exports={start:s(1),end:s(2),trim:s(3)}},6062:function(t,e,n){"use strict";var r=n("6d61"),i=n("6566");t.exports=r("Set",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),i)},6547:function(t,e,n){var r=n("a691"),i=n("1d80"),a=function(t){return function(e,n){var a,o,c=String(i(e)),s=r(n),u=c.length;return s<0||s>=u?t?"":void 0:(a=c.charCodeAt(s),a<55296||a>56319||s+1===u||(o=c.charCodeAt(s+1))<56320||o>57343?t?c.charAt(s):a:t?c.slice(s,s+2):o-56320+(a-55296<<10)+65536)}};t.exports={codeAt:a(!1),charAt:a(!0)}},6566:function(t,e,n){"use strict";var r=n("9bf2").f,i=n("7c73"),a=n("e2cc"),o=n("0366"),c=n("19aa"),s=n("2266"),u=n("7dd0"),f=n("2626"),l=n("83ab"),h=n("f183").fastKey,d=n("69f3"),p=d.set,v=d.getterFor;t.exports={getConstructor:function(t,e,n,u){var f=t((function(t,r){c(t,f,e),p(t,{type:e,index:i(null),first:void 0,last:void 0,size:0}),l||(t.size=0),void 0!=r&&s(r,t[u],{that:t,AS_ENTRIES:n})})),d=v(e),g=function(t,e,n){var r,i,a=d(t),o=y(t,e);return o?o.value=n:(a.last=o={index:i=h(e,!0),key:e,value:n,previous:r=a.last,next:void 0,removed:!1},a.first||(a.first=o),r&&(r.next=o),l?a.size++:t.size++,"F"!==i&&(a.index[i]=o)),t},y=function(t,e){var n,r=d(t),i=h(e);if("F"!==i)return r.index[i];for(n=r.first;n;n=n.next)if(n.key==e)return n};return a(f.prototype,{clear:function(){var t=this,e=d(t),n=e.index,r=e.first;while(r)r.removed=!0,r.previous&&(r.previous=r.previous.next=void 0),delete n[r.index],r=r.next;e.first=e.last=void 0,l?e.size=0:t.size=0},delete:function(t){var e=this,n=d(e),r=y(e,t);if(r){var i=r.next,a=r.previous;delete n.index[r.index],r.removed=!0,a&&(a.next=i),i&&(i.previous=a),n.first==r&&(n.first=i),n.last==r&&(n.last=a),l?n.size--:e.size--}return!!r},forEach:function(t){var e,n=d(this),r=o(t,arguments.length>1?arguments[1]:void 0,3);while(e=e?e.next:n.first){r(e.value,e.key,this);while(e&&e.removed)e=e.previous}},has:function(t){return!!y(this,t)}}),a(f.prototype,n?{get:function(t){var e=y(this,t);return e&&e.value},set:function(t,e){return g(this,0===t?0:t,e)}}:{add:function(t){return g(this,t=0===t?0:t,t)}}),l&&r(f.prototype,"size",{get:function(){return d(this).size}}),f},setStrong:function(t,e,n){var r=e+" Iterator",i=v(e),a=v(r);u(t,e,(function(t,e){p(this,{type:r,target:t,state:i(t),kind:e,last:void 0})}),(function(){var t=a(this),e=t.kind,n=t.last;while(n&&n.removed)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),f(e)}}},"6b75":function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}n.d(e,"a",(function(){return r}))},"6d61":function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("f183"),s=n("2266"),u=n("19aa"),f=n("861d"),l=n("d039"),h=n("1c7e"),d=n("d44e"),p=n("7156");t.exports=function(t,e,n){var v=-1!==t.indexOf("Map"),g=-1!==t.indexOf("Weak"),y=v?"set":"add",b=i[t],m=b&&b.prototype,x=b,w={},E=function(t){var e=m[t];o(m,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return g&&!f(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(g&&!f(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(a(t,"function"!=typeof b||!(g||m.forEach&&!l((function(){(new b).entries().next()})))))x=n.getConstructor(e,t,v,y),c.REQUIRED=!0;else if(a(t,!0)){var S=new x,k=S[y](g?{}:-0,1)!=S,O=l((function(){S.has(1)})),L=h((function(t){new b(t)})),D=!g&&l((function(){var t=new b,e=5;while(e--)t[y](e,e);return!t.has(-0)}));L||(x=e((function(e,n){u(e,x,t);var r=p(new b,e,x);return void 0!=n&&s(n,r[y],{that:r,AS_ENTRIES:v}),r})),x.prototype=m,m.constructor=x),(O||D)&&(E("delete"),E("has"),v&&E("get")),(D||k)&&E(y),g&&m.clear&&delete m.clear}return w[t]=x,r({global:!0,forced:x!=b},w),d(x,t),g||n.setStrong(x,t,v),x}},7156:function(t,e,n){var r=n("861d"),i=n("d2bb");t.exports=function(t,e,n){var a,o;return i&&"function"==typeof(a=e.constructor)&&a!==n&&r(o=a.prototype)&&o!==n.prototype&&i(t,o),t}},"7db0":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").find,a=n("44d2"),o=n("ae40"),c="find",s=!0,u=o(c);c in[]&&Array(1)[c]((function(){s=!1})),r({target:"Array",proto:!0,forced:s||!u},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a(c)},"8aa5":function(t,e,n){"use strict";var r=n("6547").charAt;t.exports=function(t,e,n){return e+(n?r(t,e).length:1)}},"905d":function(t,e,n){},9263:function(t,e,n){"use strict";var r=n("ad6d"),i=n("9f7f"),a=RegExp.prototype.exec,o=String.prototype.replace,c=a,s=function(){var t=/a/,e=/b*/g;return a.call(t,"a"),a.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),u=i.UNSUPPORTED_Y||i.BROKEN_CARET,f=void 0!==/()??/.exec("")[1],l=s||f||u;l&&(c=function(t){var e,n,i,c,l=this,h=u&&l.sticky,d=r.call(l),p=l.source,v=0,g=t;return h&&(d=d.replace("y",""),-1===d.indexOf("g")&&(d+="g"),g=String(t).slice(l.lastIndex),l.lastIndex>0&&(!l.multiline||l.multiline&&"\n"!==t[l.lastIndex-1])&&(p="(?: "+p+")",g=" "+g,v++),n=new RegExp("^(?:"+p+")",d)),f&&(n=new RegExp("^"+p+"$(?!\\s)",d)),s&&(e=l.lastIndex),i=a.call(h?n:l,g),h?i?(i.input=i.input.slice(v),i[0]=i[0].slice(v),i.index=l.lastIndex,l.lastIndex+=i[0].length):l.lastIndex=0:s&&i&&(l.lastIndex=l.global?i.index+i[0].length:e),f&&i&&i.length>1&&o.call(i[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(i[c]=void 0)})),i}),t.exports=c},"96cf":function(t,e,n){var r=function(t){"use strict";var e,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",o=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(j){s=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),o=new _(r||[]);return a._invoke=O(t,n,o),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(j){return{type:"throw",arg:j}}}t.wrap=u;var l="suspendedStart",h="suspendedYield",d="executing",p="completed",v={};function g(){}function y(){}function b(){}var m={};m[a]=function(){return this};var x=Object.getPrototypeOf,w=x&&x(x(A([])));w&&w!==n&&r.call(w,a)&&(m=w);var E=b.prototype=g.prototype=Object.create(m);function S(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function k(t,e){function n(i,a,o,c){var s=f(t[i],t,a);if("throw"!==s.type){var u=s.arg,l=u.value;return l&&"object"===typeof l&&r.call(l,"__await")?e.resolve(l.__await).then((function(t){n("next",t,o,c)}),(function(t){n("throw",t,o,c)})):e.resolve(l).then((function(t){u.value=t,o(u)}),(function(t){return n("throw",t,o,c)}))}c(s.arg)}var i;function a(t,r){function a(){return new e((function(e,i){n(t,r,e,i)}))}return i=i?i.then(a,a):a()}this._invoke=a}function O(t,e,n){var r=l;return function(i,a){if(r===d)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw a;return R()}n.method=i,n.arg=a;while(1){var o=n.delegate;if(o){var c=L(o,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===l)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=d;var s=f(t,e,n);if("normal"===s.type){if(r=n.done?p:h,s.arg===v)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=p,n.method="throw",n.arg=s.arg)}}}function L(t,n){var r=t.iterator[n.method];if(r===e){if(n.delegate=null,"throw"===n.method){if(t.iterator["return"]&&(n.method="return",n.arg=e,L(t,n),"throw"===n.method))return v;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=f(r,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,v;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,v):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,v)}function D(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function I(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(D,this),this.reset(!0)}function A(t){if(t){var n=t[a];if(n)return n.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,o=function n(){while(++i<t.length)if(r.call(t,i))return n.value=t[i],n.done=!1,n;return n.value=e,n.done=!0,n};return o.next=o}}return{next:R}}function R(){return{value:e,done:!0}}return y.prototype=E.constructor=b,b.constructor=y,y.displayName=s(b,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,b):(t.__proto__=b,s(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},S(k.prototype),k.prototype[o]=function(){return this},t.AsyncIterator=k,t.async=function(e,n,r,i,a){void 0===a&&(a=Promise);var o=new k(u(e,n,r,i),a);return t.isGeneratorFunction(n)?o:o.next().then((function(t){return t.done?t.value:o.next()}))},S(E),s(E,c,"Generator"),E[a]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){while(e.length){var r=e.pop();if(r in t)return n.value=r,n.done=!1,n}return n.done=!0,n}},t.values=A,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function i(r,i){return c.type="throw",c.arg=t,n.next=r,i&&(n.method="next",n.arg=e),!!i}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],c=o.completion;if("root"===o.tryLoc)return i("end");if(o.tryLoc<=this.prev){var s=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(s&&u){if(this.prev<o.catchLoc)return i(o.catchLoc,!0);if(this.prev<o.finallyLoc)return i(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return i(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return i(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var a=i;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var o=a?a.completion:{};return o.type=t,o.arg=e,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(o)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),I(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var i=r.arg;I(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=r}catch(i){Function("r","regeneratorRuntime = r")(r)}},"9bdd":function(t,e,n){var r=n("825a"),i=n("2a62");t.exports=function(t,e,n,a){try{return a?e(r(n)[0],n[1]):e(n)}catch(o){throw i(t),o}}},"9f7f":function(t,e,n){"use strict";var r=n("d039");function i(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=r((function(){var t=i("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=r((function(){var t=i("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a630:function(t,e,n){var r=n("23e7"),i=n("4df4"),a=n("1c7e"),o=!a((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:o},{from:i})},a9e3:function(t,e,n){"use strict";var r=n("83ab"),i=n("da84"),a=n("94ca"),o=n("6eeb"),c=n("5135"),s=n("c6b6"),u=n("7156"),f=n("c04e"),l=n("d039"),h=n("7c73"),d=n("241c").f,p=n("06cf").f,v=n("9bf2").f,g=n("58a8").trim,y="Number",b=i[y],m=b.prototype,x=s(h(m))==y,w=function(t){var e,n,r,i,a,o,c,s,u=f(t,!1);if("string"==typeof u&&u.length>2)if(u=g(u),e=u.charCodeAt(0),43===e||45===e){if(n=u.charCodeAt(2),88===n||120===n)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+u}for(a=u.slice(2),o=a.length,c=0;c<o;c++)if(s=a.charCodeAt(c),s<48||s>i)return NaN;return parseInt(a,r)}return+u};if(a(y,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var E,S=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof S&&(x?l((function(){m.valueOf.call(n)})):s(n)!=y)?u(new b(w(e)),n,S):w(e)},k=r?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),O=0;k.length>O;O++)c(b,E=k[O])&&!c(S,E)&&v(S,E,p(b,E));S.prototype=m,m.constructor=S,o(i,y,S)}},ac1f:function(t,e,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(t,e,n){"use strict";var r=n("825a");t.exports=function(){var t=r(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},b0c0:function(t,e,n){var r=n("83ab"),i=n("9bf2").f,a=Function.prototype,o=a.toString,c=/^\s*function ([^ (]*)/,s="name";r&&!(s in a)&&i(a,s,{configurable:!0,get:function(){try{return o.call(this).match(c)[1]}catch(t){return""}}})},b85c:function(t,e,n){"use strict";n.d(e,"a",(function(){return i}));n("a4d3"),n("e01a"),n("d28b"),n("d3b7"),n("3ca3"),n("ddb0");var r=n("06c5");function i(t,e){var n;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=Object(r["a"])(t))||e&&t&&"number"===typeof t.length){n&&(t=n);var i=0,a=function(){};return{s:a,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,s=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){s=!0,o=t},f:function(){try{c||null==n["return"]||n["return"]()}finally{if(s)throw o}}}}},bb2f:function(t,e,n){var r=n("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},d28b:function(t,e,n){var r=n("746f");r("iterator")},d784:function(t,e,n){"use strict";n("ac1f");var r=n("6eeb"),i=n("d039"),a=n("b622"),o=n("9263"),c=n("9112"),s=a("species"),u=!i((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),f=function(){return"$0"==="a".replace(/./,"$0")}(),l=a("replace"),h=function(){return!!/./[l]&&""===/./[l]("a","$0")}(),d=!i((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));t.exports=function(t,e,n,l){var p=a(t),v=!i((function(){var e={};return e[p]=function(){return 7},7!=""[t](e)})),g=v&&!i((function(){var e=!1,n=/a/;return"split"===t&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return e=!0,null},n[p](""),!e}));if(!v||!g||"replace"===t&&(!u||!f||h)||"split"===t&&!d){var y=/./[p],b=n(p,""[t],(function(t,e,n,r,i){return e.exec===o?v&&!i?{done:!0,value:y.call(e,n,r)}:{done:!0,value:t.call(n,e,r)}:{done:!1}}),{REPLACE_KEEPS_$0:f,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:h}),m=b[0],x=b[1];r(String.prototype,t,m),r(RegExp.prototype,p,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}l&&c(RegExp.prototype[p],"sham",!0)}},d81d:function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").map,a=n("1dde"),o=n("ae40"),c=a("map"),s=o("map");r({target:"Array",proto:!0,forced:!c||!s},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},dca8:function(t,e,n){var r=n("23e7"),i=n("bb2f"),a=n("d039"),o=n("861d"),c=n("f183").onFreeze,s=Object.freeze,u=a((function(){s(1)}));r({target:"Object",stat:!0,forced:u,sham:!i},{freeze:function(t){return s&&o(t)?s(c(t)):t}})},ddb0:function(t,e,n){var r=n("da84"),i=n("fdbc"),a=n("e260"),o=n("9112"),c=n("b622"),s=c("iterator"),u=c("toStringTag"),f=a.values;for(var l in i){var h=r[l],d=h&&h.prototype;if(d){if(d[s]!==f)try{o(d,s,f)}catch(v){d[s]=f}if(d[u]||o(d,u,l),i[l])for(var p in a)if(d[p]!==a[p])try{o(d,p,a[p])}catch(v){d[p]=a[p]}}}},e01a:function(t,e,n){"use strict";var r=n("23e7"),i=n("83ab"),a=n("da84"),o=n("5135"),c=n("861d"),s=n("9bf2").f,u=n("e893"),f=a.Symbol;if(i&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},h=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof h?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(h,f);var d=h.prototype=f.prototype;d.constructor=h;var p=d.toString,v="Symbol(test)"==String(f("test")),g=/^Symbol\((.*)\)[^)]+$/;s(d,"description",{configurable:!0,get:function(){var t=c(this)?this.valueOf():this,e=p.call(t);if(o(l,t))return"";var n=v?e.slice(7,-1):e.replace(g,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:h})}},e912:function(t,e,n){"use strict";n("1852")},ed17:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("MyTable",{attrs:{dataProvider:t.dataProvider}})],1)},i=[];n("d3b7");function a(t){if(Array.isArray(t))return t}n("a4d3"),n("e01a"),n("d28b"),n("3ca3"),n("ddb0");function o(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var n=[],r=!0,i=!1,a=void 0;try{for(var o,c=t[Symbol.iterator]();!(r=(o=c.next()).done);r=!0)if(n.push(o.value),e&&n.length===e)break}catch(s){i=!0,a=s}finally{try{r||null==c["return"]||c["return"]()}finally{if(i)throw a}}return n}}var c=n("06c5");function s(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t,e){return a(t)||o(t,e)||Object(c["a"])(t,e)||s()}n("96cf");var f=n("1da1"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.ready?n("div",{staticClass:"m-infinite-table",style:{width:t.width+"px",height:t.height+"px"},on:{"&scroll":function(e){return t.handleScroll(e)}}},[n("div",{staticClass:"m-infinite-table-inner",style:{width:t.defaultData.size.left+t.defaultData.dimension.width*t.defaultData.size.width+t.defaultData.size.right+"px",height:t.defaultData.size.top+t.defaultData.dimension.height*t.defaultData.size.height+t.defaultData.size.bottom+"px"}},[t._l(t.bodyChunks,(function(e){return[n("div",{key:e.id,staticClass:"area",style:e.style},[t._l(e.items,(function(e){return[t._t("body",[n("div",{key:e.id,class:e.class,style:e.style},[t._v(" "+t._s(e.data)+" ")])],{data:e.data},e)]}))],2)]}))],2)]):n("div",{staticClass:"m-infinite-table loading"},[t._v(" Loading... ")])},h=[],d=(n("99af"),n("4de4"),n("b0c0"),n("a9e3"),n("dca8"),n("ac1f"),n("6062"),n("5319"),n("b85c"));var p=Object.freeze([{name:"left",type:"side",direction:"y"},{name:"right",type:"side",direction:"y"},{name:"top",type:"side",direction:"x"},{name:"bottom",type:"side",direction:"x"},{name:"leftTop",type:"edge"},{name:"leftBottom",type:"edge"},{name:"rightTop",type:"edge"},{name:"rightBottom",type:"edge"}]);var v={props:{chunkLength:{type:Number,default:5},chunkPadding:{type:Number,default:2},width:{type:Number,default:500},height:{type:Number,default:500},dataProvider:{type:Object}},data:function(){return{DIRECTIONS:p,ready:!1,defaultData:null,data:{},loadingState:{},scrollPosition:{top:0,left:0}}},computed:{xOrigin:function(){var t=this.scrollPosition.left,e=this.defaultData.size.width*this.chunkLength;return Math.max(Math.floor(t/e)-this.chunkPadding,0)},xLength:function(){var t=this.xOrigin,e=this.width,n=this.defaultData.size.width*this.chunkLength,r=Math.ceil(e/n)+2*this.chunkPadding,i=Math.ceil(this.defaultData.dimension.width*this.defaultData.size.width/n)-t;return Math.min(r,i)},yOrigin:function(){var t=this.scrollPosition.top,e=this.defaultData.size.height*this.chunkLength;return Math.max(Math.floor(t/e)-this.chunkPadding,0)},yLength:function(){var t=this.yOrigin,e=this.height,n=this.defaultData.size.height*this.chunkLength,r=Math.ceil(e/n)+2*this.chunkPadding,i=Math.ceil(this.defaultData.dimension.height*this.defaultData.size.height/n)-t;return Math.min(r,i)},bodyChunks:function(){var t=[];this.xOrigin;for(var e=this.xOrigin;e<this.xOrigin+this.xLength;e++)for(var n=this.yOrigin;n<this.yOrigin+this.yLength;n++){var r={style:{position:"absolute",left:"0px",top:"0px",transform:"\n                  translateX(".concat(this.defaultData.size.left+e*this.chunkLength*this.defaultData.size.width,"px)\n                  translateY(").concat(this.defaultData.size.top+n*this.chunkLength*this.defaultData.size.height,"px)\n                ").replace(/\n/," ")},id:e%this.xLength+"-"+n%this.yLength,items:this.getBodyChunk(e,n)};t.push(r)}return t},headerChunks:function(){var t,e={},n=Object(d["a"])(this.DIRECTIONS.filter((function(t){return"side"===t.type})));try{for(n.s();!(t=n.n()).done;){var r=t.value,i=[];if(e[r.name]=i,"x"===r.direction)for(var a=this.xOrigin;a<this.xOrigin+this.xLength;a++)i.push({style:{},id:r.name+"-"+a%this.xLength,items:this.getHeaderChunk(r.name,a)});else if("y"===r.direction)for(var o=this.yOrigin;o<this.yOrigin+this.yLength;o++)i.push({style:{},id:r.name+"-"+o%this.yLength,items:this.getHeaderChunk(r.name,o)})}}catch(c){n.e(c)}finally{n.f()}return e},edges:function(){var t,e={},n=Object(d["a"])(this.DIRECTIONS.filter((function(t){return"edge"===t.type})));try{for(n.s();!(t=n.n()).done;){var r=t.value;e[r.name]=this.getEdge(r.name)}}catch(i){n.e(i)}finally{n.f()}return e}},methods:{handleScroll:function(t){this.scrollPosition.top=t.target.scrollTop,this.scrollPosition.left=t.target.scrollLeft},reSync:function(){},getBodyChunk:function(t,e){var n=[];if(this.data[t+"-"+e])for(var r=this.data[t+"-"+e],i=0;i<r.length;i++)for(var a=0;a<r[i].length;a++)n.push({style:Object.assign({},r[i][a].style,{position:"absolute",left:"0px",top:"0px",width:this.defaultData.size.width+"px",height:this.defaultData.size.height+"px",transform:"\n                  translateX(".concat(a*this.defaultData.size.width,"px)\n                  translateY(").concat(i*this.defaultData.size.height,"px)\n                ").replace(/\n/," ")}),data:r[i][a].data,class:r[i][a].class,id:a+"-"+i});else{for(var o=this.defaultData.dimension.width-t*this.chunkLength,c=this.defaultData.dimension.height-e*this.chunkLength,s=0;s<Math.min(this.chunkLength,c);s++)for(var u=0;u<Math.min(this.chunkLength,o);u++)n.push({style:Object.assign({},this.defaultData.body.style,{position:"absolute",left:"0px",top:"0px",width:this.defaultData.size.width+"px",height:this.defaultData.size.height+"px",transform:"\n                  translateX(".concat(u*this.defaultData.size.width,"px)\n                  translateY(").concat(s*this.defaultData.size.height,"px)\n                ").replace(/\n/," ")}),data:this.defaultData.body.data,class:this.defaultData.body.class,id:u+"-"+s});this.loadingState[t+"-"+e]||this.updateData(t,e)}return n},getHeaderChunk:function(t,e){},getEdge:function(t){},updateData:function(t,e){var n=this;return Object(f["a"])(regeneratorRuntime.mark((function r(){var i,a,o,c,s;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return i=n.defaultData.dimension.width-t*n.chunkLength,a=n.defaultData.dimension.height-e*n.chunkLength,o=new AbortController,c=n.dataProvider.getData(o.signal,{x:[t*n.chunkLength,t*n.chunkLength+Math.min(n.chunkLength,i)],y:[e*n.chunkLength,e*n.chunkLength+Math.min(n.chunkLength,a)]}),n.$set(n.loadingState,t+"-"+e,{controller:o,promise:c}),r.prev=5,r.next=8,c;case 8:s=r.sent,n.$set(n.data,t+"-"+e,s);case 10:return r.prev=10,n.$delete(n.loadingState,t+"-"+e),r.finish(10);case 13:n.gc();case 14:case"end":return r.stop()}}),r,null,[[5,,10,13]])})))()},gc:function(){for(var t=this.xOrigin-2,e=this.xOrigin+this.xLength+2,n=this.yOrigin-2,r=this.yOrigin+this.yLength+2,i=new Set,a=t;a<e;a++)for(var o=n;o<r;o++)i.add(a+"-"+o);for(var c in this.loadingState)i.has(c)||this.loadingState[c].controller.abort();for(var s in this.data)i.has(s)||this.$delete(this.data,s)}},mounted:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.dataProvider.getDefaultData();case 2:t.defaultData=e.sent,t.ready=!0,t.reSync();case 5:case"end":return e.stop()}}),e)})))()}},g=v,y=(n("19fa"),n("2877")),b=Object(y["a"])(g,l,h,!1,null,"1058d3c5",null),m=b.exports,x={name:"app",components:{MyTable:m},data:function(){return{dataProvider:{getDefaultData:function(){return Object(f["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.abrupt("return",{body:{style:{"border-right":"white 2px solid","border-bottom":"white 2px solid",background:"black",color:"white","line-height":"36px","box-sizing":"border-box"},class:"",data:"Loading..."},sides:{},dimension:{height:19998,width:2e4},size:{left:100,right:100,width:100,top:40,bottom:40,height:40}});case 1:case"end":return t.stop()}}),t)})))()},getData:function(t,e){var n=u(e.x,2),r=n[0],i=n[1],a=u(e.y,2),o=a[0],c=a[1];return new Promise((function(e,n){var a=setTimeout((function(){for(var t=[],n=o;n<c;n++){var a=[];t.push(a);for(var s=r;s<i;s++){var u=s+n,f="hsl(".concat(10*u%360,", 50%, 50%)"),l="hsl(".concat((10*u+120)%360,", 50%, 50%)"),h="hsl(".concat((10*u+180)%360,", 50%, 50%)");a.push({data:s+"-"+n,style:{background:f,"border-right":"".concat(l," 2px solid"),"border-bottom":"".concat(l," 2px solid"),"line-height":"36px","box-sizing":"border-box",color:h},class:""})}}e(t)}),100+800*Math.random());t.onabort=function(){clearTimeout(a),n(new Error("aborted"))}}))}}}}},w=x,E=Object(y["a"])(w,r,i,!1,null,null,null);e["default"]=E.exports},f183:function(t,e,n){var r=n("d012"),i=n("861d"),a=n("5135"),o=n("9bf2").f,c=n("90e3"),s=n("bb2f"),u=c("meta"),f=0,l=Object.isExtensible||function(){return!0},h=function(t){o(t,u,{value:{objectID:"O"+ ++f,weakData:{}}})},d=function(t,e){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!a(t,u)){if(!l(t))return"F";if(!e)return"E";h(t)}return t[u].objectID},p=function(t,e){if(!a(t,u)){if(!l(t))return!0;if(!e)return!1;h(t)}return t[u].weakData},v=function(t){return s&&g.REQUIRED&&l(t)&&!a(t,u)&&h(t),t},g=t.exports={REQUIRED:!1,fastKey:d,getWeakData:p,onFreeze:v};r[u]=!0},fb6a:function(t,e,n){"use strict";var r=n("23e7"),i=n("861d"),a=n("e8b5"),o=n("23cb"),c=n("50c4"),s=n("fc6a"),u=n("8418"),f=n("b622"),l=n("1dde"),h=n("ae40"),d=l("slice"),p=h("slice",{ACCESSORS:!0,0:0,1:2}),v=f("species"),g=[].slice,y=Math.max;r({target:"Array",proto:!0,forced:!d||!p},{slice:function(t,e){var n,r,f,l=s(this),h=c(l.length),d=o(t,h),p=o(void 0===e?h:e,h);if(a(l)&&(n=l.constructor,"function"!=typeof n||n!==Array&&!a(n.prototype)?i(n)&&(n=n[v],null===n&&(n=void 0)):n=void 0,n===Array||void 0===n))return g.call(l,d,p);for(r=new(void 0===n?Array:n)(y(p-d,0)),f=0;d<p;d++,f++)d in l&&u(r,f,l[d]);return r.length=f,r}})}}]);
//# sourceMappingURL=uml.cc1988e9.js.map