import{k as R}from"./lit-element-CHllvULs.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as T,n as E}from"./index-HW6KrQZO.js";import{C as P,b as _,P as u,D as o}from"./popover.component-BnWEEeKQ.js";import"./index-DKYbHcPq.js";import{c as L,s as b}from"./commonArgTypes-BluK8w5L.js";import h from"./popover.stories-B-b81X4U.js";import{h as D}from"./utils-D1SE5bce.js";import"./v4-CQkTLCs1.js";import"./if-defined-C4tJgJ33.js";import"./state-CWckTc1X.js";import"./buttonsimple.component-SgL7LhI3.js";import"./DisabledMixin-DBt9didn.js";import"./index-BIROzany.js";import"./button.constants-BXf5IXRf.js";import"./button.utils-ajxTJbst.js";import"./index-dXx2fQjt.js";import"./iframe-NXx2-ZTs.js";import"../sb-preview/runtime.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BsPZ_dvP.js";import"./create-context-89xeped_.js";const S=T.constructTagName("coachmark"),t={COLOR:P.CONTRAST,TRIGGER:_.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,p=(e,r,d,C)=>{for(var i=void 0,l=e.length-1,s;l>=0;l--)(s=e[l])&&(i=s(r,d,i)||i);return i&&I(r,d,i),i};class c extends u{constructor(){super(),this.trigger=t.TRIGGER,this.showArrow=t.ARROW,this.closeButton=t.CLOSE_BUTTON,this.disableAriaExpanded=t.DISABLE_ARIA_EXPANDED,this.color=t.COLOR,this.showArrow=t.ARROW}}p([E({type:String,reflect:!0})],c.prototype,"trigger");p([E({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");p([E({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");p([E({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(S);const f=e=>R`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.showPopover()}}">
      open
    </mdc-button>
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.hidePopover()}}">
      close
    </mdc-button>
    <mdc-text id="${e.triggerID}">Anchor</mdc-text>
    <mdc-coachmark
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
      @popover-on-show="${a("onshow")}"
      @popover-on-hide="${a("onhide")}"
      @popover-on-created="${a("oncreated")}"
      @popover-on-destroyed="${a("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,q={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:f,parameters:{badges:["stable"]},argTypes:{...L,...b,...h.argTypes,...D(["color"])}},n={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:t.TRIGGER,placement:o.PLACEMENT,color:o.COLOR,visible:o.VISIBLE,offset:o.OFFSET,"focus-trap":o.FOCUS_TRAP,"prevent-scroll":o.PREVENT_SCROLL,"show-arrow":t.ARROW,"close-button":t.CLOSE_BUTTON,interactive:o.INTERACTIVE,delay:o.DELAY,"hide-on-escape":o.HIDE_ON_ESCAPE,"hide-on-blur":o.HIDE_ON_BLUR,"hide-on-outside-click":o.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":o.FOCUS_BACK,backdrop:o.BACKDROP,flip:o.FLIP,size:o.SIZE,"z-index":o.Z_INDEX,role:o.ROLE}};var O,m,A;n.parameters={...n.parameters,docs:{...(O=n.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    id: 'coachmark',
    triggerID: 'coachmark-trigger',
    trigger: DEFAULTS.TRIGGER,
    placement: POPOVER_DEFAULTS.PLACEMENT,
    color: POPOVER_DEFAULTS.COLOR,
    visible: POPOVER_DEFAULTS.VISIBLE,
    offset: POPOVER_DEFAULTS.OFFSET,
    'focus-trap': POPOVER_DEFAULTS.FOCUS_TRAP,
    'prevent-scroll': POPOVER_DEFAULTS.PREVENT_SCROLL,
    'show-arrow': DEFAULTS.ARROW,
    'close-button': DEFAULTS.CLOSE_BUTTON,
    interactive: POPOVER_DEFAULTS.INTERACTIVE,
    delay: POPOVER_DEFAULTS.DELAY,
    'hide-on-escape': POPOVER_DEFAULTS.HIDE_ON_ESCAPE,
    'hide-on-blur': POPOVER_DEFAULTS.HIDE_ON_BLUR,
    'hide-on-outside-click': POPOVER_DEFAULTS.HIDE_ON_CLICK_OUTSIDE,
    'focus-back-to-trigger': POPOVER_DEFAULTS.FOCUS_BACK,
    backdrop: POPOVER_DEFAULTS.BACKDROP,
    flip: POPOVER_DEFAULTS.FLIP,
    size: POPOVER_DEFAULTS.SIZE,
    'z-index': POPOVER_DEFAULTS.Z_INDEX,
    role: POPOVER_DEFAULTS.ROLE
  }
}`,...(A=(m=n.parameters)==null?void 0:m.docs)==null?void 0:A.source}}};const J=["Example"];export{n as Example,J as __namedExportsOrder,q as default};
