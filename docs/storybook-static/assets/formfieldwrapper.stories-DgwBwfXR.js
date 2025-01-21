import{i as N,D as a,k as l}from"./lit-element-CHllvULs.js";import{u as O,C as T,n as s}from"./index-HW6KrQZO.js";import{h as w}from"./index-BW6Y21yA.js";import{V as D,T as R}from"./text.constants-DJu2q-6E.js";import"./index-CsrlL5z4.js";import"./index-BGkqZMsC.js";import{Q as C}from"./repeat-B3UFROme.js";import{c as U,s as _}from"./commonArgTypes-BluK8w5L.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-5SvKRCBg.js";const r=[];for(let e=0;e<256;++e)r.push((e+256).toString(16).slice(1));function H(e,t=0){return(r[e[t+0]]+r[e[t+1]]+r[e[t+2]]+r[e[t+3]]+"-"+r[e[t+4]]+r[e[t+5]]+"-"+r[e[t+6]]+r[e[t+7]]+"-"+r[e[t+8]]+r[e[t+9]]+"-"+r[e[t+10]]+r[e[t+11]]+r[e[t+12]]+r[e[t+13]]+r[e[t+14]]+r[e[t+15]]).toLowerCase()}let u;const V=new Uint8Array(16);function M(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(V)}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),g={randomUUID:P};function z(e,t,h){var n;if(g.randomUUID&&!t&&!e)return g.randomUUID();e=e||{};const p=e.random??((n=e.rng)==null?void 0:n.call(e))??M();if(p.length<16)throw new Error("Random bytes length must be >= 16");return p[6]=p[6]&15|64,p[8]=p[8]&63|128,H(p)}const j=[w,N`
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
  `],G=O.constructTagName("formfieldwrapper"),o={ERROR:"error",WARNING:"warning",SUCCESS:"success",PRIORITY:"priority",DEFAULT:"default"},y={NAME:void 0,INFO_ICON_NAME:"info-circle-filled",SIZE:1,VALIDATION:o.DEFAULT},I={TAGNAME:D.SPAN,TYPE:R.BODY_MIDSIZE_REGULAR},Y=e=>({[o.ERROR]:"error-legacy-filled",[o.WARNING]:"warning-filled",[o.SUCCESS]:"check-circle-filled",[o.PRIORITY]:"priority-circle-filled",[o.DEFAULT]:""})[e]||"";var F=Object.defineProperty,c=(e,t,h,p)=>{for(var n=void 0,x=e.length-1,f;x>=0;x--)(f=e[x])&&(n=f(t,h,n)||n);return n&&F(t,h,n),n};const b=class b extends T{constructor(){super(...arguments),this.id=`mdc-input-${z()}`,this.helpTextType=y.VALIDATION}renderLabelElement(){return this.label?l`<label for="${this.id}" class="mdc-label">${this.label}</label>`:a}renderLabelInfoToggleTip(){return this.labelInfoText?l`<mdc-icon name=${y.INFO_ICON_NAME} size="1.25" length-unit="rem"></mdc-icon>`:a}renderHelpTextIcon(){if(!this.helpText)return a;const t=Y(this.helpTextType||y.VALIDATION);return t?l`<mdc-icon size="1" length-unit="rem" name=${t}></mdc-icon>`:a}renderHelpText(){return this.helpText?l`
      <mdc-text tagname=${I.TAGNAME} type=${I.TYPE}> ${this.helpText} </mdc-text>
    `:a}renderLabel(){return l`<div class="mdc-label-text" part="mdc-label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="label-icon">${this.renderLabelInfoToggleTip()}</slot>
    </div>`}renderHelperText(){return l`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`}render(){return l`
      ${this.renderLabel()}
      <slot></slot>
      ${this.renderHelperText()}
    `}};b.styles=[...T.styles,...j];let i=b;c([s({reflect:!0,type:String})],i.prototype,"label");c([s({type:String})],i.prototype,"id");c([s({reflect:!0,attribute:"help-text-type"})],i.prototype,"helpTextType");c([s({type:String,reflect:!0,attribute:"help-text"})],i.prototype,"helpText");c([s({type:String,attribute:"label-info-text"})],i.prototype,"labelInfoText");i.register(G);const k=e=>l` <mdc-formfieldwrapper
    label="${e.label}"
    label-info-text="${e["label-info-text"]}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    >
    ${e.children}
    </mdc-formfieldwrapper>`,ie={title:"Internal/formfieldwrapper",tags:["autodocs"],component:"mdc-formfieldwrapper",render:k,parameters:{badges:["wip"]},argTypes:{...U,..._,"help-text-type":{control:"select",options:Object.values(o)},id:{control:"text"},label:{control:"text"},"label-info-text":{control:"text"},"help-text":{control:"text"}}},d={args:{label:"Label (required)","label-info-text":"Label info text","help-text":"Helper text","help-text-type":"default",children:"[Child Component]"}},m={render:()=>l` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${C(Object.values(o),e=>l`
          <mdc-formfieldwrapper help-text-type="${e}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-formfieldwrapper>
        `)}
    </div>`};var v,A,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label (required)',
    'label-info-text': 'Label info text',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]'
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var L,S,$;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-formfieldwrapper help-text-type="\${validation}" label="Label" help-text="Helper text">
            [Child component]
          </mdc-formfieldwrapper>
        \`)}
    </div>\`
}`,...($=(S=m.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const pe=["Example","HelperTextTypes"];export{d as Example,m as HelperTextTypes,pe as __namedExportsOrder,ie as default};
