import{A as p,D as u}from"./index-ihiqFK0W.js";import{V as b,k as n}from"./iframe-BCdSJdD4.js";import"./index-CQpN54B_.js";import"./index-BrVcPg2H.js";import{t as r}from"./if-defined-DQb3B5M8.js";import{i as g}from"./manifest-Cv42XbQC.js";import{c as A,s as h}from"./commonArgTypes-BG7EqI50.js";import{h as E}from"./utils-B5QUENNQ.js";import{D as _,a as i}from"./dialog.component-B6a8LMXI.js";import"./index-BZmKHQhu.js";import"./preload-helper-C1FmrZbK.js";import"./index-o2tsQtMC.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-CfbucfuT.js";import"./linksimple.component-BUPNhpyV.js";import"./DataAriaLabelMixin-DED7IR2p.js";import"./DisabledMixin-8GB5GwzM.js";import"./link.constants-Dg-wFu9H.js";import"./index-gx25Rgqu.js";import"./button.component-v0FpL2sn.js";import"./buttonsimple.component-s2gDNcdN.js";import"./KeyDownHandledMixin-D9ThXIq0.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-Bh2tQTV0.js";import"./FooterMixin-C-o67BmE.js";import"./query-assigned-elements-CY4plt86.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,$=(t,e,o)=>n`<mdc-announcementdialog
    class="${t.class}"
    style="${t.style}"
    id="${t.id}"
    z-index="${t["z-index"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    role="${t.role}"
    triggerId="${t.triggerId}"
    aria-describedby="${r(t["aria-describedby"])}"
    aria-description="${r(t["aria-description"])}"
    aria-labelledby="${r(t["aria-labelledby"])}"
    aria-label="${r(t["aria-label"])}"
    ?should-focus-trap-wrap=${t["should-focus-trap-wrap"]}
    size="${t.size}"
    ?visible="${t.visible}"
    ?focus-trap="${t["focus-trap"]}"
    illustration="${r(t.illustration)}"
    @shown="${l("onshown")}"
    @hidden="${l("onhidden")}"
    @close="${o}"
  >
    ${e}
    <mdc-text slot="description-container" type="body-large-regular">
      Introduction sentence.
      <br />
      Feature description.
      <br />
      Promote the feature, add some delight 🎉 and let the user know any top level information but don't be
      instructional or technical.
      <br />
      Max 8 lines of copy with or without breaks.
    </mdc-text>
  </mdc-announcementdialog>`,x=(t,e,o)=>n`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${o}" id="${t}">${e}</mdc-button>
  </div>
`,y=t=>n`
  <mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,f=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return n`
    ${x(t.triggerId,"Click me!",e)}
    ${$(t,y(e),o)}
  `},Y={title:"Widgets/announcementdialog",tags:["autodocs"],component:"mdc-announcementdialog",render:f,argTypes:{...A,...h,id:{control:"text"},triggerId:{control:"text"},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"aria-describedby":{control:"text"},"aria-description":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(b)},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(_)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},illustration:{control:"select",options:Object.keys(g)},...E(["description-tag-name","description-text","disableAriaHasPopup","internalSize","variant"])}},a={args:{size:u.SIZE,"header-text":"Dialog Header","header-tag-name":i.HEADER_TAG_NAME,illustration:"onezerox-better-threetwozero-onboarding-tertiary",visible:!1,"close-button-aria-label":"Close dialog",role:i.ROLE,id:"dialog",triggerId:"dialog-trigger-btn","z-index":i.Z_INDEX,"--mdc-dialog-height":"30rem","disable-aria-haspopup":i.DISABLE_ARIA_HAS_POPUP,"focus-trap":i.FOCUS_TRAP,"should-focus-trap-wrap":!0}};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    'header-text': 'Dialog Header',
    'header-tag-name': DIALOG_DEFAULTS.HEADER_TAG_NAME,
    illustration: 'onezerox-better-threetwozero-onboarding-tertiary',
    visible: false,
    'close-button-aria-label': 'Close dialog',
    role: DIALOG_DEFAULTS.ROLE,
    id: 'dialog',
    triggerId: 'dialog-trigger-btn',
    'z-index': DIALOG_DEFAULTS.Z_INDEX,
    '--mdc-dialog-height': '30rem',
    'disable-aria-haspopup': DIALOG_DEFAULTS.DISABLE_ARIA_HAS_POPUP,
    'focus-trap': DIALOG_DEFAULTS.FOCUS_TRAP,
    'should-focus-trap-wrap': true
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const q=["Example"];export{a as Example,q as __namedExportsOrder,Y as default};
