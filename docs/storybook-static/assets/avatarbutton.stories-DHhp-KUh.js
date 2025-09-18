import"./index-xYW1ve2U.js";import{k as s}from"./lit-element-D5KKan5q.js";import{t}from"./if-defined-D5BV9-c0.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as c}from"./index-DAykEy62.js";import{c as m,s as p}from"./commonArgTypes-BluK8w5L.js";import{a as l,t as u}from"./utils-CFOyPOhY.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-BzfHKBFO.js";import"./provider.component-BaQC7CJH.js";import"./IconNameMixin-CRlZlTtq.js";import"./roles-CJI3JVG-.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-CqVtAZCJ.js";import"./v4-CQkTLCs1.js";import"./state-C0WmBOuD.js";import"./index-4EFlSTI7.js";import"./iframe-B89HUqSX.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-DHsMOcdX.js";const v=o=>s`
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
`,q={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:v,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(c)]},size:{control:"select",options:Object.values(b)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...l(["active","disabled","soft-disabled","tabIndex","role","type"]),...u(["--mdc-avatarbutton-overlay-background-color-rest","--mdc-avatarbutton-overlay-background-color-hover","--mdc-avatarbutton-overlay-background-color-active"]),...m,...p}},a={args:{src:d.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var e,n,i;a.parameters={...a.parameters,docs:{...(e=a.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(n=a.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};const G=["Example"];export{a as Example,G as __namedExportsOrder,q as default};
