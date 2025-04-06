import{a as t}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as o}from"./lit-element-D5KKan5q.js";import"./index-DY4OcrnS.js";import{h as y}from"./utils-D1SE5bce.js";import{c as O,s as k}from"./commonArgTypes-BluK8w5L.js";import"./v4-CQkTLCs1.js";import"./index-fgTGGUkO.js";import"./iframe-CIhAmhYh.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-CrgYZA2k.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-Dg5j8Yib.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./listitem.component-CyW_VFek.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";const n=e=>o`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${e}</div>
`,$=e=>n(o`
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
  ></mdc-option>
`),R={title:"Components/option",tags:["autodocs"],component:"mdc-option",render:$,parameters:{badges:["stable"]},argTypes:{disabled:{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...y(["id","name","validation-message","validity","willValidate","data-aria-label","variant","tabIndex","secondary-label","tertiary-label","side-header-text","subline-text","role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...O,...k}},l={args:{label:"Option Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},a={render:()=>n(o`
    <mdc-option value="label" prefix-icon="placeholder-bold">Option Label</mdc-option>
  `)},r={render:()=>n(o`
    <mdc-option value="label" prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `)},i={render:()=>n(o`
    <mdc-option value="label" disabled prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `)};var c,d,p;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label'
  }
}`,...(p=(d=l.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var s,m,b;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-option value="label" prefix-icon="placeholder-bold">Option Label</mdc-option>
  \`)
}`,...(b=(m=a.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-option value="label" prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  \`)
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,h,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-option value="label" disabled prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  \`)
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const U=["Example","OptionWithIcon","SelectedOption","DisabledOption"];export{i as DisabledOption,l as Example,a as OptionWithIcon,r as SelectedOption,U as __namedExportsOrder,R as default};
