import"./index--GlbAg6j.js";import{V as P,T as O}from"./index-D1yLszQ-.js";import{i as xe,k as a,D as H}from"./lit-element-D5KKan5q.js";import{t as L}from"./if-defined-D5BV9-c0.js";import{u as De,C as R,n}from"./index-C9z9WAEj.js";import{c as Te,F as Se}from"./popover.component-BfwmRx66.js";import{B as $e,I as Ce}from"./button.constants-D0QAbDxL.js";import{C as ke}from"./CardAndDialogFooterMixin-ChoLGxVa.js";import{a as B}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as Be,s as Le}from"./commonArgTypes-BluK8w5L.js";import{d as ze,h as _e}from"./utils-CO8B6ZcN.js";import"./index-C40ZWr_B.js";import"./index-DbnWqStL.js";import"./index-S9dvOHgJ.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-Cbm87zaK.js";import"./iframe-BPH0dSxS.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CZN2acD1.js";import"./v4-CmTdKEVZ.js";const we=xe`
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
`,Ne=[we],Pe=De.constructTagName("dialog"),Ie={DEFAULT:"default",PROMOTIONAL:"promotional"},s={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:Ie.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1},p=["small","medium","large"],Oe=["dialog","alertdialog"];class v{static dispatchDialogEvent(e,o,i=!0){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:i}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCloseDialog(e,o=!0){this.dispatchDialogEvent("close",e,o)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}var He=Object.defineProperty,d=(t,e,o,i)=>{for(var l=void 0,m=t.length-1,b;m>=0;m--)(b=t[m])&&(l=b(e,o,l)||l);return l&&He(e,o,l),l};const _=class _ extends Te(Se(ke(R))){constructor(){super(...arguments),this.id="",this.visible=s.VISIBLE,this.zIndex=s.Z_INDEX,this.size=s.SIZE,this.variant=s.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=s.HEADER_TAG_NAME,this.descriptionTagName=s.DESCRIPTION_TAG_NAME,this.role=s.ROLE,this.disableAriaHasPopup=s.DISABLE_ARIA_HAS_POPUP,this.focusTrap=!0,this.preventScroll=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),e.stopPropagation(),this.closeDialog())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var e,o,i;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),(e=this.backdropElement)==null||e.remove(),this.backdropElement=null,(o=this.triggerElement)==null||o.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(i=this.deactivateFocusTrap)==null||i.call(this),this.focusBackToTrigger(),v.onDestroyedDialog(this)}async firstUpdated(e){super.firstUpdated(e),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.style.zIndex=`${this.zIndex}`,v.onCreatedDialog(this)}async updated(e){if(super.updated(e),e.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("ariaLabel")||e.has("ariaLabelledBy")||e.has("ariaDescribedBy")||e.has("ariaDescription")||e.has("headerText")||e.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),e.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var e,o;this.disableAriaHasPopup||(o=this.triggerElement)==null||o.setAttribute("aria-haspopup",((e=this.triggerElement)==null?void 0:e.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var i;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,e.appendChild(o),(i=this.parentElement)==null||i.appendChild(e),this.backdropElement=e}closeDialog(){v.onCloseDialog(this,!1)}async isOpenUpdated(e,o){var i,l,m,b,w,N;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.createBackdrop(),this.activatePreventScroll(),await this.updateComplete,(i=this.activateFocusTrap)==null||i.call(this),(l=this.setInitialFocus)==null||l.call(this),(m=this.triggerElement)==null||m.setAttribute("aria-expanded","true"),v.onShowDialog(this)):!o&&e&&((b=this.backdropElement)==null||b.remove(),this.backdropElement=null,(w=this.triggerElement)==null||w.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(N=this.deactivateFocusTrap)==null||N.call(this),this.focusBackToTrigger(),v.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return a`
      ${this.headerText?a`
      <div part="header-section">
        <div part="header">
          <slot name="header-prefix"></slot>
          <mdc-text
            part="header-text"
            tagname="${P[this.headerTagName.toUpperCase()]}"
            type="${O.BODY_LARGE_BOLD}"  
          >
            ${this.headerText}
          </mdc-text>
        </div>
        ${this.descriptionText?a`<mdc-text
          part="description-text"
          tagname="${P[this.descriptionTagName.toUpperCase()]}"
          type="${O.BODY_MIDSIZE_REGULAR}"
        >
        ${this.descriptionText}
        </mdc-text>`:H}
      </div>`:H}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${s.CANCEL_ICON}"
        variant="${$e.TERTIARY}"
        size="${Ce[20]}"
        aria-label="${L(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};_.styles=[...R.styles,...Ne];let r=_;d([n({type:String,reflect:!0})],r.prototype,"id");d([n({type:String,reflect:!0})],r.prototype,"triggerId");d([n({type:Boolean,reflect:!0})],r.prototype,"visible");d([n({type:Number,reflect:!0,attribute:"z-index"})],r.prototype,"zIndex");d([n({type:String,reflect:!0})],r.prototype,"size");d([n({type:String,reflect:!0})],r.prototype,"variant");d([n({type:String,attribute:"close-button-aria-label"})],r.prototype,"closeButtonAriaLabel");d([n({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel");d([n({type:String,reflect:!0,attribute:"aria-labelledby"})],r.prototype,"ariaLabelledby");d([n({type:String,reflect:!0,attribute:"aria-describedby"})],r.prototype,"ariaDescribedBy");d([n({type:String,reflect:!0,attribute:"aria-description"})],r.prototype,"ariaDescription");d([n({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText");d([n({type:String,reflect:!0,attribute:"description-text"})],r.prototype,"descriptionText");d([n({type:String,reflect:!0,attribute:"header-tag-name"})],r.prototype,"headerTagName");d([n({type:String,reflect:!0,attribute:"description-tag-name"})],r.prototype,"descriptionTagName");d([n({type:String,reflect:!0})],r.prototype,"role");d([n({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],r.prototype,"disableAriaHasPopup");r.register(Pe);const g=(t,e,o)=>a`<mdc-dialog
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
  @shown="${B("onshown")}"
  @hidden="${B("onhidden")}"
  @close="${o}"
>
  ${e}
</mdc-dialog>`,u=(t,e,o)=>a`
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
`,z=(t,e=!1)=>a`
${e&&a`
  <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
`}
<div slot="dialog-body">
  <p>This is the body content of the dialog.</p>
</div>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
<mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,Re=t=>a`
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
  <mdc-tooltip
    id="tooltip"
    triggerId="tooltip-trigger"
    placement="top">
    This is a tooltip
  </mdc-tooltip>
  <mdc-button id="tooltip-trigger">Hover me for tooltip</mdc-button>
</div>
`,Ze=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return a`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,z(e),o)}
  `},Fe=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return a`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,z(e,!0),o)}
  `},Ge=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")},i=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return a`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,a`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${i}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
    `,o)}
  `},Ue=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return a`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,a`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`,o)}
  `},Me=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById(t.id).removeAttribute("visible")};return a`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,Re(e),o)}
  `},We=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")},i=()=>{document.getElementById(t.id).removeAttribute("visible")},l=()=>{document.getElementById("nested-dialog").removeAttribute("visible")};return a`
    ${u(t.triggerId,"Click me!",e)}
    ${g(t,a`
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
        <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog>
      </div>
    `,i)}
  `},Ct={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Ze,parameters:{badges:["stable"]},argTypes:{...Be,...Le,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Ie)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},role:{control:"select",options:Object.values(Oe)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},...ze(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"]),..._e(["focusTrap"])}},c={id:"dialog","z-index":s.Z_INDEX,role:s.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:s.VARIANT},h={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":s.HEADER_TAG_NAME,"description-tag-name":s.DESCRIPTION_TAG_NAME},y={args:{size:s.SIZE,...c,...h}},f={args:{size:p[0],...c,...h}},E={args:{size:p[1],...c,...h}},A={args:{size:p[2],...c,...h}},I={args:{...c,size:p[0]}},x={render:Ue,args:{...c,size:p[0]}},D={render:Ge,args:{...c,...h,size:s.SIZE}},T={render:Fe,args:{...c,...h,size:s.SIZE}},S={render:t=>a`
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
    @shown="${B("onshown")}"
    @hidden="${B("onhidden")}"
  >
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  `},$={render:t=>{const e=()=>{document.getElementById(t.id).removeAttribute("visible")};return a`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${t.mountDialog?g(t,z(),e):""}
    `},args:{...c,...h,size:s.SIZE,mountDialog:!0,visible:!0}},C={render:Me,args:{...c,size:p[0]}},k={render:We,args:{...c,size:p[0]}};var Z,F,G;y.parameters={...y.parameters,docs:{...(Z=y.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(F=y.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var U,M,W;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(W=(M=f.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var V,j,X;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(X=(j=E.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Y,K,q;A.parameters={...A.parameters,docs:{...(Y=A.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(q=(K=A.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,Q,ee;I.parameters={...I.parameters,docs:{...(J=I.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ee=(Q=I.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ie;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ie=(oe=x.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ae,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(se=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var ne,de,le;T.parameters={...T.parameters,docs:{...(ne=T.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(le=(de=T.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,me,pe;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(pe=(me=S.parameters)==null?void 0:me.docs)==null?void 0:pe.source}}};var ge,he,ue;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ue=(he=$.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var be,ve,ye;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ye=(ve=C.parameters)==null?void 0:ve.docs)==null?void 0:ye.source}}};var fe,Ee,Ae;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Ae=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source}}};const kt=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog"];export{k as DialogWithinDialog,y as Example,$ as MountUnmount,C as WithPopover,S as WithoutTriggerElement,kt as __namedExportsOrder,Ct as default,A as large,E as medium,f as small,T as withCustomHeader,D as withSaveCancelButtons,I as withoutHeader,x as withoutHeaderOrFooter};
