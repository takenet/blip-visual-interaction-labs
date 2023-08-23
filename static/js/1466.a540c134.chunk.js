"use strict";(self.webpackChunkplataform=self.webpackChunkplataform||[]).push([[1466,3361],{1466:function(t,e,i){i.r(e),i.d(e,{bds_autocomplete:function(){return l}});var o=i(6510),n=i(3361),r=function(t,e,i,o){function n(t){return t instanceof i?t:new i((function(e){e(t)}))}return new(i||(i=Promise))((function(i,r){function s(t){try{a(o.next(t))}catch(e){r(e)}}function l(t){try{a(o.throw(t))}catch(e){r(e)}}function a(t){t.done?i(t.value):n(t.value).then(s,l)}a((o=o.apply(t,e||[])).next())}))},s=function(t,e){var i,o,n,r,s={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return r={next:l(0),throw:l(1),return:l(2)},"function"===typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function l(t){return function(e){return a([t,e])}}function a(l){if(i)throw new TypeError("Generator is already executing.");for(;r&&(r=0,l[0]&&(s=0)),s;)try{if(i=1,o&&(n=2&l[0]?o.return:l[0]?o.throw||((n=o.return)&&n.call(o),0):o.next)&&!(n=n.call(o,l[1])).done)return n;switch(o=0,n&&(l=[2&l[0],n.value]),l[0]){case 0:case 1:n=l;break;case 4:return s.label++,{value:l[1],done:!1};case 5:s.label++,o=l[1],l=[0];continue;case 7:l=s.ops.pop(),s.trys.pop();continue;default:if(!(n=(n=s.trys).length>0&&n[n.length-1])&&(6===l[0]||2===l[0])){s=0;continue}if(3===l[0]&&(!n||l[1]>n[0]&&l[1]<n[3])){s.label=l[1];break}if(6===l[0]&&s.label<n[1]){s.label=n[1],n=l;break}if(n&&s.label<n[2]){s.label=n[2],s.ops.push(l);break}n[2]&&s.ops.pop(),s.trys.pop();continue}l=e.call(t,s)}catch(a){l=[6,a],o=0}finally{i=n=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}},l=function(){function t(t){var e=this;(0,o.r)(this,t),this.bdsChange=(0,o.c)(this,"bdsChange",7),this.bdsSelectedChange=(0,o.c)(this,"bdsSelectedChange",7),this.bdsInput=(0,o.c)(this,"bdsInput",7),this.bdsCancel=(0,o.c)(this,"bdsCancel",7),this.bdsFocus=(0,o.c)(this,"bdsFocus",7),this.bdsBlur=(0,o.c)(this,"bdsBlur",7),this.refDropdown=function(t){e.dropElement=t},this.refIconDrop=function(t){e.iconDropElement=t},this.onFocus=function(){e.isFocused=!0,e.isPressed=!0,e.bdsFocus.emit()},this.onFocusout=function(){e.isOpen||(e.nativeInput.value=e.getText())},this.onBlur=function(){e.bdsBlur.emit(),e.isPressed=!1,e.isOpen||(e.isFocused=!1,e.nativeInput.value=e.getText(),e.cleanInputSelection())},this.onClickWrapper=function(){e.onFocus(),e.toggle(),e.nativeInput&&e.nativeInput.focus()},this.toggle=function(){e.disabled||(e.isOpen=!e.isOpen)},this.getTextFromOption=function(t){var i,o;if((null===t||void 0===t?void 0:t.status)||(null===t||void 0===t?void 0:t.bulkOption)){if(e.internalOptions){var n=e.internalOptions.find((function(e){return e.value==t.value}));if(n)return n.label}return t.querySelector("#bds-typo-label-".concat(e.value)).textContent}return(null===t||void 0===t?void 0:t.titleText)?t.titleText:null!==(o=null===(i=null===t||void 0===t?void 0:t.textContent)||void 0===i?void 0:i.trim())&&void 0!==o?o:""},this.getText=function(){var t=e.childOptions.find((function(t){return t.value==e.value}));return e.getTextFromOption(t)},this.handler=function(t){var i=t.detail.value;e.value=i,e.toggle()},this.keyPressWrapper=function(t){var i,o;switch(e.isOpen=!0,t.key){case"Enter":e.toggle();break;case"Tab":var n=e.findFocusedElementIndex();e.sliceInvisible(n+1)[0]||e.toggle();break;case"ArrowDown":var r=e.findFocusedElementIndex(),s=e.sliceInvisible(r+1)[0];null===(i=null===s||void 0===s?void 0:s.firstElementChild)||void 0===i||i.focus();break;case"ArrowUp":var l=e.findFocusedElementIndex(),a=e.childOptions.find((function(t){return!t.hasAttribute("invisible")}));if(e.childOptions[l]!=a){l=l>0?l:e.childOptions.length;var c=e.sliceInvisible(0,l),p=c[c.length-1];null===(o=null===p||void 0===p?void 0:p.firstElementChild)||void 0===o||o.focus()}}},this.cleanInputSelection=function(){return r(e,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return this.disabled?[3,2]:(this.value="",this.nativeInput.value="",this.isOpen=!1,[4,this.resetFilterOptions()]);case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},this.changedInputValue=function(t){return r(e,void 0,void 0,(function(){var e;return s(this,(function(i){switch(i.label){case 0:return(e=t.target)&&(this.value=e.value||""),this.bdsInput.emit(t),this.bdsChange.emit({value:this.nativeInput.value}),this.nativeInput.value?[4,this.filterOptions(this.nativeInput.value)]:[3,2];case 1:return i.sent(),[3,5];case 2:return this.value="",this.isOpen?[4,this.resetFilterOptions()]:[3,4];case 3:return i.sent(),[3,5];case 4:this.setTimeoutFilter(),i.label=5;case 5:return!1===this.isOpen&&(this.value=this.getSelectedValue(),this.setTimeoutFilter()),[2]}}))}))},this.intoView=null,this.isPressed=!1,this.isOpen=!1,this.text="",this.internalOptions=void 0,this.isFocused=!1,this.options=void 0,this.value=void 0,this.selected=void 0,this.danger=!1,this.disabled=!1,this.searchOnlyTitle=!0,this.label="",this.icon="",this.placeholder="",this.optionsPosition="auto",this.clearIconOnFocus=!1,this.dataTest=null}return t.prototype.isOpenChanged=function(t){"bottom"==this.positionHeightDrop?this.iconDropElement.name=this.isOpen?"arrow-up":"arrow-down":this.iconDropElement.name=this.isOpen?"arrow-down":"arrow-up",t&&("auto"!=this.optionsPosition?this.setDefaultPlacement(this.optionsPosition):this.validatePositionDrop())},t.prototype.itemSelectedChanged=function(){this.bdsSelectedChange.emit(this.selected)},t.prototype.valueChanged=function(){this.bdsChange.emit({value:null==this.value?this.value:this.value.toString()});for(var t=0,e=this.childOptions;t<e.length;t++){var i=e[t];i.selected=this.value===i.value}this.selected=this.childOptionSelected,this.text=this.getText()},t.prototype.handleWindow=function(t){this.el.contains(t.target)||(this.isOpen=!1)},t.prototype.parseOptions=function(){if(this.options){this.resetFilterOptions();try{this.internalOptions="string"===typeof this.options?JSON.parse(this.options):this.options}catch(t){this.internalOptions=[]}}},t.prototype.componentWillLoad=function(){this.intoView=(0,n.g)(this.el),this.options&&this.parseOptions()},t.prototype.componentDidLoad=function(){if(!this.options)for(var t=0,e=this.childOptions;t<e.length;t++){var i=e[t];i.selected=this.value===i.value,i.addEventListener("optionSelected",this.handler)}this.text=this.getText(),"auto"!=this.optionsPosition?this.setDefaultPlacement(this.optionsPosition):this.validatePositionDrop()},t.prototype.setDefaultPlacement=function(t){"bottom"==t?(this.dropElement.classList.add("select__options--position-bottom"),this.iconDropElement.name="arrow-down"):(this.dropElement.classList.add("select__options--position-top"),this.iconDropElement.name="arrow-up")},t.prototype.validatePositionDrop=function(){var t=(0,n.p)({actionElement:this.el,changedElement:this.dropElement,intoView:this.intoView});this.positionHeightDrop=t.y,"bottom"==t.y?(this.dropElement.classList.add("select__options--position-bottom"),this.iconDropElement.name="arrow-down"):(this.dropElement.classList.add("select__options--position-top"),this.iconDropElement.name="arrow-up")},Object.defineProperty(t.prototype,"childOptions",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")):Array.from(this.el.querySelectorAll("bds-select-option"))},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childOptionSelected",{get:function(){return this.options?Array.from(this.el.shadowRoot.querySelectorAll("bds-select-option")).find((function(t){return t.selected})):Array.from(this.el.querySelectorAll("bds-select-option")).find((function(t){return t.selected}))},enumerable:!1,configurable:!0}),t.prototype.sliceInvisible=function(t,e){return void 0===e&&(e=this.childOptions.length),this.childOptions.slice(t,e).filter((function(t){return!t.hasAttribute("invisible")}))},t.prototype.findFocusedElementIndex=function(){return this.childOptions.findIndex((function(t){return t.firstElementChild.matches(":focus")}))},t.prototype.setTimeoutFilter=function(){var t=this;setTimeout((function(){t.resetFilterOptions()}),500)},t.prototype.filterOptions=function(t){return r(this,void 0,void 0,(function(){var e,i,o,n,r;return s(this,(function(s){switch(s.label){case 0:return t?[3,2]:[4,this.resetFilterOptions()];case 1:s.sent(),s.label=2;case 2:for(e=0,i=this.childOptions;e<i.length;e++)o=i[e],n=this.searchOnlyTitle?this.getTextFromOption(o).toLowerCase():o.textContent.toLowerCase(),r=t.toLowerCase(),n.includes(r)?o.removeAttribute("invisible"):o.setAttribute("invisible","invisible");return[2]}}))}))},t.prototype.resetFilterOptions=function(){return r(this,void 0,void 0,(function(){var t,e,i;return s(this,(function(o){for(t=this.childOptions,e=0,i=t;e<i.length;e++)i[e].removeAttribute("invisible");return[2]}))}))},t.prototype.getSelectedValue=function(){var t;return null===(t=this.childOptionSelected)||void 0===t?void 0:t.value},t.prototype.renderIcon=function(){return this.icon&&(0,o.h)("div",{class:{input__icon:!0,"input__icon--large":!!this.label}},(0,o.h)("bds-icon",{size:this.label?"medium":"small",name:this.icon,color:"inherit"}))},t.prototype.renderLabel=function(){return this.label&&(0,o.h)("label",{class:{input__container__label:!0,"input__container__label--pressed":this.isPressed&&!this.disabled}},(0,o.h)("bds-typo",{variant:"fs-12",bold:"bold"},this.label))},t.prototype.render=function(){var t=this;return(0,o.h)(o.H,{"aria-disabled":this.disabled?"true":null},(0,o.h)("div",{class:{input:!0,select:!0,"input--state-primary":!this.danger,"input--state-danger":this.danger,"input--state-disabled":this.disabled,"input--label":!!this.label,"input--pressed":this.isPressed},onClick:this.onClickWrapper,onKeyDown:this.keyPressWrapper},this.renderIcon(),(0,o.h)("div",{class:"input__container",tabindex:"0",onFocusout:this.onFocusout,onKeyDown:this.keyPressWrapper},this.renderLabel(),(0,o.h)("input",{class:{input__container__text:!0},ref:function(e){return t.nativeInput=e},disabled:this.disabled,onBlur:this.onBlur,onFocus:this.onFocus,onInput:this.changedInputValue,placeholder:this.placeholder,type:"text",value:this.text,"data-test":this.dataTest})),(0,o.h)("div",{class:"select__icon"},(0,o.h)("bds-icon",{size:"small",name:"error",theme:"solid",onClick:this.cleanInputSelection,class:{"icon-hidden":this.clearIconOnFocus&&(!this.isFocused||!this.isOpen)||!this.value}}),(0,o.h)("bds-icon",{ref:function(e){return t.refIconDrop(e)},size:"small",color:"inherit"}))),(0,o.h)("div",{ref:function(e){return t.refDropdown(e)},class:{select__options:!0,"select__options--open":this.isOpen}},this.internalOptions?this.internalOptions.map((function(e,i){return(0,o.h)("bds-select-option",{onOptionSelected:t.handler,selected:t.value===e.value,value:e.value,key:i,bulkOption:e.bulkOption,status:e.status},e.label)})):(0,o.h)("slot",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,o.g)(this)},enumerable:!1,configurable:!0}),Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["isOpenChanged"],selected:["itemSelectedChanged"],value:["valueChanged"],options:["parseOptions"]}},enumerable:!1,configurable:!0}),t}();l.style=':host{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;position:relative;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%}:host input,:host textarea{-webkit-box-shadow:inherit;box-shadow:inherit}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8C8C8C);opacity:1}:host input::-moz-placeholder,:host textarea::-moz-placeholder{color:var(--color-content-ghost, #8C8C8C);opacity:1}:host input:-ms-input-placeholder,:host textarea:-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C);opacity:1}:host input::-ms-input-placeholder,:host textarea::-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C);opacity:1}:host input::placeholder,:host textarea::placeholder{color:var(--color-content-ghost, #8C8C8C);opacity:1}:host input::-webkit-input-placeholder,:host textarea::-webkit-input-placeholder{color:var(--color-content-ghost, #8C8C8C);opacity:1}.input{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-align:center;align-items:center;padding:8px 4px 9px 12px;-ms-flex:1;flex:1;width:100%;max-width:100%;max-height:100%;background:var(--color-surface-1, #F6F6F6)}.input--state-primary{border:1px solid var(--color-border-1, #B1B1B1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary .input__icon{position:relative}.input--state-primary .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, #1e6bf1);z-index:0;opacity:50%;border-radius:8px}.input--state-primary:hover{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-primary.input--pressed{border:1px solid var(--color-primary, #1e6bf1);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-info, #80e3eb);box-shadow:0 0 0 2px var(--color-info, #80e3eb)}.input--state-primary .input__container__label{color:var(--color-content-default, #454545)}.input--state-primary .input__container__label--pressed{color:var(--color-primary, #1e6bf1)}.input--state-primary .input__container__text{caret-color:var(--color-primary, #1e6bf1);color:var(--color-content-default, #454545)}.input--state-primary .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, #8C8C8C)}.input--state-primary .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input--state-primary .input__container__text:placeholder-shown{color:var(--color-content-ghost, #8C8C8C)}.input--state-danger{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger .input__icon{position:relative}.input--state-danger .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-delete, #e60f0f);z-index:0;opacity:50%;border-radius:8px}.input--state-danger:hover{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px}.input--state-danger.input--pressed{border:1px solid var(--color-delete, #e60f0f);-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:8px;-webkit-box-shadow:0 0 0 2px var(--color-error, #f99f9f);box-shadow:0 0 0 2px var(--color-error, #f99f9f)}.input--state-danger .input__container__label{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__label--pressed{color:var(--color-delete, #e60f0f)}.input--state-danger .input__container__text{caret-color:var(--color-delete, #e60f0f);color:var(--color-content-default, #454545)}.input--state-danger .input__container__text:-moz-placeholder-shown{color:var(--color-content-ghost, #8C8C8C)}.input--state-danger .input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input--state-danger .input__container__text:placeholder-shown{color:var(--color-content-ghost, #8C8C8C)}.input--state-disabled{opacity:50%;pointer-events:none;cursor:not-allowed;background:var(--color-surface-2, #E0E0E0)}.input--state-disabled .input__icon{position:relative}.input--state-disabled .input__icon::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background-color:var(--color-primary, #1e6bf1);z-index:0;opacity:50%;border-radius:8px}.input--label{padding:7px 4px 8px 12px}.input__icon{cursor:inherit;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border-radius:8px;margin-right:8px;padding:2.5px}.input__icon--large{padding:4px}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.input__container__wrapper__chips{display:inline;max-height:100px;overflow:auto}.input__container__wrapper__chips::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__wrapper__chips::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text::-webkit-scrollbar{width:16px;background-color:transparent}.input__container__text::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.input__container__text::-webkit-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text::-moz-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text::-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text::placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__message{display:-ms-flexbox;display:flex;-ms-flex-align:baseline;align-items:baseline;height:20px;margin:3.7px 2.5px;-webkit-transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);transition:0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--color-content-disable, #636363);word-break:break-word;height:auto;min-height:20px}.input__message bds-typo{margin-top:0px;-ms-flex-item-align:self-start;align-self:self-start}.input__message__icon{display:-ms-flexbox;display:flex;padding-right:4px;margin-top:0px;padding-top:2px}.input__message--danger{color:var(--color-delete, #e60f0f)}.input__container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;width:100%}.input__container__label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}.input__container__text::-webkit-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text::-moz-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text:-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text::-ms-input-placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__text::placeholder{color:var(--color-content-ghost, #8C8C8C)}.input__container__wrapper{display:-ms-flexbox;display:flex;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.input__container__text{display:inline-block;margin:0;border:0;padding:0;width:auto;vertical-align:middle;white-space:normal;line-height:inherit;background:none;color:inherit;font-size:inherit;font-family:inherit;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;font-family:"Nunito Sans", "Carbona", "Tahoma", "Helvetica", "Arial", sans-serif;font-size:0.875rem;line-height:150%;width:100%;resize:none;cursor:inherit}.input__container__text:focus{outline:0}.input__container__text::-webkit-file-upload-button{padding:0;border:0;background:none}.input__container__text:focus{outline:0}.input__container__text[type=checkbox],.input__container__text[type=radio]{width:13px;height:13px}.input__container__text[type=search]{-webkit-appearance:textfield;-webkit-box-sizing:content-box}::-webkit-search-decoration{display:none}.input__container__text[type=reset],.input__container__text[type=button],.input__container__text[type=submit]{overflow:visible}.input__container__text__chips{width:auto;min-width:216px;max-width:216px}:host{display:block}.select{position:relative;outline:none;overflow:hidden}.select__icon{color:var(--color-content-ghost, #8C8C8C);display:-ms-flexbox;display:flex}.select__icon bds-icon{margin-left:10px}.select .icon-hidden{visibility:hidden}.select__options{background:var(--color-surface-2, #E0E0E0);width:100%;max-height:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;position:absolute;left:0;border-radius:8px;-webkit-box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);box-shadow:0px 2px 8px rgba(96, 123, 153, 0.3);overflow-y:auto;z-index:2;pointer-events:none;opacity:0;-webkit-box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4);box-shadow:0px 2px 12px 0 2px 8px rgba(96, 123, 153, 0.4)}.select__options::-webkit-scrollbar{width:16px;background-color:transparent}.select__options::-webkit-scrollbar-thumb{border-radius:10px;border:4px solid transparent;border-radius:10px;background-clip:content-box;background-color:#b9cbd3}.select__options--open{opacity:1;pointer-events:auto}.select__options--position-top{bottom:calc(100% + 4px)}.select__options--position-bottom{top:calc(100% + 4px)}'},3361:function(t,e,i){i.r(e),i.d(e,{a:function(){return n},g:function(){return o},p:function(){return r}});var o=function t(e){return null===e?null:e.classList.contains("element_scrolled")||"BODY"==(null===e||void 0===e?void 0:e.tagName)?e:t(e.offsetParent)};function n(t){var e=t.actionElement,i=t.changedElement,o=t.intoView,n=o.offsetParent,r=!!o.classList.contains("element_scrolled"),s=r?e.offsetTop-o.scrollTop+n.offsetTop:e.offsetTop-window.scrollY,l=r?e.offsetLeft+n.offsetLeft:e.offsetLeft,a=(null===i||void 0===i?void 0:i.offsetHeight)>window.innerHeight-s?s-(null===i||void 0===i?void 0:i.offsetHeight)-16:s+(null===e||void 0===e?void 0:e.offsetHeight)+16,c=(null===i||void 0===i?void 0:i.offsetWidth)>window.innerWidth-l?l+(null===e||void 0===e?void 0:e.offsetWidth)-(null===i||void 0===i?void 0:i.offsetWidth):l,p=window.innerHeight-(null===i||void 0===i?void 0:i.offsetHeight),d=window.innerWidth-(null===i||void 0===i?void 0:i.offsetWidth);return{top:a<8?8:a>p?p-8:a,left:c<0?0:c>d?d:c}}function r(t){var e=t.actionElement,i=t.changedElement,o=t.intoView,n=o||document.body,r=n.offsetHeight<i.offsetHeight?window.screen.height:n.offsetHeight,s=n.offsetWidth<i.offsetWidth?window.screen.width:n.offsetWidth,l=r-e.offsetTop,a=s-e.offsetLeft;return{y:l<i.offsetHeight+e.offsetHeight?"top":"bottom",x:a<i.offsetWidth?"right":"left"}}}}]);
//# sourceMappingURL=1466.a540c134.chunk.js.map