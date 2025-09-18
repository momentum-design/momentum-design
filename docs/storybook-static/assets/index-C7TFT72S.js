import{i as p,k as h}from"./lit-element-D5KKan5q.js";import{u as f,C as m,n as s}from"./provider.component-BaQC7CJH.js";import{R as v}from"./roles-CJI3JVG-.js";import{h as u}from"./index-CqVtAZCJ.js";const y=[u,p`
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
  `],E=f.constructTagName("spinner"),N={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},A={STANDALONE:"standalone",BUTTON:"button"},i={VARIANT:A.STANDALONE,SIZE:N.MIDSIZE,INVERTED:!1};var I=Object.defineProperty,a=(l,t,c,S)=>{for(var e=void 0,o=l.length-1,d;o>=0;o--)(d=l[o])&&(e=d(t,c,e)||e);return e&&I(t,c,e),e};const n=class n extends m{constructor(){super(...arguments),this.inverted=i.INVERTED,this.size=i.SIZE,this.ariaLabel=null,this.variant=i.VARIANT}updated(t){super.updated(t),t.has("ariaLabel")&&(this.role=this.ariaLabel?v.IMG:null,this.ariaHidden=this.ariaLabel?"false":"true")}render(){return h`
      <svg part="container" viewBox="0 0 100 100">
        <circle part="circle" cx="50" cy="50" r="46"></circle>
      </svg>
    `}};n.styles=[...m.styles,...y];let r=n;a([s({type:Boolean,reflect:!0})],r.prototype,"inverted");a([s({type:String,reflect:!0})],r.prototype,"size");a([s({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");a([s({type:String,reflect:!0})],r.prototype,"variant");r.register(E);export{N as S,A as a};
