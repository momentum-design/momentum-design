import{i as Y,k as A}from"./lit-element-D5KKan5q.js";import{t as I}from"./if-defined-D5BV9-c0.js";import{n as f}from"./property-Bj3TGwkg.js";import{o as U}from"./query-assigned-elements-uEuc3rg8.js";import{T as H}from"./index-CgDWVztX.js";import{D as d,T as K,a as J,S as i,b as n}from"./accordionbutton.component-BGIXJeNE.js";import{C as L}from"./provider.component-DrWB4byV.js";import{a as P}from"./index-B-GnYs90.js";import"./index-UVOlKPEi.js";import"./index--6gMlXth.js";import"./index-B49DQPk-.js";import{c as Q,s as X}from"./commonArgTypes-BluK8w5L.js";import{t as tt}from"./utils-CFOyPOhY.js";import"./base-DIkkzJ-c.js";import"./index-D3UVURB9.js";import"./button.component-DXfxhmBS.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-jROCF6tv.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./button.utils-rNW36Ji7.js";import"./index-B6RX7cfe.js";import"./iframe-BNm9kGAY.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-D2VIkDCb.js";import"./v4-CmTdKEVZ.js";import"./index-DMqsNIY3.js";import"./IconNameMixin-Bk-Z_FTS.js";import"./index-CTVjTeNc.js";import"./chip.component-CKD2nrHS.js";import"./staticchip.component-eiQwFxN8.js";const ot=Y`
  :host {
    --mdc-accordiongroup-border-color: var(--mds-color-theme-outline-secondary-normal);

    display: flex;
    flex-direction: column;
  }
  :host([variant='stacked']) {
    row-gap: 1.5rem;
  }
  :host([variant='stacked']) ::slotted(mdc-accordion),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton) {
    border: 1px solid var(--mdc-accordiongroup-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='stacked']) ::slotted(mdc-accordion:not[expanded]),
  :host([variant='stacked']) ::slotted(mdc-accordionbutton:not[expanded]) {
    border-bottom: none;
  }
  :host([variant='contained']) {
    border: 1px solid var(--mdc-accordiongroup-border-color);
    border-radius: 0.5rem;
  }
  :host([variant='contained']) ::slotted(mdc-accordion),
  :host([variant='contained']) ::slotted(mdc-accordionbutton) {
    border-bottom: 1px solid var(--mdc-accordiongroup-border-color);
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
    border-bottom: 1px solid var(--mdc-accordiongroup-border-color);
  }
`,at=[ot,...P()];var rt=Object.defineProperty,s=(o,t,a,l)=>{for(var c=void 0,S=o.length-1,E;S>=0;S--)(E=o[S])&&(c=E(t,a,c)||c);return c&&rt(t,a,c),c};const x=class x extends L{constructor(){super(),this.size=d.SIZE,this.variant=d.VARIANT,this.allowMultiple=!1,this.addEventListener("shown",this.handleAccordionExpanded)}handleAccordionExpanded(t){this.allowMultiple||[...this.accordionItems,...this.accordionButtonItems].forEach(a=>{a!==t.target&&a.hasAttribute("expanded")&&a.toggleAttribute("expanded")})}setChildrenAccordionAttributes(t,a){[...this.accordionItems].forEach(l=>{l.setAttribute(t,a)}),[...this.accordionButtonItems].forEach(l=>{l.setAttribute(t,a)})}updated(t){super.updated(t),t.has("size")&&(this.size||(this.size=d.SIZE),this.setChildrenAccordionAttributes("size",this.size)),t.has("variant")&&(this.variant||(this.variant=d.VARIANT),this.setChildrenAccordionAttributes("variant",this.variant))}render(){return A` <slot></slot> `}};x.styles=[...L.styles,...at];let e=x;s([f({type:String,reflect:!0})],e.prototype,"size");s([f({type:String,reflect:!0})],e.prototype,"variant");s([f({type:Boolean,reflect:!0,attribute:"allow-multiple"})],e.prototype,"allowMultiple");s([U({selector:H})],e.prototype,"accordionItems");s([U({selector:K})],e.prototype,"accordionButtonItems");e.register(J);const r=A`Loreum impusm sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
  labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliqui p ex
  ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
  laborum.<mdc-button style="margin-top:0.75rem">Continue</mdc-button>`,et=o=>A` <mdc-accordiongroup
    size="${I(o.size)}"
    variant="${I(o.variant)}"
    ?allow-multiple="${o["allow-multiple"]}"
  >
    <mdc-accordionbutton header-text="Why is the moon sometimes out during the day?"
      >${r}</mdc-accordionbutton
    >
    <mdc-accordionbutton header-text="Why is the sky blue?">${r}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="Will we ever discover aliens?">${r}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="How much does the Earth weigh?">${r}</mdc-accordionbutton>
    <mdc-accordionbutton header-text="How do airplanes stay up?">${r}</mdc-accordionbutton>
  </mdc-accordiongroup>`,qt={title:"Components/accordion/accordiongroup",tags:["autodocs"],component:"mdc-accordiongroup",render:et,parameters:{badges:["stable"]},argTypes:{...Q,...X,"allow-multiple":{control:"boolean"},size:{control:"select",options:Object.values(i)},variant:{control:"select",options:Object.values(n)},...tt(["default","--mdc-accordiongroup-border-color"])}},m={args:{size:d.SIZE,variant:d.VARIANT,"allow-multiple":!1}},p={args:{variant:n.STACKED,size:i.SMALL}},u={args:{variant:n.CONTAINED,size:i.SMALL}},b={args:{variant:n.BORDERLESS,size:i.SMALL}},h={args:{size:i.SMALL,variant:n.CONTAINED}},v={args:{size:i.LARGE,variant:n.CONTAINED}},g={args:{size:i.SMALL,variant:n.CONTAINED,"allow-multiple":!1},render:o=>A`
    <mdc-accordiongroup size="${o.size}" variant="${o.variant}" ?allow-multiple="${o["allow-multiple"]}">
      <mdc-accordion header-text="Identify Your Goals" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #1" slot="trailing-controls" initials="#1"></mdc-avatarbutton>
        ${r}
      </mdc-accordion>
      <mdc-accordion header-text="Write Your Goals" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 2"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #2" slot="trailing-controls" initials="#2"></mdc-avatarbutton>
        ${r}
      </mdc-accordion>
      <mdc-accordion header-text="Need Analysis" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 3"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #3" slot="trailing-controls" initials="#3"></mdc-avatarbutton>
        ${r}
      </mdc-accordion>
      <mdc-accordion header-text="List Objectives" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 4"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #4" slot="trailing-controls" initials="#4"></mdc-avatarbutton>
        ${r}
      </mdc-accordion>
    </mdc-accordiongroup>
  `};var z,T,N;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    variant: DEFAULTS.VARIANT,
    'allow-multiple': false
  }
}`,...(N=(T=m.parameters)==null?void 0:T.docs)==null?void 0:N.source}}};var y,C,$;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.STACKED,
    size: SIZE.SMALL
  }
}`,...($=(C=p.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var w,M,R;u.parameters={...u.parameters,docs:{...(w=u.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.CONTAINED,
    size: SIZE.SMALL
  }
}`,...(R=(M=u.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var D,O,V;b.parameters={...b.parameters,docs:{...(D=b.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    variant: VARIANT.BORDERLESS,
    size: SIZE.SMALL
  }
}`,...(V=(O=b.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var Z,k,B;h.parameters={...h.parameters,docs:{...(Z=h.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED
  }
}`,...(B=(k=h.parameters)==null?void 0:k.docs)==null?void 0:B.source}}};var _,G,j;v.parameters={...v.parameters,docs:{...(_=v.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: SIZE.LARGE,
    variant: VARIANT.CONTAINED
  }
}`,...(j=(G=v.parameters)==null?void 0:G.docs)==null?void 0:j.source}}};var q,W,F;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    size: SIZE.SMALL,
    variant: VARIANT.CONTAINED,
    'allow-multiple': false
  },
  render: (args: Args) => html\`
    <mdc-accordiongroup size="\${args.size}" variant="\${args.variant}" ?allow-multiple="\${args['allow-multiple']}">
      <mdc-accordion header-text="Identify Your Goals" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 1"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #1" slot="trailing-controls" initials="#1"></mdc-avatarbutton>
        \${defaultChildren}
      </mdc-accordion>
      <mdc-accordion header-text="Write Your Goals" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 2"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #2" slot="trailing-controls" initials="#2"></mdc-avatarbutton>
        \${defaultChildren}
      </mdc-accordion>
      <mdc-accordion header-text="Need Analysis" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 3"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #3" slot="trailing-controls" initials="#3"></mdc-avatarbutton>
        \${defaultChildren}
      </mdc-accordion>
      <mdc-accordion header-text="List Objectives" prefix-icon="add-option-bold">
        <mdc-chip slot="leading-controls" label="Step 4"></mdc-chip>
        <mdc-avatarbutton aria-label="avatar #4" slot="trailing-controls" initials="#4"></mdc-avatarbutton>
        \${defaultChildren}
      </mdc-accordion>
    </mdc-accordiongroup>
  \`
}`,...(F=(W=g.parameters)==null?void 0:W.docs)==null?void 0:F.source}}};const Wt=["Example","StackedVariant","ContainedVariant","BorderlessVariant","SmallSize","LargeSize","MultiInteractiveAccordion"];export{b as BorderlessVariant,u as ContainedVariant,m as Example,v as LargeSize,g as MultiInteractiveAccordion,h as SmallSize,p as StackedVariant,Wt as __namedExportsOrder,qt as default};
