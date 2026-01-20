import{k as s}from"./iframe-DD1qd397.js";import"./index-CD0YX0Dx.js";import"./index-DAdE7Nj8.js";import"./index-tXErGkFl.js";import"./index-C1hgciep.js";import{c as w,s as C}from"./commonArgTypes-BG7EqI50.js";import{h as I,d as _,a as W}from"./utils-D6nie9pS.js";import{i as D}from"./imageFixtures-CD4avj2q.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTSLqutf.js";import"./index-DhKlRied.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-DdFBiGQs.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./listitem.component-U_9V-2lC.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DisabledMixin-CYN0V68G.js";import"./KeyToActionMixin-D7mKMv1X.js";import"./popover.component-Dn23zOyI.js";import"./if-defined-Db4PuEEJ.js";import"./BackdropMixin-CQDU5Ra1.js";import"./dom-CCAb5pjN.js";import"./popover.constants-IjUFgXmU.js";import"./v4-CmTdKEVZ.js";import"./IconNameMixin-DSAWNr5p.js";import"./index-Dtx_N7EI.js";import"./button.component-Djz8Llbv.js";import"./buttonsimple.component-B--Mhr8g.js";import"./button.utils-rNW36Ji7.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,A=e=>s`
  <div aria-label="List box" role="listbox">${e}</div>
`,E=e=>A(s`
    <mdc-option
      @click="${t("onclick")}"
      @keydown="${t("onkeydown")}"
      @keyup="${t("onkeyup")}"
      @focus="${t("onfocus")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      ?selected="${e.selected}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      value="${e.value}"
      prefix-icon="${e["prefix-icon"]}"
      aria-label="${e["aria-label"]}"
      >${e.children}</mdc-option
    >
  `),pe={title:"Components/select/option",tags:["autodocs"],component:"mdc-option",render:E,argTypes:{disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...I(["id","name","validation-message","validity","willValidate","variant","tabIndex","tertiary-label","side-header-text","subline-text","role","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),..._(["default"]),...w,...C}},o={args:{label:"Option Label","secondary-label":"Secondary Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},a={render:()=>s`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  `,...W()},r={args:{"prefix-icon":"placeholder-bold",label:"Option Label"}},l={args:{"prefix-icon":"placeholder-bold",label:"Option Label",selected:!0}},i={args:{"prefix-icon":"placeholder-bold",label:"Option Label",disabled:!0}},n={args:{label:"Its chai tea time",selected:!0,children:s`
      <mdc-avatar slot="leading-controls" presence="active" src="${D.avatar}"></mdc-avatar>
      <mdc-button slot="leading-controls">Click me</mdc-button>
    `}};var c,d,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    'secondary-label': 'Secondary Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label'
  }
}`,...(p=(d=o.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var m,b,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  \`,
  ...hideAllControls()
}`,...(u=(b=a.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,x,g;r.parameters={...r.parameters,docs:{...(h=r.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label'
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,v,y;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true
  }
}`,...(y=(v=l.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var O,L,$;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true
  }
}`,...($=(L=i.parameters)==null?void 0:L.docs)==null?void 0:$.source}}};var S,T,k;n.parameters={...n.parameters,docs:{...(S=n.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    label: 'Its chai tea time',
    selected: true,
    children: html\`
      <mdc-avatar slot="leading-controls" presence="active" src="\${imageFixtures.avatar}"></mdc-avatar>
      <mdc-button slot="leading-controls">Click me</mdc-button>
    \`
  }
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const me=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption","OptionWithLeadingControls"];export{i as DisabledOption,o as Example,r as OptionWithIcon,n as OptionWithLeadingControls,a as OptionWithLongText,l as SelectedOption,me as __namedExportsOrder,pe as default};
