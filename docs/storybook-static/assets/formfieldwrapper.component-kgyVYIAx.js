import{u,i as f,D as l,k as i,C as T,n as o}from"./iframe-BkJ5kS8N.js";import{t as I}from"./if-defined-KNVCfepo.js";import{D as y}from"./DisabledMixin-rtnkKzcf.js";import{B as E}from"./button.constants-bHBvS2Vh.js";import{V as A,T as x}from"./index-DPSnH-H_.js";import{h as _}from"./index-CF79w7L3.js";import{v as b}from"./v4-CmTdKEVZ.js";const C=u.constructTagName("formfieldwrapper"),p={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},r={VALIDATION:p.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id",ICON_SIZE:20,INFO_ICON:"info-badge-filled",TOGGLETIP_PLACEMENT:"top",TOGGLETIP_STRATEGY:"absolute"},d={TAGNAME:A.SPAN,TYPE:x.BODY_MIDSIZE_REGULAR,HEADER_TYPE:x.BODY_MIDSIZE_BOLD},D=[_,f`
    :host {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    :host([disabled]),
    :host([disabled]) .mdc-label,
    :host([disabled]) .mdc-help-text,
    :host([disabled])::part(required-indicator),
    :host([disabled][help-text-type='error']) .mdc-help-text,
    :host([disabled][help-text-type='success']) .mdc-help-text,
    :host([disabled][help-text-type='warning']) .mdc-help-text,
    :host([disabled][help-text-type='priority']) .mdc-help-text {
      color: var(--mds-color-theme-text-primary-disabled);
    }

    :host::part(required-indicator) {
      color: var(--mds-color-theme-text-error-normal);
    }

    .mdc-label-text,
    .mdc-help-text {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
    }

    .mdc-label,
    .mdc-help-text {
      font-size: var(--mds-font-apps-body-midsize-regular-font-size);
      font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
      line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    }

    .mdc-label {
      color: var(--mds-color-theme-text-primary-normal);
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .mdc-help-text {
      color: var(--mds-color-theme-text-secondary-normal);
    }

    :host::part(info-icon-btn) {
      align-self: flex-start;
    }

    :host([help-text-type='error']) .mdc-help-text {
      color: var(--mds-color-theme-text-error-normal);
    }
    :host([help-text-type='warning']) .mdc-help-text {
      color: var(--mds-color-theme-text-warning-normal);
    }
    :host([help-text-type='success']) .mdc-help-text {
      color: var(--mds-color-theme-text-success-normal);
    }
    :host([help-text-type='priority']) .mdc-help-text {
      color: var(--mds-color-theme-text-accent-normal);
    }
  `],S=n=>({[p.ERROR]:"error-legacy-badge-filled",[p.WARNING]:"warning-badge-filled",[p.SUCCESS]:"check-circle-badge-filled",[p.PRIORITY]:"priority-badge-filled",[p.DEFAULT]:""})[n]||"";var $=Object.defineProperty,a=(n,t,m,N)=>{for(var s=void 0,c=n.length-1,g;c>=0;c--)(g=n[c])&&(s=g(t,m,s)||s);return s&&$(t,m,s),s};const h=class h extends y(T){constructor(){super(...arguments),this.inputId=`mdc-el-${b()}`,this.required=!1,this.helpTextType=r.VALIDATION,this.toggletipPlacement=r.TOGGLETIP_PLACEMENT,this.toggletipStrategy=r.TOGGLETIP_STRATEGY,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?i`<label for="${this.inputId}" id="${r.HEADING_ID}" class="mdc-label" part="label"
          >${this.label}</label
        >`:i` <mdc-text
          id="${r.HEADING_ID}"
          tagname="${d.TAGNAME}"
          type="${d.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:l}renderHelpTextIcon(){if(!this.helpText)return l;const t=S(this.helpTextType||r.VALIDATION);return t&&!this.disabled?i`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${t}></mdc-icon>`:l}renderHelpText(){return this.helpText?i`
      <mdc-text
        id="${r.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${d.TAGNAME}
        type=${d.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:l}renderLabel(){if(!this.label)return l;const t=`toggletip-trigger-${b()}`;return i`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?i`<span part="required-indicator">*</span>`:l}
      <slot name="toggletip">
        ${this.toggletipText?i` <mdc-button
                part="info-icon-btn"
                prefix-icon="${r.INFO_ICON}"
                size="${r.ICON_SIZE}"
                variant="${E.TERTIARY}"
                aria-label="${I(this.infoIconAriaLabel)}"
                ?disabled="${this.disabled}"
                id="${t}"
              ></mdc-button>
              <mdc-toggletip
                part="label-toggletip"
                triggerid="${t}"
                id="label-toggletip-id"
                placement="${this.toggletipPlacement}"
                strategy="${this.toggletipStrategy}"
                show-arrow
                >${this.toggletipText}</mdc-toggletip
              >`:l}
      </slot>
    </div>`}renderHelperText(){return this.helpText?i`<div class="mdc-help-text" part="help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:l}};h.styles=[...T.styles,...D];let e=h;a([o({reflect:!0,type:String})],e.prototype,"label");a([o({type:Boolean,reflect:!0,attribute:"required"})],e.prototype,"required");a([o({reflect:!0,attribute:"help-text-type"})],e.prototype,"helpTextType");a([o({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");a([o({type:String,reflect:!0,attribute:"toggletip-text"})],e.prototype,"toggletipText");a([o({type:String,reflect:!0,attribute:"toggletip-placement"})],e.prototype,"toggletipPlacement");a([o({type:String,reflect:!0,attribute:"toggletip-strategy"})],e.prototype,"toggletipStrategy");a([o({type:String,reflect:!0,attribute:"info-icon-aria-label"})],e.prototype,"infoIconAriaLabel");export{r as D,e as F,C as T,p as V};
