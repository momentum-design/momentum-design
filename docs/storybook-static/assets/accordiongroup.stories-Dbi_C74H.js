import{S as t,a as r,D as u,k as m,R as V,t as p}from"./iframe-DKmoi846.js";import{c as w,s as Z}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";const a=m`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,G=o=>m`<div role="${V.MAIN}">
    <mdc-accordiongroup
      size="${p(o.size)}"
      variant="${p(o.variant)}"
      ?allow-multiple="${o["allow-multiple"]}"
    >
      <mdc-accordionbutton header-text="Why is the moon sometimes out during the day?"
        >${a}</mdc-accordionbutton
      >
      <mdc-accordionbutton header-text="Why is the sky blue?">${a}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="Will we ever discover aliens?">${a}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="How much does the Earth weigh?">${a}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="How do airplanes stay up?">${a}</mdc-accordionbutton>
    </mdc-accordiongroup>
  </div>`,q={title:"Components/accordion/accordiongroup",tags:["autodocs"],component:"mdc-accordiongroup",render:G,argTypes:{...w,...Z,"allow-multiple":{control:"boolean"},size:{control:"select",options:Object.values(t)},variant:{control:"select",options:Object.values(r)}}},e={args:{size:u.SIZE,variant:u.VARIANT,"allow-multiple":!1}},i={args:{...e.args,variant:r.STACKED,size:t.SMALL}},n={args:{...e.args,variant:r.CONTAINED,size:t.SMALL}},s={args:{...e.args,variant:r.BORDERLESS,size:t.SMALL}},c={args:{...e.args,size:t.SMALL,variant:r.CONTAINED}},l={args:{...e.args,size:t.LARGE,variant:r.CONTAINED}},W=o=>m`
  <div role="${V.MAIN}">
    <mdc-accordiongroup size="${o.size}" variant="${o.variant}" ?allow-multiple="${o["allow-multiple"]}">
      <mdc-accordion
        header-text="Identify Your Goals"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open Identify Your Goals"
        close-button-aria-label="Close Identify Your Goals"
      >
        <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #1" slot="trailing-controls" initials="#1"></mdc-avatarbutton>
        ${a}
      </mdc-accordion>
      <mdc-accordion
        header-text="Write Your Goals"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open Write Your Goals"
        close-button-aria-label="Close Write Your Goals"
      >
        <mdc-chip slot="leading-controls" label="Step 2"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #2" slot="trailing-controls" initials="#2"></mdc-avatarbutton>
        ${a}
      </mdc-accordion>
      <mdc-accordion
        header-text="Need Analysis"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open Need Analysis"
        close-button-aria-label="Close Need Analysis"
      >
        <mdc-chip slot="leading-controls" label="Step 3"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #3" slot="trailing-controls" initials="#3"></mdc-avatarbutton>
        ${a}
      </mdc-accordion>
      <mdc-accordion
        header-text="List Objectives"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open List Objectives"
        close-button-aria-label="Close List Objectives"
      >
        <mdc-chip slot="leading-controls" label="Step 4"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #4" slot="trailing-controls" initials="#4"></mdc-avatarbutton>
        ${a}
      </mdc-accordion>
    </mdc-accordiongroup>
  </div>
`,d={args:{size:t.SMALL,variant:r.CONTAINED,"allow-multiple":!1},render:W};var b,g,A;e.parameters={...e.parameters,docs:{...(b=e.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    variant: DEFAULTS.VARIANT,
    'allow-multiple': false
  }
}`,...(A=(g=e.parameters)==null?void 0:g.docs)==null?void 0:A.source}}};var v,S,E;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.STACKED,
    size: SIZE.SMALL
  }
}`,...(E=(S=i.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var I,L,N;n.parameters={...n.parameters,docs:{...(I=n.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.CONTAINED,
    size: SIZE.SMALL
  }
}`,...(N=(L=n.parameters)==null?void 0:L.docs)==null?void 0:N.source}}};var h,x,T;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    size: SIZE.SMALL
  }
}`,...(T=(x=s.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var z,O,C;c.parameters={...c.parameters,docs:{...(z=c.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED
  }
}`,...(C=(O=c.parameters)==null?void 0:O.docs)==null?void 0:C.source}}};var f,D,R;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    variant: VARIANT.CONTAINED
  }
}`,...(R=(D=l.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var $,y,M;d.parameters={...d.parameters,docs:{...($=d.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED,
    'allow-multiple': false
  },
  render: renderMultiInteractive
}`,...(M=(y=d.parameters)==null?void 0:y.docs)==null?void 0:M.source}}};const B=["Example","StackedVariant","ContainedVariant","BorderlessVariant","SmallSize","LargeSize","MultiInteractiveAccordion"];export{s as BorderlessVariant,n as ContainedVariant,e as Example,l as LargeSize,d as MultiInteractiveAccordion,c as SmallSize,i as StackedVariant,B as __namedExportsOrder,q as default};
