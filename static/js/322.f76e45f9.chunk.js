"use strict";(self.webpackChunkplataform=self.webpackChunkplataform||[]).push([[322],{322:function(e,t,i){i.r(t),i.d(t,{bds_sidebar:function(){return s}});var o=i(6510),n=function(e,t,i,o){function n(e){return e instanceof i?e:new i((function(t){t(e)}))}return new(i||(i=Promise))((function(i,r){function s(e){try{d(o.next(e))}catch(t){r(t)}}function a(e){try{d(o.throw(e))}catch(t){r(t)}}function d(e){e.done?i(e.value):n(e.value).then(s,a)}d((o=o.apply(e,t||[])).next())}))},r=function(e,t){var i,o,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(e){return function(t){return d([e,t])}}function d(a){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,a[0]&&(s=0)),s;)try{if(i=1,o&&(n=2&a[0]?o.return:a[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,a[1])).done)return n;switch(o=0,n&&(a=[2&a[0],n.value]),a[0]){case 0:case 1:n=a;break;case 4:return s.label++,{value:a[1],done:!1};case 5:s.label++,o=a[1],a=[0];continue;case 7:a=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===a[0]||2===a[0])){s=0;continue}if(3===a[0]&&(!n||a[1]>n[0]&&a[1]<n[3])){s.label=a[1];break}if(6===a[0]&&s.label<n[1]){s.label=n[1],n=a;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(a);break}n[2]&&s.ops.pop(),s.trys.pop();continue}a=t.call(e,s)}catch(d){a=[6,d],o=0}finally{i=n=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}},s=function(){function e(e){var t=this;(0,o.r)(this,e),this.bdsToggle=(0,o.c)(this,"bdsToggle",7),this.listiner=function(e){"Escape"==e.key&&(t.isOpen=!1)},this.onClickCloseButtom=function(){t.isOpen=!1},this.InnerSpacing=0,this.isOpen=!1,this.sidebarPosition="left",this.type="over",this.margin=!0,this.width=360,this.dtOutzone=null,this.dtButtonClose=null,this.background="surface-2"}return e.prototype.toggle=function(){return n(this,void 0,void 0,(function(){return r(this,(function(e){return this.isOpen=!this.isOpen,[2]}))}))},e.prototype.isOpenChanged=function(e){this.bdsToggle.emit({value:e}),!0===e?document.addEventListener("keyup",this.listiner,!1):document.removeEventListener("keyup",this.listiner,!1)},e.prototype.componentWillLoad=function(){"fixed"===this.type&&(this.isOpen=!0),this.hasFooterSlot=!!this.hostElement.querySelector('[slot="footer"]'),this.hasHeaderSlot=!!this.hostElement.querySelector('[slot="header"]')},e.prototype.render=function(){var e,t,i=this;return(0,o.h)("div",{class:(e={sidebar_dialog:!0,is_open:this.isOpen},e["type_".concat(this.type)]=!0,e)},"over"===this.type?(0,o.h)("div",{class:{outzone:!0},onClick:function(){return i.onClickCloseButtom()},"data-test":this.dtOutzone}):"",(0,o.h)("div",{class:(t={sidebar:!0,is_open:this.isOpen},t["type_".concat(this.type)]=!0,t["position_".concat(this.sidebarPosition)]=!0,t["background_".concat(this.background)]=!0,t),style:{width:"".concat(this.width<144?144:this.width,"px")}},this.hasHeaderSlot&&(0,o.h)("div",{class:{header:!0}},(0,o.h)("div",{class:{content:!0}},(0,o.h)("slot",{name:"header"})),"fixed"===this.type?"":(0,o.h)("bds-button-icon",{class:{closeButton:!0},icon:"close",size:"short",variant:"secondary",onClick:function(){return i.onClickCloseButtom()},dataTest:this.dtButtonClose})),(0,o.h)("div",{class:{body:!0}},(0,o.h)("div",{class:{content:!0,element_scrolled:!0,margin:this.margin}},(0,o.h)("slot",{name:"body"}))),this.hasFooterSlot&&(0,o.h)("div",{class:{footer:!0}},(0,o.h)("div",{class:{content:!0}},(0,o.h)("slot",{name:"footer"})))))},Object.defineProperty(e.prototype,"hostElement",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["isOpenChanged"]}},enumerable:!1,configurable:!0}),e}();s.style=".sidebar_dialog{width:100%;height:100vh;-webkit-box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);box-shadow:0px 4px 10px rgba(51, 51, 51, 0.3);background-color:rgba(0, 0, 0, 0.7);opacity:0;visibility:hidden;-webkit-transition:opacity 0.3s ease-in-out;transition:opacity 0.3s ease-in-out;display:none}.sidebar_dialog.type_over{position:fixed;top:0;left:0;z-index:80000}.sidebar_dialog.type_over .sidebar{z-index:90000}.sidebar_dialog.type_fixed{width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;position:relative;height:100%;-webkit-box-shadow:none;box-shadow:none}.sidebar_dialog.is_open{display:-ms-flexbox;display:flex;opacity:1;visibility:visible}.sidebar_dialog .outzone{-ms-flex-order:2;order:2;width:100%;height:100vh}.sidebar_dialog .sidebar{width:360px;-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;background-color:var(--color-surface-2, #E0E0E0);-ms-flex-negative:0;flex-shrink:0}.sidebar_dialog .sidebar.position_left{-ms-flex-order:1;order:1}.sidebar_dialog .sidebar.position_right{-ms-flex-order:3;order:3}.sidebar_dialog .sidebar.background_surface-1{background-color:var(--color-surface-1, #F6F6F6)}.sidebar_dialog .sidebar.background_surface-2{background-color:var(--color-surface-2, #E0E0E0)}.sidebar_dialog .sidebar.background_surface-3{background-color:var(--color-surface-3, #CFCFCF)}.sidebar_dialog .sidebar.background_surface-4{background-color:var(--color-surface-4, #141414)}.sidebar_dialog .sidebar.type_fixed{width:288px}.sidebar_dialog .sidebar .header{display:-ms-flexbox;display:flex;-ms-flex-line-pack:center;align-content:center;-ms-flex-pack:justify;justify-content:space-between;padding:24px}.sidebar_dialog .sidebar .header .content{display:-ms-flexbox;display:flex;width:100%;-ms-flex-align:center;align-items:center;position:relative;color:var(--color-content-default, #454545)}.sidebar_dialog .sidebar .header .content ::slotted(*){width:100%}.sidebar_dialog .sidebar .header .closeButton{border-radius:8px;contain:inherit;-webkit-transition:height 0.5s, all 0.3s;-moz-transition:height 0.5s, all 0.3s;transition:height 0.5s, all 0.3s;z-index:1;cursor:pointer;color:var(--color-content-default, #454545)}.sidebar_dialog .sidebar .body{position:relative;-ms-flex:1 1 auto;flex:1 1 auto}.sidebar_dialog .sidebar .body .content{position:absolute;inset:0;z-index:999999;overflow-y:overlay;overflow-x:clip}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar{width:16px;background-color:transparent}.sidebar_dialog .sidebar .body .content::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.sidebar_dialog .sidebar .body .margin{padding:8px 24px}.sidebar_dialog .sidebar .footer .content{padding:24px}.sidebar_dialog .sidebar .footer .content ::slotted(*){height:40px;overflow:hidden}.sidebar_dialog .sidebar.is_open.position_left{right:calc(100% - 360px)}.sidebar_dialog .sidebar.is_open.position_right{left:calc(100% - 360px)}"}}]);
//# sourceMappingURL=322.f76e45f9.chunk.js.map