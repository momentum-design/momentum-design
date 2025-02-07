import{i as I,D as d,k as i}from"./lit-element-CHllvULs.js";import{u as A,C as y,n as a}from"./index-HW6KrQZO.js";import{h as E}from"./index-MYSkQ1zX.js";import{V as v,T as D}from"./text.constants-DJu2q-6E.js";import{D as S}from"./DisabledMixin-DBt9didn.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function R(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let h;const f=new Uint8Array(16);function U(){if(!h){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");h=crypto.getRandomValues.bind(crypto)}return h(f)}const L=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),b={randomUUID:L};function N(e,t,p){var l;if(b.randomUUID&&!t&&!e)return b.randomUUID();e=e||{};const n=e.random??((l=e.rng)==null?void 0:l.call(e))??U();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,R(n)}const w=[E,I`
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
    }

    .mdc-label {
      color: var(--mds-color-theme-text-primary-normal);
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
  `],z=A.constructTagName("formfieldwrapper"),o={DEFAULT:"default",ERROR:"error",PRIORITY:"priority",SUCCESS:"success",WARNING:"warning"},T={VALIDATION:o.DEFAULT},g={TAGNAME:v.SPAN,TYPE:D.BODY_MIDSIZE_REGULAR},O=e=>({[o.ERROR]:"error-legacy-badge-filled",[o.WARNING]:"warning-badge-filled",[o.SUCCESS]:"check-circle-badge-filled",[o.PRIORITY]:"priority-badge-filled",[o.DEFAULT]:""})[e]||"";var V=Object.defineProperty,c=(e,t,p,n)=>{for(var l=void 0,m=e.length-1,u;m>=0;m--)(u=e[m])&&(l=u(t,p,l)||l);return l&&V(t,p,l),l};const x=class x extends S(y){constructor(){super(...arguments),this.id=`mdc-input-${N()}`,this.helpTextType=T.VALIDATION}renderLabelElement(){return this.label?i`<label for="${this.id}" class="mdc-label" part="label">${this.label}</label>`:d}renderHelpTextIcon(){if(!this.helpText)return d;const t=O(this.helpTextType||T.VALIDATION);return t&&!this.disabled?i`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${t}></mdc-icon>`:d}renderHelpText(){return this.helpText?i`
      <mdc-text
        part="help-text"
        tagname=${g.TAGNAME}
        type=${g.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:d}renderLabel(){return i`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="label-info"></slot>
    </div>`}renderHelperText(){return i`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`}};x.styles=[...y.styles,...w];let s=x;c([a({reflect:!0,type:String})],s.prototype,"label");c([a({type:String})],s.prototype,"id");c([a({reflect:!0,attribute:"help-text-type"})],s.prototype,"helpTextType");c([a({type:String,reflect:!0,attribute:"help-text"})],s.prototype,"helpText");export{s as F,z as T,o as V};
