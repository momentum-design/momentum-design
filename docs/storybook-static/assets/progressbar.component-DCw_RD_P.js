import{i as g,k as t}from"./lit-element-D5KKan5q.js";import{u as v,n}from"./index-C9z9WAEj.js";import{h as u}from"./index-CcXofQbA.js";import"./index-DVbf7y9j.js";import{V as o,F as b}from"./formfieldwrapper.component-5n2-mkV5.js";import{D as f}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{v as y}from"./v4-CmTdKEVZ.js";const x=[u,g`
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

:host([variant="inline"])::part(label) {
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

:host::part(label-text), :host::part(help-text), :host::part(percentage) {
  font-size: var(--mdc-progressbar-label-font-size);
  font-weight: var(--mdc-progressbar-label-font-weight);
  line-height: var(--mdc-progressbar-label-line-height);
}

:host([help-text-type="default"])::part(help-text) {
  color: var(--mdc-progressbar-help-text-color);
}

@media (forced-colors: active) {
  :host::part(progress-container), :host::part(progress-bar) {
    border: var(--mdc-progressbar-border);
  }
}
`],I=v.constructTagName("progressbar"),l={DEFAULT:"default",INLINE:"inline"},T={VARIANT:l.DEFAULT,VALIDATION:o.DEFAULT};var A=Object.defineProperty,c=(p,r,a,h)=>{for(var e=void 0,i=p.length-1,m;i>=0;i--)(m=p[i])&&(e=m(r,a,e)||e);return e&&A(r,a,e),e};const d=class d extends f(b){constructor(){super(...arguments),this.variant=T.VARIANT,this.value="0",this.error=!1,this.renderProgressbar=()=>{const r=this.getValidationVariant(),a=this.clampedValue>0&&this.clampedValue<100,h=this.error?"100":`${this.clampedValue}`;return t`
      <div
        part="progress-container ${a?"gap":""}"
        role="progressbar"
        aria-valuenow="${this.clampedValue}"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label="${this.dataAriaLabel??""}"
      >
        <div part="progress-bar ${r}" style="width: ${h}%"></div>
        <div part="remaining"></div>
      </div>
    `}}connectedCallback(){super.connectedCallback(),this.id=`mdc-progressbar-${y()}`,this.disabled=void 0}get clampedValue(){const r=Number(this.value);return Number.isNaN(r)?0:Math.max(0,Math.min(100,r))}getValidationVariant(){return this.error?this.helpTextType=o.ERROR:this.clampedValue===100?this.helpTextType=o.SUCCESS:this.helpTextType=o.DEFAULT,this.helpTextType}render(){const r=this.variant===l.INLINE;return t`
      ${r?t`<div part="inline-label-container">${this.renderLabelElement()} ${this.renderProgressbar()}</div>`:t`
            <div part="label-container">
              ${this.renderLabelElement()}
              ${this.variant===l.DEFAULT&&this.label?t`<span part="percentage">${this.clampedValue}%</span>`:""}
            </div>
            ${this.renderProgressbar()}
            ${this.renderHelperText()}
          `}
    `}};d.styles=[...b.styles,...x];let s=d;c([n({type:String,reflect:!0})],s.prototype,"variant");c([n({type:String,reflect:!0})],s.prototype,"value");c([n({type:Boolean,attribute:"error"})],s.prototype,"error");export{T as D,s as P,I as T,l as V};
