import{i as b,k as a}from"./lit-element-D5KKan5q.js";import{n}from"./property-Bj3TGwkg.js";import"./index-Mf-HRYRk.js";import{D as v}from"./DataAriaLabelMixin-DVpSBUFD.js";import{V as o,F as g}from"./formfieldwrapper.component-DfjqvCUn.js";import{R as u}from"./roles-CJI3JVG-.js";import{u as f}from"./provider.component-DrWB4byV.js";import{h as x}from"./index-CqVtAZCJ.js";import{v as y}from"./v4-CmTdKEVZ.js";const F=f.constructTagName("progressbar"),l={DEFAULT:"default",INLINE:"inline"},T={VARIANT:l.DEFAULT,VALIDATION:o.DEFAULT},A=[x,b`
    :host {
      --mdc-progressbar-background-color: var(--mds-color-theme-control-indicator-inactive-normal);
      --mdc-progressbar-active-background-color: var(--mds-color-theme-control-active-normal);
      --mdc-progressbar-success-color: var(--mds-color-theme-indicator-stable);
      --mdc-progressbar-error-color: var(--mds-color-theme-indicator-attention);
      --mdc-progressbar-height: 0.25rem;
      --mdc-progressbar-border: 0.5px solid transparent;
      --mdc-progressbar-border-radius: var(--mdc-progressbar-height);

      --mdc-progressbar-label-color: var(--mds-color-theme-text-primary-normal);
      --mdc-progressbar-label-line-height: var(--mds-font-lineheight-body-midsize);
      --mdc-progressbar-label-font-size: var(--mds-font-size-body-midsize);
      --mdc-progressbar-label-font-weight: var(--mds-font-weight-regular);
      --mdc-progressbar-help-text-color: var(--mds-color-theme-text-secondary-normal);

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
      background-color: var(--mdc-progressbar-active-background-color);
      border-radius: var(--mdc-progressbar-border-radius);
      transition: width 0.3s ease-in-out;
    }

    :host::part(success) {
      background-color: var(--mdc-progressbar-success-color);
    }

    :host::part(error) {
      background-color: var(--mdc-progressbar-error-color);
    }

    :host::part(remaining) {
      height: 100%;
      flex-grow: 1;
      background-color: var(--mdc-progressbar-background-color);
      border-radius: var(--mdc-progressbar-border-radius);
    }

    :host::part(label-text),
    :host::part(help-text),
    :host::part(percentage) {
      font-size: var(--mdc-progressbar-label-font-size);
      font-weight: var(--mdc-progressbar-label-font-weight);
      line-height: var(--mdc-progressbar-label-line-height);
    }

    :host([help-text-type='default'])::part(help-text) {
      color: var(--mdc-progressbar-help-text-color);
    }

    @media (forced-colors: active) {
      :host::part(progress-container),
      :host::part(progress-bar) {
        border: var(--mdc-progressbar-border);
      }
    }
  `];var V=Object.defineProperty,c=(d,r,t,h)=>{for(var e=void 0,i=d.length-1,m;i>=0;i--)(m=d[i])&&(e=m(r,t,e)||e);return e&&V(r,t,e),e};const p=class p extends v(g){constructor(){super(...arguments),this.variant=T.VARIANT,this.value="0",this.error=!1,this.renderProgressbar=()=>{const r=this.getValidationVariant(),t=this.clampedValue>0&&this.clampedValue<100,h=this.error?"100":`${this.clampedValue}`;return a`
      <div
        part="progress-container ${t?"gap":""}"
        role="${u.PROGRESSBAR}"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="progress-bar ${r}" style="width: ${h}%"></div>
        <div part="remaining"></div>
      </div>
    `}}connectedCallback(){super.connectedCallback(),this.id=`mdc-progressbar-${y()}`,this.disabled=void 0,this.toggletipText=void 0,this.toggletipPlacement=void 0}get clampedValue(){const r=Number(this.value);return Number.isNaN(r)?0:Math.max(0,Math.min(100,r))}getValidationVariant(){return this.error?this.helpTextType=o.ERROR:this.clampedValue===100?this.helpTextType=o.SUCCESS:this.helpTextType=o.DEFAULT,this.helpTextType}render(){const r=this.variant===l.INLINE;return a`
      ${r?a`<div part="inline-label-container">${this.renderLabelElement()} ${this.renderProgressbar()}</div>`:a`
            <div part="label-container">
              ${this.renderLabelElement()}
              ${this.variant===l.DEFAULT&&this.label?a`<span part="percentage">${this.clampedValue}%</span>`:""}
            </div>
            ${this.renderProgressbar()} ${this.renderHelperText()}
          `}
    `}};p.styles=[...g.styles,...A];let s=p;c([n({type:String,reflect:!0})],s.prototype,"variant");c([n({type:String,reflect:!0})],s.prototype,"value");c([n({type:Boolean,attribute:"error"})],s.prototype,"error");export{T as D,s as P,F as T,l as V};
