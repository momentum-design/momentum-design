import{u as R,n as a,k as _}from"./iframe-B0KTrzx9.js";import{C as T,d as u,a as L,D as o}from"./popover.component-D_TiBYQm.js";import"./index-Bru5oaFW.js";import{c as P,s as b}from"./commonArgTypes-BluK8w5L.js";import D from"./popover.stories-DX5M4smu.js";import{a as S}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./base-DIkkzJ-c.js";import"./if-defined-DNHI_5dY.js";import"./BackdropMixin-bbfClAaN.js";import"./roles-CJI3JVG-.js";import"./button.component-CtcVR2rv.js";import"./button.constants-sbSBQcQT.js";import"./buttonsimple.constants-CAVCL-bo.js";import"./buttonsimple.component-DjMZQodl.js";import"./keys-hFXe221I.js";import"./DisabledMixin-mZwCl_Iz.js";import"./TabIndexMixin-0A7WQtCp.js";import"./index-fannbufq.js";import"./button.utils-rNW36Ji7.js";import"./index-DNweNtkz.js";import"./index-C6YLtR8D.js";import"./index-DTrDRi1E.js";import"./index-hdsKb6ur.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-ybE6IA0W.js";import"./index-B0BwlIJd.js";import"./FormInternalsMixin-i29fyrCl.js";import"./query-DXShiZ7f.js";import"./listitem.component-C1aS-Srd.js";import"./index-zLli2W_h.js";import"./index-DlPR1N-D.js";import"./index-DQAao3ZI.js";import"./index-BvsAz44l.js";import"./v4-CmTdKEVZ.js";import"./CaptureDestroyEventForChildElement-BhgSz6ew.js";import"./DataAriaLabelMixin-D8WkMzZs.js";import"./ListNavigationMixin-DgCStHq0.js";import"./formfieldwrapper.component-GSGrszTj.js";import"./index-CxaO4qSw.js";import"./menuitemradio.constants-BOPp_13y.js";import"./menupopover.constants-TVygk3nw.js";import"./badge.constants-DUedW9V1.js";import"./menuitem.component-Dc4Qjj7i.js";import"./menuitemcheckbox.constants-DGknmLzC.js";import"./index-C17gjQ4i.js";import"./index-D5NNa86Y.js";import"./dialog.component-BMj-k2Uk.js";import"./FooterMixin-DozBZsih.js";import"./link.constants-o6nysIAV.js";import"./index-BiOLtI06.js";import"./index-CidzFboh.js";import"./index-CuIuLExU.js";import"./index-DHdDsxeM.js";import"./divider.constants-z1O1vShJ.js";const h=R.constructTagName("coachmark"),e={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(t,r,E,U)=>{for(var i=void 0,l=t.length-1,d;l>=0;l--)(d=t[l])&&(i=d(r,E,i)||i);return i&&I(r,E,i),i};class c extends L{constructor(){super(...arguments),this.trigger=e.TRIGGER,this.showArrow=e.ARROW,this.closeButton=e.CLOSE_BUTTON,this.disableAriaExpanded=e.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=e.COLOR,this.showArrow=e.ARROW}}m([a({type:String,reflect:!0})],c.prototype,"trigger");m([a({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([a({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([a({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(h);const{action:n}=__STORYBOOK_MODULE_ACTIONS__,C=t=>_`
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
`,ft={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,argTypes:{...P,...b,...D.argTypes,...S(["color"])}},p={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:e.TRIGGER,placement:o.PLACEMENT,color:o.COLOR,visible:o.VISIBLE,offset:o.OFFSET,"focus-trap":o.FOCUS_TRAP,"prevent-scroll":o.PREVENT_SCROLL,"show-arrow":e.ARROW,"close-button":e.CLOSE_BUTTON,interactive:o.INTERACTIVE,delay:o.DELAY,"hide-on-escape":o.HIDE_ON_ESCAPE,"hide-on-blur":o.HIDE_ON_BLUR,"hide-on-outside-click":o.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":o.FOCUS_BACK,backdrop:o.BACKDROP,flip:o.FLIP,size:o.SIZE,"z-index":o.Z_INDEX,role:o.ROLE}};var s,O,A;p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Ft=["Example"];export{p as Example,Ft as __namedExportsOrder,ft as default};
