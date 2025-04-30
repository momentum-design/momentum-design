import{i as T,D as e,k as t}from"./lit-element-D5KKan5q.js";import{u as f,C as b,n as d}from"./index-C9z9WAEj.js";import{D as y}from"./DisabledMixin-BZruwOeC.js";import{V as E,T as u}from"./text.constants-ZF0jM5wn.js";import{h as I}from"./index-CcXofQbA.js";const $=f.constructTagName("formfieldwrapper"),o={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},a={VALIDATION:o.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id"},i={TAGNAME:E.SPAN,TYPE:u.BODY_MIDSIZE_REGULAR,HEADER_TYPE:u.BODY_MIDSIZE_BOLD},g=[I,T`
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
  `],A=p=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.PRIORITY]:"priority-badge-filled",[o.DEFAULT]:""})[p]||"";var D=Object.defineProperty,n=(p,l,m,L)=>{for(var s=void 0,h=p.length-1,x;h>=0;h--)(x=p[h])&&(s=x(l,m,s)||s);return s&&D(l,m,s),s};const c=class c extends y(b){constructor(){super(...arguments),this.id="",this.helpTextType=a.VALIDATION,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?t`<label for="${this.id}" id="${a.HEADING_ID}" class="mdc-label" part="label">${this.label}</label>`:t` <mdc-text
          id="${a.HEADING_ID}"
          tagname="${i.TAGNAME}"
          type="${i.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:e}renderRequiredLabel(){return this.requiredLabel?t`
      <mdc-text part="required-label" tagname=${i.TAGNAME} type=${i.TYPE}>
        (${this.requiredLabel})
      </mdc-text>
    `:e}renderHelpTextIcon(){if(!this.helpText)return e;const l=A(this.helpTextType||a.VALIDATION);return l&&!this.disabled?t`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${l}></mdc-icon>`:e}renderHelpText(){return this.helpText?t`
      <mdc-text
        id="${a.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${i.TAGNAME}
        type=${i.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:e}renderLabel(){return this.label?t`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="required-label">${this.renderRequiredLabel()}</slot>
      <slot name="label-info"></slot>
    </div>`:e}renderHelperText(){return this.helpText?t`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:e}};c.styles=[...b.styles,...g];let r=c;n([d({reflect:!0,type:String})],r.prototype,"label");n([d({type:String,reflect:!0,attribute:"required-label"})],r.prototype,"requiredLabel");n([d({type:String})],r.prototype,"id");n([d({reflect:!0,attribute:"help-text-type"})],r.prototype,"helpTextType");n([d({type:String,reflect:!0,attribute:"help-text"})],r.prototype,"helpText");export{a as D,r as F,$ as T,o as V};
