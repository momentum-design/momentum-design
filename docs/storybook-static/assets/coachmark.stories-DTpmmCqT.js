import{u as R,n as p,k as _}from"./iframe-CIWT31eQ.js";import{C as T,d as u,a as L,D as t}from"./popover.component-D-eZEHXi.js";import"./index-BniTtJNo.js";import{c as P,s as b}from"./commonArgTypes-BluK8w5L.js";import D from"./popover.stories-CYLku8D-.js";import{a as S}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-ANivnARJ.js";import"./BackdropMixin-WQFjoqtV.js";import"./button.component-DBi2KVRS.js";import"./buttonsimple.component-xF3qZqsX.js";import"./TabIndexMixin-D6Dugml5.js";import"./DisabledMixin-DKVMpEIO.js";import"./button.utils-rNW36Ji7.js";import"./index-BZ0W2Fk1.js";import"./index-DOiWVS3z.js";import"./index-DTrDRi1E.js";import"./index-CrGneZtR.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-DqwSi674.js";import"./FormInternalsMixin-B_JGk00_.js";import"./query-BPxBhMfF.js";import"./listitem.component-DWh_rjNL.js";import"./index-DmEKFKZC.js";import"./index-CzlovjoL.js";import"./index-Di-ZdPqw.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./index-C4vhA__l.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-DgxM6Aph.js";import"./DataAriaLabelMixin-J0qnxRIa.js";import"./ListNavigationMixin-2OXlZ-Ec.js";import"./formfieldwrapper.component-BhDETDhi.js";import"./formfieldwrapper.constants-DXpSCxdf.js";import"./index-D68a91uw.js";import"./menuitemradio.constants-C4L3bLcd.js";import"./menupopover.constants-VcWoFPTe.js";import"./badge.constants-Cb95tMpO.js";import"./menuitem.component-B5zmVhj3.js";import"./menuitemcheckbox.constants-rBUdxPKZ.js";import"./index-BNu8Kb0q.js";import"./index-Bd1WyOlV.js";import"./dialog.component-KG7E8Ton.js";import"./FooterMixin-DQDirB_v.js";import"./link.constants-CFMTLiFM.js";import"./index-BKSyZe4r.js";import"./index-CklbUeIB.js";import"./index-CpTWYNQW.js";const h=R.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,E,U)=>{for(var i=void 0,m=e.length-1,d;m>=0;m--)(d=e[m])&&(i=d(r,E,i)||i);return i&&I(r,E,i),i};class c extends L{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}l([p({type:String,reflect:!0})],c.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>_`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.show()}}">
      open
    </mdc-button>
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.hide()}}">
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
      @shown="${n("onshown")}"
      @hidden="${n("onhidden")}"
      @created="${n("oncreated")}"
      @destroyed="${n("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,Se={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...P,...b,...D.argTypes,...S(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,flip:t.FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const he=["Example"];export{a as Example,he as __namedExportsOrder,Se as default};
