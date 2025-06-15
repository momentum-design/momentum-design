import"./index-mKWes9k7.js";import{V as B,T as N}from"./index-D1yLszQ-.js";import{i as ue,k as n,D as O}from"./lit-element-D5KKan5q.js";import{t as L}from"./if-defined-D5BV9-c0.js";import{u as be,C as P,n as a}from"./index-C9z9WAEj.js";import{F as ye}from"./FocusTrapMixin-CjzCjsSm.js";import{B as fe,I as ve}from"./button.constants-D0QAbDxL.js";import{C as Ee}from"./CardAndDialogFooterMixin-BckUk-a0.js";import{a as $}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as xe,s as Ae}from"./commonArgTypes-BluK8w5L.js";import{d as Ie,h as De}from"./utils-CO8B6ZcN.js";import"./index-CiljBgYD.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-aJOczxeQ.js";import"./iframe-CWKee9Uj.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CZN2acD1.js";const Te=ue`
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
    width: 100%
  }

  :host::part(header-text) {
    width: calc(100% - 2rem);
    color: var(--mdc-dialog-header-text-color);
  }
    
  :host::part(description-text) {
    color: var(--mdc-dialog-description-text-color);
  }
    
  :host::part(body) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  :host::part(footer) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: flex-end;
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
`,Se=[Te],$e=be.constructTagName("dialog"),ge={DEFAULT:"default",PROMOTIONAL:"promotional"},r={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:ge.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1},h=["small","medium","large"],Ce=["dialog","alertdialog"];class b{static dispatchDialogEvent(e,o){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:!0}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}var Le=Object.defineProperty,s=(t,e,o,d)=>{for(var l=void 0,p=t.length-1,g;p>=0;p--)(g=t[p])&&(l=g(e,o,l)||l);return l&&Le(e,o,l),l};const w=class w extends ye(Ee(P)){constructor(){super(...arguments),this.id="",this.visible=r.VISIBLE,this.zIndex=r.Z_INDEX,this.size=r.SIZE,this.variant=r.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=r.HEADER_TAG_NAME,this.descriptionTagName=r.DESCRIPTION_TAG_NAME,this.role=r.ROLE,this.disableAriaHasPopup=r.DISABLE_ARIA_HAS_POPUP,this.focusTrap=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),this.hideDialog())},this.hideDialog=()=>{this.visible=!1},this.showDialog=()=>{this.visible=!0}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var e,o,d;super.disconnectedCallback(),document.removeEventListener("keydown",this.onEscapeKeydown),(e=this.backdropElement)==null||e.remove(),this.backdropElement=null,(o=this.deactivateFocusTrap)==null||o.call(this),(d=this.triggerElement)==null||d.setAttribute("aria-expanded","false"),this.focusBackToTrigger(),b.onDestroyedDialog(this)}async firstUpdated(e){super.firstUpdated(e),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.style.zIndex=`${this.zIndex}`,b.onCreatedDialog(this)}async updated(e){if(super.updated(e),e.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("ariaLabel")||e.has("ariaLabelledBy")||e.has("ariaDescribedBy")||e.has("ariaDescription")||e.has("headerText")||e.has("descriptionText"))&&this.setupAriaLabelledDescribedBy()}setupAriaHasPopup(){var e,o;this.disableAriaHasPopup||(o=this.triggerElement)==null||o.setAttribute("aria-haspopup",((e=this.triggerElement)==null?void 0:e.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var d;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,e.appendChild(o),(d=this.parentElement)==null||d.appendChild(e),this.backdropElement=e}async isOpenUpdated(e,o){var d,l,p,g,_,z;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.enabledPreventScroll=!0,this.createBackdrop(),await this.updateComplete,(d=this.activateFocusTrap)==null||d.call(this),(l=this.setInitialFocus)==null||l.call(this),(p=this.triggerElement)==null||p.setAttribute("aria-expanded","true"),b.onShowDialog(this)):!o&&e&&((g=this.backdropElement)==null||g.remove(),this.backdropElement=null,(_=this.deactivateFocusTrap)==null||_.call(this),(z=this.triggerElement)==null||z.setAttribute("aria-expanded","false"),this.focusBackToTrigger(),b.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return n`
      ${this.headerText?n`
      <div part="header-section">
        <div part="header">
          <slot name="header-prefix"></slot>
          <mdc-text
            part="header-text"
            tagname="${B[this.headerTagName.toUpperCase()]}"
            type="${N.BODY_LARGE_BOLD}"  
          >
            ${this.headerText}
          </mdc-text>
        </div>
        ${this.descriptionText?n`<mdc-text
          part="description-text"
          tagname="${B[this.descriptionTagName.toUpperCase()]}"
          type="${N.BODY_MIDSIZE_REGULAR}"
        >
        ${this.descriptionText}
        </mdc-text>`:O}
      </div>`:O}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${r.CANCEL_ICON}"
        variant="${fe.TERTIARY}"
        size="${ve[20]}"
        aria-label="${L(this.closeButtonAriaLabel)||""}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};w.styles=[...P.styles,...Se];let i=w;s([a({type:String,reflect:!0})],i.prototype,"id");s([a({type:String,reflect:!0})],i.prototype,"triggerId");s([a({type:Boolean,reflect:!0})],i.prototype,"visible");s([a({type:Number,reflect:!0,attribute:"z-index"})],i.prototype,"zIndex");s([a({type:String,reflect:!0})],i.prototype,"size");s([a({type:String,reflect:!0})],i.prototype,"variant");s([a({type:String,attribute:"close-button-aria-label"})],i.prototype,"closeButtonAriaLabel");s([a({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");s([a({type:String,reflect:!0,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledby");s([a({type:String,reflect:!0,attribute:"aria-describedby"})],i.prototype,"ariaDescribedBy");s([a({type:String,reflect:!0,attribute:"aria-description"})],i.prototype,"ariaDescription");s([a({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");s([a({type:String,reflect:!0,attribute:"description-text"})],i.prototype,"descriptionText");s([a({type:String,reflect:!0,attribute:"header-tag-name"})],i.prototype,"headerTagName");s([a({type:String,reflect:!0,attribute:"description-tag-name"})],i.prototype,"descriptionTagName");s([a({type:String,reflect:!0})],i.prototype,"role");s([a({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],i.prototype,"disableAriaHasPopup");i.register($e);const u=(t,e)=>n`<mdc-dialog
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
  aria-labelledby="${L(t["aria-labelledby"])}"
  aria-label="${L(t["aria-label"])}"
  ?should-focus-trap-wrap=${t["should-focus-trap-wrap"]}
  size="${t.size}"
  ?visible="${t.visible}"
  variant="${t.variant}"
  @shown="${$("onshown")}"
  @hidden="${$("onhidden")}"
>
  ${e}
</mdc-dialog>`,C=(t,e,o)=>n`
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
`,k=(t,e=!1)=>n`
${e&&n`
  <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
`}
<div slot="dialog-body">
  <p>This is the body content of the dialog.</p>
</div>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
<mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,ke=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return n`
    ${C(t.triggerId,"Click me!",e)}
    ${u(t,k(e))}
  `},we=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return n`
    ${C(t.triggerId,"Click me!",e)}
    ${u(t,k(e,!0))}
  `},_e=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return n`
    ${C(t.triggerId,"Click me!",e)}
    ${u(t,n`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${o}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
    `)}
  `},ze=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return n`
    ${C(t.triggerId,"Click me!",e)}
    ${u(t,n`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`)}
  `},pt={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:ke,parameters:{badges:["stable"]},argTypes:{...xe,...Ae,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(ge)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},role:{control:"select",options:Object.values(Ce)},size:{control:"select",options:Object.values(h)},visible:{control:"boolean"},...Ie(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"]),...De(["focusTrap"])}},c={id:"dialog","z-index":r.Z_INDEX,role:r.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:r.VARIANT},m={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":r.HEADER_TAG_NAME,"description-tag-name":r.DESCRIPTION_TAG_NAME},y={args:{size:r.SIZE,...c,...m}},f={args:{size:h[0],...c,...m}},v={args:{size:h[1],...c,...m}},E={args:{size:h[2],...c,...m}},x={args:{...c,size:h[0]}},A={render:ze,args:{...c,size:h[0]}},I={render:_e,args:{...c,...m,size:r.SIZE}},D={render:we,args:{...c,...m,size:r.SIZE}},T={render:t=>n`
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
    @shown="${$("onshown")}"
    @hidden="${$("onhidden")}"
  >
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  `},S={render:t=>n`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${t.mountDialog?u(t,k()):""}
    `,args:{...c,...m,size:r.SIZE,mountDialog:!0,visible:!0}};var R,H,Z;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Z=(H=y.parameters)==null?void 0:H.docs)==null?void 0:Z.source}}};var F,U,G;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(U=f.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var M,V,j;v.parameters={...v.parameters,docs:{...(M=v.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(j=(V=v.parameters)==null?void 0:V.docs)==null?void 0:j.source}}};var W,X,Y;E.parameters={...E.parameters,docs:{...(W=E.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var K,q,J;x.parameters={...x.parameters,docs:{...(K=x.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(J=(q=x.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,ee,te;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ie,re;I.parameters={...I.parameters,docs:{...(oe=I.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(re=(ie=I.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,se,ne;D.parameters={...D.parameters,docs:{...(ae=D.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ne=(se=D.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var de,le,ce;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
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
}`,...(ce=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,pe,he;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
  render: (args: Args) => html\`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      \${args.mountDialog ? createDialog(args, dialogBodyContent()) : ''}
    \`,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE,
    mountDialog: true,
    visible: true
  }
}`,...(he=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:he.source}}};const ht=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount"];export{y as Example,S as MountUnmount,T as WithoutTriggerElement,ht as __namedExportsOrder,pt as default,E as large,v as medium,f as small,D as withCustomHeader,I as withSaveCancelButtons,x as withoutHeader,A as withoutHeaderOrFooter};
