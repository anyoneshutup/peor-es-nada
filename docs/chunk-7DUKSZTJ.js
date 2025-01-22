import{h as w}from"./chunk-IFNCDCK6.js";import{a as I}from"./chunk-MM5QLNJM.js";import{a as p,f as y,g as v,h as A,i as u}from"./chunk-72KDLSWN.js";import{a as E,c as b}from"./chunk-FW7I7OTW.js";import{b as g,f as l,g as f,i as m,j as x}from"./chunk-IQ447I2Z.js";import{f as c}from"./chunk-RW4GY4BD.js";var C=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}:host(.accordion-next) ::slotted(ion-item[slot=header]){--border-width:0.55px 0px 0.55px 0px}",S=C,N=":host{display:block;position:relative;width:100%;background-color:var(--ion-background-color, #ffffff);overflow:hidden;z-index:0}:host(.accordion-expanding) ::slotted(ion-item[slot=header]),:host(.accordion-expanded) ::slotted(ion-item[slot=header]){--border-width:0px}:host(.accordion-animated){-webkit-transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:all 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}:host(.accordion-animated) #content{-webkit-transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1);transition:max-height 300ms cubic-bezier(0.25, 0.8, 0.5, 1)}#content{overflow:hidden;will-change:max-height}:host(.accordion-collapsing) #content{max-height:0 !important}:host(.accordion-collapsed) #content{display:none}:host(.accordion-expanding) #content{max-height:0}:host(.accordion-expanding) #content-wrapper{overflow:auto}:host(.accordion-disabled) #header,:host(.accordion-readonly) #header,:host(.accordion-disabled) #content,:host(.accordion-readonly) #content{pointer-events:none}:host(.accordion-disabled) #header,:host(.accordion-disabled) #content{opacity:0.4}@media (prefers-reduced-motion: reduce){:host,#content{-webkit-transition:none !important;transition:none !important}}",G=N,P=class{constructor(i){g(this,i),this.updateListener=()=>this.updateState(!1),this.setItemDefaults=()=>{let e=this.getSlottedHeaderIonItem();e&&(e.button=!0,e.detail=!1,e.lines===void 0&&(e.lines="full"))},this.getSlottedHeaderIonItem=()=>{let{headerEl:e}=this;if(!e)return;let t=e.querySelector("slot");if(t&&t.assignedElements!==void 0)return t.assignedElements().find(o=>o.tagName==="ION-ITEM")},this.setAria=(e=!1)=>{let t=this.getSlottedHeaderIonItem();if(!t)return;let n=A(t).querySelector("button");n&&n.setAttribute("aria-expanded",`${e}`)},this.slotToggleIcon=()=>{let e=this.getSlottedHeaderIonItem();if(!e)return;let{toggleIconSlot:t,toggleIcon:o}=this;if(e.querySelector(".ion-accordion-toggle-icon"))return;let s=document.createElement("ion-icon");s.slot=t,s.lazy=!1,s.classList.add("ion-accordion-toggle-icon"),s.icon=o,s.setAttribute("aria-hidden","true"),e.appendChild(s)},this.expandAccordion=(e=!1)=>{let{contentEl:t,contentElWrapper:o}=this;if(e||t===void 0||o===void 0){this.state=4;return}this.state!==4&&(this.currentRaf!==void 0&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?u(()=>{this.state=8,this.currentRaf=u(()=>c(this,null,function*(){let n=o.offsetHeight,s=p(t,2e3);t.style.setProperty("max-height",`${n}px`),yield s,this.state=4,t.style.removeProperty("max-height")}))}):this.state=4)},this.collapseAccordion=(e=!1)=>{let{contentEl:t}=this;if(e||t===void 0){this.state=1;return}this.state!==1&&(this.currentRaf!==void 0&&cancelAnimationFrame(this.currentRaf),this.shouldAnimate()?this.currentRaf=u(()=>c(this,null,function*(){let o=t.offsetHeight;t.style.setProperty("max-height",`${o}px`),u(()=>c(this,null,function*(){let n=p(t,2e3);this.state=2,yield n,this.state=1,t.style.removeProperty("max-height")}))})):this.state=1)},this.shouldAnimate=()=>!(typeof window>"u"||matchMedia("(prefers-reduced-motion: reduce)").matches||!E.get("animated",!0)||this.accordionGroupEl&&!this.accordionGroupEl.animated),this.updateState=(e=!1)=>c(this,null,function*(){let t=this.accordionGroupEl,o=this.value;if(!t)return;let n=t.value;if(Array.isArray(n)?n.includes(o):n===o)this.expandAccordion(e),this.isNext=this.isPrevious=!1;else{this.collapseAccordion(e);let a=this.getNextSibling(),d=a==null?void 0:a.value;d!==void 0&&(this.isPrevious=Array.isArray(n)?n.includes(d):n===d);let r=this.getPreviousSibling(),h=r==null?void 0:r.value;h!==void 0&&(this.isNext=Array.isArray(n)?n.includes(h):n===h)}}),this.getNextSibling=()=>{if(!this.el)return;let e=this.el.nextElementSibling;if((e==null?void 0:e.tagName)==="ION-ACCORDION")return e},this.getPreviousSibling=()=>{if(!this.el)return;let e=this.el.previousElementSibling;if((e==null?void 0:e.tagName)==="ION-ACCORDION")return e},this.state=1,this.isNext=!1,this.isPrevious=!1,this.value=`ion-accordion-${V++}`,this.disabled=!1,this.readonly=!1,this.toggleIcon=w,this.toggleIconSlot="end"}valueChanged(){this.updateState()}connectedCallback(){var i;let e=this.accordionGroupEl=(i=this.el)===null||i===void 0?void 0:i.closest("ion-accordion-group");e&&(this.updateState(!0),y(e,"ionValueChange",this.updateListener))}disconnectedCallback(){let i=this.accordionGroupEl;i&&v(i,"ionValueChange",this.updateListener)}componentDidLoad(){this.setItemDefaults(),this.slotToggleIcon(),u(()=>{let i=this.state===4||this.state===8;this.setAria(i)})}toggleExpanded(){let{accordionGroupEl:i,disabled:e,readonly:t,value:o,state:n}=this;if(!(e||t)&&i){let s=n===1||n===2;i.requestAccordionToggle(o,s)}}render(){let{disabled:i,readonly:e}=this,t=b(this),o=this.state===4||this.state===8,n=o?"header expanded":"header",s=o?"content expanded":"content";return this.setAria(o),l(f,{key:"073e1d02c18dcbc20c68648426e87c14750c031d",class:{[t]:!0,"accordion-expanding":this.state===8,"accordion-expanded":this.state===4,"accordion-collapsing":this.state===2,"accordion-collapsed":this.state===1,"accordion-next":this.isNext,"accordion-previous":this.isPrevious,"accordion-disabled":i,"accordion-readonly":e,"accordion-animated":this.shouldAnimate()}},l("div",{key:"9b4cf326de8bb6b4033992903c0c1bfd7eea9bcc",onClick:()=>this.toggleExpanded(),id:"header",part:n,"aria-controls":"content",ref:a=>this.headerEl=a},l("slot",{key:"464c32a37f64655eacf4218284214f5f30b14a1e",name:"header"})),l("div",{key:"8bb52e6a62d7de0106b253201a89a32e79d9a594",id:"content",part:s,role:"region","aria-labelledby":"header",ref:a=>this.contentEl=a},l("div",{key:"1d9dfd952ad493754aaeea7a8f625b33c2dd90a0",id:"content-wrapper",ref:a=>this.contentElWrapper=a},l("slot",{key:"970dfbc55a612d739d0ca3b7b1a08e5c96d0c479",name:"content"}))))}static get delegatesFocus(){return!0}get el(){return m(this)}static get watchers(){return{value:["valueChanged"]}}},V=0;P.style={ios:S,md:G};var H=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){border-bottom:none}",R=H,z=":host{display:block}:host(.accordion-group-expand-inset){-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:16px;margin-inline-end:16px;margin-top:16px;margin-bottom:16px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion){-webkit-box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12)}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanding),:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-expanded){margin-left:0;margin-right:0;margin-top:16px;margin-bottom:16px;border-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-previous){border-end-end-radius:6px;border-end-start-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion.accordion-next){border-start-start-radius:6px;border-start-end-radius:6px}:host(.accordion-group-expand-inset) ::slotted(ion-accordion):first-of-type{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}",T=z,q=(()=>{let i=class{constructor(e){g(this,e),this.ionChange=x(this,"ionChange",7),this.ionValueChange=x(this,"ionValueChange",7),this.animated=!0,this.multiple=void 0,this.value=void 0,this.disabled=!1,this.readonly=!1,this.expand="compact"}valueChanged(){let{value:e,multiple:t}=this;!t&&Array.isArray(e)&&I(`ion-accordion-group was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${e.map(o=>`'${o}'`).join(", ")}]
`,this.el),this.ionValueChange.emit({value:this.value})}disabledChanged(){return c(this,null,function*(){let{disabled:e}=this,t=yield this.getAccordions();for(let o of t)o.disabled=e})}readonlyChanged(){return c(this,null,function*(){let{readonly:e}=this,t=yield this.getAccordions();for(let o of t)o.readonly=e})}onKeydown(e){return c(this,null,function*(){let t=document.activeElement;if(!t||!t.closest('ion-accordion [slot="header"]'))return;let n=t.tagName==="ION-ACCORDION"?t:t.closest("ion-accordion");if(!n||n.closest("ion-accordion-group")!==this.el)return;let a=yield this.getAccordions(),d=a.findIndex(h=>h===n);if(d===-1)return;let r;e.key==="ArrowDown"?r=this.findNextAccordion(a,d):e.key==="ArrowUp"?r=this.findPreviousAccordion(a,d):e.key==="Home"?r=a[0]:e.key==="End"&&(r=a[a.length-1]),r!==void 0&&r!==t&&r.focus()})}componentDidLoad(){return c(this,null,function*(){this.disabled&&this.disabledChanged(),this.readonly&&this.readonlyChanged(),this.valueChanged()})}setValue(e){let t=this.value=e;this.ionChange.emit({value:t})}requestAccordionToggle(e,t){return c(this,null,function*(){let{multiple:o,value:n,readonly:s,disabled:a}=this;if(!(s||a))if(t)if(o){let d=n!=null?n:[],r=Array.isArray(d)?d:[d];r.find(k=>k===e)===void 0&&e!==void 0&&this.setValue([...r,e])}else this.setValue(e);else if(o){let d=n!=null?n:[],r=Array.isArray(d)?d:[d];this.setValue(r.filter(h=>h!==e))}else this.setValue(void 0)})}findNextAccordion(e,t){let o=e[t+1];return o===void 0?e[0]:o}findPreviousAccordion(e,t){let o=e[t-1];return o===void 0?e[e.length-1]:o}getAccordions(){return c(this,null,function*(){return Array.from(this.el.querySelectorAll(":scope > ion-accordion"))})}render(){let{disabled:e,readonly:t,expand:o}=this,n=b(this);return l(f,{key:"82f3e77066fabb4736638ee4c487ad56efd39c63",class:{[n]:!0,"accordion-group-disabled":e,"accordion-group-readonly":t,[`accordion-group-expand-${o}`]:!0},role:"presentation"},l("slot",{key:"a3c791ea887fc640b512f81d429be465ae902b3d"}))}get el(){return m(this)}static get watchers(){return{value:["valueChanged"],disabled:["disabledChanged"],readonly:["readonlyChanged"]}}};return i.style={ios:R,md:T},i})();export{P as ion_accordion,q as ion_accordion_group};
