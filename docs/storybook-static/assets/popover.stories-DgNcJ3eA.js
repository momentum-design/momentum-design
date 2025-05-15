import{a as c}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as o}from"./lit-element-D5KKan5q.js";import"./index-BTZpf0x2.js";import{d as Z,h as H,a as V}from"./utils-CO8B6ZcN.js";import"./index-BW3CPo0p.js";import"./index-D01LMnMs.js";import"./index-CEmhyiKJ.js";import{P as r,C as j,D as t}from"./popover.component-DCc9qDH7.js";import"./v4-CQkTLCs1.js";import"./button.component-DuJ_hCOI.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-CcXofQbA.js";import"./button.utils-rNW36Ji7.js";import"./index-DKrr3WK1.js";import"./iframe-CbenrOHq.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./listitem.component-qFhQUFkA.js";import"./roles-DMFGbP5t.js";import"./v4-CmTdKEVZ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./keys-CuA-OPmH.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-5n2-mkV5.js";import"./optgroup.constants-CwoRKCZY.js";import"./FocusTrapMixin-SA_WaGa6.js";const n=(e,b)=>o`
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
    @shown="${c("onshown")}"
    @hidden="${c("onhidden")}"
    @created="${c("oncreated")}"
    @destroyed="${c("ondestroyed")}"
  >
    ${b}
  </mdc-popover>
`,i=(e,b)=>o`
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
`,W=e=>o`
  ${i(e.triggerID,"Click me!")}
  ${n(e,o`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,G=e=>o`
  ${i("popover-trigger-interactive","Click me!")}
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
`,K=e=>o`
  ${i("popover-trigger-interactive-hover","Hover me!")}
  ${n(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,q=e=>o`
  ${i("popover-trigger-hide-on-blur","Click me!")}
  ${n(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,J=e=>o`
  ${i("popover-trigger-multiple","Click/ Hover me!")}
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
`,Q=e=>o`
  ${i("popover-trigger-nested","Click me!")}
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
`,ee=e=>o`
  ${i("popover-trigger-backdrop","Click me!")}
  ${n(e,o`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
  <mdc-button>Button 2</mdc-button>
`,Me={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:W,parameters:{badges:["stable"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(r)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(j)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},...Z(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...H(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},d={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:r.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"show-arrow":!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!0,interactive:t.INTERACTIVE}},p={render:G,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:r.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:t.FLIP,size:!0,role:t.ROLE,color:t.COLOR,"disable-aria-expanded":!1}},l={render:K,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:r.BOTTOM,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR}},m={render:J,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:r.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"close-button":!0,role:t.ROLE,color:t.COLOR}},a={render:Q,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:r.TOP,offset:t.OFFSET,"z-index":10,delay:t.DELAY,flip:t.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:t.ROLE,color:t.COLOR}},s={render:q,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:r.RIGHT,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:t.ROLE,color:t.COLOR}},u={render:ee,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:r.TOP,offset:t.OFFSET,"z-index":t.Z_INDEX,delay:t.DELAY,flip:t.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,role:t.ROLE,color:t.COLOR}},g={render:()=>o`
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
  `,...V()},v={render:()=>o`
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
  `};var E,L,O;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
    interactive: DEFAULTS.INTERACTIVE
  }
}`,...(O=(L=d.parameters)==null?void 0:L.docs)==null?void 0:O.source}}};var h,D,T;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(T=(D=p.parameters)==null?void 0:D.docs)==null?void 0:T.source}}};var F,f,x;l.parameters={...l.parameters,docs:{...(F=l.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,A,I;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(A=m.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var k,P,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(P=a.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var C,$,y;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(y=($=s.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};var B,U,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(R=(U=u.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var z,N,_;g.parameters={...g.parameters,docs:{...(z=g.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(_=(N=g.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};var M,Y,X;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(X=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};const Ye=["Example","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop","popoverWithSelect","MultipleSingleLevelPopovers"];export{d as Example,v as MultipleSingleLevelPopovers,Ye as __namedExportsOrder,Me as default,s as hideOnBlur,p as interactiveContent,l as interactiveHover,m as interactiveMultiple,a as nestedPopover,u as popoverWithBackdrop,g as popoverWithSelect};
