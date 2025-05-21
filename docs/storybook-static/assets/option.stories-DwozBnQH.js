import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-BrvCV1Hk.js";import{c as T,s as $}from"./commonArgTypes-BluK8w5L.js";import{h as E,d as P,a as S}from"./utils-CO8B6ZcN.js";import{P as k}from"./popover.component-DCc9qDH7.js";import"./v4-CQkTLCs1.js";import"./index-CvC6sVfQ.js";import"./iframe-CjWiYs7r.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-CcXofQbA.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./listitem.component-BMOZQYyG.js";import"./roles-DMFGbP5t.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./FocusTrapMixin-SA_WaGa6.js";const w=e=>n`
  <div aria-label="List box" role="listbox">${e}</div>
`,C=e=>w(n`
  <mdc-option
    @click="${t("onclick")}"
    @keydown="${t("onkeydown")}"
    @keyup="${t("onkeyup")}"
    @focus="${t("onfocus")}"
    ?disabled="${e.disabled}"
    ?selected="${e.selected}"
    label="${e.label}"
    value="${e.value}"
    prefix-icon="${e["prefix-icon"]}"
    aria-label="${e["aria-label"]}"
    tooltip-text="${e["tooltip-text"]}"
    tooltip-placement="${e["tooltip-placement"]}"
  ></mdc-option>
`),re={title:"Components/option",tags:["autodocs"],component:"mdc-option",render:C,parameters:{badges:["stable"]},argTypes:{disabled:{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},"tooltip-text":{control:"text"},"tooltip-placement":{control:"select",options:Object.values(k)},...E(["id","name","validation-message","validity","willValidate","variant","tabIndex","secondary-label","tertiary-label","side-header-text","subline-text","role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","--mdc-listitem-column-gap","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...P(["click","keydown","keyup","focus","default"]),...T,...$}},o={args:{label:"Option Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label","tooltip-text":"","tooltip-placement":k.TOP}},l={render:()=>n`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option
        label="This is a very long text and it should be truncated."
        tooltip-text="This is a very long text and it should be truncated."
      ></mdc-option>
    </div>
  `,...S()},a={args:{"prefix-icon":"placeholder-bold",label:"Option Label"}},i={args:{"prefix-icon":"placeholder-bold",label:"Option Label",selected:!0}},r={args:{"prefix-icon":"placeholder-bold",label:"Option Label",disabled:!0}};var s,c,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label',
    'tooltip-text': '',
    'tooltip-placement': POPOVER_PLACEMENT.TOP
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,m,b;l.parameters={...l.parameters,docs:{...(d=l.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 15rem;" aria-label="List box" role="listbox">
      <mdc-option
        label="This is a very long text and it should be truncated."
        tooltip-text="This is a very long text and it should be truncated."
      ></mdc-option>
    </div>
  \`,
  ...hideAllControls()
}`,...(b=(m=l.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,g;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label'
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,y;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var O,v,L;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true
  }
}`,...(L=(v=r.parameters)==null?void 0:v.docs)==null?void 0:L.source}}};const ne=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption"];export{r as DisabledOption,o as Example,a as OptionWithIcon,l as OptionWithLongText,i as SelectedOption,ne as __namedExportsOrder,re as default};
