import"./index-BW3CPo0p.js";import{k as f}from"./lit-element-D5KKan5q.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as z}from"./if-defined-D5BV9-c0.js";import{B as o,P as n,a as t,I as p}from"./button.constants-D0QAbDxL.js";import{c as C,s as M}from"./commonArgTypes-BluK8w5L.js";import{B as a}from"./buttonsimple.constants-CGc1uJX6.js";import"./button.component-DuJ_hCOI.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./button.utils-rNW36Ji7.js";import"./index-DKrr3WK1.js";import"./iframe-CbenrOHq.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const u=e=>f` <mdc-button
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
    ariaStateKey="${z(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    >${e.children}</mdc-button
  >`,le={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:u,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(o)},size:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(t)},type:{control:"select",options:Object.values(a)},ariaStateKey:{control:"text"},inverted:{control:"boolean"},...C,...M}},i={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,inverted:!1}},s={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},l={render:e=>f` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${u(e)}
    </div>`,args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,inverted:!0}},c={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},d={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},T={argTypes:{size:{options:Object.values(p)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:p[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},b={render:e=>f` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${u(e)}
    </div>`,argTypes:{size:{options:Object.values(p)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:p[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button",inverted:!0}};var m,O,I;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
    tabIndex: 0,
    inverted: false
  }
}`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var v,U,N;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(N=(U=s.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var B,A,R;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: args => html\` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      \${render(args)}
    </div>\`,
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
    tabIndex: 0,
    inverted: true
  }
}`,...(R=(A=l.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var S,_,x;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(_=c.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var P,y,h;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(h=(y=d.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var E,L,g;T.parameters={...T.parameters,docs:{...(E=T.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(g=(L=T.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var $,k,Y;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      \${render(args)}
    </div>\`,
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
    'aria-label': 'icon button',
    inverted: true
  }
}`,...(Y=(k=b.parameters)==null?void 0:k.docs)==null?void 0:Y.source}}};const ce=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted"];export{i as Example,T as IconButton,b as IconButtonInverted,s as PillButton,l as PillButtonInverted,d as PillWithPostfixIcon,c as PillWithPrefixIcon,ce as __namedExportsOrder,le as default};
