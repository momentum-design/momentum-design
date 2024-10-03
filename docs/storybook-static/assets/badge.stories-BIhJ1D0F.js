import{R as f,i as T,k as c}from"./lit-element-CPYlYYac.js";import{u as N,C as $,n as o}from"./index-CFYjfE6c.js";import{e as k,i as x,t as E}from"./directive-Ctav8iJK.js";import{h as v}from"./index-LGKd4lo9.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b="important",S=" !"+b,w=k(class extends x{constructor(n){var t;if(super(n),n.type!==E.ATTRIBUTE||n.name!=="style"||((t=n.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,r)=>{const e=n[r];return e==null?t:t+`${r=r.includes("-")?r:r.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${e};`},"")}update(n,[t]){const{style:r}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const e of this.ft)t[e]==null&&(this.ft.delete(e),e.includes("-")?r.removeProperty(e):r[e]=null);for(const e in t){const s=t[e];if(s!=null){this.ft.add(e);const a=typeof s=="string"&&s.endsWith(S);e.includes("-")||a?r.setProperty(e,a?s.slice(0,-11):s,a?b:""):r[e]=s}}return f}}),U=N.constructTagName("badge"),A="warning-badge-filled",m={TYPE:"regular",SCALE:1,LENGTH_UNIT:"rem"},_=[v,T`
    :host {
      --mdc-badge-icon-background-color: var(--mds-color-theme-background-accent-normal);
    }

    .mdc-badge-container {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 9999px;
      background-color: var(--mdc-badge-icon-background-color);
    }

    .mdc-badge-icon-container {
      height: 80%;
      width: 80%;
    }
  `];var P=Object.defineProperty,l=(n,t,r,e)=>{for(var s=void 0,a=n.length-1,p;a>=0;a--)(p=n[a])&&(s=p(t,r,s)||s);return s&&P(t,r,s),s};const u=class u extends ${constructor(){super(...arguments),this.type=m.TYPE,this.scale=m.SCALE,this.lengthUnit=m.LENGTH_UNIT}updateSize(){}updated(t){super.updated(t),(t.has("scale")||t.has("lengthUnit"))&&this.updateSize()}iconTemplate(){return c`<div class="mdc-badge-icon-container">
      <mdc-icon name="${this.iconName}" scale="100" length-unit="%"></mdc-icon>
    </div>`}textTemplate(){return c`${this.text}`}warningTemplate(){return c` <mdc-icon name="${A}" class="mdc-badge-warning"></mdc-icon> `}render(){let t;const r=`${this.scale}${this.lengthUnit}`;let e={width:r,height:r};switch(this.type){case"regular":t=c``;break;case"icon":t=this.iconTemplate();break;case"text":t=this.textTemplate(),e={height:e.height};break;case"warning":t=this.warningTemplate();break;default:t=c``;break}return c`<div class="mdc-badge-container" style=${w(e)}>${t}</div>`}};u.styles=_;let i=u;l([o({type:String,reflect:!0})],i.prototype,"type");l([o({type:Number})],i.prototype,"scale");l([o({type:String,attribute:"length-unit"})],i.prototype,"lengthUnit");l([o({type:String,attribute:"icon-name"})],i.prototype,"iconName");l([o({type:String})],i.prototype,"text");i.register(U);const C=n=>c`
  <mdc-badge
    type="${n.type}"
    icon-name="${n.iconName}"
    scale="${n.scale}"
    length-unit="${n.lengthUnit}"
    text="${n.text}"
  ></mdc-badge>
`,j={title:"Work In Progress/badge",tags:["autodocs"],component:"mdc-badge",render:C,argTypes:{}},d={args:{type:m.TYPE,iconName:"accessibility-regular",scale:1,lengthUnit:"rem",text:"99+"}};var h,g,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'accessibility-regular',
    scale: 1,
    lengthUnit: 'rem',
    text: '99+'
  }
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const G=["Primary"];export{d as Primary,G as __namedExportsOrder,j as default};
