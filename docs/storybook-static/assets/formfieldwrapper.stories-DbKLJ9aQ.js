import{i as $,D as i,k as n}from"./lit-element-CHllvULs.js";import{u as D,C as b,n as d}from"./index-HW6KrQZO.js";import{h as R}from"./index-BNZgxKMr.js";import{V as U,T as O}from"./text.constants-DJu2q-6E.js";import"./index-BOBIh5Rr.js";import"./index-BGkqZMsC.js";import{Q as C}from"./repeat-B3UFROme.js";import{c as N,s as H}from"./commonArgTypes-BluK8w5L.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-5SvKRCBg.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function V(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let u;const _=new Uint8Array(16);function P(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(_)}const j=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:j};function z(e,t,h){var l;if(f.randomUUID&&!t&&!e)return f.randomUUID();e=e||{};const p=e.random??((l=e.rng)==null?void 0:l.call(e))??P();if(p.length<16)throw new Error("Random bytes length must be >= 16");return p[6]=p[6]&15|64,p[8]=p[8]&63|128,V(p)}const G=[R,$`
    :host {
      flex-direction: column;
      align-items: flex-start;
      gap: 0.5rem;
    }

    :host([disabled]) .mdc-label,
    :host([disabled]) .mdc-help-text {
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
  `],M=D.constructTagName("formfieldwrapper"),o={ERROR:"error",WARNING:"warning",SUCCESS:"success",PRIORITY:"priority",DEFAULT:"default"},g={VALIDATION:o.DEFAULT},v={TAGNAME:U.SPAN,TYPE:O.BODY_MIDSIZE_REGULAR},Y=e=>({[o.ERROR]:"error-legacy-filled",[o.WARNING]:"warning-filled",[o.SUCCESS]:"check-circle-filled",[o.PRIORITY]:"priority-circle-filled",[o.DEFAULT]:""})[e]||"";var k=Object.defineProperty,m=(e,t,h,p)=>{for(var l=void 0,x=e.length-1,T;x>=0;x--)(T=e[x])&&(l=T(t,h,l)||l);return l&&k(t,h,l),l};const y=class y extends b{constructor(){super(...arguments),this.id=`mdc-input-${z()}`,this.helpTextType=g.VALIDATION}renderLabelElement(){return this.label?n`<label for="${this.id}" class="mdc-label" part="mdc-label">${this.label}</label>`:i}renderHelpTextIcon(){if(!this.helpText)return i;const t=Y(this.helpTextType||g.VALIDATION);return t?n`<mdc-icon part="mdc-helper-icon" size="1" length-unit="rem" name=${t}></mdc-icon>`:i}renderHelpText(){return this.helpText?n`
      <mdc-text
        part="mdc-help-text"
        tagname=${v.TAGNAME}
        type=${v.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:i}renderLabel(){return n`<div class="mdc-label-text" part="mdc-label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="label-info"></slot>
    </div>`}renderHelperText(){return n`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`}render(){return n`
      ${this.renderLabel()}
      <slot></slot>
      ${this.renderHelperText()}
    `}};y.styles=[...b.styles,...G];let a=y;m([d({reflect:!0,type:String})],a.prototype,"label");m([d({type:String})],a.prototype,"id");m([d({reflect:!0,attribute:"help-text-type"})],a.prototype,"helpTextType");m([d({type:String,reflect:!0,attribute:"help-text"})],a.prototype,"helpText");a.register(M);const F=e=>n` <mdc-formfieldwrapper
    label="${e.label}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    >
    ${e.children}
    </mdc-formfieldwrapper>`,pe={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:F,parameters:{badges:["wip"]},argTypes:{...N,...H,"help-text-type":{control:"select",options:Object.values(o)},id:{control:"text"},label:{control:"text"},"help-text":{control:"text"}}},s={args:{label:"Label (required)","help-text":"Helper text","help-text-type":"default",children:"[Child Component]"}},c={render:()=>n` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${C(Object.values(o),e=>n`
          <mdc-formfieldwrapper help-text-type="${e}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-formfieldwrapper>
        `)}
    </div>`};var I,A,E;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Label (required)',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]'
  }
}`,...(E=(A=s.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var S,w,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-formfieldwrapper>
        \`)}
    </div>\`
}`,...(L=(w=c.parameters)==null?void 0:w.docs)==null?void 0:L.source}}};const ae=["Example","HelperTextTypes"];export{s as Example,c as HelperTextTypes,ae as __namedExportsOrder,pe as default};
