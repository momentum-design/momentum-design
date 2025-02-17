import{i as I,D as d,k as i}from"./lit-element-CHllvULs.js";import{u as A,C as b,n as a}from"./index-HW6KrQZO.js";import{h as E}from"./index-MYSkQ1zX.js";import{V as v,T as f}from"./text.constants-DJu2q-6E.js";import{D as R}from"./DisabledMixin-DBt9didn.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function S(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let u;const D=new Uint8Array(16);function L(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(D)}const U=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),T={randomUUID:U};function w(e,t,m){var l;if(T.randomUUID&&!t&&!e)return T.randomUUID();e=e||{};const n=e.random??((l=e.rng)==null?void 0:l.call(e))??L();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,S(n)}const N=[E,I`
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
  `],q=A.constructTagName("formfieldwrapper"),s={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},g={VALIDATION:s.DEFAULT},p={TAGNAME:v.SPAN,TYPE:f.BODY_MIDSIZE_REGULAR},$=e=>({[s.ERROR]:"error-legacy-badge-filled",[s.WARNING]:"warning-badge-filled",[s.SUCCESS]:"check-circle-badge-filled",[s.PRIORITY]:"priority-badge-filled",[s.DEFAULT]:""})[e]||"";var O=Object.defineProperty,c=(e,t,m,n)=>{for(var l=void 0,h=e.length-1,y;h>=0;h--)(y=e[h])&&(l=y(t,m,l)||l);return l&&O(t,m,l),l};const x=class x extends R(b){constructor(){super(...arguments),this.id=`mdc-input-${w()}`,this.helpTextType=g.VALIDATION}renderLabelElement(){return this.label?i`<label for="${this.id}" class="mdc-label" part="label">${this.label}</label>`:d}renderRequiredLabel(){return this.requiredLabel?i`
      <mdc-text
        part="required-label"
        tagname=${p.TAGNAME}
        type=${p.TYPE}
      >
        (${this.requiredLabel})
      </mdc-text>
    `:d}renderHelpTextIcon(){if(!this.helpText)return d;const t=$(this.helpTextType||g.VALIDATION);return t&&!this.disabled?i`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${t}></mdc-icon>`:d}renderHelpText(){return this.helpText?i`
      <mdc-text
        part="help-text"
        tagname=${p.TAGNAME}
        type=${p.TYPE}
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
    </div>`}};x.styles=[...b.styles,...N];let o=x;c([a({reflect:!0,type:String})],o.prototype,"label");c([a({type:String,reflect:!0,attribute:"required-label"})],o.prototype,"requiredLabel");c([a({type:String})],o.prototype,"id");c([a({reflect:!0,attribute:"help-text-type"})],o.prototype,"helpTextType");c([a({type:String,reflect:!0,attribute:"help-text"})],o.prototype,"helpText");export{o as F,q as T,s as V};
