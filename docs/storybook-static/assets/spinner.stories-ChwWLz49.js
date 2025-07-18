import{i as b,k as h}from"./lit-element-D5KKan5q.js";import{u as g,C as p,n}from"./index-C9z9WAEj.js";import{R as E}from"./roles-BH_hBfTz.js";import{a as A}from"./index-Cx7wvr8C.js";import{t as N}from"./if-defined-D5BV9-c0.js";import{c as I,s as S}from"./commonArgTypes-BluK8w5L.js";import{t as T}from"./utils-CF1irry3.js";const k=[A,b`
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

    :host([size='large']) {
      --mdc-spinner-size: 6rem;
    }

    :host([size='midsize']) {
      --mdc-spinner-size: 3rem;
    }

    :host([size='small']) {
      --mdc-spinner-size: 1.5rem;
    }

    :host([variant='button']) {
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
      100% {
        transform: rotate(360deg);
      }
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
  `],L=g.constructTagName("spinner"),y={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},z={STANDALONE:"standalone",BUTTON:"button"},c={VARIANT:z.STANDALONE,SIZE:y.MIDSIZE,INVERTED:!1};var x=Object.defineProperty,o=(e,s,d,O)=>{for(var t=void 0,i=e.length-1,m;i>=0;i--)(m=e[i])&&(t=m(s,d,t)||t);return t&&x(s,d,t),t};const l=class l extends p{constructor(){super(...arguments),this.inverted=c.INVERTED,this.size=c.SIZE,this.ariaLabel=null,this.variant=c.VARIANT}updated(s){super.updated(s),s.has("ariaLabel")&&(this.role=this.ariaLabel?E.IMG:null,this.ariaHidden=this.ariaLabel?"false":"true")}render(){return h`
      <svg part="container" viewBox="0 0 100 100">
        <circle part="circle" cx="50" cy="50" r="46"></circle>
      </svg>
    `}};l.styles=[...p.styles,...k];let r=l;o([n({type:Boolean,reflect:!0})],r.prototype,"inverted");o([n({type:String,reflect:!0})],r.prototype,"size");o([n({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");o([n({type:String,reflect:!0})],r.prototype,"variant");r.register(L);const R=e=>h` <mdc-spinner
    aria-label="${N(e["aria-label"])}"
    ?inverted="${e.inverted}"
    size="${e.size}"
    variant="${e.variant}"
  ></mdc-spinner>`,j={title:"Components/spinner",tags:["autodocs"],component:"mdc-spinner",render:R,parameters:{badges:["stable"]},argTypes:{...I,...S,inverted:{control:"boolean"},size:{control:"select",options:[...Object.values(y),void 0]},variant:{control:"select",options:Object.values(z)},...T(["--mdc-spinner-default-color","--mdc-spinner-inverted-color","--mdc-spinner-button-variant-color","--mdc-spinner-size"])}},a={args:{class:"custom-classname",style:"margin-top: 20px;",inverted:!1,size:"midsize",variant:"standalone"}};var v,u,f;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    class: 'custom-classname',
    style: 'margin-top: 20px;',
    inverted: false,
    size: 'midsize',
    variant: 'standalone'
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const w=["Example"];export{a as Example,w as __namedExportsOrder,j as default};
