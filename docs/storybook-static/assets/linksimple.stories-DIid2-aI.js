import{L as O,T as _}from"./linksimple.component-CYwp7MQw.js";import{k as L}from"./iframe-D4-7yPtR.js";import{a as s,r as d}from"./utils-Dd_sfl9-.js";import"./if-defined-ClFTYvOP.js";import"./DataAriaLabelMixin-DyyI_9zZ.js";import"./DisabledMixin-C3-q3_TG.js";import"./preload-helper-C1FmrZbK.js";O.register(_);const{action:r}=__STORYBOOK_MODULE_ACTIONS__,S=e=>L`<mdc-linksimple
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
  >`,C=e=>L` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${S(e)}
  </div>`,D={title:"Components/linksimple",tags:["autodocs"],component:"mdc-linksimple",render:S,argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},download:{control:"text"},ping:{control:"text"},hreflang:{control:"text"},type:{control:"text"},referrerpolicy:{control:"text"},"data-aria-label":{control:"text"},...s(["handleNavigation"])}},n={children:"Visit Linksimple",disabled:!1,inline:!1,inverted:!1,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"},t={args:{...n}},o={args:{...n},argTypes:{...s(["inline","inverted"])}},a={render:C,args:{...n,inverted:!0},argTypes:{...s(["inline"]),...d(["inverted"])}},i={args:{...n,inline:!0},argTypes:{...s(["inverted"]),...d(["inline"])}},l={render:C,args:{...n,inline:!0,inverted:!0},argTypes:{...d(["inline","inverted"])}};var c,p,m;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(g=o.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,k,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(y=(k=a.parameters)==null?void 0:k.docs)==null?void 0:y.source}}};var h,$,b;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(b=($=i.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};var x,T,I;l.parameters={...l.parameters,docs:{...(x=l.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(I=(T=l.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};const G=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{t as Example,i as InlineLink,l as InlineLinkInverted,o as StandaloneLink,a as StandaloneLinkInverted,G as __namedExportsOrder,D as default};
