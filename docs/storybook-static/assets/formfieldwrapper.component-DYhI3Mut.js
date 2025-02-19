import{i as I,D as d,k as i}from"./lit-element-CHllvULs.js";import{u as E,C as T,n as a}from"./index-HW6KrQZO.js";import{D as A}from"./DisabledMixin-DBt9didn.js";import{V as v,T as D}from"./text.constants-DJu2q-6E.js";import{h as R}from"./index-MYSkQ1zX.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function f(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let u;const L=new Uint8Array(16);function S(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(L)}const U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:U};function w(e,t,h){var l;if(g.randomUUID&&!t&&!e)return g.randomUUID();e=e||{};const n=e.random??((l=e.rng)==null?void 0:l.call(e))??S();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,f(n)}const M=E.constructTagName("formfieldwrapper"),s={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},x={VALIDATION:s.DEFAULT,HELPER_TEXT_ID:"helper-text-id"},c={TAGNAME:v.SPAN,TYPE:D.BODY_MIDSIZE_REGULAR},N=[R,I`
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
  `],$=e=>({[s.ERROR]:"error-legacy-badge-filled",[s.WARNING]:"warning-badge-filled",[s.SUCCESS]:"check-circle-badge-filled",[s.PRIORITY]:"priority-badge-filled",[s.DEFAULT]:""})[e]||"";var _=Object.defineProperty,p=(e,t,h,n)=>{for(var l=void 0,m=e.length-1,b;m>=0;m--)(b=e[m])&&(l=b(t,h,l)||l);return l&&_(t,h,l),l};const y=class y extends A(T){constructor(){super(...arguments),this.id=`mdc-input-${w()}`,this.helpTextType=x.VALIDATION}renderLabelElement(){return this.label?i`<label for="${this.id}" class="mdc-label" part="label">${this.label}</label>`:d}renderRequiredLabel(){return this.requiredLabel?i`
      <mdc-text
        part="required-label"
        tagname=${c.TAGNAME}
        type=${c.TYPE}
      >
        (${this.requiredLabel})
      </mdc-text>
    `:d}renderHelpTextIcon(){if(!this.helpText)return d;const t=$(this.helpTextType||x.VALIDATION);return t&&!this.disabled?i`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${t}></mdc-icon>`:d}renderHelpText(){return this.helpText?i`
      <mdc-text
        id="${x.HELPER_TEXT_ID}"
        part="help-text"
        tagname=${c.TAGNAME}
        type=${c.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:d}renderLabel(){return i`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="required-label">${this.renderRequiredLabel()}</slot>
      <slot name="label-info"></slot>
    </div>`}renderHelperText(){return i`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`}};y.styles=[...T.styles,...N];let o=y;p([a({reflect:!0,type:String})],o.prototype,"label");p([a({type:String,reflect:!0,attribute:"required-label"})],o.prototype,"requiredLabel");p([a({type:String})],o.prototype,"id");p([a({reflect:!0,attribute:"help-text-type"})],o.prototype,"helpTextType");p([a({type:String,reflect:!0,attribute:"help-text"})],o.prototype,"helpText");export{x as D,o as F,M as T,s as V};
