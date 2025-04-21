import"./index-CnZR9KoS.js";import{k as v}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as P}from"./if-defined-D5BV9-c0.js";import{B as o,P as n,a as t,I as T}from"./button.constants-Bfip8hYE.js";import{c as y,s as L}from"./commonArgTypes-BluK8w5L.js";import{B as a}from"./buttonsimple.component-9hW3yvQZ.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.utils-rNW36Ji7.js";import"./index-pwfMUtoV.js";import"./iframe-Bn2oiskT.js";import"../sb-preview/runtime.js";import"./index-MA1r3zrt.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";const E=e=>v` <mdc-button
    @click="${r("onclick")}"
    @keydown="${r("onkeydown")}"
    @keyup="${r("onkeyup")}"
    @focus="${r("onfocus")}"
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
    ariaStateKey="${P(e.ariaStateKey)}"
    >${e.children}</mdc-button
  >`,Q={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:E,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(o)},size:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(t)},type:{control:"select",options:Object.values(a)},ariaStateKey:{control:"text"},...y,...L}},s={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},i={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},l={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},c={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},d={argTypes:{size:{options:Object.values(T)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:T[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}};var p,b,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(b=s.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var O,m,I;i.parameters={...i.parameters,docs:{...(O=i.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(I=(m=i.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};var u,U,N;l.parameters={...l.parameters,docs:{...(u=l.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(A=(x=c.parameters)==null?void 0:x.docs)==null?void 0:A.source}}};var R,S,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};const X=["Example","PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton"];export{s as Example,d as IconButton,i as PillButton,c as PillWithPostfixIcon,l as PillWithPrefixIcon,X as __namedExportsOrder,Q as default};
