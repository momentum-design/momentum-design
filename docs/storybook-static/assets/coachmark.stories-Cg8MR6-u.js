import{u as A,n as p,k as h,R}from"./iframe-q5YgjDld.js";import{P as _}from"./popover.component-BM1Ac3-w.js";import{C as T,a as L,D as t}from"./popover.constants-BXXJvqk9.js";import{t as a}from"./if-defined-CcLsQsCq.js";import{c as P,s as y}from"./commonArgTypes-BG7EqI50.js";import D from"./popover.stories-BltA3jzW.js";import{h as S}from"./utils-B5QUENNQ.js";import"./index-BcEEePcu.js";import"./index-D1tLPrMU.js";import"./index-koVULC-y.js";import"./preload-helper-C1FmrZbK.js";import"./BackdropMixin-DjC6jDwl.js";import"./KeyDownHandledMixin-C-TUEG1Q.js";import"./index-BAndwYFW.js";import"./index-CeRmawuW.js";import"./query-assigned-elements-GuUXfDeP.js";import"./index-Dyg8sc0X.js";import"./index-CEMlnyZJ.js";import"./index-DTrDRi1E.js";import"./FormInternalsMixin-BA5P1Osz.js";import"./listitem.component-CmiIqGA5.js";import"./DisabledMixin-fbiLTt1z.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CuZ8Y5A-.js";import"./index-D8hV3lKN.js";import"./index-CDoP7Piv.js";import"./index-BNkDDT40.js";import"./index-BL9jYc0X.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-BZesFszi.js";import"./buttonsimple.component-D5vIGevR.js";import"./DataAriaLabelMixin-F_qF3igS.js";import"./ListNavigationMixin-BL_iTmAy.js";import"./formfieldwrapper.component-D-pSsTfD.js";import"./formfieldwrapper.constants-BjDZM3sR.js";import"./index-DlwmSlNQ.js";import"./menuitemradio.constants-CW5oo9G-.js";import"./menupopover.constants-sNPJWATi.js";import"./badge.constants-Ds7qPExn.js";import"./menuitem.component-dLqbqjgk.js";import"./menuitemcheckbox.constants-DBPOOLzD.js";import"./index-DEPEWefU.js";import"./index-D4i32tmz.js";import"./dialog.component-B8e_idZm.js";import"./FooterMixin-MwuZCCD_.js";import"./link.constants-BW9_n-4F.js";import"./index-BqaSPv-Y.js";import"./button.component-rHS9HpdE.js";import"./button.utils-rNW36Ji7.js";import"./list.component-pfWGMOcd.js";const $=A.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:L.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,s,C)=>{for(var i=void 0,m=e.length-1,E;m>=0;m--)(E=e[m])&&(i=E(r,s,i)||i);return i&&I(r,s,i),i};class n extends _{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}l([p({type:String,reflect:!0})],n.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],n.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],n.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],n.prototype,"disableAriaExpanded");n.register($);const{action:c}=__STORYBOOK_MODULE_ACTIONS__,f=e=>h`
  <div style="height: 50vh; display: inline-block" role="${R.MAIN}">
    <div style="display: flex; gap: 0.5rem;">
      <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.show()}}">
        open
      </mdc-button>
      <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.hide()}}">
        close
      </mdc-button>
    </div>
    <mdc-list>
      <mdc-listitem id="${e.triggerID}" label="Anchor Content"></mdc-listitem>
    </mdc-list>
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
      ?disable-flip=${e["disable-flip"]}
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
      ?keep-connected-tooltip-open="${e["keep-connected-tooltip-open"]}"
      backdrop-append-to="${a(e["backdrop-append-to"])}"
      ?is-backdrop-invisible="${e["is-backdrop-invisible"]}"
      boundary="${a(e.boundary)}"
      boundary-padding="${a(e["boundary-padding"])}"
      boundary-root="${a(e["boundary-root"])}"
      strategy="${a(e.strategy)}"
      @shown="${c("onshown")}"
      @hidden="${c("onhidden")}"
      @created="${c("oncreated")}"
      @destroyed="${c("ondestroyed")}"
      style="${e.style}"
      class="${e.class}"
    >
      <mdc-text type="body-midsize-bold" tagname="div">Coachmark</mdc-text>
      <mdc-text type="body-midsize-regular" tagname="div"
        >This is a sample coach mark. Follow me to walk you through different ways that I can be used.</mdc-text
      >
      <div style="display: flex; flex-direction: row-reverse; gap: .5rem; margin-top: 0.75rem;">
        <mdc-button variant="primary" inverted>Next</mdc-button>
        <mdc-button style="--mdc-button-border-color: var(--mds-color-theme-inverted-outline-button-normal);"
          >Back</mdc-button
        >
      </div>
    </mdc-coachmark>
  </div>
`,$e={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:f,argTypes:{...P,...y,...D.argTypes,...S(["color","show-arrow"])}},d={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,"disable-flip":t.DISABLE_FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE,style:"width: 17.5rem; height: 9rem;"}};var O,b,u;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
    'disable-flip': POPOVER_DEFAULTS.DISABLE_FLIP,
    size: POPOVER_DEFAULTS.SIZE,
    'z-index': POPOVER_DEFAULTS.Z_INDEX,
    role: POPOVER_DEFAULTS.ROLE,
    style: 'width: 17.5rem; height: 9rem;'
  }
}`,...(u=(b=d.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};const Ie=["Example"];export{d as Example,Ie as __namedExportsOrder,$e as default};
