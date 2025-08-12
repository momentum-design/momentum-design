import{k as R}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as T,n as p}from"./provider.component-BaQC7CJH.js";import{C as u,b as _,P as L,D as t}from"./popover.component-BcWkwQje.js";import"./index-B99O590v.js";import{c as b,s as P}from"./commonArgTypes-BluK8w5L.js";import h from"./popover.stories-DS_4N49w.js";import{a as D}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-DU0xbrD4.js";import"./button.component-CnLy9CQy.js";import"./state-C0WmBOuD.js";import"./button.constants-BpS-4nLb.js";import"./buttonsimple.constants-CNAgWCp2.js";import"./buttonsimple.component-I-gcvU8_.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-B-GnYs90.js";import"./button.utils-rNW36Ji7.js";import"./index-D24yCQeZ.js";import"./iframe-CKOyvy_U.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-ChWiF_5p.js";import"./create-context-89xeped_.js";import"./index-CFWfWhxW.js";import"./index-riA1qVWu.js";import"./index-ChH4-Or7.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-BIoSiX4k.js";import"./query-DXShiZ7f.js";import"./listitem.component-BeuoLqO-.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-DVj3CSgh.js";import"./index-CaLkUUtB.js";import"./index-CMQK0LTX.js";import"./index-Dm_kZN_u.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./formfieldwrapper.component-C-SgLT80.js";import"./index-ByFDlpbt.js";import"./menuitemradio.constants-HxwjPhBY.js";import"./menuitem.component-Ba-rkWJ-.js";import"./menuitemcheckbox.constants-CWk8F82j.js";import"./menupopover.constants-D4HZx52I.js";import"./index-Dn1PnjE9.js";import"./index-gBdLodMn.js";import"./FooterMixin-9o7JZZe3.js";import"./link.constants-Df3Yk0mX.js";import"./index-sWc6BXHZ.js";const S=T.constructTagName("coachmark"),o={COLOR:u.CONTRAST,TRIGGER:_.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(e,r,d,f)=>{for(var i=void 0,l=e.length-1,E;l>=0;l--)(E=e[l])&&(i=E(r,d,i)||i);return i&&I(r,d,i),i};class c extends L{constructor(){super(...arguments),this.trigger=o.TRIGGER,this.showArrow=o.ARROW,this.closeButton=o.CLOSE_BUTTON,this.disableAriaExpanded=o.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=o.COLOR,this.showArrow=o.ARROW}}m([p({type:String,reflect:!0})],c.prototype,"trigger");m([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(S);const C=e=>R`
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
`,Ce={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,parameters:{badges:["stable"]},argTypes:{...b,...P,...h.argTypes,...D(["color"])}},n={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:o.TRIGGER,placement:t.PLACEMENT,color:t.COLOR,visible:t.VISIBLE,offset:t.OFFSET,"focus-trap":t.FOCUS_TRAP,"prevent-scroll":t.PREVENT_SCROLL,"show-arrow":o.ARROW,"close-button":o.CLOSE_BUTTON,interactive:t.INTERACTIVE,delay:t.DELAY,"hide-on-escape":t.HIDE_ON_ESCAPE,"hide-on-blur":t.HIDE_ON_BLUR,"hide-on-outside-click":t.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":t.FOCUS_BACK,backdrop:t.BACKDROP,flip:t.FLIP,size:t.SIZE,"z-index":t.Z_INDEX,role:t.ROLE}};var s,O,A;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=n.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const fe=["Example"];export{n as Example,fe as __namedExportsOrder,Ce as default};
