import{b as I,T as h,O as s,V as o}from"./stepper.component-DzfrqJ6C.js";import{k as a}from"./iframe-CuUJoUXQ.js";import"./index-Rh84aSZs.js";import"./index-CjvFLJ-K.js";import{c as g,s as O}from"./commonArgTypes-BluK8w5L.js";import"./preload-helper-C1FmrZbK.js";import"./TabIndexMixin-DqUTM7io.js";import"./index-J8qpyfxx.js";import"./index-Dpk1082Q.js";import"./index-DTrDRi1E.js";I.register(h);const T=e=>a`<div style="height: 400px;">
    <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
      <mdc-stepperitem label="Step 1" status="completed" aria-label="Step 1, completed"></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 2"
        status="completed"
        help-text="Help text"
        aria-label="Step 2, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 3"
        status="current"
        help-text="Help text"
        aria-label="Step 3, current"
        aria-current="step"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 4"
        status="error-incomplete"
        step-number="4"
        help-text="Error"
        aria-label="Step 4, error-incomplete"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 5"
        status="not-started"
        step-number="5"
        aria-label="Step 5, not-started"
      ></mdc-stepperitem>
    </mdc-stepper>
  </div>`,v=e=>a`<div style="height: 400px;">
    <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 2" status="completed" help-text="Help text"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 3" status="error-current" help-text="Error message"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 4" status="error-incomplete" step-number="4" help-text="Error"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
    </mdc-stepper>
  </div>`,A=e=>a`<div style="height: 400px;">
    <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
      <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="This is a very long label for step 2 that might not fit"
        status="current"
        help-text="Help text is also very long"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Step 3 with error"
        status="error-incomplete"
        step-number="3"
        help-text="Error message that is too long"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
      <mdc-stepperitem label="Step 4" status="not-started" step-number="4"></mdc-stepperitem>
    </mdc-stepper>
  </div>`,$={title:"Components/stepper/stepper",tags:["autodocs"],component:"mdc-stepper",render:T,argTypes:{orientation:{control:"radio",options:Object.values(s)},variant:{control:"radio",options:Object.values(o)},...g,...O}},t={args:{orientation:s.HORIZONTAL,variant:o.INLINE}},r={render:v,args:{orientation:s.HORIZONTAL,variant:o.INLINE}},p={render:A,args:{orientation:s.HORIZONTAL,variant:o.INLINE}};var n,c,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: renderWithErrorCurrent,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,b,N;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: renderWithLargeLabel,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(N=(b=p.parameters)==null?void 0:b.docs)==null?void 0:N.source}}};const C=["Example","WithErrorCurrent","WithLargeLabel"];export{t as Example,r as WithErrorCurrent,p as WithLargeLabel,C as __namedExportsOrder,$ as default};
