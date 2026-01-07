import"./index-BeTPxAGm.js";import{k as n,R as A}from"./iframe-d_zaQfcU.js";import{i as g}from"./manifest-gC2C1jpI.js";import{t as a}from"./if-defined-CJ88QP4X.js";import{c as C,s as E}from"./commonArgTypes-BG7EqI50.js";import{h as T,a as k}from"./utils-D6nie9pS.js";import{C as e}from"./staticchip.component-BBxGOys1.js";import"./chip.component-DRwyrqZM.js";import"./IconNameMixin-DCEwDRRz.js";import"./buttonsimple.component-CdddaYua.js";import"./TabIndexMixin-BJQMSLME.js";import"./DisabledMixin-ChCzWmbj.js";import"./index-BGrZUgLa.js";import"./preload-helper-C1FmrZbK.js";import"./index-wTs15Rgo.js";import"./index-DTrDRi1E.js";const{action:r}=__STORYBOOK_MODULE_ACTIONS__,S=o=>n` <mdc-chip
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
    color="${a(o.color)}"
    label="${a(o.label)}"
    icon-name="${a(o["icon-name"])}"
    ?disabled="${o.disabled}"
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
    ariaStateKey="${a(o.ariaStateKey)}"
  ></mdc-chip>`,Y={title:"Components/chip/chip",tags:["autodocs"],component:"mdc-chip",render:S,argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(g)},disabled:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},ariaStateKey:{control:"text"},...C,...E,...T(["soft-disabled","size","role","type","active","name","value","--mdc-button-background","--mdc-button-border-color","--mdc-button-height","--mdc-button-text-color",'Slot Name: ""'])}},l={args:{color:e.DEFAULT,label:"Label",disabled:!1}},t={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},s={render:()=>n` <div style="display: flex; gap: 0.5rem;" role="${A.MAIN}">
      ${Object.values(e).map(o=>n` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`,...k()};var i,d,m;l.parameters={...l.parameters,docs:{...(i=l.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(m=(d=l.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var p,b,u;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false
  }
}`,...(u=(b=t.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,O,f;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(f=(O=c.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var L,$,y;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const q=["Example","WithIcon","Disabled","AllColors"];export{s as AllColors,c as Disabled,l as Example,t as WithIcon,q as __namedExportsOrder,Y as default};
