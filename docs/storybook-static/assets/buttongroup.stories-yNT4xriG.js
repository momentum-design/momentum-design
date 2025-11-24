import{B as r,a as n,b as e}from"./index-6txbujcI.js";import{k as t}from"./iframe-C1Rm-ZyG.js";import{c as L,s as Y}from"./commonArgTypes-BluK8w5L.js";import{d as H}from"./utils-Dd_sfl9-.js";import"./index-CTGz_DG7.js";import"./index-aE9pmqp3.js";import"./index-Bt11JbPX.js";import"./index-D3Rg1jAq.js";import"./index-CPTNYIRR.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CGqnAPiD.js";import"./buttonsimple.component-CE6iZ7ok.js";import"./TabIndexMixin-CHWXeSIH.js";import"./DisabledMixin-CpNZKoNP.js";import"./button.utils-rNW36Ji7.js";import"./index-CIWNyVoT.js";import"./index-BdqHAH0n.js";import"./index-DTrDRi1E.js";import"./ref-CTW50j2e.js";import"./directive-Ctav8iJK.js";import"./popover.component-DnlDjIsj.js";import"./if-defined-CQYAGgbL.js";import"./BackdropMixin-BpNXNAF1.js";import"./v4-CmTdKEVZ.js";import"./dialog.component-DJUFm0I8.js";import"./FooterMixin-fYbEW0DY.js";import"./link.constants-CZ0SDkCF.js";const k=o=>t` <mdc-buttongroup
    variant="${o.variant}"
    orientation="${o.orientation}"
    size="${o.size}"
    ?compact="${o.compact}"
  >
    ${o.children}
  </mdc-buttongroup>`,wo={title:"Components/buttongroup",tags:["autodocs"],component:"mdc-buttongroup",render:k,argTypes:{variant:{control:"select",options:Object.values(r)},orientation:{control:"select",options:Object.values(n)},size:{control:"select",options:Object.values(e)},compact:{control:"boolean"},...L,...Y,...H(["children"])}},i={args:{variant:r.PRIMARY,orientation:n.HORIZONTAL,size:e[28],compact:!1,children:t`
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
    `}},m={args:{variant:r.SECONDARY,orientation:n.HORIZONTAL,size:e[28],compact:!1,children:t`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    `}},p={render:o=>t`
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
      <mdc-buttongroup variant="secondary" size="32">
        <mdc-button prefix-icon="zoom-in-bold"></mdc-button>
        <mdc-button soft-disabled>100%</mdc-button>
        <mdc-button prefix-icon="zoom-out-bold"></mdc-button>
      </mdc-buttongroup>
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
    </div>`},u={render:()=>t`
    <mdc-buttongroup variant="secondary" size="40" orientation="horizontal">
      ${["thumb_up_yellow","smile","wow","sad","slow_down","speed_up","raise_hand_yellow"].map(o=>t`
          <mdc-button>
            <mdc-animation
              name="${o}"
              loop="true"
              slot="prefix"
              style="height: 2rem; width: 2rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>
        `)}
    </mdc-buttongroup>
  `},l={render:()=>t`
    <mdc-dialog visible>
      <div slot="footer">
        <mdc-buttongroup variant="secondary" size="32">
          <mdc-button prefix-icon="zoom-out-bold"></mdc-button>
          <mdc-button>100%</mdc-button>
          <mdc-button prefix-icon="zoom-in-bold"></mdc-button>
        </mdc-buttongroup>
      </div>
    </mdc-dialog>
  `};var s,g,v;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var f,O,x;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(x=(O=a.parameters)==null?void 0:O.docs)==null?void 0:x.source}}};var T,w,N;c.parameters={...c.parameters,docs:{...(T=c.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(w=c.parameters)==null?void 0:w.docs)==null?void 0:N.source}}};var R,h,_;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(_=(h=d.parameters)==null?void 0:h.docs)==null?void 0:_.source}}};var A,S,I;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(I=(S=m.parameters)==null?void 0:S.docs)==null?void 0:I.source}}};var z,U,y;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
      <mdc-buttongroup variant="secondary" size="32">
        <mdc-button prefix-icon="zoom-in-bold"></mdc-button>
        <mdc-button soft-disabled>100%</mdc-button>
        <mdc-button prefix-icon="zoom-out-bold"></mdc-button>
      </mdc-buttongroup>
    </mdc-popover>
  \`,
  args: {
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.HORIZONTAL,
    size: BUTTON_GROUP_SIZE[28]
  }
}`,...(y=(U=p.parameters)==null?void 0:U.docs)==null?void 0:y.source}}};var V,E,G;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(G=(E=b.parameters)==null?void 0:E.docs)==null?void 0:G.source}}};var P,B,Z;u.parameters={...u.parameters,docs:{...(P=u.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-buttongroup variant="secondary" size="40" orientation="horizontal">
      \${['thumb_up_yellow', 'smile', 'wow', 'sad', 'slow_down', 'speed_up', 'raise_hand_yellow'].map(animationName => html\`
          <mdc-button>
            <mdc-animation
              name="\${animationName as AnimationNames}"
              loop="true"
              slot="prefix"
              style="height: 2rem; width: 2rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>
        \`)}
    </mdc-buttongroup>
  \`
}`,...(Z=(B=u.parameters)==null?void 0:B.docs)==null?void 0:Z.source}}};var C,D,$;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-dialog visible>
      <div slot="footer">
        <mdc-buttongroup variant="secondary" size="32">
          <mdc-button prefix-icon="zoom-out-bold"></mdc-button>
          <mdc-button>100%</mdc-button>
          <mdc-button prefix-icon="zoom-in-bold"></mdc-button>
        </mdc-buttongroup>
      </div>
    </mdc-dialog>
  \`
}`,...($=(D=l.parameters)==null?void 0:D.docs)==null?void 0:$.source}}};const No=["Example","VerticalGroup","CompactGroup","SpiltPillButton","SpiltIconButton","GroupWithPopover","AllVariantsAndOrientations","EmojiReactionsGroup","GroupInsideDialog"];export{b as AllVariantsAndOrientations,c as CompactGroup,u as EmojiReactionsGroup,i as Example,l as GroupInsideDialog,p as GroupWithPopover,m as SpiltIconButton,d as SpiltPillButton,a as VerticalGroup,No as __namedExportsOrder,wo as default};
