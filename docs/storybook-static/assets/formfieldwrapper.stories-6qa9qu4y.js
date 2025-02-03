import{i as $,D as a,k as o}from"./lit-element-CHllvULs.js";import{u as L,C as T,n as c}from"./index-HW6KrQZO.js";import{h as R}from"./index-BNZgxKMr.js";import{V as U,T as C}from"./text.constants-DJu2q-6E.js";import{D as O}from"./DisabledMixin-DBt9didn.js";import"./index-BOBIh5Rr.js";import"./index-BGkqZMsC.js";import{Q as N}from"./repeat-B3UFROme.js";import{c as H,s as V}from"./commonArgTypes-BluK8w5L.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-5SvKRCBg.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function _(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let u;const P=new Uint8Array(16);function M(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(P)}const j=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),f={randomUUID:j};function z(e,t,h){var l;if(f.randomUUID&&!t&&!e)return f.randomUUID();e=e||{};const s=e.random??((l=e.rng)==null?void 0:l.call(e))??M();if(s.length<16)throw new Error("Random bytes length must be >= 16");return s[6]=s[6]&15|64,s[8]=s[8]&63|128,_(s)}const G=[R,$`
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
  `],Y=L.constructTagName("formfieldwrapper"),n={ERROR:"error",WARNING:"warning",SUCCESS:"success",PRIORITY:"priority",DEFAULT:"default"},g={VALIDATION:n.DEFAULT},v={TAGNAME:U.SPAN,TYPE:C.BODY_MIDSIZE_REGULAR},F=e=>({[n.ERROR]:"error-legacy-filled",[n.WARNING]:"warning-filled",[n.SUCCESS]:"check-circle-filled",[n.PRIORITY]:"priority-circle-filled",[n.DEFAULT]:""})[e]||"";var k=Object.defineProperty,m=(e,t,h,s)=>{for(var l=void 0,x=e.length-1,b;x>=0;x--)(b=e[x])&&(l=b(t,h,l)||l);return l&&k(t,h,l),l};const y=class y extends O(T){constructor(){super(...arguments),this.id=`mdc-input-${z()}`,this.helpTextType=g.VALIDATION}renderLabelElement(){return this.label?o`<label for="${this.id}" class="mdc-label" part="label">${this.label}</label>`:a}renderHelpTextIcon(){if(!this.helpText)return a;const t=F(this.helpTextType||g.VALIDATION);return t&&!this.disabled?o`<mdc-icon part="helper-icon" size="1" length-unit="rem" name=${t}></mdc-icon>`:a}renderHelpText(){return this.helpText?o`
      <mdc-text
        part="help-text"
        tagname=${v.TAGNAME}
        type=${v.TYPE}
      >
        ${this.helpText}
      </mdc-text>
    `:a}renderLabel(){return o`<div class="mdc-label-text" part="label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="label-info"></slot>
    </div>`}renderHelperText(){return o`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`}};y.styles=[...T.styles,...G];let p=y;m([c({reflect:!0,type:String})],p.prototype,"label");m([c({type:String})],p.prototype,"id");m([c({reflect:!0,attribute:"help-text-type"})],p.prototype,"helpTextType");m([c({type:String,reflect:!0,attribute:"help-text"})],p.prototype,"helpText");p.register(Y);class q extends p{render(){return o`
          ${this.renderLabel()}
          <slot></slot>
          ${this.renderHelperText()}
        `}}q.register("mdc-subcomponent-formfieldwrapper");const Q=e=>o` <mdc-subcomponent-formfieldwrapper
    label="${e.label}"
    ?disabled="${e.disabled}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    >
    ${e.children}
    </mdc-subcomponent-formfieldwrapper>`,ie={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:Q,parameters:{badges:["wip"]},argTypes:{...H,...V,"help-text-type":{control:"select",options:Object.values(n)},id:{control:"text"},label:{control:"text"},"help-text":{control:"text"},disabled:{control:"boolean"}}},i={args:{label:"Label (required)","help-text":"Helper text","help-text-type":"default",children:"[Child Component]",disabled:!1}},d={render:()=>o` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${N(Object.values(n),e=>o`
          <mdc-subcomponent-formfieldwrapper help-text-type="${e}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        `)}
    </div>`};var I,A,E;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Label (required)',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]',
    disabled: false
  }
}`,...(E=(A=i.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var S,w,D;d.parameters={...d.parameters,docs:{...(S=d.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-subcomponent-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-subcomponent-formfieldwrapper>
        \`)}
    </div>\`
}`,...(D=(w=d.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const de=["Example","HelperTextTypes"];export{i as Example,d as HelperTextTypes,de as __namedExportsOrder,ie as default};
