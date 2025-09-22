import{u as R,n as a,k as _}from"./iframe-Dv4CZTGV.js";import{C as T,b as u,a as L,D as e}from"./popover.component-jiBvvB-H.js";import"./index-K4WMwRF4.js";import{c as P,s as b}from"./commonArgTypes-BluK8w5L.js";import D from"./popover.stories-DXIjdtO3.js";import{a as S}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./if-defined-DkpisCg5.js";import"./roles-CJI3JVG-.js";import"./button.component-CbJN6n_2.js";import"./button.constants-BN8GH3PF.js";import"./buttonsimple.constants-8cRaCd2R.js";import"./buttonsimple.component-ChqJ9fk5.js";import"./keys-hFXe221I.js";import"./DisabledMixin-HUACZ3-D.js";import"./TabIndexMixin-BhCrCd_K.js";import"./index-BATfJeu3.js";import"./button.utils-rNW36Ji7.js";import"./index-C7H1niR0.js";import"./index-tqQu3Fsv.js";import"./index-DTrDRi1E.js";import"./index-CuAifMZM.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-CeHoB6nF.js";import"./index-CkpDgFEX.js";import"./FormInternalsMixin-DKPdlmHA.js";import"./query-DXShiZ7f.js";import"./listitem.component-CS5dkAP-.js";import"./index-B5AB95AO.js";import"./index-C2VtjnZg.js";import"./index-B37Z1pou.js";import"./index-CWThIL_m.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-Cqj7dN5U.js";import"./DataAriaLabelMixin-B0ZiAR4t.js";import"./ListNavigationMixin-DgCStHq0.js";import"./formfieldwrapper.component-BFLWpJbC.js";import"./index-BN1crm26.js";import"./menuitemradio.constants-olaxey9-.js";import"./menupopover.constants-DG1ODPTN.js";import"./badge.constants-EkomLWIr.js";import"./menuitem.component-CuQzZhkq.js";import"./menuitemcheckbox.constants-TxgJwbWI.js";import"./index-BiKh8EfW.js";import"./index-C4bgrYoc.js";import"./FooterMixin-Qk-a7dk6.js";import"./link.constants-LFPhmrAe.js";import"./index-B7-bpHqJ.js";import"./index-B9sKKT4j.js";import"./index-BImbAcGz.js";import"./index-CCWDVfYF.js";import"./divider.constants-BLfZBzMm.js";const h=R.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(t,r,E,U)=>{for(var i=void 0,l=t.length-1,d;l>=0;l--)(d=t[l])&&(i=d(r,E,i)||i);return i&&I(r,E,i),i};class c extends L{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}m([a({type:String,reflect:!0})],c.prototype,"trigger");m([a({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([a({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([a({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=t=>_`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(t.id))==null?void 0:r.show()}}">
      open
    </mdc-button>
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(t.id))==null?void 0:r.hide()}}">
      close
    </mdc-button>
    <mdc-text id="${t.triggerID}">Anchor</mdc-text>
    <mdc-coachmark
      id="${t.id}"
      triggerID="${t.triggerID}"
      trigger="${t.trigger}"
      placement="${t.placement}"
      delay="${t.delay}"
      z-index="${t["z-index"]}"
      ?visible="${t.visible}"
      .offset="${t.offset??0}"
      ?interactive=${t.interactive}
      ?focus-trap=${t["focus-trap"]}
      ?show-arrow=${t["show-arrow"]}
      ?flip=${t.flip}
      ?size=${t.size}
      ?backdrop=${t.backdrop}
      ?close-button=${t["close-button"]}
      ?prevent-scroll=${t["prevent-scroll"]}
      ?hide-on-blur=${t["hide-on-blur"]}
      ?hide-on-escape=${t["hide-on-escape"]}
      ?hide-on-outside-click=${t["hide-on-outside-click"]}
      ?focus-back-to-trigger=${t["focus-back-to-trigger"]}
      append-to=${t["append-to"]}
      close-button-aria-label="${t["close-button-aria-label"]}"
      aria-label="${t["aria-label"]}"
      aria-labelledby="${t["aria-labelledby"]}"
      aria-describedby="${t["aria-describedby"]}"
      role="${t.role}"
      @shown="${n("onshown")}"
      @hidden="${n("onhidden")}"
      @created="${n("oncreated")}"
      @destroyed="${n("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,Ut={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...P,...b,...D.argTypes,...S(["color"])}},p={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:e.PLACEMENT,color:e.COLOR,visible:e.VISIBLE,offset:e.OFFSET,"focus-trap":e.FOCUS_TRAP,"prevent-scroll":e.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:e.INTERACTIVE,delay:e.DELAY,"hide-on-escape":e.HIDE_ON_ESCAPE,"hide-on-blur":e.HIDE_ON_BLUR,"hide-on-outside-click":e.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":e.FOCUS_BACK,backdrop:e.BACKDROP,flip:e.FLIP,size:e.SIZE,"z-index":e.Z_INDEX,role:e.ROLE}};var s,O,A;p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const $t=["Example"];export{p as Example,$t as __namedExportsOrder,Ut as default};
