import{b as I,T as O,O as s,V as o}from"./stepper.component-BGHjrCyu.js";import{k as n}from"./lit-element-D5KKan5q.js";import"./index-CSqD36hn.js";import"./index-Ms1xLxJo.js";import{c as T,s as A}from"./commonArgTypes-BluK8w5L.js";import"./provider.component-BaQC7CJH.js";import"./roles-DU0xbrD4.js";import"./create-context-89xeped_.js";import"./index-B-GnYs90.js";import"./index-riA1qVWu.js";import"./TabIndexMixin-TvgH_pmh.js";import"./keys-hFXe221I.js";import"./index-CbmtUAjA.js";import"./index-B30sDX5Z.js";import"./iframe-BkXUBIEh.js";import"../sb-preview/runtime.js";import"./state-C0WmBOuD.js";import"./iconprovider.component-ChWiF_5p.js";I.register(O);const g=e=>n` <mdc-stepper orientation="${e.orientation}" variant="${e.variant}">
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
