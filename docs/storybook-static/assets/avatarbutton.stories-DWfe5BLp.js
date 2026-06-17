import"./index-JUiwHUyi.js";import{i as s}from"./manifest-C_bJRT-C.js";import{k as c,t}from"./iframe-rWdaJlOd.js";import{P as m}from"./index-BsAaDkqD.js";import{c as l,s as p}from"./commonArgTypes-BG7EqI50.js";import{h as u}from"./utils-B5QUENNQ.js";import{i as d}from"./imageFixtures-CD4avj2q.js";import{A as b}from"./index-BcweUB7x.js";import"./IconNameMixin-Z6R9i97L.js";import"./buttonsimple.component-CR_61M33.js";import"./DisabledMixin-BXKdzVeB.js";import"./KeyDownHandledMixin-DEGPFLrO.js";import"./index-CETtjk-e.js";import"./preload-helper-C1FmrZbK.js";import"./index-CcPXd9fF.js";import"./index-DTrDRi1E.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,y=o=>c`
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
`,j={title:"Components/avatar/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:y,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(m)]},size:{control:"select",options:Object.values(b)},"is-typing":{control:"boolean"},"icon-name":{control:"select",options:Object.keys(s)},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...u(["active","disabled","soft-disabled","tabIndex","role","type","ariaStateKey","name","value","--mdc-button-height","--mdc-button-background","--mdc-button-border-color","--mdc-button-text-color"]),...l,...p}},n={args:{src:d.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var a,r,i;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(i=(r=n.parameters)==null?void 0:r.docs)==null?void 0:i.source}}};const B=["Example"];export{n as Example,B as __namedExportsOrder,j as default};
