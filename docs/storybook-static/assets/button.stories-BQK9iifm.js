import"./index-KClAl6Z8.js";import"./index-CEdo1jHU.js";import"./index-B-9UJB_x.js";import{i as x}from"./manifest-DRrdiy54.js";import{B as y,P as ee,b as v,c as g,k as a,I as $}from"./iframe-Dy-DGTYu.js";import{t as n}from"./if-defined-DQi-bxBl.js";import{c as ne,s as oe}from"./commonArgTypes-BG7EqI50.js";import"./button.component-BlUx4uIo.js";import"./buttonsimple.component-1j1CMW1A.js";import"./TabIndexMixin-DL7nUMXR.js";import"./DisabledMixin-BSyc0IfY.js";import"./button.utils-rNW36Ji7.js";import"./index-CSzgdE39.js";import"./preload-helper-C1FmrZbK.js";import"./index-BLcm5VWN.js";import"./index-DTrDRi1E.js";import"./ref-B5tEIqet.js";import"./directive-Ctav8iJK.js";const{action:o}=__STORYBOOK_MODULE_ACTIONS__,i=e=>a`<mdc-button
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    variant="${n(e.variant)}"
    size="${n(e.size)}"
    color="${n(e.color)}"
    prefix-icon="${n(e["prefix-icon"])}"
    postfix-icon="${n(e["postfix-icon"])}"
    type="${n(e.type)}"
    name="${n(e.name)}"
    value="${n(e.value)}"
    role="${n(e.role)}"
    tabIndex="${n(e.tabIndex)}"
    aria-label="${n(e["aria-label"])}"
    ariaStateKey="${n(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    style="${n(e.style)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-button
  >`,he={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:i,argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"select",options:Object.keys(x)},"postfix-icon":{control:"select",options:Object.keys(x)},active:{control:"boolean"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only buttons.",table:{category:"attributes"}},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(y)},size:{control:"select",options:Object.values(ee)},color:{control:"select",options:Object.values(v)},type:{control:"select",options:Object.values(g)},name:{control:"text"},value:{control:"text"},ariaStateKey:{control:"text"},inverted:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...ne,...oe}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:y.PRIMARY,size:ee[32],color:v.DEFAULT,type:g.BUTTON,role:"button",tabIndex:0,inverted:!1}},s={args:{...t.args}},l={render:e=>a`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${i(e)}
    </div>`,args:{...t.args,inverted:!0}},c={args:{...t.args,children:"Left Icon","prefix-icon":"placeholder-bold"}},d={args:{...t.args,children:"Right Icon","postfix-icon":"placeholder-bold"}},r={argTypes:{size:{options:Object.values($)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:y.PRIMARY,size:$[32],color:v.DEFAULT,type:g.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},p={render:e=>a`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${i(e)}
    </div>`,argTypes:{size:{options:Object.values($)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{...r.args,inverted:!0}},u={render:e=>i({...e,style:"width: 150px;"}),args:{...t.args,children:"Long text with icons"}},m={render:e=>i({...e,style:"width: 150px;"}),args:{...t.args,children:"Long text with icons","prefix-icon":"placeholder-bold"}},f={render:e=>a`<mdc-button
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${n(e.variant)}"
      size="${n(e.size)}"
      color="${n(e.color)}"
      type="${n(e.type)}"
      role="${n(e.role)}"
      tabIndex="${n(e.tabIndex)}"
      aria-label="${n(e["aria-label"])}"
      ariaStateKey="${n(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${n(e.style)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      ${e.children}
    </mdc-button>`,args:{...t.args,children:"Loading..."}},b={render:e=>a`<mdc-button
      @click="${o("onclick")}"
      @keydown="${o("onkeydown")}"
      @keyup="${o("onkeyup")}"
      @focus="${o("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${n(e.variant)}"
      size="${n(e.size)}"
      color="${n(e.color)}"
      type="${n(e.type)}"
      role="${n(e.role)}"
      tabIndex="${n(e.tabIndex)}"
      aria-label="${n(e["aria-label"])}"
      ariaStateKey="${n(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${n(e.style)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      ${e.children}
    </mdc-button>`,args:{...t.args,children:"Wow"}};var h,T,I;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(I=(T=t.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var k,S,O;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(O=(S=s.parameters)==null?void 0:S.docs)==null?void 0:O.source}}};var P,B,E;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => html\`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      \${render(args)}
    </div>\`,
  args: {
    ...Example.args,
    inverted: true
  }
}`,...(E=(B=l.parameters)==null?void 0:B.docs)==null?void 0:E.source}}};var _,w,N;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var D,U,R;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold'
  }
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var z,A,L;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(L=(A=r.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var K,W,C;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => html\`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
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
    ...IconButton.args,
    inverted: true
  }
}`,...(C=(W=p.parameters)==null?void 0:W.docs)==null?void 0:C.source}}};var j,M,Y;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    ...Example.args,
    children: 'Long text with icons'
  }
}`,...(Y=(M=u.parameters)==null?void 0:M.docs)==null?void 0:Y.source}}};var Z,q,F;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    ...Example.args,
    children: 'Long text with icons',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(F=(q=m.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var V,G,H;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => html\`<mdc-button
      @click="\${action('onclick')}"
      @keydown="\${action('onkeydown')}"
      @keyup="\${action('onkeyup')}"
      @focus="\${action('onfocus')}"
      ?active="\${args.active}"
      ?disabled="\${args.disabled}"
      ?soft-disabled="\${args['soft-disabled']}"
      variant="\${ifDefined(args.variant)}"
      size="\${ifDefined(args.size)}"
      color="\${ifDefined(args.color)}"
      type="\${ifDefined(args.type)}"
      role="\${ifDefined(args.role)}"
      tabIndex="\${ifDefined(args.tabIndex)}"
      aria-label="\${ifDefined(args['aria-label'])}"
      ariaStateKey="\${ifDefined(args.ariaStateKey)}"
      ?inverted="\${args.inverted}"
      style="\${ifDefined(args.style)}"
      ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      \${args.children}
    </mdc-button>\`,
  args: {
    ...Example.args,
    children: 'Loading...'
  }
}`,...(H=(G=f.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => html\`<mdc-button
      @click="\${action('onclick')}"
      @keydown="\${action('onkeydown')}"
      @keyup="\${action('onkeyup')}"
      @focus="\${action('onfocus')}"
      ?active="\${args.active}"
      ?disabled="\${args.disabled}"
      ?soft-disabled="\${args['soft-disabled']}"
      variant="\${ifDefined(args.variant)}"
      size="\${ifDefined(args.size)}"
      color="\${ifDefined(args.color)}"
      type="\${ifDefined(args.type)}"
      role="\${ifDefined(args.role)}"
      tabIndex="\${ifDefined(args.tabIndex)}"
      aria-label="\${ifDefined(args['aria-label'])}"
      ariaStateKey="\${ifDefined(args.ariaStateKey)}"
      ?inverted="\${args.inverted}"
      style="\${ifDefined(args.style)}"
      ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      \${args.children}
    </mdc-button>\`,
  args: {
    ...Example.args,
    children: 'Wow'
  }
}`,...(X=(Q=b.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const Te=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted","PillButtonEllipsis","PillWithPrefixIconEllipsis","PillWithPrefixSlot","PillWithPostfixSlot"];export{t as Example,r as IconButton,p as IconButtonInverted,s as PillButton,u as PillButtonEllipsis,l as PillButtonInverted,d as PillWithPostfixIcon,b as PillWithPostfixSlot,c as PillWithPrefixIcon,m as PillWithPrefixIconEllipsis,f as PillWithPrefixSlot,Te as __namedExportsOrder,he as default};
