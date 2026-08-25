import{aI as t,aG as e,k as S}from"./iframe-DKmoi846.js";import{c as R,s as H}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const M=s=>S`
  <div style="width: 200px; height: 200px; display: flex; align-items: center;">
    <mdc-stepperconnector
      status="${s.status}"
      orientation="${s.orientation}"
      style="${s.style}"
      class="${s.class}"
    ></mdc-stepperconnector>
  </div>
`,x={title:"Components/stepper/stepperconnector",tags:["autodocs"],component:"mdc-stepperconnector",render:M,argTypes:{status:{control:"radio",options:Object.values(t)},orientation:{control:"radio",options:Object.values(e)},...R,...H}},o={args:{status:t.INCOMPLETE,orientation:e.HORIZONTAL}},r={args:{status:t.INCOMPLETE,orientation:e.HORIZONTAL}},a={args:{status:t.COMPLETE,orientation:e.HORIZONTAL}},n={args:{status:t.INCOMPLETE,orientation:e.VERTICAL}},c={args:{status:t.COMPLETE,orientation:e.VERTICAL}};var i,p,T;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(T=(p=o.parameters)==null?void 0:p.docs)==null?void 0:T.source}}};var m,l,O;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(O=(l=r.parameters)==null?void 0:l.docs)==null?void 0:O.source}}};var E,I,u;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.HORIZONTAL
  }
}`,...(u=(I=a.parameters)==null?void 0:I.docs)==null?void 0:u.source}}};var d,A,N;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    status: STATUS.INCOMPLETE,
    orientation: ORIENTATION.VERTICAL
  }
}`,...(N=(A=n.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var L,C,g;c.parameters={...c.parameters,docs:{...(L=c.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    status: STATUS.COMPLETE,
    orientation: ORIENTATION.VERTICAL
  }
}`,...(g=(C=c.parameters)==null?void 0:C.docs)==null?void 0:g.source}}};const U=["Example","IncompleteHorizontal","CompleteHorizontal","IncompleteVertical","CompleteVertical"];export{a as CompleteHorizontal,c as CompleteVertical,o as Example,r as IncompleteHorizontal,n as IncompleteVertical,U as __namedExportsOrder,x as default};
