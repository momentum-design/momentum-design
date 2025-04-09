import{L as A}from"./index-BXU_qGiV.js";import{k as l}from"./lit-element-D5KKan5q.js";import{a as n}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{d as O,h as c,r as m}from"./utils-CO8B6ZcN.js";import"./index-C9z9WAEj.js";import"./DisabledMixin-BZruwOeC.js";import"./IconNameMixin-CujGSn0t.js";import"./index-MA1r3zrt.js";import"./index-C_nSTea5.js";import"./iframe-ltGo9-D6.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const r=e=>{const w=l`${new DOMParser().parseFromString(e.children,"text/html").body.firstChild}`;return l`<mdc-link
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focusin="${n("onfocusin")}"
    @focusout="${n("onfocusout")}"
    ?disabled="${e.disabled}"
    icon-name="${e["icon-name"]}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    size="${e.size}"
    >${w}</mdc-link>`},T=e=>l`
    <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
      ${r(e)}
    </div>`,J={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:r,parameters:{badges:["stable"]},argTypes:{children:{description:"Anchor tag to be displayed as link.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(A)},...O(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-icon-margin-left","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal","--mdc-link-text-decoration-disabled"])}},o={children:'<a href="https://www.webex.com" target="_blank" rel="noopener noreferrer">Link</a>',disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:"large"},t={render:r,args:{...o}},i={render:r,args:{...o},argTypes:{...c(["inline","inverted"])}},a={render:T,args:{...o,inverted:!0},argTypes:{...c(["inline"]),...m(["inverted"])}},d={render:r,args:{...o,inline:!0},argTypes:{...c(["inverted"]),...m(["inline"])}},s={render:T,args:{...o,inline:!0,inverted:!0},argTypes:{...m(["inline","inverted"])}};var p,u,k;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  }
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var g,v,b;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(b=(v=i.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,h,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var I,$,C;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render,
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(C=($=d.parameters)==null?void 0:$.docs)==null?void 0:C.source}}};var S,L,x;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(x=(L=s.parameters)==null?void 0:L.docs)==null?void 0:x.source}}};const Q=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{t as Example,d as InlineLink,s as InlineLinkInverted,i as StandaloneLink,a as StandaloneLinkInverted,Q as __namedExportsOrder,J as default};
