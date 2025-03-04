import{i as u,D as s,k as e}from"./lit-element-CHllvULs.js";import{u as y,C as T,n as a}from"./index-HW6KrQZO.js";import{D as E}from"./DisabledMixin-DBt9didn.js";import{V as f,T as b}from"./text.constants-DJu2q-6E.js";import{h as A}from"./index-BGjwsboe.js";const $=y.constructTagName("formfieldwrapper"),o={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},p={VALIDATION:o.DEFAULT,HELPER_TEXT_ID:"helper-text-id",HEADING_ID:"heading-id"},i={TAGNAME:f.SPAN,TYPE:b.BODY_MIDSIZE_REGULAR,HEADER_TYPE:b.BODY_MIDSIZE_BOLD},I=[A,u`
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
  `],g=n=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.PRIORITY]:"priority-badge-filled",[o.DEFAULT]:""})[n]||"";var D=Object.defineProperty,d=(n,r,m,L)=>{for(var l=void 0,h=n.length-1,x;h>=0;h--)(x=n[h])&&(l=x(r,m,l)||l);return l&&D(r,m,l),l};const c=class c extends E(T){constructor(){super(...arguments),this.id="",this.helpTextType=p.VALIDATION,this.shouldRenderLabel=!0}renderLabelElement(){return this.label?this.shouldRenderLabel?e`<label for="${this.id}" class="mdc-label" part="label">${this.label}</label>`:e` <mdc-text
          id="${p.HEADING_ID}"
          tagname="${i.TAGNAME}"
          type="${i.HEADER_TYPE}"
          part="label"
          >${this.label}</mdc-text
        >`:s}renderRequiredLabel(){return this.requiredLabel?e`
      <mdc-text part="required-label" tagname=${i.TAGNAME} type=${i.TYPE}>
        (${this.requiredLabel})
      </mdc-text>
    `:s}renderHelpTextIcon(){if(!this.helpText)return s;const r=g(this.helpTextType||p.VALIDATION);return r&&!this.disabled?e`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${r}></mdc-icon>`:s}renderHelpText(){return this.helpText?e`
      <mdc-text
        id="${p.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${i.TAGNAME}
        type=${i.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:s}renderLabel(){return e`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="required-label">${this.renderRequiredLabel()}</slot>
      <slot name="label-info"></slot>
    </div>`}renderHelperText(){return this.helpText?e`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`:s}};c.styles=[...T.styles,...I];let t=c;d([a({reflect:!0,type:String})],t.prototype,"label");d([a({type:String,reflect:!0,attribute:"required-label"})],t.prototype,"requiredLabel");d([a({type:String})],t.prototype,"id");d([a({reflect:!0,attribute:"help-text-type"})],t.prototype,"helpTextType");d([a({type:String,reflect:!0,attribute:"help-text"})],t.prototype,"helpText");export{p as D,t as F,$ as T,o as V};
