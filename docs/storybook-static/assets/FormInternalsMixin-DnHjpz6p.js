import{n as l}from"./index-HW6KrQZO.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const p=(r,t,e)=>(e.configurable=!0,e.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(r,t,e),e);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(r,t){return(e,o,i)=>{const n=a=>{var u;return((u=a.renderRoot)==null?void 0:u.querySelector(r))??null};return p(e,o,{get(){return n(this)}})}}var h=Object.defineProperty,s=(r,t,e,o)=>{for(var i=void 0,n=r.length-1,a;n>=0;n--)(a=r[n])&&(i=a(t,e,i)||i);return i&&h(t,e,i),i};const c=r=>{const e=class e extends r{constructor(...i){super(i),this.name="",this.value="",this.internals=this.attachInternals()}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}setValidity(){this.inputElement&&this.internals.setValidity(this.inputElement.validity,this.inputElement.validationMessage,this.inputElement)}checkValidity(){return this.setValidity(),this.internals.checkValidity()}reportValidity(){return this.setValidity(),this.internals.reportValidity()}};e.formAssociated=!0;let t=e;return s([l({reflect:!0,type:String})],t.prototype,"name"),s([l({reflect:!0,type:String})],t.prototype,"value"),s([l({reflect:!0,type:String,attribute:"validation-message"})],t.prototype,"validationMessage"),s([d("input")],t.prototype,"inputElement"),t};export{c as F,p as e};
