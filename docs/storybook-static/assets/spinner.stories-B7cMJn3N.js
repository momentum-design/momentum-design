import{i as z,k as h}from"./lit-element-D5KKan5q.js";import{u as b,C as p,n}from"./index-C9z9WAEj.js";import{a as E}from"./index-MA1r3zrt.js";import{t as A}from"./if-defined-D5BV9-c0.js";import{c as N,s as S}from"./commonArgTypes-BluK8w5L.js";const T=[E,z`
  :host {
    --mdc-spinner-default-color: var(--mds-color-theme-control-active-normal);
    --mdc-spinner-inverted-color: var(--mds-color-theme-inverted-control-active-normal);
    --mdc-spinner-button-variant-color: currentColor;
    --mdc-spinner-color: var(--mdc-spinner-default-color);
    --mdc-spinner-size: 100%;
  }

  :host([inverted]) {
    --mdc-spinner-color: var(--mdc-spinner-inverted-color);
  }

  :host([size="large"]) {
    --mdc-spinner-size: 6rem;
  }

  :host([size="midsize"]) {
    --mdc-spinner-size: 3rem;
  }

  :host([size="small"]) {
    --mdc-spinner-size: 1.5rem;
  }

  :host([variant="button"]) {
    --mdc-spinner-color: var(--mdc-spinner-button-variant-color);
  }

  :host::part(container) {
    width: var(--mdc-spinner-size);
    height: var(--mdc-spinner-size);
    animation: rotate 1.5s linear infinite;
  }

  :host::part(circle) {
    fill: none;
    stroke: var(--mdc-spinner-color);
    stroke-width: 8%;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
    transform: rotate(-90deg);
    transform-origin: center;
  }

  @keyframes rotate {
    100% { transform: rotate(360deg); }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 470;
    }
    50% {
      stroke-dasharray: 209, 470;
      stroke-dashoffset: -83;
    }
    100% {
      stroke-dasharray: 209, 470;
      stroke-dashoffset: -292;
    }
  }
`],I=b.constructTagName("spinner"),y={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},g={STANDALONE:"standalone",BUTTON:"button"},l={VARIANT:g.STANDALONE,SIZE:y.MIDSIZE,INVERTED:!1};var k=Object.defineProperty,o=(e,s,d,x)=>{for(var t=void 0,i=e.length-1,m;i>=0;i--)(m=e[i])&&(t=m(s,d,t)||t);return t&&k(s,d,t),t};const c=class c extends p{constructor(){super(...arguments),this.inverted=l.INVERTED,this.size=l.SIZE,this.ariaLabel=null,this.variant=l.VARIANT}updated(s){super.updated(s),s.has("ariaLabel")&&(this.role=this.ariaLabel?"img":null,this.ariaHidden=this.ariaLabel?"false":"true")}render(){return h`
      <svg part="container" viewBox="0 0 100 100">
        <circle part="circle" cx="50" cy="50" r="46"></circle>
      </svg>
    `}};c.styles=[...p.styles,...T];let r=c;o([n({type:Boolean,reflect:!0})],r.prototype,"inverted");o([n({type:String,reflect:!0})],r.prototype,"size");o([n({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");o([n({type:String,reflect:!0})],r.prototype,"variant");r.register(I);const L=e=>h`
    <mdc-spinner     
      aria-label="${A(e["aria-label"])}"
      ?inverted="${e.inverted}"
      size="${e.size}"
      variant="${e.variant}"
    ></mdc-spinner>`,V={title:"Components/spinner",tags:["autodocs"],component:"mdc-spinner",render:L,parameters:{badges:["stable"]},argTypes:{...N,...S,inverted:{control:"boolean"},size:{control:"select",options:[...Object.values(y),void 0]},variant:{control:"select",options:Object.values(g)}}},a={args:{class:"custom-classname",style:"margin-top: 20px;",inverted:!1,size:"midsize",variant:"standalone"}};var v,u,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    inverted: false,
    size: 'midsize',
    variant: 'standalone'
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const Z=["Example"];export{a as Example,Z as __namedExportsOrder,V as default};
