import"./index-j_eG_Oy1.js";import{i as h}from"./manifest-BlmwKx28.js";import{k as c}from"./iframe-DDdyYKcM.js";import{t as s}from"./if-defined-BbSBl4wr.js";import{c as f,s as y}from"./commonArgTypes-BG7EqI50.js";import{h as O,a as $}from"./utils-B5QUENNQ.js";import{V as n}from"./alertchip.constants-zkupLOW0.js";import"./buttonsimple.component-2qLehltN.js";import"./DisabledMixin-xgzT86Kg.js";import"./KeyDownHandledMixin-D_BymDsx.js";import"./index-BhcY06jc.js";import"./IconNameMixin-BMkvk5fD.js";import"./index-SSEGGe-_.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=e=>c` <mdc-alertchip
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    variant="${s(e.variant)}"
    label="${s(e.label)}"
    icon-name="${s(e["icon-name"])}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
  ></mdc-alertchip>`,w={title:"Components/chip/alertchip",tags:["autodocs"],component:"mdc-alertchip",render:T,argTypes:{variant:{control:"select",options:Object.values(n)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(h)},"auto-focus-on-mount":{control:"boolean"},...f,...y,...O(["soft-disabled","size","role","type","active","disabled","name","value","tabIndex","ariaStateKey"])}},o={args:{variant:n.NEUTRAL,label:"Alert"}},t={args:{variant:n.INFORMATIONAL,label:"Announcement","icon-name":"announcement-regular"}},r={render:()=>c` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(n).map(e=>c` <mdc-alertchip variant="${e}" label="${e}"></mdc-alertchip> `)}
    </div>`,...$()};var l,i,m;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(m=(i=o.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.INFORMATIONAL,
    label: 'Announcement',
    'icon-name': 'announcement-regular'
  }
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var A,v,b;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const F=["Example","WithIcon","AllVariants"];export{r as AllVariants,o as Example,t as WithIcon,F as __namedExportsOrder,w as default};
