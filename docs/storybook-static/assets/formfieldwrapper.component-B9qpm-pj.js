import{i as u,D as e,k as t}from"./lit-element-D5KKan5q.js";import{u as y,C as b,n as a}from"./index-C9z9WAEj.js";import{D as E}from"./DisabledMixin-BZruwOeC.js";import{V as f,T}from"./text.constants-ZF0jM5wn.js";import{a as A}from"./index-DoSuNddn.js";const $=y.constructTagName("formfieldwrapper"),o={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},p={VALIDATION:o.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id"},i={TAGNAME:f.SPAN,TYPE:T.BODY_MIDSIZE_REGULAR,HEADER_TYPE:T.BODY_MIDSIZE_BOLD},I=[A,u`
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
      font-size: var(--mds-font-size-body-midsize);
      line-height: var(--mds-font-lineheight-body-midsize);
      display: flex;
      align-items: center;
      gap: 0.5rem;
      width: 100%;
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
  `],g=n=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.PRIORITY]:"priority-badge-filled",[o.DEFAULT]:""})[n]||"";var D=Object.defineProperty,d=(n,l,m,L)=>{for(var s=void 0,h=n.length-1,x;h>=0;h--)(x=n[h])&&(s=x(l,m,s)||s);return s&&D(l,m,s),s};const c=class c extends E(b){constructor(){super(...arguments),this.id="",this.helpTextType=p.VALIDATION,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?t`<label for="${this.id}" class="mdc-label" part="label">${this.label}</label>`:t` <mdc-text
          id="${p.HEADING_ID}"
          tagname="${i.TAGNAME}"
          type="${i.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:e}renderRequiredLabel(){return this.requiredLabel?t`
      <mdc-text part="required-label" tagname=${i.TAGNAME} type=${i.TYPE}>
        (${this.requiredLabel})
      </mdc-text>
    `:e}renderHelpTextIcon(){if(!this.helpText)return e;const l=g(this.helpTextType||p.VALIDATION);return l&&!this.disabled?t`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${l}></mdc-icon>`:e}renderHelpText(){return this.helpText?t`
      <mdc-text
        id="${p.HELPER_TEXT_ID}"
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
    </div>`:e}};c.styles=[...b.styles,...I];let r=c;d([a({reflect:!0,type:String})],r.prototype,"label");d([a({type:String,reflect:!0,attribute:"required-label"})],r.prototype,"requiredLabel");d([a({type:String})],r.prototype,"id");d([a({reflect:!0,attribute:"help-text-type"})],r.prototype,"helpTextType");d([a({type:String,reflect:!0,attribute:"help-text"})],r.prototype,"helpText");export{p as D,r as F,$ as T,o as V};
