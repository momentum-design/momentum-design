import{a as d}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-DtDp3iD0.js";import{t as W,h as G,a as K}from"./utils-CF1irry3.js";import"./index-1CiTOlki.js";import"./index-CHNuJoUp.js";import"./index-DZvRu-ng.js";import"./index-BpNVMt5L.js";import"./index-BJfs32L6.js";import{P as r,C as q,D as o}from"./popover.component-q7gOo8Yi.js";import"./v4-CQkTLCs1.js";import"./button.component-Cx4by9Nb.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-DTw2LNsX.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-Cx7wvr8C.js";import"./button.utils-rNW36Ji7.js";import"./index-D_HBElmJ.js";import"./iframe-AwdmaGrt.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-BrLJ_9IK.js";import"./index-D2NeUKIj.js";import"./roles-BH_hBfTz.js";import"./v4-CmTdKEVZ.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./listitem.component-CBHzYYeL.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-CVqE00er.js";import"./index-96ToHBu8.js";import"./live-Cwq7YsO4.js";import"./directive-Ctav8iJK.js";import"./directive-helpers-Bb6vhctq.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-Bto_JnzL.js";import"./optgroup.constants-CwoRKCZY.js";import"./menuitemradio.constants-BhdhQZcn.js";import"./menuitem.component-Rtoon-jg.js";import"./menuitemcheckbox.constants-DmrkQGAP.js";import"./menupopover.constants-BkwERfSm.js";const i=(e,h)=>t`
  <mdc-popover
    id="${e.id}"
    triggerID="${e.triggerID}"
    trigger="${e.trigger}"
    placement="${e.placement}"
    delay="${e.delay}"
    z-index="${e["z-index"]}"
    ?visible="${e.visible}"
    .offset="${e.offset??0}"
    ?interactive=${e.interactive}
    ?focus-trap=${e["focus-trap"]}
    ?should-focus-trap-wrap=${e["should-focus-trap-wrap"]}
    ?show-arrow=${e["show-arrow"]}
    color=${e.color}
    ?flip=${e.flip}
    ?size=${e.size}
    ?backdrop=${e.backdrop}
    ?close-button=${e["close-button"]}
    ?prevent-scroll=${e["prevent-scroll"]}
    ?hide-on-blur=${e["hide-on-blur"]}
    ?hide-on-escape=${e["hide-on-escape"]}
    ?hide-on-outside-click=${e["hide-on-outside-click"]}
    ?focus-back-to-trigger=${e["focus-back-to-trigger"]}
    append-to=${e["append-to"]}
    close-button-aria-label="${e["close-button-aria-label"]}"
    aria-label="${e["aria-label"]}"
    aria-labelledby="${e["aria-labelledby"]}"
    aria-describedby="${e["aria-describedby"]}"
    role="${e.role}"
    ?disable-aria-expanded="${e["disable-aria-expanded"]}"
    ?disable-aria-haspopup="${e["disable-aria-haspopup"]}"
    @shown="${d("onshown")}"
    @hidden="${d("onhidden")}"
    @created="${d("oncreated")}"
    @destroyed="${d("ondestroyed")}"
  >
    ${h}
  </mdc-popover>
`,n=(e,h)=>t`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${h}</mdc-button>
  </div>
