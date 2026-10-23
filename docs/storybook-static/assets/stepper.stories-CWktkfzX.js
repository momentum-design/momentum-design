import{aI as r,aJ as p,aK as t,k as c,aL as I}from"./iframe-BldJWUr6.js";import{c as O,s as E}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const v=e=>c`<div style="height: 400px;">
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
  </div>`,L=e=>c`<div style="height: 400px;">
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
  </div>`,R=e=>c`<div style="height: 400px;">
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
  </div>`,C={title:"Components/stepper/stepper",tags:["autodocs"],component:"mdc-stepper",render:v,argTypes:{orientation:{control:"radio",options:Object.values(r)},variant:{control:"radio",options:Object.values(p)},...O,...E}},s={args:{orientation:r.HORIZONTAL,variant:p.INLINE}},a={render:L,args:{orientation:r.HORIZONTAL,variant:p.INLINE}},n={render:R,args:{orientation:r.HORIZONTAL,variant:p.INLINE}},o={args:{orientation:r.HORIZONTAL,variant:p.STACKED,status:t.LOADING},argTypes:{status:{control:{type:"select"},options:[t.CURRENT,t.LOADING,t.COMPLETED,t.ERROR_CURRENT]}},render:e=>c`
    <mdc-stepper orientation=${e.orientation} variant=${e.variant} aria-label="Staffing plan steps">
      <mdc-stepperitem
        label="Staffing plan details"
        status="completed"
        aria-label="Step 1 of 4, staffing plan details, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Review forecast"
        status="completed"
        aria-label="Step 2 of 4, review forecast, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Add activities (optional)"
        status="completed"
        aria-label="Step 3 of 4, add activities, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Generate staffing plan"
        status=${e.status}
        aria-current=${e.status===t.COMPLETED?I:"step"}
        aria-label=${e.status===t.LOADING?"Step 4 of 4, generating staffing plan":`Step 4 of 4, generate staffing plan, ${e.status}`}
      ></mdc-stepperitem>
    </mdc-stepper>
  `};var i,m,l;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(l=(m=s.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,u,S;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: renderWithErrorCurrent,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(S=(u=a.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var T,g,b;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: renderWithLargeLabel,
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.INLINE
  }
}`,...(b=(g=n.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var N,f,A;o.parameters={...o.parameters,docs:{...(N=o.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    orientation: ORIENTATION.HORIZONTAL,
    variant: VARIANT.STACKED,
    status: STATUS.LOADING
  },
  argTypes: {
    status: {
      control: {
        type: 'select'
      },
      options: [STATUS.CURRENT, STATUS.LOADING, STATUS.COMPLETED, STATUS.ERROR_CURRENT]
    }
  },
  render: args => html\`
    <mdc-stepper orientation=\${args.orientation} variant=\${args.variant} aria-label="Staffing plan steps">
      <mdc-stepperitem
        label="Staffing plan details"
        status="completed"
        aria-label="Step 1 of 4, staffing plan details, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Review forecast"
        status="completed"
        aria-label="Step 2 of 4, review forecast, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Add activities (optional)"
        status="completed"
        aria-label="Step 3 of 4, add activities, completed"
      ></mdc-stepperitem>
      <mdc-stepperconnector status="complete"></mdc-stepperconnector>
      <mdc-stepperitem
        label="Generate staffing plan"
        status=\${args.status}
        aria-current=\${args.status === STATUS.COMPLETED ? nothing : 'step'}
        aria-label=\${args.status === STATUS.LOADING ? 'Step 4 of 4, generating staffing plan' : \`Step 4 of 4, generate staffing plan, \${args.status}\`}
      ></mdc-stepperitem>
    </mdc-stepper>
  \`
}`,...(A=(f=o.parameters)==null?void 0:f.docs)==null?void 0:A.source}}};const y=["Example","WithErrorCurrent","WithLargeLabel","WithLoadingStep"];export{s as Example,a as WithErrorCurrent,n as WithLargeLabel,o as WithLoadingStep,y as __namedExportsOrder,C as default};
