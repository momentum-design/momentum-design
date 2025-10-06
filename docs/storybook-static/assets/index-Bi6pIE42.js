import{U as p,S as h,u as v,G as m,W as u,k as f,n as s}from"./iframe-Bqf88308.js";const y=[p,h`
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
  `],E=v.constructTagName("spinner"),N={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},S={STANDALONE:"standalone",BUTTON:"button"},i={VARIANT:S.STANDALONE,SIZE:N.MIDSIZE,INVERTED:!1};var A=Object.defineProperty,a=(l,t,c,I)=>{for(var r=void 0,n=l.length-1,d;n>=0;n--)(d=l[n])&&(r=d(t,c,r)||r);return r&&A(t,c,r),r};const o=class o extends m{constructor(){super(...arguments),this.inverted=i.INVERTED,this.size=i.SIZE,this.ariaLabel=null,this.variant=i.VARIANT}updated(t){super.updated(t),t.has("ariaLabel")&&(this.role=this.ariaLabel?u.IMG:null,this.ariaHidden=this.ariaLabel?"false":"true")}render(){return f`
      <svg part="container" viewBox="0 0 100 100">
        <circle part="circle" cx="50" cy="50" r="46"></circle>
      </svg>
    `}};o.styles=[...m.styles,...y];let e=o;a([s({type:Boolean,reflect:!0})],e.prototype,"inverted");a([s({type:String,reflect:!0})],e.prototype,"size");a([s({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");a([s({type:String,reflect:!0})],e.prototype,"variant");e.register(E);export{N as S,S as a};
