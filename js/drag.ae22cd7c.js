(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["drag"],{"004f":function(t,e,i){"use strict";i("bf84")},"03ea":function(t,e,i){"use strict";e["a"]={name:"RequestAnimationFrame",data:function(){return{_id:null,prev:null,current:Date.now(),diff:null}},methods:{tick:function(){this.prev=this.current,this.current=Date.now(),this.diff=Math.max(this.current-this.prev,8),this.$emit("tick",this.current,this.prev,this.diff),this._id=requestAnimationFrame(this.tick)}},created:function(){this.tick=this.tick.bind(this)},mounted:function(){requestAnimationFrame(this.tick)},beforeDestroy:function(){cancelAnimationFrame(this._id)},render:function(){return this.$scopedSlots.default?this.$scopedSlots.default({current:this.current})[0]:this.$createElement("link")}}},a39b:function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{padding:"1em"}},[i("label",[t._v(" x "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.x,expression:"x",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.x},on:{input:function(e){e.target.composing||(t.x=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",[t._v(" y "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.y,expression:"y",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.y},on:{input:function(e){e.target.composing||(t.y=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",[t._v(" vx "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.vx,expression:"vx",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.vx},on:{input:function(e){e.target.composing||(t.vx=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",[t._v(" vy "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.vy,expression:"vy",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.vy},on:{input:function(e){e.target.composing||(t.vy=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",[t._v(" a "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.a,expression:"a",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.a},on:{input:function(e){e.target.composing||(t.a=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",[t._v(" ga "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.ga,expression:"ga",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.ga},on:{input:function(e){e.target.composing||(t.ga=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",[t._v(" elasticFactor "),i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.elasticFactor,expression:"elasticFactor",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:t.elasticFactor},on:{input:function(e){e.target.composing||(t.elasticFactor=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("br"),i("label",{attrs:{for:"with-grid"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.grid,expression:"grid"}],attrs:{id:"with-grid",type:"checkbox"},domProps:{checked:Array.isArray(t.grid)?t._i(t.grid,null)>-1:t.grid},on:{change:function(e){var i=t.grid,r=e.target,n=!!r.checked;if(Array.isArray(i)){var a=null,s=t._i(i,a);r.checked?s<0&&(t.grid=i.concat([a])):s>-1&&(t.grid=i.slice(0,s).concat(i.slice(s+1)))}else t.grid=n}}}),t._v(" Grid Enabled ")]),i("br"),i("label",{attrs:{for:"Pause"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.pause,expression:"pause"}],attrs:{id:"Pause",type:"checkbox"},domProps:{checked:Array.isArray(t.pause)?t._i(t.pause,null)>-1:t.pause},on:{change:function(e){var i=t.pause,r=e.target,n=!!r.checked;if(Array.isArray(i)){var a=null,s=t._i(i,a);r.checked?s<0&&(t.pause=i.concat([a])):s>-1&&(t.pause=i.slice(0,s).concat(i.slice(s+1)))}else t.pause=n}}}),t._v(" Pause ")]),i("br"),i("drag",{staticClass:"drag-item",attrs:{left:t.x,top:t.y,options:t.options},on:{"update:left":[function(e){t.x=e},t.onXChange],"update:top":[function(e){t.y=e},t.onYChange],dragEnd:t.onDragEnd,dragStart:t.onDragStart}},[t._v("Drag me")]),i("RequestAnimationFrame",{on:{tick:t.onTick}})],1)},n=[],a=(i("4de4"),i("3ce3")),s=i("03ea"),o={components:{Drag:a["a"],RequestAnimationFrame:s["a"]},data:function(){return{lineX:[],lineY:[],a:-10,ga:1e3,vx:0,vy:0,x:0,y:0,elasticFactor:.9,grid:!1,pause:!1,user:!1}},computed:{options:function(){return this.grid?{grid:[20,20]}:{}}},methods:{onDragStart:function(){this.user=!0,this.vx=0,this.vy=0},onXChange:function(t){this.user&&this.lineX.push({time:Date.now(),value:t})},onYChange:function(t){this.user&&this.lineY.push({time:Date.now(),value:t})},onDragEnd:function(){if(!this.grid){var t=this.lineX.filter((function(t){return t.time>Date.now()-200}))[0],e=this.lineY.filter((function(t){return t.time>Date.now()-200}))[0];if(this.lineX=[],this.lineY=[],t&&e){var i=Date.now()-t.time,r=Date.now()-e.time;this.user=!1,this.vx=(this.x-t.value)/(i/1e3),this.vy=(this.y-e.value)/(r/1e3)}}},onTick:function(t,e,i){if(!this.pause&&!this.grid){var r=this.vx,n=this.vy,a=Math.pow(Math.pow(r,2)+Math.pow(n,2),.5);this.x=this.x+r*i/1e3,this.y=this.y+n*i/1e3,this.vx=0!==a?r*(Math.max(0,a+this.a*i/1e3)/a):0,this.vy=0!==a?n*(Math.max(0,a+this.a*i/1e3)/a)+this.ga*i/1e3:this.ga*i/1e3,this.x>200&&(this.x=400-this.x,this.vx=-this.vx*this.elasticFactor,0===this.elasticFactor&&(this.x=200)),this.x<-200&&(this.x=-400-this.x,this.vx=-this.vx*this.elasticFactor,0===this.elasticFactor&&(this.x=-200)),this.y>400&&(this.y=800-this.y,this.vy=-this.vy*this.elasticFactor,0===this.elasticFactor&&(this.y=400)),this.y<0&&(this.y=-this.y,this.vy=-this.vy*this.elasticFactor,0===this.elasticFactor&&(this.y=0))}}}},u=o,c=(i("004f"),i("2877")),l=Object(c["a"])(u,r,n,!1,null,"08b1dfe4",null);e["default"]=l.exports},bf84:function(t,e,i){}}]);
//# sourceMappingURL=drag.ae22cd7c.js.map