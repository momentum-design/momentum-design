import{s as b}from"./index-fQJcZKNb.js";/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class r{constructor(t,s,c,o){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(i,h)=>{this.unsubscribe&&(this.unsubscribe!==h&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=i,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(i,h)),this.unsubscribe=h},this.host=t,s.context!==void 0){const i=s;this.context=i.context,this.callback=i.callback,this.subscribe=i.subscribe??!1}else this.context=s,this.callback=c,this.subscribe=o??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new b(this.context,this.t,this.subscribe))}}const u=e=>{const{host:t,context:s,subscribe:c}=e;return new r(t,{context:s,subscribe:c??!0})},a={consume:u},d=e=>{const t={};return e.forEach(s=>{t[s]={control:!1}}),t};export{d,a as p};
