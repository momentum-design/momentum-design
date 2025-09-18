import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-CV6_Df90.js";import"./index-DQ1Hv4sq.js";import{c as $,s as k}from"./commonArgTypes-BluK8w5L.js";import{a as S,t as T,d as w,h as C}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./index-74sydAW6.js";import"./iframe-HpF2aG_F.js";import"../sb-preview/runtime.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-CqVtAZCJ.js";import"./index-DHsMOcdX.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-CvUI0OX_.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./listitem.component-Cy9hWtov.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./roles-CJI3JVG-.js";import"./popover.component-CgG8O1N4.js";import"./v4-CmTdKEVZ.js";const D=e=>n`
  <div aria-label="List box" role="listbox">${e}</div>
`,I=e=>D(n`
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
  `),ie={title:"Components/select/option",tags:["autodocs"],component:"mdc-option",render:I,parameters:{badges:["stable"]},argTypes:{disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...S(["id","name","validation-message","validity","willValidate","variant","tabIndex","tertiary-label","side-header-text","subline-text","role","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...T(["--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap"]),...w(["default"]),...$,...k}},t={args:{label:"Option Label","secondary-label":"Secondary Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},a={render:()=>n`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  `,...C()},l={args:{"prefix-icon":"placeholder-bold",label:"Option Label"}},r={args:{"prefix-icon":"placeholder-bold",label:"Option Label",selected:!0}},i={args:{"prefix-icon":"placeholder-bold",label:"Option Label",disabled:!0}};var s,d,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    'secondary-label': 'Secondary Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label'
  }
}`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,m,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option id="option-1" label="This is a very long text and it should be truncated."></mdc-option>
      <mdc-tooltip triggerID="option-1" show-arrow> This is a very long text and it should be truncated. </mdc-tooltip>
      <mdc-text>Note: The consumer needs to attach mdc-tooltip to the option from their end</mdc-text>
    </div>
  \`,
  ...hideAllControls()
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,h;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label'
  }
}`,...(h=(x=l.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,f,y;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true
  }
}`,...(y=(f=r.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,O,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true
  }
}`,...(L=(O=i.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const ne=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption"];export{i as DisabledOption,t as Example,l as OptionWithIcon,a as OptionWithLongText,r as SelectedOption,ne as __namedExportsOrder,ie as default};
