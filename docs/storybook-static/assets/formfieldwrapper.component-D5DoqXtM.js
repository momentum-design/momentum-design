import{a4 as f,a5 as u,z as i,k as a,B as b,t as y,C as g,n as r}from"./iframe-CeAfCu9I.js";import{D as T}from"./DisabledMixin-lSaSZRkD.js";import{D as e,M as d}from"./formfieldwrapper.constants-BVx_dnpY.js";import{a as v}from"./statusmessage.constants-DfVAETh_.js";import{v as x}from"./v4-CmTdKEVZ.js";const $=f`
  :host {
    --mdc-label-font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    --mdc-label-font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    --mdc-label-line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    --mdc-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-help-text-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    --mdc-help-text-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    --mdc-help-text-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-required-indicator-color: var(--mds-color-theme-text-error-normal);

    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  :host::part(required-indicator) {
    color: var(--mdc-required-indicator-color);
  }

  :host::part(label-text),
  :host::part(help-text-container) {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }

  :host::part(helper-icon) {
    align-self: flex-start;
    flex-shrink: 0;
    height: var(--mdc-help-text-line-height);
  }

  :host::part(label) {
    font-size: var(--mdc-label-font-size);
    font-weight: var(--mdc-label-font-weight);
    line-height: var(--mdc-label-line-height);
  }

  :host::part(help-text),
  :host::part(help-text-container) {
    font-size: var(--mdc-help-text-font-size);
    font-weight: var(--mdc-help-text-font-weight);
    line-height: var(--mdc-help-text-line-height);
  }

  :host::part(label) {
    color: var(--mdc-label-color);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host::part(help-text-container) {
    color: var(--mdc-help-text-color);
  }

  mdc-statusmessage[part='help-text-container'] {
    --mdc-statusmessage-color: var(--mdc-help-text-color);
    --mdc-statusmessage-font-size: var(--mdc-help-text-font-size);
    --mdc-statusmessage-font-weight: var(--mdc-help-text-font-weight);
    --mdc-statusmessage-line-height: var(--mdc-help-text-line-height);
    --mdc-statusmessage-gap: 0.5rem;

    width: 100%;
  }

  :host::part(info-icon-btn) {
    align-self: flex-start;
  }
  :host([help-text-type='error']) {
    --mdc-help-text-color: var(--mds-color-theme-text-error-normal);
  }
  :host([help-text-type='warning']) {
    --mdc-help-text-color: var(--mds-color-theme-text-warning-normal);
  }
  :host([help-text-type='success']) {
    --mdc-help-text-color: var(--mds-color-theme-text-success-normal);
  }
  :host([help-text-type='priority']) {
    --mdc-help-text-color: var(--mds-color-theme-text-accent-normal);
  }

  :host([disabled]),
  :host([soft-disabled]) {
    --mdc-label-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-help-text-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-required-indicator-color: var(--mds-color-theme-text-primary-disabled);
    color: var(--mds-color-theme-text-primary-disabled);
    pointer-events: none;
    cursor: default;
  }
`,I=[u,$],E=n=>v[n]||"";var A=Object.defineProperty,l=(n,o,p,w)=>{for(var s=void 0,h=n.length-1,m;h>=0;h--)(m=n[h])&&(s=m(o,p,s)||s);return s&&A(o,p,s),s};const c=class c extends T(g){constructor(){super(...arguments),this.inputId=`mdc-el-${x()}`,this.required=!1,this.helpTextType=e.VALIDATION,this.toggletipPlacement=e.TOGGLETIP_PLACEMENT,this.toggletipStrategy=e.TOGGLETIP_STRATEGY,this.readonly=!1,this.softDisabled=!1,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?a`<label for="${this.inputId}" id="${e.HEADING_ID}" part="label">${this.label}</label>`:a` <mdc-text
          id="${e.HEADING_ID}"
          tagname="${d.TAGNAME}"
          type="${d.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:i}renderHelpTextIcon(){if(!this.helpText)return i;const o=E(this.helpTextType||e.VALIDATION);return o&&!this.disabled?a`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${o}></mdc-icon>`:i}renderHelpText(){return this.helpText?a`
      <mdc-text
        id="${e.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${d.TAGNAME}
        type=${d.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:i}renderLabel(){if(!this.label)return i;const o=`toggletip-trigger-${x()}`,p=this.disabled||this.softDisabled;return a`<div part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?a`<span part="required-indicator">*</span>`:i}
      <slot name="toggletip">
        ${this.toggletipText?a` <mdc-button
                part="info-icon-btn"
                prefix-icon="${e.INFO_ICON}"
                size="${e.ICON_SIZE}"
                variant="${b.TERTIARY}"
                aria-label="${y(this.infoIconAriaLabel)}"
                ?disabled="${p}"
                ?soft-disabled="${this.softDisabled}"
                id="${o}"
              ></mdc-button>
              <mdc-toggletip
                part="label-toggletip"
                triggerid="${o}"
                id="label-toggletip-id"
                placement="${this.toggletipPlacement}"
                strategy="${this.toggletipStrategy}"
                show-arrow
                >${this.toggletipText}</mdc-toggletip
              >`:i}
      </slot>
    </div>`}renderHelperText(){return this.helpText?a`<mdc-statusmessage
      part="help-text-container"
      severity="${e.VALIDATION}"
      exportparts="container: help-text-container, icon: helper-icon, text: help-text"
    >
      <slot name="help-icon" slot="icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </mdc-statusmessage>`:i}};c.styles=[...g.styles,...I];let t=c;l([r({reflect:!0,type:String})],t.prototype,"label");l([r({type:Boolean,reflect:!0,attribute:"required"})],t.prototype,"required");l([r({reflect:!0,attribute:"help-text-type"})],t.prototype,"helpTextType");l([r({type:String,reflect:!0,attribute:"help-text"})],t.prototype,"helpText");l([r({type:String,reflect:!0,attribute:"toggletip-text"})],t.prototype,"toggletipText");l([r({type:String,reflect:!0,attribute:"toggletip-placement"})],t.prototype,"toggletipPlacement");l([r({type:String,reflect:!0,attribute:"toggletip-strategy"})],t.prototype,"toggletipStrategy");l([r({type:String,reflect:!0,attribute:"info-icon-aria-label"})],t.prototype,"infoIconAriaLabel");l([r({type:Boolean,reflect:!0})],t.prototype,"readonly");l([r({type:Boolean,reflect:!0,attribute:"soft-disabled"})],t.prototype,"softDisabled");export{t as F};
