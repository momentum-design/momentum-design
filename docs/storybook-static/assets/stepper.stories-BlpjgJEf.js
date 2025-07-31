import{b as I,T as O,O as s,V as o}from"./stepper.component-Dbe9lenu.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-CppEWkK4.js";import"./index-CX2EOFyj.js";import{c as T,s as A}from"./commonArgTypes-BluK8w5L.js";import"./index-C9z9WAEj.js";import"./roles-BH_hBfTz.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-BrLJ_9IK.js";import"./TabIndexMixin-CsrHswKP.js";import"./keys-Hz01Ianf.js";import"./index-2PiEGcHV.js";import"./index-Ce6mF8mU.js";import"./iframe-C015OYog.js";import"../sb-preview/runtime.js";import"./state-CSSggq2n.js";import"./iconprovider.component-Bvm-70EG.js";I.register(O);const g=e=>n` <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
    <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-stepperconnector status="complete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 2" status="completed" help-text="Help text"></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 3" status="current" help-text="Help text"></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 4" status="error-incomplete" step-number="4" help-text="Error"></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
  </mdc-stepper>`,h=e=>n` <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
    <mdc-stepperitem label="Step 1" status="completed"></mdc-stepperitem>
    <mdc-stepperconnector status="complete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 2" status="completed" help-text="Help text"></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 3" status="error-current" help-text="Help text"></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 4" status="error-incomplete" step-number="4" help-text="Error"></mdc-stepperitem>
    <mdc-stepperconnector status="incomplete"></mdc-stepperconnector>
    <mdc-stepperitem label="Step 5" status="not-started" step-number="5"></mdc-stepperitem>
  </mdc-stepper>`,E=e=>n` <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
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
  </mdc-stepper>`,M={title:"Components/stepper/stepper",tags:["autodocs"],component:"mdc-stepper",render:g,parameters:{badges:["stable"]},argTypes:{orientation:{control:"radio",options:Object.values(s)},variant:{control:"radio",options:Object.values(o)},...T,...A}},t={args:{orientation:s.HORIZONTAL,variant:o.INLINE}},r={render:h,args:{orientation:s.HORIZONTAL,variant:o.INLINE}},p={render:E,args:{orientation:s.HORIZONTAL,variant:o.INLINE}};var c,m,a;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(a=(m=t.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var i,d,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: renderWithErrorCurrent,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};var u,N,b;p.parameters={...p.parameters,docs:{...(u=p.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: renderWithLargeLabel,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(b=(N=p.parameters)==null?void 0:N.docs)==null?void 0:b.source}}};const q=["Example","WithErrorCurrent","WithLargeLabel"];export{t as Example,r as WithErrorCurrent,p as WithLargeLabel,q as __namedExportsOrder,M as default};
