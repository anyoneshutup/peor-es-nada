import{n as s}from"./chunk-EGR33V5U.js";import"./chunk-SYQESB6R.js";import{c as n}from"./chunk-LEIMCQKJ.js";import"./chunk-MM5QLNJM.js";import"./chunk-72KDLSWN.js";import"./chunk-OBXDPQ3V.js";import"./chunk-ZSL264AR.js";import"./chunk-MCRJI3T3.js";import{c as b}from"./chunk-FW7I7OTW.js";import{b as l,f as i,g as d,i as m,k as h}from"./chunk-IQ447I2Z.js";import"./chunk-RW4GY4BD.js";var u=".sc-ion-select-modal-ionic-h{height:100%}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(container){display:none}ion-list.sc-ion-select-modal-ionic ion-radio.sc-ion-select-modal-ionic::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-ionic{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-ionic{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-ionic{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}",f=u,p=".sc-ion-select-modal-ios-h{height:100%}",k=p,g=".sc-ion-select-modal-md-h{height:100%}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(container){display:none}ion-list.sc-ion-select-modal-md ion-radio.sc-ion-select-modal-md::part(label){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}ion-item.sc-ion-select-modal-md{--inner-border-width:0}.item-radio-checked.sc-ion-select-modal-md{--background:rgba(var(--ion-color-primary-rgb, 0, 84, 233), 0.08);--background-focused:var(--ion-color-primary, #0054e9);--background-focused-opacity:0.2;--background-hover:var(--ion-color-primary, #0054e9);--background-hover-opacity:0.12}.item-checkbox-checked.sc-ion-select-modal-md{--background-activated:var(--ion-item-color, var(--ion-text-color, #000));--background-focused:var(--ion-item-color, var(--ion-text-color, #000));--background-hover:var(--ion-item-color, var(--ion-text-color, #000));--color:var(--ion-color-primary, #0054e9)}",v=g,H=(()=>{let a=class{constructor(e){l(this,e),this.header=void 0,this.multiple=void 0,this.options=[]}closeModal(){let e=this.el.closest("ion-modal");e&&e.dismiss()}findOptionFromEvent(e){let{options:o}=this;return o.find(t=>t.value===e.target.value)}getValues(e){let{multiple:o,options:t}=this;if(o)return t.filter(c=>c.checked).map(c=>c.value);let r=e?this.findOptionFromEvent(e):null;return r?r.value:void 0}callOptionHandler(e){let o=this.findOptionFromEvent(e),t=this.getValues(e);o!=null&&o.handler&&s(o.handler,t)}setChecked(e){let{multiple:o}=this,t=this.findOptionFromEvent(e);o&&t&&(t.checked=e.detail.checked)}renderRadioOptions(){let e=this.options.filter(o=>o.checked).map(o=>o.value)[0];return i("ion-radio-group",{value:e,onIonChange:o=>this.callOptionHandler(o)},this.options.map(o=>i("ion-item",{class:Object.assign({"item-radio-checked":o.value===e},n(o.cssClass))},i("ion-radio",{value:o.value,disabled:o.disabled,justify:"start",labelPlacement:"end",onClick:()=>this.closeModal(),onKeyUp:t=>{t.key===" "&&this.closeModal()}},o.text))))}renderCheckboxOptions(){return this.options.map(e=>i("ion-item",{class:Object.assign({"item-checkbox-checked":e.checked},n(e.cssClass))},i("ion-checkbox",{value:e.value,disabled:e.disabled,checked:e.checked,justify:"start",labelPlacement:"end",onIonChange:o=>{this.setChecked(o),this.callOptionHandler(o),h(this)}},e.text)))}render(){return i(d,{key:"f4b92f4fc3d646f9a327e43a9622abaf69659c28",class:b(this)},i("ion-header",{key:"11232ef496e7abd69e55cef988963a4869a7b01e"},i("ion-toolbar",{key:"e7c41878691a504d44c658db02807867df542588"},this.header!==void 0&&i("ion-title",{key:"fcf9d33e0f3e0076ff14805de68848f9ef199cca"},this.header),i("ion-buttons",{key:"748a967ae0ce68bc2fd018a6b9ebe0e4b810f6ac",slot:"end"},i("ion-button",{key:"f5e60791870b5085a31b7af70ed4bb3fb83eb185",onClick:()=>this.closeModal()},"Close")))),i("ion-content",{key:"159797957b6f788a9b393d91864c18db34481c68"},i("ion-list",{key:"4124554fe8b2411637cbf02f08e50e0d8f804175"},this.multiple===!0?this.renderCheckboxOptions():this.renderRadioOptions())))}get el(){return m(this)}};return a.style={ionic:f,ios:k,md:v},a})();export{H as ion_select_modal};
