import{u,V as f,q as T,U as y,S as I,h as i,k as l,B as E,G as x,n as o}from"./iframe-DlUA9Lme.js";import{t as A}from"./if-defined-sRFM4mFi.js";import{D as S}from"./DisabledMixin-CAO-9s6U.js";import{v as b}from"./v4-CmTdKEVZ.js";const G=u.constructTagName("formfieldwrapper"),n={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},r={VALIDATION:n.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id",ICON_SIZE:20,INFO_ICON:"info-badge-filled",TOGGLETIP_PLACEMENT:"top",TOGGLETIP_STRATEGY:"absolute"},d={TAGNAME:f.SPAN,TYPE:T.BODY_MIDSIZE_REGULAR,HEADER_TYPE:T.BODY_MIDSIZE_BOLD},_=[y,I`
    :host {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    :host([disabled]),
    :host([disabled])::part(label),
    :host([disabled])::part(help-text-container),
    :host([disabled])::part(required-indicator),
    :host([disabled][help-text-type='error'])::part(help-text-container),
    :host([disabled][help-text-type='success'])::part(help-text-container),
    :host([disabled][help-text-type='warning'])::part(help-text-container),
    :host([disabled][help-text-type='priority'])::part(help-text-container) {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host::part(required-indicator) {
      color: var(--mds-color-theme-text-error-normal);
    }

    :host::part(label-text),
    :host::part(help-text-container) {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }

    :host::part(label) {
      font-size: var(--mds-font-apps-body-midsize-medium-font-size);
      font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
      line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    }

    :host::part(help-text),
    :host::part(help-text-container) {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    :host::part(label) {
      color: var(--mds-color-theme-text-primary-normal);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host::part(help-text-container) {
      color: var(--mds-color-theme-text-secondary-normal);
    }

    :host::part(info-icon-btn) {
      align-self: flex-start;
    }

    :host([help-text-type='error'])::part(help-text-container) {
      color: var(--mds-color-theme-text-error-normal);
    }
    :host([help-text-type='warning'])::part(help-text-container) {
      color: var(--mds-color-theme-text-warning-normal);
    }
    :host([help-text-type='success'])::part(help-text-container) {
      color: var(--mds-color-theme-text-success-normal);
    }
    :host([help-text-type='priority'])::part(help-text-container) {
      color: var(--mds-color-theme-text-accent-normal);
    }
  `],D=p=>({[n.ERROR]:"error-legacy-badge-filled",[n.WARNING]:"warning-badge-filled",[n.SUCCESS]:"check-circle-badge-filled",[n.PRIORITY]:"priority-badge-filled",[n.DEFAULT]:""})[p]||"";var $=Object.defineProperty,a=(p,e,g,v)=>{for(var s=void 0,h=p.length-1,m;h>=0;h--)(m=p[h])&&(s=m(e,g,s)||s);return s&&$(e,g,s),s};const c=class c extends S(x){constructor(){super(...arguments),this.inputId=`mdc-el-${b()}`,this.required=!1,this.helpTextType=r.VALIDATION,this.toggletipPlacement=r.TOGGLETIP_PLACEMENT,this.toggletipStrategy=r.TOGGLETIP_STRATEGY,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?l`<label for="${this.inputId}" id="${r.HEADING_ID}" part="label">${this.label}</label>`:l` <mdc-text
          id="${r.HEADING_ID}"
          tagname="${d.TAGNAME}"
          type="${d.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:i}renderHelpTextIcon(){if(!this.helpText)return i;const e=D(this.helpTextType||r.VALIDATION);return e&&!this.disabled?l`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${e}></mdc-icon>`:i}renderHelpText(){return this.helpText?l`
      <mdc-text
        id="${r.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${d.TAGNAME}
        type=${d.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:i}renderLabel(){if(!this.label)return i;const e=`toggletip-trigger-${b()}`;return l`<div part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?l`<span part="required-indicator">*</span>`:i}
      <slot name="toggletip">
        ${this.toggletipText?l` <mdc-button
                part="info-icon-btn"
                prefix-icon="${r.INFO_ICON}"
                size="${r.ICON_SIZE}"
                variant="${E.TERTIARY}"
                aria-label="${A(this.infoIconAriaLabel)}"
                ?disabled="${this.disabled}"
                id="${e}"
              ></mdc-button>
              <mdc-toggletip
                part="label-toggletip"
                triggerid="${e}"
                id="label-toggletip-id"
                placement="${this.toggletipPlacement}"
                strategy="${this.toggletipStrategy}"
                show-arrow
                >${this.toggletipText}</mdc-toggletip
              >`:i}
      </slot>
    </div>`}renderHelperText(){return this.helpText?l`<div part="help-text-container">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:i}};c.styles=[...x.styles,..._];let t=c;a([o({reflect:!0,type:String})],t.prototype,"label");a([o({type:Boolean,reflect:!0,attribute:"required"})],t.prototype,"required");a([o({reflect:!0,attribute:"help-text-type"})],t.prototype,"helpTextType");a([o({type:String,reflect:!0,attribute:"help-text"})],t.prototype,"helpText");a([o({type:String,reflect:!0,attribute:"toggletip-text"})],t.prototype,"toggletipText");a([o({type:String,reflect:!0,attribute:"toggletip-placement"})],t.prototype,"toggletipPlacement");a([o({type:String,reflect:!0,attribute:"toggletip-strategy"})],t.prototype,"toggletipStrategy");a([o({type:String,reflect:!0,attribute:"info-icon-aria-label"})],t.prototype,"infoIconAriaLabel");export{r as D,t as F,G as T,n as V};
