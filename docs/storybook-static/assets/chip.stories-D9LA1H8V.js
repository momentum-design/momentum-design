import{L as e,k as n,R as A,t as a}from"./iframe-DKmoi846.js";import{i as g}from"./manifest-DISj2anu.js";import{c as C,s as E}from"./commonArgTypes-BG7EqI50.js";import{h as T,a as k}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,S=o=>n` <mdc-chip
    @click="${l("onclick")}"
    @keydown="${l("onkeydown")}"
    @keyup="${l("onkeyup")}"
    @focus="${l("onfocus")}"
    color="${a(o.color)}"
    label="${a(o.label)}"
    icon-name="${a(o["icon-name"])}"
    ?disabled="${o.disabled}"
    ?auto-focus-on-mount="${o["auto-focus-on-mount"]}"
    ariaStateKey="${a(o.ariaStateKey)}"
  ></mdc-chip>`,U={title:"Components/chip/chip",tags:["autodocs"],component:"mdc-chip",render:S,argTypes:{color:{control:"select",options:Object.values(e)},label:{control:"text"},"icon-name":{control:"select",options:Object.keys(g)},disabled:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},ariaStateKey:{control:"text"},...C,...E,...T(["soft-disabled","size","role","type","active","name","value","--mdc-button-background","--mdc-button-border-color","--mdc-button-height","--mdc-button-text-color",'Slot Name: ""'])}},r={args:{color:e.DEFAULT,label:"Label",disabled:!1}},c={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!1}},s={args:{color:e.DEFAULT,label:"Label","icon-name":"placeholder-bold",disabled:!0}},t={render:()=>n` <div style="display: flex; gap: 0.5rem;" role="${A.MAIN}">
      ${Object.values(e).map(o=>n` <mdc-chip color="${o}" label="${o}"></mdc-chip> `)}
    </div>`,...k()};var d,i,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    disabled: false
  }
}`,...(m=(i=r.parameters)==null?void 0:i.docs)==null?void 0:m.source}}};var p,b,u;c.parameters={...c.parameters,docs:{...(p=c.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: false
  }
}`,...(u=(b=c.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var h,O,L;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    color: COLOR.DEFAULT,
    label: 'Label',
    'icon-name': 'placeholder-bold',
    disabled: true
  }
}`,...(L=(O=s.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var f,$,y;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:'{\n  render: () => html` <div style="display: flex; gap: 0.5rem;" role="${ROLE.MAIN}">\n      ${Object.values(COLOR).map(color => html` <mdc-chip color="${color}" label="${color}"></mdc-chip> `)}\n    </div>`,\n  ...hideAllControls()\n}',...(y=($=t.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const F=["Example","WithIcon","Disabled","AllColors"];export{t as AllColors,s as Disabled,r as Example,c as WithIcon,F as __namedExportsOrder,U as default};
