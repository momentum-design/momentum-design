import{a as l}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as o}from"./lit-element-CHllvULs.js";import"./index-D4Lbwjnj.js";import{h as y}from"./utils-D1SE5bce.js";import{c as O,s as k}from"./commonArgTypes-BluK8w5L.js";import"./v4-CQkTLCs1.js";import"./index-BXUHK2D8.js";import"./iframe-DR_569B8.js";import"../sb-preview/runtime.js";import"./index-HW6KrQZO.js";import"./state-CWckTc1X.js";import"./index-BGjwsboe.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./if-defined-C4tJgJ33.js";import"./FormInternalsMixin-DyD0hFmN.js";import"./v4-BnQ50LvX.js";import"./listitem.component-D6tY5UgJ.js";import"./DisabledMixin-DBt9didn.js";import"./TabIndexMixin-DUHuRC5Y.js";import"./text.constants-DJu2q-6E.js";const n=e=>o`
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
