import"./index-DLnTEVFn.js";import{k as x}from"./iframe-C1wx72SK.js";import{h as d,r as l}from"./utils-D6nie9pS.js";import{L as _,D as C}from"./link.constants-B2JnqzMt.js";import"./IconNameMixin-DC0MFhOT.js";import"./linksimple.component-C8SDqHsV.js";import"./if-defined-BHGuOObc.js";import"./DataAriaLabelMixin-Dw-lNvo5.js";import"./DisabledMixin-C2MvVlDo.js";import"./index-DZhWFQnP.js";import"./preload-helper-C1FmrZbK.js";import"./index-DmOYDsR-.js";import"./index-DTrDRi1E.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,T=e=>x`<mdc-link
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
  >`,O=e=>x` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${T(e)}
  </div>`,M={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:T,argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(_)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...d(["handleNavigation"])}},n={children:"Link",disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:C.LINK_SIZE,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"},t={args:{...n}},o={args:{...n},argTypes:{...d(["inline","inverted"])}},a={render:O,args:{...n,inverted:!0},argTypes:{...d(["inline"]),...l(["inverted"])}},i={args:{...n,inline:!0},argTypes:{...d(["inverted"]),...l(["inline"])}},s={render:O,args:{...n,inline:!0,inverted:!0},argTypes:{...l(["inline","inverted"])}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(m=(p=t.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,v;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var k,f,b;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(b=(f=a.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var h,y,I;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(I=(y=i.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var S,$,L;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(L=($=s.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};const R=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{t as Example,i as InlineLink,s as InlineLinkInverted,o as StandaloneLink,a as StandaloneLinkInverted,R as __namedExportsOrder,M as default};
