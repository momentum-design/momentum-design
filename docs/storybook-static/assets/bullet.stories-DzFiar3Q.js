import{u as b,C as d,n as g}from"./index-HW6KrQZO.js";import{i as z,k as h}from"./lit-element-CHllvULs.js";import{t as f}from"./if-defined-C4tJgJ33.js";import{c as y,s as v}from"./commonArgTypes-BluK8w5L.js";import{d as A}from"./utils-D1SE5bce.js";const L=z`
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
`,E=[L],S=b.constructTagName("bullet"),o={SMALL:"small",MEDIUM:"medium",LARGE:"large"};var k=Object.defineProperty,M=(s,m,c,x)=>{for(var e=void 0,l=s.length-1,i;l>=0;l--)(i=s[l])&&(e=i(m,c,e)||e);return e&&k(m,c,e),e};const a=class a extends d{constructor(){super(...arguments),this.size=o.SMALL}};a.styles=[...d.styles,...E];let r=a;M([g({type:String,reflect:!0})],r.prototype,"size");r.register(S);const _=s=>h`
  <mdc-bullet size="${f(s.size)}"></mdc-bullet>`,G={title:"Components/decorator/bullet",tags:["autodocs"],component:"mdc-bullet",render:_,parameters:{badges:["stable"]},argTypes:{size:{control:"select",options:Object.values(o)},...A(["--mdc-bullet-background-color","--mdc-bullet-size-small","--mdc-bullet-size-medium","--mdc-bullet-size-large"]),...y,...v}},t={args:{size:o.SMALL}};var n,u,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const N=["Example"];export{t as Example,N as __namedExportsOrder,G as default};
