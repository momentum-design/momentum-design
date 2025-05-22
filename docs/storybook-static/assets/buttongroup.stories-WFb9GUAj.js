import{i as L,k as e}from"./lit-element-D5KKan5q.js";import{u as Y,C as N,n as h}from"./index-C9z9WAEj.js";import{o as H}from"./query-assigned-elements-uEuc3rg8.js";import{h as k}from"./index-CcXofQbA.js";import{c as $,s as M}from"./commonArgTypes-BluK8w5L.js";import{d as j}from"./utils-CO8B6ZcN.js";import"./index-BuGJUGT6.js";import"./index-C3sLv3x5.js";import"./index-w8B2CBxb.js";import"./base-DIkkzJ-c.js";import"./button.component-DuJ_hCOI.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./button.utils-rNW36Ji7.js";import"./index-Xnm_WGwE.js";import"./iframe-DQiZucLS.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./popover.component-BTxIb0E7.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-SA_WaGa6.js";import"./roles-DMFGbP5t.js";import"./v4-CmTdKEVZ.js";const F=Y.constructTagName("buttongroup"),n={40:40,32:32,28:28,24:24},i={HORIZONTAL:"horizontal",VERTICAL:"vertical"},a={PRIMARY:"primary",SECONDARY:"secondary"},O={SIZE:n[28],VARIANT:a.PRIMARY,ORIENTATION:i.HORIZONTAL},W=L`
:host{
  --mdc-buttongroup-border-radius: 1.25rem;
  --mdc-buttongroup-border-color: var(--mds-color-theme-outline-button-normal);
  --mdc-buttongroup-divider-color: var(--mds-color-theme-outline-secondary-normal);

  border-radius: var(--mdc-buttongroup-border-radius);
  border: 1px solid var(--mdc-buttongroup-border-color);
}

:host([variant='primary']){
  border: none;
  background-color: var(--mds-color-theme-outline-primary-normal);
  gap: 1px;
}

::slotted(mdc-button){
  border-radius: 0;
  border: none;
  box-sizing: content-box;
}

:host([orientation="vertical"]){
  flex-direction: column;
}

:host([orientation="horizontal"][variant="secondary"]:dir(ltr)) ::slotted(mdc-button:not(:last-child)){
  border-right: 1px solid var(--mdc-buttongroup-divider-color);
}
:host([orientation="horizontal"][variant="secondary"]:dir(rtl)) ::slotted(mdc-button:not(:last-child)){
  border-left: 1px solid var(--mdc-buttongroup-divider-color);
}
:host([orientation="vertical"][variant="secondary"]) ::slotted(mdc-button:not(:last-child)){
  border-bottom: 1px solid var(--mdc-buttongroup-divider-color);
}

:host([orientation="vertical"]) ::slotted(mdc-button:first-child){
  border-top-left-radius: var(--mdc-buttongroup-border-radius);
  border-top-right-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="vertical"]) ::slotted(mdc-button:last-child){
  border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
}

:host([orientation="horizontal"]:dir(ltr)) ::slotted(mdc-button:first-child){
  border-top-left-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="horizontal"]:dir(rtl)) ::slotted(mdc-button:first-child){
  border-top-right-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="horizontal"]:dir(ltr)) ::slotted(mdc-button:last-child){
  border-top-right-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-right-radius: var(--mdc-buttongroup-border-radius);
}
:host([orientation="horizontal"]:dir(rtl)) ::slotted(mdc-button:last-child){
  border-top-left-radius: var(--mdc-buttongroup-border-radius);
  border-bottom-left-radius: var(--mdc-buttongroup-border-radius);
}

:host([compact][orientation="horizontal"]) ::slotted(mdc-button){
  height: 1.5rem;
}
:host([compact][orientation="horizontal"][size="24"]) ::slotted(mdc-button){
  width: 1.5rem;
}
:host([compact][orientation="horizontal"][size="28"]) ::slotted(mdc-button){
  width: 1.75rem;
}
:host([compact][orientation="horizontal"][size="32"]) ::slotted(mdc-button){
  width: 2rem;
}
:host([compact][orientation="horizontal"][size="40"]) ::slotted(mdc-button){
  width: 2.5rem;
}
`,q=[k,W];var J=Object.defineProperty,c=(o,t,T,Q)=>{for(var d=void 0,g=o.length-1,f;g>=0;g--)(f=o[g])&&(d=f(t,T,d)||d);return d&&J(t,T,d),d};const v=class v extends N{constructor(){super(...arguments),this.orientation=O.ORIENTATION,this.variant=O.VARIANT,this.size=O.SIZE,this.compact=!1}handleSlotChange(){this.buttons.forEach(t=>{t.setAttribute("size",this.size.toString()),t.setAttribute("variant",this.variant)})}updated(t){super.updated(t),(t.has("size")||t.has("variant"))&&this.handleSlotChange()}render(){return e`<slot @slotchange=${this.handleSlotChange}></slot>`}};v.styles=[...N.styles,...q];let r=v;c([h({type:String,reflect:!0})],r.prototype,"orientation");c([h({type:String,reflect:!0})],r.prototype,"variant");c([h({type:Number,reflect:!0})],r.prototype,"size");c([h({type:Boolean,reflect:!0})],r.prototype,"compact");c([H({selector:"mdc-button"})],r.prototype,"buttons");r.register(F);const K=o=>e` <mdc-buttongroup
    variant="${o.variant}"
    orientation="${o.orientation}"
    size="${o.size}"
    ?compact="${o.compact}"
  >
    ${o.children}
  </mdc-buttongroup>`,wt={title:"Components/buttongroup",tags:["autodocs"],component:"mdc-buttongroup",render:K,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(a)},orientation:{control:"select",options:Object.values(i)},size:{control:"select",options:Object.values(n)},compact:{control:"boolean"},...$,...M,...j(["children"])}},l={args:{variant:a.PRIMARY,orientation:i.HORIZONTAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
    `}},s={args:{variant:a.SECONDARY,orientation:i.VERTICAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="arrow-up-bold" aria-label="arrow up button"></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},m={args:{variant:a.SECONDARY,orientation:i.HORIZONTAL,size:n[32],compact:!0,children:e`
      <mdc-button prefix-icon="reply-bold" aria-label="reply button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label="alert active button"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label="forward message button"></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label="more button"></mdc-button>
    `}},u={args:{variant:a.SECONDARY,orientation:i.HORIZONTAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},b={args:{variant:a.SECONDARY,orientation:i.HORIZONTAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    `}},p={render:()=>e`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
    </mdc-buttongroup>
    
    <mdc-tooltip id="tooltip1" triggerID="popover-trigger-1" placement="bottom" show-arrow tooltip-type="label">
      <mdc-text>Tooltip explaining Start Video button</mdc-text>
    </mdc-tooltip>
    <mdc-popover
      id="popover1"
      triggerID="popover-trigger-2"
      trigger="click"
      placement="bottom"
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <mdc-text>Settings related to video options</mdc-text>
    </mdc-popover>
  `};var R,A,x;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    variant: BUTTON_GROUP_VARIANT.PRIMARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html\`
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
    \`
  }
}`,...(x=(A=l.parameters)==null?void 0:A.docs)==null?void 0:x.source}}};var I,_,S;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.VERTICAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html\`
      <mdc-button prefix-icon="arrow-up-bold" aria-label="arrow up button"></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    \`
  }
}`,...(S=(_=s.parameters)==null?void 0:_.docs)==null?void 0:S.source}}};var w,z,U;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[32],
    compact: true,
    children: html\`
      <mdc-button prefix-icon="reply-bold" aria-label="reply button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label="alert active button"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label="forward message button"></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label="more button"></mdc-button>
    \`
  }
}`,...(U=(z=m.parameters)==null?void 0:z.docs)==null?void 0:U.source}}};var y,E,P;u.parameters={...u.parameters,docs:{...(y=u.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html\`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    \`
  }
}`,...(P=(E=u.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var C,G,B;b.parameters={...b.parameters,docs:{...(C=b.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28],
    compact: false,
    children: html\`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    \`
  }
}`,...(B=(G=b.parameters)==null?void 0:G.docs)==null?void 0:B.source}}};var Z,V,D;p.parameters={...p.parameters,docs:{...(Z=p.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-buttongroup variant="secondary" orientation="horizontal" size="32">
      <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
    </mdc-buttongroup>
    
    <mdc-tooltip id="tooltip1" triggerID="popover-trigger-1" placement="bottom" show-arrow tooltip-type="label">
      <mdc-text>Tooltip explaining Start Video button</mdc-text>
    </mdc-tooltip>
    <mdc-popover
      id="popover1"
      triggerID="popover-trigger-2"
      trigger="click"
      placement="bottom"
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <mdc-text>Settings related to video options</mdc-text>
    </mdc-popover>
  \`
}`,...(D=(V=p.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};const zt=["Example","VerticalGroup","CompactGroup","SpiltPillButton","SpiltIconButton","GroupWithPopover"];export{m as CompactGroup,l as Example,p as GroupWithPopover,b as SpiltIconButton,u as SpiltPillButton,s as VerticalGroup,zt as __namedExportsOrder,wt as default};
