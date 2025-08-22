import{i as b,D as t,k as r}from"./lit-element-D5KKan5q.js";import{n as i}from"./property-Bj3TGwkg.js";import{t as u}from"./if-defined-D5BV9-c0.js";import{u as f,C as T}from"./provider.component-DrWB4byV.js";import{D as I}from"./DisabledMixin-B-Cnza7-.js";import{B as E}from"./button.constants-BBlkZKjZ.js";import{V as y,T as g}from"./index-DeEenWCE.js";import{h as A}from"./index-B-GnYs90.js";import{v as D}from"./v4-CmTdKEVZ.js";const M=f.constructTagName("formfieldwrapper"),p={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},l={VALIDATION:p.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id",ICON_SIZE:20,INFO_ICON:"info-badge-filled",TOGGLETIP_PLACEMENT:"top"},d={TAGNAME:y.SPAN,TYPE:g.BODY_MIDSIZE_REGULAR,HEADER_TYPE:g.BODY_MIDSIZE_BOLD},N=[A,b`
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
  `],_=n=>({[p.ERROR]:"error-legacy-badge-filled",[p.WARNING]:"warning-badge-filled",[p.SUCCESS]:"check-circle-badge-filled",[p.PRIORITY]:"priority-badge-filled",[p.DEFAULT]:""})[n]||"";var v=Object.defineProperty,o=(n,a,m,L)=>{for(var s=void 0,c=n.length-1,x;c>=0;c--)(x=n[c])&&(s=x(a,m,s)||s);return s&&v(a,m,s),s};const h=class h extends I(T){constructor(){super(...arguments),this.inputId=`mdc-el-${D()}`,this.required=!1,this.helpTextType=l.VALIDATION,this.toggletipPlacement=l.TOGGLETIP_PLACEMENT,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?r`<label for="${this.inputId}" id="${l.HEADING_ID}" class="mdc-label" part="label">${this.label}</label>`:r` <mdc-text
          id="${l.HEADING_ID}"
          tagname="${d.TAGNAME}"
          type="${d.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:t}renderHelpTextIcon(){if(!this.helpText)return t;const a=_(this.helpTextType||l.VALIDATION);return a&&!this.disabled?r`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${a}></mdc-icon>`:t}renderHelpText(){return this.helpText?r`
      <mdc-text
        id="${l.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${d.TAGNAME}
        type=${d.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:t}renderLabel(){return this.label?r`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?r`<span part="required-indicator">*</span>`:t}
      ${this.toggletipText?r` <mdc-button
              part="info-icon-btn"
              prefix-icon="${l.INFO_ICON}"
              size="${l.ICON_SIZE}"
              variant="${E.TERTIARY}"
              aria-label="${u(this.infoIconAriaLabel)}"
              id="info-icon-id"
            ></mdc-button>
            <mdc-toggletip
              part="label-toggletip"
              triggerid="info-icon-id"
              id="label-toggletip-id"
              placement="${this.toggletipPlacement}"
              show-arrow
              >${this.toggletipText}</mdc-toggletip
            >`:t}
    </div>`:t}renderHelperText(){return this.helpText?r`<div class="mdc-help-text" part="help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:t}};h.styles=[...T.styles,...N];let e=h;o([i({reflect:!0,type:String})],e.prototype,"label");o([i({type:Boolean,reflect:!0,attribute:"required"})],e.prototype,"required");o([i({reflect:!0,attribute:"help-text-type"})],e.prototype,"helpTextType");o([i({type:String,reflect:!0,attribute:"help-text"})],e.prototype,"helpText");o([i({type:String,reflect:!0,attribute:"toggletip-text"})],e.prototype,"toggletipText");o([i({type:String,reflect:!0,attribute:"toggletip-placement"})],e.prototype,"toggletipPlacement");o([i({type:String,reflect:!0,attribute:"info-icon-aria-label"})],e.prototype,"infoIconAriaLabel");export{l as D,e as F,M as T,p as V};
