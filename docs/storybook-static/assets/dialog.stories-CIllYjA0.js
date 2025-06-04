import"./index-AxMa3VPv.js";import"./index-D3DhXfcW.js";import{i as ne,k as l,D as L}from"./lit-element-D5KKan5q.js";import{t as de}from"./if-defined-D5BV9-c0.js";import{u as ce,C as w,n as a}from"./index-C9z9WAEj.js";import{F as me}from"./FocusTrapMixin-SA_WaGa6.js";import{V as k,T as z}from"./text.constants-ZF0jM5wn.js";import{B as pe,I as he}from"./button.constants-D0QAbDxL.js";import{C as ge}from"./CardAndDialogFooterMixin-COm20Ox1.js";import{a as I}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as ue,s as be}from"./commonArgTypes-BluK8w5L.js";import{d as ye,h as ve}from"./utils-CO8B6ZcN.js";import"./index-B3ecm86i.js";import"./button.component-D7MTmNXw.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-E_-uA6p2.js";import"./iframe-CEdVvyfk.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CZN2acD1.js";const fe=ne`
  :host {
    --mdc-dialog-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-dialog-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-dialog-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-dialog-description-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-dialog-elevation-3: var(--mds-elevation-3);
    --mdc-dialog-width: 27rem; /* Default to small */
    
    background-color: var(--mdc-dialog-primary-background-color);
    border: 0.0625rem solid var(--mdc-dialog-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-dialog-elevation-3);
    display: none;
    padding: 1rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%,50%);
  }


  :host([variant='promotional']){
    --mdc-dialog-border-color: var(--mds-color-theme-outline-promotion-normal);
  }
    
  :host([visible]) {
    display: flex;
      
  }

  :host([size='medium']) {
    --mdc-dialog-width: 41rem;
  }

  :host([size='large']) {
    --mdc-dialog-width: 62rem;
  }

  :host {
    width: var(--mdc-dialog-width);
    max-width: 100%;
  }
    
  :host::part(header-section),
  :host::part(body),
  :host::part(footer) {
    display: flex;
    align-self: stretch;
  }

  :host::part(header-section) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  :host::part(header) {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  :host::part(header-text) {
    width: 23.625rem;
    color: var(--mdc-dialog-header-text-color);
  }
    
  :host::part(description-text) {
    color: var(--mdc-dialog-description-text-color);
  }
    
  :host::part(body) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%
  }

  :host::part(footer) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
  }

  ::slotted([slot='footer-link']), 
  ::slotted([slot='footer-button-primary']), 
  ::slotted([slot='footer-button-secondary']){
    margin-bottom: 0.5rem;
  }

  :host::part(dialog-close-btn) {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
  }
  
  :host(:dir(rtl))::part(dialog-close-btn) {
    right: auto;
    left: 1rem;
  }
    
  mdc-text::part(text) {
    margin: 0;
  }
`,Ee=[fe],xe=ce.constructTagName("dialog"),se={DEFAULT:"default",PROMOTIONAL:"promotional"},r={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:se.DEFAULT},m=["small","medium","large"],Ae=["dialog","alertdialog"];class Ie{constructor(e){this.dialog=e}setupAriaAttributes(){this.dialog.headerText&&!this.dialog.ariaLabel&&!this.dialog.ariaLabelledby?this.dialog.setAttribute("aria-labelledby",this.dialog.headerText):!this.dialog.headerText&&!this.dialog.ariaLabel&&!this.dialog.ariaLabelledby&&this.dialog.setAttribute("aria-labelledby",this.dialog.triggerId)}createBackdrop(){var c;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.dialog.zIndex-1};
      }
    `,e.appendChild(o),(c=this.dialog.parentElement)==null||c.appendChild(e),this.dialog.backdropElement=e}}class h{static dispatchDialogEvent(e,o){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:!0}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}var Te=Object.defineProperty,s=(t,e,o,c)=>{for(var n=void 0,S=t.length-1,C;S>=0;S--)(C=t[S])&&(n=C(e,o,n)||n);return n&&Te(e,o,n),n};const $=class $ extends me(ge(w)){constructor(){super(),this.id="",this.triggerId="",this.visible=r.VISIBLE,this.zIndex=r.Z_INDEX,this.size=r.SIZE,this.variant=r.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabelledby=null,this.ariaLabel=null,this.headerText="",this.descriptionText="",this.headerTagName=r.HEADER_TAG_NAME,this.descriptionTagName=r.DESCRIPTION_TAG_NAME,this.role=r.ROLE,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),this.hideDialog())},this.hideDialog=()=>{this.visible=!1},this.showDialog=()=>{this.visible=!0},this.utils=new Ie(this),document.addEventListener("keydown",this.onEscapeKeydown)}async firstUpdated(e){super.firstUpdated(e),this.setupTriggerListener(),this.utils.setupAriaAttributes(),this.style.zIndex=`${this.zIndex}`,h.onCreatedDialog(this),this.visible&&await this.handleCreateDialogFirstUpdate()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners(),document.removeEventListener("keydown",this.onEscapeKeydown),h.onDestroyedDialog(this)}setupTriggerListener(){if(!this.triggerId){this.addEventListener("focus-trap-exit",this.hideDialog);return}this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.triggerElement&&this.addEventListener("focus-trap-exit",this.hideDialog)}removeEventListeners(){this.removeEventListener("focus-trap-exit",this.hideDialog)}async updated(e){if(super.updated(e),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("aria-label")||e.has("aria-labelledby"))&&this.utils.setupAriaAttributes()}async isOpenUpdated(e,o){var c,n;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.enabledFocusTrap=!0,this.enabledPreventScroll=!0,this.utils.createBackdrop(),await this.handleCreateDialogFirstUpdate(),this.triggerElement&&(this.triggerElement.setAttribute("aria-expanded","true"),this.triggerElement.setAttribute("aria-haspopup",this.triggerElement.getAttribute("aria-haspopup")||"dialog")),h.onShowDialog(this)):!o&&e&&((c=this.backdropElement)==null||c.remove(),this.backdropElement=null,(n=this.deactivateFocusTrap)==null||n.call(this),this.triggerElement?(this.triggerElement.removeAttribute("aria-expanded"),this.triggerElement.removeAttribute("aria-haspopup"),this.triggerElement.focus()):this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus(),h.onHideDialog(this)))}async handleCreateDialogFirstUpdate(){var e,o;this.visible&&((e=this.setFocusableElements)==null||e.call(this),await this.updateComplete,(o=this.setInitialFocus)==null||o.call(this))}render(){return l`
      ${this.headerText?l`
      <div part="header-section">
        <div part="header">
          <slot name="header-prefix"></slot>
          <mdc-text
            part="header-text"
            tagname="${k[this.headerTagName.toUpperCase()]}"
            type="${z.BODY_LARGE_BOLD}"  
          >
            ${this.headerText}
          </mdc-text>
        </div>
        <mdc-text
          part="description-text"
          tagname="${k[this.descriptionTagName.toUpperCase()]}"
          type="${z.BODY_MIDSIZE_REGULAR}"
        >
          ${this.descriptionText??L}
        </mdc-text>
      </div>`:L}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${r.CANCEL_ICON}"
        variant="${pe.TERTIARY}"
        size="${he[20]}"
        aria-label="${de(this.closeButtonAriaLabel)||""}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};$.styles=[...w.styles,...Ee];let i=$;s([a({type:String,reflect:!0})],i.prototype,"id");s([a({type:String,reflect:!0})],i.prototype,"triggerId");s([a({type:Boolean,reflect:!0})],i.prototype,"visible");s([a({type:Number,reflect:!0,attribute:"z-index"})],i.prototype,"zIndex");s([a({type:String,reflect:!0})],i.prototype,"size");s([a({type:String,reflect:!0})],i.prototype,"variant");s([a({type:String,attribute:"close-button-aria-label"})],i.prototype,"closeButtonAriaLabel");s([a({type:String,reflect:!0,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledby");s([a({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");s([a({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");s([a({type:String,reflect:!0,attribute:"description-text"})],i.prototype,"descriptionText");s([a({type:String,reflect:!0,attribute:"header-tag-name"})],i.prototype,"headerTagName");s([a({type:String,reflect:!0,attribute:"description-tag-name"})],i.prototype,"descriptionTagName");s([a({type:String,reflect:!0})],i.prototype,"role");i.register(xe);const T=(t,e)=>l`<mdc-dialog
  class="${t.class}"
  style="${t.style}"
  id="${t.id}"
  z-index="${t["z-index"]}"
  close-button-aria-label="${t["close-button-aria-label"]}"
  header-text="${t["header-text"]}"
  description-text="${t["description-text"]}"
  header-tag-name="${t["header-tag-name"]}"
  description-tag-name="${t["description-tag-name"]}"
  role="${t.role}"
  triggerId="${t.triggerId}"
  aria-labelledby="${t["aria-labelledby"]}"
  aria-label="${t["aria-label"]}"
  size="${t.size}"
  ?visible="${t.visible}"
  variant="${t.variant}"
  @shown="${I("onshown")}"
  @hidden="${I("onhidden")}"
>
  ${e}
</mdc-dialog>`,D=(t,e,o)=>l`
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
`,le=(t,e=!1)=>l`
${e&&l`
  <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
`}
<div slot="dialog-body">
  <p>This is the body content of the dialog.</p>
</div>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
<mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,De=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return l`
    ${D(t.triggerId,"Click me!",e)}
    ${T(t,le(e))}
  `},Se=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return l`
    ${D(t.triggerId,"Click me!",e)}
    ${T(t,le(e,!0))}
  `},$e=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return l`
    ${D(t.triggerId,"Click me!",e)}
    ${T(t,l`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${o}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
    `)}
  `},Ce=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return l`
    ${D(t.triggerId,"Click me!",e)}
    ${T(t,l`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`)}
  `},nt={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:De,parameters:{badges:["stable"]},argTypes:{...ue,...be,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(se)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},role:{control:"select",options:Object.values(Ae)},size:{control:"select",options:Object.values(m)},visible:{control:"boolean"},...ye(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"]),...ve(["shouldWrapFocus"])}},d={id:"dialog","z-index":r.Z_INDEX,role:r.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:r.VARIANT},p={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":r.HEADER_TAG_NAME,"description-tag-name":r.DESCRIPTION_TAG_NAME},g={args:{size:r.SIZE,...d,...p}},u={args:{size:m[0],...d,...p}},b={args:{size:m[1],...d,...p}},y={args:{size:m[2],...d,...p}},v={args:{...d,size:m[0]}},f={render:Ce,args:{...d,size:m[0]}},E={render:$e,args:{...d,...p,size:r.SIZE}},x={render:Se,args:{...d,...p,size:r.SIZE}},A={render:t=>l`
  <p>Toggle the visible property to show/hide the dialog</p>
  <mdc-dialog
    id="dialog"
    aria-label="dialog"
    size="small"
    variant="default"
    close-button-aria-label="Close dialog"
    ?visible="${t.visible}"
    z-index="100"
    role="dialog"
    header-text="Dialog Header"
    description-text="This is a dialog description. It is only present if the header is present."
    header-tag-name="h2"
    description-tag-name="p"
    @shown="${I("onshown")}"
    @hidden="${I("onhidden")}"
  >
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  `};var _,N,O;g.parameters={...g.parameters,docs:{...(_=g.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var B,F,R;u.parameters={...u.parameters,docs:{...(B=u.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(R=(F=u.parameters)==null?void 0:F.docs)==null?void 0:R.source}}};var P,U,Z;b.parameters={...b.parameters,docs:{...(P=b.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Z=(U=b.parameters)==null?void 0:U.docs)==null?void 0:Z.source}}};var G,H,M;y.parameters={...y.parameters,docs:{...(G=y.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(M=(H=y.parameters)==null?void 0:H.docs)==null?void 0:M.source}}};var V,j,W;v.parameters={...v.parameters,docs:{...(V=v.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(W=(j=v.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var X,Y,K;f.parameters={...f.parameters,docs:{...(X=f.parameters)==null?void 0:X.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(K=(Y=f.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var q,J,Q;E.parameters={...E.parameters,docs:{...(q=E.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(Q=(J=E.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,oe;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(oe=(te=x.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,re,ae;A.parameters={...A.parameters,docs:{...(ie=A.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: (args: Args) => html\`
  <p>Toggle the visible property to show/hide the dialog</p>
  <mdc-dialog
    id="dialog"
    aria-label="dialog"
    size="small"
    variant="default"
    close-button-aria-label="Close dialog"
    ?visible="\${args.visible}"
    z-index="100"
    role="dialog"
    header-text="Dialog Header"
    description-text="This is a dialog description. It is only present if the header is present."
    header-tag-name="h2"
    description-tag-name="p"
    @shown="\${action('onshown')}"
    @hidden="\${action('onhidden')}"
  >
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  \`
}`,...(ae=(re=A.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};const dt=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement"];export{g as Example,A as WithoutTriggerElement,dt as __namedExportsOrder,nt as default,y as large,b as medium,u as small,x as withCustomHeader,E as withSaveCancelButtons,v as withoutHeader,f as withoutHeaderOrFooter};
