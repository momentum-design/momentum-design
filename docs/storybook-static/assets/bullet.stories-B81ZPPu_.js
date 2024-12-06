import{u as p,C as d,n as g}from"./index-BLShQaRP.js";import{i as z,k as f}from"./lit-element-CPYlYYac.js";import{t as h}from"./if-defined-4GS2c12S.js";import{c as y,s as v}from"./commonArgTypes-BluK8w5L.js";import{d as A}from"./utils-DCJ3yZC1.js";const L=z`
  :host {
    --mdc-bullet-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-bullet-size-small: 0.25rem;
    --mdc-bullet-size-medium: 0.5rem;
    --mdc-bullet-size-large: 1rem;

    border-radius: 50%;
    display: block;
    aspect-ratio: 1;
    background-color: var(--mdc-bullet-background-color);
  }
  :host([size="small"]) {
    height: var(--mdc-bullet-size-small);
  }
  :host([size="medium"]) {
    height: var(--mdc-bullet-size-medium);
  }
  :host([size="large"]) {
    height: var(--mdc-bullet-size-large);
  }
`,S=[L],k=p.constructTagName("bullet"),o={SMALL:"small",MEDIUM:"medium",LARGE:"large"};var M=Object.defineProperty,E=(s,m,c,C)=>{for(var e=void 0,l=s.length-1,i;l>=0;l--)(i=s[l])&&(e=i(m,c,e)||e);return e&&M(m,c,e),e};const a=class a extends d{constructor(){super(...arguments),this.size=o.SMALL}};a.styles=[...d.styles,...S];let r=a;E([g({type:String,reflect:!0})],r.prototype,"size");r.register(k);const _=s=>f`
  <mdc-bullet size="${h(s.size)}"></mdc-bullet>`,j={title:"Components/bullet",tags:["autodocs"],component:"mdc-bullet",render:_,parameters:{badges:["stable"]},argTypes:{size:{control:"select",options:Object.values(o)},...A(["--mdc-bullet-background-color","--mdc-bullet-size-small","--mdc-bullet-size-medium","--mdc-bullet-size-large"]),...y,...v}},t={args:{size:o.SMALL}};var u,n,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL
  }
}`,...(b=(n=t.parameters)==null?void 0:n.docs)==null?void 0:b.source}}};const G=["Default"];export{t as Default,G as __namedExportsOrder,j as default};
