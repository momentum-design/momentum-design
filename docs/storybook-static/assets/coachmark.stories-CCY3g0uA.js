import{k as R}from"./lit-element-D5KKan5q.js";import{a as p}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as T,n}from"./provider.component-BaQC7CJH.js";import{C as u,b as _,P as L,D as o}from"./popover.component-CgG8O1N4.js";import"./index-DO0uJFRB.js";import{c as b,s as P}from"./commonArgTypes-BluK8w5L.js";import h from"./popover.stories-oMoBkK8L.js";import{a as D}from"./utils-CFOyPOhY.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./roles-CJI3JVG-.js";import"./button.component-D5eG231X.js";import"./state-C0WmBOuD.js";import"./button.constants-B6suqA4v.js";import"./buttonsimple.constants-An7St6B1.js";import"./buttonsimple.component-CKyEWPbX.js";import"./keys-hFXe221I.js";import"./DisabledMixin-DcYwkKYf.js";import"./TabIndexMixin-TvgH_pmh.js";import"./index-CqVtAZCJ.js";import"./button.utils-rNW36Ji7.js";import"./index-DhIhdWNp.js";import"./iframe-DtD0cJ2q.js";import"../sb-preview/runtime.js";import"./index-CbmtUAjA.js";import"./iconprovider.component-DWn5NkGG.js";import"./create-context-89xeped_.js";import"./index-DTrDRi1E.js";import"./index-D8-XmCZU.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-DnPpJHC4.js";import"./index-DHsMOcdX.js";import"./FormInternalsMixin-CvUI0OX_.js";import"./query-DXShiZ7f.js";import"./listitem.component-Cy9hWtov.js";import"./index-xmCWyLZg.js";import"./index-CizvMWMc.js";import"./index-Do14t4YG.js";import"./index-Dm_kZN_u.js";import"./v4-CmTdKEVZ.js";import"./DataAriaLabelMixin-Cpdy3gUS.js";import"./formfieldwrapper.component-Bh3Mxn5K.js";import"./index-DbBLGnP-.js";import"./menuitemradio.constants-HxwjPhBY.js";import"./menupopover.constants-CbRDXt5a.js";import"./badge.constants-Cr-5n44e.js";import"./menuitem.component-Dws3iiL_.js";import"./menuitemcheckbox.constants-CWk8F82j.js";import"./index-wS3iqO1G.js";import"./index-WRDXXUoR.js";import"./FooterMixin-Dp15GCvz.js";import"./link.constants-Df3Yk0mX.js";import"./index-CVGGRH7D.js";import"./CaptureDestroyEventForChildElement-qq7X9vNO.js";import"./index-DGdosPEB.js";import"./index-DQ1Hv4sq.js";import"./index-BaUwcf4A.js";import"./divider.constants-DBMTjDho.js";const S=T.constructTagName("coachmark"),e={COLOR:u.CONTRAST,TRIGGER:_.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,m=(t,r,d,f)=>{for(var i=void 0,l=t.length-1,E;l>=0;l--)(E=t[l])&&(i=E(r,d,i)||i);return i&&I(r,d,i),i};class c extends L{constructor(){super(...arguments),this.trigger=e.TRIGGER,this.showArrow=e.ARROW,this.closeButton=e.CLOSE_BUTTON,this.disableAriaExpanded=e.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=e.COLOR,this.showArrow=e.ARROW}}m([n({type:String,reflect:!0})],c.prototype,"trigger");m([n({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");m([n({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");m([n({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(S);const C=t=>R`
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
      @shown="${p("onshown")}"
      @hidden="${p("onhidden")}"
      @created="${p("oncreated")}"
      @destroyed="${p("ondestroyed")}"
    >
      <mdc-text>Lorem ipsum dolor sit amet.</mdc-text>
    </mdc-coachmark>
  </div>
`,Nt={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,parameters:{badges:["stable"]},argTypes:{...b,...P,...h.argTypes,...D(["color"])}},a={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:e.TRIGGER,placement:o.PLACEMENT,color:o.COLOR,visible:o.VISIBLE,offset:o.OFFSET,"focus-trap":o.FOCUS_TRAP,"prevent-scroll":o.PREVENT_SCROLL,"show-arrow":e.ARROW,"close-button":e.CLOSE_BUTTON,interactive:o.INTERACTIVE,delay:o.DELAY,"hide-on-escape":o.HIDE_ON_ESCAPE,"hide-on-blur":o.HIDE_ON_BLUR,"hide-on-outside-click":o.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":o.FOCUS_BACK,backdrop:o.BACKDROP,flip:o.FLIP,size:o.SIZE,"z-index":o.Z_INDEX,role:o.ROLE}};var s,O,A;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=a.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const Vt=["Example"];export{a as Example,Vt as __namedExportsOrder,Nt as default};
