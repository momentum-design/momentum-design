import"./index-24_DiQvl.js";import{k as s}from"./iframe-06xQzbmP.js";import{t}from"./if-defined-DwgySn5g.js";import{P as c}from"./index-B629ihY_.js";import{c as m,s as p}from"./commonArgTypes-BluK8w5L.js";import{a as l}from"./utils-Dd_sfl9-.js";import{i as u}from"./imageFixtures-CD4avj2q.js";import{A as d}from"./index-Bh0cHo-8.js";import"./IconNameMixin-BMT0d64v.js";import"./buttonsimple.component-DLC1Z_Ox.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DAkplytX.js";import"./TabIndexMixin-DzWllGfn.js";import"./preload-helper-C1FmrZbK.js";import"./index-htwxrKSI.js";import"./index-DVrzMypz.js";import"./index-DTrDRi1E.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,b=o=>s`
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
`,I={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:b,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(c)]},size:{control:"select",options:Object.values(d)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...l(["active","disabled","soft-disabled","tabIndex","role","type"]),...m,...p}},n={args:{src:u.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const M=["Example"];export{n as Example,M as __namedExportsOrder,I as default};
