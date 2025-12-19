import{U as H,X as K,F as I,k as A,n as f,R as F}from"./iframe-BnQbELBG.js";import{t as L}from"./if-defined-BOzP4gKk.js";import{o as U}from"./query-assigned-elements-uEuc3rg8.js";import{T as X}from"./index-DuBOiHIx.js";import{D as d,T as J,a as P,S as n,b as s}from"./accordionbutton.component-B-YpBF2m.js";import"./index-CBSfV_b0.js";import"./index-DKW_i67g.js";import"./index-C2KDpryL.js";import{c as Q,s as tt}from"./commonArgTypes-BG7EqI50.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./index-Be7Hfuo1.js";import"./button.component-DV31xi75.js";import"./buttonsimple.component-CsjmMQ3z.js";import"./TabIndexMixin-CPTKcaQm.js";import"./DisabledMixin-D4z0PzfI.js";import"./button.utils-rNW36Ji7.js";import"./index-DKRb6pyT.js";import"./index-tu91Ep7P.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";import"./index-Dxeku6SQ.js";import"./IconNameMixin-CeAeGadC.js";import"./index-DbbigcAq.js";import"./chip.component-BXu35mxS.js";import"./staticchip.component-D221IHlj.js";const at=H`
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
`,ot=[at,...K()];var et=Object.defineProperty,l=(a,t,o,m)=>{for(var c=void 0,S=a.length-1,x;S>=0;S--)(x=a[S])&&(c=x(t,o,c)||c);return c&&et(t,o,c),c};const E=class E extends I{constructor(){super(),this.size=d.SIZE,this.variant=d.VARIANT,this.allowMultiple=!1,this.addEventListener("shown",this.handleAccordionExpanded)}handleAccordionExpanded(t){this.allowMultiple||[...this.accordionItems,...this.accordionButtonItems].forEach(o=>{o!==t.target&&o.hasAttribute("expanded")&&o.toggleAttribute("expanded")})}setChildrenAccordionAttributes(t,o){[...this.accordionItems].forEach(m=>{m.setAttribute(t,o)}),[...this.accordionButtonItems].forEach(m=>{m.setAttribute(t,o)})}updated(t){super.updated(t),t.has("size")&&(this.size||(this.size=d.SIZE),this.setChildrenAccordionAttributes("size",this.size)),t.has("variant")&&(this.variant||(this.variant=d.VARIANT),this.setChildrenAccordionAttributes("variant",this.variant))}render(){return A` <slot></slot> `}};E.styles=[...I.styles,...ot];let i=E;l([f({type:String,reflect:!0})],i.prototype,"size");l([f({type:String,reflect:!0})],i.prototype,"variant");l([f({type:Boolean,reflect:!0,attribute:"allow-multiple"})],i.prototype,"allowMultiple");l([U({selector:X})],i.prototype,"accordionItems");l([U({selector:J})],i.prototype,"accordionButtonItems");i.register(P);const e=A`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,rt=a=>A`<div role="${F.MAIN}">
    <mdc-accordiongroup
      size="${L(a.size)}"
      variant="${L(a.variant)}"
      ?allow-multiple="${a["allow-multiple"]}"
    >
      <mdc-accordionbutton header-text="Why is the moon sometimes out during the day?"
        >${e}</mdc-accordionbutton
      >
      <mdc-accordionbutton header-text="Why is the sky blue?">${e}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="Will we ever discover aliens?">${e}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="How much does the Earth weigh?">${e}</mdc-accordionbutton>
      <mdc-accordionbutton header-text="How do airplanes stay up?">${e}</mdc-accordionbutton>
    </mdc-accordiongroup>
  </div>`,$t={title:"Components/accordion/accordiongroup",tags:["autodocs"],component:"mdc-accordiongroup",render:rt,argTypes:{...Q,...tt,"allow-multiple":{control:"boolean"},size:{control:"select",options:Object.values(n)},variant:{control:"select",options:Object.values(s)}}},r={args:{size:d.SIZE,variant:d.VARIANT,"allow-multiple":!1}},p={args:{...r.args,variant:s.STACKED,size:n.SMALL}},u={args:{...r.args,variant:s.CONTAINED,size:n.SMALL}},b={args:{...r.args,variant:s.BORDERLESS,size:n.SMALL}},h={args:{...r.args,size:n.SMALL,variant:s.CONTAINED}},v={args:{...r.args,size:n.LARGE,variant:s.CONTAINED}},g={args:{size:n.SMALL,variant:s.CONTAINED,"allow-multiple":!1},render:a=>A`
    <div role="${F.MAIN}">
      <mdc-accordiongroup size="${a.size}" variant="${a.variant}" ?allow-multiple="${a["allow-multiple"]}">
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
  `};var N,y,z;r.parameters={...r.parameters,docs:{...(N=r.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    variant: DEFAULTS.VARIANT,
    'allow-multiple': false
  }
}`,...(z=(y=r.parameters)==null?void 0:y.docs)==null?void 0:z.source}}};var C,T,O;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.STACKED,
    size: SIZE.SMALL
  }
}`,...(O=(T=p.parameters)==null?void 0:T.docs)==null?void 0:O.source}}};var $,w,M;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.CONTAINED,
    size: SIZE.SMALL
  }
}`,...(M=(w=u.parameters)==null?void 0:w.docs)==null?void 0:M.source}}};var R,D,V;b.parameters={...b.parameters,docs:{...(R=b.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: VARIANT.BORDERLESS,
    size: SIZE.SMALL
  }
}`,...(V=(D=b.parameters)==null?void 0:D.docs)==null?void 0:V.source}}};var G,Y,Z;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED
  }
}`,...(Z=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var k,j,W;v.parameters={...v.parameters,docs:{...(k=v.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    size: SIZE.LARGE,
    variant: VARIANT.CONTAINED
  }
}`,...(W=(j=v.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var B,_,q;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED,
    'allow-multiple': false
  },
  render: (args: Args) => html\`
    <div role="\${ROLE.MAIN}">
      <mdc-accordiongroup size="\${args.size}" variant="\${args.variant}" ?allow-multiple="\${args['allow-multiple']}">
        <mdc-accordion
          header-text="Identify Your Goals"
          prefix-icon="add-option-bold"
          open-button-aria-label="Open Identify Your Goals"
          close-button-aria-label="Close Identify Your Goals"
        >
          <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
          <mdc-avatarbutton aria-label="avatar #1" slot="trailing-controls" initials="#1"></mdc-avatarbutton>
          \${defaultChildren}
        </mdc-accordion>
        <mdc-accordion
          header-text="Write Your Goals"
          prefix-icon="add-option-bold"
          open-button-aria-label="Open Write Your Goals"
          close-button-aria-label="Close Write Your Goals"
        >
          <mdc-chip slot="leading-controls" label="Step 2"></mdc-chip>
          <mdc-avatarbutton aria-label="avatar #2" slot="trailing-controls" initials="#2"></mdc-avatarbutton>
          \${defaultChildren}
        </mdc-accordion>
        <mdc-accordion
          header-text="Need Analysis"
          prefix-icon="add-option-bold"
          open-button-aria-label="Open Need Analysis"
          close-button-aria-label="Close Need Analysis"
        >
          <mdc-chip slot="leading-controls" label="Step 3"></mdc-chip>
          <mdc-avatarbutton aria-label="avatar #3" slot="trailing-controls" initials="#3"></mdc-avatarbutton>
          \${defaultChildren}
        </mdc-accordion>
        <mdc-accordion
          header-text="List Objectives"
          prefix-icon="add-option-bold"
          open-button-aria-label="Open List Objectives"
          close-button-aria-label="Close List Objectives"
        >
          <mdc-chip slot="leading-controls" label="Step 4"></mdc-chip>
          <mdc-avatarbutton aria-label="avatar #4" slot="trailing-controls" initials="#4"></mdc-avatarbutton>
          \${defaultChildren}
        </mdc-accordion>
      </mdc-accordiongroup>
    </div>
  \`
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const wt=["Example","StackedVariant","ContainedVariant","BorderlessVariant","SmallSize","LargeSize","MultiInteractiveAccordion"];export{b as BorderlessVariant,u as ContainedVariant,r as Example,v as LargeSize,g as MultiInteractiveAccordion,h as SmallSize,p as StackedVariant,wt as __namedExportsOrder,$t as default};
