import"./index-COeLUiJN.js";import{k as E}from"./lit-element-CHllvULs.js";import{a as r}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{B as o,P as n,a as t,I as p}from"./button.constants-BmMoyae9.js";import{c as h,s as z}from"./commonArgTypes-BluK8w5L.js";import{B as a}from"./buttonsimple.component-Dc4O0li7.js";import"./index-HW6KrQZO.js";import"./state-CWckTc1X.js";import"./button.utils-BKs-jRfA.js";import"./index-DOSJdzM7.js";import"./iframe-OoYgEOCU.js";import"../sb-preview/runtime.js";import"./index-CEbgplXA.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./DisabledMixin-DBt9didn.js";const $=e=>E`
  <mdc-button 
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
  >${e.children}</mdc-button>`,X={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:$,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(o)},size:{control:"select",options:Object.values(n)},color:{control:"select",options:Object.values(t)},type:{control:"select",options:Object.values(a)},...h,...z}},s={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},i={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},l={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},c={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:n[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},d={argTypes:{size:{options:Object.values(p)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:p[32],color:t.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},T={render:()=>E`
    <mdc-button variant='tertiary' size='20' prefix-icon='cancel-bold' color='default'>
      test
    </mdc-button>
  `};var b,f,m;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(m=(f=s.parameters)==null?void 0:f.docs)==null?void 0:m.source}}};var u,O,I;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(I=(O=i.parameters)==null?void 0:O.docs)==null?void 0:I.source}}};var U,N,B;l.parameters={...l.parameters,docs:{...(U=l.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(N=l.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var x,A,R;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,v,S;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(S=(v=d.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var P,L,y;T.parameters={...T.parameters,docs:{...(P=T.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-button variant='tertiary' size='20' prefix-icon='cancel-bold' color='default'>
      test
    </mdc-button>
  \`
}`,...(y=(L=T.parameters)==null?void 0:L.docs)==null?void 0:y.source}}};const ee=["Example","PillButton","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","Test"];export{s as Example,d as IconButton,i as PillButton,c as PillWithPostfixIcon,l as PillWithPrefixIcon,T as Test,ee as __namedExportsOrder,X as default};
