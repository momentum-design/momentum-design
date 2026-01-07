import{u as _,n as p,k as R}from"./iframe-DfARtXqP.js";import{P as T}from"./popover.component-0RAreG5Z.js";import{C as L,a as u,D as o}from"./popover.constants-CQDPDYct.js";import"./index-CBuPckjx.js";import{c as b,s as P}from"./commonArgTypes-BG7EqI50.js";import D from"./popover.stories-BuXxF5sV.js";import{h as S}from"./utils-D6nie9pS.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-B3MOebGJ.js";import"./BackdropMixin-zWxoSCNB.js";import"./button.component-TZmib-oJ.js";import"./buttonsimple.component-CNIzRnl5.js";import"./TabIndexMixin-BOUWllKu.js";import"./DisabledMixin-LBG16ZV1.js";import"./button.utils-rNW36Ji7.js";import"./index-CPJsdX9r.js";import"./index-CMjNKglG.js";import"./index-DTrDRi1E.js";import"./index-CcUc_Vz2.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-DxSbn62t.js";import"./FormInternalsMixin-C0TTv1Z-.js";import"./query-BPxBhMfF.js";import"./listitem.component-D8m10DM7.js";import"./index-B0oTv9gG.js";import"./index-KZkZtm69.js";import"./index-Ccmd10fP.js";import"./index-Dj2F0Ihp.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-C1CVWPpe.js";import"./DataAriaLabelMixin-Cdc12wDK.js";import"./ListNavigationMixin-CBXyeg3L.js";import"./formfieldwrapper.component-Bnj1pfMB.js";import"./formfieldwrapper.constants-96sqW0l0.js";import"./index-69q8EcTR.js";import"./menuitemradio.constants-FTNnY39T.js";import"./menupopover.constants-B8MgSoVV.js";import"./badge.constants-Bcr2pQil.js";import"./menuitem.component-Dif4lxkR.js";import"./menuitemcheckbox.constants-CQ9eSoY4.js";import"./index-B9W0jsBb.js";import"./index-DweunYn5.js";import"./dialog.component-DcfVG_HL.js";import"./FooterMixin-BM1EzktN.js";import"./link.constants-BEpLBMfS.js";import"./index-BhjUOg7e.js";import"./index-BWtniX-Q.js";import"./index-B8prld2y.js";const h=_.constructTagName("coachmark"),t={COLOR:L.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,E,U)=>{for(var i=void 0,d=e.length-1,m;d>=0;d--)(m=e[d])&&(i=m(r,E,i)||i);return i&&I(r,E,i),i};class c extends T{constructor(){super(...arguments),this.trigger=t.TRIGGER,this.showArrow=t.ARROW,this.closeButton=t.CLOSE_BUTTON,this.disableAriaExpanded=t.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=t.COLOR,this.showArrow=t.ARROW}}l([p({type:String,reflect:!0})],c.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>R`
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
      @shown="${n("onshown")}"
      @hidden="${n("onhidden")}"
      @created="${n("oncreated")}"
      @destroyed="${n("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,Se={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...b,...P,...D.argTypes,...S(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:t.TRIGGER,placement:o.PLACEMENT,color:o.COLOR,visible:o.VISIBLE,offset:o.OFFSET,"focus-trap":o.FOCUS_TRAP,"prevent-scroll":o.PREVENT_SCROLL,"show-arrow":t.ARROW,"close-button":t.CLOSE_BUTTON,interactive:o.INTERACTIVE,delay:o.DELAY,"hide-on-escape":o.HIDE_ON_ESCAPE,"hide-on-blur":o.HIDE_ON_BLUR,"hide-on-outside-click":o.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":o.FOCUS_BACK,backdrop:o.BACKDROP,"disable-flip":o.DISABLE_FLIP,size:o.SIZE,"z-index":o.Z_INDEX,role:o.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
    role: POPOVER_DEFAULTS.ROLE
  }
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const he=["Example"];export{a as Example,he as __namedExportsOrder,Se as default};
