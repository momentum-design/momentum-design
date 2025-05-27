import{i as b,D as e,k as t}from"./lit-element-D5KKan5q.js";import{u as f,C as T,n as a}from"./index-C9z9WAEj.js";import{D as y}from"./DisabledMixin-BZruwOeC.js";import{V as E,T as u}from"./text.constants-ZF0jM5wn.js";import{h as I}from"./index-CcXofQbA.js";const $=f.constructTagName("formfieldwrapper"),s={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},i={VALIDATION:s.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id"},n={TAGNAME:E.SPAN,TYPE:u.BODY_MIDSIZE_REGULAR,HEADER_TYPE:u.BODY_MIDSIZE_BOLD},g=[I,b`
    :host {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }
    :host([disabled]),
    :host([disabled]) .mdc-label,
    :host([disabled]) .mdc-help-text,
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

    .mdc-label, .mdc-help-text{
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
  `],A=p=>({[s.ERROR]:"error-legacy-badge-filled",[s.WARNING]:"warning-badge-filled",[s.SUCCESS]:"check-circle-badge-filled",[s.PRIORITY]:"priority-badge-filled",[s.DEFAULT]:""})[p]||"";var D=Object.defineProperty,d=(p,l,m,v)=>{for(var o=void 0,h=p.length-1,x;h>=0;h--)(x=p[h])&&(o=x(l,m,o)||o);return o&&D(l,m,o),o};const c=class c extends y(T){constructor(){super(...arguments),this.required=!1,this.id="",this.helpTextType=i.VALIDATION,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?t`<label for="${this.id}" id="${i.HEADING_ID}" class="mdc-label" part="label">${this.label}</label>`:t` <mdc-text
          id="${i.HEADING_ID}"
          tagname="${n.TAGNAME}"
          type="${n.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:e}renderHelpTextIcon(){if(!this.helpText)return e;const l=A(this.helpTextType||i.VALIDATION);return l&&!this.disabled?t`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${l}></mdc-icon>`:e}renderHelpText(){return this.helpText?t`
      <mdc-text
        id="${i.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${n.TAGNAME}
        type=${n.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:e}renderLabel(){return this.label?t`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      ${this.required?t`<span part="required-indicator">*</span>`:e}
      <slot name="label-info"></slot>
    </div>`:e}renderHelperText(){return this.helpText?t`<div class="mdc-help-text" part="help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:e}};c.styles=[...T.styles,...g];let r=c;d([a({reflect:!0,type:String})],r.prototype,"label");d([a({type:Boolean,reflect:!0,attribute:"required"})],r.prototype,"required");d([a({type:String})],r.prototype,"id");d([a({reflect:!0,attribute:"help-text-type"})],r.prototype,"helpTextType");d([a({type:String,reflect:!0,attribute:"help-text"})],r.prototype,"helpText");export{i as D,r as F,$ as T,s as V};
