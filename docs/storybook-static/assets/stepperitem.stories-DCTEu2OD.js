import"./index-BXHi1wGp.js";import{k as g}from"./iframe-YytTiSpJ.js";import{c as I,s as y}from"./commonArgTypes-BluK8w5L.js";import{V as t,a}from"./stepper.component-deX0Dp37.js";import"./TabIndexMixin-CouquMWg.js";import"./keys-hFXe221I.js";import"./index-DT0cuXBy.js";import"./index-CqFh5GF_.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";const{action:p}=__STORYBOOK_MODULE_ACTIONS__,v=e=>g` <mdc-stepperitem
    @click=${p("onClick")}
    @keydown=${p("onKeyDown")}
    @keyup=${p("onKeyUp")}
    variant=${e.variant}
    status=${e.status}
    help-text=${e["help-text"]}
    label=${e.label}
    step-number=${e["step-number"]}
    aria-label=${e["aria-label"]}
    class=${e.class}
    style=${e.style}
  ></mdc-stepperitem>`,V={title:"Components/stepper/stepperitem",tags:["autodocs"],component:"mdc-stepperitem",render:v,argTypes:{variant:{control:{type:"select"},options:Object.values(t)},status:{control:{type:"select"},options:Object.values(a)},"help-text":{control:{type:"text"}},label:{control:{type:"text"}},"step-number":{control:{type:"number"}},"aria-label":{control:{type:"text"}},...I,...y}},r={args:{variant:t.INLINE,status:a.COMPLETED,"help-text":"Help text",label:"Label","step-number":"1","aria-label":"Step 1: Label, completed"}},s={args:{variant:t.INLINE,status:a.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},n={args:{variant:t.STACKED,status:a.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},l={args:{variant:t.INLINE,status:a.ERROR_CURRENT,"help-text":"Error message",label:"Label","step-number":"1","aria-label":"Step 1: Label, error, Error message"}},o={args:{variant:t.STACKED,label:"This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container","help-text":"This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container",status:a.CURRENT,"step-number":"1","aria-label":"Step 1: long label, current"}};var i,c,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.COMPLETED,
    'help-text': 'Help text',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, completed'
  }
}`,...(m=(c=r.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var b,u,T;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(T=(u=s.parameters)==null?void 0:u.docs)==null?void 0:T.source}}};var d,h,S;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(S=(h=n.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var E,x,R;l.parameters={...l.parameters,docs:{...(E=l.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR_CURRENT,
    'help-text': 'Error message',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, error, Error message'
  }
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var L,N,A;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    label: 'This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container',
    'help-text': 'This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container',
    status: STATUS.CURRENT,
    'step-number': '1',
    'aria-label': 'Step 1: long label, current'
  }
}`,...(A=(N=o.parameters)==null?void 0:N.docs)==null?void 0:A.source}}};const M=["Example","Inline","Stacked","Error","LongText"];export{l as Error,r as Example,s as Inline,o as LongText,n as Stacked,M as __namedExportsOrder,V as default};
