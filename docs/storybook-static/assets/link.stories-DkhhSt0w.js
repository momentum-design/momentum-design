import{L as w}from"./index-CY64wDHN.js";import{k as C}from"./lit-element-D5KKan5q.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{h as s,d as A,r as c}from"./utils-CO8B6ZcN.js";import"./index-C9z9WAEj.js";import"./DisabledMixin-BZruwOeC.js";import"./IconNameMixin-CujGSn0t.js";import"./index-MA1r3zrt.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-Crtz8Lf5.js";import"./iframe-CHHmOJF7.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const n=e=>C`<mdc-link
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @focus="${o("onfocus")}"
    @blur="${o("onblur")}"
    ?disabled="${e.disabled}"
    icon-name="${e["icon-name"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    size="${e.size}"
    href="${e.href}"
    target="${e.target}"
    rel="${e.rel}"
    tabindex="${e.tabIndex}"
    >${e.children}</mdc-link>`,T=e=>C`
    <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
      ${n(e)}
    </div>`,P={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:n,parameters:{badges:["stable"]},argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(w)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},tabIndex:{control:"number"},...s(["handleNavigation"]),...A(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-icon-margin-left","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal","--mdc-link-text-decoration-disabled"])}},r={children:"Link",disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:"large",href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer",tabIndex:0},t={render:n,args:{...r}},i={render:n,args:{...r},argTypes:{...s(["inline","inverted"])}},a={render:T,args:{...r,inverted:!0},argTypes:{...s(["inline"]),...c(["inverted"])}},d={render:n,args:{...r,inline:!0},argTypes:{...s(["inverted"]),...c(["inline"])}},l={render:T,args:{...r,inline:!0,inverted:!0},argTypes:{...c(["inline","inverted"])}};var m,p,u;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(u=(p=t.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var v,g,k;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(k=(g=i.parameters)==null?void 0:g.docs)==null?void 0:k.source}}};var b,f,h;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,y,I;d.parameters={...d.parameters,docs:{...(x=d.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(I=(y=d.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var $,L,S;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(S=(L=l.parameters)==null?void 0:L.docs)==null?void 0:S.source}}};const Q=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{t as Example,d as InlineLink,l as InlineLinkInverted,i as StandaloneLink,a as StandaloneLinkInverted,Q as __namedExportsOrder,P as default};
