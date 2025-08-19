import{k as R}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{n}from"./property-Bj3TGwkg.js";import{C as T,b as u,P as _,D as o}from"./popover.component-CWSuSUni.js";import{u as L}from"./provider.component-DrWB4byV.js";import"./index-EO-F4xWv.js";import{c as b,s as P}from"./commonArgTypes-BluK8w5L.js";import h from"./popover.stories-Ca-Ne5pu.js";import{a as D}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-CJI3JVG-.js";import"./button.component-AY6DUPps.js";import"./state-CmYk530Z.js";import"./button.constants-BBlkZKjZ.js";import"./buttonsimple.constants-CVV9o_W6.js";import"./buttonsimple.component-UJ4pbvCi.js";import"./keys-hFXe221I.js";import"./DisabledMixin-B-Cnza7-.js";import"./TabIndexMixin-DEwGeIeI.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-C1I-QMLj.js";import"./iframe-CQ2BYk5f.js";import"../sb-preview/runtime.js";import"./index-CwZu4Wnd.js";import"./iconprovider.component-BtAZSWEH.js";import"./create-context-89xeped_.js";import"./index-43c5KxPk.js";import"./index-DeEenWCE.js";import"./index-DM9rY9pk.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-DR-5bOLb.js";import"./query-DXShiZ7f.js";import"./listitem.component-i7etquvF.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-DVLHHlrd.js";import"./index-Dp8-qD3R.js";import"./index-eW6vgMN0.js";import"./index-CnFwjDgi.js";import"./DataAriaLabelMixin-DVpSBUFD.js";import"./formfieldwrapper.component-BeqiOSNt.js";import"./index-BtkQL9Xg.js";import"./menuitemradio.constants-CB6EqhSm.js";import"./menupopover.constants-BCvF7ZAQ.js";import"./badge.constants-C6WKiCnx.js";import"./menuitem.component-sgTa2DEs.js";import"./menuitemcheckbox.constants-dhHMuWzH.js";import"./index-CThYSKr6.js";import"./index-CSoeeztY.js";import"./FooterMixin-BQCuuCJE.js";import"./link.constants-DNTydABS.js";import"./index-BVa6cgee.js";const S=L.constructTagName("coachmark"),t={COLOR:T.CONTRAST,TRIGGER:u.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(e,r,d,C)=>{for(var i=void 0,l=e.length-1,E;l>=0;l--)(E=e[l])&&(i=E(r,d,i)||i);return i&&I(r,d,i),i};class c extends _{constructor(){super(...arguments),this.trigger=t.TRIGGER,this.showArrow=t.ARROW,this.closeButton=t.CLOSE_BUTTON,this.disableAriaExpanded=t.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=t.COLOR,this.showArrow=t.ARROW}}m([n({type:String,reflect:!0})],c.prototype,"trigger");m([n({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([n({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([n({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(S);const f=e=>R`
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
      @shown="${a("onshown")}"
      @hidden="${a("onhidden")}"
      @created="${a("oncreated")}"
      @destroyed="${a("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,Ue={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:f,parameters:{badges:["stable"]},argTypes:{...b,...P,...h.argTypes,...D(["color"])}},p={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:t.TRIGGER,placement:o.PLACEMENT,color:o.COLOR,visible:o.VISIBLE,offset:o.OFFSET,"focus-trap":o.FOCUS_TRAP,"prevent-scroll":o.PREVENT_SCROLL,"show-arrow":t.ARROW,"close-button":t.CLOSE_BUTTON,interactive:o.INTERACTIVE,delay:o.DELAY,"hide-on-escape":o.HIDE_ON_ESCAPE,"hide-on-blur":o.HIDE_ON_BLUR,"hide-on-outside-click":o.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":o.FOCUS_BACK,backdrop:o.BACKDROP,flip:o.FLIP,size:o.SIZE,"z-index":o.Z_INDEX,role:o.ROLE}};var s,O,A;p.parameters={...p.parameters,docs:{...(s=p.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=p.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const $e=["Example"];export{p as Example,$e as __namedExportsOrder,Ue as default};
