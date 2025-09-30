import"./index-D_uliLFM.js";import{k as L}from"./iframe-KY1Pl7Qi.js";import{a as d,t as O,r as s}from"./utils-CFOyPOhY.js";import{L as _,D as A}from"./link.constants-xdiy7Ok7.js";import"./IconNameMixin-I6YxuUG8.js";import"./linksimple.component-NFlV2CU0.js";import"./if-defined-C_zMbcwl.js";import"./DataAriaLabelMixin-DBaEHTgg.js";import"./DisabledMixin-bUQ9ncpk.js";import"./index-C-R_kWER.js";import"./index-CBH-afrD.js";import"./preload-helper-C1FmrZbK.js";import"./index-CbdPMEyu.js";import"./index-DTrDRi1E.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=e=>L`<mdc-link
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
    data-aria-label="${e["data-aria-label"]}"
    >${e.children}</mdc-link
  >`,C=e=>L` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${T(e)}
  </div>`,Y={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:T,argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(_)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...d(["handleNavigation"]),...O(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},n={children:"Link",disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:A.LINK_SIZE,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"},o={args:{...n}},t={args:{...n},argTypes:{...d(["inline","inverted"])}},i={render:C,args:{...n,inverted:!0},argTypes:{...d(["inline"]),...s(["inverted"])}},a={args:{...n,inline:!0},argTypes:{...d(["inverted"]),...s(["inline"])}},l={render:C,args:{...n,inline:!0,inverted:!0},argTypes:{...s(["inline","inverted"])}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,v,k;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(k=(v=t.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var g,b,f;i.parameters={...i.parameters,docs:{...(g=i.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,I;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(I=(y=a.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var S,$,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(x=($=l.parameters)==null?void 0:$.docs)==null?void 0:x.source}}};const q=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{o as Example,a as InlineLink,l as InlineLinkInverted,t as StandaloneLink,i as StandaloneLinkInverted,q as __namedExportsOrder,Y as default};
