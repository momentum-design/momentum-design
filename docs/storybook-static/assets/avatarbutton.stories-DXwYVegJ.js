import"./index-hK1eGUnc.js";import{k as c}from"./iframe-BG4I9E_r.js";import{t}from"./if-defined-Kq1WkYsV.js";import{P as s}from"./index-CPlGVCn3.js";import{c as m,s as l}from"./commonArgTypes-BluK8w5L.js";import{a as p,t as u}from"./utils-CFOyPOhY.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-QIOq_e8e.js";import"./IconNameMixin-gV0lxWw6.js";import"./roles-CJI3JVG-.js";import"./button.constants-DKx22iDf.js";import"./buttonsimple.constants-DSY_UmUp.js";import"./buttonsimple.component-CWbGizk1.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CNoOU8v-.js";import"./TabIndexMixin-dp86jvDC.js";import"./index-B1GIzs4g.js";import"./preload-helper-C1FmrZbK.js";import"./index-lO-Bt-J2.js";import"./index-CAgqPbz6.js";import"./index-DTrDRi1E.js";import"./index-DnKEC-v0.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,v=o=>c`
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
