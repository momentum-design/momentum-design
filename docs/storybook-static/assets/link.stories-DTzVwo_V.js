import"./index-Dg2_GvLv.js";import{k as S}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{L as A,D as w}from"./link.constants-CqyNsepP.js";import{h as l,d as E,r as s}from"./utils-CO8B6ZcN.js";import"./index-C9z9WAEj.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CTvKnIXa.js";import"./DisabledMixin-BZruwOeC.js";import"./index-CcXofQbA.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-DtjZzLiR.js";import"./iframe-CH-9ZuZx.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const T=e=>S`<mdc-link
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @focus="${r("onfocus")}"
    @blur="${r("onblur")}"
    ?disabled="${e.disabled}"
    icon-name="${e["icon-name"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    size="${e.size}"
    href="${e.href}"
    target="${e.target}"
    rel="${e.rel}"
    tabindex="${e.tabIndex}"
    >${e.children}</mdc-link>`,C=e=>S`
    <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
      ${T(e)}
    </div>`,R={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:T,parameters:{badges:["stable"]},argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(A)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},tabIndex:{control:"number"},...l(["handleNavigation"]),...E(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},n={children:"Link",disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:w.LINK_SIZE,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer",tabIndex:0},o={args:{...n}},t={args:{...n},argTypes:{...l(["inline","inverted"])}},i={render:C,args:{...n,inverted:!0},argTypes:{...l(["inline"]),...s(["inverted"])}},a={args:{...n,inline:!0},argTypes:{...l(["inverted"]),...s(["inline"])}},d={render:C,args:{...n,inline:!0,inverted:!0},argTypes:{...s(["inline","inverted"])}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,v,g;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(g=(v=t.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var k,b,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,I,y;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(y=(I=a.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};var x,$,L;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(L=($=d.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const V=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{o as Example,a as InlineLink,d as InlineLinkInverted,t as StandaloneLink,i as StandaloneLinkInverted,V as __namedExportsOrder,R as default};
