import"./index-C0S93Icn.js";import{V as F,T as H}from"./index-BrLJ_9IK.js";import{i as Pe,k as r,D as R}from"./lit-element-D5KKan5q.js";import{t as w}from"./if-defined-D5BV9-c0.js";import{u as Oe,C as G,n}from"./index-C9z9WAEj.js";import{c as Ne,F as Ze}from"./popover.component-Bw5zQP8M.js";import{B as Fe,I as He}from"./button.constants-D0QAbDxL.js";import{C as Re}from"./CardAndDialogFooterMixin-Bxo6tU4P.js";import{a as _}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as Ge,s as Ue}from"./commonArgTypes-BluK8w5L.js";import{t as Me}from"./utils-CF1irry3.js";import"./index-CYnOTZHM.js";import"./index-BBDWP6G2.js";import"./index-DfhuLnrm.js";import"./button.component-Cx4by9Nb.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-DTw2LNsX.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-Cx7wvr8C.js";import"./button.utils-rNW36Ji7.js";import"./index-DgVPg-O5.js";import"./iframe-CgsJliCm.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-C-I9azzj.js";import"./v4-CmTdKEVZ.js";const We=Oe.constructTagName("dialog"),we={DEFAULT:"default",PROMOTIONAL:"promotional"},s={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:we.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1,FOCUS_TRAP:!0},m=["small","medium","large","xlarge","fullscreen"],Ve=["dialog","alertdialog"];class y{static dispatchDialogEvent(e,o,i=!0){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:i}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCloseDialog(e,o=!0){this.dispatchDialogEvent("close",e,o)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}const je=Pe`
  :host {
    --mdc-dialog-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-dialog-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-dialog-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-dialog-description-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-dialog-elevation-3: var(--mds-elevation-3);
    --mdc-dialog-width: 27rem; /* Default to small */
    --mdc-dialog-padding: 1.5rem;

    background-color: var(--mdc-dialog-primary-background-color);
    border: 0.0625rem solid var(--mdc-dialog-border-color);
    border-radius: 0.5rem;
    filter: var(--mdc-dialog-elevation-3);
    display: none;
    padding: var(--mdc-dialog-padding);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translate(50%, 50%);
  }

  :host([variant='promotional']) {
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

  :host([size='xlarge']) {
    --mdc-dialog-width: 90%;
  }

  @media (max-width: 62rem) {
    :host([size='xlarge']) {
      --mdc-dialog-width: 100%;
    }
  }

  :host([size='fullscreen']) {
    --mdc-dialog-width: 100%;
    height: 100%;
    border: none;
    border-radius: 0;
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
    width: 100%;
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
    top: var(--mdc-dialog-padding);
    right: var(--mdc-dialog-padding);
  }

  :host(:dir(rtl))::part(dialog-close-btn) {
    right: auto;
    left: var(--mdc-dialog-padding);
  }

  mdc-text::part(text) {
    margin: 0;
  }
`,Xe=[je];var Ye=Object.defineProperty,d=(t,e,o,i)=>{for(var c=void 0,p=t.length-1,b;p>=0;p--)(b=t[p])&&(c=b(e,o,c)||c);return c&&Ye(e,o,c),c};const O=class O extends Ne(Ze(Re(G))){constructor(){super(...arguments),this.id="",this.visible=s.VISIBLE,this.zIndex=s.Z_INDEX,this.size=s.SIZE,this.variant=s.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=s.HEADER_TAG_NAME,this.descriptionTagName=s.DESCRIPTION_TAG_NAME,this.role=s.ROLE,this.disableAriaHasPopup=s.DISABLE_ARIA_HAS_POPUP,this.focusTrap=s.FOCUS_TRAP,this.preventScroll=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),e.stopPropagation(),this.closeDialog())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var e,o,i;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),(e=this.backdropElement)==null||e.remove(),this.backdropElement=null,(o=this.triggerElement)==null||o.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(i=this.deactivateFocusTrap)==null||i.call(this),this.focusBackToTrigger(),y.onDestroyedDialog(this)}applyZIndex(){var e;this.style.setProperty("z-index",`${this.zIndex}`),(e=this.backdropElement)==null||e.style.setProperty("z-index",`${this.zIndex-1}`)}async firstUpdated(e){super.firstUpdated(e),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.applyZIndex(),y.onCreatedDialog(this)}async updated(e){if(super.updated(e),e.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&(this.zIndex===null&&(this.zIndex=s.Z_INDEX),this.applyZIndex()),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("ariaLabel")||e.has("ariaLabelledBy")||e.has("ariaDescribedBy")||e.has("ariaDescription")||e.has("headerText")||e.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),e.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var e,o;this.disableAriaHasPopup||(o=this.triggerElement)==null||o.setAttribute("aria-haspopup",((e=this.triggerElement)==null?void 0:e.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var i;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,e.appendChild(o),(i=this.parentElement)==null||i.appendChild(e),this.backdropElement=e}closeDialog(){y.onCloseDialog(this,!1)}async isOpenUpdated(e,o){var i,c,p,b,N,Z;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.createBackdrop(),this.activatePreventScroll(),await this.updateComplete,this.focusTrap&&((i=this.activateFocusTrap)==null||i.call(this)),(c=this.setInitialFocus)==null||c.call(this),(p=this.triggerElement)==null||p.setAttribute("aria-expanded","true"),y.onShowDialog(this)):!o&&e&&((b=this.backdropElement)==null||b.remove(),this.backdropElement=null,(N=this.triggerElement)==null||N.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(Z=this.deactivateFocusTrap)==null||Z.call(this),this.focusBackToTrigger(),y.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return r`
      ${this.headerText?r` <div part="header-section">
            <div part="header">
              <slot name="header-prefix"></slot>
              <mdc-text
                part="header-text"
                tagname="${F[this.headerTagName.toUpperCase()]}"
                type="${H.BODY_LARGE_BOLD}"
              >
                ${this.headerText}
              </mdc-text>
            </div>
            ${this.descriptionText?r`<mdc-text
                  part="description-text"
                  tagname="${F[this.descriptionTagName.toUpperCase()]}"
                  type="${H.BODY_MIDSIZE_REGULAR}"
                >
                  ${this.descriptionText}
                </mdc-text>`:R}
          </div>`:R}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${s.CANCEL_ICON}"
        variant="${Fe.TERTIARY}"
        size="${He[20]}"
        aria-label="${w(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};O.styles=[...G.styles,...Xe];let a=O;d([n({type:String,reflect:!0})],a.prototype,"id");d([n({type:String,reflect:!0})],a.prototype,"triggerId");d([n({type:Boolean,reflect:!0})],a.prototype,"visible");d([n({type:Number,reflect:!0,attribute:"z-index"})],a.prototype,"zIndex");d([n({type:String,reflect:!0})],a.prototype,"size");d([n({type:String,reflect:!0})],a.prototype,"variant");d([n({type:String,attribute:"close-button-aria-label"})],a.prototype,"closeButtonAriaLabel");d([n({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");d([n({type:String,reflect:!0,attribute:"aria-labelledby"})],a.prototype,"ariaLabelledby");d([n({type:String,reflect:!0,attribute:"aria-describedby"})],a.prototype,"ariaDescribedBy");d([n({type:String,reflect:!0,attribute:"aria-description"})],a.prototype,"ariaDescription");d([n({type:String,reflect:!0,attribute:"header-text"})],a.prototype,"headerText");d([n({type:String,reflect:!0,attribute:"description-text"})],a.prototype,"descriptionText");d([n({type:String,reflect:!0,attribute:"header-tag-name"})],a.prototype,"headerTagName");d([n({type:String,reflect:!0,attribute:"description-tag-name"})],a.prototype,"descriptionTagName");d([n({type:String,reflect:!0})],a.prototype,"role");d([n({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],a.prototype,"disableAriaHasPopup");d([n({type:Boolean,reflect:!0,attribute:"focus-trap"})],a.prototype,"focusTrap");a.register(We);const u=(t,e,o)=>r`<mdc-dialog
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
    aria-labelledby="${w(t["aria-labelledby"])}"
    aria-label="${w(t["aria-label"])}"
    ?should-focus-trap-wrap=${t["should-focus-trap-wrap"]}
    size="${t.size}"
    ?visible="${t.visible}"
    variant="${t.variant}"
    ?focus-trap="${t["focus-trap"]}"
    @shown="${_("onshown")}"
    @hidden="${_("onhidden")}"
    @close="${o}"
  >
    ${e}
  </mdc-dialog>`,h=(t,e,o)=>r`
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
`,P=(t,e=!1)=>r`
  ${e&&r` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,Ke=t=>r`
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
    <mdc-popover
      id="popover"
      placement="bottom"
      trigger="click"
      triggerId="popover-trigger"
      focus-trap
      interactive
      hide-on-escape
      focus-back-to-trigger
    >
      <div class="popover-content">
        <p>This is the content of the popover.</p>
        <mdc-button @click="${t}">Close Popover</mdc-button>
      </div>
    </mdc-popover>
    <mdc-button id="popover-trigger">Toggle Popover</mdc-button>
    <mdc-tooltip id="tooltip" triggerId="tooltip-trigger" placement="top"> This is a tooltip </mdc-tooltip>
    <mdc-button id="tooltip-trigger">Hover me for tooltip</mdc-button>
  </div>
`,qe=()=>r`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`,Je=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,P(e),o)}
  `},Qe=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,P(e,!0),o)}
  `},et=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")},i=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,r`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${i}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
      `,o)}
  `},tt=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,r` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,o)}
  `},ot=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,Ke(e),o)}
  `},it=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},i=()=>{document.getElementById(t.id).removeAttribute("visible")},c=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,r`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
          <mdc-button id="nested-dialog-trigger" @click=${o}>Open Nested Dialog</mdc-button>
          <mdc-dialog
            id="nested-dialog"
            triggerId="nested-dialog-trigger"
            aria-label="nested-dialog"
            size="small"
            close-button-aria-label="Close nested dialog"
            header-text="Nested Dialog Header"
            description-text="This is a nested dialog description."
            @close="${c}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,i)}
  `},rt=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${h(t.triggerId,"Click me!",e)}
    ${u(t,qe(),o)}
  `},Rt={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Je,parameters:{badges:["stable"]},argTypes:{...Ge,...Ue,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(we)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(Ve)},size:{control:"select",options:Object.values(m)},visible:{control:"boolean"},...Me(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"])}},l={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},g={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},v={args:{size:s.SIZE,...l,...g}},f={name:"Size: Small",args:{size:m[0],...l,...g}},E={name:"Size: Medium",args:{size:m[1],...l,...g}},I={name:"Size: Large",args:{size:m[2],...l,...g}},x={name:"Size: XLarge",args:{size:m[3],...l,...g}},A={name:"Size: Fullscreen",args:{size:m[4],...l,...g}},D={args:{...l,size:m[0]}},S={render:tt,args:{...l,size:m[0]}},T={render:et,args:{...l,...g,size:s.SIZE}},$={render:Qe,args:{...l,...g,size:s.SIZE}},C={render:t=>r`
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
      @shown="${_("onshown")}"
      @hidden="${_("onhidden")}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `},z={render:t=>{const e=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${t.mountDialog?u(t,P(),e):""}
    `},args:{...l,...g,size:s.SIZE,mountDialog:!0,visible:!0}},L={render:ot,args:{...l,size:m[0]}},k={render:it,args:{...l,size:m[0]}},B={render:rt,args:{...l,size:m[0]}};var U,M,W;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(W=(M=v.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var V,j,X;f.parameters={...f.parameters,docs:{...(V=f.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Size: Small',
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(X=(j=f.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Y,K,q;E.parameters={...E.parameters,docs:{...(Y=E.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  name: 'Size: Medium',
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(q=(K=E.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,Q,ee;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Size: Large',
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(ee=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  name: 'Size: XLarge',
  args: {
    size: DIALOG_SIZE[3],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ae,se;A.parameters={...A.parameters,docs:{...(re=A.parameters)==null?void 0:re.docs,source:{originalSource:`{
  name: 'Size: Fullscreen',
  args: {
    size: DIALOG_SIZE[4],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(se=(ae=A.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,de,le;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(le=(de=D.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,me,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,ue,he;T.parameters={...T.parameters,docs:{...(ge=T.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(he=(ue=T.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var be,ye,ve;$.parameters={...$.parameters,docs:{...(be=$.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ve=(ye=$.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Ee,Ie;C.parameters={...C.parameters,docs:{...(fe=C.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  \`
}`,...(Ie=(Ee=C.parameters)==null?void 0:Ee.docs)==null?void 0:Ie.source}}};var xe,Ae,De;z.parameters={...z.parameters,docs:{...(xe=z.parameters)==null?void 0:xe.docs,source:{originalSource:`{
  render: (args: Args) => {
    const onClose = () => {
      const dialog = document.getElementById(args.id) as HTMLElement;
      dialog.removeAttribute('visible');
    };
    return html\`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      \${args.mountDialog ? createDialog(args, dialogBodyContent(), onClose) : ''}
    \`;
  },
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE,
    mountDialog: true,
    visible: true
  }
}`,...(De=(Ae=z.parameters)==null?void 0:Ae.docs)==null?void 0:De.source}}};var Se,Te,$e;L.parameters={...L.parameters,docs:{...(Se=L.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...($e=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:$e.source}}};var Ce,ze,Le;k.parameters={...k.parameters,docs:{...(Ce=k.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Le=(ze=k.parameters)==null?void 0:ze.docs)==null?void 0:Le.source}}};var ke,Be,_e;B.parameters={...B.parameters,docs:{...(ke=B.parameters)==null?void 0:ke.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(_e=(Be=B.parameters)==null?void 0:Be.docs)==null?void 0:_e.source}}};const Gt=["Example","small","medium","large","xlarge","fullscreen","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithIframe"];export{B as DialogWithIframe,k as DialogWithinDialog,v as Example,z as MountUnmount,L as WithPopover,C as WithoutTriggerElement,Gt as __namedExportsOrder,Rt as default,A as fullscreen,I as large,E as medium,f as small,$ as withCustomHeader,T as withSaveCancelButtons,D as withoutHeader,S as withoutHeaderOrFooter,x as xlarge};
