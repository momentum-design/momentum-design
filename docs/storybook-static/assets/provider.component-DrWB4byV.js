import{i as x,h as E,k as P}from"./lit-element-D5KKan5q.js";const f={PREFIX:"mdc",SEPARATOR:"-"},b={NAMESPACE:f},m=i=>[b.NAMESPACE.PREFIX,i].join(b.NAMESPACE.SEPARATOR),y={constructTagName:m},A=x`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }
`,a=class a extends E{static register(t){customElements.get(t)||customElements.define(t,this)}};a.styles=[A];let r=a;/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let C=class extends Event{constructor(t,s,e){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.callback=s,this.subscribe=e??!1}};/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class R{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,s=!1){const e=s||!Object.is(t,this.o);this.o=t,e&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[s,{disposer:e}]of this.subscriptions)s(this.o,e)},t!==void 0&&(this.value=t)}addCallback(t,s,e){if(!e)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:s});const{disposer:n}=this.subscriptions.get(t);t(this.value,n)}clearCallbacks(){this.subscriptions.clear()}}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class g extends Event{constructor(t){super("context-provider",{bubbles:!0,composed:!0}),this.context=t}}class S extends R{constructor(t,s,e){var n,l;super(s.context!==void 0?s.initialValue:e),this.onContextRequest=o=>{const c=o.composedPath()[0];o.context===this.context&&c!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,c,o.subscribe))},this.onProviderRequest=o=>{const c=o.composedPath()[0];if(o.context!==this.context||c===this.host)return;const d=new Set;for(const[h,{consumerHost:v}]of this.subscriptions)d.has(h)||(d.add(h),v.dispatchEvent(new C(this.context,h,!0)));o.stopPropagation()},this.host=t,s.context!==void 0?this.context=s.context:this.context=s,this.attachListeners(),(l=(n=this.host).addController)==null||l.call(n,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new g(this.context))}}const k=x`
  :host {
    display: contents;
  }
`,u=class u extends r{constructor({context:t,initialValue:s}){super(),this.context=new S(this,{context:t,initialValue:s})}render(){return this.updateContext(),P`<slot></slot>`}};u.styles=[...r.styles,k];let p=u;export{r as C,p as P,C as s,y as u};
