"use strict";(self.webpackChunkplataform=self.webpackChunkplataform||[]).push([[3626],{3626:function(e,i,t){t.r(i),t.d(i,{bds_badge:function(){return s}});var o=t(6510),s=function(){function e(e){(0,o.r)(this,e),this.type="status",this.color="system",this.shape="circle",this.icon=null,this.number=void 0,this.animation=!1}return e.prototype.componentWillLoad=function(){null===this.icon&&this.number?this.type="number":!this.number&&this.icon?this.type="icon":this.number&&this.icon?this.type="number":null===this.number&&(this.type="empty")},e.prototype.render=function(){var e,i,t,s,n,a;return(0,o.h)(o.H,null,(0,o.h)("div",{class:(e={chip_badge:!0,chip_size:null!==this.number},e["chip_badge--".concat(this.shape)]=!0,e["chip_badge--".concat(this.color)]=!0,e)},"status"===this.type&&(0,o.h)("div",{class:(i={status:!0},i["status--".concat(this.shape)]=!0,i["color--".concat(this.color)]=!0,i["status--circle-".concat(this.animation)]=!0,i)}),"icon"===this.type&&(0,o.h)("div",{class:(t={icon:!0},t["icon--".concat(this.shape)]=!0,t)},(0,o.h)("div",{class:(s={},s["color--".concat(this.color)]=!0,s.trim=!0,s["trim-".concat(this.animation)]=!0,s)}),(0,o.h)("bds-icon",{size:"xxx-small",name:this.icon})),"number"===this.type&&(0,o.h)("div",{class:(n={number:!0},n["color--".concat(this.color)]=!0,n["number--".concat(this.animation)]=!0,n)},(0,o.h)("bds-typo",{class:"number_text",variant:"fs-12",bold:"bold",margin:!1},this.number>=999?"999+":this.number)),"empty"===this.type&&(0,o.h)("div",{class:(a={empty:!0},a["color--".concat(this.color)]=!0,a["empty--".concat(this.shape)]=!0,a["empty--".concat(this.animation)]=!0,a)})))},e}();s.style='@-webkit-keyframes pulse{0%{scale:100%;opacity:1}20%{scale:140%;opacity:0}21%{scale:100%;opacity:1}40%{scale:140%;opacity:0}41%{scale:140%;opacity:0}100%{scale:140%;opacity:0}}@keyframes pulse{0%{scale:100%;opacity:1}20%{scale:140%;opacity:0}21%{scale:100%;opacity:1}40%{scale:140%;opacity:0}41%{scale:140%;opacity:0}100%{scale:140%;opacity:0}}.color--system{background-color:var(--color-system, #B2DFFD);color:var(--color-system, #B2DFFD)}.color--danger{background-color:var(--color-error, #f99f9f);color:var(--color-error, #f99f9f)}.color--warning{background-color:var(--color-warning, #fde99b);color:var(--color-warning, #fde99b)}.color--success{background-color:var(--color-success, #84ebbc);color:var(--color-success, #84ebbc)}.color--neutral{background-color:var(--color-surface-3, #CFCFCF);color:var(--color-surface-3, #CFCFCF)}:host{display:-ms-inline-flexbox;display:inline-flex}.chip_size{min-width:24px}.chip_badge .status{width:8px;height:8px}.chip_badge .status--circle{width:0;height:0;border:4px solid;border-radius:4px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .status--circle-true::before{content:"";width:8px;height:8px;position:absolute;border:1px solid;border-radius:8px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .status--triangle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:8px solid}.chip_badge .status--triangle-reverse{width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-top:8px solid}.chip_badge .status--polygon{width:0;height:0;border:4px solid;rotate:45deg}.chip_badge .status--square{width:0;height:0;border:4px solid}.chip_badge .icon{position:relative}.chip_badge .icon bds-icon{position:absolute}.chip_badge .icon .bds-icon{color:var(--color-content-default, #454545)}.chip_badge .icon--circle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .icon--circle .trim{width:24px;height:24px;border-radius:16px}.chip_badge .icon--circle .trim-true::before{content:"";width:24px;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .icon--triangle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:end}.chip_badge .icon--triangle .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0, 100% 100%, 0 100%);clip-path:polygon(50% 0, 100% 100%, 0 100%)}.chip_badge .icon--triangle-reverse{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:start}.chip_badge .icon--triangle-reverse .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 100%, 0 0, 100% 0);clip-path:polygon(50% 100%, 0 0, 100% 0)}.chip_badge .icon--polygon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .icon--polygon .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}.chip_badge .icon--square{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .icon--square .trim{width:24px;height:24px}.chip_badge .number{display:-ms-flexbox;display:flex;height:24px;padding:0 8px;border-radius:16px;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;position:relative}.chip_badge .number--true::before{content:"";width:100%;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .number .number_text{color:var(--color-content-default, #454545)}.chip_badge .empty{display:-ms-flexbox;display:flex;min-height:24px;min-width:24px;position:relative}.chip_badge .empty--true::before{content:"";width:100%;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .empty--circle{border-radius:50%;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .empty--circle .trim{width:24px;height:24px;border-radius:16px}.chip_badge .empty--circle .trim-true::before{content:"";width:24px;height:24px;left:-2px;top:-2px;position:absolute;border:2px solid;border-radius:16px;-webkit-animation:pulse 2s ease-out infinite;animation:pulse 2s ease-out infinite}.chip_badge .empty--triangle{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:end;align-items:end}.chip_badge .empty--triangle .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0, 100% 100%, 0 100%);clip-path:polygon(50% 0, 100% 100%, 0 100%)}.chip_badge .empty--triangle-reverse{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:start;align-items:start}.chip_badge .empty--triangle-reverse .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 100%, 0 0, 100% 0);clip-path:polygon(50% 100%, 0 0, 100% 0)}.chip_badge .empty--polygon{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .empty--polygon .trim{width:24px;height:24px;-webkit-clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);clip-path:polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)}.chip_badge .empty--square{display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.chip_badge .empty--square .trim{width:24px;height:24px}'}}]);
//# sourceMappingURL=3626.943fe64c.chunk.js.map