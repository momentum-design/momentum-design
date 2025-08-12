import"./index-B8i_95QC.js";import{k as I}from"./lit-element-D5KKan5q.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as j}from"./if-defined-D5BV9-c0.js";import{c as W,s as q}from"./commonArgTypes-BluK8w5L.js";import{B as o,P as a,a as n,I as O}from"./button.constants-BpS-4nLb.js";import{B as t}from"./buttonsimple.constants-CNAgWCp2.js";import"./button.component-CnLy9CQy.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./roles-DU0xbrD4.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-C8hUXlI_.js";import"./iframe-BTdpgPYp.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const r=e=>I` <mdc-button
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
    ariaStateKey="${j(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    style="${e.style}"
    ?autofocus="${e.autofocus}"
    >${e.children}</mdc-button
  >`,me={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:r,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(o)},size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(t)},ariaStateKey:{control:"text"},inverted:{control:"boolean"},autofocus:{control:"boolean"},...W,...q}},i={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0,inverted:!1}},l={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0}},c={render:e=>I` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${r(e)}
    </div>`,args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0,inverted:!0}},d={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0}},T={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0}},p={argTypes:{size:{options:Object.values(O)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:O[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},b={render:e=>I` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${r(e)}
    </div>`,argTypes:{size:{options:Object.values(O)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:O[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button",inverted:!0}},f={render:e=>r({...e,style:"width: 150px;"}),args:{children:"Long text with icons",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0}},u={render:e=>r({...e,style:"width: 150px;"}),args:{children:"Long text with icons","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:o.PRIMARY,size:a[32],color:n.DEFAULT,type:t.BUTTON,role:"button",tabIndex:0}};var m,v,U;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(U=(v=i.parameters)==null?void 0:v.docs)==null?void 0:U.source}}};var N,B,x;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(x=(B=l.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var A,R,S;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(S=(R=c.parameters)==null?void 0:R.docs)==null?void 0:S.source}}};var _,P,h;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(h=(P=d.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};var y,L,E;T.parameters={...T.parameters,docs:{...(y=T.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(L=T.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var g,Y,z;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(z=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:z.source}}};var $,M,k;b.parameters={...b.parameters,docs:{...($=b.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(k=(M=b.parameters)==null?void 0:M.docs)==null?void 0:k.source}}};var C,D,F;f.parameters={...f.parameters,docs:{...(C=f.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    children: 'Long text with icons',
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
}`,...(F=(D=f.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var Z,w,V;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    children: 'Long text with icons',
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
}`,...(V=(w=u.parameters)==null?void 0:w.docs)==null?void 0:V.source}}};const ve=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted","PillButtonEllipsis","PillWithPrefixIconEllipsis"];export{i as Example,p as IconButton,b as IconButtonInverted,l as PillButton,f as PillButtonEllipsis,c as PillButtonInverted,T as PillWithPostfixIcon,d as PillWithPrefixIcon,u as PillWithPrefixIconEllipsis,ve as __namedExportsOrder,me as default};
