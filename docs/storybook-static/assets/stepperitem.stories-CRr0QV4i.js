import{aH as t,aJ as a,k as C}from"./iframe-DKmoi846.js";import{c as U,s as D}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const{action:i}=__STORYBOOK_MODULE_ACTIONS__,O=e=>C` <mdc-stepperitem
    @click=${i("onClick")}
    @keydown=${i("onKeyDown")}
    @keyup=${i("onKeyUp")}
    variant=${e.variant}
    status=${e.status}
    help-text=${e["help-text"]}
    label=${e.label}
    step-number=${e["step-number"]}
    aria-label=${e["aria-label"]}
    ?disabled=${e.disabled}
    class=${e.class}
    style=${e.style}
  ></mdc-stepperitem>`,w={title:"Components/stepper/stepperitem",tags:["autodocs"],component:"mdc-stepperitem",render:O,argTypes:{variant:{control:{type:"select"},options:Object.values(t)},status:{control:{type:"select"},options:Object.values(a)},"help-text":{control:{type:"text"}},label:{control:{type:"text"}},"step-number":{control:{type:"number"}},"aria-label":{control:{type:"text"}},disabled:{control:{type:"boolean"}},...U,...D}},r={args:{variant:t.INLINE,status:a.COMPLETED,"help-text":"Help text",label:"Label","step-number":"1","aria-label":"Step 1: Label, completed"}},s={args:{variant:t.INLINE,status:a.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},l={args:{variant:t.STACKED,status:a.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},n={args:{variant:t.INLINE,status:a.ERROR_CURRENT,"help-text":"Error message",label:"Label","step-number":"1","aria-label":"Step 1: Label, error, Error message"}},o={args:{variant:t.STACKED,status:a.NOT_STARTED,label:"Future step","step-number":"4","aria-label":"Step 4: Future step, unavailable",disabled:!0}},p={args:{variant:t.STACKED,label:"This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container","help-text":"This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container",status:a.CURRENT,"step-number":"1","aria-label":"Step 1: long label, current"}};var c,b,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.COMPLETED,
    'help-text': 'Help text',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, completed'
  }
}`,...(u=(b=r.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var m,d,T;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(T=(d=s.parameters)==null?void 0:d.docs)==null?void 0:T.source}}};var S,h,E;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(E=(h=l.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var A,R,x;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR_CURRENT,
    'help-text': 'Error message',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, error, Error message'
  }
}`,...(x=(R=n.parameters)==null?void 0:R.docs)==null?void 0:x.source}}};var N,L,g;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.NOT_STARTED,
    label: 'Future step',
    'step-number': '4',
    'aria-label': 'Step 4: Future step, unavailable',
    disabled: true
  }
}`,...(g=(L=o.parameters)==null?void 0:L.docs)==null?void 0:g.source}}};var v,I,y;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    label: 'This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container',
    'help-text': 'This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container',
    status: STATUS.CURRENT,
    'step-number': '1',
    'aria-label': 'Step 1: long label, current'
  }
}`,...(y=(I=p.parameters)==null?void 0:I.docs)==null?void 0:y.source}}};const K=["Example","Inline","Stacked","Error","Disabled","LongText"];export{o as Disabled,n as Error,r as Example,s as Inline,p as LongText,l as Stacked,K as __namedExportsOrder,w as default};
