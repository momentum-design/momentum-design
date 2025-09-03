import"./index-MWAePVJr.js";import{k as s}from"./lit-element-D5KKan5q.js";import{t}from"./if-defined-D5BV9-c0.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as c}from"./index-bjIvBE8y.js";import{c as m,s as p}from"./commonArgTypes-BluK8w5L.js";import{a as l,t as u}from"./utils-CFOyPOhY.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-B5d-2k33.js";import"./property-Bj3TGwkg.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./roles-CJI3JVG-.js";import"./button.constants-BBlkZKjZ.js";import"./provider.component-DrWB4byV.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./v4-CQkTLCs1.js";import"./state-CmYk530Z.js";import"./index-DuD0cY4i.js";import"./iframe-DE5vf-rx.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-D2VIkDCb.js";const v=o=>s`
  <mdc-avatarbutton
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
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
`,G={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:v,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(c)]},size:{control:"select",options:Object.values(b)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...l(["active","disabled","soft-disabled","tabIndex","role","type"]),...u(["--mdc-avatarbutton-overlay-background-color-rest","--mdc-avatarbutton-overlay-background-color-hover","--mdc-avatarbutton-overlay-background-color-active"]),...m,...p}},a={args:{src:d.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var e,n,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const H=["Example"];export{a as Example,H as __namedExportsOrder,G as default};
