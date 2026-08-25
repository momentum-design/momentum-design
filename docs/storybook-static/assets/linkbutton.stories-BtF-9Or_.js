import{a8 as A,k as L,t as n,a9 as O}from"./iframe-DKmoi846.js";import{i as _}from"./manifest-DISj2anu.js";import{c as T,s as E}from"./commonArgTypes-BG7EqI50.js";import{h as z}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,h=e=>L`<mdc-linkbutton
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @focus="${o("onfocus")}"
    @blur="${o("onblur")}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    icon-name="${n(e["icon-name"])}"
    size="${n(e.size)}"
    tabindex="${n(e.tabIndex)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    aria-label="${n(e["aria-label"])}"
    name="${n(e.name)}"
    value="${n(e.value)}"
    >${e.children}</mdc-linkbutton
  >`,y=e=>L`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${h(e)}
  </div>`,W={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:h,argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"select",options:Object.keys(_)},size:{control:"select",options:Object.values(A)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},"aria-label":{control:"text",description:"Defines an accessible label for the linkbutton for screen readers.",table:{category:"attributes"}},name:{control:"text"},value:{control:"text"},...T,...E,...z(["active","role","type","ariaStateKey"])}},t={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:O.SIZE,tabIndex:0,"aria-label":"Link Button"},r={args:{...t}},a={args:{...t,inline:!1,inverted:!1}},s={render:y,args:{...t,inverted:!0,inline:!1}},i={args:{...t,inline:!0,inverted:!1}},l={render:y,args:{...t,inline:!0,inverted:!0}};var d,c,u;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var m,p,b;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: false,
    inverted: false
  }
}`,...(b=(p=a.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var f,v,k;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
    inline: false
  }
}`,...(k=(v=s.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var g,I,$;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true,
    inverted: false
  }
}`,...($=(I=i.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var S,B,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(x=(B=l.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};const j=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{r as Example,i as InlineLinkButton,l as InlineLinkButtonInverted,a as StandaloneLinkButton,s as StandaloneLinkButtonInverted,j as __namedExportsOrder,W as default};
