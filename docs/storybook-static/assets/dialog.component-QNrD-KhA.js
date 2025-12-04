import{u as I,a2 as O,a3 as _,n as i,U as S,k as m,V as E,T as x,h as A,B as P,I as L,F as D}from"./iframe-BgYPXA4a.js";import{t as N}from"./if-defined-BUbG2hnJ.js";import{B as C,P as B,F as R}from"./BackdropMixin-9TMZO38l.js";import{F}from"./FooterMixin-4-Dcjdp8.js";import{p as w}from"./index-BZB1R1_f.js";const T=I.constructTagName("responsivesettingsprovider"),c={FORCE_FULLSCREEN_DIALOG:!1,POPOVER_POSITIONING:"float",MEDIA:"unknown"},z=["float","dialog"],U=["unknown","mobile","desktop","tablet"],b=class b{constructor(t={}){this.media=c.MEDIA,this.forceFullscreenDialog=c.FORCE_FULLSCREEN_DIALOG,this.popoverPositioning=c.POPOVER_POSITIONING,Object.assign(this,t)}};b.context=O(T);let u=b;var $=Object.defineProperty,M=Object.getOwnPropertyDescriptor,f=(p,t,e,s)=>{for(var o=s>1?void 0:s?M(t,e):t,n=p.length-1,d;n>=0;n--)(d=p[n])&&(o=(s?d(t,e,o):d(o))||o);return s&&o&&$(t,e,o),o};class g extends _{constructor(){super({context:u.context,initialValue:new u({media:c.MEDIA,popoverPositioning:c.POPOVER_POSITIONING,forceFullscreenDialog:c.FORCE_FULLSCREEN_DIALOG})}),this.forceFullscreenDialog=c.FORCE_FULLSCREEN_DIALOG,this.privatePopoverPositioning=c.POPOVER_POSITIONING,this.privateMedia=c.MEDIA}static get Context(){return u.context}set popoverPositioning(t){z.includes(t)&&(this.privatePopoverPositioning=t)}get popoverPositioning(){return this.privatePopoverPositioning}set media(t){U.includes(t)&&(this.privateMedia=t)}get media(){return this.privateMedia}updateContext(){var t,e,s;(((t=this.context.value)==null?void 0:t.media)!==this.privateMedia||((e=this.context.value)==null?void 0:e.popoverPositioning)!==this.privatePopoverPositioning||((s=this.context.value)==null?void 0:s.forceFullscreenDialog)!==this.forceFullscreenDialog)&&(this.context.value.media=this.media,this.context.value.popoverPositioning=this.popoverPositioning,this.context.value.forceFullscreenDialog=this.forceFullscreenDialog,this.context.updateObservers())}}f([i({type:Boolean,attribute:"force-fullscreen-dialog",reflect:!0})],g.prototype,"forceFullscreenDialog",2);f([i({type:String,attribute:"popover-positioning",reflect:!0})],g.prototype,"popoverPositioning",1);f([i({type:String,attribute:"media",reflect:!0})],g.prototype,"media",1);g.register(T);const J=I.constructTagName("dialog"),G={DEFAULT:"default",PROMOTIONAL:"promotional"},l={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:G.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1,FOCUS_TRAP:!0,HIDE_BACKDROP:!1},Q=["small","medium","large","xlarge","fullscreen"],W=["dialog","alertdialog"];class h{static dispatchDialogEvent(t,e,s=!0){e.dispatchEvent(new CustomEvent(t,{detail:{show:e.visible},composed:!0,bubbles:s}))}static onShowDialog(t){this.dispatchDialogEvent("shown",t)}static onHideDialog(t){this.dispatchDialogEvent("hidden",t)}static onCloseDialog(t,e=!0){this.dispatchDialogEvent("close",t,e)}static onCreatedDialog(t){this.dispatchDialogEvent("created",t)}static onDestroyedDialog(t){this.dispatchDialogEvent("destroyed",t)}}const k=S`
  :host {
    --mdc-dialog-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-dialog-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-dialog-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-dialog-description-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-dialog-elevation-3: var(--mds-elevation-3);
    --mdc-dialog-width: 27rem; /* Default to small */
    --mdc-dialog-height: auto;
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
    position: absolute;
    right: 50%;
    bottom: 50%;
    transform: translateX(round(to-zero, 50%, 1px)) translateY(round(to-zero, 50%, 1px));
  }

  :host > [part='body']:first-of-type {
    padding-top: 0;
  }

  :host > [part='dialog-close-btn'] {
    margin-top: 0;
  }

  :host > slot[name='footer'] {
    margin-top: 0;
  }

  slot[name='footer-link']::slotted(*),
  slot[name='footer-button-primary']::slotted(*),
  slot[name='footer-button-secondary']::slotted(*),
  slot[name='footer']::slotted(*) {
    margin-top: 1rem;
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
    max-height: 100vh;
  }

  :host {
    width: var(--mdc-dialog-width);
    height: var(--mdc-dialog-height);
    max-width: 100%;
    max-height: calc(100vh - 2rem);
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
    padding-top: 1rem;
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
`,V=[k];var H=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,a=(p,t,e,s)=>{for(var o=s>1?void 0:s?Z(t,e):t,n=p.length-1,d;n>=0;n--)(d=p[n])&&(o=(s?d(t,e,o):d(o))||o);return s&&o&&H(t,e,o),o};const v=class v extends C(B(R(F(D)))){constructor(){super(...arguments),this.responsiveSettingsContext=w.consume({host:this,context:g.Context,subscribe:!0,syncProperties:["size"]}),this.id="",this.visible=l.VISIBLE,this.zIndex=l.Z_INDEX,this.internalSize=l.SIZE,this.variant=l.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedby=null,this.ariaDescription=null,this.headerTagName=l.HEADER_TAG_NAME,this.descriptionTagName=l.DESCRIPTION_TAG_NAME,this.role=l.ROLE,this.disableAriaHasPopup=l.DISABLE_ARIA_HAS_POPUP,this.focusTrap=l.FOCUS_TRAP,this.hideBackdrop=l.HIDE_BACKDROP,this.preventScroll=!0,this.triggerElement=null,this.lastActiveElement=null,this.onEscapeKeydown=t=>{!this.visible||t.code!=="Escape"||(t.preventDefault(),t.stopPropagation(),this.closeDialog())}}get size(){var t,e;return(e=(t=this.responsiveSettingsContext)==null?void 0:t.value)!=null&&e.forceFullscreenDialog?"fullscreen":this.internalSize}set size(t){this.internalSize=t}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var t,e;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),this.removeBackdrop(),(t=this.triggerElement)==null||t.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(e=this.deactivateFocusTrap)==null||e.call(this),this.focusBackToTrigger(),h.onDestroyedDialog(this)}applyZIndex(){var t;this.style.setProperty("z-index",`${this.zIndex}`),(t=this.backdropElement)==null||t.style.setProperty("z-index",`${this.zIndex-1}`)}async firstUpdated(t){super.firstUpdated(t),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.applyZIndex(),h.onCreatedDialog(this)}async updated(t){if(super.updated(t),t.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),t.has("visible")){const e=t.get("visible");await this.isOpenUpdated(e,this.visible)}t.has("zIndex")&&(this.zIndex===null&&(this.zIndex=l.Z_INDEX),this.applyZIndex()),t.has("variant")&&this.updateFooterButtonColors(this.variant),(t.has("ariaLabel")||t.has("ariaLabelledby")||t.has("ariaDescribedby")||t.has("ariaDescription")||t.has("headerText")||t.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),t.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var t,e;this.disableAriaHasPopup||(e=this.triggerElement)==null||e.setAttribute("aria-haspopup",((t=this.triggerElement)==null?void 0:t.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedby&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}closeDialog(){h.onCloseDialog(this,!1)}async isOpenUpdated(t,e){var s,o,n,d,y;t!==e&&(e&&!t?(this.lastActiveElement=document.activeElement,this.hideBackdrop||(this.removeBackdrop(),this.createBackdrop("dialog")),this.activatePreventScroll(),await this.updateComplete,this.focusTrap&&((s=this.activateFocusTrap)==null||s.call(this)),(o=this.setInitialFocus)==null||o.call(this),(n=this.triggerElement)==null||n.setAttribute("aria-expanded","true"),h.onShowDialog(this)):!e&&t&&(this.removeBackdrop(),(d=this.triggerElement)==null||d.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(y=this.deactivateFocusTrap)==null||y.call(this),this.focusBackToTrigger(),h.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}renderHeader(){return this.headerText?m` <div part="header-section">
          <div part="header">
            <slot name="header-prefix"></slot>
            <mdc-text
              part="header-text"
              tagname="${E[this.headerTagName.toUpperCase()]}"
              type="${x.BODY_LARGE_BOLD}"
            >
              ${this.headerText}
            </mdc-text>
          </div>
          ${this.descriptionText?m`<mdc-text
                part="description-text"
                tagname="${E[this.descriptionTagName.toUpperCase()]}"
                type="${x.BODY_MIDSIZE_REGULAR}"
              >
                ${this.descriptionText}
              </mdc-text>`:A}
        </div>`:A}renderBody(){return m` <div part="body">
      <slot name="dialog-body"></slot>
    </div>`}render(){return m`
      ${this.renderHeader()}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${l.CANCEL_ICON}"
        variant="${P.TERTIARY}"
        size="${L[20]}"
        aria-label="${N(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      ${this.renderBody()} ${this.renderFooter()}
    `}};v.styles=[...D.styles,...V];let r=v;a([i({type:String,reflect:!0})],r.prototype,"id",2);a([i({type:String,reflect:!0})],r.prototype,"triggerId",2);a([i({type:Boolean,reflect:!0})],r.prototype,"visible",2);a([i({type:Number,reflect:!0,attribute:"z-index"})],r.prototype,"zIndex",2);a([i({type:String,reflect:!0})],r.prototype,"size",1);a([i({type:String,reflect:!0})],r.prototype,"variant",2);a([i({type:String,attribute:"close-button-aria-label"})],r.prototype,"closeButtonAriaLabel",2);a([i({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel",2);a([i({type:String,reflect:!0,attribute:"aria-labelledby"})],r.prototype,"ariaLabelledby",2);a([i({type:String,reflect:!0,attribute:"aria-describedby"})],r.prototype,"ariaDescribedby",2);a([i({type:String,reflect:!0,attribute:"aria-description"})],r.prototype,"ariaDescription",2);a([i({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText",2);a([i({type:String,reflect:!0,attribute:"description-text"})],r.prototype,"descriptionText",2);a([i({type:String,reflect:!0,attribute:"header-tag-name"})],r.prototype,"headerTagName",2);a([i({type:String,reflect:!0,attribute:"description-tag-name"})],r.prototype,"descriptionTagName",2);a([i({type:String,reflect:!0})],r.prototype,"role",2);a([i({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],r.prototype,"disableAriaHasPopup",2);a([i({type:Boolean,reflect:!0,attribute:"focus-trap"})],r.prototype,"focusTrap",2);a([i({type:Boolean,reflect:!0,attribute:"hide-backdrop"})],r.prototype,"hideBackdrop",2);export{W as D,J as T,z as V,l as a,G as b,Q as c,r as d,U as e};
