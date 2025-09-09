import{L as A,T as w}from"./linksimple.component-DpE2jXnl.js";import{k as L}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{a as s,t as O,r as l}from"./utils-CFOyPOhY.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-CqVtAZCJ.js";import"./v4-CQkTLCs1.js";A.register(w);const C=e=>L`<mdc-linksimple
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
    tabindex="${e.tabIndex}"
    >${e.children}</mdc-linksimple
  >`,S=e=>L` <div style="background-color: var(--mds-color-theme-inverted-background-normal); padding: 8px;">
    ${C(e)}
  </div>`,z={title:"Components/linksimple",tags:["autodocs"],component:"mdc-linksimple",render:C,parameters:{badges:["stable"]},argTypes:{children:{description:"Text content to be displayed.",control:"text"},disabled:{control:"boolean"},inline:{control:"boolean"},inverted:{control:"boolean"},href:{control:"text"},target:{control:"text"},rel:{control:"text"},tabIndex:{control:"number"},...s(["handleNavigation"]),...O(["--mdc-link-border-radius","--mdc-link-color-active","--mdc-link-color-disabled","--mdc-link-color-hover","--mdc-link-color-normal","--mdc-link-inverted-color-active","--mdc-link-inverted-color-disabled","--mdc-link-inverted-color-hover","--mdc-link-inverted-color-normal"])}},n={children:"Visit Linksimple",disabled:!1,inline:!1,inverted:!1,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer",tabIndex:0},o={args:{...n}},t={args:{...n},argTypes:{...s(["inline","inverted"])}},i={render:S,args:{...n,inverted:!0},argTypes:{...s(["inline"]),...l(["inverted"])}},a={args:{...n,inline:!0},argTypes:{...s(["inverted"]),...l(["inline"])}},d={render:S,args:{...n,inline:!0,inverted:!0},argTypes:{...l(["inline","inverted"])}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,v;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    ...defaultArgs
  },
  argTypes: {
    ...hideControls(['inline', 'inverted'])
  }
}`,...(v=(g=t.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var k,b,f;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inverted: true
  },
  argTypes: {
    ...hideControls(['inline']),
    ...readOnlyControls(['inverted'])
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var h,y,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    inline: true
  },
  argTypes: {
    ...hideControls(['inverted']),
    ...readOnlyControls(['inline'])
  }
}`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var I,$,T;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: renderWithInvertedBackground,
  args: {
    ...defaultArgs,
    inline: true,
    inverted: true
  },
  argTypes: {
    ...readOnlyControls(['inline', 'inverted'])
  }
}`,...(T=($=d.parameters)==null?void 0:$.docs)==null?void 0:T.source}}};const D=["Example","StandaloneLink","StandaloneLinkInverted","InlineLink","InlineLinkInverted"];export{o as Example,a as InlineLink,d as InlineLinkInverted,t as StandaloneLink,i as StandaloneLinkInverted,D as __namedExportsOrder,z as default};
