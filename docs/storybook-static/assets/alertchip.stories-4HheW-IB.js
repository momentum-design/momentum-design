import"./index-BWUj1yno.js";import{i as h}from"./manifest-C_bJRT-C.js";import{k as c,t as s}from"./iframe-CYZ064vw.js";import{c as f,s as y}from"./commonArgTypes-BG7EqI50.js";import{h as O,a as $}from"./utils-B5QUENNQ.js";import{V as n}from"./alertchip.constants-LAtKovXE.js";import"./buttonsimple.component-DfTyNmtt.js";import"./DisabledMixin-CjuLaMSD.js";import"./KeyDownHandledMixin-DGzJ0rYO.js";import"./index-Cm4DuzN6.js";import"./IconNameMixin-DeWqQ5kO.js";import"./index-C-a6jsM_.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=e=>c` <mdc-alertchip
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    variant="${s(e.variant)}"
    label="${s(e.label)}"
    icon-name="${s(e["icon-name"])}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
  ></mdc-alertchip>`,U={title:"Components/chip/alertchip",tags:["autodocs"],component:"mdc-alertchip",render:T,argTypes:{variant:{control:"select",options:Object.values(n)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(h)},"auto-focus-on-mount":{control:"boolean"},...f,...y,...O(["soft-disabled","size","role","type","active","disabled","name","value","tabIndex","ariaStateKey"])}},o={args:{variant:n.NEUTRAL,label:"Alert"}},t={args:{variant:n.INFORMATIONAL,label:"Announcement","icon-name":"announcement-regular"}},r={render:()=>c` <div style="display: flex; gap: 0.5rem;">
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
}`,...(u=(d=t.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var A,v,b;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(b=(v=r.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const w=["Example","WithIcon","AllVariants"];export{r as AllVariants,o as Example,t as WithIcon,w as __namedExportsOrder,U as default};
