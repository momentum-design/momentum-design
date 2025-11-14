import{k as s}from"./iframe-C4SnPZjK.js";import"./index-BlBsc7xK.js";import"./index-BDkoI4h-.js";import"./index-DB164E6T.js";import"./index-B7mncvQ9.js";import{c as w,s as C}from"./commonArgTypes-BluK8w5L.js";import{a as I,d as _,h as W}from"./utils-Dd_sfl9-.js";import{i as D}from"./imageFixtures-CD4avj2q.js";import"./preload-helper-C1FmrZbK.js";import"./index-DcZuKoj_.js";import"./index-BkBbgf4I.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-BbAIjXmy.js";import"./query-BPxBhMfF.js";import"./base-DIkkzJ-c.js";import"./listitem.component-DK2OCYhU.js";import"./query-assigned-elements-uEuc3rg8.js";import"./TabIndexMixin-BD1qw_sk.js";import"./DisabledMixin-Bn91i_Uu.js";import"./popover.component-DlVzKrPD.js";import"./if-defined-CZ4_WdhT.js";import"./BackdropMixin-8AJF_7l0.js";import"./v4-CmTdKEVZ.js";import"./IconNameMixin-BXDQMvpQ.js";import"./index-OeLxnSa5.js";import"./button.component-BrnZmkBE.js";import"./buttonsimple.component-B2VPCVqF.js";import"./button.utils-rNW36Ji7.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,A=e=>s`
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
  `),ce={title:"Components/select/option",tags:["autodocs"],component:"mdc-option",render:E,argTypes:{disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...I(["id","name","validation-message","validity","willValidate","variant","tabIndex","tertiary-label","side-header-text","subline-text","role","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),..._(["default"]),...w,...C}},o={args:{label:"Option Label","secondary-label":"Secondary Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},a={render:()=>s`
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
}`,...(k=(T=n.parameters)==null?void 0:T.docs)==null?void 0:k.source}}};const de=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption","OptionWithLeadingControls"];export{i as DisabledOption,o as Example,r as OptionWithIcon,n as OptionWithLeadingControls,a as OptionWithLongText,l as SelectedOption,de as __namedExportsOrder,ce as default};