`,J=e=>t`
  ${n(e.triggerID,"Click me!")}
  ${i(e,t`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,Q=e=>t`
  ${n("popover-trigger-interactive","Click me!")}
  ${i(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,ee=e=>t`
  ${n("popover-trigger-interactive-hover","Hover me!")}
  ${i(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,oe=e=>t`
  ${n("popover-trigger-hide-on-blur","Click me!")}
  ${i(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,te=e=>t`
  ${n("popover-trigger-multiple","Click/ Hover me!")}
  ${i(e,t`<mdc-text>Interactive content on click</mdc-text>`)}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-multiple"
    trigger="mouseenter"
    placement="bottom"
    z-index="20"
    show-arrow
    hide-on-escape
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,re=e=>t`
  ${n("popover-trigger-nested","Click me!")}
  ${i(e,t`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover Level 2</mdc-text>
    <mdc-button id="popover-trigger-3">Hover me!</mdc-button>
  </mdc-popover>

  <mdc-popover
    id="popover3"
    triggerID="popover-trigger-3"
    trigger="mouseenter"
    placement="bottom"
    z-index="30"
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,ne=e=>t`
  ${n("popover-trigger-backdrop","Click me!")}
  ${i(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button id="popover-trigger-2">Button 1</mdc-button>
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-2"
    trigger="click"
    placement="bottom"
    interactive
    z-index="20"
    focus-back-to-trigger
    focus-trap
    show-arrow
    hide-on-escape
    hide-on-outside-click
  >
    <mdc-text>Popover 2</mdc-text>
  </mdc-popover>
`,eo={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:J,parameters:{badges:["stable"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(r)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(q)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"should-focus-trap-wrap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},"disable-aria-haspopup":{control:"boolean"},...W(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...G(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},c={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:r.BOTTOM,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"show-arrow":!0,role:o.ROLE,color:o.COLOR,"disable-aria-expanded":!0,"disable-aria-haspopup":!1,interactive:o.INTERACTIVE}},p={render:Q,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:r.BOTTOM,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:o.FLIP,size:!0,role:o.ROLE,color:o.COLOR,"disable-aria-expanded":!1}},a={render:ee,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:r.BOTTOM,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:o.ROLE,color:o.COLOR}},m={render:te,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:r.TOP,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"focus-trap":!0,interactive:!0,"focus-back-to-trigger":!0,"hide-on-escape":!0,"hide-on-outside-click":!0,"show-arrow":!0,"close-button":!0,role:o.ROLE,color:o.COLOR}},l={render:re,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:r.TOP,offset:o.OFFSET,"z-index":10,delay:o.DELAY,flip:o.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:o.ROLE,color:o.COLOR,"hide-on-outside-click":!0}},s={render:oe,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:r.RIGHT,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:o.ROLE,color:o.COLOR}},u={render:ne,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:r.TOP,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,"hide-on-outside-click":!0,"focus-trap":!0,role:o.ROLE,color:o.COLOR}},g={render:()=>t`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="select-button">Click me!</mdc-button>
      <mdc-popover triggerID="select-button" interactive hide-on-escape hide-on-outside-click>
        <div style="width: 15rem;">
          <mdc-select>
            <mdc-option>Option 1</mdc-option>
            <mdc-option>Option 2</mdc-option>
            <mdc-option>Option 3</mdc-option>
          </mdc-select>
          <mdc-select>
            <mdc-option>Option 4</mdc-option>
            <mdc-option>Option 5</mdc-option>
            <mdc-option>Option 6</mdc-option>
          </mdc-select>
          <mdc-select>
            <mdc-option>Option 7</mdc-option>
            <mdc-option>Option 8</mdc-option>
            <mdc-option>Option 9</mdc-option>
          </mdc-select>
        </div>
      </mdc-popover>
    </div>
  `,...K()},v={render:()=>t`
    <style>
      .container {
        display: flex;
        width: 150rem;
        height: 15rem;
        align-items: center;
      }
      .child {
        display: flex;
        width: 10rem;
        height: 2rem;
        justify-content: center;
      }
    </style>
    <div class="container">
      <div class="child">
        <mdc-button id="popover-trigger-1">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  `},b={args:{...c.args,placement:r.RIGHT_START,triggerID:"trigger-btn"},render:()=>t`
    ${n("popover-trigger-interactive","Click me!")}
    <mdc-popover
      id="popover"
      triggerID="popover-trigger-interactive"
      trigger="click"
      placement="bottom"
      interactive
      focus-back-to-trigger
      focus-trap
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <div id="menupopover-test-wrapper">
        <h2>Hello world</h2>
        <mdc-button id="menu-trigger-btn">Menu</mdc-button>
        <mdc-menupopover triggerID="menu-trigger-btn" show-arrow>
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
        </mdc-menupopover>
      </div>
    </mdc-popover>
  `};var E,O,L;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    id: 'popover',
    triggerID: 'popover-trigger',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'show-arrow': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': true,
    'disable-aria-haspopup': false,
    interactive: DEFAULTS.INTERACTIVE
  }
}`,...(L=(O=c.parameters)==null?void 0:O.docs)==null?void 0:L.source}}};var D,T,f;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: renderInteractive,
  args: {
    id: 'popover-interactive',
    triggerID: 'popover-trigger-interactive',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    flip: DEFAULTS.FLIP,
    size: true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'disable-aria-expanded': false
  }
}`,...(f=(T=p.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var F,k,x;a.parameters={...a.parameters,docs:{...(F=a.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: renderInteractiveHover,
  args: {
    id: 'popover-interactive-hover',
    triggerID: 'popover-trigger-interactive-hover',
    trigger: 'mouseenter',
    placement: POPOVER_PLACEMENT.BOTTOM,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(x=(k=a.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};var I,S,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: renderMultiple,
  args: {
    id: 'popover-multiple',
    triggerID: 'popover-trigger-multiple',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'focus-back-to-trigger': true,
    'hide-on-escape': true,
    'hide-on-outside-click': true,
    'show-arrow': true,
    'close-button': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(A=(S=m.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var w,P,C;l.parameters={...l.parameters,docs:{...(w=l.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: renderNested,
  args: {
    id: 'popover-nested',
    triggerID: 'popover-trigger-nested',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': 10,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    'focus-trap': true,
    interactive: true,
    'show-arrow': true,
    'hide-on-escape': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR,
    'hide-on-outside-click': true
  }
}`,...(C=(P=l.parameters)==null?void 0:P.docs)==null?void 0:C.source}}};var $,y,B;s.parameters={...s.parameters,docs:{...($=s.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: renderHideOnBlur,
  args: {
    id: 'popover-hide-on-blur',
    triggerID: 'popover-trigger-hide-on-blur',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.RIGHT,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    'hide-on-blur': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(B=(y=s.parameters)==null?void 0:y.docs)==null?void 0:B.source}}};var R,U,N;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: renderBackdrop,
  args: {
    id: 'popover-backdrop',
    triggerID: 'popover-trigger-backdrop',
    trigger: 'click',
    placement: POPOVER_PLACEMENT.TOP,
    offset: DEFAULTS.OFFSET,
    'z-index': DEFAULTS.Z_INDEX,
    delay: DEFAULTS.DELAY,
    flip: DEFAULTS.FLIP,
    interactive: true,
    'show-arrow': true,
    backdrop: true,
    'hide-on-outside-click': true,
    'focus-trap': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(N=(U=u.parameters)==null?void 0:U.docs)==null?void 0:N.source}}};var z,M,_;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: () => html\`
    <div style="width: 10rem; height: 8rem; margin: 5rem;">
      <mdc-button id="select-button">Click me!</mdc-button>
      <mdc-popover triggerID="select-button" interactive hide-on-escape hide-on-outside-click>
        <div style="width: 15rem;">
          <mdc-select>
            <mdc-option>Option 1</mdc-option>
            <mdc-option>Option 2</mdc-option>
            <mdc-option>Option 3</mdc-option>
          </mdc-select>
          <mdc-select>
            <mdc-option>Option 4</mdc-option>
            <mdc-option>Option 5</mdc-option>
            <mdc-option>Option 6</mdc-option>
          </mdc-select>
          <mdc-select>
            <mdc-option>Option 7</mdc-option>
            <mdc-option>Option 8</mdc-option>
            <mdc-option>Option 9</mdc-option>
          </mdc-select>
        </div>
      </mdc-popover>
    </div>
  \`,
  ...hideAllControls()
}`,...(_=(M=g.parameters)==null?void 0:M.docs)==null?void 0:_.source}}};var H,Y,X;v.parameters={...v.parameters,docs:{...(H=v.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: () => html\`
    <style>
      .container {
        display: flex;
        width: 150rem;
        height: 15rem;
        align-items: center;
      }
      .child {
        display: flex;
        width: 10rem;
        height: 2rem;
        justify-content: center;
      }
    </style>
    <div class="container">
      <div class="child">
        <mdc-button id="popover-trigger-1">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-1" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 1</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-2">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-2" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 2</mdc-text>
        </mdc-popover>
      </div>
      <div class="child">
        <mdc-button id="popover-trigger-3">Click me!</mdc-button>
        <mdc-popover triggerID="popover-trigger-3" hide-on-outside-click>
          <mdc-text>Popover Level 1 Trigger 3</mdc-text>
        </mdc-popover>
      </div>
    </div>
  \`
}`,...(X=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var Z,V,j;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    ...Example.args,
    placement: POPOVER_PLACEMENT.RIGHT_START,
    triggerID: 'trigger-btn'
  },
  render: () => html\`
    \${createTrigger('popover-trigger-interactive', 'Click me!')}
    <mdc-popover
      id="popover"
      triggerID="popover-trigger-interactive"
      trigger="click"
      placement="bottom"
      interactive
      focus-back-to-trigger
      focus-trap
      show-arrow
      hide-on-escape
      hide-on-outside-click
    >
      <div id="menupopover-test-wrapper">
        <h2>Hello world</h2>
        <mdc-button id="menu-trigger-btn">Menu</mdc-button>
        <mdc-menupopover triggerID="menu-trigger-btn" show-arrow>
          <mdc-menuitem label="Profile"></mdc-menuitem>
          <mdc-menuitem label="Notifications"></mdc-menuitem>
        </mdc-menupopover>
      </div>
    </mdc-popover>
  \`
}`,...(j=(V=b.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};const oo=["Example","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop","popoverWithSelect","MultipleSingleLevelPopovers","NestedMenu"];export{c as Example,v as MultipleSingleLevelPopovers,b as NestedMenu,oo as __namedExportsOrder,eo as default,s as hideOnBlur,p as interactiveContent,a as interactiveHover,m as interactiveMultiple,l as nestedPopover,u as popoverWithBackdrop,g as popoverWithSelect};
