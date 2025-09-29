import{L as O,T as _}from"./linksimple.component-C8R79UXv.js";import{k as L}from"./iframe-QSDyrAdE.js";import{a as d,t as w,r as s}from"./utils-CFOyPOhY.js";import"./if-defined-ClteKkfF.js";import"./DataAriaLabelMixin-Dtxn4H1o.js";import"./DisabledMixin-D6enQAXq.js";import"./index-EVhd65vU.js";import"./preload-helper-C1FmrZbK.js";O.register(_);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,C=e=>L`<mdc-linksimple
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @focus="${r("onfocus")}"
    @blur="${r("onblur")}"
    ?disabled="${e.disabled}"
    ?inline="${e.inline}"
    ?inverted="${e.inverted}"
    href="${e.href}"
    target="${e.target}"
    rel="${e.rel}"
    download="${e.download}"
    ping="${e.ping}"
    hreflang="${e.hreflang}"
    type="${e.type}"
    referrerpolicy="${e.referrerpolicy}"
    data-aria-label="${e["data-aria-label"]}"
    >${e.children}</mdc-linksimple
  >`,S=e=>L` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${C(e)}
  </div>`,K={title:"Components/linksimple",tags:["autodocs"],component:"mdc-linksimple",render:C,argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},download:{control:"text"},ping:{control:"text"},hreflang:{control:"text"},type:{control:"text"},referrerpolicy:{control:"text"},"data-aria-label":{control:"text"},...d(["handleNavigation"]),...w(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},n={children:"Visit Linksimple",disabled:!1,inline:!1,inverted:!1,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"},o={args:{...n}},t={args:{...n},argTypes:{...d(["inline","inverted"])}},i={render:S,args:{...n,inverted:!0},argTypes:{...d(["inline"]),...s(["inverted"])}},a={args:{...n,inline:!0},argTypes:{...d(["inverted"]),...s(["inline"])}},l={render:S,args:{...n,inline:!0,inverted:!0},argTypes:{...s(["inline","inverted"])}};var c,p,m;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(m=(p=o.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var k,f,y;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var h,b,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var $,T,I;l.parameters={...l.parameters,docs:{...($=l.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const R=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{o as Example,a as InlineLink,l as InlineLinkInverted,t as StandaloneLink,i as StandaloneLinkInverted,R as __namedExportsOrder,K as default};
