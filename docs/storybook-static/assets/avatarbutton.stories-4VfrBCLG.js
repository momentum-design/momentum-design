import"./index-CBBmg3BG.js";import{k as c}from"./iframe-Bmqk5ncS.js";import{t}from"./if-defined-CEMHl27f.js";import{P as s}from"./index-Buxhf2Fz.js";import{c as m,s as l}from"./commonArgTypes-BluK8w5L.js";import{a as p,t as u}from"./utils-CFOyPOhY.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-Dlc1GpMM.js";import"./IconNameMixin-BxH3CgDw.js";import"./buttonsimple.component-DJ5naDiX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CJC0_YR8.js";import"./TabIndexMixin-CoFbKfFN.js";import"./preload-helper-C1FmrZbK.js";import"./index-BMN--PIx.js";import"./index-Bo7GamiG.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,v=o=>c`
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
`,M={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:v,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(s)]},size:{control:"select",options:Object.values(b)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...p(["active","disabled","soft-disabled","tabIndex","role","type"]),...u(["--mdc-avatarbutton-overlay-background-color-rest","--mdc-avatarbutton-overlay-background-color-hover","--mdc-avatarbutton-overlay-background-color-active"]),...m,...l}},e={args:{src:d.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var n,r,i;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(r=e.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const P=["Example"];export{e as Example,P as __namedExportsOrder,M as default};
