import"./index-BDx2TehI.js";import{k as s}from"./iframe-CB9sX04z.js";import{t}from"./if-defined-DiX5XKya.js";import{P as c}from"./index-DVwrND66.js";import{c as m,s as l}from"./commonArgTypes-BluK8w5L.js";import{a as p}from"./utils-Dd_sfl9-.js";import{i as u}from"./imageFixtures-CD4avj2q.js";import{A as d}from"./index-CgtPDI3p.js";import"./IconNameMixin-D-V-NjRn.js";import"./buttonsimple.component-TZ0C9z3r.js";import"./TabIndexMixin-BibexCZG.js";import"./DisabledMixin-CiPsgT_4.js";import"./preload-helper-C1FmrZbK.js";import"./index-BGeLnnap.js";import"./index-2xS_qDks.js";import"./index-DTrDRi1E.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,b=o=>s`
  <mdc-avatarbutton
    @click="${e("onclick")}"
    @keydown="${e("onkeydown")}"
    @keyup="${e("onkeyup")}"
    @focus="${e("onfocus")}"
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
`,D={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:b,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(c)]},size:{control:"select",options:Object.values(d)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...p(["active","disabled","soft-disabled","tabIndex","role","type"]),...m,...l}},n={args:{src:u.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const I=["Example"];export{n as Example,I as __namedExportsOrder,D as default};
