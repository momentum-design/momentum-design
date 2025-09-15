import{k as R}from"./lit-element-D5KKan5q.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{n}from"./property-Bj3TGwkg.js";import{C as T,b as u,P as _,D as t}from"./popover.component-DyV3vn3N.js";import{u as L}from"./provider.component-DrWB4byV.js";import"./index-JsC8alK4.js";import{c as b,s as P}from"./commonArgTypes-BluK8w5L.js";import h from"./popover.stories-DmpOJvFV.js";import{a as D}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-CJI3JVG-.js";import"./button.component-C0ZL9yys.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./buttonsimple.component-Dydm3dt1.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-APTaIYMp.js";import"./iframe-DC2qJtBf.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-B5DpTXBm.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-ZYSHrcoI.js";import"./index-D2VIkDCb.js";import"./FormInternalsMixin-DHE-e7AC.js";import"./query-DXShiZ7f.js";import"./listitem.component-B3497azE.js";import"./index-Dq35umVO.js";import"./index-DXs9nl5T.js";import"./index-CRKOAWQB.js";import"./index-CnFwjDgi.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./formfieldwrapper.component-DfjqvCUn.js";import"./index-BYzC3edI.js";import"./menuitemradio.constants-CB6EqhSm.js";import"./menupopover.constants-CpexIkMA.js";import"./badge.constants-C6WKiCnx.js";import"./menuitem.component-B6PRyjrF.js";import"./menuitemcheckbox.constants-dhHMuWzH.js";import"./index-OsD065td.js";import"./index-Oxjc3MDn.js";import"./FooterMixin-oJpTePmN.js";import"./link.constants-DNTydABS.js";import"./index-BYs9qdSO.js";import"./index-CDo3POFf.js";import"./index-CcyWGNLW.js";import"./index-BPyWq0_g.js";import"./divider.constants-DXWnBz1m.js";const S=L.constructTagName("coachmark"),e={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(o,r,d,C)=>{for(var i=void 0,l=o.length-1,E;l>=0;l--)(E=o[l])&&(i=E(r,d,i)||i);return i&&I(r,d,i),i};class c extends _{constructor(){super(...arguments),this.trigger=e.TRIGGER,this.showArrow=e.ARROW,this.closeButton=e.CLOSE_BUTTON,this.disableAriaExpanded=e.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=e.COLOR,this.showArrow=e.ARROW}}m([n({type:String,reflect:!0})],c.prototype,"trigger");m([n({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([n({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([n({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(S);const f=o=>R`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(o.id))==null?void 0:r.show()}}">
      open
    </mdc-button>
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(o.id))==null?void 0:r.hide()}}">
      close
    </mdc-button>
    <mdc-text id="${o.triggerID}">Anchor</mdc-text>
    <mdc-coachmark
      id="${o.id}"
      triggerID="${o.triggerID}"
      trigger="${o.trigger}"
      placement="${o.placement}"
      delay="${o.delay}"
      z-index="${o["z-index"]}"
      ?visible="${o.visible}"
      .offset="${o.offset??0}"
      ?interactive=${o.interactive}
      ?focus-trap=${o["focus-trap"]}
      ?show-arrow=${o["show-arrow"]}
      ?flip=${o.flip}
      ?size=${o.size}
      ?backdrop=${o.backdrop}
      ?close-button=${o["close-button"]}
      ?prevent-scroll=${o["prevent-scroll"]}
      ?hide-on-blur=${o["hide-on-blur"]}
      ?hide-on-escape=${o["hide-on-escape"]}
      ?hide-on-outside-click=${o["hide-on-outside-click"]}
      ?focus-back-to-trigger=${o["focus-back-to-trigger"]}
      append-to=${o["append-to"]}
      close-button-aria-label="${o["close-button-aria-label"]}"
      aria-label="${o["aria-label"]}"
      aria-labelledby="${o["aria-labelledby"]}"
      aria-describedby="${o["aria-describedby"]}"
      role="${o.role}"
      @shown="${p("onshown")}"
      @hidden="${p("onhidden")}"
      @created="${p("oncreated")}"
      @destroyed="${p("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,No={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:f,parameters:{badges:["stable"]},argTypes:{...b,...P,...h.argTypes,...D(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:e.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":e.ARROW,"close-button":e.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,flip:t.FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Vo=["Example"];export{a as Example,Vo as __namedExportsOrder,No as default};
