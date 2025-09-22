import"./index-CX5-TmTE.js";import{k as c}from"./iframe-Dv4CZTGV.js";import{t}from"./if-defined-DkpisCg5.js";import{P as s}from"./index-CjH24k3b.js";import{c as m,s as l}from"./commonArgTypes-BluK8w5L.js";import{a as p,t as u}from"./utils-CFOyPOhY.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-CqZJdqxo.js";import"./IconNameMixin-FcSNewiF.js";import"./roles-CJI3JVG-.js";import"./button.constants-BN8GH3PF.js";import"./buttonsimple.constants-8cRaCd2R.js";import"./buttonsimple.component-ChqJ9fk5.js";import"./keys-hFXe221I.js";import"./DisabledMixin-HUACZ3-D.js";import"./TabIndexMixin-BhCrCd_K.js";import"./index-BATfJeu3.js";import"./preload-helper-C1FmrZbK.js";import"./index-C7H1niR0.js";import"./index-tqQu3Fsv.js";import"./index-DTrDRi1E.js";import"./index-CkpDgFEX.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,v=o=>c`
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
