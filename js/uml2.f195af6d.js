(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uml2"],{"03aa":function(t,n,e){"use strict";e("3a9d")},"06c5":function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("a630"),e("fb6a"),e("b0c0"),e("d3b7"),e("25f0"),e("3ca3");function r(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n){if(t){if("string"===typeof t)return r(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(t,n):void 0}}},"07ac":function(t,n,e){var r=e("23e7"),i=e("6f53").values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},"13d5":function(t,n,e){"use strict";var r=e("23e7"),i=e("d58f").left,o=e("a640"),c=e("ae40"),a=e("2d00"),u=e("605d"),s=o("reduce"),d=c("reduce",{1:0}),l=!u&&a>79&&a<83;r({target:"Array",proto:!0,forced:!s||!d||l},{reduce:function(t){return i(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},2532:function(t,n,e){"use strict";var r=e("23e7"),i=e("5a34"),o=e("1d80"),c=e("ab13");r({target:"String",proto:!0,forced:!c("includes")},{includes:function(t){return!!~String(o(this)).indexOf(i(t),arguments.length>1?arguments[1]:void 0)}})},"25f0":function(t,n,e){"use strict";var r=e("6eeb"),i=e("825a"),o=e("d039"),c=e("ad6d"),a="toString",u=RegExp.prototype,s=u[a],d=o((function(){return"/a/b"!=s.call({source:"a",flags:"b"})})),l=s.name!=a;(d||l)&&r(RegExp.prototype,a,(function(){var t=i(this),n=String(t.source),e=t.flags,r=String(void 0===e&&t instanceof RegExp&&!("flags"in u)?c.call(t):e);return"/"+n+"/"+r}),{unsafe:!0})},"33f6":function(t,n,e){"use strict";e("4b3d")},"3a9d":function(t,n,e){},"3ca3":function(t,n,e){"use strict";var r=e("6547").charAt,i=e("69f3"),o=e("7dd0"),c="String Iterator",a=i.set,u=i.getterFor(c);o(String,"String",(function(t){a(this,{type:c,string:String(t),index:0})}),(function(){var t,n=u(this),e=n.string,i=n.index;return i>=e.length?{value:void 0,done:!0}:(t=r(e,i),n.index+=t.length,{value:t,done:!1})}))},"44e7":function(t,n,e){var r=e("861d"),i=e("c6b6"),o=e("b622"),c=o("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[c])?!!n:"RegExp"==i(t))}},"4b3d":function(t,n,e){},"4df4":function(t,n,e){"use strict";var r=e("0366"),i=e("7b0b"),o=e("9bdd"),c=e("e95a"),a=e("50c4"),u=e("8418"),s=e("35a1");t.exports=function(t){var n,e,d,l,f,p,v=i(t),h="function"==typeof this?this:Array,b=arguments.length,g=b>1?arguments[1]:void 0,m=void 0!==g,y=s(v),k=0;if(m&&(g=r(g,b>2?arguments[2]:void 0,2)),void 0==y||h==Array&&c(y))for(n=a(v.length),e=new h(n);n>k;k++)p=m?g(v[k],k):v[k],u(e,k,p);else for(l=y.call(v),f=l.next,e=new h;!(d=f.call(l)).done;k++)p=m?o(l,g,[d.value,k],!0):d.value,u(e,k,p);return e.length=k,e}},"5a34":function(t,n,e){var r=e("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},6547:function(t,n,e){var r=e("a691"),i=e("1d80"),o=function(t){return function(n,e){var o,c,a=String(i(n)),u=r(e),s=a.length;return u<0||u>=s?t?"":void 0:(o=a.charCodeAt(u),o<55296||o>56319||u+1===s||(c=a.charCodeAt(u+1))<56320||c>57343?t?a.charAt(u):o:t?a.slice(u,u+2):c-56320+(o-55296<<10)+65536)}};t.exports={codeAt:o(!1),charAt:o(!0)}},"6f53":function(t,n,e){var r=e("83ab"),i=e("df75"),o=e("fc6a"),c=e("d1e7").f,a=function(t){return function(n){var e,a=o(n),u=i(a),s=u.length,d=0,l=[];while(s>d)e=u[d++],r&&!c.call(a,e)||l.push(t?[e,a[e]]:a[e]);return l}};t.exports={entries:a(!0),values:a(!1)}},"79aa":function(t,n,e){"use strict";e("a2f3")},"857a":function(t,n,e){var r=e("1d80"),i=/"/g;t.exports=function(t,n,e,o){var c=String(r(t)),a="<"+n;return""!==e&&(a+=" "+e+'="'+String(o).replace(i,"&quot;")+'"'),a+">"+c+"</"+n+">"}},9911:function(t,n,e){"use strict";var r=e("23e7"),i=e("857a"),o=e("af03");r({target:"String",proto:!0,forced:o("link")},{link:function(t){return i(this,"a","href",t)}})},"99af":function(t,n,e){"use strict";var r=e("23e7"),i=e("d039"),o=e("e8b5"),c=e("861d"),a=e("7b0b"),u=e("50c4"),s=e("8418"),d=e("65f0"),l=e("1dde"),f=e("b622"),p=e("2d00"),v=f("isConcatSpreadable"),h=9007199254740991,b="Maximum allowed index exceeded",g=p>=51||!i((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),m=l("concat"),y=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:o(t)},k=!g||!m;r({target:"Array",proto:!0,forced:k},{concat:function(t){var n,e,r,i,o,c=a(this),l=d(c,0),f=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?c:arguments[n],y(o)){if(i=u(o.length),f+i>h)throw TypeError(b);for(e=0;e<i;e++,f++)e in o&&s(l,f,o[e])}else{if(f>=h)throw TypeError(b);s(l,f++,o)}return l.length=f,l}})},"9bdd":function(t,n,e){var r=e("825a"),i=e("2a62");t.exports=function(t,n,e,o){try{return o?n(r(e)[0],e[1]):n(e)}catch(c){throw i(t),c}}},a0ba:function(t,n,e){"use strict";e.r(n);var r=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",[e("button",{on:{click:t.addItem}},[t._v("Add")]),e("label",{attrs:{for:"curve"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.curved,expression:"curved"}],attrs:{type:"checkbox",id:"curve"},domProps:{checked:Array.isArray(t.curved)?t._i(t.curved,null)>-1:t.curved},on:{change:function(n){var e=t.curved,r=n.target,i=!!r.checked;if(Array.isArray(e)){var o=null,c=t._i(e,o);r.checked?c<0&&(t.curved=e.concat([o])):c>-1&&(t.curved=e.slice(0,c).concat(e.slice(c+1)))}else t.curved=i}}}),t._v(" Use curve line ")]),e("label",{attrs:{for:"grid"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.grided,expression:"grided"}],attrs:{type:"checkbox",id:"grid"},domProps:{checked:Array.isArray(t.grided)?t._i(t.grided,null)>-1:t.grided},on:{change:function(n){var e=t.grided,r=n.target,i=!!r.checked;if(Array.isArray(e)){var o=null,c=t._i(e,o);r.checked?c<0&&(t.grided=e.concat([o])):c>-1&&(t.grided=e.slice(0,c).concat(e.slice(c+1)))}else t.grided=i}}}),t._v(" Align to grid ")])]),t._l(Object.entries(t.items),(function(n){var r=n[0],i=n[1];return e("Item",{key:r,staticClass:"item",attrs:{item:i,options:t.options},on:{"add-input":function(n){return t.addInput(n)}}})})),t.curved?t._l(Object.entries(t.links),(function(t){var n=t[0],r=t[1];return e("UmlLinkCurved",{key:n+"-c",staticClass:"link",attrs:{link:r}})})):t._l(Object.entries(t.links),(function(t){var n=t[0],r=t[1];return e("UmlLink",{key:n,staticClass:"link",attrs:{link:r}})})),t._l(Object.entries(t.docks),(function(n){var r=n[0],i=n[1];return e("Dock",{key:r,staticClass:"dock",attrs:{dock:i,selected:t.first&&t.first.id===r},on:{click:function(n){return t.handleDockClick(i)}}})}))],2)},i=[],o=(e("fb6a"),e("d3b7"),e("25f0"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("drag",{staticClass:"item",attrs:{left:t.item.x,top:t.item.y,options:t.options},on:{"update:left":function(n){return t.$set(t.item,"x",n)},"update:top":function(n){return t.$set(t.item,"y",n)}}},[e("div",{staticClass:"sub-item output"},[t._v(" Output: "+t._s(t.value)+" ")]),t._l(t.item.inputs,(function(n,r){return e("div",{key:n.id,staticClass:"sub-item"},[0===Object.keys(n.links).length?e("input",{directives:[{name:"model",rawName:"v-model.number",value:n.value,expression:"input.value",modifiers:{number:!0}}],staticClass:"input",attrs:{type:"number"},domProps:{value:n.value},on:{input:function(e){e.target.composing||t.$set(n,"value",t._n(e.target.value))},blur:function(n){return t.$forceUpdate()}}}):e("div",{staticClass:"input-other"},[t._v(" Input: "+t._s(t.inputs[r])+" ")])])})),e("button",{staticClass:"sub-item add",on:{click:function(n){return t.$emit("add-input",t.item)}}},[t._v(" Add Input ")])],2)}),c=[],a=(e("d81d"),e("13d5"),e("b64b"),e("07ac"),e("b85c")),u=e("3ce3"),s={name:"Uml2Item",components:{Drag:u["a"]},props:{item:Object,options:Object},computed:{inputs:function(){var t=function t(n){if(0===Object.keys(n.links).length)return n.value;for(var e=0,r=0,i=Object.values(n.links);r<i.length;r++){var o,c=i[r],u=c.input,s=u.owner,d=Object(a["a"])(s.inputs);try{for(d.s();!(o=d.n()).done;){var l=o.value;e+=t(l)}}catch(f){d.e(f)}finally{d.f()}}return e};return this.item.inputs.map(t)},value:function(){return this.inputs.reduce((function(t,n){return t+n}),0)}}},d=s,l=(e("03aa"),e("2877")),f=Object(l["a"])(d,o,c,!1,null,"3c3dc839",null),p=f.exports,v=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",t._g({staticClass:"dock",class:{selected:t.selected},style:t.style},t.$listeners))},h=[],b=(e("99af"),e("caad"),e("c975"),e("2532"),{name:"Uml2Dock",props:{dock:Object,selected:Boolean},computed:{style:function(){var t=this.dock.owner,n=0;t.inputs.includes(this.dock)&&(n=t.inputs.indexOf(this.dock)*t.yOffset);var e=20,r=this.dock.x+this.dock.owner.x-e/2+"px",i=this.dock.y+this.dock.owner.y+n-e/2+"px";return{transform:"translate(".concat(r,", ").concat(i,")")}}}}),g=b,m=(e("79aa"),Object(l["a"])(g,v,h,!1,null,"251808d2",null)),y=m.exports,k=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",t._b({style:t.positions.style},"svg",t.positions.svgProp,!1),[e("line",t._b({staticStyle:{"stroke-width":"2"},style:{stroke:"green"}},"line",t.positions.lineProp,!1))])},x=[],w=(e("9911"),{name:"Uml2Link",props:{link:Object},computed:{positions:function(){var t=this.link,n=t.input.x+t.input.owner.x,e=t.input.y+t.input.owner.y,r=t.output.owner,i=r.inputs.indexOf(t.output)*r.yOffset,o=t.output.x+t.output.owner.x,c=t.output.y+t.output.owner.y+i;return{style:{position:"absolute","pointer-events":"none",left:Math.min(n,o)-2+"px",top:Math.min(e,c)-2+"px"},svgProp:{width:Math.max(Math.abs(n-o)+4,4),height:Math.max(Math.abs(e-c)+4,4)},lineProp:{x1:(n-o)*(e-c)>0?2:Math.abs(n-o)+2,y1:2,x2:(n-o)*(e-c)<=0?2:Math.abs(n-o)+2,y2:Math.abs(e-c)+2}}}}}),O=w,S=Object(l["a"])(O,k,x,!1,null,"a7e73c2a",null),A=S.exports,_=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("svg",t._b({style:t.positions.style},"svg",t.positions.svgProp,!1),[e("path",t._b({staticStyle:{"stroke-width":"2"},style:{stroke:"green"},attrs:{fill:"none"}},"path",t.positions.pathProp,!1))])},M=[],C={name:"Uml2Link",props:{link:Object},computed:{positions:function(){var t=this.link,n=t.input.x+t.input.owner.x,e=t.input.y+t.input.owner.y,r=t.output.owner,i=r.inputs.indexOf(t.output)*r.yOffset,o=t.output.x+t.output.owner.x,c=t.output.y+t.output.owner.y+i,a=o-n,u=c-e,s=20,d=2*s,l=d-n,f=d-e,p=Math.abs(a)+2*d,v=Math.abs(u)+2*d;a<0&&(l+=Math.abs(a)),u<0&&(f+=Math.abs(u));var h=a<0?Math.min(s,Math.abs(a)/4,Math.abs(u)/4):Math.min(s,Math.abs(a)/2,Math.abs(u)/2),b="";if(a>=0&&u>=0){var g=(n+o)/2;b+="M ".concat(n+l," ").concat(e+f," "),b+="L ".concat(g-h+l," ").concat(e+f," "),b+="Q ".concat(g+l," ").concat(e+f,",\n                   ").concat(g+l," ").concat(e+h+f," "),b+="L ".concat(g+l," ").concat(c-h+f," "),b+="Q ".concat(g+l," ").concat(c+f,",\n                   ").concat(g+h+l," ").concat(c+f," "),b+="L ".concat(o+l," ").concat(c+f," ")}if(a>=0&&u<0){var m=(n+o)/2;b+="M ".concat(n+l," ").concat(e+f," "),b+="L ".concat(m-h+l," ").concat(e+f," "),b+="Q ".concat(m+l," ").concat(e+f,",\n                   ").concat(m+l," ").concat(e-h+f," "),b+="L ".concat(m+l," ").concat(c+h+f," "),b+="Q ".concat(m+l," ").concat(c+f,",\n                   ").concat(m+h+l," ").concat(c+f," "),b+="L ".concat(o+l," ").concat(c+f," ")}if(a<0&&u>=0){var y=(e+c)/2;b+="M ".concat(n+l," ").concat(e+f," "),b+="Q ".concat(n+h+l," ").concat(e+f,"\n                   ").concat(n+h+l," ").concat(e+h+f," "),b+="L ".concat(n+h+l," ").concat(y-h+f," "),b+="Q ".concat(n+h+l," ").concat(y+f," \n                   ").concat(n+l," ").concat(y+f," "),b+="L ".concat(o+l," ").concat(y+f," "),b+="Q ".concat(o-h+l," ").concat(y+f," ,\n                   ").concat(o-h+l," ").concat(y+h+f," "),b+="L ".concat(o-h+l," ").concat(c-h+f," "),b+="Q ".concat(o-h+l," ").concat(c+f," ,\n                   ").concat(o+l," ").concat(c+f," ")}if(a<0&&u<0){var k=(e+c)/2;b+="M ".concat(n+l," ").concat(e+f," "),b+="Q ".concat(n+h+l," ").concat(e+f,"\n                   ").concat(n+h+l," ").concat(e-h+f," "),b+="L ".concat(n+h+l," ").concat(k+h+f," "),b+="Q ".concat(n+h+l," ").concat(k+f," \n                   ").concat(n+l," ").concat(k+f," "),b+="L ".concat(o+l," ").concat(k+f," "),b+="Q ".concat(o-h+l," ").concat(k+f," ,\n                   ").concat(o-h+l," ").concat(k-h+f," "),b+="L ".concat(o-h+l," ").concat(c+h+f," "),b+="Q ".concat(o-h+l," ").concat(c+f," ,\n                   ").concat(o+l," ").concat(c+f," ")}return{style:{position:"absolute","pointer-events":"none",left:Math.min(n,o)-d+"px",top:Math.min(e,c)-d+"px"},svgProp:{width:p,height:v},pathProp:{d:b}}}}},j=C,$=Object(l["a"])(j,_,M,!1,null,"0d012ab3",null),I=$.exports,L={components:{Item:p,Dock:y,UmlLink:A,UmlLinkCurved:I},data:function(){return{curved:!0,grided:!0,items:{},docks:{},links:{},lines:[],first:null}},computed:{options:function(){return this.grided?{grid:[20,20],containment:".container"}:{containment:".container"}}},methods:{newId:function(){return Math.random().toString(16).slice(2)},newDock:function(){var t=this.newId();return{id:t,type:"dock",end:"",value:0,x:0,y:0,owner:null,links:{}}},newItem:function(){var t=this.newId();return{id:t,x:0,y:0,yOffset:40,inputs:[],output:null}},newLink:function(){var t=this.newId();return{id:t,input:null,output:null}},addItem:function(){var t=this.newItem(),n=this.newDock();t.output=n,n.owner=t,n.end="output",n.x=206,n.y=24,this.$set(this.items,t.id,t),this.$set(this.docks,n.id,n),this.addInput(t)},addInput:function(t){var n=this.newDock();t.output=n,n.owner=t,n.end="input",n.x=2,n.y=64,this.$set(this.docks,n.id,n),t.inputs.push(n)},handleDockClick:function(t){var n=this.first;if(null!=n){if(n.id===t.id)return void(this.first=null);if(n.end===t.end)return void(this.first=t);var e=this.newLink();"output"===n.end?(e.input=n,e.output=t):(e.output=n,e.input=t),this.$set(this.links,e.id,e),"output"===n.end?(this.$set(n.links,e.id,e),this.$set(t.links,e.id,e)):(this.$set(t.links,e.id,e),this.$set(n.links,e.id,e)),this.first=null}else this.first=t}},mounted:function(){this.addItem()}},E=L,Q=(e("33f6"),Object(l["a"])(E,r,i,!1,null,"6da44334",null));n["default"]=Q.exports},a2f3:function(t,n,e){},a630:function(t,n,e){var r=e("23e7"),i=e("4df4"),o=e("1c7e"),c=!o((function(t){Array.from(t)}));r({target:"Array",stat:!0,forced:c},{from:i})},ab13:function(t,n,e){var r=e("b622"),i=r("match");t.exports=function(t){var n=/./;try{"/./"[t](n)}catch(e){try{return n[i]=!1,"/./"[t](n)}catch(r){}}return!1}},ad6d:function(t,n,e){"use strict";var r=e("825a");t.exports=function(){var t=r(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.dotAll&&(n+="s"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},af03:function(t,n,e){var r=e("d039");t.exports=function(t){return r((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},b0c0:function(t,n,e){var r=e("83ab"),i=e("9bf2").f,o=Function.prototype,c=o.toString,a=/^\s*function ([^ (]*)/,u="name";r&&!(u in o)&&i(o,u,{configurable:!0,get:function(){try{return c.call(this).match(a)[1]}catch(t){return""}}})},b85c:function(t,n,e){"use strict";e.d(n,"a",(function(){return i}));e("a4d3"),e("e01a"),e("d28b"),e("d3b7"),e("3ca3"),e("ddb0");var r=e("06c5");function i(t,n){var e;if("undefined"===typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(e=Object(r["a"])(t))||n&&t&&"number"===typeof t.length){e&&(t=e);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,u=!1;return{s:function(){e=t[Symbol.iterator]()},n:function(){var t=e.next();return a=t.done,t},e:function(t){u=!0,c=t},f:function(){try{a||null==e["return"]||e["return"]()}finally{if(u)throw c}}}}},c975:function(t,n,e){"use strict";var r=e("23e7"),i=e("4d64").indexOf,o=e("a640"),c=e("ae40"),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,s=o("indexOf"),d=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!s||!d},{indexOf:function(t){return u?a.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},caad:function(t,n,e){"use strict";var r=e("23e7"),i=e("4d64").includes,o=e("44d2"),c=e("ae40"),a=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),o("includes")},d28b:function(t,n,e){var r=e("746f");r("iterator")},d58f:function(t,n,e){var r=e("1c0b"),i=e("7b0b"),o=e("44ad"),c=e("50c4"),a=function(t){return function(n,e,a,u){r(e);var s=i(n),d=o(s),l=c(s.length),f=t?l-1:0,p=t?-1:1;if(a<2)while(1){if(f in d){u=d[f],f+=p;break}if(f+=p,t?f<0:l<=f)throw TypeError("Reduce of empty array with no initial value")}for(;t?f>=0:l>f;f+=p)f in d&&(u=e(u,d[f],f,s));return u}};t.exports={left:a(!1),right:a(!0)}},d81d:function(t,n,e){"use strict";var r=e("23e7"),i=e("b727").map,o=e("1dde"),c=e("ae40"),a=o("map"),u=c("map");r({target:"Array",proto:!0,forced:!a||!u},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},ddb0:function(t,n,e){var r=e("da84"),i=e("fdbc"),o=e("e260"),c=e("9112"),a=e("b622"),u=a("iterator"),s=a("toStringTag"),d=o.values;for(var l in i){var f=r[l],p=f&&f.prototype;if(p){if(p[u]!==d)try{c(p,u,d)}catch(h){p[u]=d}if(p[s]||c(p,s,l),i[l])for(var v in o)if(p[v]!==o[v])try{c(p,v,o[v])}catch(h){p[v]=o[v]}}}},e01a:function(t,n,e){"use strict";var r=e("23e7"),i=e("83ab"),o=e("da84"),c=e("5135"),a=e("861d"),u=e("9bf2").f,s=e("e893"),d=o.Symbol;if(i&&"function"==typeof d&&(!("description"in d.prototype)||void 0!==d().description)){var l={},f=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),n=this instanceof f?new d(t):void 0===t?d():d(t);return""===t&&(l[n]=!0),n};s(f,d);var p=f.prototype=d.prototype;p.constructor=f;var v=p.toString,h="Symbol(test)"==String(d("test")),b=/^Symbol\((.*)\)[^)]+$/;u(p,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,n=v.call(t);if(c(l,t))return"";var e=h?n.slice(7,-1):n.replace(b,"$1");return""===e?void 0:e}}),r({global:!0,forced:!0},{Symbol:f})}},fb6a:function(t,n,e){"use strict";var r=e("23e7"),i=e("861d"),o=e("e8b5"),c=e("23cb"),a=e("50c4"),u=e("fc6a"),s=e("8418"),d=e("b622"),l=e("1dde"),f=e("ae40"),p=l("slice"),v=f("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),b=[].slice,g=Math.max;r({target:"Array",proto:!0,forced:!p||!v},{slice:function(t,n){var e,r,d,l=u(this),f=a(l.length),p=c(t,f),v=c(void 0===n?f:n,f);if(o(l)&&(e=l.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?i(e)&&(e=e[h],null===e&&(e=void 0)):e=void 0,e===Array||void 0===e))return b.call(l,p,v);for(r=new(void 0===e?Array:e)(g(v-p,0)),d=0;p<v;p++,d++)p in l&&s(r,d,l[p]);return r.length=d,r}})}}]);
//# sourceMappingURL=uml2.f195af6d.js.map