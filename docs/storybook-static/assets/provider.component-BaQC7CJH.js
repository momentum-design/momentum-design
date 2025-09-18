import{u as E,f,i as x,h as P,k as g}from"./lit-element-D5KKan5q.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m={attribute:!0,type:String,converter:E,reflect:!1,hasChanged:f},y=(i=m,t,s)=>{const{kind:o,metadata:n}=s;let c=globalThis.litPropertyMetadata.get(n);if(c===void 0&&globalThis.litPropertyMetadata.set(n,c=new Map),c.set(s.name,i),o==="accessor"){const{name:e}=s;return{set(r){const a=t.get.call(this);t.set.call(this,r),this.requestUpdate(e,a,i)},init(r){return r!==void 0&&this.P(e,void 0,i),r}}}if(o==="setter"){const{name:e}=s;return function(r){const a=this[e];t.call(this,r),this.requestUpdate(e,a,i)}}throw Error("Unsupported decorator location: "+o)};function T(i){return(t,s)=>typeof s=="object"?y(i,t,s):((o,n,c)=>{const e=n.hasOwnProperty(c);return n.constructor.createProperty(c,e?{...o,wrapped:!0}:o),e?Object.getOwnPropertyDescriptor(n,c):void 0})(i,t,s)}const C={PREFIX:"mdc",SEPARATOR:"-"},p={NAMESPACE:C},A=i=>[p.NAMESPACE.PREFIX,i].join(p.NAMESPACE.SEPARATOR),N={constructTagName:A},w=x`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`,l=class l extends P{static register(t){customElements.get(t)||customElements.define(t,this)}};l.styles=[w];let h=l;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let R=class extends Event{constructor(t,s,o){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=s,this.subscribe=o??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class O{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const o=s||!Object.is(t,this.o);this.o=t,o&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:o}]of this.subscriptions)s(this.o,o)},t!==void 0&&(this.value=t)}addCallback(t,s,o){if(!o)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class S extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class k extends O{constructor(t,s,o){var n,c;super(s.context!==void 0?s.initialValue:o),this.onContextRequest=e=>{const r=e.composedPath()[0];e.context===this.context&&r!==this.host&&(e.stopPropagation(),this.addCallback(e.callback,r,e.subscribe))},this.onProviderRequest=e=>{const r=e.composedPath()[0];if(e.context!==this.context||r===this.host)return;const a=new Set;for(const[u,{consumerHost:v}]of this.subscriptions)a.has(u)||(a.add(u),v.dispatchEvent(new R(this.context,u,!0)));e.stopPropagation()},this.host=t,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(c=(n=this.host).addController)==null||c.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new S(this.context))}}const q=x`
  :host {
    display: contents;
  }
`,d=class d extends h{constructor({context:t,initialValue:s}){super(),this.context=new k(this,{context:t,initialValue:s})}render(){return this.updateContext(),g`<slot></slot>`}};d.styles=[...h.styles,q];let b=d;export{h as C,b as P,T as n,R as s,N as u};
