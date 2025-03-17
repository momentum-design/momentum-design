import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as o}from"./lit-element-D5KKan5q.js";import"./index-B4nAsTwy.js";import{h as y}from"./utils-D1SE5bce.js";import{c as O,s as k}from"./commonArgTypes-BluK8w5L.js";import"./v4-CQkTLCs1.js";import"./index-P21x_s7g.js";import"./iframe-BL2arnm0.js";import"../sb-preview/runtime.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./index-BX3Tn-Br.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-BezuNa1f.js";import"./v4-BnQ50LvX.js";import"./listitem.component-D_F-zTFD.js";import"./DisabledMixin-CizxPH9K.js";import"./TabIndexMixin-CsrHswKP.js";import"./text.constants-ZF0jM5wn.js";const n=e=>o`
  <div style="width: 20rem;" aria-label="List box" role="listbox">${e}</div>
`,$=e=>n(o`
  <mdc-option
    @click="${l("onclick")}"
    @keydown="${l("onkeydown")}"
    @keyup="${l("onkeyup")}"
    @focus="${l("onfocus")}"
    ?disabled="${e.disabled}"
    ?selected="${e.selected}"
    label="${e.label}"
    value="${e.value}"
    prefix-icon="${e["prefix-icon"]}"
    aria-label="${e["aria-label"]}"
  ></mdc-option>
`),M={title:"Work In Progress/option",tags:["autodocs"],component:"mdc-option",render:$,parameters:{badges:["wip"]},argTypes:{disabled:{control:"boolean"},selected:{control:"boolean"},label:{control:"text"},value:{control:"text"},"aria-label":{control:"text"},"prefix-icon":{control:"text"},...y(["id","name","validation-message","validity","willValidate","data-aria-label","variant","tabIndex","secondary-label","tertiary-label","side-header-text","subline-text","role","--mdc-listitem-background-color-active","--mdc-listitem-background-color-hover","--mdc-listitem-default-background-color","--mdc-listitem-primary-label-color","--mdc-listitem-secondary-label-color","--mdc-listitem-disabled-color","leading-controls","leading-text-primary-label","leading-text-secondary-label","leading-text-tertiary-label","trailing-controls","trailing-text-side-header","trailing-text-subline"]),...O,...k}},a={args:{label:"Option Label",disabled:!1,selected:!1,value:"","prefix-icon":"","aria-label":"Select an option label"}},t={render:()=>n(o`
    <mdc-option value="label" prefix-icon="placeholder-bold">Option Label</mdc-option>
  `)},r={render:()=>n(o`
    <mdc-option value="label" prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `)},i={render:()=>n(o`
    <mdc-option value="label" disabled prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  `)};var c,d,p;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    label: 'Option Label',
    disabled: false,
    selected: false,
    value: '',
    'prefix-icon': '',
    'aria-label': 'Select an option label'
  }
}`,...(p=(d=a.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var s,m,b;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-option value="label" prefix-icon="placeholder-bold">Option Label</mdc-option>
  \`)
}`,...(b=(m=t.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var u,x,f;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-option value="label" prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  \`)
}`,...(f=(x=r.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,h,g;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: () => wrapWithDiv(html\`
    <mdc-option value="label" disabled prefix-icon="placeholder-bold" selected>Option Label</mdc-option>
  \`)
}`,...(g=(h=i.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const N=["Example","OptionWithIcon","SelectedOption","DisabledOption"];export{i as DisabledOption,a as Example,t as OptionWithIcon,r as SelectedOption,N as __namedExportsOrder,M as default};
