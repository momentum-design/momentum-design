import{k as R}from"./lit-element-D5KKan5q.js";import{a}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{u as T,n as p}from"./index-C9z9WAEj.js";import{C as u,b as _,a as L,D as o}from"./popover.component-2fUXsfxE.js";import"./index-OLmM1sRW.js";import{c as P,s as b}from"./commonArgTypes-BluK8w5L.js";import h from"./popover.stories-AC5gijXL.js";import{h as D}from"./utils-CO8B6ZcN.js";import"./v4-CQkTLCs1.js";import"./base-DIkkzJ-c.js";import"./if-defined-D5BV9-c0.js";import"./FocusTrapMixin-CjzCjsSm.js";import"./roles-BH_hBfTz.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./button.constants-D0QAbDxL.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-CXD_Y4Lv.js";import"./iframe-ztstpg5s.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./index-DrR5uwTH.js";import"./index-DexJwD9N.js";import"./index-D1yLszQ-.js";import"./index-C34JuzZ8.js";import"./v4-CmTdKEVZ.js";import"./FormInternalsMixin-CqDKsEWP.js";import"./query-DXShiZ7f.js";import"./listitem.component-BrjALe5l.js";import"./query-assigned-elements-uEuc3rg8.js";import"./index-yuVM6wzN.js";import"./index-Bwn7t1b_.js";import"./index-CWUJHaLg.js";import"./DataAriaLabelMixin-D53Z5CZ7.js";import"./formfieldwrapper.component-B1RGcmSz.js";import"./optgroup.constants-CwoRKCZY.js";const S=T.constructTagName("coachmark"),t={COLOR:u.CONTRAST,TRIGGER:_.MANUAL,ARROW:!0,CLOSE_BUTTON:!0,DISABLE_ARIA_EXPANDED:!0};var I=Object.defineProperty,l=(e,r,E,f)=>{for(var i=void 0,d=e.length-1,m;d>=0;d--)(m=e[d])&&(i=m(r,E,i)||i);return i&&I(r,E,i),i};class c extends L{constructor(){super(...arguments),this.trigger=t.TRIGGER,this.showArrow=t.ARROW,this.closeButton=t.CLOSE_BUTTON,this.disableAriaExpanded=t.DISABLE_ARIA_EXPANDED}connectedCallback(){super.connectedCallback(),this.color=t.COLOR,this.showArrow=t.ARROW}}l([p({type:String,reflect:!0})],c.prototype,"trigger");l([p({type:Boolean,attribute:"show-arrow"})],c.prototype,"showArrow");l([p({type:Boolean,reflect:!0,attribute:"close-button"})],c.prototype,"closeButton");l([p({type:Boolean,reflect:!0,attribute:"disable-aria-expanded"})],c.prototype,"disableAriaExpanded");c.register(S);const C=e=>R`
  <div style="height: 50vh; display: inline-block">
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.showPopover()}}">
      open
    </mdc-button>
    <mdc-button @click="${()=>{var r;return(r=document.getElementById(e.id))==null?void 0:r.hidePopover()}}">
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
`,ue={title:"Components/coachmark",tags:["autodocs"],component:"mdc-coachmark",render:C,parameters:{badges:["stable"]},argTypes:{...P,...b,...h.argTypes,...D(["color"])}},n={args:{id:"coachmark",triggerID:"coachmark-trigger",trigger:t.TRIGGER,placement:o.PLACEMENT,color:o.COLOR,visible:o.VISIBLE,offset:o.OFFSET,"focus-trap":o.FOCUS_TRAP,"prevent-scroll":o.PREVENT_SCROLL,"show-arrow":t.ARROW,"close-button":t.CLOSE_BUTTON,interactive:o.INTERACTIVE,delay:o.DELAY,"hide-on-escape":o.HIDE_ON_ESCAPE,"hide-on-blur":o.HIDE_ON_BLUR,"hide-on-outside-click":o.HIDE_ON_CLICK_OUTSIDE,"focus-back-to-trigger":o.FOCUS_BACK,backdrop:o.BACKDROP,flip:o.FLIP,size:o.SIZE,"z-index":o.Z_INDEX,role:o.ROLE}};var s,O,A;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(A=(O=n.parameters)==null?void 0:O.docs)==null?void 0:A.source}}};const _e=["Example"];export{n as Example,_e as __namedExportsOrder,ue as default};
