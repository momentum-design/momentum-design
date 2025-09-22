import{L as y,D as A}from"./index-Cx0oja4p.js";import{k as x}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as E,s as T}from"./commonArgTypes-BluK8w5L.js";import{a as z,t as C}from"./utils-CFOyPOhY.js";import"./provider.component-BaQC7CJH.js";import"./IconNameMixin-CRlZlTtq.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./buttonsimple.constants-An7St6B1.js";import"./roles-CJI3JVG-.js";import"./index-CqVtAZCJ.js";import"./linksimple.component-BhKRWe-u.js";import"./if-defined-D5BV9-c0.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./index-DhIhdWNp.js";import"./iframe-DtD0cJ2q.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";import"./v4-CQkTLCs1.js";const L=e=>x`<mdc-linkbutton
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @focus="${r("onfocus")}"
    @blur="${r("onblur")}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    icon-name="${e["icon-name"]}"
    size="${e.size}"
    tabindex="${e.tabIndex}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    aria-label="${e["aria-label"]}"
    >${e.children}</mdc-linkbutton
  >`,h=e=>x`<div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${L(e)}
  </div>`,te={title:"Components/linkbutton",tags:["autodocs"],component:"mdc-linkbutton",render:L,parameters:{badges:["stable"]},argTypes:{children:{control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},"icon-name":{control:"text"},size:{control:"select",options:Object.values(y)},tabIndex:{control:"number"},"auto-focus-on-mount":{control:"boolean"},...E,...T,...z(["active","role","type","ariaStateKey"]),...C(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},n={children:"LinkButton",disabled:!1,"soft-disabled":!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:A.SIZE,tabIndex:0},o={args:{...n}},t={args:{...n,inline:!1,inverted:!1}},a={render:h,args:{...n,inverted:!0,inline:!1}},i={args:{...n,inline:!0,inverted:!1}},s={render:h,args:{...n,inline:!0,inverted:!0}};var l,d,c;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(c=(d=o.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var m,u,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: false,
    inverted: false
  }
}`,...(p=(u=t.parameters)==null?void 0:u.docs)==null?void 0:p.source}}};var b,f,k;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true,
    inline: false
  }
}`,...(k=(f=a.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var v,g,I;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true,
    inverted: false
  }
}`,...(I=(g=i.parameters)==null?void 0:g.docs)==null?void 0:I.source}}};var $,S,B;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  }
}`,...(B=(S=s.parameters)==null?void 0:S.docs)==null?void 0:B.source}}};const ae=["Example","StandaloneLinkButton","StandaloneLinkButtonInverted","InlineLinkButton","InlineLinkButtonInverted"];export{o as Example,i as InlineLinkButton,s as InlineLinkButtonInverted,t as StandaloneLinkButton,a as StandaloneLinkButtonInverted,ae as __namedExportsOrder,te as default};
