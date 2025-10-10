import{k as n}from"./iframe-J50dDciQ.js";import"./index-DGdQueBu.js";import"./index-D-K9KiBC.js";import{c as S,s as T}from"./commonArgTypes-BluK8w5L.js";import{a as $,d as w,h as k}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./index-tkVe0nKe.js";import"./index-DDdGDe2b.js";import"./index-DTrDRi1E.js";import"./if-defined-CcIPL9Pv.js";import"./FormInternalsMixin-A4kccO5c.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./listitem.component-B5w8qciz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-H98zMGT5.js";import"./TabIndexMixin-BQNgw7Ub.js";import"./popover.component-CrUH3bwo.js";import"./BackdropMixin-CwJb0ftf.js";import"./v4-CmTdKEVZ.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,_=e=>n`
  <div aria-label="List box" role="listbox">${e}</div>
`,C=e=>_(n`
    <mdc-option
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      ?selected="${e.selected}"
      label="${e.label}"
      secondary-label="${e["secondary-label"]}"
      value="${e.value}"
      prefix-icon="${e["prefix-icon"]}"
      aria-label="${e["aria-label"]}"
    ></mdc-option>
  `),Q={title:"Components/select/option",tags:["autodocs"],component:"mdc-option",render:C,argTypes:{disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...$(["id","name","validation-message","validity","willValidate","variant","tabIndex","tertiary-label","side-header-text","subline-text","role","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...w(["default"]),...S,...T}},t={args:{label:"Option Label","secondary-label":"Secondary Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},a={render:()=>n`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  `,...k()},l={args:{"prefix-icon":"placeholder-bold",label:"Option Label"}},r={args:{"prefix-icon":"placeholder-bold",label:"Option Label",selected:!0}},i={args:{"prefix-icon":"placeholder-bold",label:"Option Label",disabled:!0}};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    'secondary-label': 'Secondary Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,b,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  \`,
  ...hideAllControls()
}`,...(m=(b=a.parameters)==null?void 0:b.docs)==null?void 0:m.source}}};var x,u,h;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label'
  }
}`,...(h=(u=l.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var O,v,L;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true
  }
}`,...(L=(v=i.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const X=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption"];export{i as DisabledOption,t as Example,l as OptionWithIcon,a as OptionWithLongText,r as SelectedOption,X as __namedExportsOrder,Q as default};
