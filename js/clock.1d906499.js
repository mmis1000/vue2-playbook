(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["clock"],{"03ea":function(t,e,r){"use strict";e["a"]={name:"RequestAnimationFrame",data:function(){return{_id:null,prev:null,current:Date.now(),diff:null}},methods:{tick:function(){this.prev=this.current,this.current=Date.now(),this.diff=Math.max(this.current-this.prev,8),this.$emit("tick",this.current,this.prev,this.diff),this._id=requestAnimationFrame(this.tick)}},created:function(){this.tick=this.tick.bind(this)},mounted:function(){requestAnimationFrame(this.tick)},beforeDestroy:function(){cancelAnimationFrame(this._id)},render:function(){return this.$scopedSlots.default?this.$scopedSlots.default({current:this.current})[0]:this.$createElement("link")}}},"04bd":function(t,e,r){},"1dde":function(t,e,r){var n=r("d039"),i=r("b622"),a=r("2d00"),s=i("species");t.exports=function(t){return a>=51||!n((function(){var e=[],r=e.constructor={};return r[s]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var n=r("1d80"),i=r("5899"),a="["+i+"]",s=RegExp("^"+a+a+"*"),u=RegExp(a+a+"*$"),c=function(t){return function(e){var r=String(n(e));return 1&t&&(r=r.replace(s,"")),2&t&&(r=r.replace(u,"")),r}};t.exports={start:c(1),end:c(2),trim:c(3)}},"65f0":function(t,e,r){var n=r("861d"),i=r("e8b5"),a=r("b622"),s=a("species");t.exports=function(t,e){var r;return i(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!i(r.prototype)?n(r)&&(r=r[s],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===e?0:e)}},"6be9":function(t,e,r){},7156:function(t,e,r){var n=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var a,s;return i&&"function"==typeof(a=e.constructor)&&a!==r&&n(s=a.prototype)&&s!==r.prototype&&i(t,s),t}},"79b0":function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"clock"},[r("RAF",{on:{tick:function(e){t.current=e}}}),r("Clock",{attrs:{current:t.current}}),r("Clock",{attrs:{current:t.reversed}}),r("Clock",{attrs:{current:t.fast}}),r("Clock",{attrs:{current:t.slow}}),r("Clock",{attrs:{current:t.current,animationFunction:function(t){return.5*Math.sin((2*t-1)*Math.PI/2)+.5}}})],1)},i=[],a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrapper"},[r("MyNumber",{attrs:{base:3,value:t.digits[0]}}),r("MyNumber",{attrs:{base:t.currentDigits[0]>=2?4:10,value:t.digits[1]}}),r("span",{staticClass:"seperator"},[t._v(":")]),r("MyNumber",{attrs:{base:6,value:t.digits[2]}}),r("MyNumber",{attrs:{base:10,value:t.digits[3]}}),r("span",{staticClass:"seperator"},[t._v(":")]),r("MyNumber",{attrs:{base:6,value:t.digits[4]}}),r("MyNumber",{attrs:{base:10,value:t.digits[5]}})],1)},s=[],u=(r("d81d"),r("a9e3"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"digit"},[r("div",{staticClass:"wrapper",style:"transform: translateY(-"+50*t.percentage+"%)"},[r("div",{staticClass:"current"},[t._v(" "+t._s(t.currentChar)+" ")]),r("div",{staticClass:"next"},[t._v(" "+t._s(t.nextChar)+" ")])])])}),c=[],o={props:{value:{type:Number,default:0},base:{type:Number,default:10}},computed:{current:function(){return Math.floor(this.value)},next:function(){return Math.floor(this.value)+1},currentChar:function(){return(this.current%this.base+this.base)%this.base},nextChar:function(){return(this.next%this.base+this.base)%this.base},percentage:function(){return this.value-this.current}}},f=o,l=(r("c763"),r("2877")),h=Object(l["a"])(f,u,c,!1,null,"76692dce",null),d=h.exports,p={components:{MyNumber:d},props:{current:{type:Number,default:0},animationFunction:{type:Function,default:function(t){return t}}},computed:{digits:function(){var t=this.currentDigits,e=this.nextDigits,r=this.current%1e3/1e3;return r=this.animationFunction(r),t.map((function(t,n){return t!==e[n]?t+r:t}))},currentDigits:function(){return this.computeDigits(this.current)},nextDigits:function(){return this.computeDigits(this.current+1e3)}},methods:{computeDigits:function(t){var e=new Date(t),r=e.getSeconds(),n=e.getMinutes(),i=e.getHours();return[~~(i/10),i%10,~~(n/10),n%10,~~(r/10),r%10]}}},b=p,v=(r("a183"),Object(l["a"])(b,a,s,!1,null,"bb2e603a",null)),m=v.exports,g=r("03ea"),y={components:{Clock:m,RAF:g["a"]},data:function(){return{current:Date.now(),initial:Date.now()}},computed:{fast:function(){return this.initial+10*(this.current-this.initial+16*Math.random())},slow:function(){return this.initial+(this.current-this.initial)/10},reversed:function(){return this.initial-(this.current-this.initial)}}},N=y,C=(r("84e2"),Object(l["a"])(N,n,i,!1,null,"5195bb5a",null));e["default"]=C.exports},"84e2":function(t,e,r){"use strict";r("a7e3")},a183:function(t,e,r){"use strict";r("04bd")},a7e3:function(t,e,r){},a9e3:function(t,e,r){"use strict";var n=r("83ab"),i=r("da84"),a=r("94ca"),s=r("6eeb"),u=r("5135"),c=r("c6b6"),o=r("7156"),f=r("c04e"),l=r("d039"),h=r("7c73"),d=r("241c").f,p=r("06cf").f,b=r("9bf2").f,v=r("58a8").trim,m="Number",g=i[m],y=g.prototype,N=c(h(y))==m,C=function(t){var e,r,n,i,a,s,u,c,o=f(t,!1);if("string"==typeof o&&o.length>2)if(o=v(o),e=o.charCodeAt(0),43===e||45===e){if(r=o.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+o}for(a=o.slice(2),s=a.length,u=0;u<s;u++)if(c=a.charCodeAt(u),c<48||c>i)return NaN;return parseInt(a,n)}return+o};if(a(m,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var A,x=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof x&&(N?l((function(){y.valueOf.call(r)})):c(r)!=m)?o(new g(C(e)),r,x):C(e)},_=n?d(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),w=0;_.length>w;w++)u(g,A=_[w])&&!u(x,A)&&b(x,A,p(g,A));x.prototype=y,y.constructor=x,s(i,m,x)}},ae40:function(t,e,r){var n=r("83ab"),i=r("d039"),a=r("5135"),s=Object.defineProperty,u={},c=function(t){throw t};t.exports=function(t,e){if(a(u,t))return u[t];e||(e={});var r=[][t],o=!!a(e,"ACCESSORS")&&e.ACCESSORS,f=a(e,0)?e[0]:c,l=a(e,1)?e[1]:void 0;return u[t]=!!r&&!i((function(){if(o&&!n)return!0;var t={length:-1};o?s(t,1,{enumerable:!0,get:c}):t[1]=1,r.call(t,f,l)}))}},b727:function(t,e,r){var n=r("0366"),i=r("44ad"),a=r("7b0b"),s=r("50c4"),u=r("65f0"),c=[].push,o=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,l=6==t,h=7==t,d=5==t||l;return function(p,b,v,m){for(var g,y,N=a(p),C=i(N),A=n(b,v,3),x=s(C.length),_=0,w=m||u,E=e?w(p,x):r||h?w(p,0):void 0;x>_;_++)if((d||_ in C)&&(g=C[_],y=A(g,_,N),t))if(e)E[_]=y;else if(y)switch(t){case 3:return!0;case 5:return g;case 6:return _;case 2:c.call(E,g)}else switch(t){case 4:return!1;case 7:c.call(E,g)}return l?-1:o||f?f:E}};t.exports={forEach:o(0),map:o(1),filter:o(2),some:o(3),every:o(4),find:o(5),findIndex:o(6),filterOut:o(7)}},c763:function(t,e,r){"use strict";r("6be9")},d81d:function(t,e,r){"use strict";var n=r("23e7"),i=r("b727").map,a=r("1dde"),s=r("ae40"),u=a("map"),c=s("map");n({target:"Array",proto:!0,forced:!u||!c},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,r){var n=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==n(t)}}}]);
//# sourceMappingURL=clock.1d906499.js.map