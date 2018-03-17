!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n(require("vue")):"function"==typeof define&&define.amd?define(["vue"],n):e.VuePromiseBtn=n(e.Vue)}(this,function(e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n={render:function(){var e=this.$createElement;return(this._self._c||e)("span",{staticClass:"spinner",style:this.style})},staticRenderFns:[],_scopeId:"data-v-39432f99",name:"Spinner",props:{color:{type:String,default:"#3498db"},size:{type:Number,default:18},width:{type:Number,default:4},duration:{type:String,default:"1s"}},computed:{style:function(){return{borderTopColor:this.color,width:this.size+"px",height:this.size+"px",borderWidth:this.width+"px",animationDuration:this.duration}}}},t=0,i=function(n){var i={listeners:{},init:function(r,s,o){var a,d=(a=s.value)===Object(a),p=r.$promiseBtnId=t++,u=d?s.value:{},l=Object.assign({},n,u),c=o.data.on&&o.data.on[l.action]&&o.data.on[l.action]._withTask,f=function(e){return"string"==typeof e}(l.loader),h=r,b=null,m=!1,v=!1,w=function(){m&&v&&(b.show=!1,m=!1,v=!1,function(e,n){e.getAttribute("disabled")&&n.disableBtn&&e.removeAttribute("disabled"),e.classList.remove(n.btnLoadingClass)}(h,l))},y=function(){S=!1,l.showSpinner&&(v=!0,w())};if(i.listeners[p]={el:r,eventType:l.action,handler:c},r.removeEventListener(l.action,c),!c)throw new Error("Please, provide proper handler/action for promise-btn");if("submit"===l.action&&!(h=r.querySelector('[type="submit"]')))throw new Error("No submit button found");if(l.showSpinner){var g=function(e,n,t,i){var r=document.createElement("SPAN");e.appendChild(r);var s={el:r,data:{show:!1},props:{parent:{type:Object,default:function(){return t.context}}}};return s=i?Object.assign({},s,{data:Object.assign({},s.data,{options:n}),template:n.stringHTMLRenderer(n)}):Object.assign({},s,{render:n.componentRenderer(n)})}(h,l,o,f);b=new e(g)}var S=!1;i.listener=function(e){if(!l.disableBtn||!S){var n,t=c(e);!(n=t)||"object"!=typeof n&&"function"!=typeof n||"function"!=typeof n.then||(S=!0,function(e,n){n.disableBtn&&e.setAttribute("disabled","disabled"),e.classList.add(n.btnLoadingClass)}(h,l),l.showSpinner&&(b.show=!0,setTimeout(function(){m=!0,w()},l.minTimeout)),t.then(y).catch(function(e){throw y(),e}))}}},bind:function(e,n,t){var r;(r=n.def).init.apply(r,arguments);var s=e.$promiseBtnId,o=i.listeners[s].eventType;e.addEventListener(o,i.listener)},unbind:function(e,n){var t=e.$promiseBtnId,r=i.listeners[t].eventType;e.removeEventListener(r,i.listener),delete i.listeners[t],delete e.$promiseBtnId}};return i},r={btnLoadingClass:"loading",showSpinner:!0,action:"click",disableBtn:!0,stringHTMLRenderer:function(e){return'\n  <span class="promise-btn__spinner-wrapper" \n        :class="{[options.spinnerHiddenClass]: !show || false}"\n        v-show="options.autoHideSpinnerWrapper ? show : true"\n  >\n    '+e.loader+"\n  </span>"},componentRenderer:function(e){return function(n){var t;return n("span",{class:(t={"promise-btn__spinner-wrapper":!0},t[e.spinnerHiddenClass]=!!e.spinnerHiddenClass&&!this.show,t),directives:[{name:"show",value:!e.autoHideSpinnerWrapper||this.show}]},[n(e.loader)])}},minTimeout:400,spinnerHiddenClass:"hidden",autoHideSpinnerWrapper:!1,loader:n};return{install:function(e,n){var t=Object.assign({},r,n);e.directive("promise-btn",i(t))},Spinner:n,setupVuePromiseBtn:i}});
