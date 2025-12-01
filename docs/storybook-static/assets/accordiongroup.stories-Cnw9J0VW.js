import{S as U,X as H,E as I,k as A,n as f}from"./iframe-BBVjHSmF.js";import{t as y}from"./if-defined-DKvggsc9.js";import{o as F}from"./query-assigned-elements-uEuc3rg8.js";import{T as K}from"./index-C4rri7mF.js";import{D as d,T as X,a as J,S as n,b as s}from"./accordionbutton.component-CAVHZ9sq.js";import"./index-CbyAxjNr.js";import"./index-r32AGY-k.js";import"./index-DPrEj3uJ.js";import{c as P,s as Q}from"./commonArgTypes-BluK8w5L.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./index-CbuHqg2o.js";import"./button.component-BYOIcVJj.js";import"./buttonsimple.component-BWKeUd6E.js";import"./TabIndexMixin-ClSIyJRm.js";import"./DisabledMixin-gXp6PtL6.js";import"./button.utils-rNW36Ji7.js";import"./index-D3_byEY4.js";import"./index-C76eqjue.js";import"./index-DTrDRi1E.js";import"./v4-CmTdKEVZ.js";import"./index-DZctNZdj.js";import"./IconNameMixin-CzOYEEzI.js";import"./index-rK8CefoX.js";import"./chip.component-D9MD-VFb.js";import"./staticchip.component-CRWk-Qxc.js";const tt=U`
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
`,at=[tt,...H()];var ot=Object.defineProperty,l=(a,t,o,m)=>{for(var c=void 0,S=a.length-1,E;S>=0;S--)(E=a[S])&&(c=E(t,o,c)||c);return c&&ot(t,o,c),c};const x=class x extends I{constructor(){super(),this.size=d.SIZE,this.variant=d.VARIANT,this.allowMultiple=!1,this.addEventListener("shown",this.handleAccordionExpanded)}handleAccordionExpanded(t){this.allowMultiple||[...this.accordionItems,...this.accordionButtonItems].forEach(o=>{o!==t.target&&o.hasAttribute("expanded")&&o.toggleAttribute("expanded")})}setChildrenAccordionAttributes(t,o){[...this.accordionItems].forEach(m=>{m.setAttribute(t,o)}),[...this.accordionButtonItems].forEach(m=>{m.setAttribute(t,o)})}updated(t){super.updated(t),t.has("size")&&(this.size||(this.size=d.SIZE),this.setChildrenAccordionAttributes("size",this.size)),t.has("variant")&&(this.variant||(this.variant=d.VARIANT),this.setChildrenAccordionAttributes("variant",this.variant))}render(){return A` <slot></slot> `}};x.styles=[...I.styles,...at];let i=x;l([f({type:String,reflect:!0})],i.prototype,"size");l([f({type:String,reflect:!0})],i.prototype,"variant");l([f({type:Boolean,reflect:!0,attribute:"allow-multiple"})],i.prototype,"allowMultiple");l([F({selector:K})],i.prototype,"accordionItems");l([F({selector:X})],i.prototype,"accordionButtonItems");i.register(J);const e=A`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,et=a=>A`<div role="main">
    <mdc-accordiongroup
      size="${y(a.size)}"
      variant="${y(a.variant)}"
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
  </div>`,Ot={title:"Components/accordion/accordiongroup",tags:["autodocs"],component:"mdc-accordiongroup",render:et,argTypes:{...P,...Q,"allow-multiple":{control:"boolean"},size:{control:"select",options:Object.values(n)},variant:{control:"select",options:Object.values(s)}}},r={args:{size:d.SIZE,variant:d.VARIANT,"allow-multiple":!1}},p={args:{...r.args,variant:s.STACKED,size:n.SMALL}},u={args:{...r.args,variant:s.CONTAINED,size:n.SMALL}},b={args:{...r.args,variant:s.BORDERLESS,size:n.SMALL}},h={args:{...r.args,size:n.SMALL,variant:s.CONTAINED}},v={args:{...r.args,size:n.LARGE,variant:s.CONTAINED}},g={args:{size:n.SMALL,variant:s.CONTAINED,"allow-multiple":!1},render:a=>A`
    <div role="main">
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
  `};var L,N,z;r.parameters={...r.parameters,docs:{...(L=r.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    variant: DEFAULTS.VARIANT,
    'allow-multiple': false
  }
}`,...(z=(N=r.parameters)==null?void 0:N.docs)==null?void 0:z.source}}};var C,T,O;p.parameters={...p.parameters,docs:{...(C=p.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
    <div role="main">
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
}`,...(q=(_=g.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};const $t=["Example","StackedVariant","ContainedVariant","BorderlessVariant","SmallSize","LargeSize","MultiInteractiveAccordion"];export{b as BorderlessVariant,u as ContainedVariant,r as Example,v as LargeSize,g as MultiInteractiveAccordion,h as SmallSize,p as StackedVariant,$t as __namedExportsOrder,Ot as default};
