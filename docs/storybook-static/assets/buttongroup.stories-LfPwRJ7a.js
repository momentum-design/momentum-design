import{B as n,b as u,a as s}from"./index-CjNqWF9w.js";import{k as t}from"./iframe-C93ychXb.js";import{t as e}from"./if-defined-CnyXlyTe.js";import{c as k,s as j}from"./commonArgTypes-BG7EqI50.js";import{h as L,a as g}from"./utils-D6nie9pS.js";import"./index-DUmxh51I.js";import"./index-B8lJbupi.js";import"./index-DDt7_Xyb.js";import"./index-xg1gX4hi.js";import"./index-DZcHm1pk.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./preload-helper-C1FmrZbK.js";import"./button.component-CnBjEV1_.js";import"./buttonsimple.component-X2HTReun.js";import"./TabIndexMixin-B6h01s2W.js";import"./DisabledMixin-BVCCD_zI.js";import"./button.utils-rNW36Ji7.js";import"./index-B7qECx3P.js";import"./index-bgO36agF.js";import"./index-DTrDRi1E.js";import"./ref-DAIYm4wL.js";import"./directive-Ctav8iJK.js";import"./popover.component-SNyoClXb.js";import"./BackdropMixin-BBVMbF3b.js";import"./popover.constants-Dzrzzlst.js";import"./v4-CmTdKEVZ.js";import"./dialog.component-CUDA6hbN.js";import"./FooterMixin-B4eX9Vj4.js";import"./link.constants-BmtTf-56.js";const H=o=>t`<mdc-buttongroup
    variant="${e(o.variant)}"
    orientation="${e(o.orientation)}"
    size="${e(o.size)}"
    ?compact="${o.compact}"
  >
    ${o.children}
  </mdc-buttongroup>`,Ao={title:"Components/buttongroup",tags:["autodocs"],component:"mdc-buttongroup",render:H,argTypes:{variant:{control:"select",options:Object.values(n)},orientation:{control:"select",options:Object.values(u)},size:{control:"select",options:Object.values(s)},compact:{control:"boolean"},...k,...j,...L(["children"])}},r={args:{variant:n.PRIMARY,orientation:u.HORIZONTAL,size:s[28],compact:!1,children:t`
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
      <mdc-button prefix-icon="placeholder-bold" aria-label="icon button"></mdc-button>
    `}},i={args:{...r.args,variant:n.SECONDARY,orientation:u.VERTICAL,children:t`
      <mdc-button prefix-icon="arrow-up-bold" aria-label="arrow up button"></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},a={args:{...r.args,variant:n.SECONDARY,size:s[32],compact:!0,children:t`
      <mdc-button prefix-icon="reply-bold" aria-label="reply button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
      <mdc-button prefix-icon="alert-active-bold" aria-label="alert active button"></mdc-button>
      <mdc-button prefix-icon="forward-message-bold" aria-label="forward message button"></mdc-button>
      <mdc-button prefix-icon="more-bold" aria-label="more button"></mdc-button>
    `}},d={args:{...r.args,variant:n.SECONDARY,children:t`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    `}},c={args:{...r.args,variant:n.SECONDARY,children:t`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    `}},m={render:o=>t`
    <mdc-buttongroup
      variant="${e(o.variant)}"
      orientation="${e(o.orientation)}"
      size="${e(o.size)}"
      ?compact="${o.compact}"
    >
      <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
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
  `,args:{...r.args,variant:n.SECONDARY}},p={render:()=>t` <div style="display: flex; flex-direction: column; gap: 1rem">
      <mdc-buttongroup variant="primary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="primary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>
    </div>`,...g()},l={render:()=>t`
    <mdc-buttongroup variant="secondary" size="40" orientation="horizontal">
      ${["thumb_up_yellow","smile","wow","sad","slow_down","speed_up","raise_hand_yellow"].map(o=>t`
          <mdc-button aria-label="${o} reaction">
            <mdc-animation
              name="${o}"
              loop="true"
              slot="prefix"
              style="height: 2rem; width: 2rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>
        `)}
    </mdc-buttongroup>
  `,...g()},b={render:()=>t`
    <mdc-dialog visible aria-label="Zoom settings dialog" close-button-aria-label="Close dialog">
      <div slot="footer">
        <mdc-buttongroup variant="secondary" size="32">
          <mdc-button prefix-icon="zoom-out-bold" aria-label="Zoom out"></mdc-button>
          <mdc-button aria-label="Reset zoom to 100%">100%</mdc-button>
          <mdc-button prefix-icon="zoom-in-bold" aria-label="Zoom in"></mdc-button>
        </mdc-buttongroup>
      </div>
    </mdc-dialog>
  `,...g()};var v,f,x;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(x=(f=r.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var h,w,O;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    orientation: BUTTON_GROUP_ORIENTATION.VERTICAL,
    children: html\`
      <mdc-button prefix-icon="arrow-up-bold" aria-label="arrow up button"></mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    \`
  }
}`,...(O=(w=i.parameters)==null?void 0:w.docs)==null?void 0:O.source}}};var S,T,A;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
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
}`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var R,z,N;d.parameters={...d.parameters,docs:{...(R=d.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    children: html\`
      <mdc-button prefix-icon="microphone-muted-bold">Unmute</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" aria-label="arrow down button"></mdc-button>
    \`
  }
}`,...(N=(z=d.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};var _,y,V;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    variant: BUTTON_GROUP_VARIANT.SECONDARY,
    children: html\`
      <mdc-button prefix-icon="raise-hand-bold" aria-label="raise hand button"></mdc-button>
      <mdc-button prefix-icon="reactions-bold" aria-label="reactions button"></mdc-button>
    \`
  }
}`,...(V=(y=c.parameters)==null?void 0:y.docs)==null?void 0:V.source}}};var I,E,U;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: (args: Args) => html\`
    <mdc-buttongroup
      variant="\${ifDefined(args.variant)}"
      orientation="\${ifDefined(args.orientation)}"
      size="\${ifDefined(args.size)}"
      ?compact="\${args.compact}"
    >
      <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
      <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
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
    ...Example.args,
    variant: BUTTON_GROUP_VARIANT.SECONDARY
  }
}`,...(U=(E=m.parameters)==null?void 0:E.docs)==null?void 0:U.source}}};var G,C,D;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
  render: () => html\` <div style="display: flex; flex-direction: column; gap: 1rem">
      <mdc-buttongroup variant="primary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="horizontal" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="primary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>

      <mdc-buttongroup variant="secondary" orientation="vertical" size="40">
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="camera-on-bold" id="popover-trigger-1">Start Video</mdc-button>
        <mdc-button prefix-icon="arrow-down-bold" id="popover-trigger-2" aria-label="More options"></mdc-button>
      </mdc-buttongroup>
    </div>\`,
  ...hideAllControls()
}`,...(D=(C=p.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var P,$,B;l.parameters={...l.parameters,docs:{...(P=l.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-buttongroup variant="secondary" size="40" orientation="horizontal">
      \${['thumb_up_yellow', 'smile', 'wow', 'sad', 'slow_down', 'speed_up', 'raise_hand_yellow'].map(animationName => html\`
          <mdc-button aria-label="\${animationName} reaction">
            <mdc-animation
              name="\${animationName as AnimationNames}"
              loop="true"
              slot="prefix"
              style="height: 2rem; width: 2rem; flex-shrink: 0;"
            ></mdc-animation>
          </mdc-button>
        \`)}
    </mdc-buttongroup>
  \`,
  ...hideAllControls()
}`,...(B=($=l.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var M,Y,Z;b.parameters={...b.parameters,docs:{...(M=b.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: () => html\`
    <mdc-dialog visible aria-label="Zoom settings dialog" close-button-aria-label="Close dialog">
      <div slot="footer">
        <mdc-buttongroup variant="secondary" size="32">
          <mdc-button prefix-icon="zoom-out-bold" aria-label="Zoom out"></mdc-button>
          <mdc-button aria-label="Reset zoom to 100%">100%</mdc-button>
          <mdc-button prefix-icon="zoom-in-bold" aria-label="Zoom in"></mdc-button>
        </mdc-buttongroup>
      </div>
    </mdc-dialog>
  \`,
  ...hideAllControls()
}`,...(Z=(Y=b.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};const Ro=["Example","VerticalGroup","CompactGroup","SpiltPillButton","SpiltIconButton","GroupWithPopover","AllVariantsAndOrientations","EmojiReactionsGroup","GroupInsideDialog"];export{p as AllVariantsAndOrientations,a as CompactGroup,l as EmojiReactionsGroup,r as Example,b as GroupInsideDialog,m as GroupWithPopover,c as SpiltIconButton,d as SpiltPillButton,i as VerticalGroup,Ro as __namedExportsOrder,Ao as default};
