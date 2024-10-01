import{D as x,i as g,k as o}from"./lit-element-CPYlYYac.js";import{u as E,C as T,n}from"./index-CFYjfE6c.js";/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=e=>e??x,v=g`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100vh;
    position: relative;
    width: fit-content;
  }
  img {
    border-radius: 100vh;
    height: inherit;
    width: inherit;
    object-fit: cover;
  }
`,S=E.constructTagName("avatar"),b="rem",i={TYPE:"photo",SCALE:1.5};var w=Object.defineProperty,c=(e,t,d,D)=>{for(var r=void 0,p=e.length-1,h;p>=0;p--)(h=e[p])&&(r=h(t,d,r)||r);return r&&w(t,d,r),r};const l=class l extends T{constructor(){super(...arguments),this.type=i.TYPE,this.scale=i.SCALE}updateSize(){if(this.scale){const t=`${this.scale}${b}`;this.style.width=t,this.style.height=t}}updated(t){super.updated(t),t.has("scale")&&this.updateSize()}photoTemplate(){return o`
      <img
        src="${m(this.src)}"
        alt="${m(this.alt)}"
      />
    `}render(){let t;return this.type==="photo"?t=this.photoTemplate():t=o``,o`${t}`}};l.styles=v;let s=l;c([n({type:String,reflect:!0})],s.prototype,"type");c([n({type:String})],s.prototype,"alt");c([n({type:String})],s.prototype,"src");c([n({type:Number})],s.prototype,"scale");s.register(S);const A=e=>o`
  <mdc-avatar src="${e.src}" scale="${e.scale}" type="${e.type}"></mdc-avatar>
`,$={title:"Work In Progress/avatar",component:"mdc-avatar",render:A,argTypes:{}},a={args:{src:"https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80",scale:i.SCALE,type:i.TYPE}};var u,f,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    // eslint-disable-next-line max-len
    src: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2855&q=80',
    scale: DEFAULTS.SCALE,
    type: DEFAULTS.TYPE
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const C=["Primary"];export{a as Primary,C as __namedExportsOrder,$ as default};
