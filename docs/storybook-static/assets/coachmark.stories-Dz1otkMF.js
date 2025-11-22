import{u as _,n as p,k as R}from"./iframe-BCanoCRe.js";import{C as T,d as L,a as u,D as t}from"./popover.component-DoM1jhNA.js";import"./index-Cm2lzNsz.js";import{c as b,s as D}from"./commonArgTypes-BluK8w5L.js";import P from"./popover.stories-B9R4b-l-.js";import{a as S}from"./utils-Dd_sfl9-.js";import"./preload-helper-C1FmrZbK.js";import"./if-defined-BKKfBTgX.js";import"./BackdropMixin-irboKES9.js";import"./button.component-BPw-r-Mr.js";import"./buttonsimple.component-DA2CTyD3.js";import"./TabIndexMixin-Dq2oczWO.js";import"./DisabledMixin-BApzXNWy.js";import"./button.utils-rNW36Ji7.js";import"./index-jw-wyglp.js";import"./index-CMEhrORJ.js";import"./index-DTrDRi1E.js";import"./index-B0oP7N4V.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./index-DBvsTe7L.js";import"./FormInternalsMixin-BozvY87n.js";import"./query-BPxBhMfF.js";import"./listitem.component-D1FnNj5r.js";import"./index-toynczP7.js";import"./index-Dp7hOxeq.js";import"./index-ao5-DYXH.js";import"./index-C4Oxf6-h.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-1bk77Y1Q.js";import"./DataAriaLabelMixin-BX3YsaxT.js";import"./ListNavigationMixin-Tnu6GYrA.js";import"./formfieldwrapper.component-DIxVLrIR.js";import"./formfieldwrapper.constants-CQWGpnDo.js";import"./index-CzNdfk4Y.js";import"./menuitemradio.constants-DgyJKyJc.js";import"./menupopover.constants-DGqC0vmz.js";import"./badge.constants-iRyE0qKL.js";import"./menuitem.component-BUYrv8Wf.js";import"./menuitemcheckbox.constants-nri-jYKj.js";import"./index-DT9coUkd.js";import"./index-D-KrQ2gx.js";import"./dialog.component-MGqZb0xB.js";import"./FooterMixin-B3PauQy2.js";import"./link.constants-Jwq0Ffpx.js";import"./index-DbNE6rXY.js";import"./index-Dfh-k8IN.js";import"./index-SsYqHSOv.js";const h=_.constructTagName("coachmark"),o={COLOR:T.CONTRAST,TRIGGER:L.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,E,U)=>{for(var i=void 0,d=e.length-1,m;d>=0;d--)(m=e[d])&&(i=m(r,E,i)||i);return i&&I(r,E,i),i};class c extends u{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}l([p({type:String,reflect:!0})],c.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=e=>R`
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
`,Pe={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...b,...D,...P.argTypes,...S(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,"disable-flip":t.DISABLE_FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Se=["Example"];export{a as Example,Se as __namedExportsOrder,Pe as default};
