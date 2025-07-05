import"./index-BvpqwTJw.js";import{V as N,T as H}from"./index-BrLJ_9IK.js";import{i as $e,k as r,D as R}from"./lit-element-D5KKan5q.js";import{t as z}from"./if-defined-D5BV9-c0.js";import{u as Ce,C as F,n}from"./index-C9z9WAEj.js";import{c as Be,F as ke}from"./popover.component-Bw5zQP8M.js";import{B as Le,I as ze}from"./button.constants-D0QAbDxL.js";import{C as _e}from"./CardAndDialogFooterMixin-Bxo6tU4P.js";import{a as L}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as we,s as Pe}from"./commonArgTypes-BluK8w5L.js";import{t as Oe}from"./utils-CF1irry3.js";import"./index-CdJyENco.js";import"./index-DAYaD_8w.js";import"./index-DfhuLnrm.js";import"./button.component-Cx4by9Nb.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-DTw2LNsX.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-Cx7wvr8C.js";import"./button.utils-rNW36Ji7.js";import"./index-mTcDoloB.js";import"./iframe--lMDQk3A.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-C-I9azzj.js";import"./v4-CmTdKEVZ.js";const Ne=Ce.constructTagName("dialog"),Se={DEFAULT:"default",PROMOTIONAL:"promotional"},s={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:Se.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1,FOCUS_TRAP:!0},p=["small","medium","large"],He=["dialog","alertdialog"];class y{static dispatchDialogEvent(e,o,i=!0){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:i}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCloseDialog(e,o=!0){this.dispatchDialogEvent("close",e,o)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}const Re=$e`
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
`,Fe=[Re];var Ze=Object.defineProperty,d=(t,e,o,i)=>{for(var l=void 0,m=t.length-1,b;m>=0;m--)(b=t[m])&&(l=b(e,o,l)||l);return l&&Ze(e,o,l),l};const w=class w extends Be(ke(_e(F))){constructor(){super(...arguments),this.id="",this.visible=s.VISIBLE,this.zIndex=s.Z_INDEX,this.size=s.SIZE,this.variant=s.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=s.HEADER_TAG_NAME,this.descriptionTagName=s.DESCRIPTION_TAG_NAME,this.role=s.ROLE,this.disableAriaHasPopup=s.DISABLE_ARIA_HAS_POPUP,this.focusTrap=s.FOCUS_TRAP,this.preventScroll=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),e.stopPropagation(),this.closeDialog())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var e,o,i;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),(e=this.backdropElement)==null||e.remove(),this.backdropElement=null,(o=this.triggerElement)==null||o.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(i=this.deactivateFocusTrap)==null||i.call(this),this.focusBackToTrigger(),y.onDestroyedDialog(this)}async firstUpdated(e){super.firstUpdated(e),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.style.zIndex=`${this.zIndex}`,y.onCreatedDialog(this)}async updated(e){if(super.updated(e),e.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("ariaLabel")||e.has("ariaLabelledBy")||e.has("ariaDescribedBy")||e.has("ariaDescription")||e.has("headerText")||e.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),e.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var e,o;this.disableAriaHasPopup||(o=this.triggerElement)==null||o.setAttribute("aria-haspopup",((e=this.triggerElement)==null?void 0:e.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var i;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,e.appendChild(o),(i=this.parentElement)==null||i.appendChild(e),this.backdropElement=e}closeDialog(){y.onCloseDialog(this,!1)}async isOpenUpdated(e,o){var i,l,m,b,P,O;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.createBackdrop(),this.activatePreventScroll(),await this.updateComplete,this.focusTrap&&((i=this.activateFocusTrap)==null||i.call(this)),(l=this.setInitialFocus)==null||l.call(this),(m=this.triggerElement)==null||m.setAttribute("aria-expanded","true"),y.onShowDialog(this)):!o&&e&&((b=this.backdropElement)==null||b.remove(),this.backdropElement=null,(P=this.triggerElement)==null||P.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(O=this.deactivateFocusTrap)==null||O.call(this),this.focusBackToTrigger(),y.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return r`
      ${this.headerText?r` <div part="header-section">
            <div part="header">
              <slot name="header-prefix"></slot>
              <mdc-text
                part="header-text"
                tagname="${N[this.headerTagName.toUpperCase()]}"
                type="${H.BODY_LARGE_BOLD}"
              >
                ${this.headerText}
              </mdc-text>
            </div>
            ${this.descriptionText?r`<mdc-text
                  part="description-text"
                  tagname="${N[this.descriptionTagName.toUpperCase()]}"
                  type="${H.BODY_MIDSIZE_REGULAR}"
                >
                  ${this.descriptionText}
                </mdc-text>`:R}
          </div>`:R}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${s.CANCEL_ICON}"
        variant="${Le.TERTIARY}"
        size="${ze[20]}"
        aria-label="${z(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};w.styles=[...F.styles,...Fe];let a=w;d([n({type:String,reflect:!0})],a.prototype,"id");d([n({type:String,reflect:!0})],a.prototype,"triggerId");d([n({type:Boolean,reflect:!0})],a.prototype,"visible");d([n({type:Number,reflect:!0,attribute:"z-index"})],a.prototype,"zIndex");d([n({type:String,reflect:!0})],a.prototype,"size");d([n({type:String,reflect:!0})],a.prototype,"variant");d([n({type:String,attribute:"close-button-aria-label"})],a.prototype,"closeButtonAriaLabel");d([n({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");d([n({type:String,reflect:!0,attribute:"aria-labelledby"})],a.prototype,"ariaLabelledby");d([n({type:String,reflect:!0,attribute:"aria-describedby"})],a.prototype,"ariaDescribedBy");d([n({type:String,reflect:!0,attribute:"aria-description"})],a.prototype,"ariaDescription");d([n({type:String,reflect:!0,attribute:"header-text"})],a.prototype,"headerText");d([n({type:String,reflect:!0,attribute:"description-text"})],a.prototype,"descriptionText");d([n({type:String,reflect:!0,attribute:"header-tag-name"})],a.prototype,"headerTagName");d([n({type:String,reflect:!0,attribute:"description-tag-name"})],a.prototype,"descriptionTagName");d([n({type:String,reflect:!0})],a.prototype,"role");d([n({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],a.prototype,"disableAriaHasPopup");d([n({type:Boolean,reflect:!0,attribute:"focus-trap"})],a.prototype,"focusTrap");a.register(Ne);const g=(t,e,o)=>r`<mdc-dialog
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
    aria-labelledby="${z(t["aria-labelledby"])}"
    aria-label="${z(t["aria-label"])}"
    ?should-focus-trap-wrap=${t["should-focus-trap-wrap"]}
    size="${t.size}"
    ?visible="${t.visible}"
    variant="${t.variant}"
    ?focus-trap="${t["focus-trap"]}"
    @shown="${L("onshown")}"
    @hidden="${L("onhidden")}"
    @close="${o}"
  >
    ${e}
  </mdc-dialog>`,u=(t,e,o)=>r`
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
`,_=(t,e=!1)=>r`
  ${e&&r` <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon> `}
  <div slot="dialog-body">
    <p>This is the body content of the dialog.</p>
  </div>
  <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
  <mdc-text slot="footer-link">Not rendered</mdc-text>
  <mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
  <mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,Ue=t=>r`
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
`,Ge=()=>r`
  <div slot="dialog-body">
    <p>This is the body content of the dialog. Try out pressing Tab to see the Focus Trap being stuck</p>
    <iframe src="https://example.com" width="100%" height="300px"></iframe>
    <mdc-button>This is a mdc-button after the Iframe</mdc-button>
  </div>
`,We=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,_(e),o)}
  `},Me=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,_(e,!0),o)}
  `},Ve=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")},i=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,r`
        <div slot="dialog-body">
          <p>This is the body content of the dialog.</p>
        </div>
        <mdc-button slot="footer-button-secondary" @click="${i}">Cancel</mdc-button>
        <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
      `,o)}
  `},je=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,r` <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,o)}
  `},Xe=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,Ue(e),o)}
  `},Ye=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},i=()=>{document.getElementById(t.id).removeAttribute("visible")},l=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,r`
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
            @close="${l}"
          >
            <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog
          >
        </div>
      `,i)}
  `},Ke=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,Ge(),o)}
  `},_t={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:We,parameters:{badges:["stable"]},argTypes:{...we,...Pe,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Se)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},"focus-trap":{control:"boolean"},role:{control:"select",options:Object.values(He)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},...Oe(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"])}},c={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},h={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},v={args:{size:s.SIZE,...c,...h}},f={args:{size:p[0],...c,...h}},E={args:{size:p[1],...c,...h}},I={args:{size:p[2],...c,...h}},A={args:{...c,size:p[0]}},D={render:je,args:{...c,size:p[0]}},x={render:Ve,args:{...c,...h,size:s.SIZE}},T={render:Me,args:{...c,...h,size:s.SIZE}},S={render:t=>r`
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
      @shown="${L("onshown")}"
      @hidden="${L("onhidden")}"
    >
      <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
      <div slot="dialog-body"></div>
      <mdc-link slot="footer-link" icon-name="placeholder-bold" href="#">Label</mdc-link>
      <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
      <mdc-button slot="footer-button-primary">Primary</mdc-button>
    </mdc-dialog>
  `},$={render:t=>{const e=()=>{document.getElementById(t.id).removeAttribute("visible")};return r`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${t.mountDialog?g(t,_(),e):""}
    `},args:{...c,...h,size:s.SIZE,mountDialog:!0,visible:!0}},C={render:Xe,args:{...c,size:p[0]}},B={render:Ye,args:{...c,size:p[0]}},k={render:Ke,args:{...c,size:p[0]}};var Z,U,G;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(U=v.parameters)==null?void 0:U.docs)==null?void 0:G.source}}};var W,M,V;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(V=(M=f.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var j,X,Y;E.parameters={...E.parameters,docs:{...(j=E.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(Y=(X=E.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var K,q,J;I.parameters={...I.parameters,docs:{...(K=I.parameters)==null?void 0:K.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(J=(q=I.parameters)==null?void 0:q.docs)==null?void 0:J.source}}};var Q,ee,te;A.parameters={...A.parameters,docs:{...(Q=A.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(te=(ee=A.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ie,re;D.parameters={...D.parameters,docs:{...(oe=D.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(re=(ie=D.parameters)==null?void 0:ie.docs)==null?void 0:re.source}}};var ae,se,ne;x.parameters={...x.parameters,docs:{...(ae=x.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ne=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ne.source}}};var de,le,ce;T.parameters={...T.parameters,docs:{...(de=T.parameters)==null?void 0:de.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ce=(le=T.parameters)==null?void 0:le.docs)==null?void 0:ce.source}}};var me,pe,ge;S.parameters={...S.parameters,docs:{...(me=S.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ge=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:ge.source}}};var ue,he,be;$.parameters={...$.parameters,docs:{...(ue=$.parameters)==null?void 0:ue.docs,source:{originalSource:`{
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
}`,...(be=(he=$.parameters)==null?void 0:he.docs)==null?void 0:be.source}}};var ye,ve,fe;C.parameters={...C.parameters,docs:{...(ye=C.parameters)==null?void 0:ye.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(fe=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:fe.source}}};var Ee,Ie,Ae;B.parameters={...B.parameters,docs:{...(Ee=B.parameters)==null?void 0:Ee.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ae=(Ie=B.parameters)==null?void 0:Ie.docs)==null?void 0:Ae.source}}};var De,xe,Te;k.parameters={...k.parameters,docs:{...(De=k.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: renderDialogWithIframe,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Te=(xe=k.parameters)==null?void 0:xe.docs)==null?void 0:Te.source}}};const wt=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog","DialogWithIframe"];export{k as DialogWithIframe,B as DialogWithinDialog,v as Example,$ as MountUnmount,C as WithPopover,S as WithoutTriggerElement,wt as __namedExportsOrder,_t as default,I as large,E as medium,f as small,T as withCustomHeader,x as withSaveCancelButtons,A as withoutHeader,D as withoutHeaderOrFooter};
