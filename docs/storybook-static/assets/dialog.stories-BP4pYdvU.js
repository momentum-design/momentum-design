import"./index-Ct_2z6iK.js";import{V as P,T as O}from"./index-D1yLszQ-.js";import{i as Ie,k as r,D as H}from"./lit-element-D5KKan5q.js";import{t as z}from"./if-defined-D5BV9-c0.js";import{u as De,C as R,n as s}from"./index-C9z9WAEj.js";import{c as Te,F as Se}from"./popover.component-BfwmRx66.js";import{B as $e,I as Ce}from"./button.constants-D0QAbDxL.js";import{C as ke}from"./CardAndDialogFooterMixin-ChoLGxVa.js";import{a as L}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as Le,s as ze}from"./commonArgTypes-BluK8w5L.js";import{d as _e,h as we}from"./utils-CO8B6ZcN.js";import"./index-Dh9W_KyY.js";import"./index-BiGJwO8x.js";import"./index-S9dvOHgJ.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-DJl2zNS_.js";import"./iframe-DcoMEQlU.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CZN2acD1.js";import"./v4-CmTdKEVZ.js";const Be=Ie`
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
`,Ne=[Be],Pe=De.constructTagName("dialog"),Ae={DEFAULT:"default",PROMOTIONAL:"promotional"},a={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:Ae.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1},p=["small","medium","large"],Oe=["dialog","alertdialog"];class y{static dispatchDialogEvent(e,o){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:!0}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}var He=Object.defineProperty,n=(t,e,o,d)=>{for(var c=void 0,h=t.length-1,b;h>=0;h--)(b=t[h])&&(c=b(e,o,c)||c);return c&&He(e,o,c),c};const w=class w extends Te(Se(ke(R))){constructor(){super(...arguments),this.id="",this.visible=a.VISIBLE,this.zIndex=a.Z_INDEX,this.size=a.SIZE,this.variant=a.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=a.HEADER_TAG_NAME,this.descriptionTagName=a.DESCRIPTION_TAG_NAME,this.role=a.ROLE,this.disableAriaHasPopup=a.DISABLE_ARIA_HAS_POPUP,this.focusTrap=!0,this.preventScroll=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),e.stopPropagation(),this.hideDialog())},this.hideDialog=()=>{this.visible=!1},this.showDialog=()=>{this.visible=!0}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var e,o,d;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),(e=this.backdropElement)==null||e.remove(),this.backdropElement=null,(o=this.triggerElement)==null||o.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(d=this.deactivateFocusTrap)==null||d.call(this),this.focusBackToTrigger(),y.onDestroyedDialog(this)}async firstUpdated(e){super.firstUpdated(e),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.style.zIndex=`${this.zIndex}`,y.onCreatedDialog(this)}async updated(e){if(super.updated(e),e.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("ariaLabel")||e.has("ariaLabelledBy")||e.has("ariaDescribedBy")||e.has("ariaDescription")||e.has("headerText")||e.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),e.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var e,o;this.disableAriaHasPopup||(o=this.triggerElement)==null||o.setAttribute("aria-haspopup",((e=this.triggerElement)==null?void 0:e.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var d;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,e.appendChild(o),(d=this.parentElement)==null||d.appendChild(e),this.backdropElement=e}async isOpenUpdated(e,o){var d,c,h,b,B,N;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.createBackdrop(),this.activatePreventScroll(),await this.updateComplete,(d=this.activateFocusTrap)==null||d.call(this),(c=this.setInitialFocus)==null||c.call(this),(h=this.triggerElement)==null||h.setAttribute("aria-expanded","true"),y.onShowDialog(this)):!o&&e&&((b=this.backdropElement)==null||b.remove(),this.backdropElement=null,(B=this.triggerElement)==null||B.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(N=this.deactivateFocusTrap)==null||N.call(this),this.focusBackToTrigger(),y.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return r`
      ${this.headerText?r`
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
        ${this.descriptionText?r`<mdc-text
          part="description-text"
          tagname="${P[this.descriptionTagName.toUpperCase()]}"
          type="${O.BODY_MIDSIZE_REGULAR}"
        >
        ${this.descriptionText}
        </mdc-text>`:H}
      </div>`:H}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${a.CANCEL_ICON}"
        variant="${$e.TERTIARY}"
        size="${Ce[20]}"
        aria-label="${z(this.closeButtonAriaLabel)||""}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};w.styles=[...R.styles,...Ne];let i=w;n([s({type:String,reflect:!0})],i.prototype,"id");n([s({type:String,reflect:!0})],i.prototype,"triggerId");n([s({type:Boolean,reflect:!0})],i.prototype,"visible");n([s({type:Number,reflect:!0,attribute:"z-index"})],i.prototype,"zIndex");n([s({type:String,reflect:!0})],i.prototype,"size");n([s({type:String,reflect:!0})],i.prototype,"variant");n([s({type:String,attribute:"close-button-aria-label"})],i.prototype,"closeButtonAriaLabel");n([s({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");n([s({type:String,reflect:!0,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledby");n([s({type:String,reflect:!0,attribute:"aria-describedby"})],i.prototype,"ariaDescribedBy");n([s({type:String,reflect:!0,attribute:"aria-description"})],i.prototype,"ariaDescription");n([s({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");n([s({type:String,reflect:!0,attribute:"description-text"})],i.prototype,"descriptionText");n([s({type:String,reflect:!0,attribute:"header-tag-name"})],i.prototype,"headerTagName");n([s({type:String,reflect:!0,attribute:"description-tag-name"})],i.prototype,"descriptionTagName");n([s({type:String,reflect:!0})],i.prototype,"role");n([s({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],i.prototype,"disableAriaHasPopup");i.register(Pe);const m=(t,e)=>r`<mdc-dialog
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
  @shown="${L("onshown")}"
  @hidden="${L("onhidden")}"
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
${e&&r`
  <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
`}
<div slot="dialog-body">
  <p>This is the body content of the dialog.</p>
</div>
<mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
<mdc-text slot="footer-link">Not rendered</mdc-text>
<mdc-button slot="footer-button-secondary" @click="${t}">Secondary</mdc-button>
<mdc-button slot="footer-button-primary" @click="${t}">Primary</mdc-button>
`,Re=t=>r`
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
`,Ze=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${m(t,_(e))}
  `},Fe=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${m(t,_(e,!0))}
  `},Ge=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${m(t,r`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${o}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
    `)}
  `},Ue=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${m(t,r`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`)}
  `},Me=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${m(t,Re(e))}
  `},We=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{document.getElementById("nested-dialog").toggleAttribute("visible")};return r`
    ${u(t.triggerId,"Click me!",e)}
    ${m(t,r`
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
          >
        <mdc-button slot="dialog-body">Button inside a nested dialog</mdc-button></mdc-dialog>
      </div>
    `)}
  `},Ct={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Ze,parameters:{badges:["stable"]},argTypes:{...Le,...ze,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(Ae)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},role:{control:"select",options:Object.values(Oe)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},..._e(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"]),...we(["focusTrap"])}},l={id:"dialog","z-index":a.Z_INDEX,role:a.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:a.VARIANT},g={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":a.HEADER_TAG_NAME,"description-tag-name":a.DESCRIPTION_TAG_NAME},v={args:{size:a.SIZE,...l,...g}},f={args:{size:p[0],...l,...g}},E={args:{size:p[1],...l,...g}},x={args:{size:p[2],...l,...g}},A={args:{...l,size:p[0]}},I={render:Ue,args:{...l,size:p[0]}},D={render:Ge,args:{...l,...g,size:a.SIZE}},T={render:Fe,args:{...l,...g,size:a.SIZE}},S={render:t=>r`
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
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  `},$={render:t=>r`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${t.mountDialog?m(t,_()):""}
    `,args:{...l,...g,size:a.SIZE,mountDialog:!0,visible:!0}},C={render:Me,args:{...l,size:p[0]}},k={render:We,args:{...l,size:p[0]}};var Z,F,G;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(G=(F=v.parameters)==null?void 0:F.docs)==null?void 0:G.source}}};var U,M,W;f.parameters={...f.parameters,docs:{...(U=f.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(X=(j=E.parameters)==null?void 0:j.docs)==null?void 0:X.source}}};var Y,K,q;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(q=(K=x.parameters)==null?void 0:K.docs)==null?void 0:q.source}}};var J,Q,ee;A.parameters={...A.parameters,docs:{...(J=A.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ee=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:ee.source}}};var te,oe,ie;I.parameters={...I.parameters,docs:{...(te=I.parameters)==null?void 0:te.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ie=(oe=I.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var re,ae,se;D.parameters={...D.parameters,docs:{...(re=D.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(le=(de=T.parameters)==null?void 0:de.docs)==null?void 0:le.source}}};var ce,pe,me;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`{
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
}`,...(me=(pe=S.parameters)==null?void 0:pe.docs)==null?void 0:me.source}}};var ge,he,ue;$.parameters={...$.parameters,docs:{...(ge=$.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ue=(he=$.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var be,ye,ve;C.parameters={...C.parameters,docs:{...(be=C.parameters)==null?void 0:be.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ve=(ye=C.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Ee,xe;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`{
  render: renderDialogWithinDialog,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(xe=(Ee=k.parameters)==null?void 0:Ee.docs)==null?void 0:xe.source}}};const kt=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover","DialogWithinDialog"];export{k as DialogWithinDialog,v as Example,$ as MountUnmount,C as WithPopover,S as WithoutTriggerElement,kt as __namedExportsOrder,Ct as default,x as large,E as medium,f as small,T as withCustomHeader,D as withSaveCancelButtons,A as withoutHeader,I as withoutHeaderOrFooter};
