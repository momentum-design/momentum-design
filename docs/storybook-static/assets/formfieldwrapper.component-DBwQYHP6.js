import{u as x,V as u,q as f,S as y,U as I,h as o,k as a,B as E,E as b,n as t}from"./iframe-B0XJYlue.js";import{t as A}from"./if-defined-CgS7PUg_.js";import{D as v}from"./DisabledMixin-CGwTkMmF.js";import{v as T}from"./v4-CmTdKEVZ.js";const G=x.constructTagName("formfieldwrapper"),n={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},i={VALIDATION:n.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id",ICON_SIZE:20,INFO_ICON:"info-badge-filled",TOGGLETIP_PLACEMENT:"top",TOGGLETIP_STRATEGY:"absolute"},h={TAGNAME:u.SPAN,TYPE:f.BODY_MIDSIZE_REGULAR,HEADER_TYPE:f.BODY_MIDSIZE_BOLD},D=y`
  :host {
    --mdc-label-font-size: var(--mds-font-apps-body-midsize-medium-font-size);
    --mdc-label-font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
    --mdc-label-line-height: var(--mds-font-apps-body-midsize-medium-line-height);
    --mdc-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-help-text-font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    --mdc-help-text-font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    --mdc-help-text-line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    --mdc-help-text-color: var(--mds-color-theme-text-secondary-normal);

    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
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
  :host([disabled])::part(label),
  :host([disabled])::part(help-text-container),
  :host([disabled])::part(required-indicator) {
    color: var(--mds-color-theme-text-primary-disabled);
  }
`,$=[I,D],S=p=>({[n.ERROR]:"error-legacy-badge-filled",[n.WARNING]:"warning-badge-filled",[n.SUCCESS]:"check-circle-badge-filled",[n.PRIORITY]:"priority-badge-filled",[n.DEFAULT]:""})[p]||"";var _=Object.defineProperty,r=(p,l,d,N)=>{for(var s=void 0,c=p.length-1,g;c>=0;c--)(g=p[c])&&(s=g(l,d,s)||s);return s&&_(l,d,s),s};const m=class m extends v(b){constructor(){super(...arguments),this.inputId=`mdc-el-${T()}`,this.required=!1,this.helpTextType=i.VALIDATION,this.toggletipPlacement=i.TOGGLETIP_PLACEMENT,this.toggletipStrategy=i.TOGGLETIP_STRATEGY,this.readonly=!1,this.softDisabled=!1,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?a`<label for="${this.inputId}" id="${i.HEADING_ID}" part="label">${this.label}</label>`:a` <mdc-text
          id="${i.HEADING_ID}"
          tagname="${h.TAGNAME}"
          type="${h.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:o}renderHelpTextIcon(){if(!this.helpText)return o;const l=S(this.helpTextType||i.VALIDATION);return l&&!this.disabled?a`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${l}></mdc-icon>`:o}renderHelpText(){return this.helpText?a`
      <mdc-text
        id="${i.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${h.TAGNAME}
        type=${h.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:o}renderLabel(){if(!this.label)return o;const l=`toggletip-trigger-${T()}`,d=this.disabled||this.softDisabled;return a`<div part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?a`<span part="required-indicator">*</span>`:o}
      <slot name="toggletip">
        ${this.toggletipText?a` <mdc-button
                part="info-icon-btn"
                prefix-icon="${i.INFO_ICON}"
                size="${i.ICON_SIZE}"
                variant="${E.TERTIARY}"
                aria-label="${A(this.infoIconAriaLabel)}"
                ?disabled="${d}"
                ?soft-disabled="${this.softDisabled}"
                id="${l}"
              ></mdc-button>
              <mdc-toggletip
                part="label-toggletip"
                triggerid="${l}"
                id="label-toggletip-id"
                placement="${this.toggletipPlacement}"
                strategy="${this.toggletipStrategy}"
                show-arrow
                >${this.toggletipText}</mdc-toggletip
              >`:o}
      </slot>
    </div>`}renderHelperText(){return this.helpText?a`<div part="help-text-container">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:o}};m.styles=[...b.styles,...$];let e=m;r([t({reflect:!0,type:String})],e.prototype,"label");r([t({type:Boolean,reflect:!0,attribute:"required"})],e.prototype,"required");r([t({reflect:!0,attribute:"help-text-type"})],e.prototype,"helpTextType");r([t({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");r([t({type:String,reflect:!0,attribute:"toggletip-text"})],e.prototype,"toggletipText");r([t({type:String,reflect:!0,attribute:"toggletip-placement"})],e.prototype,"toggletipPlacement");r([t({type:String,reflect:!0,attribute:"toggletip-strategy"})],e.prototype,"toggletipStrategy");r([t({type:String,reflect:!0,attribute:"info-icon-aria-label"})],e.prototype,"infoIconAriaLabel");r([t({type:Boolean,reflect:!0})],e.prototype,"readonly");r([t({type:Boolean,reflect:!0,attribute:"soft-disabled"})],e.prototype,"softDisabled");export{i as D,e as F,G as T,n as V};
