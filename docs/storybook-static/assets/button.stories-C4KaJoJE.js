import"./index-Bc5D5Wgx.js";import{k as v}from"./lit-element-D5KKan5q.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{B as o,P as n,a as t,I as T}from"./button.constants--xhTiFYY.js";import{c as P,s as L}from"./commonArgTypes-BluK8w5L.js";import{B as a}from"./buttonsimple.component-Djhz-GfJ.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.utils-CP-c2W9c.js";import"./index-BuqrN50_.js";import"./iframe-CkcfxWHJ.js";import"../sb-preview/runtime.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";const E=e=>v`
  <mdc-button 
  @click="${s("onclick")}"
  @keydown="${s("onkeydown")}"
  @keyup="${s("onkeyup")}"
  @focus="${s("onfocus")}"
  ?active="${e.active}"
  ?disabled="${e.disabled}"
  ?soft-disabled="${e["soft-disabled"]}"
  variant="${e.variant}"
  size="${e.size}"
  color="${e.color}"
  prefix-icon="${e["prefix-icon"]}"
  postfix-icon="${e["postfix-icon"]}"
  type="${e.type}"
  role="${e.role}"
  tabIndex="${e.tabIndex}"
  aria-label="${e["aria-label"]}"
  >${e.children}</mdc-button>`,J={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:E,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(o)},size:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(t)},type:{control:"select",options:Object.values(a)},...P,...L}},i={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},r={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},l={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},c={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},d={argTypes:{size:{options:Object.values(T)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:T[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}};var p,b,f;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(f=(b=i.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var O,I,m;r.parameters={...r.parameters,docs:{...(O=r.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    children: 'Click Me',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(m=(I=r.parameters)==null?void 0:I.docs)==null?void 0:m.source}}};var u,U,N;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(N=(U=l.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var B,x,A;c.parameters={...c.parameters,docs:{...(B=c.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: PILL_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0
  }
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var R,_,S;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  argTypes: {
    size: {
      options: Object.values(ICON_BUTTON_SIZES)
    },
    'aria-label': {
      description: 'Aria label for the icon button. Required for accessibility.'
    }
  },
  args: {
    'prefix-icon': 'placeholder-bold',
    active: false,
    disabled: false,
    'soft-disabled': false,
    variant: BUTTON_VARIANTS.PRIMARY,
    size: ICON_BUTTON_SIZES[32],
    color: BUTTON_COLORS.DEFAULT,
    type: BUTTON_TYPE.BUTTON,
    role: 'button',
    tabIndex: 0,
    'aria-label': 'icon button'
  }
}`,...(S=(_=d.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};const K=["Example","PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton"];export{i as Example,d as IconButton,r as PillButton,c as PillWithPostfixIcon,l as PillWithPrefixIcon,K as __namedExportsOrder,J as default};
