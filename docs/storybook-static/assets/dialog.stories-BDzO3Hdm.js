import"./index-zXgyXbPc.js";import"./index-D3DhXfcW.js";import{i as Q,k as l,D as S}from"./lit-element-D5KKan5q.js";import{t as ee}from"./if-defined-D5BV9-c0.js";import{u as te,C as $,n as a}from"./index-C9z9WAEj.js";import{F as re}from"./FocusTrapMixin-SA_WaGa6.js";import{V as L,T as C}from"./text.constants-ZF0jM5wn.js";import{B as oe,I as ie}from"./button.constants-D0QAbDxL.js";import{C as ae}from"./CardAndDialogFooterMixin-COm20Ox1.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as se,s as le}from"./commonArgTypes-BluK8w5L.js";import{d as ne,h as de}from"./utils-CO8B6ZcN.js";import"./index-BpLT_ydd.js";import"./button.component-DuJ_hCOI.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-C1CVlJGY.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-CcXofQbA.js";import"./button.utils-rNW36Ji7.js";import"./index-Cg5-uccX.js";import"./iframe-Ccp7Xu7n.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CTvKnIXa.js";const ce=Q`
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
    
  :host::part(header),
  :host::part(body),
  :host::part(footer) {
    display: flex;
    align-self: stretch;
  }

  :host::part(header) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
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
`,me=[ce],pe=te.constructTagName("dialog"),J={DEFAULT:"default",PROMOTIONAL:"promotional"},i={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:J.DEFAULT},p=["small","medium","large"],he=["dialog","alertdialog"];class ge{constructor(e){this.dialog=e}setupAriaAttributes(){this.dialog.headerText&&!this.dialog.ariaLabel&&!this.dialog.ariaLabelledby?this.dialog.setAttribute("aria-labelledby",this.dialog.headerText):!this.dialog.headerText&&!this.dialog.ariaLabel&&!this.dialog.ariaLabelledby&&this.dialog.setAttribute("aria-labelledby",this.dialog.triggerId)}createBackdrop(){var d;const e=document.createElement("div");e.classList.add("dialog-backdrop");const r=document.createElement("style");r.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.dialog.zIndex-1};
      }
    `,e.appendChild(r),(d=this.dialog.parentElement)==null||d.appendChild(e),this.dialog.backdropElement=e}}class g{static dispatchDialogEvent(e,r){r.dispatchEvent(new CustomEvent(e,{detail:{show:r.visible},composed:!0,bubbles:!0}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}var ue=Object.defineProperty,s=(t,e,r,d)=>{for(var n=void 0,m=t.length-1,T;m>=0;m--)(T=t[m])&&(n=T(e,r,n)||n);return n&&ue(e,r,n),n};const D=class D extends re(ae($)){constructor(){super(),this.id="",this.triggerId="",this.visible=i.VISIBLE,this.zIndex=i.Z_INDEX,this.size=i.SIZE,this.variant=i.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabelledby=null,this.ariaLabel=null,this.headerText="",this.descriptionText="",this.headerTagName=i.HEADER_TAG_NAME,this.descriptionTagName=i.DESCRIPTION_TAG_NAME,this.role=i.ROLE,this.triggerElement=null,this.backdropElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),this.hideDialog())},this.hideDialog=()=>{this.visible=!1},this.utils=new ge(this),document.addEventListener("keydown",this.onEscapeKeydown)}async firstUpdated(e){super.firstUpdated(e),this.setupTriggerListener(),this.utils.setupAriaAttributes(),this.style.zIndex=`${this.zIndex}`,g.onCreatedDialog(this),this.visible&&await this.handleCreateDialogFirstUpdate()}async disconnectedCallback(){super.disconnectedCallback(),this.removeEventListeners(),document.removeEventListener("keydown",this.onEscapeKeydown),g.onDestroyedDialog(this)}setupTriggerListener(){this.triggerId&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.triggerElement&&this.addEventListener("focus-trap-exit",this.hideDialog))}removeEventListeners(){this.triggerElement&&this.removeEventListener("focus-trap-exit",this.hideDialog)}async updated(e){if(super.updated(e),e.has("visible")){const r=e.get("visible");await this.isOpenUpdated(r,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("aria-label")||e.has("aria-labelledby"))&&this.utils.setupAriaAttributes()}async isOpenUpdated(e,r){var d,n,m;e===r||!this.triggerElement||(r?(this.enabledFocusTrap=!0,this.enabledPreventScroll=!0,this.utils.createBackdrop(),await this.handleCreateDialogFirstUpdate(),this.triggerElement.setAttribute("aria-expanded","true"),this.triggerElement.setAttribute("aria-haspopup",this.triggerElement.getAttribute("aria-haspopup")||"dialog"),g.onShowDialog(this)):((d=this.backdropElement)==null||d.remove(),this.backdropElement=null,(n=this.deactivateFocusTrap)==null||n.call(this),this.triggerElement.removeAttribute("aria-expanded"),this.triggerElement.removeAttribute("aria-haspopup"),(m=this.triggerElement)==null||m.focus(),g.onHideDialog(this)))}async handleCreateDialogFirstUpdate(){var e,r;this.visible&&((e=this.setFocusableElements)==null||e.call(this),await this.updateComplete,(r=this.setInitialFocus)==null||r.call(this))}render(){return l`
      ${this.headerText?l`
      <div part="header">
        <mdc-text
          part="header-text"
          tagname="${L[this.headerTagName.toUpperCase()]}"
          type="${C.BODY_LARGE_BOLD}"  
        >
          ${this.headerText}
        </mdc-text>
        <mdc-text
          part="description-text"
          tagname="${L[this.descriptionTagName.toUpperCase()]}"
          type="${C.BODY_MIDSIZE_REGULAR}"
        >
          ${this.descriptionText??S}
        </mdc-text>
      </div>`:S}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${i.CANCEL_ICON}"
        variant="${oe.TERTIARY}"
        size="${ie[20]}"
        aria-label="${ee(this.closeButtonAriaLabel)||""}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};D.styles=[...$.styles,...me];let o=D;s([a({type:String,reflect:!0})],o.prototype,"id");s([a({type:String,reflect:!0})],o.prototype,"triggerId");s([a({type:Boolean,reflect:!0})],o.prototype,"visible");s([a({type:Number,reflect:!0,attribute:"z-index"})],o.prototype,"zIndex");s([a({type:String,reflect:!0})],o.prototype,"size");s([a({type:String,reflect:!0})],o.prototype,"variant");s([a({type:String,attribute:"close-button-aria-label"})],o.prototype,"closeButtonAriaLabel");s([a({type:String,reflect:!0,attribute:"aria-labelledby"})],o.prototype,"ariaLabelledby");s([a({type:String,reflect:!0,attribute:"aria-label"})],o.prototype,"ariaLabel");s([a({type:String,reflect:!0,attribute:"header-text"})],o.prototype,"headerText");s([a({type:String,reflect:!0,attribute:"description-text"})],o.prototype,"descriptionText");s([a({type:String,reflect:!0,attribute:"header-tag-name"})],o.prototype,"headerTagName");s([a({type:String,reflect:!0,attribute:"description-tag-name"})],o.prototype,"descriptionTagName");s([a({type:String,reflect:!0})],o.prototype,"role");o.register(pe);const A=(t,e)=>l`<mdc-dialog
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
  @shown="${_("onshown")}"
  @hidden="${_("onhidden")}"
>
  ${e}
</mdc-dialog>`,I=(t,e,r)=>l`
  <div
    style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  "
  >
    <mdc-button @click="${r}" id="${t}">${e}</mdc-button>
  </div>
`,be=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return l`
    ${I(t.triggerId,"Click me!",e)}
    ${A(t,l`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
      <mdc-text slot="footer-link">Not rendered</mdc-text>
      <mdc-button slot="footer-button-secondary" @click="${e}">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Primary</mdc-button>
    `)}
  `},ye=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},r=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return l`
    ${I(t.triggerId,"Click me!",e)}
    ${A(t,l`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${r}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
    `)}
  `},ve=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return l`
    ${I(t.triggerId,"Click me!",e)}
    ${A(t,l`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`)}
  `},Je={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:be,parameters:{badges:["stable"]},argTypes:{...se,...le,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(J)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},role:{control:"select",options:Object.values(he)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},...ne(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"]),...de(["shouldWrapFocus"])}},c={id:"dialog","z-index":i.Z_INDEX,role:i.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:i.VARIANT},h={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":i.HEADER_TAG_NAME,"description-tag-name":i.DESCRIPTION_TAG_NAME},u={args:{size:i.SIZE,...c,...h}},b={args:{size:p[0],...c,...h}},y={args:{size:p[1],...c,...h}},v={args:{size:p[2],...c,...h}},E={args:{...c,size:p[0]}},f={render:ve,args:{...c,size:p[0]}},x={render:ye,args:{...c,...h,size:i.SIZE}};var N,z,k;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(k=(z=u.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,O,B;b.parameters={...b.parameters,docs:{...(w=b.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(B=(O=b.parameters)==null?void 0:O.docs)==null?void 0:B.source}}};var F,R,G;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(R=y.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var U,P,Z;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Z=(P=v.parameters)==null?void 0:P.docs)==null?void 0:Z.source}}};var M,V,H;E.parameters={...E.parameters,docs:{...(M=E.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(H=(V=E.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var j,X,Y;f.parameters={...f.parameters,docs:{...(j=f.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Y=(X=f.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var K,q,W;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(W=(q=x.parameters)==null?void 0:q.docs)==null?void 0:W.source}}};const Qe=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons"];export{u as Example,Qe as __namedExportsOrder,Je as default,v as large,y as medium,b as small,x as withSaveCancelButtons,E as withoutHeader,f as withoutHeaderOrFooter};
