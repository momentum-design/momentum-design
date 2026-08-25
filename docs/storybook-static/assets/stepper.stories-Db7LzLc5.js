import{aG as s,aH as o,k as a}from"./iframe-DKmoi846.js";import{c as N,s as h}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const g=e=>a`<div style="height: 400px;">
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
  </div>`,O=e=>a`<div style="height: 400px;">
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
  </div>`,A={title:"Components/stepper/stepper",tags:["autodocs"],component:"mdc-stepper",render:g,argTypes:{orientation:{control:"radio",options:Object.values(s)},variant:{control:"radio",options:Object.values(o)},...N,...h}},t={args:{orientation:s.HORIZONTAL,variant:o.INLINE}},r={render:v,args:{orientation:s.HORIZONTAL,variant:o.INLINE}},p={render:O,args:{orientation:s.HORIZONTAL,variant:o.INLINE}};var n,c,m;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,b,I;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: renderWithLargeLabel,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(I=(b=p.parameters)==null?void 0:b.docs)==null?void 0:I.source}}};const L=["Example","WithErrorCurrent","WithLargeLabel"];export{t as Example,r as WithErrorCurrent,p as WithLargeLabel,L as __namedExportsOrder,A as default};
