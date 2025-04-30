import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-HnD01_nW.js";import{h as k}from"./utils-CO8B6ZcN.js";import{c as $,s as S}from"./commonArgTypes-BluK8w5L.js";import"./v4-CQkTLCs1.js";import"./index-DXv7EtBX.js";import"./iframe-D3TFXPfe.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./index-Oe7L0gpB.js";import"./popover.component-B7gte4U1.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./listitem.component-CAQJg3uX.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";const T=e=>n`
  <div aria-label="List box" role="listbox">${e}</div>
`,w=e=>T(n`
  <mdc-option
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    ?disabled="${e.disabled}"
    ?selected="${e.selected}"
    label="${e.label}"
    value="${e.value}"
    prefix-icon="${e["prefix-icon"]}"
    aria-label="${e["aria-label"]}"
  ></mdc-option>
`),ae={title:"Components/option",tags:["autodocs"],component:"mdc-option",render:w,parameters:{badges:["stable"]},argTypes:{disabled:{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...k(["id","name","validation-message","validity","willValidate","data-aria-label","variant","tabIndex","secondary-label","tertiary-label","side-header-text","subline-text","role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...$,...S}},t={args:{label:"Option Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},a={render:()=>n`
    <div style="width: 15rem; height: 10rem;" aria-label="List box" role="listbox">
      <mdc-option label="This is a very long text and it should be truncated."></mdc-option>
    </div>
  `},r={args:{"prefix-icon":"placeholder-bold",label:"Option Label"}},l={args:{"prefix-icon":"placeholder-bold",label:"Option Label",selected:!0}},i={args:{"prefix-icon":"placeholder-bold",label:"Option Label",disabled:!0}};var s,c,d;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label'
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};var p,m,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 15rem; height: 10rem;" aria-label="List box" role="listbox">
      <mdc-option label="This is a very long text and it should be truncated."></mdc-option>
    </div>
  \`
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,g;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label'
  }
}`,...(g=(x=r.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var h,f,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    selected: true
  }
}`,...(y=(f=l.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var v,O,L;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    'prefix-icon': 'placeholder-bold',
    label: 'Option Label',
    disabled: true
  }
}`,...(L=(O=i.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};const re=["Example","OptionWithLongText","OptionWithIcon","SelectedOption","DisabledOption"];export{i as DisabledOption,t as Example,r as OptionWithIcon,a as OptionWithLongText,l as SelectedOption,re as __namedExportsOrder,ae as default};
