import"./index-C6Hb955a.js";import"./index-DykNpq7M.js";import"./index-C3Dy3Uet.js";import{B as t,P as r,a as o,b as a,k as i,I as v}from"./iframe-rajhHZ71.js";import{t as $}from"./if-defined-K0CnrSqb.js";import{c as ee,s as ne}from"./commonArgTypes-BluK8w5L.js";import"./button.component-D5ECSkjs.js";import"./buttonsimple.component-v4NCh3dR.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CnlDdMU_.js";import"./TabIndexMixin-BXRdPqC6.js";import"./button.utils-rNW36Ji7.js";import"./index-B5m4DRNc.js";import"./preload-helper-C1FmrZbK.js";import"./index-CdxAANAz.js";import"./index-DTrDRi1E.js";import"./ref-B1jEBP3u.js";import"./directive-Ctav8iJK.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,s=e=>i` <mdc-button
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
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
    ariaStateKey="${$(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    style="${e.style}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-button
  >`,$e={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:s,argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"text"},"postfix-icon":{control:"text"},active:{control:"boolean"},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(t)},size:{control:"select",options:Object.values(r)},color:{control:"select",options:Object.values(o)},type:{control:"select",options:Object.values(a)},ariaStateKey:{control:"text"},inverted:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...ee,...ne}},l={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,inverted:!1},parameters:{docs:{description:{story:i`<h1>Another description on the story, overriding the comments</h1>`}}}},d={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},c={render:e=>i` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${s(e)}
    </div>`,args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,inverted:!0}},b={args:{children:"Left Icon","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},T={args:{children:"Right Icon","postfix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},p={argTypes:{size:{options:Object.values(v)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:v[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},f={render:e=>i` <div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${s(e)}
    </div>`,argTypes:{size:{options:Object.values(v)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:v[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button",inverted:!0}},u={render:e=>s({...e,style:"width: 150px;"}),args:{children:"Long text with icons",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},m={render:e=>s({...e,style:"width: 150px;"}),args:{children:"Long text with icons","prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},I={render:e=>i` <mdc-button
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @keyup="${n("onkeyup")}"
      @focus="${n("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${e.variant}"
      size="${e.size}"
      color="${e.color}"
      type="${e.type}"
      role="${e.role}"
      tabIndex="${e.tabIndex}"
      aria-label="${e["aria-label"]}"
      ariaStateKey="${$(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${e.style}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      ${e.children}
    </mdc-button>`,args:{children:"Loading...",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}},O={render:e=>i` <mdc-button
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @keyup="${n("onkeyup")}"
      @focus="${n("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${e.variant}"
      size="${e.size}"
      color="${e.color}"
      type="${e.type}"
      role="${e.role}"
      tabIndex="${e.tabIndex}"
      aria-label="${e["aria-label"]}"
      ariaStateKey="${$(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${e.style}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      ${e.children}
    </mdc-button>`,args:{children:"Wow",active:!1,disabled:!1,"soft-disabled":!1,variant:t.PRIMARY,size:r[32],color:o.DEFAULT,type:a.BUTTON,role:"button",tabIndex:0}};var y,U,N;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
  },
  parameters: {
    docs: {
      description: {
        story: html\`<h1>Another description on the story, overriding the comments</h1>\`
      }
    }
  }
}`,...(N=(U=l.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var h,x,B;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(B=(x=d.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var S,A,R;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(R=(A=c.parameters)==null?void 0:A.docs)==null?void 0:R.source}}};var _,P,L;b.parameters={...b.parameters,docs:{...(_=b.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(L=(P=b.parameters)==null?void 0:P.docs)==null?void 0:L.source}}};var g,E,k;T.parameters={...T.parameters,docs:{...(g=T.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(k=(E=T.parameters)==null?void 0:E.docs)==null?void 0:k.source}}};var z,Y,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(M=(Y=p.parameters)==null?void 0:Y.docs)==null?void 0:M.source}}};var w,C,D;f.parameters={...f.parameters,docs:{...(w=f.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(D=(C=f.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var F,Z,K;u.parameters={...u.parameters,docs:{...(F=u.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(K=(Z=u.parameters)==null?void 0:Z.docs)==null?void 0:K.source}}};var V,W,j;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(j=(W=m.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var q,G,H;I.parameters={...I.parameters,docs:{...(q=I.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: args => html\` <mdc-button
      @click="\${action('onclick')}"
      @keydown="\${action('onkeydown')}"
      @keyup="\${action('onkeyup')}"
      @focus="\${action('onfocus')}"
      ?active="\${args.active}"
      ?disabled="\${args.disabled}"
      ?soft-disabled="\${args['soft-disabled']}"
      variant="\${args.variant}"
      size="\${args.size}"
      color="\${args.color}"
      type="\${args.type}"
      role="\${args.role}"
      tabIndex="\${args.tabIndex}"
      aria-label="\${args['aria-label']}"
      ariaStateKey="\${ifDefined(args.ariaStateKey)}"
      ?inverted="\${args.inverted}"
      style="\${args.style}"
      ?auto-focus-on-mount="\${args['auto-focus-on-mount']}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      \${args.children}
    </mdc-button>\`,
  args: {
    children: 'Loading...',
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
}`,...(H=(G=I.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,Q,X;O.parameters={...O.parameters,docs:{...(J=O.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: args => html\` <mdc-button
      @click="\${action('onclick')}"
      @keydown="\${action('onkeydown')}"
      @keyup="\${action('onkeyup')}"
      @focus="\${action('onfocus')}"
      ?active="\${args.active}"
      ?disabled="\${args.disabled}"
      ?soft-disabled="\${args['soft-disabled']}"
      variant="\${args.variant}"
      size="\${args.size}"
      color="\${args.color}"
      type="\${args.type}"
      role="\${args.role}"
      tabIndex="\${args.tabIndex}"
      aria-label="\${args['aria-label']}"
      ariaStateKey="\${ifDefined(args.ariaStateKey)}"
      ?inverted="\${args.inverted}"
      style="\${args.style}"
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
    children: 'Wow',
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
}`,...(X=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};const ye=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted","PillButtonEllipsis","PillWithPrefixIconEllipsis","PillWithPrefixSlot","PillWithPostfixSlot"];export{l as Example,p as IconButton,f as IconButtonInverted,d as PillButton,u as PillButtonEllipsis,c as PillButtonInverted,T as PillWithPostfixIcon,O as PillWithPostfixSlot,b as PillWithPrefixIcon,m as PillWithPrefixIconEllipsis,I as PillWithPrefixSlot,ye as __namedExportsOrder,$e as default};
