import{R as f,i as T,k as a}from"./lit-element-CPYlYYac.js";import{u as v,C as x,n as c}from"./index-CFYjfE6c.js";import{t as N}from"./if-defined-4GS2c12S.js";import{e as $,i as k,t as E}from"./directive-Ctav8iJK.js";import{h as z}from"./index-LGKd4lo9.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b="important",S=" !"+b,w=$(class extends k{constructor(n){var t;if(super(n),n.type!==E.ATTRIBUTE||n.name!=="style"||((t=n.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,r)=>{const e=n[r];return e==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(n,[t]){const{style:r}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)t[e]==null&&(this.ft.delete(e),e.includes("-")?r.removeProperty(e):r[e]=null);for(const e in t){const i=t[e];if(i!=null){this.ft.add(e);const o=typeof i=="string"&&i.endsWith(S);e.includes("-")||o?r.setProperty(e,o?i.slice(0,-11):i,o?b:""):r[e]=i}}return f}}),U=v.constructTagName("badge"),_="warning-badge-filled",m={TYPE:"regular",SIZE:1,LENGTH_UNIT:"rem"},P=[z,T`
    :host {
      --mdc-badge-icon-background-color: var(--mds-color-theme-background-accent-normal);
      --mdc-badge-icon-color: var(--mds-color-theme-common-text-primary-normal);
    }

    .mdc-badge-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 9999px;
      background-color: var(--mdc-badge-icon-background-color);
      color: var(--mdc-badge-icon-color);
    }

    .mdc-badge-icon-container {
      height: 80%;
      width: 80%;
    }
  `];var A=Object.defineProperty,d=(n,t,r,e)=>{for(var i=void 0,o=n.length-1,u;o>=0;o--)(u=n[o])&&(i=u(t,r,i)||i);return i&&A(t,r,i),i};const p=class p extends x{constructor(){super(...arguments),this.type=m.TYPE,this.size=m.SIZE,this.lengthUnit=m.LENGTH_UNIT}updateSize(){}updated(t){super.updated(t),(t.has("size")||t.has("lengthUnit"))&&this.updateSize()}iconTemplate(){return a`<div class="mdc-badge-icon-container">
      <mdc-icon name=${N(this.iconName)} size="100" length-unit="%"></mdc-icon>
    </div>`}textTemplate(){return a`${this.text}`}warningTemplate(){return a` <mdc-icon name="${_}" class="mdc-badge-warning"></mdc-icon> `}render(){let t;const r=`${this.size}${this.lengthUnit}`;let e={width:r,height:r};switch(this.type){case"regular":t=a``;break;case"icon":t=this.iconTemplate();break;case"text":t=this.textTemplate(),e={height:e.height};break;case"warning":t=this.warningTemplate();break;default:t=a``;break}return a`<div class="mdc-badge-container" style=${w(e)}>${t}</div>`}};p.styles=P;let s=p;d([c({type:String,reflect:!0})],s.prototype,"type");d([c({type:Number})],s.prototype,"size");d([c({type:String,attribute:"length-unit"})],s.prototype,"lengthUnit");d([c({type:String,attribute:"icon-name"})],s.prototype,"iconName");d([c({type:String})],s.prototype,"text");s.register(U);const I=n=>a`
  <mdc-badge
    type="${n.type}"
    icon-name="${n.iconName}"
    size="${n.size}"
    length-unit="${n.lengthUnit}"
    text="${n.text}"
  ></mdc-badge>
`,Y={title:"Work In Progress/badge",tags:["autodocs"],component:"mdc-badge",render:I,argTypes:{}},l={args:{type:m.TYPE,iconName:"accessibility-regular",size:1,lengthUnit:"rem",text:"99+"}};var h,g,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'accessibility-regular',
    size: 1,
    lengthUnit: 'rem',
    text: '99+'
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const F=["Primary"];export{l as Primary,F as __namedExportsOrder,Y as default};
