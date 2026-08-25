import{v as S,w as L,q as y,y as i,k as N,R as E,t as o}from"./iframe-DKmoi846.js";import{i as c}from"./manifest-DISj2anu.js";import{c as v,s as w}from"./commonArgTypes-BG7EqI50.js";import{h as B}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:t}=__STORYBOOK_MODULE_ACTIONS__,P=e=>N`<div role="${E.MAIN}">
    <mdc-buttonlink
      @click="${t("onclick")}"
      @keydown="${t("onkeydown")}"
      @focus="${t("onfocus")}"
      @blur="${t("onblur")}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      prefix-icon="${o(e["prefix-icon"])}"
      postfix-icon="${o(e["postfix-icon"])}"
      size="${o(e.size)}"
      color="${o(e.color)}"
      variant="${o(e.variant)}"
      href="${o(e.href)}"
      target="${o(e.target)}"
      rel="${o(e.rel)}"
      download="${o(e.download)}"
      ping="${o(e.ping)}"
      hreflang="${o(e.hreflang)}"
      type="${o(e.type)}"
      referrerpolicy="${o(e.referrerpolicy)}"
      data-aria-label="${o(e["data-aria-label"])}"
      >${e.children}</mdc-buttonlink
    >
  </div>`,j={title:"Components/buttonlink",tags:["autodocs"],component:"mdc-buttonlink",render:P,argTypes:{children:{description:"Text label for the buttonLink.",control:"text"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},"prefix-icon":{control:"select",options:Object.keys(c)},"postfix-icon":{control:"select",options:Object.keys(c)},size:{control:"select",options:Object.values(S)},color:{control:"select",options:Object.values(L)},variant:{control:"select",options:Object.values(y)},href:{control:"text"},target:{control:"text"},rel:{control:"text"},download:{control:"text"},ping:{control:"text"},hreflang:{control:"text"},type:{control:"text"},referrerpolicy:{control:"text"},"data-aria-label":{control:"text"},...B(["icon-name","inline","inverted","handleNavigation"]),...v,...w}},r={args:{children:"VisitLink",disabled:!1,"soft-disabled":!1,size:S[32],color:L.DEFAULT,variant:y.PRIMARY,href:"https://www.webex.com",target:"_blank",rel:"noopener noreferrer"}},n={args:{...r.args}},a={args:{...r.args,"prefix-icon":"placeholder-bold"}},s={args:{...r.args,"postfix-icon":"placeholder-bold"}},l={argTypes:{size:{options:Object.values(i)}},args:{...r.args,children:"","prefix-icon":"placeholder-bold",size:i[32],"data-aria-label":"icon buttonLink"}};var d,p,f;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    children: 'VisitLink',
    disabled: false,
    'soft-disabled': false,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    variant: BUTTON_VARIANTS.PRIMARY,
    href: 'https://www.webex.com',
    target: '_blank',
    rel: 'noopener noreferrer'
  }
}`,...(f=(p=r.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var m,b,u;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(u=(b=n.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var x,h,O;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold'
  }
}`,...(O=(h=a.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var T,g,_;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    'postfix-icon': 'placeholder-bold'
  }
}`,...(_=(g=s.parameters)==null?void 0:g.docs)==null?void 0:_.source}}};var k,I,$;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    }
  },
  args: {
    ...Example.args,
    children: '',
    'prefix-icon': 'placeholder-bold',
    size: ICON_BUTTON_SIZES[32],
    'data-aria-label': 'icon buttonLink'
  }
}`,...($=(I=l.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};const M=["Example","PillButtonLink","PillWithPrefixIcon","PillWithPostfixIcon","IconButtonLink"];export{r as Example,l as IconButtonLink,n as PillButtonLink,s as PillWithPostfixIcon,a as PillWithPrefixIcon,M as __namedExportsOrder,j as default};
