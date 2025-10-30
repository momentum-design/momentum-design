import{u as R,n as p,k as _}from"./iframe-BV5DWP9v.js";import{C as T,d as u,a as L,D as t}from"./popover.component-B4ffFb1U.js";import"./index-YCvhlFMa.js";import{c as P,s as b}from"./commonArgTypes-BluK8w5L.js";import D from"./popover.stories-BGKcPB1V.js";import{a as S}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-D2_Zq9Ec.js";import"./BackdropMixin-DS-9bUP-.js";import"./button.component-CR8tiFQC.js";import"./buttonsimple.component-D_Fe5ZUz.js";import"./TabIndexMixin-CzgsI75_.js";import"./DisabledMixin-4l6RL3Et.js";import"./button.utils-rNW36Ji7.js";import"./index-ZSNJZ3qa.js";import"./index-DVU4gHUE.js";import"./index-DTrDRi1E.js";import"./index-Dgr4mmO6.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-68CXcsWC.js";import"./FormInternalsMixin-BSZLv0yW.js";import"./query-BPxBhMfF.js";import"./listitem.component-DvdYxTQT.js";import"./index-MnoL0VCE.js";import"./index-D91XLCIu.js";import"./index-DZmtHulG.js";import"./index-CPTTc5X-.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-BDR7KOZ_.js";import"./DataAriaLabelMixin-9T8QQ5GU.js";import"./ListNavigationMixin-dhCM4BX-.js";import"./formfieldwrapper.component-DodX1ff3.js";import"./formfieldwrapper.constants-DWC10nYc.js";import"./index-BXl_RZGC.js";import"./menuitemradio.constants-D_h76m7g.js";import"./menupopover.constants-D9oQ7tqr.js";import"./badge.constants-CAm4ACHV.js";import"./menuitem.component-CrUZCzaa.js";import"./menuitemcheckbox.constants-DGuuHCJc.js";import"./index-BKG0jtOV.js";import"./index-CLCGKfvw.js";import"./dialog.component-g5vICZa6.js";import"./FooterMixin-Cniu6nY2.js";import"./link.constants-C9NDbczg.js";import"./index--6L6d_S9.js";import"./index-Bau6dB7G.js";import"./index-DWTClZG3.js";const h=R.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,d,U)=>{for(var i=void 0,E=e.length-1,m;E>=0;E--)(m=e[E])&&(i=m(r,d,i)||i);return i&&I(r,d,i),i};class c extends L{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}l([p({type:String,reflect:!0})],c.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>_`
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
`,De={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...P,...b,...D.argTypes,...S(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,flip:t.FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Se=["Example"];export{a as Example,Se as __namedExportsOrder,De as default};
