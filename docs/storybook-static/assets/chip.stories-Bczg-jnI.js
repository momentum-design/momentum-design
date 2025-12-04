import"./index-BIZyJC6N.js";import{k as n}from"./iframe-BgYPXA4a.js";import{c as y,s as g}from"./commonArgTypes-BG7EqI50.js";import{h as A}from"./utils-D6nie9pS.js";import{C as e}from"./staticchip.component-DNfqldZN.js";import"./chip.component-CnRNq0ax.js";import"./IconNameMixin-De-RzJpl.js";import"./buttonsimple.component-BwXd4-Es.js";import"./TabIndexMixin-cV3aLDAV.js";import"./DisabledMixin-ypDYNgI1.js";import"./index-8NRRzbu7.js";import"./preload-helper-C1FmrZbK.js";import"./index-BZB1R1_f.js";import"./index-DTrDRi1E.js";const{action:a}=__STORYBOOK_MODULE_ACTIONS__,C=o=>n` <mdc-chip
    @click="${a("onclick")}"
    @keydown="${a("onkeydown")}"
    @keyup="${a("onkeyup")}"
    @focus="${a("onfocus")}"
    color="${o.color}"
    label="${o.label}"
    icon-name="${o["icon-name"]}"
    ?disabled="${o.disabled}"
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
  ></mdc-chip>`,W={title:"Components/chip/chip",tags:["autodocs"],component:"mdc-chip",render:C,argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"text"},disabled:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...y,...g,...A(["soft-disabled","size","role","type","active"])}},r={args:{color:e.DEFAULT,label:"Label",disabled:!1}},l={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},s={render:()=>n` <div style="display: flex; gap: 0.5rem;">
      ${Object.values(e).map(o=>n` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`};var t,i,d;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
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
}`,...(b=(p=l.parameters)==null?void 0:p.docs)==null?void 0:b.source}}};var u,h,O;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(O=(h=c.parameters)==null?void 0:h.docs)==null?void 0:O.source}}};var L,f,$;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`\n}',...($=(f=s.parameters)==null?void 0:f.docs)==null?void 0:$.source}}};const z=["Example","WithIcon","Disabled","AllColors"];export{s as AllColors,c as Disabled,r as Example,l as WithIcon,z as __namedExportsOrder,W as default};
