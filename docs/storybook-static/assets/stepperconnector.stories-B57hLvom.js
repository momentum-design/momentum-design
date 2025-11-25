import"./index-dg-5HsfE.js";import{k as S}from"./iframe-D498-k7l.js";import{c as R,s as H}from"./commonArgTypes-BluK8w5L.js";import{S as t,O as e}from"./stepper.component-DHuXirV0.js";import"./index-Ba9hZ_UX.js";import"./preload-helper-C1FmrZbK.js";const M=o=>S`
  <div style="width: 200px; height: 200px; display: flex; align-items: center;">
    <mdc-stepperconnector
      status="${o.status}"
      orientation="${o.orientation}"
      style="${o.style}"
      class="${o.class}"
    ></mdc-stepperconnector>
  </div>
`,f={title:"Components/stepper/stepperconnector",tags:["autodocs"],component:"mdc-stepperconnector",render:M,argTypes:{status:{control:"radio",options:Object.values(t)},orientation:{control:"radio",options:Object.values(e)},...R,...H}},r={args:{status:t.INCOMPLETE,orientation:e.HORIZONTAL}},s={args:{status:t.INCOMPLETE,orientation:e.HORIZONTAL}},a={args:{status:t.COMPLETE,orientation:e.HORIZONTAL}},n={args:{status:t.INCOMPLETE,orientation:e.VERTICAL}},c={args:{status:t.COMPLETE,orientation:e.VERTICAL}};var i,p,m;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};var T,l,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(O=(l=s.parameters)==null?void 0:l.docs)==null?void 0:O.source}}};var E,u,I;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(I=(u=a.parameters)==null?void 0:u.docs)==null?void 0:I.source}}};var d,A,N;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.VERTICAL
  }
}`,...(N=(A=n.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var L,C,g;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.VERTICAL
  }
}`,...(g=(C=c.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const v=["Example","IncompleteHorizontal","CompleteHorizontal","IncompleteVertical","CompleteVertical"];export{a as CompleteHorizontal,c as CompleteVertical,r as Example,s as IncompleteHorizontal,n as IncompleteVertical,v as __namedExportsOrder,f as default};
