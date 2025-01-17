import{i as N,D as p,k as r}from"./lit-element-CHllvULs.js";import{u as O,C as g,n as s}from"./index-HW6KrQZO.js";import{h as D}from"./index-BW6Y21yA.js";import{V as R,T as C}from"./text.constants-DJu2q-6E.js";import"./index-CsrlL5z4.js";import"./index-DcQ7scWP.js";import{Q as U}from"./repeat-B3UFROme.js";import{c as _,s as H}from"./commonArgTypes-BluK8w5L.js";import"./state-CWckTc1X.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-5SvKRCBg.js";const l=[];for(let e=0;e<256;++e)l.push((e+256).toString(16).slice(1));function V(e,t=0){return(l[e[t+0]]+l[e[t+1]]+l[e[t+2]]+l[e[t+3]]+"-"+l[e[t+4]]+l[e[t+5]]+"-"+l[e[t+6]]+l[e[t+7]]+"-"+l[e[t+8]]+l[e[t+9]]+"-"+l[e[t+10]]+l[e[t+11]]+l[e[t+12]]+l[e[t+13]]+l[e[t+14]]+l[e[t+15]]).toLowerCase()}let u;const w=new Uint8Array(16);function M(){if(!u){if(typeof crypto>"u"||!crypto.getRandomValues)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");u=crypto.getRandomValues.bind(crypto)}return u(w)}const P=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),I={randomUUID:P};function z(e,t,h){var n;if(I.randomUUID&&!t&&!e)return I.randomUUID();e=e||{};const i=e.random??((n=e.rng)==null?void 0:n.call(e))??M();if(i.length<16)throw new Error("Random bytes length must be >= 16");return i[6]=i[6]&15|64,i[8]=i[8]&63|128,V(i)}const j=[D,N`
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
  `],F=O.constructTagName("labelandhelper"),o={ERROR:"error",WARNING:"warning",SUCCESS:"success",PRIORITY:"priority",DEFAULT:"default"},y={NAME:void 0,INFO_ICON_NAME:"info-circle-filled",SIZE:1,VALIDATION:o.DEFAULT},f={TAGNAME:R.SPAN,TYPE:C.BODY_MIDSIZE_REGULAR},G=e=>({[o.ERROR]:"error-legacy-filled",[o.WARNING]:"warning-filled",[o.SUCCESS]:"check-circle-filled",[o.PRIORITY]:"priority-circle-filled",[o.DEFAULT]:""})[e]||"";var Y=Object.defineProperty,c=(e,t,h,i)=>{for(var n=void 0,x=e.length-1,T;x>=0;x--)(T=e[x])&&(n=T(t,h,n)||n);return n&&Y(t,h,n),n};const b=class b extends g{constructor(){super(...arguments),this.id=`mdc-input-${z()}`,this.helpTextType=y.VALIDATION}renderLabelElement(){return this.label?r`<label for="${this.id}" class="mdc-label">${this.label}</label>`:p}renderLabelInfoToggleTip(){return this.labelInfoText?r`<mdc-icon name=${y.INFO_ICON_NAME} size="1.25" length-unit="rem"></mdc-icon>`:p}renderHelpTextIcon(){if(!this.helpText)return p;const t=G(this.helpTextType||y.VALIDATION);return t?r`<mdc-icon size="1" length-unit="rem" name=${t}></mdc-icon>`:p}renderHelpText(){return this.helpText?r`
      <mdc-text tagname=${f.TAGNAME} type=${f.TYPE}> ${this.helpText} </mdc-text>
    `:p}renderLabel(){return r`<div class="mdc-label-text" part="mdc-label-text">
      <slot name="label">${this.renderLabelElement()}</slot>
      <slot name="label-icon">${this.renderLabelInfoToggleTip()}</slot>
    </div>`}renderHelperText(){return r`<div class="mdc-help-text" part="mdc-help-text">
      <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
      <slot name="help-text">${this.renderHelpText()}</slot>
    </div>`}render(){return r`
      ${this.renderLabel()}
      <slot></slot>
      ${this.renderHelperText()}
    `}};b.styles=[...g.styles,...j];let a=b;c([s({reflect:!0,type:String})],a.prototype,"label");c([s({type:String})],a.prototype,"id");c([s({reflect:!0,attribute:"help-text-type"})],a.prototype,"helpTextType");c([s({type:String,reflect:!0,attribute:"help-text"})],a.prototype,"helpText");c([s({type:String,attribute:"label-info-text"})],a.prototype,"labelInfoText");a.register(F);const k=e=>r` <mdc-labelandhelper
    label="${e.label}"
    label-info-text="${e["label-info-text"]}"
    help-text-type="${e["help-text-type"]}"
    help-text="${e["help-text"]}"
    >${e.children}</mdc-labelandhelper
  >`,ae={title:"Internal/labelandhelper",tags:["autodocs"],component:"mdc-labelandhelper",render:k,parameters:{badges:["wip"]},argTypes:{..._,...H,"help-text-type":{control:"select",options:Object.values(o)},id:{control:"text"},label:{control:"text"},"label-info-text":{control:"text"},"help-text":{control:"text"}}},d={args:{label:"Label (required)","label-info-text":"Label info text","help-text":"Helper text","help-text-type":"default",children:"[Child Component]"}},m={render:()=>r` <div style="display: flex; justify-content: space-evenly; align-items: center">
      ${U(Object.values(o),e=>r`
          <mdc-labelandhelper help-text-type="${e}" label="Label" help-text="Helper text"
            >[Child component]</mdc-labelandhelper
          >
        `)}
    </div>`};var v,A,E;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    label: 'Label (required)',
    'label-info-text': 'Label info text',
    'help-text': 'Helper text',
    'help-text-type': 'default',
    children: '[Child Component]'
  }
}`,...(E=(A=d.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var S,$,L;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; justify-content: space-evenly; align-items: center">
      \${repeat(Object.values(VALIDATION), (validation: ValidationType) => html\`
          <mdc-labelandhelper help-text-type="\${validation}" label="Label" help-text="Helper text"
            >[Child component]</mdc-labelandhelper
          >
        \`)}
    </div>\`
}`,...(L=($=m.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const ie=["Example","HelperTextTypes"];export{d as Example,m as HelperTextTypes,ie as __namedExportsOrder,ae as default};
