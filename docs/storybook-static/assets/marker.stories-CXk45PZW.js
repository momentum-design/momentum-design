import{X as v,u as g,H as i,n as k,k as h}from"./iframe-DPiEtQC6.js";import{t as y}from"./if-defined-BBKKqPaV.js";import{c as b,s as f}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const A=v`
  :host {
    --mdc-marker-width: 0.25rem;
    --mdc-marker-solid-background-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-marker-striped-background-color: transparent;

    width: var(--mdc-marker-width);
    height: 100%;
    display: block;
  }

  :host([variant='solid']) {
    background: var(--mdc-marker-solid-background-color);
  }

  :host([variant='striped']) {
    background: repeating-linear-gradient(
      135deg,
      var(--mdc-marker-striped-color),
      var(--mdc-marker-striped-color) 0.1875rem,
      var(--mdc-marker-striped-background-color) 0.1875rem,
      var(--mdc-marker-striped-background-color) 0.375rem
    );
  }
`,S=[A],T=g.constructTagName("marker"),s={SOLID:"solid",STRIPED:"striped"};var _=Object.defineProperty,E=(e,n,m,O)=>{for(var r=void 0,o=e.length-1,d;o>=0;o--)(d=e[o])&&(r=d(n,m,r)||r);return r&&_(n,m,r),r};const c=class c extends i{constructor(){super(...arguments),this.variant=s.SOLID}};c.styles=[...i.styles,...S];let t=c;E([k({type:String,reflect:!0})],t.prototype,"variant");t.register(T);const I=e=>h`
  <div style="height: 6.25rem">
    <mdc-marker variant="${y(e.variant)}"></mdc-marker>
  </div>
`,N={title:"Components/decorator/marker",tags:["autodocs"],component:"mdc-marker",render:I,argTypes:{variant:{control:"radio",options:Object.values(s)},...b,...f},parameters:{actions:{disable:!0}}},a={args:{variant:s.SOLID}};var l,p,u;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: MARKER_VARIANTS.SOLID
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const w=["Example"];export{a as Example,w as __namedExportsOrder,N as default};
