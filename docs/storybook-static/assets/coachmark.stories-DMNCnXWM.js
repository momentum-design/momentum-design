import{u as R,n as a,k as _}from"./iframe-CQNghGpx.js";import{C as T,b as u,a as L,D as e}from"./popover.component-DBHBXea7.js";import"./index-C7xvt2RE.js";import{c as P,s as b}from"./commonArgTypes-BluK8w5L.js";import D from"./popover.stories-BK3vIdEf.js";import{a as S}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./if-defined-DXCUPrE0.js";import"./roles-CJI3JVG-.js";import"./button.component-Ns4Q5s_x.js";import"./button.constants-Bi5S591q.js";import"./buttonsimple.constants-BrIm4Oa3.js";import"./buttonsimple.component-B748EIoK.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DftxrpjF.js";import"./TabIndexMixin--99FYuKq.js";import"./index-DSn8hw9k.js";import"./button.utils-rNW36Ji7.js";import"./index-VfWKKe5d.js";import"./index-CDsaTPsF.js";import"./index-DTrDRi1E.js";import"./index-BLGVNviI.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-CacApdZj.js";import"./index-DBAWBkSZ.js";import"./FormInternalsMixin-D23UcYN3.js";import"./query-DXShiZ7f.js";import"./listitem.component-BfdFCAFI.js";import"./index-DZBURNHw.js";import"./index-Dlw871i0.js";import"./index-NIHPxZUy.js";import"./index-ekX5RjxU.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-46oLSPFA.js";import"./DataAriaLabelMixin-xMU4tAR7.js";import"./ListNavigationMixin-DgCStHq0.js";import"./formfieldwrapper.component-B5_Veqcc.js";import"./index-CUz1c4ir.js";import"./menuitemradio.constants-DtZzV5pc.js";import"./menupopover.constants-DkyyoUwU.js";import"./badge.constants-D7iHd0XJ.js";import"./menuitem.component-CsNywBUI.js";import"./menuitemcheckbox.constants-DL6PQ_MZ.js";import"./index-CfMubTaW.js";import"./index-BgRfnnnJ.js";import"./FooterMixin-3DCM8qb8.js";import"./link.constants-BQv5fQ1k.js";import"./index-En_y6otj.js";import"./index-Djc6QfB5.js";import"./index-fneyyijO.js";import"./index-D_FsY6i7.js";import"./divider.constants-D0PeMLzC.js";const h=R.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(t,r,E,U)=>{for(var i=void 0,l=t.length-1,d;l>=0;l--)(d=t[l])&&(i=d(r,E,i)||i);return i&&I(r,E,i),i};class c extends L{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}m([a({type:String,reflect:!0})],c.prototype,"trigger");m([a({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([a({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([a({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=t=>_`
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
