import{n as d}from"./index-HW6KrQZO.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const y=(t,e,i)=>(i.configurable=!0,i.enumerable=!0,Reflect.decorate&&typeof e!="object"&&Object.defineProperty(t,e,i),i);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(t,e){return(i,l,r)=>{const u=a=>{var c;return((c=a.renderRoot)==null?void 0:c.querySelector(t))??null};return y(i,l,{get(){return u(this)}})}}const n=[];for(let t=0;t<256;++t)n.push((t+256).toString(16).slice(1));function m(t,e=0){return(n[t[e+0]]+n[t[e+1]]+n[t[e+2]]+n[t[e+3]]+"-"+n[t[e+4]]+n[t[e+5]]+"-"+n[t[e+6]]+n[t[e+7]]+"-"+n[t[e+8]]+n[t[e+9]]+"-"+n[t[e+10]]+n[t[e+11]]+n[t[e+12]]+n[t[e+13]]+n[t[e+14]]+n[t[e+15]]).toLowerCase()}let s;const g=new Uint8Array(16);function v(){if(!s){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");s=crypto.getRandomValues.bind(crypto)}return s(g)}const V=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),p={randomUUID:V};function b(t,e,i){var r;if(p.randomUUID&&!e&&!t)return p.randomUUID();t=t||{};const l=t.random??((r=t.rng)==null?void 0:r.call(t))??v();if(l.length<16)throw new Error("Random bytes length must be >= 16");return l[6]=l[6]&15|64,l[8]=l[8]&63|128,m(l)}var U=Object.defineProperty,o=(t,e,i,l)=>{for(var r=void 0,u=t.length-1,a;u>=0;u--)(a=t[u])&&(r=a(e,i,r)||r);return r&&U(e,i,r),r};const x=t=>{const i=class i extends t{constructor(...r){super(r),this.name="",this.value="",this.internals=this.attachInternals(),this.id=`mdc-input-${b()}`}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}setValidity(){this.inputElement&&this.internals.setValidity(this.inputElement.validity,this.inputElement.validationMessage,this.inputElement)}checkValidity(){return this.setValidity(),this.internals.checkValidity()}reportValidity(){return this.setValidity(),this.internals.reportValidity()}};i.formAssociated=!0;let e=i;return o([d({reflect:!0,type:String})],e.prototype,"name"),o([d({reflect:!0,type:String})],e.prototype,"value"),o([d({reflect:!0,type:String,attribute:"validation-message"})],e.prototype,"validationMessage"),o([h("input")],e.prototype,"inputElement"),e};export{x as F,y as e};
