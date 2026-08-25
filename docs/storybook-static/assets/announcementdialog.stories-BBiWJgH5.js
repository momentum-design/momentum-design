import{g as b,h as m,A as p,i as g,j as a,k as n,t as r}from"./iframe-DKmoi846.js";import{i as A}from"./manifest-Cv42XbQC.js";import{c as h,s as E}from"./commonArgTypes-BG7EqI50.js";import{h as _}from"./utils-B5QUENNQ.js";import"./preload-helper-C1FmrZbK.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,$=(e,t,o)=>n`<mdc-announcementdialog
    class="${e.class}"
    style="${e.style}"
    id="${e.id}"
    z-index="${e["z-index"]}"
    close-button-aria-label="${e["close-button-aria-label"]}"
    header-text="${e["header-text"]}"
    header-tag-name="${e["header-tag-name"]}"
    role="${e.role}"
    triggerId="${e.triggerId}"
    aria-describedby="${r(e["aria-describedby"])}"
    aria-description="${r(e["aria-description"])}"
    aria-labelledby="${r(e["aria-labelledby"])}"
    aria-label="${r(e["aria-label"])}"
    ?should-focus-trap-wrap=${e["should-focus-trap-wrap"]}
    size="${e.size}"
    ?visible="${e.visible}"
    ?focus-trap="${e["focus-trap"]}"
    illustration="${r(e.illustration)}"
    @shown="${l("onshown")}"
    @hidden="${l("onhidden")}"
    @close="${o}"
  >
    ${t}
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
  </mdc-announcementdialog>`,x=(e,t,o)=>n`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${o}" id="${e}">${t}</mdc-button>
  </div>
`,y=e=>n`
  <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
`,I=e=>{const t=()=>{document.getElementById(e.id).toggleAttribute("visible")},o=()=>{document.getElementById(e.id).removeAttribute("visible")};return n`
    ${x(e.triggerId,"Click me!",t)}
    ${$(e,y(t),o)}
  `},T={title:"Widgets/announcementdialog",tags:["autodocs"],component:"mdc-announcementdialog",render:I,argTypes:{...h,...E,id:{control:"text"},triggerId:{control:"text"},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"aria-describedby":{control:"text"},"aria-description":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(b)},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(m)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},illustration:{control:"select",options:Object.keys(A)},..._(["description-tag-name","description-text","disableAriaHasPopup","internalSize","variant"])}},i={args:{size:g.SIZE,"header-text":"Dialog Header","header-tag-name":a.HEADER_TAG_NAME,illustration:"onezerox-better-threetwozero-onboarding-tertiary",visible:!1,"close-button-aria-label":"Close dialog",role:a.ROLE,id:"dialog",triggerId:"dialog-trigger-btn","z-index":a.Z_INDEX,"--mdc-dialog-height":"30rem","disable-aria-haspopup":a.DISABLE_ARIA_HAS_POPUP,"focus-trap":a.FOCUS_TRAP,"should-focus-trap-wrap":!0}};var s,d,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(c=(d=i.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const v=["Example"];export{i as Example,v as __namedExportsOrder,T as default};
