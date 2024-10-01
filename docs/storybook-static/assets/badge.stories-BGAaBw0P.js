import{R as T,i as f,k as c}from"./lit-element-CPYlYYac.js";import{u as E,C as $,n as o}from"./index-CFYjfE6c.js";import{h as A}from"./index-LGKd4lo9.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const N={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},_=n=>(...t)=>({_$litDirective$:n,values:t});class v{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,r){this.t=t,this._$AM=e,this.i=r}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const b="important",U=" !"+b,k=_(class extends v{constructor(n){var t;if(super(n),n.type!==N.ATTRIBUTE||n.name!=="style"||((t=n.strings)==null?void 0:t.length)>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(n){return Object.keys(n).reduce((t,e)=>{const r=n[e];return r==null?t:t+`${e=e.includes("-")?e:e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,"-$&").toLowerCase()}:${r};`},"")}update(n,[t]){const{style:e}=n.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(const r of this.ft)t[r]==null&&(this.ft.delete(r),r.includes("-")?e.removeProperty(r):e[r]=null);for(const r in t){const s=t[r];if(s!=null){this.ft.add(r);const a=typeof s=="string"&&s.endsWith(U);r.includes("-")||a?e.setProperty(r,a?s.slice(0,-11):s,a?b:""):e[r]=s}}return T}}),x=E.constructTagName("badge"),S="warning-badge-filled",u={TYPE:"regular",SCALE:1,LENGTH_UNIT:"rem"},w=[A,f`
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
  `];var P=Object.defineProperty,l=(n,t,e,r)=>{for(var s=void 0,a=n.length-1,p;a>=0;a--)(p=n[a])&&(s=p(t,e,s)||s);return s&&P(t,e,s),s};const m=class m extends ${constructor(){super(...arguments),this.type=u.TYPE,this.scale=u.SCALE,this.lengthUnit=u.LENGTH_UNIT}updateSize(){}updated(t){super.updated(t),(t.has("scale")||t.has("lengthUnit"))&&this.updateSize()}iconTemplate(){return c`<div class="mdc-badge-icon-container">
      <mdc-icon name="${this.iconName}" scale="100" length-unit="%"></mdc-icon>
    </div>`}textTemplate(){return c`${this.text}`}warningTemplate(){return c` <mdc-icon name="${S}" class="mdc-badge-warning"></mdc-icon> `}render(){let t;const e=`${this.scale}${this.lengthUnit}`;let r={width:e,height:e};switch(this.type){case"regular":t=c``;break;case"icon":t=this.iconTemplate();break;case"text":t=this.textTemplate(),r={height:r.height};break;case"warning":t=this.warningTemplate();break;default:t=c``;break}return c`<div class="mdc-badge-container" style=${k(r)}>${t}</div>`}};m.styles=w;let i=m;l([o({type:String,reflect:!0})],i.prototype,"type");l([o({type:Number})],i.prototype,"scale");l([o({type:String,attribute:"length-unit"})],i.prototype,"lengthUnit");l([o({type:String,attribute:"icon-name"})],i.prototype,"iconName");l([o({type:String})],i.prototype,"text");i.register(x);const L=n=>c`
  <mdc-badge
    type="${n.type}"
    icon-name="${n.iconName}"
    scale="${n.scale}"
    length-unit="${n.lengthUnit}"
    text="${n.text}"
  ></mdc-badge>
`,R={title:"Work In Progress/badge",tags:["autodocs"],component:"mdc-badge",render:L,argTypes:{}},d={args:{type:u.TYPE,iconName:"accessibility-regular",scale:1,lengthUnit:"rem",text:"99+"}};var h,g,y;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    type: DEFAULTS.TYPE,
    iconName: 'accessibility-regular',
    scale: 1,
    lengthUnit: 'rem',
    text: '99+'
  }
}`,...(y=(g=d.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const M=["Primary"];export{d as Primary,M as __namedExportsOrder,R as default};
