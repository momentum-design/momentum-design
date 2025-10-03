import{S as $,u as A,k as n,h as I,V as y,q as _,n as E,l as D}from"./iframe-DlUA9Lme.js";import{t as l}from"./if-defined-sRFM4mFi.js";import{d as g,D as T,a as k,c as s}from"./dialog.component-Cp15CVsK.js";import{i as O}from"./manifest-BFiuhsXR.js";import"./index-CUuLJ370.js";import{c as S,s as z}from"./commonArgTypes-BluK8w5L.js";import{t as L,a as w}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./BackdropMixin-B37S2fZg.js";import"./FooterMixin-GujmvYp0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-CPcGYzjc.js";import"./index-BLWS0bNq.js";import"./index-DTrDRi1E.js";import"./button.component-B-Pn-UIi.js";import"./buttonsimple.component-DbCI_knu.js";import"./keys-hFXe221I.js";import"./DisabledMixin-CAO-9s6U.js";import"./TabIndexMixin-D2-rjBj7.js";import"./button.utils-rNW36Ji7.js";import"./index-DWTl0clH.js";const N=$`
  :host {
    --mdc-announcementdialog-illustration-background-color: var(--mds-color-theme-background-solid-secondary-normal);

    background-image: linear-gradient(
      var(--mdc-announcementdialog-illustration-background-color) 0%,
      var(--mdc-announcementdialog-illustration-background-color) 100%
    );
    background-size: 50% 100%;
    background-position: left;
    background-repeat: no-repeat;
    max-height: 100vh;
  }
  :host(:dir(rtl)) {
    background-position: right;
  }
  :host::part(body) {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
  }
  :host::part(illustration-container) {
    width: auto;
  }

  :host mdc-illustration {
    width: auto;
    margin-inline-start: 1rem;
    margin-inline-end: 2rem;
  }
  :host::part(content-container) {
    color: var(--mdc-dialog-description-text-color);
    width: auto;
    margin-inline-start: 2rem;
    margin-inline-end: 1rem;
  }

  @media (max-width: 27rem) {
    :host {
      background-size: 0% 100%;
    }
    :host::part(illustration-container) {
      display: none;
    }
    :host::part(content-container) {
      margin-inline-start: 0;
      margin-inline-end: 0;
    }
  }
`,C=[N],G=A.constructTagName("announcementdialog"),U=["medium","large","xlarge","fullscreen"],f={SIZE:"medium"};var M=Object.defineProperty,v=(t,e,o,m)=>{for(var r=void 0,d=t.length-1,u;d>=0;d--)(u=t[d])&&(r=u(e,o,r)||r);return r&&M(e,o,r),r};const c=class c extends g{constructor(){super(...arguments),this.size=f.SIZE}connectedCallback(){super.connectedCallback(),this.variant=T.DEFAULT}renderHeader(){return n`${I}`}renderBody(){return n`
      <div part="body">
        <div part="illustration-container">
          <slot name="illustration-container">
            <mdc-illustration name="${l(this.illustration)}"></mdc-illustration>
          </slot>
        </div>
        <div part="content-container">
          <slot name="content-container">
            <mdc-text
              part="header-text"
              tagname="${y[this.headerTagName.toUpperCase()]}"
              type="${_.HEADING_MIDSIZE_MEDIUM}"
            >
              ${this.headerText}
            </mdc-text>
            <slot name="description-container"> </slot>
          </slot>
        </div>
      </div>
    `}};c.styles=[...g.styles,...C];let i=c;v([E({type:String,reflect:!0})],i.prototype,"illustration");v([E({type:String,reflect:!0})],i.prototype,"size");i.register(G);const{action:p}=__STORYBOOK_MODULE_ACTIONS__,F=(t,e,o)=>n`<mdc-announcementdialog
    class="${t.class}"
    style="${t.style}"
    id="${t.id}"
    z-index="${t["z-index"]}"
    close-button-aria-label="${t["close-button-aria-label"]}"
    header-text="${t["header-text"]}"
    header-tag-name="${t["header-tag-name"]}"
    role="${t.role}"
    triggerId="${t.triggerId}"
    aria-labelledby="${l(t["aria-labelledby"])}"
    aria-label="${l(t["aria-label"])}"
    ?should-focus-trap-wrap=${t["should-focus-trap-wrap"]}
    size="${t.size}"
    ?visible="${t.visible}"
    ?focus-trap="${t["focus-trap"]}"
    illustration="${l(t.illustration)}"
    @shown="${p("onshown")}"
    @hidden="${p("onhidden")}"
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
  </mdc-announcementdialog>`,Z=(t,e,o)=>n`
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
`,R=t=>n`
  <mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,j=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return n`
    ${Z(t.triggerId,"Click me!",e)}
    ${F(t,R(e),o)}
  `},mt={title:"Widgets/announcementdialog",tags:["autodocs"],component:"mdc-announcementdialog",render:j,argTypes:{...S,...z,id:{control:"text"},triggerId:{control:"text"},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(y)},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(k)},size:{control:"select",options:Object.values(U)},visible:{control:"boolean"},illustration:{control:"select",options:Object.values(D.invert(O)),table:{defaultValue:{summary:"undefined"}}},...L(["--mdc-announcementdialog-illustration-background-color","--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width","--mdc-dialog-height"]),...w(["variant","description-text","description-tag-name"])}},a={args:{size:f.SIZE,"header-text":"Dialog Header","header-tag-name":s.HEADER_TAG_NAME,illustration:"onezerox-better-threetwozero-onboarding-tertiary",visible:!1,"close-button-aria-label":"Close dialog",role:s.ROLE,id:"dialog",triggerId:"dialog-trigger-btn","z-index":s.Z_INDEX,"--mdc-dialog-height":"30rem"}};var b,h,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const ut=["Example"];export{a as Example,ut as __namedExportsOrder,mt as default};
