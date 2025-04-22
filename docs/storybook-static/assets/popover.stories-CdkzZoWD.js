import{a as i}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{k as t}from"./lit-element-D5KKan5q.js";import"./index-CDGB97Mo.js";import{d as _,h as M,a as Y}from"./utils-CO8B6ZcN.js";import"./index-txyUwIhY.js";import"./index-B44g97Pv.js";import"./index-CTEPngbW.js";import{P as r,C as X,D as o}from"./index-DWba8CnJ.js";import"./v4-CQkTLCs1.js";import"./index-C9z9WAEj.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-9hW3yvQZ.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.constants-Bfip8hYE.js";import"./button.utils-rNW36Ji7.js";import"./index-C_rAiH13.js";import"./iframe-BYx2IeOk.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-D3DhXfcW.js";import"./text.constants-ZF0jM5wn.js";import"./if-defined-D5BV9-c0.js";import"./FormInternalsMixin-CSixOKbK.js";import"./query-DXShiZ7f.js";import"./base-DIkkzJ-c.js";import"./v4-CmTdKEVZ.js";import"./listitem.component-CAQJg3uX.js";import"./query-assigned-elements-uEuc3rg8.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./keys-CuA-OPmH.js";import"./formfieldwrapper.component-DNKMXI01.js";import"./optgroup.constants-CwoRKCZY.js";const n=(e,g)=>t`
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
    ${g}
  </mdc-popover>
`,c=(e,g)=>t`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button id="${e}">${g}</mdc-button>
  </div>
`,Z=e=>t`
  ${c(e.triggerID,"Click me!")}
  ${n(e,t`<mdc-text>Lorem ipsum dolor sit amet.</mdc-text>`)}
`,H=e=>t`
  ${c("popover-trigger-interactive","Click me!")}
  ${n(e,t`
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
`,V=e=>t`
  ${c("popover-trigger-interactive-hover","Hover me!")}
  ${n(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
`,W=e=>t`
  ${c("popover-trigger-hide-on-blur","Click me!")}
  ${n(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
`,j=e=>t`
  ${c("popover-trigger-multiple","Click/ Hover me!")}
  ${n(e,t`<mdc-text>Interactive content on click</mdc-text>`)}
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
`,G=e=>t`
  ${c("popover-trigger-nested","Click me!")}
  ${n(e,t`<mdc-text>Popover Level 1</mdc-text> <mdc-button id="popover-trigger-2">Click me!</mdc-button>`)}
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
`,K=e=>t`
  ${c("popover-trigger-backdrop","Click me!")}
  ${n(e,t`
      <mdc-button>Button 1</mdc-button>
      <mdc-button>Button 2</mdc-button>
      <mdc-button>Button 3</mdc-button>
      <mdc-button>Button 4</mdc-button>
      <mdc-button>Button 5</mdc-button>
    `)}
  <mdc-button>Button 1</mdc-button>
  <mdc-button>Button 2</mdc-button>
`,Be={title:"Components/popover",tags:["autodocs"],component:"mdc-popover",render:Z,parameters:{badges:["stable"]},argTypes:{id:{control:"text"},triggerID:{control:"text"},trigger:{control:"text"},placement:{control:"select",options:Object.values(r)},offset:{if:{arg:"offset"},control:"number"},visible:{control:"boolean"},delay:{control:"text"},color:{control:"select",options:Object.values(X)},flip:{control:"boolean"},size:{control:"boolean"},backdrop:{control:"boolean"},"z-index":{if:{arg:"z-index"},control:"number"},"show-arrow":{control:"boolean"},"close-button":{control:"boolean"},interactive:{control:"boolean"},"focus-trap":{control:"boolean"},"prevent-scroll":{control:"boolean"},"hide-on-blur":{control:"boolean"},"hide-on-escape":{control:"boolean"},"hide-on-outside-click":{control:"boolean"},"focus-back-to-trigger":{control:"boolean"},"append-to":{control:"text"},"close-button-aria-label":{control:"text"},"aria-label":{control:"text"},"aria-labelledby":{control:"text"},"aria-describedby":{control:"text"},role:{control:"text"},"disable-aria-expanded":{control:"boolean"},..._(["--mdc-popover-arrow-border-radius","--mdc-popover-arrow-border","--mdc-popover-primary-background-color","--mdc-popover-border-color","--mdc-popover-inverted-background-color","--mdc-popover-inverted-border-color","--mdc-popover-inverted-text-color","--mdc-popover-elevation-3"]),...M(["arrowElement","onOutsidePopoverClick","onEscapeKeydown","onPopoverFocusOut","startCloseDelay","cancelCloseDelay","enabledPreventScroll","enabledFocusTrap","shouldWrapFocus","utils"])}},d={args:{id:"popover",triggerID:"popover-trigger",trigger:"click",placement:r.BOTTOM,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"show-arrow":!0,role:o.ROLE,color:o.COLOR}},p={render:H,args:{id:"popover-interactive",triggerID:"popover-trigger-interactive",trigger:"click",placement:r.BOTTOM,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,"focus-trap":!0,interactive:!0,"show-arrow":!0,flip:o.FLIP,size:!0,role:o.ROLE,color:o.COLOR}},a={render:V,args:{id:"popover-interactive-hover",triggerID:"popover-trigger-interactive-hover",trigger:"mouseenter",placement:r.BOTTOM,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:o.ROLE,color:o.COLOR}},l={render:j,args:{id:"popover-multiple",triggerID:"popover-trigger-multiple",trigger:"click",placement:r.TOP,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"close-button":!0,role:o.ROLE,color:o.COLOR}},m={render:G,args:{id:"popover-nested",triggerID:"popover-trigger-nested",trigger:"click",placement:r.TOP,offset:o.OFFSET,"z-index":10,delay:o.DELAY,flip:o.FLIP,"focus-trap":!0,interactive:!0,"show-arrow":!0,"hide-on-escape":!0,role:o.ROLE,color:o.COLOR}},u={render:W,args:{id:"popover-hide-on-blur",triggerID:"popover-trigger-hide-on-blur",trigger:"click",placement:r.RIGHT,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,interactive:!0,"show-arrow":!0,"hide-on-blur":!0,role:o.ROLE,color:o.COLOR}},s={render:K,args:{id:"popover-backdrop",triggerID:"popover-trigger-backdrop",trigger:"click",placement:r.TOP,offset:o.OFFSET,"z-index":o.Z_INDEX,delay:o.DELAY,flip:o.FLIP,interactive:!0,"show-arrow":!0,backdrop:!0,role:o.ROLE,color:o.COLOR}},b={render:()=>t`
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
  `,...Y()};var v,E,O;d.parameters={...d.parameters,docs:{...(v=d.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(O=(E=d.parameters)==null?void 0:E.docs)==null?void 0:O.source}}};var L,D,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(F=(D=p.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var T,f,h;a.parameters={...a.parameters,docs:{...(T=a.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(h=(f=a.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var S,A,I;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(A=l.parameters)==null?void 0:A.docs)==null?void 0:I.source}}};var k,P,w;m.parameters={...m.parameters,docs:{...(k=m.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(w=(P=m.parameters)==null?void 0:P.docs)==null?void 0:w.source}}};var x,$,B;u.parameters={...u.parameters,docs:{...(x=u.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(B=($=u.parameters)==null?void 0:$.docs)==null?void 0:B.source}}};var C,U,R;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(R=(U=s.parameters)==null?void 0:U.docs)==null?void 0:R.source}}};var y,z,N;b.parameters={...b.parameters,docs:{...(y=b.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(N=(z=b.parameters)==null?void 0:z.docs)==null?void 0:N.source}}};const Ce=["Default","interactiveContent","interactiveHover","interactiveMultiple","nestedPopover","hideOnBlur","popoverWithBackdrop","popoverWithSelect"];export{d as Default,Ce as __namedExportsOrder,Be as default,u as hideOnBlur,p as interactiveContent,a as interactiveHover,l as interactiveMultiple,m as nestedPopover,s as popoverWithBackdrop,b as popoverWithSelect};
