import{u,V as x,q as b,U as y,S as I,h as l,k as a,B as E,G as T,n as e}from"./iframe-C9ziMOfg.js";import{t as A}from"./if-defined-Ci9mZRDF.js";import{D}from"./DisabledMixin-jcMExzk_.js";import{v as f}from"./v4-CmTdKEVZ.js";const G=u.constructTagName("formfieldwrapper"),n={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},o={VALIDATION:n.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id",ICON_SIZE:20,INFO_ICON:"info-badge-filled",TOGGLETIP_PLACEMENT:"top",TOGGLETIP_STRATEGY:"absolute"},h={TAGNAME:x.SPAN,TYPE:b.BODY_MIDSIZE_REGULAR,HEADER_TYPE:b.BODY_MIDSIZE_BOLD},S=[y,I`
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
  `],_=p=>({[n.ERROR]:"error-legacy-badge-filled",[n.WARNING]:"warning-badge-filled",[n.SUCCESS]:"check-circle-badge-filled",[n.PRIORITY]:"priority-badge-filled",[n.DEFAULT]:""})[p]||"";var $=Object.defineProperty,r=(p,i,d,v)=>{for(var s=void 0,c=p.length-1,m;c>=0;c--)(m=p[c])&&(s=m(i,d,s)||s);return s&&$(i,d,s),s};const g=class g extends D(T){constructor(){super(...arguments),this.inputId=`mdc-el-${f()}`,this.required=!1,this.helpTextType=o.VALIDATION,this.toggletipPlacement=o.TOGGLETIP_PLACEMENT,this.toggletipStrategy=o.TOGGLETIP_STRATEGY,this.readonly=!1,this.softDisabled=!1,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?a`<label for="${this.inputId}" id="${o.HEADING_ID}" part="label">${this.label}</label>`:a` <mdc-text
          id="${o.HEADING_ID}"
          tagname="${h.TAGNAME}"
          type="${h.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:l}renderHelpTextIcon(){if(!this.helpText)return l;const i=_(this.helpTextType||o.VALIDATION);return i&&!this.disabled?a`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${i}></mdc-icon>`:l}renderHelpText(){return this.helpText?a`
      <mdc-text
        id="${o.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${h.TAGNAME}
        type=${h.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:l}renderLabel(){if(!this.label)return l;const i=`toggletip-trigger-${f()}`,d=this.disabled||this.softDisabled;return a`<div part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?a`<span part="required-indicator">*</span>`:l}
      <slot name="toggletip">
        ${this.toggletipText?a` <mdc-button
                part="info-icon-btn"
                prefix-icon="${o.INFO_ICON}"
                size="${o.ICON_SIZE}"
                variant="${E.TERTIARY}"
                aria-label="${A(this.infoIconAriaLabel)}"
                ?disabled="${d}"
                ?soft-disabled="${this.softDisabled}"
                id="${i}"
              ></mdc-button>
              <mdc-toggletip
                part="label-toggletip"
                triggerid="${i}"
                id="label-toggletip-id"
                placement="${this.toggletipPlacement}"
                strategy="${this.toggletipStrategy}"
                show-arrow
                >${this.toggletipText}</mdc-toggletip
              >`:l}
      </slot>
    </div>`}renderHelperText(){return this.helpText?a`<div part="help-text-container">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:l}};g.styles=[...T.styles,...S];let t=g;r([e({reflect:!0,type:String})],t.prototype,"label");r([e({type:Boolean,reflect:!0,attribute:"required"})],t.prototype,"required");r([e({reflect:!0,attribute:"help-text-type"})],t.prototype,"helpTextType");r([e({type:String,reflect:!0,attribute:"help-text"})],t.prototype,"helpText");r([e({type:String,reflect:!0,attribute:"toggletip-text"})],t.prototype,"toggletipText");r([e({type:String,reflect:!0,attribute:"toggletip-placement"})],t.prototype,"toggletipPlacement");r([e({type:String,reflect:!0,attribute:"toggletip-strategy"})],t.prototype,"toggletipStrategy");r([e({type:String,reflect:!0,attribute:"info-icon-aria-label"})],t.prototype,"infoIconAriaLabel");r([e({type:Boolean,reflect:!0})],t.prototype,"readonly");r([e({type:Boolean,reflect:!0,attribute:"soft-disabled"})],t.prototype,"softDisabled");export{o as D,t as F,G as T,n as V};
