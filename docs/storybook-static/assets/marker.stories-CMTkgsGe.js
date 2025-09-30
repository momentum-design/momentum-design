import{i as u,u as g,C as i,n as v,k as h}from"./iframe-B0KTrzx9.js";import{t as y}from"./if-defined-DNHI_5dY.js";import{c as b,s as f}from"./commonArgTypes-BluK8w5L.js";import{t as A}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";const S=u`
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
`,T=[S],_=g.constructTagName("marker"),s={SOLID:"solid",STRIPED:"striped"};var E=Object.defineProperty,I=(e,m,d,R)=>{for(var r=void 0,t=e.length-1,n;t>=0;t--)(n=e[t])&&(r=n(m,d,r)||r);return r&&E(m,d,r),r};const c=class c extends i{constructor(){super(...arguments),this.variant=s.SOLID}};c.styles=[...i.styles,...T];let o=c;I([v({type:String,reflect:!0})],o.prototype,"variant");o.register(_);const O=e=>h`
  <div style="height: 6.25rem">
    <mdc-marker variant="${y(e.variant)}"></mdc-marker>
  </div>
`,N={title:"Components/decorator/marker",tags:["autodocs"],component:"mdc-marker",render:O,argTypes:{variant:{control:"radio",options:Object.values(s)},...A(["--mdc-marker-solid-background-color","--mdc-marker-striped-color","--mdc-marker-striped-background-color","--mdc-marker-width"]),...b,...f}},a={args:{variant:s.SOLID}};var l,p,k;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: MARKER_VARIANTS.SOLID
  }
}`,...(k=(p=a.parameters)==null?void 0:p.docs)==null?void 0:k.source}}};const P=["Example"];export{a as Example,P as __namedExportsOrder,N as default};
