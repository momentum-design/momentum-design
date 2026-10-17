import{aJ as a,aK as t,k as O}from"./iframe-sWJr0ov_.js";import{c as K,s as _}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const{action:c}=__STORYBOOK_MODULE_ACTIONS__,$=e=>O` <mdc-stepperitem
    @click=${c("onClick")}
    @keydown=${c("onKeyDown")}
    @keyup=${c("onKeyUp")}
    variant=${e.variant}
    status=${e.status}
    help-text=${e["help-text"]}
    label=${e.label}
    step-number=${e["step-number"]}
    aria-label=${e["aria-label"]}
    ?disabled=${e.disabled}
    class=${e.class}
    style=${e.style}
  ></mdc-stepperitem>`,F={title:"Components/stepper/stepperitem",tags:["autodocs"],component:"mdc-stepperitem",render:$,argTypes:{variant:{control:{type:"select"},options:Object.values(a)},status:{control:{type:"select"},options:Object.values(t)},"help-text":{control:{type:"text"}},label:{control:{type:"text"}},"step-number":{control:{type:"number"}},"aria-label":{control:{type:"text"}},disabled:{control:{type:"boolean"}},...K,..._}},r={args:{variant:a.INLINE,status:t.COMPLETED,"help-text":"Help text",label:"Label","step-number":"1","aria-label":"Step 1: Label, completed"}},s={args:{variant:a.INLINE,status:t.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},n={args:{variant:a.STACKED,status:t.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},l={args:{variant:a.INLINE,status:t.ERROR_CURRENT,"help-text":"Error message",label:"Label","step-number":"1","aria-label":"Step 1: Label, error, Error message"}},o={args:{variant:a.STACKED,status:t.NOT_STARTED,label:"Future step","step-number":"4","aria-label":"Step 4: Future step, unavailable",disabled:!0}},p={args:{variant:a.STACKED,status:t.LOADING,label:"Generate staffing plan","step-number":"4","aria-label":"Step 4 of 4, generating staffing plan"}},i={args:{variant:a.STACKED,label:"This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container","help-text":"This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container",status:t.CURRENT,"step-number":"1","aria-label":"Step 1: long label, current"}};var b,u,m;r.parameters={...r.parameters,docs:{...(b=r.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.COMPLETED,
    'help-text': 'Help text',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, completed'
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var d,T,S;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(S=(T=s.parameters)==null?void 0:T.docs)==null?void 0:S.source}}};var E,g,h;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(h=(g=n.parameters)==null?void 0:g.docs)==null?void 0:h.source}}};var A,N,R;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR_CURRENT,
    'help-text': 'Error message',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, error, Error message'
  }
}`,...(R=(N=l.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var L,x,v;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.NOT_STARTED,
    label: 'Future step',
    'step-number': '4',
    'aria-label': 'Step 4: Future step, unavailable',
    disabled: true
  }
}`,...(v=(x=o.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var I,f,y;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.LOADING,
    label: 'Generate staffing plan',
    'step-number': '4',
    'aria-label': 'Step 4 of 4, generating staffing plan'
  }
}`,...(y=(f=p.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var C,D,U;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    label: 'This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container',
    'help-text': 'This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container',
    status: STATUS.CURRENT,
    'step-number': '1',
    'aria-label': 'Step 1: long label, current'
  }
}`,...(U=(D=i.parameters)==null?void 0:D.docs)==null?void 0:U.source}}};const G=["Example","Inline","Stacked","Error","Disabled","Loading","LongText"];export{o as Disabled,l as Error,r as Example,s as Inline,p as Loading,i as LongText,n as Stacked,G as __namedExportsOrder,F as default};
