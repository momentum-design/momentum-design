import"./index-5yRKEueP.js";import{k as n}from"./iframe-DhGqAUJy.js";import{c as y,s as g}from"./commonArgTypes-BluK8w5L.js";import{a as A}from"./utils-Dd_sfl9-.js";import{C as e}from"./staticchip.component-CS-J7A13.js";import"./chip.component-DlSQSMrV.js";import"./IconNameMixin-9Qg181rg.js";import"./buttonsimple.component-Cs5gzG_Z.js";import"./TabIndexMixin-Bv4GD8lE.js";import"./DisabledMixin-CrYPrAlK.js";import"./index-DviT2LAi.js";import"./preload-helper-C1FmrZbK.js";import"./index-DLnXiPEA.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,C=o=>n` <mdc-chip
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    color="${o.color}"
    label="${o.label}"
    icon-name="${o["icon-name"]}"
    ?disabled="${o.disabled}"
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
  ></mdc-chip>`,W={title:"Components/chip/label",tags:["autodocs"],component:"mdc-chip",render:C,argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...y,...g,...A(["soft-disabled","size","role","type","active"])}},r={args:{color:e.DEFAULT,label:"Label",disabled:!1}},l={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},s={render:()=>n` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(e).map(o=>n` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`};var t,d,i;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(i=(d=r.parameters)==null?void 0:d.docs)==null?void 0:i.source}}};var m,p,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false
  }
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,O,L;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var f,h,$;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`\n}',...($=(h=s.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const z=["Example","WithIcon","Disabled","AllColors"];export{s as AllColors,c as Disabled,r as Example,l as WithIcon,z as __namedExportsOrder,W as default};
