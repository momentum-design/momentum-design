import{q as y,v as ae,w as x,x as g,k as a,y as v,t as o}from"./iframe-DKmoi846.js";import{i as h}from"./manifest-DISj2anu.js";import{c as ie,s as re}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const{action:n}=__STORYBOOK_MODULE_ACTIONS__,r=e=>a`<mdc-button
    @click="${n("onclick")}"
    @keydown="${n("onkeydown")}"
    @keyup="${n("onkeyup")}"
    @focus="${n("onfocus")}"
    ?active="${e.active}"
    ?disabled="${e.disabled}"
    ?soft-disabled="${e["soft-disabled"]}"
    variant="${o(e.variant)}"
    size="${o(e.size)}"
    color="${o(e.color)}"
    prefix-icon="${o(e["prefix-icon"])}"
    postfix-icon="${o(e["postfix-icon"])}"
    type="${o(e.type)}"
    name="${o(e.name)}"
    value="${o(e.value)}"
    role="${o(e.role)}"
    tabIndex="${o(e.tabIndex)}"
    aria-label="${o(e["aria-label"])}"
    ariaStateKey="${o(e.ariaStateKey)}"
    ?inverted="${e.inverted}"
    style="${o(e.style)}"
    ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >${e.children}</mdc-button
  >`,pe={title:"Components/button",tags:["autodocs"],component:"mdc-button",render:r,argTypes:{children:{description:"Text label for the button.",control:"text"},"prefix-icon":{control:"select",options:Object.keys(h)},"postfix-icon":{control:"select",options:Object.keys(h)},active:{control:"boolean"},"aria-label":{control:"text",description:"Defines an accessible label for screen readers. Required when using icon-only buttons.",table:{category:"attributes"}},disabled:{control:"boolean"},"soft-disabled":{control:"boolean"},variant:{control:"select",options:Object.values(y)},size:{control:"select",options:Object.values(ae)},color:{control:"select",options:Object.values(x)},type:{control:"select",options:Object.values(g)},name:{control:"text"},value:{control:"text"},ariaStateKey:{control:"text"},inverted:{control:"boolean"},"auto-focus-on-mount":{control:"boolean"},...ie,...re}},t={args:{children:"Click Me",active:!1,disabled:!1,"soft-disabled":!1,variant:y.PRIMARY,size:ae[32],color:x.DEFAULT,type:g.BUTTON,role:"button",tabIndex:0,inverted:!1}},s={args:{...t.args}},l={render:e=>a`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${r(e)}
    </div>`,args:{...t.args,inverted:!0}},c={args:{...t.args,children:"Left Icon","prefix-icon":"placeholder-bold"}},d={args:{...t.args,children:"Right Icon","postfix-icon":"placeholder-bold"}},i={argTypes:{size:{options:Object.values(v)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{"prefix-icon":"placeholder-bold",active:!1,disabled:!1,"soft-disabled":!1,variant:y.PRIMARY,size:v[32],color:x.DEFAULT,type:g.BUTTON,role:"button",tabIndex:0,"aria-label":"icon button"}},p={render:e=>a`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      ${r(e)}
    </div>`,argTypes:{size:{options:Object.values(v)},"aria-label":{description:"Aria label for the icon button. Required for accessibility."}},args:{...i.args,inverted:!0}},u={render:e=>r({...e,style:"width: 150px;"}),args:{...t.args,children:"Long text with icons"}},f={render:e=>r({...e,style:"width: 150px;"}),args:{...t.args,children:"Long text with icons","prefix-icon":"placeholder-bold"}},b={render:e=>a`<mdc-button
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @keyup="${n("onkeyup")}"
      @focus="${n("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${o(e.variant)}"
      size="${o(e.size)}"
      color="${o(e.color)}"
      type="${o(e.type)}"
      role="${o(e.role)}"
      tabIndex="${o(e.tabIndex)}"
      aria-label="${o(e["aria-label"])}"
      ariaStateKey="${o(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${o(e.style)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-spinner slot="prefix" variant="button" size="small"></mdc-spinner>
      ${e.children}
    </mdc-button>`,args:{...t.args,children:"Loading..."}},m={render:e=>a`<mdc-button
      @click="${n("onclick")}"
      @keydown="${n("onkeydown")}"
      @keyup="${n("onkeyup")}"
      @focus="${n("onfocus")}"
      ?active="${e.active}"
      ?disabled="${e.disabled}"
      ?soft-disabled="${e["soft-disabled"]}"
      variant="${o(e.variant)}"
      size="${o(e.size)}"
      color="${o(e.color)}"
      type="${o(e.type)}"
      role="${o(e.role)}"
      tabIndex="${o(e.tabIndex)}"
      aria-label="${o(e["aria-label"])}"
      ariaStateKey="${o(e.ariaStateKey)}"
      ?inverted="${e.inverted}"
      style="${o(e.style)}"
      ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
    >
      <mdc-animation
        name="wow"
        loop="true"
        slot="postfix"
        style="height: 1.25rem; width: 1.25rem; flex-shrink: 0;"
      ></mdc-animation>
      ${e.children}
    </mdc-button>`,args:{...t.args,children:"Wow"}},$={render:e=>a`<mdc-button
        @click="${n("onclick")}"
        @keydown="${n("onkeydown")}"
        @keyup="${n("onkeyup")}"
        @focus="${n("onfocus")}"
        ?active="${e.active}"
        ?disabled="${e.disabled}"
        ?soft-disabled="${e["soft-disabled"]}"
        variant="${o(e.variant)}"
        size="${o(e.size)}"
        color="${o(e.color)}"
        type="${o(e.type)}"
        role="${o(e.role)}"
        tabIndex="${o(e.tabIndex)}"
        aria-label="${o(e["aria-label"])}"
        ariaStateKey="${o(e.ariaStateKey)}"
        ?inverted="${e.inverted}"
        style="${o(e.style)}"
        ?auto-focus-on-mount="${e["auto-focus-on-mount"]}"
        id="button"
      >
        ${e.children}

        <div slot="prefix">
          <mdc-icon name="placeholder-bold" size="small"></mdc-icon>
        </div>
        <div slot="postfix">
          <mdc-brandvisual name="webex-app-icon-color-container" style="width: 1.25rem;"></mdc-brandvisual>
        </div>
      </mdc-button>
      <mdc-tooltip show-arrow="true" triggerID="button" position="top">Tooltip text</mdc-tooltip>`,args:{...t.args,"prefix-icon":"placeholder-bold","postfix-icon":"placeholder-bold",children:"Hover me"}};var T,I,k;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(k=(I=t.parameters)==null?void 0:I.docs)==null?void 0:k.source}}};var S,O,w;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args
  }
}`,...(w=(O=s.parameters)==null?void 0:O.docs)==null?void 0:w.source}}};var D,P,B;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`<div style="padding: 10px; background: var(--mds-color-theme-inverted-background-normal);">
      \${render(args)}
    </div>\`,
  args: {
    ...Example.args,
    inverted: true
  }
}`,...(B=(P=l.parameters)==null?void 0:P.docs)==null?void 0:B.source}}};var E,_,z;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    children: 'Left Icon',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(z=(_=c.parameters)==null?void 0:_.docs)==null?void 0:z.source}}};var N,U,R;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    children: 'Right Icon',
    'postfix-icon': 'placeholder-bold'
  }
}`,...(R=(U=d.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var A,L,K;i.parameters={...i.parameters,docs:{...(A=i.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(K=(L=i.parameters)==null?void 0:L.docs)==null?void 0:K.source}}};var W,C,j;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(j=(C=p.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};var M,Y,q;u.parameters={...u.parameters,docs:{...(M=u.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    ...Example.args,
    children: 'Long text with icons'
  }
}`,...(q=(Y=u.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};var Z,F,V;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => render({
    ...args,
    style: 'width: 150px;'
  }),
  args: {
    ...Example.args,
    children: 'Long text with icons',
    'prefix-icon': 'placeholder-bold'
  }
}`,...(V=(F=f.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var H,G,J;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(J=(G=b.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,ee;m.parameters={...m.parameters,docs:{...(Q=m.parameters)==null?void 0:Q.docs,source:{originalSource:`{
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
}`,...(ee=(X=m.parameters)==null?void 0:X.docs)==null?void 0:ee.source}}};var oe,ne,te;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`{
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
        id="button"
      >
        \${args.children}

        <div slot="prefix">
          <mdc-icon name="placeholder-bold" size="small"></mdc-icon>
        </div>
        <div slot="postfix">
          <mdc-brandvisual name="webex-app-icon-color-container" style="width: 1.25rem;"></mdc-brandvisual>
        </div>
      </mdc-button>
      <mdc-tooltip show-arrow="true" triggerID="button" position="top">Tooltip text</mdc-tooltip>\`,
  args: {
    ...Example.args,
    'prefix-icon': 'placeholder-bold',
    'postfix-icon': 'placeholder-bold',
    children: 'Hover me'
  }
}`,...(te=(ne=$.parameters)==null?void 0:ne.docs)==null?void 0:te.source}}};const ue=["Example","PillButton","PillButtonInverted","PillWithPrefixIcon","PillWithPostfixIcon","IconButton","IconButtonInverted","PillButtonEllipsis","PillWithPrefixIconEllipsis","PillWithPrefixSlot","PillWithPostfixSlot","ButtonWithTooltip"];export{$ as ButtonWithTooltip,t as Example,i as IconButton,p as IconButtonInverted,s as PillButton,u as PillButtonEllipsis,l as PillButtonInverted,d as PillWithPostfixIcon,m as PillWithPostfixSlot,c as PillWithPrefixIcon,f as PillWithPrefixIconEllipsis,b as PillWithPrefixSlot,ue as __namedExportsOrder,pe as default};
