import{A as p,D as u}from"./index-CcmAkG5R.js";import{V as b,k as n}from"./iframe-DndUgZyo.js";import"./index-CADVNNqN.js";import"./index-DUjJwPbC.js";import{t as r}from"./if-defined-DO6MNPEi.js";import{i as g}from"./manifest-Blkm73uQ.js";import{c as A,s as h}from"./commonArgTypes-BG7EqI50.js";import{h as E}from"./utils-D6nie9pS.js";import{D as _,a as i}from"./dialog.component-DTP9-QvY.js";import"./index-DaCUxovz.js";import"./preload-helper-C1FmrZbK.js";import"./index-BlpZ535v.js";import"./index-DTrDRi1E.js";import"./IconNameMixin-DMYhtcdN.js";import"./linksimple.component-B0QjFRyY.js";import"./DataAriaLabelMixin-cYwlSv6Q.js";import"./DisabledMixin-AhNA0Xer.js";import"./link.constants-DhvP4vgx.js";import"./index-Cll-x2TM.js";import"./button.component-Ct3sL7Eo.js";import"./buttonsimple.component-DdqHNLXV.js";import"./TabIndexMixin-BYR6zMj6.js";import"./button.utils-rNW36Ji7.js";import"./BackdropMixin-B-hq-sKx.js";import"./FooterMixin-De6C-2Cg.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,$=(t,e,o)=>n`<mdc-announcementdialog
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
  `},q={title:"Widgets/announcementdialog",tags:["autodocs"],component:"mdc-announcementdialog",render:f,argTypes:{...A,...h,id:{control:"text"},triggerId:{control:"text"},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"aria-describedby":{control:"text"},"aria-description":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(b)},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(_)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},illustration:{control:"select",options:Object.keys(g)},...E(["description-tag-name","description-text","disableAriaHasPopup","internalSize","variant"])}},a={args:{size:u.SIZE,"header-text":"Dialog Header","header-tag-name":i.HEADER_TAG_NAME,illustration:"onezerox-better-threetwozero-onboarding-tertiary",visible:!1,"close-button-aria-label":"Close dialog",role:i.ROLE,id:"dialog",triggerId:"dialog-trigger-btn","z-index":i.Z_INDEX,"--mdc-dialog-height":"30rem","disable-aria-haspopup":i.DISABLE_ARIA_HAS_POPUP,"focus-trap":i.FOCUS_TRAP,"should-focus-trap-wrap":!0}};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const J=["Example"];export{a as Example,J as __namedExportsOrder,q as default};
