import{S as g,u as b,E as n,n as z,k as h}from"./iframe-DepJTrFF.js";import{t as y}from"./if-defined-DYFDEgLm.js";import{c as v,s as f}from"./commonArgTypes-BluK8w5L.js";import"./preload-helper-C1FmrZbK.js";const A=g`
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
`,E=[A],L=b.constructTagName("bullet"),l={SMALL:"small",MEDIUM:"medium",LARGE:"large"};var S=Object.defineProperty,M=(s,c,m,_)=>{for(var e=void 0,o=s.length-1,i;o>=0;o--)(i=s[o])&&(e=i(c,m,e)||e);return e&&S(c,m,e),e};const a=class a extends n{constructor(){super(...arguments),this.size=l.SMALL}};a.styles=[...n.styles,...E];let r=a;M([z({type:String,reflect:!0})],r.prototype,"size");r.register(L);const k=s=>h` <mdc-bullet size="${y(s.size)}"></mdc-bullet>`,O={title:"Components/decorator/bullet",tags:["autodocs"],component:"mdc-bullet",render:k,argTypes:{size:{control:"select",options:Object.values(l)},...v,...f}},t={args:{size:l.SMALL}};var d,u,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};const j=["Example"];export{t as Example,j as __namedExportsOrder,O as default};
