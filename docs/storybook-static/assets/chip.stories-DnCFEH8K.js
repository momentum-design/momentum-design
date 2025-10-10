import"./index-B9w9w21y.js";import{k as t}from"./iframe-J50dDciQ.js";import{c as y,s as g}from"./commonArgTypes-BluK8w5L.js";import{a as A}from"./utils-Dd_sfl9-.js";import{C as e}from"./staticchip.component-BkBYQFcr.js";import"./chip.component-coM1uq7f.js";import"./IconNameMixin-BgLv-JeQ.js";import"./buttonsimple.component-CbJPQNAt.js";import"./keys-hFXe221I.js";import"./DisabledMixin-H98zMGT5.js";import"./TabIndexMixin-BQNgw7Ub.js";import"./index-tkVe0nKe.js";import"./preload-helper-C1FmrZbK.js";import"./index-DDdGDe2b.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,C=o=>t` <mdc-chip
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    color="${o.color}"
    label="${o.label}"
    icon-name="${o["icon-name"]}"
    ?disabled="${o.disabled}"
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
  ></mdc-chip>`,z={title:"Components/chip/label",tags:["autodocs"],component:"mdc-chip",render:C,argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...y,...g,...A(["soft-disabled","size","role","type","active"])}},r={args:{color:e.DEFAULT,label:"Label",disabled:!1}},l={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},s={render:()=>t` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(e).map(o=>t` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`};var n,i,d;r.parameters={...r.parameters,docs:{...(n=r.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(d=(i=r.parameters)==null?void 0:i.docs)==null?void 0:d.source}}};var m,p,b;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var f,h,$;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`\n}',...($=(h=s.parameters)==null?void 0:h.docs)==null?void 0:$.source}}};const B=["Example","WithIcon","Disabled","AllColors"];export{s as AllColors,c as Disabled,r as Example,l as WithIcon,B as __namedExportsOrder,z as default};
