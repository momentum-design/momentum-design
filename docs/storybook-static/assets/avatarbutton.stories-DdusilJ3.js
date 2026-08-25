import{P as i,l as c,k as l,t as o}from"./iframe-DKmoi846.js";import{i as m}from"./manifest-DISj2anu.js";import{c as u,s as p}from"./commonArgTypes-BG7EqI50.js";import{h as d}from"./utils-B5QUENNQ.js";import{i as b}from"./imageFixtures-CD4avj2q.js";import"./preload-helper-C1FmrZbK.js";const{action:e}=__STORYBOOK_MODULE_ACTIONS__,y=t=>l`
  <mdc-avatarbutton
    @click="${e("onclick")}"
    @keydown="${e("onkeydown")}"
    @keyup="${e("onkeyup")}"
    @focus="${e("onfocus")}"
    counter="${o(t.counter)}"
    icon-name="${o(t["icon-name"])}"
    initials="${o(t.initials)}"
    presence="${t.presence==="none"?void 0:o(t.presence)}"
    size="${o(t.size)}"
    src="${o(t.src)}"
    ?is-typing="${t["is-typing"]}"
    aria-label=${t["aria-label"]}
    ?auto-focus-on-mount="${t["auto-focus-on-mount"]}"
  ></mdc-avatarbutton>
`,E={title:"Components/avatar/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:y,argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:["none",...Object.values(i)]},size:{control:"select",options:Object.values(c)},"is-typing":{control:"boolean"},"icon-name":{control:"select",options:Object.keys(m)},counter:{control:"number"},"aria-label":{control:"text"},"auto-focus-on-mount":{control:"boolean"},...d(["active","disabled","soft-disabled","tabIndex","role","type","ariaStateKey","name","value","--mdc-button-height","--mdc-button-background","--mdc-button-border-color","--mdc-button-text-color"]),...u,...p}},n={args:{src:b.avatar,initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var a,s,r;n.parameters={...n.parameters,docs:{...(a=n.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    src: imageFixtures.avatar,
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(r=(s=n.parameters)==null?void 0:s.docs)==null?void 0:r.source}}};const O=["Example"];export{n as Example,O as __namedExportsOrder,E as default};
