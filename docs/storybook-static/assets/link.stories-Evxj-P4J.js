import"./index-DFWP5hNL.js";import{k as c}from"./iframe-CwHTiZJN.js";import{h as s,r as p}from"./utils-B5QUENNQ.js";import{L as E,D as z}from"./link.constants-CLRpavVY.js";import"./IconNameMixin-Bu2Vh7fw.js";import"./linksimple.component-BO5Z1H0H.js";import"./if-defined-cR5VEbI-.js";import"./DataAriaLabelMixin-DZkBLSLT.js";import"./DisabledMixin-DQyYsE82.js";import"./index-C25PLri4.js";import"./preload-helper-C1FmrZbK.js";import"./index-C4lrFjaQ.js";import"./index-DTrDRi1E.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>c`<mdc-link
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @focus="${n("onfocus")}"
    @blur="${n("onblur")}"
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
  >`,A=e=>c` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${C(e)}
  </div>`,H={title:"Components/link",tags:["autodocs"],component:"mdc-link",render:C,argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},"icon-name":{control:"text"},inline:{control:"boolean"},inverted:{control:"boolean"},size:{control:"select",options:Object.values(E)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},"data-aria-label":{control:"text"},...s(["handleNavigation"])}},r={children:"Link",disabled:!1,"icon-name":"placeholder-bold",inline:!1,inverted:!1,size:z.LINK_SIZE,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"},t={args:{...r}},i={args:{...r},argTypes:{...s(["inline","inverted"])}},o={render:A,args:{...r,inverted:!0},argTypes:{...s(["inline"]),...p(["inverted"])}},a={args:{...r,inline:!0},argTypes:{...s(["inverted"]),...p(["inline"])}},l={render:A,args:{...r,inline:!0,inverted:!0},argTypes:{...p(["inline","inverted"])}},M=e=>c`<div style="width: 200px;">
    <mdc-link
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @focus="${n("onfocus")}"
      @blur="${n("onblur")}"
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
    >
  </div>`,d={render:M,args:{...r,children:"This is a link that will wrap onto multiple lines"}};var m,u,k;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(k=(u=t.parameters)==null?void 0:u.docs)==null?void 0:k.source}}};var v,g,h;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(h=(g=i.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var $,b,f;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(f=(b=o.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var y,L,I;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(I=(L=a.parameters)==null?void 0:L.docs)==null?void 0:I.source}}};var S,T,x;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(x=(T=l.parameters)==null?void 0:T.docs)==null?void 0:x.source}}};var w,O,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: renderMultiLine,
  args: {
    ...defaultArgs,
    children: 'This is a link that will wrap onto multiple lines'
  }
}`,...(_=(O=d.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const J=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted","MultiLineLink"];export{t as Example,a as InlineLink,l as InlineLinkInverted,d as MultiLineLink,i as StandaloneLink,o as StandaloneLinkInverted,J as __namedExportsOrder,H as default};
