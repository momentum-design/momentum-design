import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-Du0dFQUF.js";import{c as T,s as k}from"./commonArgTypes-BluK8w5L.js";import{a as S,t as E,d as C,h as P}from"./utils-CFOyPOhY.js";import{a as $}from"./popover.component-D4rQ9USc.js";import"./v4-CQkTLCs1.js";import"./index-DLdQbWAF.js";import"./iframe-DujiTaoR.js";import"../sb-preview/runtime.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-riA1qVWu.js";import"./index-C30xQNCF.js";import"./roles-DU0xbrD4.js";import"./v4-CmTdKEVZ.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-BIoSiX4k.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./listitem.component-DynFHpEg.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";const w=e=>n`
  <div aria-label="List box" role="listbox">${e}</div>
`,A=e=>w(n`
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
      tooltip-text="${e["tooltip-text"]}"
      tooltip-placement="${e["tooltip-placement"]}"
    ></mdc-option>
  `),ne={title:"Components/select/option",tags:["autodocs"],component:"mdc-option",render:A,parameters:{badges:["stable"]},argTypes:{disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},"secondary-label":{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values($)},...S(["id","name","validation-message","validity","willValidate","variant","tabIndex","tertiary-label","side-header-text","subline-text","role","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...E(["--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap"]),...C(["default"]),...T,...k}},o={args:{label:"Option Label","secondary-label":"Secondary Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label","tooltip-text":"","tooltip-placement":$.TOP}},l={render:()=>n`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option
        label="This is a very long text and it should be truncated."
        tooltip-text="This is a very long text and it should be truncated."
      ></mdc-option>
    </div>
  `,...P()},a={args:{"prefix-icon":"placeholder-bold",label:"Option Label"}},i={args:{"prefix-icon":"placeholder-bold",label:"Option Label",selected:!0}},r={args:{"prefix-icon":"placeholder-bold",label:"Option Label",disabled:!0}};var s,c,d;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    'secondary-label': 'Secondary Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(d=(c=o.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,b;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option
        label="This is a very long text and it should be truncated."
        tooltip-text="This is a very long text and it should be truncated."
      ></mdc-option>
    </div>
  \`,
  ...hideAllControls()
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var x,u,h;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label'
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var f,y,g;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true
  }
}`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var O,v,L;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true
  }
}`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const se=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption"];export{r as DisabledOption,o as Example,a as OptionWithIcon,l as OptionWithLongText,i as SelectedOption,se as __namedExportsOrder,ne as default};
