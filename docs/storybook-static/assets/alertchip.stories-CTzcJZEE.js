import{b as r,k as c,t as s}from"./iframe-DKmoi846.js";import{i as h}from"./manifest-DISj2anu.js";import{c as y,s as f}from"./commonArgTypes-BG7EqI50.js";import{h as O,a as $}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,T=e=>c` <mdc-alertchip
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    variant="${s(e.variant)}"
    label="${s(e.label)}"
    icon-name="${s(e["icon-name"])}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
  ></mdc-alertchip>`,R={title:"Components/chip/alertchip",tags:["autodocs"],component:"mdc-alertchip",render:T,argTypes:{variant:{control:"select",options:Object.values(r)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(h)},"auto-focus-on-mount":{control:"boolean"},...y,...f,...O(["soft-disabled","size","role","type","active","disabled","name","value","tabIndex","ariaStateKey"])}},n={args:{variant:r.NEUTRAL,label:"Alert"}},o={args:{variant:r.INFORMATIONAL,label:"Announcement","icon-name":"announcement-regular"}},t={render:()=>c` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(r).map(e=>c` <mdc-alertchip variant="${e}" label="${e}"></mdc-alertchip> `)}
    </div>`,...$()};var l,i,m;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.NEUTRAL,
    label: 'Alert'
  }
}`,...(m=(i=n.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,d,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    variant: VARIANTS.INFORMATIONAL,
    label: 'Announcement',
    'icon-name': 'announcement-regular'
  }
}`,...(u=(d=o.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var A,v,b;t.parameters={...t.parameters,docs:{...(A=t.parameters)==null?void 0:A.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(VARIANTS).map(variant => html` <mdc-alertchip variant="${variant}" label="${variant}"></mdc-alertchip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(b=(v=t.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};const x=["Example","WithIcon","AllVariants"];export{t as AllVariants,n as Example,o as WithIcon,x as __namedExportsOrder,R as default};
