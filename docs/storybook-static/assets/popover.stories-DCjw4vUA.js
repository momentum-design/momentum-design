import"./index-Bc4PcUz5.js";import{k as o}from"./lit-element-D5KKan5q.js";import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{P as r,C as R,D as t}from"./popover.component-BXope1DD.js";import{d as y,h as z}from"./utils-CO8B6ZcN.js";import"./index--2Wjv6Dg.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-w9K_m-nk.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.constants-BVKjykrp.js";import"./button.utils-rNW36Ji7.js";import"./index-DFXJl2oW.js";import"./iframe-CdrsIVpP.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./v4-CQkTLCs1.js";import"./if-defined-D5BV9-c0.js";const n=(e,b)=>o`
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
    @shown="${i("onshown")}"
    @hidden="${i("onhidden")}"
    @created="${i("oncreated")}"
    @destroyed="${i("ondestroyed")}"
  >
    ${b}
  </mdc-popover>
`,c=(e,b)=>o`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${b}</mdc-button>
  </div>
`,N=e=>o`
  ${c(e.triggerID,"Click me!")}
  ${n(e,o`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,_=e=>o`
  ${c("popover-trigger-interactive","Click me!")}
  ${n(e,o`
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
`,M=e=>o`
  ${c("popover-trigger-interactive-hover","Hover me!")}
  ${n(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,Y=e=>o`
  ${c("popover-trigger-hide-on-blur","Click me!")}
  ${n(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,X=e=>o`
  ${c("popover-trigger-multiple","Click/ Hover me!")}
  ${n(e,o`<mdc-text>Interactive content on click</mdc-text>`)}
  <mdc-popover
    id="popover2"
    triggerID="popover-trigger-multiple"
    trigger="mouseenter"
    placement="bottom"
    z-index="20"
    show-arrow
  >
    <mdc-text>Description tooltip on mouseenter</mdc-text>
  </mdc-popover>
`,Z=e=>o`
  ${c("popover-trigger-nested","Click me!")}
  ${n(e,o`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
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
`,H=e=>o`
  ${c("popover-trigger-backdrop","Click me!")}
  ${n(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
  <mdc-button>Button 2</mdc-button>
`,be={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:N,parameters:{badges:["stable"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(r)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(R)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},...y(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...z(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},d={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:r.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"show-arrow":!0,role:t.ROLE,color:t.COLOR}},a={render:_,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:r.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:t.FLIP,size:!0,role:t.ROLE,color:t.COLOR}},p={render:M,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:r.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR}},l={render:X,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:r.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"close-button":!0,role:t.ROLE,color:t.COLOR}},u={render:Z,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:r.TOP,offset:t.OFFSET,"z-index":10,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR}},s={render:Y,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:r.RIGHT,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:t.ROLE,color:t.COLOR}},m={render:H,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:r.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,role:t.ROLE,color:t.COLOR}};var g,v,E;d.parameters={...d.parameters,docs:{...(g=d.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
    color: DEFAULTS.COLOR
  }
}`,...(E=(v=d.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var L,O,D;a.parameters={...a.parameters,docs:{...(L=a.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
    color: DEFAULTS.COLOR
  }
}`,...(D=(O=a.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var F,T,f;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(f=(T=p.parameters)==null?void 0:T.docs)==null?void 0:f.source}}};var A,S,h;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
    'show-arrow': true,
    'close-button': true,
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(h=(S=l.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var I,P,x;u.parameters={...u.parameters,docs:{...(I=u.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
    color: DEFAULTS.COLOR
  }
}`,...(x=(P=u.parameters)==null?void 0:P.docs)==null?void 0:x.source}}};var k,$,B;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(B=($=s.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var w,U,C;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    role: DEFAULTS.ROLE,
    color: DEFAULTS.COLOR
  }
}`,...(C=(U=m.parameters)==null?void 0:U.docs)==null?void 0:C.source}}};const ge=["Default","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop"];export{d as Default,ge as __namedExportsOrder,be as default,s as hideOnBlur,a as interactiveContent,p as interactiveHover,l as interactiveMultiple,u as nestedPopover,m as popoverWithBackdrop};
