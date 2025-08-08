import{B as t,a as r,b as n}from"./index-K6vltCPl.js";import{k as e}from"./lit-element-D5KKan5q.js";import{c as S,s as E}from"./commonArgTypes-BluK8w5L.js";import{d as G,t as P}from"./utils-CFOyPOhY.js";import"./index-BV2mzR5x.js";import"./index-BOoZFxPT.js";import"./index-DYRxW7oy.js";import"./provider.component-BaQC7CJH.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-B-GnYs90.js";import"./button.component-DvOKP7op.js";import"./state-C0WmBOuD.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./roles-DU0xbrD4.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./index-BNTyituY.js";import"./iframe-DXnaf2Uw.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./popover.component-BeJYT0F1.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";const B=o=>e` <mdc-buttongroup
    variant="${o.variant}"
    orientation="${o.orientation}"
    size="${o.size}"
    ?compact="${o.compact}"
  >
    ${o.children}
  </mdc-buttongroup>`,lo={title:"Components/buttongroup",tags:["autodocs"],component:"mdc-buttongroup",render:B,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(t)},orientation:{control:"select",options:Object.values(r)},size:{control:"select",options:Object.values(n)},compact:{control:"boolean"},...S,...E,...G(["children"]),...P(["--mdc-buttongroup-border-radius","--mdc-buttongroup-border-color","--mdc-buttongroup-divider-color"])}},a={args:{variant:t.PRIMARY,orientation:r.HORIZONTAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
    `}},i={args:{variant:t.SECONDARY,orientation:r.VERTICAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="arrow-up-bold" aria-label="arrow up button"></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},c={args:{variant:t.SECONDARY,orientation:r.HORIZONTAL,size:n[32],compact:!0,children:e`
      <mdc-button prefix-icon="reply-bold" aria-label="reply button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label="alert active button"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label="forward message button"></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label="more button"></mdc-button>
    `}},d={args:{variant:t.SECONDARY,orientation:r.HORIZONTAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},p={args:{variant:t.SECONDARY,orientation:r.HORIZONTAL,size:n[28],compact:!1,children:e`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    `}},m={render:o=>e`
    <mdc-buttongroup variant="${o.variant}" orientation="${o.orientation}" size="${o.size}">
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
  `,args:{variant:t.SECONDARY,orientation:r.HORIZONTAL,size:n[28]}};var l,b,s;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(s=(b=a.parameters)==null?void 0:b.docs)==null?void 0:s.source}}};var u,O,T;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(T=(O=i.parameters)==null?void 0:O.docs)==null?void 0:T.source}}};var g,N,R;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(R=(N=c.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var f,A,I;d.parameters={...d.parameters,docs:{...(f=d.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(I=(A=d.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var x,v,U;p.parameters={...p.parameters,docs:{...(x=p.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(U=(v=p.parameters)==null?void 0:v.docs)==null?void 0:U.source}}};var _,h,w;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <mdc-buttongroup variant="\${args.variant}" orientation="\${args.orientation}" size="\${args.size}">
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
  \`,
  args: {
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28]
  }
}`,...(w=(h=m.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const bo=["Example","VerticalGroup","CompactGroup","SpiltPillButton","SpiltIconButton","GroupWithPopover"];export{c as CompactGroup,a as Example,m as GroupWithPopover,p as SpiltIconButton,d as SpiltPillButton,i as VerticalGroup,bo as __namedExportsOrder,lo as default};
