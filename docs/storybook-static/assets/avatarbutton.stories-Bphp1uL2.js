import"./index-RXCOKiI4.js";import{k as c}from"./iframe-5RFEiZ85.js";import{t}from"./if-defined-C_QIaKNN.js";import{P as s}from"./index-DwrhWzj1.js";import{c as m,s as l}from"./commonArgTypes-BluK8w5L.js";import{a as p,t as u}from"./utils-CFOyPOhY.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-CIYegFc8.js";import"./IconNameMixin-Cyclroqq.js";import"./roles-CJI3JVG-.js";import"./button.constants-mviOTe3v.js";import"./buttonsimple.constants-DnKeL5S2.js";import"./buttonsimple.component-OOqBkiLH.js";import"./keys-hFXe221I.js";import"./DisabledMixin-BzeozoI6.js";import"./TabIndexMixin-If-29Q9p.js";import"./index-BldB1hzz.js";import"./preload-helper-C1FmrZbK.js";import"./index-BAamgs9z.js";import"./index-DHmKhpvb.js";import"./index-DTrDRi1E.js";import"./index-DmZ0oACR.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,v=o=>c`
  <mdc-avatarbutton
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    counter="${t(o.counter)}"
    icon-name="${t(o["icon-name"])}"
    initials="${t(o.initials)}"
    presence="${o.presence==="none"?void 0:t(o.presence)}"
    size="${t(o.size)}"
    src="${t(o.src)}"
    ?is-typing="${o["is-typing"]}"
    aria-label=${o["aria-label"]}
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
  ></mdc-avatarbutton>
`,w={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:v,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(s)]},size:{control:"select",options:Object.values(b)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...p(["active","disabled","soft-disabled","tabIndex","role","type"]),...u(["--mdc-avatarbutton-overlay-background-color-rest","--mdc-avatarbutton-overlay-background-color-hover","--mdc-avatarbutton-overlay-background-color-active"]),...m,...l}},e={args:{src:d.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var r,n,i;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(n=e.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const F=["Example"];export{e as Example,F as __namedExportsOrder,w as default};
