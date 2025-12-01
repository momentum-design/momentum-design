import{A as u,D as b}from"./index-CyHBjmeP.js";import{V as p,l as g,k as i}from"./iframe-R3L7UhRQ.js";import"./index-CKoCYaJI.js";import{t as n}from"./if-defined-Cp5jgcRU.js";import{i as h}from"./manifest-Blkm73uQ.js";import{c as E,s as x}from"./commonArgTypes-BluK8w5L.js";import{h as $}from"./utils-CO8B6ZcN.js";import{D as A,a}from"./dialog.component-BYcGujeP.js";import"./index-aUyF_Lzy.js";import"./preload-helper-C1FmrZbK.js";import"./index-DlOFhpRI.js";import"./index-DTrDRi1E.js";import"./button.component-D8ytciRr.js";import"./buttonsimple.component-DQsC6Waa.js";import"./TabIndexMixin-217vQpdp.js";import"./DisabledMixin-8iYeFgf6.js";import"./button.utils-rNW36Ji7.js";import"./index-D2rYsLua.js";import"./BackdropMixin-DLlIpirq.js";import"./FooterMixin-fgex11_T.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-C4xD8J-W.js";const{action:l}=__STORYBOOK_MODULE_ACTIONS__,f=(t,e,o)=>i`<mdc-announcementdialog
    class="${t.class}"
    style="${t.style}"
    id="${t.id}"
    z-index="${t["z-index"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    role="${t.role}"
    triggerId="${t.triggerId}"
    aria-labelledby="${n(t["aria-labelledby"])}"
    aria-label="${n(t["aria-label"])}"
    ?should-focus-trap-wrap=${t["should-focus-trap-wrap"]}
    size="${t.size}"
    ?visible="${t.visible}"
    ?focus-trap="${t["focus-trap"]}"
    illustration="${n(t.illustration)}"
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
  </mdc-announcementdialog>`,y=(t,e,o)=>i`
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
`,D=t=>i`
  <mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,_=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return i`
    ${y(t.triggerId,"Click me!",e)}
    ${f(t,D(e),o)}
  `},K={title:"Widgets/announcementdialog",tags:["autodocs"],component:"mdc-announcementdialog",render:_,argTypes:{...E,...x,id:{control:"text"},triggerId:{control:"text"},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(p)},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(A)},size:{control:"select",options:Object.values(u)},visible:{control:"boolean"},illustration:{control:"select",options:Object.values(g.invert(h)),table:{defaultValue:{summary:"undefined"}}},...$(["variant","description-text","description-tag-name"])}},r={args:{size:b.SIZE,"header-text":"Dialog Header","header-tag-name":a.HEADER_TAG_NAME,illustration:"onezerox-better-threetwozero-onboarding-tertiary",visible:!1,"close-button-aria-label":"Close dialog",role:a.ROLE,id:"dialog",triggerId:"dialog-trigger-btn","z-index":a.Z_INDEX,"--mdc-dialog-height":"30rem"}};var d,s,c;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
    '--mdc-dialog-height': '30rem'
  }
}`,...(c=(s=r.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const W=["Example"];export{r as Example,W as __namedExportsOrder,K as default};
