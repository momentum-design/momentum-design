import{e as i}from"./base-DIkkzJ-c.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function d(l,u){return(r,o,c)=>{const s=n=>{var e;return((e=n.renderRoot)==null?void 0:e.querySelector(l))??null};if(u){const{get:n,set:e}=typeof o=="object"?r:c??(()=>{const t=Symbol();return{get(){return this[t]},set(h){this[t]=h}}})();return i(r,o,{get(){let t=n.call(this);return t===void 0&&(t=s(this),(t!==null||this.hasUpdated)&&e.call(this,t)),t}})}return i(r,o,{get(){return s(this)}})}}export{d as e};
