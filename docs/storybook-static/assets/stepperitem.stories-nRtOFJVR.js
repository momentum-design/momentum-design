import"./index-Nm9sNSld.js";import{k as A}from"./lit-element-D5KKan5q.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{t as y}from"./utils-CFOyPOhY.js";import{c as I,s as v}from"./commonArgTypes-BluK8w5L.js";import{V as t,a}from"./stepper.component-Cl0_MdBU.js";import"./property-Bj3TGwkg.js";import"./provider.component-DrWB4byV.js";import"./index-D2VIkDCb.js";import"./TabIndexMixin-DEwGeIeI.js";import"./roles-CJI3JVG-.js";import"./keys-hFXe221I.js";import"./index-CwZu4Wnd.js";import"./index-CqVtAZCJ.js";import"./index-5cTagJDb.js";import"./iframe-Dig_U7mL.js";import"../sb-preview/runtime.js";import"./state-CmYk530Z.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";const C=e=>A` <mdc-stepperitem
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
  ></mdc-stepperitem>`,W={title:"Components/stepper/stepperitem",tags:["autodocs"],component:"mdc-stepperitem",render:C,parameters:{badges:["stable"]},argTypes:{variant:{control:{type:"select"},options:Object.values(t)},status:{control:{type:"select"},options:Object.values(a)},"help-text":{control:{type:"text"}},label:{control:{type:"text"}},"step-number":{control:{type:"number"}},"aria-label":{control:{type:"text"}},...y(["--mdc-stepperitem-status-container-background","--mdc-stepperitem-status-container-border-color","--mdc-stepperitem-label-color","--mdc-stepperitem-help-text-color","--mdc-stepperitem-label-container-background"]),...I,...v}},r={args:{variant:t.INLINE,status:a.COMPLETED,"help-text":"Help text",label:"Label","step-number":"1","aria-label":"Step 1: Label, completed"}},s={args:{variant:t.INLINE,status:a.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},o={args:{variant:t.STACKED,status:a.CURRENT,label:"Label","step-number":"1","aria-label":"Step 1: Label, current"}},l={args:{variant:t.INLINE,status:a.ERROR_CURRENT,"help-text":"Error message",label:"Label","step-number":"1","aria-label":"Step 1: Label, error, Error message"}},n={args:{variant:t.STACKED,label:"This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container","help-text":"This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container",status:a.CURRENT,"step-number":"1","aria-label":"Step 1: long label, current"}};var i,m,c;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.COMPLETED,
    'help-text': 'Help text',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, completed'
  }
}`,...(c=(m=r.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var b,u,d;s.parameters={...s.parameters,docs:{...(b=s.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var T,h,E;o.parameters={...o.parameters,docs:{...(T=o.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    status: STATUS.CURRENT,
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, current'
  }
}`,...(E=(h=o.parameters)==null?void 0:h.docs)==null?void 0:E.source}}};var S,x,R;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.INLINE,
    status: STATUS.ERROR_CURRENT,
    'help-text': 'Error message',
    label: 'Label',
    'step-number': '1',
    'aria-label': 'Step 1: Label, error, Error message'
  }
}`,...(R=(x=l.parameters)==null?void 0:x.docs)==null?void 0:R.source}}};var g,L,N;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    label: 'This is a very long label that should wrap to the next line if it exceeds the width of the stepper item container',
    'help-text': 'This is a very long help text that should also wrap to the next line if it exceeds the width of the stepper item container',
    status: STATUS.CURRENT,
    'step-number': '1',
    'aria-label': 'Step 1: long label, current'
  }
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};const X=["Example","Inline","Stacked","Error","LongText"];export{l as Error,r as Example,s as Inline,n as LongText,o as Stacked,X as __namedExportsOrder,W as default};
