import"./index-DlE2_3ES.js";import{V as N,T as O}from"./index-D1yLszQ-.js";import{i as ve,k as a,D as P}from"./lit-element-D5KKan5q.js";import{t as L}from"./if-defined-D5BV9-c0.js";import{u as Ee,C as H,n as s}from"./index-C9z9WAEj.js";import{F as xe}from"./popover.component-C5GcJwtL.js";import{B as Ae,I as Ie}from"./button.constants-D0QAbDxL.js";import{C as Te}from"./CardAndDialogFooterMixin-ChoLGxVa.js";import{a as k}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{c as De,s as Se}from"./commonArgTypes-BluK8w5L.js";import{d as $e,h as Ce}from"./utils-CO8B6ZcN.js";import"./index-DOC7Qbdd.js";import"./index-C0O-jXcy.js";import"./index-EeewSTSV.js";import"./button.component-CETyLHgp.js";import"./state-CSSggq2n.js";import"./buttonsimple.component-UuTVCePh.js";import"./DisabledMixin-BZruwOeC.js";import"./TabIndexMixin-CsrHswKP.js";import"./buttonsimple.constants-CGc1uJX6.js";import"./index-MA1r3zrt.js";import"./button.utils-rNW36Ji7.js";import"./index-Ck4LXYne.js";import"./iframe-szxI0a4k.js";import"../sb-preview/runtime.js";import"./index-2PiEGcHV.js";import"./iconprovider.component-Bvm-70EG.js";import"./create-context-89xeped_.js";import"./base-DIkkzJ-c.js";import"./roles-BH_hBfTz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./link.constants-CqyNsepP.js";import"./v4-CQkTLCs1.js";import"./IconNameMixin-CujGSn0t.js";import"./linksimple.component-CZN2acD1.js";import"./v4-CmTdKEVZ.js";const ke=ve`
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
`,Le=[ke],we=Ee.constructTagName("dialog"),fe={DEFAULT:"default",PROMOTIONAL:"promotional"},r={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:fe.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1},p=["small","medium","large"],_e=["dialog","alertdialog"];class y{static dispatchDialogEvent(e,o){o.dispatchEvent(new CustomEvent(e,{detail:{show:o.visible},composed:!0,bubbles:!0}))}static onShowDialog(e){this.dispatchDialogEvent("shown",e)}static onHideDialog(e){this.dispatchDialogEvent("hidden",e)}static onCreatedDialog(e){this.dispatchDialogEvent("created",e)}static onDestroyedDialog(e){this.dispatchDialogEvent("destroyed",e)}}var ze=Object.defineProperty,n=(t,e,o,d)=>{for(var c=void 0,g=t.length-1,u;g>=0;g--)(u=t[g])&&(c=u(e,o,c)||c);return c&&ze(e,o,c),c};const _=class _ extends xe(Te(H)){constructor(){super(...arguments),this.id="",this.visible=r.VISIBLE,this.zIndex=r.Z_INDEX,this.size=r.SIZE,this.variant=r.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=r.HEADER_TAG_NAME,this.descriptionTagName=r.DESCRIPTION_TAG_NAME,this.role=r.ROLE,this.disableAriaHasPopup=r.DISABLE_ARIA_HAS_POPUP,this.focusTrap=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=e=>{!this.visible||e.code!=="Escape"||(e.preventDefault(),this.hideDialog())},this.hideDialog=()=>{this.visible=!1},this.showDialog=()=>{this.visible=!0}}connectedCallback(){super.connectedCallback(),document.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var e,o,d;super.disconnectedCallback(),document.removeEventListener("keydown",this.onEscapeKeydown),(e=this.backdropElement)==null||e.remove(),this.backdropElement=null,(o=this.deactivateFocusTrap)==null||o.call(this),(d=this.triggerElement)==null||d.setAttribute("aria-expanded","false"),this.focusBackToTrigger(),y.onDestroyedDialog(this)}async firstUpdated(e){super.firstUpdated(e),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.style.zIndex=`${this.zIndex}`,y.onCreatedDialog(this)}async updated(e){if(super.updated(e),e.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),e.has("visible")){const o=e.get("visible");await this.isOpenUpdated(o,this.visible)}e.has("zIndex")&&this.setAttribute("z-index",`${this.zIndex}`),e.has("variant")&&this.updateFooterButtonColors(this.variant),(e.has("ariaLabel")||e.has("ariaLabelledBy")||e.has("ariaDescribedBy")||e.has("ariaDescription")||e.has("headerText")||e.has("descriptionText"))&&this.setupAriaLabelledDescribedBy()}setupAriaHasPopup(){var e,o;this.disableAriaHasPopup||(o=this.triggerElement)==null||o.setAttribute("aria-haspopup",((e=this.triggerElement)==null?void 0:e.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var d;const e=document.createElement("div");e.classList.add("dialog-backdrop");const o=document.createElement("style");o.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,e.appendChild(o),(d=this.parentElement)==null||d.appendChild(e),this.backdropElement=e}async isOpenUpdated(e,o){var d,c,g,u,z,B;e!==o&&(o&&!e?(this.lastActiveElement=document.activeElement,this.enabledPreventScroll=!0,this.createBackdrop(),await this.updateComplete,(d=this.activateFocusTrap)==null||d.call(this),(c=this.setInitialFocus)==null||c.call(this),(g=this.triggerElement)==null||g.setAttribute("aria-expanded","true"),y.onShowDialog(this)):!o&&e&&((u=this.backdropElement)==null||u.remove(),this.backdropElement=null,(z=this.deactivateFocusTrap)==null||z.call(this),(B=this.triggerElement)==null||B.setAttribute("aria-expanded","false"),this.focusBackToTrigger(),y.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return a`
      ${this.headerText?a`
      <div part="header-section">
        <div part="header">
          <slot name="header-prefix"></slot>
          <mdc-text
            part="header-text"
            tagname="${N[this.headerTagName.toUpperCase()]}"
            type="${O.BODY_LARGE_BOLD}"  
          >
            ${this.headerText}
          </mdc-text>
        </div>
        ${this.descriptionText?a`<mdc-text
          part="description-text"
          tagname="${N[this.descriptionTagName.toUpperCase()]}"
          type="${O.BODY_MIDSIZE_REGULAR}"
        >
        ${this.descriptionText}
        </mdc-text>`:P}
      </div>`:P}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${r.CANCEL_ICON}"
        variant="${Ae.TERTIARY}"
        size="${Ie[20]}"
        aria-label="${L(this.closeButtonAriaLabel)||""}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};_.styles=[...H.styles,...Le];let i=_;n([s({type:String,reflect:!0})],i.prototype,"id");n([s({type:String,reflect:!0})],i.prototype,"triggerId");n([s({type:Boolean,reflect:!0})],i.prototype,"visible");n([s({type:Number,reflect:!0,attribute:"z-index"})],i.prototype,"zIndex");n([s({type:String,reflect:!0})],i.prototype,"size");n([s({type:String,reflect:!0})],i.prototype,"variant");n([s({type:String,attribute:"close-button-aria-label"})],i.prototype,"closeButtonAriaLabel");n([s({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");n([s({type:String,reflect:!0,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledby");n([s({type:String,reflect:!0,attribute:"aria-describedby"})],i.prototype,"ariaDescribedBy");n([s({type:String,reflect:!0,attribute:"aria-description"})],i.prototype,"ariaDescription");n([s({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");n([s({type:String,reflect:!0,attribute:"description-text"})],i.prototype,"descriptionText");n([s({type:String,reflect:!0,attribute:"header-tag-name"})],i.prototype,"headerTagName");n([s({type:String,reflect:!0,attribute:"description-tag-name"})],i.prototype,"descriptionTagName");n([s({type:String,reflect:!0})],i.prototype,"role");n([s({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],i.prototype,"disableAriaHasPopup");i.register(we);const h=(t,e)=>a`<mdc-dialog
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
  @shown="${k("onshown")}"
  @hidden="${k("onhidden")}"
>
  ${e}
</mdc-dialog>`,b=(t,e,o)=>a`
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
`,w=(t,e=!1)=>a`
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
`,Be=t=>a`
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
`,Ne=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return a`
    ${b(t.triggerId,"Click me!",e)}
    ${h(t,w(e))}
  `},Oe=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return a`
    ${b(t.triggerId,"Click me!",e)}
    ${h(t,w(e,!0))}
  `},Pe=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")},o=()=>{window.confirm("Are you sure you want to cancel?")&&e()};return a`
    ${b(t.triggerId,"Click me!",e)}
    ${h(t,a`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>
      <mdc-button slot="footer-button-secondary" @click="${o}">Cancel</mdc-button>
      <mdc-button slot="footer-button-primary" @click="${e}">Save</mdc-button>
    `)}
  `},He=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return a`
    ${b(t.triggerId,"Click me!",e)}
    ${h(t,a`
      <div slot="dialog-body">
        <p>This is the body content of the dialog.</p>
      </div>`)}
  `},Re=t=>{const e=()=>{document.getElementById(t.id).toggleAttribute("visible")};return a`
    ${b(t.triggerId,"Click me!",e)}
    ${h(t,Be(e))}
  `},At={title:"Components/dialog",tags:["autodocs"],component:"mdc-dialog",render:Ne,parameters:{badges:["stable"]},argTypes:{...De,...Se,id:{control:"text"},triggerId:{control:"text"},variant:{control:"select",options:Object.values(fe)},"z-index":{control:"number"},"aria-labelledby":{control:"text"},"aria-label":{control:"text"},"close-button-aria-label":{control:"text"},"header-text":{control:"text"},"description-text":{control:"text"},"header-tag-name":{control:"text"},"description-tag-name":{control:"text"},"should-focus-trap-wrap":{control:"boolean"},role:{control:"select",options:Object.values(_e)},size:{control:"select",options:Object.values(p)},visible:{control:"boolean"},...$e(["--mdc-dialog-primary-background-color","--mdc-dialog-border-color","--mdc-dialog-header-text-color","--mdc-dialog-description-text-color","--mdc-dialog-elevation-3","--mdc-dialog-width"]),...Ce(["focusTrap"])}},l={id:"dialog","z-index":r.Z_INDEX,role:r.ROLE,triggerId:"dialog-trigger-btn","close-button-aria-label":"Close dialog",visible:!1,variant:r.VARIANT},m={"header-text":"Dialog Header","description-text":"This is a dialog description. It is only present if the header is present.","header-tag-name":r.HEADER_TAG_NAME,"description-tag-name":r.DESCRIPTION_TAG_NAME},f={args:{size:r.SIZE,...l,...m}},v={args:{size:p[0],...l,...m}},E={args:{size:p[1],...l,...m}},x={args:{size:p[2],...l,...m}},A={args:{...l,size:p[0]}},I={render:He,args:{...l,size:p[0]}},T={render:Pe,args:{...l,...m,size:r.SIZE}},D={render:Oe,args:{...l,...m,size:r.SIZE}},S={render:t=>a`
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
    @shown="${k("onshown")}"
    @hidden="${k("onhidden")}"
  >
    <mdc-icon slot="header-prefix" name="placeholder-bold"></mdc-icon>
    <div slot="dialog-body">
    </div>
    <mdc-link slot="footer-link" icon-name="placeholder-bold" href='#'>Label</mdc-link>
    <mdc-button slot="footer-button-secondary">Secondary</mdc-button>
    <mdc-button slot="footer-button-primary">Primary</mdc-button>
  </mdc-dialog>
  `},$={render:t=>a`
      <mdc-button id="dialog-trigger-btn">
        Trigger Button which is connected, but mountDialog controls the mounting of the dialog
      </mdc-button>
      ${t.mountDialog?h(t,w()):""}
    `,args:{...l,...m,size:r.SIZE,mountDialog:!0,visible:!0}},C={render:Re,args:{...l,size:p[0]}};var R,Z,F;f.parameters={...f.parameters,docs:{...(R=f.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: DEFAULTS.SIZE,
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(F=(Z=f.parameters)==null?void 0:Z.docs)==null?void 0:F.source}}};var U,G,M;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[0],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(M=(G=v.parameters)==null?void 0:G.docs)==null?void 0:M.source}}};var V,W,j;E.parameters={...E.parameters,docs:{...(V=E.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[1],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(j=(W=E.parameters)==null?void 0:W.docs)==null?void 0:j.source}}};var X,Y,K;x.parameters={...x.parameters,docs:{...(X=x.parameters)==null?void 0:X.docs,source:{originalSource:`{
  args: {
    size: DIALOG_SIZE[2],
    ...commonProperties,
    ...headerDescriptionProperties
  }
}`,...(K=(Y=x.parameters)==null?void 0:Y.docs)==null?void 0:K.source}}};var q,J,Q;A.parameters={...A.parameters,docs:{...(q=A.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(Q=(J=A.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,oe;I.parameters={...I.parameters,docs:{...(ee=I.parameters)==null?void 0:ee.docs,source:{originalSource:`{
  render: renderNoFooter,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(oe=(te=I.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ie,re,ae;T.parameters={...T.parameters,docs:{...(ie=T.parameters)==null?void 0:ie.docs,source:{originalSource:`{
  render: renderSaveCancelBtns,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(ae=(re=T.parameters)==null?void 0:re.docs)==null?void 0:ae.source}}};var se,ne,de;D.parameters={...D.parameters,docs:{...(se=D.parameters)==null?void 0:se.docs,source:{originalSource:`{
  render: renderWithCustomHeader,
  args: {
    ...commonProperties,
    ...headerDescriptionProperties,
    size: DEFAULTS.SIZE
  }
}`,...(de=(ne=D.parameters)==null?void 0:ne.docs)==null?void 0:de.source}}};var le,ce,pe;S.parameters={...S.parameters,docs:{...(le=S.parameters)==null?void 0:le.docs,source:{originalSource:`{
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
}`,...(pe=(ce=S.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var me,ge,he;$.parameters={...$.parameters,docs:{...(me=$.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(he=(ge=$.parameters)==null?void 0:ge.docs)==null?void 0:he.source}}};var ue,be,ye;C.parameters={...C.parameters,docs:{...(ue=C.parameters)==null?void 0:ue.docs,source:{originalSource:`{
  render: renderWithPopover,
  args: {
    ...commonProperties,
    size: DIALOG_SIZE[0]
  }
}`,...(ye=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ye.source}}};const It=["Example","small","medium","large","withoutHeader","withoutHeaderOrFooter","withSaveCancelButtons","withCustomHeader","WithoutTriggerElement","MountUnmount","WithPopover"];export{f as Example,$ as MountUnmount,C as WithPopover,S as WithoutTriggerElement,It as __namedExportsOrder,At as default,x as large,E as medium,v as small,D as withCustomHeader,T as withSaveCancelButtons,A as withoutHeader,I as withoutHeaderOrFooter};
