import{n as l}from"./index-C9z9WAEj.js";import{e as p}from"./base-DIkkzJ-c.js";import{v as d}from"./v4-CmTdKEVZ.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function h(r,t){return(i,o,e)=>{const n=s=>{var u;return((u=s.renderRoot)==null?void 0:u.querySelector(r))??null};return p(i,o,{get(){return n(this)}})}}var m=Object.defineProperty,a=(r,t,i,o)=>{for(var e=void 0,n=r.length-1,s;n>=0;n--)(s=r[n])&&(e=s(t,i,e)||e);return e&&m(t,i,e),e};const v=r=>{const i=class i extends r{constructor(...e){super(e),this.name="",this.value="",this.internals=this.attachInternals(),this.id=`mdc-input-${d()}`}get form(){return this.internals.form}get validity(){return this.internals.validity}get willValidate(){return this.internals.willValidate}setValidity(){this.inputElement&&this.internals.setValidity(this.inputElement.validity,this.inputElement.validationMessage,this.inputElement)}checkValidity(){return this.setValidity(),this.internals.checkValidity()}reportValidity(){return this.setValidity(),this.internals.reportValidity()}};i.formAssociated=!0;let t=i;return a([l({reflect:!0,type:String})],t.prototype,"name"),a([l({reflect:!0,type:String})],t.prototype,"value"),a([l({reflect:!0,type:String,attribute:"validation-message"})],t.prototype,"validationMessage"),a([h("input")],t.prototype,"inputElement"),t};export{v as F,h as e};
