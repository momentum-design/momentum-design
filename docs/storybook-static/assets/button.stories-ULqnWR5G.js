import"./index-Dv5QNI8I.js";import{k as r}from"./lit-element-D5KKan5q.js";import{a as s}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as V}from"./if-defined-D5BV9-c0.js";import{c as j,s as q}from"./commonArgTypes-BluK8w5L.js";import{B as t,P as a,a as n,I as O}from"./button.constants-BpS-4nLb.js";import{B as o}from"./buttonsimple.constants-CNAgWCp2.js";import"./button.component-DvOKP7op.js";import"./provider.component-BaQC7CJH.js";import"./state-C0WmBOuD.js";import"./roles-DU0xbrD4.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-DLdQbWAF.js";import"./iframe-DujiTaoR.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const i=e=>r` <mdc-button
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
    ariaStateKey="${V(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    style="${e.style}"
    ?autofocus="${e.autofocus}"
    >${e.children}</mdc-button
  >`,Ie={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:i,parameters:{badges:["stable"]},argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(t)},size:{control:"select",options:Object.values(a)},color:{control:"select",options:Object.values(n)},type:{control:"select",options:Object.values(o)},ariaStateKey:{control:"text"},inverted:{control:"boolean"},autofocus:{control:"boolean"},...j,...q}},l={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0,inverted:!1}},d={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0}},c={render:e=>r` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${i(e)}
    </div>`,args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0,inverted:!0}},T={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0}},p={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0}},b={argTypes:{size:{options:Object.values(O)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:O[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},f={render:e=>r` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${i(e)}
    </div>`,argTypes:{size:{options:Object.values(O)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:O[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button",inverted:!0}},u={render:e=>i({...e,children:r`<mdc-text>${e.textWithinChildren}</mdc-text>`,style:"width: 150px;"}),args:{textWithinChildren:"Long text with icons",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0}},m={render:e=>i({...e,children:r`<mdc-text>${e.textWithinChildren}</mdc-text>`,style:"width: 150px;"}),args:{textWithinChildren:"Long text with icons","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:a[32],color:n.DEFAULT,type:o.BUTTON,role:"button",tabIndex:0}};var I,v,x;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var U,N,B;d.parameters={...d.parameters,docs:{...(U=d.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(B=(N=d.parameters)==null?void 0:N.docs)==null?void 0:B.source}}};var h,A,R;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var S,_,P;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(P=(_=T.parameters)==null?void 0:_.docs)==null?void 0:P.source}}};var y,L,E;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(E=(L=p.parameters)==null?void 0:L.docs)==null?void 0:E.source}}};var g,C,$;b.parameters={...b.parameters,docs:{...(g=b.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...($=(C=b.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var Y,z,M;f.parameters={...f.parameters,docs:{...(Y=f.parameters)==null?void 0:Y.docs,source:{originalSource:`{
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
}`,...(M=(z=f.parameters)==null?void 0:z.docs)==null?void 0:M.source}}};var k,D,F;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    children: html\`<mdc-text>\${args.textWithinChildren}</mdc-text>\`,
    style: 'width: 150px;'
  }),
  args: {
    textWithinChildren: 'Long text with icons',
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
}`,...(F=(D=u.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var W,Z,w;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    children: html\`<mdc-text>\${args.textWithinChildren}</mdc-text>\`,
    style: 'width: 150px;'
  }),
  args: {
    textWithinChildren: 'Long text with icons',
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
}`,...(w=(Z=m.parameters)==null?void 0:Z.docs)==null?void 0:w.source}}};const ve=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted","PillButtonEllipsis","PillWithPrefixIconEllipsis"];export{l as Example,b as IconButton,f as IconButtonInverted,d as PillButton,u as PillButtonEllipsis,c as PillButtonInverted,p as PillWithPostfixIcon,T as PillWithPrefixIcon,m as PillWithPrefixIconEllipsis,ve as __namedExportsOrder,Ie as default};
