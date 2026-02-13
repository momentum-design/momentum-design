import{a2 as H,a4 as K,C as x,k as g,n as E,R as F}from"./iframe-CqwCe3Q0.js";import{t as L}from"./if-defined-B0TSLC8I.js";import{o as U}from"./query-assigned-elements-B-xKz1MP.js";import{T as J}from"./index-BklHSWI-.js";import{D as d,T as P,a as Q,S as n,b as s}from"./accordionbutton.component-B-i6iMrs.js";import"./index-CzGTRtyA.js";import"./index-CQWkrZS_.js";import"./index-D0yygVWN.js";import{c as X,s as tt}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";import"./index-C19Sfj5I.js";import"./button.component-DlQLMH2u.js";import"./buttonsimple.component-COLuKxW2.js";import"./DisabledMixin-BRuycW9g.js";import"./KeyDownHandledMixin-Bkh1Su5p.js";import"./index-DESrcBLY.js";import"./button.utils-rNW36Ji7.js";import"./index-DRulujdx.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";import"./index-BXgOYmTh.js";import"./IconNameMixin-DzFtIjVD.js";import"./index-CrP0N4Pb.js";import"./chip.component-B-Zrd4al.js";import"./staticchip.component-VckYRkjC.js";const ot=H`
  :host {
    --mdc-accordiongroup-items-border-color: var(--mds-color-theme-outline-secondary-normal);

    display: flex;
    flex-direction: column;
  }
  :host([variant='stacked']) {
    row-gap: 1.5rem;
  }
  :host([variant='stacked']) ::slotted(mdc-accordion),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton) {
    border: 1px solid var(--mdc-accordiongroup-items-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='stacked']) ::slotted(mdc-accordion:not[expanded]),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton:not[expanded]) {
    border-bottom: none;
  }
  :host([variant='contained']) {
    border: 1px solid var(--mdc-accordiongroup-items-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='contained']) ::slotted(mdc-accordion),
  :host([variant='contained']) ::slotted(mdc-accordionbutton) {
    border-bottom: 1px solid var(--mdc-accordiongroup-items-border-color);
  }
  :host([variant='contained']) ::slotted(mdc-accordion:first-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:first-child) {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  :host([variant='contained']) ::slotted(mdc-accordion:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton:last-child) {
    border-bottom: none;
    border-radius: 0 0 0.5rem 0.5rem;
  }
  :host([variant='contained']) ::slotted(mdc-accordion[expanded]:last-child),
  :host([variant='contained']) ::slotted(mdc-accordionbutton[expanded]:last-child) {
    border-radius: inherit;
  }
  :host([variant='borderless']) ::slotted(mdc-accordion[expanded]),
  :host([variant='borderless']) ::slotted(mdc-accordionbutton[expanded]) {
    border-bottom: 1px solid var(--mdc-accordiongroup-items-border-color);
  }
`,at=[ot,...K()];var et=Object.defineProperty,l=(o,t,a,m)=>{for(var c=void 0,S=o.length-1,I;S>=0;S--)(I=o[S])&&(c=I(t,a,c)||c);return c&&et(t,a,c),c};const f=class f extends x{constructor(){super(),this.size=d.SIZE,this.variant=d.VARIANT,this.allowMultiple=!1,this.addEventListener("shown",this.handleAccordionExpanded)}handleAccordionExpanded(t){this.allowMultiple||[...this.accordionItems,...this.accordionButtonItems].forEach(a=>{a!==t.target&&a.hasAttribute("expanded")&&a.toggleAttribute("expanded")})}setChildrenAccordionAttributes(t,a){[...this.accordionItems].forEach(m=>{m.setAttribute(t,a)}),[...this.accordionButtonItems].forEach(m=>{m.setAttribute(t,a)})}updated(t){super.updated(t),t.has("size")&&(this.size||(this.size=d.SIZE),this.setChildrenAccordionAttributes("size",this.size)),t.has("variant")&&(this.variant||(this.variant=d.VARIANT),this.setChildrenAccordionAttributes("variant",this.variant))}render(){return g` <slot></slot> `}};f.styles=[...x.styles,...at];let i=f;l([E({type:String,reflect:!0})],i.prototype,"size");l([E({type:String,reflect:!0})],i.prototype,"variant");l([E({type:Boolean,reflect:!0,attribute:"allow-multiple"})],i.prototype,"allowMultiple");l([U({selector:J})],i.prototype,"accordionItems");l([U({selector:P})],i.prototype,"accordionButtonItems");i.register(Q);const e=g`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,rt=o=>g`<div role="${F.MAIN}">
    <mdc-accordiongroup
      size="${L(o.size)}"
      variant="${L(o.variant)}"
      ?allow-multiple="${o["allow-multiple"]}"
    >
      <mdc-accordionbutton header-text="Why is the moon sometimes out during the day?"
        >${e}</mdc-accordionbutton
      >
      <mdc-accordionbutton header-text="Why is the sky blue?">${e}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="Will we ever discover aliens?">${e}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="How much does the Earth weigh?">${e}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="How do airplanes stay up?">${e}</mdc-accordionbutton>
    </mdc-accordiongroup>
  </div>`,Ot={title:"Components/accordion/accordiongroup",tags:["autodocs"],component:"mdc-accordiongroup",render:rt,argTypes:{...X,...tt,"allow-multiple":{control:"boolean"},size:{control:"select",options:Object.values(n)},variant:{control:"select",options:Object.values(s)}}},r={args:{size:d.SIZE,variant:d.VARIANT,"allow-multiple":!1}},p={args:{...r.args,variant:s.STACKED,size:n.SMALL}},u={args:{...r.args,variant:s.CONTAINED,size:n.SMALL}},b={args:{...r.args,variant:s.BORDERLESS,size:n.SMALL}},h={args:{...r.args,size:n.SMALL,variant:s.CONTAINED}},v={args:{...r.args,size:n.LARGE,variant:s.CONTAINED}},it=o=>g`
  <div role="${F.MAIN}">
    <mdc-accordiongroup size="${o.size}" variant="${o.variant}" ?allow-multiple="${o["allow-multiple"]}">
      <mdc-accordion
        header-text="Identify Your Goals"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open Identify Your Goals"
        close-button-aria-label="Close Identify Your Goals"
      >
        <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #1" slot="trailing-controls" initials="#1"></mdc-avatarbutton>
        ${e}
      </mdc-accordion>
      <mdc-accordion
        header-text="Write Your Goals"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open Write Your Goals"
        close-button-aria-label="Close Write Your Goals"
      >
        <mdc-chip slot="leading-controls" label="Step 2"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #2" slot="trailing-controls" initials="#2"></mdc-avatarbutton>
        ${e}
      </mdc-accordion>
      <mdc-accordion
        header-text="Need Analysis"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open Need Analysis"
        close-button-aria-label="Close Need Analysis"
      >
        <mdc-chip slot="leading-controls" label="Step 3"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #3" slot="trailing-controls" initials="#3"></mdc-avatarbutton>
        ${e}
      </mdc-accordion>
      <mdc-accordion
        header-text="List Objectives"
        prefix-icon="add-option-bold"
        open-button-aria-label="Open List Objectives"
        close-button-aria-label="Close List Objectives"
      >
        <mdc-chip slot="leading-controls" label="Step 4"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #4" slot="trailing-controls" initials="#4"></mdc-avatarbutton>
        ${e}
      </mdc-accordion>
    </mdc-accordiongroup>
  </div>
`,A={args:{size:n.SMALL,variant:s.CONTAINED,"allow-multiple":!1},render:it};var N,T,y;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    variant: DEFAULTS.VARIANT,
    'allow-multiple': false
  }
}`,...(y=(T=r.parameters)==null?void 0:T.docs)==null?void 0:y.source}}};var z,C,M;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.STACKED,
    size: SIZE.SMALL
  }
}`,...(M=(C=p.parameters)==null?void 0:C.docs)==null?void 0:M.source}}};var O,R,$;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.CONTAINED,
    size: SIZE.SMALL
  }
}`,...($=(R=u.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var w,D,V;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    size: SIZE.SMALL
  }
}`,...(V=(D=b.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var Z,k,G;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED
  }
}`,...(G=(k=h.parameters)==null?void 0:k.docs)==null?void 0:G.source}}};var B,_,j;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    variant: VARIANT.CONTAINED
  }
}`,...(j=(_=v.parameters)==null?void 0:_.docs)==null?void 0:j.source}}};var W,Y,q;A.parameters={...A.parameters,docs:{...(W=A.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED,
    'allow-multiple': false
  },
  render: renderMultiInteractive
}`,...(q=(Y=A.parameters)==null?void 0:Y.docs)==null?void 0:q.source}}};const Rt=["Example","StackedVariant","ContainedVariant","BorderlessVariant","SmallSize","LargeSize","MultiInteractiveAccordion"];export{b as BorderlessVariant,u as ContainedVariant,r as Example,v as LargeSize,A as MultiInteractiveAccordion,h as SmallSize,p as StackedVariant,Rt as __namedExportsOrder,Ot as default};
