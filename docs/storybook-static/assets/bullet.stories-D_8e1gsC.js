import{i as b,u as g,C as d,n as z,k as h}from"./iframe-CXwaMhTJ.js";import{t as y}from"./if-defined-DIAx6F34.js";import{c as f,s as v}from"./commonArgTypes-BluK8w5L.js";import{t as A}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";const L=b`
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
  :host([size='small']) {
    height: var(--mdc-bullet-size-small);
  }
  :host([size='medium']) {
    height: var(--mdc-bullet-size-medium);
  }
  :host([size='large']) {
    height: var(--mdc-bullet-size-large);
  }
`,E=[L],S=g.constructTagName("bullet"),o={SMALL:"small",MEDIUM:"medium",LARGE:"large"};var k=Object.defineProperty,M=(s,m,c,_)=>{for(var e=void 0,l=s.length-1,i;l>=0;l--)(i=s[l])&&(e=i(m,c,e)||e);return e&&k(m,c,e),e};const a=class a extends d{constructor(){super(...arguments),this.size=o.SMALL}};a.styles=[...d.styles,...E];let r=a;M([z({type:String,reflect:!0})],r.prototype,"size");r.register(S);const x=s=>h` <mdc-bullet size="${y(s.size)}"></mdc-bullet>`,G={title:"Components/decorator/bullet",tags:["autodocs"],component:"mdc-bullet",render:x,argTypes:{size:{control:"select",options:Object.values(o)},...A(["--mdc-bullet-background-color","--mdc-bullet-size-small","--mdc-bullet-size-medium","--mdc-bullet-size-large"]),...f,...v}},t={args:{size:o.SMALL}};var n,u,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const N=["Example"];export{t as Example,N as __namedExportsOrder,G as default};
