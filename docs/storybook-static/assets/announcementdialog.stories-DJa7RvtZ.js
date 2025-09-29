import{i as $,u as A,k as i,D as I,n as y}from"./iframe-QSDyrAdE.js";import{t as l}from"./if-defined-ClteKkfF.js";import{V as f,T as _}from"./index-COmTsnFb.js";import{d as p,D,a as T,c as s}from"./dialog.component-CWR1Zj5T.js";import{i as k}from"./manifest-SP0SGL6_.js";import"./index-BNatOgDM.js";import{l as O}from"./lodash-0eMTV1fl.js";import{c as S,s as z}from"./commonArgTypes-BluK8w5L.js";import{t as L,a as w}from"./utils-CFOyPOhY.js";import"./preload-helper-C1FmrZbK.js";import"./BackdropMixin-Aq_yjMkc.js";import"./button.constants-WVm7tXwE.js";import"./buttonsimple.constants-DOebIZq9.js";import"./roles-CJI3JVG-.js";import"./FooterMixin-fS23Qusq.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-B_8rDj9z.js";import"./index-B0QaVnKo.js";import"./index-EVhd65vU.js";import"./index-DTrDRi1E.js";import"./button.component-C1j5LlK8.js";import"./buttonsimple.component-_HsIFC4Q.js";import"./keys-hFXe221I.js";import"./DisabledMixin-D6enQAXq.js";import"./TabIndexMixin-BVjLDI6m.js";import"./button.utils-rNW36Ji7.js";import"./index-fgDsCE7Q.js";const N=$`
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
`,C=[N],G=A.constructTagName("announcementdialog"),U=["medium","large","xlarge","fullscreen"],E={SIZE:"medium"};var M=Object.defineProperty,v=(t,e,o,m)=>{for(var r=void 0,d=t.length-1,u;d>=0;d--)(u=t[d])&&(r=u(e,o,r)||r);return r&&M(e,o,r),r};const c=class c extends p{constructor(){super(...arguments),this.size=E.SIZE}connectedCallback(){super.connectedCallback(),this.variant=D.DEFAULT}renderHeader(){return i`${I}`}renderBody(){return i`
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
              tagname="${f[this.headerTagName.toUpperCase()]}"
              type="${_.HEADING_MIDSIZE_MEDIUM}"
            >
              ${this.headerText}
            </mdc-text>
            <slot name="description-container"> </slot>
          </slot>
        </div>
      </div>
    `}};c.styles=[...p.styles,...C];let n=c;v([y({type:String,reflect:!0})],n.prototype,"illustration");v([y({type:String,reflect:!0})],n.prototype,"size");n.register(G);const{action:g}=__STORYBOOK_MODULE_ACTIONS__,F=(t,e,o)=>i`<mdc-announcementdialog
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
    @shown="${g("onshown")}"
    @hidden="${g("onhidden")}"
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
  </mdc-announcementdialog>`,Z=(t,e,o)=>i`
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
`,R=t=>i`
  <mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,j=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return i`
    ${Z(t.triggerId,"Click me!",e)}
    ${F(t,R(e),o)}
  `},xt={title:"Widgets/announcementdialog",tags:["autodocs"],component:"mdc-announcementdialog",render:j,argTypes:{...S,...z,id:{control:"text"},triggerId:{control:"text"},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"header-tag-name":{control:"select",options:Object.values(f)},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(T)},size:{control:"select",options:Object.values(U)},visible:{control:"boolean"},illustration:{control:"select",options:Object.values(O.invert(k)),table:{defaultValue:{summary:"undefined"}}},...L(["--mdc-announcementdialog-illustration-background-color","--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width","--mdc-dialog-height"]),...w(["variant","description-text","description-tag-name"])}},a={args:{size:E.SIZE,"header-text":"Dialog Header","header-tag-name":s.HEADER_TAG_NAME,illustration:"onezerox-better-threetwozero-onboarding-tertiary",visible:!1,"close-button-aria-label":"Close dialog",role:s.ROLE,id:"dialog",triggerId:"dialog-trigger-btn","z-index":s.Z_INDEX,"--mdc-dialog-height":"30rem"}};var b,h,x;a.parameters={...a.parameters,docs:{...(b=a.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(x=(h=a.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const yt=["Example"];export{a as Example,yt as __namedExportsOrder,xt as default};
