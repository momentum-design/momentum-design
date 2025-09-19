import{B as r,a as n,b as e}from"./index-D8-XmCZU.js";import{k as t}from"./lit-element-D5KKan5q.js";import{c as G,s as P}from"./commonArgTypes-BluK8w5L.js";import{d as B,t as y}from"./utils-CFOyPOhY.js";import"./index-ChFpzoWO.js";import"./index-Cb2RNGLV.js";import"./index-DQ1Hv4sq.js";import"./provider.component-BaQC7CJH.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-CqVtAZCJ.js";import"./button.component-D5eG231X.js";import"./state-C0WmBOuD.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./roles-CJI3JVG-.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./button.utils-rNW36Ji7.js";import"./index-DyrUVjQY.js";import"./iframe-B0MNxHtX.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./popover.component-CgG8O1N4.js";import"./if-defined-D5BV9-c0.js";import"./v4-CmTdKEVZ.js";const C=o=>t` <mdc-buttongroup
    variant="${o.variant}"
    orientation="${o.orientation}"
    size="${o.size}"
    ?compact="${o.compact}"
  >
    ${o.children}
  </mdc-buttongroup>`,go={title:"Components/buttongroup",tags:["autodocs"],component:"mdc-buttongroup",render:C,parameters:{badges:["stable"]},argTypes:{variant:{control:"select",options:Object.values(r)},orientation:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(e)},compact:{control:"boolean"},...G,...P,...B(["children"]),...y(["--mdc-buttongroup-border-radius","--mdc-buttongroup-border-color","--mdc-buttongroup-divider-color"])}},i={args:{variant:r.PRIMARY,orientation:n.HORIZONTAL,size:e[28],compact:!1,children:t`
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
    `}},a={args:{variant:r.SECONDARY,orientation:n.VERTICAL,size:e[28],compact:!1,children:t`
      <mdc-button prefix-icon="arrow-up-bold" aria-label="arrow up button"></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},c={args:{variant:r.SECONDARY,orientation:n.HORIZONTAL,size:e[32],compact:!0,children:t`
      <mdc-button prefix-icon="reply-bold" aria-label="reply button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label="alert active button"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label="forward message button"></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label="more button"></mdc-button>
    `}},d={args:{variant:r.SECONDARY,orientation:n.HORIZONTAL,size:e[28],compact:!1,children:t`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},p={args:{variant:r.SECONDARY,orientation:n.HORIZONTAL,size:e[28],compact:!1,children:t`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    `}},m={render:o=>t`
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
  `,args:{variant:r.SECONDARY,orientation:n.HORIZONTAL,size:e[28]}},b={render:()=>t` <div style="display: flex; flex-direction: column; gap: 1rem">
      <mdc-buttongroup variant="primary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="primary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>
    </div>`};var u,l,s;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(s=(l=i.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var g,O,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(O=a.parameters)==null?void 0:O.docs)==null?void 0:v.source}}};var T,f,x;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(x=(f=c.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var N,R,w;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(R=d.parameters)==null?void 0:R.docs)==null?void 0:w.source}}};var A,S,I;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(S=p.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var h,U,_;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(_=(U=m.parameters)==null?void 0:U.docs)==null?void 0:_.source}}};var V,z,E;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; flex-direction: column; gap: 1rem">
      <mdc-buttongroup variant="primary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="primary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2"></mdc-button>
      </mdc-buttongroup>
    </div>\`
}`,...(E=(z=b.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};const Oo=["Example","VerticalGroup","CompactGroup","SpiltPillButton","SpiltIconButton","GroupWithPopover","AllVariantsAndOrientations"];export{b as AllVariantsAndOrientations,c as CompactGroup,i as Example,m as GroupWithPopover,p as SpiltIconButton,d as SpiltPillButton,a as VerticalGroup,Oo as __namedExportsOrder,go as default};
