(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["clock"],{"03ea":function(t,e,n){"use strict";e["a"]={name:"RequestAnimationFrame",data:function(){return{_id:null,prev:null,current:Date.now(),diff:null}},methods:{tick:function(){this.prev=this.current,this.current=Date.now(),this.diff=Math.max(this.current-this.prev,8),this.$emit("tick",this.current,this.prev,this.diff),this._id=requestAnimationFrame(this.tick)}},created:function(){this.tick=this.tick.bind(this)},mounted:function(){requestAnimationFrame(this.tick)},beforeDestroy:function(){cancelAnimationFrame(this._id)},render:function(){return this.$scopedSlots.default?this.$scopedSlots.default({current:this.current})[0]:this.$createElement("link")}}},"11e9":function(t,e,n){var r=n("52a7"),i=n("4630"),a=n("6821"),s=n("6a99"),c=n("69a8"),u=n("c69a"),o=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?o:function(t,e){if(t=a(t),e=s(e,!0),u)try{return o(t,e)}catch(n){}if(c(t,e))return i(!r.f.call(t,e),t[e])}},"5dbc":function(t,e,n){var r=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var a,s=e.constructor;return s!==n&&"function"==typeof s&&(a=s.prototype)!==n.prototype&&r(a)&&i&&i(t,a),t}},"70a2":function(t,e,n){},"79b0":function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"clock"},[n("RAF",{on:{tick:function(e){t.current=e}}}),n("Clock",{attrs:{current:t.current}}),n("Clock",{attrs:{current:t.reversed}}),n("Clock",{attrs:{current:t.fast}}),n("Clock",{attrs:{current:t.slow}}),n("Clock",{attrs:{current:t.current,animationFunction:function(t){return.5*Math.sin((2*t-1)*Math.PI/2)+.5}}})],1)},i=[],a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("MyNumber",{attrs:{base:3,value:t.digits[0]}}),n("MyNumber",{attrs:{base:t.currentDigits[0]>=2?4:10,value:t.digits[1]}}),n("span",{staticClass:"seperator"},[t._v(":")]),n("MyNumber",{attrs:{base:6,value:t.digits[2]}}),n("MyNumber",{attrs:{base:10,value:t.digits[3]}}),n("span",{staticClass:"seperator"},[t._v(":")]),n("MyNumber",{attrs:{base:6,value:t.digits[4]}}),n("MyNumber",{attrs:{base:10,value:t.digits[5]}})],1)},s=[],c=(n("c5f6"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"digit"},[n("div",{staticClass:"wrapper",style:"transform: translateY(-"+50*t.percentage+"%)"},[n("div",{staticClass:"current"},[t._v("\n      "+t._s(t.currentChar)+"\n    ")]),n("div",{staticClass:"next"},[t._v("\n      "+t._s(t.nextChar)+"\n    ")])])])}),u=[],o={props:{value:{type:Number,default:0},base:{type:Number,default:10}},computed:{current:function(){return Math.floor(this.value)},next:function(){return Math.floor(this.value)+1},currentChar:function(){return(this.current%this.base+this.base)%this.base},nextChar:function(){return(this.next%this.base+this.base)%this.base},percentage:function(){return this.value-this.current}}},f=o,l=(n("c763"),n("2877")),h=Object(l["a"])(f,c,u,!1,null,"76692dce",null),p=h.exports,d={components:{MyNumber:p},props:{current:{type:Number,default:0},animationFunction:{type:Function,default:function(t){return t}}},computed:{digits:function(){var t=this.currentDigits,e=this.nextDigits,n=this.current%1e3/1e3;return n=this.animationFunction(n),t.map((function(t,r){return t!==e[r]?t+n:t}))},currentDigits:function(){return this.computeDigits(this.current)},nextDigits:function(){return this.computeDigits(this.current+1e3)}},methods:{computeDigits:function(t){var e=new Date(t),n=e.getSeconds(),r=e.getMinutes(),i=e.getHours();return[~~(i/10),i%10,~~(r/10),r%10,~~(n/10),n%10]}}},b=d,m=(n("a183"),Object(l["a"])(b,a,s,!1,null,"bb2e603a",null)),v=m.exports,g=n("03ea"),_={components:{Clock:v,RAF:g["a"]},data:function(){return{current:Date.now(),initial:Date.now()}},computed:{fast:function(){return this.initial+10*(this.current-this.initial+16*Math.random())},slow:function(){return this.initial+(this.current-this.initial)/10},reversed:function(){return this.initial-(this.current-this.initial)}}},y=_,N=(n("84e2"),Object(l["a"])(y,r,i,!1,null,"5195bb5a",null));e["default"]=N.exports},"84e2":function(t,e,n){"use strict";n("cba1")},"8b97":function(t,e,n){var r=n("d3f4"),i=n("cb7c"),a=function(t,e){if(i(t),!r(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,r){try{r=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),r(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return a(t,n),e?t.__proto__=n:r(t,n),t}}({},!1):void 0),check:a}},9093:function(t,e,n){var r=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},a183:function(t,e,n){"use strict";n("70a2")},aa77:function(t,e,n){var r=n("5ca1"),i=n("be13"),a=n("79e5"),s=n("fdef"),c="["+s+"]",u="​",o=RegExp("^"+c+c+"*"),f=RegExp(c+c+"*$"),l=function(t,e,n){var i={},c=a((function(){return!!s[t]()||u[t]()!=u})),o=i[t]=c?e(h):s[t];n&&(i[n]=o),r(r.P+r.F*c,"String",i)},h=l.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(o,"")),2&e&&(t=t.replace(f,"")),t};t.exports=l},c5f6:function(t,e,n){"use strict";var r=n("7726"),i=n("69a8"),a=n("2d95"),s=n("5dbc"),c=n("6a99"),u=n("79e5"),o=n("9093").f,f=n("11e9").f,l=n("86cc").f,h=n("aa77").trim,p="Number",d=r[p],b=d,m=d.prototype,v=a(n("2aeb")(m))==p,g="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){e=g?e.trim():h(e,3);var n,r,i,a=e.charCodeAt(0);if(43===a||45===a){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var s,u=e.slice(2),o=0,f=u.length;o<f;o++)if(s=u.charCodeAt(o),s<48||s>i)return NaN;return parseInt(u,r)}}return+e};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof d&&(v?u((function(){m.valueOf.call(n)})):a(n)!=p)?s(new b(_(e)),n,d):_(e)};for(var y,N=n("9e1e")?o(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;N.length>C;C++)i(b,y=N[C])&&!i(d,y)&&l(d,y,f(b,y));d.prototype=m,m.constructor=d,n("2aba")(r,p,d)}},c763:function(t,e,n){"use strict";n("fd52")},cba1:function(t,e,n){},fd52:function(t,e,n){},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=clock.fdf09483.js.map