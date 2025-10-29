import{u as b,U as u,S as v,k as a,W as f,n as l}from"./iframe-C8zHd0pv.js";import"./index-Bb0XHxYV.js";import{D as T}from"./DataAriaLabelMixin-jvYrxui3.js";import{V as o}from"./formfieldwrapper.constants-CxwGPedd.js";import{v as y}from"./v4-CmTdKEVZ.js";import{F as m}from"./formfieldwrapper.component-DYhB16ak.js";const A=b.constructTagName("progressbar"),n={DEFAULT:"default",INLINE:"inline"},V={VARIANT:n.DEFAULT,VALIDATION:o.DEFAULT},$=[u,v`
    :host {
      --mdc-progressbar-background-color: var(--mds-color-theme-control-indicator-inactive-normal);
      --mdc-progressbar-progress-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-progressbar-height: 0.25rem;
      --mdc-progressbar-border: 0.5px solid transparent;
      --mdc-progressbar-border-radius: var(--mdc-progressbar-height);

      width: 100%;
    }

    :host::part(label-container) {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }

    :host::part(inline-label-container) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }

    :host::part(progress-container) {
      display: flex;
      align-items: center;
      width: 100%;
      height: var(--mdc-progressbar-height);
    }

    :host::part(gap) {
      gap: 0.25rem;
    }

    :host([variant='inline'])::part(label) {
      overflow: unset;
    }

    :host::part(progress-bar) {
      height: 100%;
      background-color: var(--mdc-progressbar-progress-background-color);
      border-radius: var(--mdc-progressbar-border-radius);
      transition: width 0.3s ease-in-out;
    }

    :host::part(success) {
      --mdc-progressbar-progress-background-color: var(--mds-color-theme-indicator-stable);
    }

    :host::part(error) {
      --mdc-progressbar-progress-background-color: var(--mds-color-theme-indicator-attention);
    }

    :host::part(remaining) {
      height: 100%;
      flex-grow: 1;
      background-color: var(--mdc-progressbar-background-color);
      border-radius: var(--mdc-progressbar-border-radius);
    }

    :host::part(percentage) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    @media (forced-colors: active) {
      :host::part(progress-container),
      :host::part(progress-bar) {
        border: var(--mdc-progressbar-border);
      }
    }
  `];var x=Object.defineProperty,d=(c,r,t,h)=>{for(var e=void 0,i=c.length-1,g;i>=0;i--)(g=c[i])&&(e=g(r,t,e)||e);return e&&x(r,t,e),e};const p=class p extends T(m){constructor(){super(...arguments),this.variant=V.VARIANT,this.value="0",this.error=!1,this.renderProgressbar=()=>{const r=this.getValidationVariant(),t=this.clampedValue>0&&this.clampedValue<100,h=this.error?"100":`${this.clampedValue}`;return a`
      <div
        part="progress-container ${t?"gap":""}"
        role="${f.PROGRESSBAR}"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="progress-bar ${r}" style="width: ${h}%"></div>
        <div part="remaining"></div>
      </div>
    `}}connectedCallback(){super.connectedCallback(),this.id=`${A}-${y()}`,this.disabled=void 0,this.toggletipText=void 0,this.toggletipPlacement=void 0}get clampedValue(){const r=Number(this.value);return Number.isNaN(r)?0:Math.max(0,Math.min(100,r))}getValidationVariant(){return this.error?this.helpTextType=o.ERROR:this.clampedValue===100?this.helpTextType=o.SUCCESS:this.helpTextType=o.DEFAULT,this.helpTextType}render(){const r=this.variant===n.INLINE;return a`
      ${r?a`<div part="inline-label-container">${this.renderLabelElement()} ${this.renderProgressbar()}</div>`:a`
            <div part="label-container">
              ${this.renderLabelElement()}
              ${this.variant===n.DEFAULT&&this.label?a`<span part="percentage">${this.clampedValue}%</span>`:""}
            </div>
            ${this.renderProgressbar()} ${this.renderHelperText()}
          `}
    `}};p.styles=[...m.styles,...$];let s=p;d([l({type:String,reflect:!0})],s.prototype,"variant");d([l({type:String,reflect:!0})],s.prototype,"value");d([l({type:Boolean,attribute:"error"})],s.prototype,"error");export{V as D,s as P,A as T,n as V};
