import{u as T,a9 as S,aa as _,n as i,R as b,V as f,a2 as L,k as m,T as A,h as D,B as P,I as N,C as I}from"./iframe-DyOAHjNf.js";import{t as C}from"./if-defined-BEvGEaEj.js";import{B as R,P as B,F,D as w}from"./BackdropMixin-BWf7ke6g.js";import{F as M}from"./FooterMixin-DFaivXgA.js";import{p as k}from"./index-CaeVKSVA.js";import{K as z,a as G,A as U}from"./KeyDownHandledMixin-BCqzWN8b.js";const O=T.constructTagName("responsivesettingsprovider"),c={FORCE_FULLSCREEN_DIALOG:!1,POPOVER_POSITIONING:"float",MEDIA:"unknown"},$=["float","dialog"],H=["unknown","mobile","desktop","tablet"],y=class y{constructor(t={}){this.media=c.MEDIA,this.forceFullscreenDialog=c.FORCE_FULLSCREEN_DIALOG,this.popoverPositioning=c.POPOVER_POSITIONING,Object.assign(this,t)}};y.context=S(O);let u=y;var V=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,v=(p,t,e,s)=>{for(var o=s>1?void 0:s?Z(t,e):t,l=p.length-1,d;l>=0;l--)(d=p[l])&&(o=(s?d(t,e,o):d(o))||o);return s&&o&&V(t,e,o),o};class g extends _{constructor(){super({context:u.context,initialValue:new u({media:c.MEDIA,popoverPositioning:c.POPOVER_POSITIONING,forceFullscreenDialog:c.FORCE_FULLSCREEN_DIALOG})}),this.forceFullscreenDialog=c.FORCE_FULLSCREEN_DIALOG,this.privatePopoverPositioning=c.POPOVER_POSITIONING,this.privateMedia=c.MEDIA}static get Context(){return u.context}set popoverPositioning(t){$.includes(t)&&(this.privatePopoverPositioning=t)}get popoverPositioning(){return this.privatePopoverPositioning}set media(t){H.includes(t)&&(this.privateMedia=t)}get media(){return this.privateMedia}updateContext(){var t,e,s;(((t=this.context.value)==null?void 0:t.media)!==this.privateMedia||((e=this.context.value)==null?void 0:e.popoverPositioning)!==this.privatePopoverPositioning||((s=this.context.value)==null?void 0:s.forceFullscreenDialog)!==this.forceFullscreenDialog)&&(this.context.value.media=this.media,this.context.value.popoverPositioning=this.popoverPositioning,this.context.value.forceFullscreenDialog=this.forceFullscreenDialog,this.context.updateObservers())}}v([i({type:Boolean,attribute:"force-fullscreen-dialog",reflect:!0})],g.prototype,"forceFullscreenDialog",2);v([i({type:String,attribute:"popover-positioning",reflect:!0})],g.prototype,"popoverPositioning",1);v([i({type:String,attribute:"media",reflect:!0})],g.prototype,"media",1);g.register(O);const rt=T.constructTagName("dialog"),K={DEFAULT:"default",PROMOTIONAL:"promotional"},n={VISIBLE:!1,Z_INDEX:1e3,ROLE:b.DIALOG,SIZE:"small",HEADER_TAG_NAME:f.H2,DESCRIPTION_TAG_NAME:f.P,CANCEL_ICON:"cancel-bold",VARIANT:K.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1,FOCUS_TRAP:!0,HIDE_BACKDROP:!1},at=["small","medium","large","xlarge","fullscreen"],ot=[b.DIALOG,b.ALERTDIALOG];class h{static dispatchDialogEvent(t,e,s=!0){e.dispatchEvent(new CustomEvent(t,{detail:{show:e.visible},composed:!0,bubbles:s}))}static onShowDialog(t){this.dispatchDialogEvent("shown",t)}static onHideDialog(t){this.dispatchDialogEvent("hidden",t)}static onCloseDialog(t,e=!0){this.dispatchDialogEvent("close",t,e)}static onCreatedDialog(t){this.dispatchDialogEvent("created",t)}static onDestroyedDialog(t){this.dispatchDialogEvent("destroyed",t)}}const j=L`
  :host {
    --mdc-dialog-primary-background-color: var(--mds-color-theme-background-solid-primary-normal);
    --mdc-dialog-border-color: var(--mds-color-theme-outline-secondary-normal);
    --mdc-dialog-header-text-color: var(--mds-color-theme-text-primary-normal);
    --mdc-dialog-description-text-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-dialog-elevation-3: var(--mds-elevation-3);
    --mdc-dialog-width: 27rem; /* Default to small */
    --mdc-dialog-height: auto;
    --mdc-dialog-padding: 1.5rem;
    --mdc-dialog-backdrop-color: var(--mds-color-theme-common-overlays-secondary-normal);
    --mdc-backdrop-mixin-background-color: var(--mdc-dialog-backdrop-color);

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
    transform: translateX(50%) translateY(50%);
  }

  @supports (transform: translateX(round(to-zero, 1px, 1px))) {
    :host {
      transform: translateX(round(to-zero, 50%, 1px)) translateY(round(to-zero, 50%, 1px));
    }
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
`,X=[j];var Y=Object.defineProperty,q=Object.getOwnPropertyDescriptor,a=(p,t,e,s)=>{for(var o=s>1?void 0:s?q(t,e):t,l=p.length-1,d;l>=0;l--)(d=p[l])&&(o=(s?d(t,e,o):d(o))||o);return s&&o&&Y(t,e,o),o};const x=class x extends z(G(R(B(F(M(I)))))){constructor(){super(...arguments),this.responsiveSettingsContext=k.consume({host:this,context:g.Context,subscribe:!0,syncProperties:["size"]}),this.depthManager=new w(this),this.id="",this.visible=n.VISIBLE,this.internalSize=n.SIZE,this.variant=n.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedby=null,this.ariaDescription=null,this.headerTagName=n.HEADER_TAG_NAME,this.descriptionTagName=n.DESCRIPTION_TAG_NAME,this.role=n.ROLE,this.disableAriaHasPopup=n.DISABLE_ARIA_HAS_POPUP,this.focusTrap=n.FOCUS_TRAP,this.hideBackdrop=n.HIDE_BACKDROP,this.stackGroupName="",this.preventScroll=!0,this.triggerElement=null,this.lastActiveElement=null,this.onEscapeKeydown=t=>{!this.visible||this.getActionForKeyEvent(t)!==U.ESCAPE||!this.depthManager.isHostOnTop()||(t.preventDefault(),t.stopPropagation(),this.keyDownEventHandled(),this.closeDialog())}}get zIndex(){return Number.isInteger(this.internalZIndex)?this.internalZIndex:this.depthManager.getHostZIndex()}set zIndex(t){this.internalZIndex=t}get size(){var t,e;return(e=(t=this.responsiveSettingsContext)==null?void 0:t.value)!=null&&e.forceFullscreenDialog?"fullscreen":this.internalSize}set size(t){this.internalSize=t}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var t,e;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),this.removeBackdrop(),(t=this.triggerElement)==null||t.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(e=this.deactivateFocusTrap)==null||e.call(this),this.focusBackToTrigger(),h.onDestroyedDialog(this)}applyZIndex(){this.style.setProperty("z-index",`${this.zIndex}`)}async firstUpdated(t){super.firstUpdated(t),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.applyZIndex(),h.onCreatedDialog(this)}async updated(t){if(super.updated(t),t.has("triggerID")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerID}"]`),this.setupAriaHasPopup()),t.has("visible")){const e=t.get("visible");await this.isOpenUpdated(e,this.visible)}t.has("zIndex")&&(this.zIndex===null&&(this.zIndex=n.Z_INDEX),this.applyZIndex()),t.has("variant")&&this.updateFooterButtonColors(this.variant),(t.has("ariaLabel")||t.has("ariaLabelledby")||t.has("ariaDescribedby")||t.has("ariaDescription")||t.has("headerText")||t.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),t.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var t,e;this.disableAriaHasPopup||(e=this.triggerElement)==null||e.setAttribute("aria-haspopup",((t=this.triggerElement)==null?void 0:t.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerID&&this.setAttribute("aria-labelledby",this.triggerID)),!this.ariaDescribedby&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerID&&this.setAttribute("aria-describedby",this.triggerID))}closeDialog(){this.depthManager.popHost(),h.onCloseDialog(this,!1)}onComponentStackChanged(t){t==="removed"?this.visible=!1:t==="moved"&&this.requestUpdate("zIndex")}async isOpenUpdated(t,e){var s,o,l,d,E;t!==e&&(e&&!t?(this.depthManager.pushHost()&&this.requestUpdate("zIndex"),this.lastActiveElement=document.activeElement,this.hideBackdrop||(this.removeBackdrop(),this.createBackdrop("dialog")),this.activatePreventScroll(),await this.updateComplete,this.focusTrap&&((s=this.activateFocusTrap)==null||s.call(this)),(o=this.setInitialFocus)==null||o.call(this),(l=this.triggerElement)==null||l.setAttribute("aria-expanded","true"),h.onShowDialog(this)):!e&&t&&(this.depthManager.popHost(),this.removeBackdrop(),(d=this.triggerElement)==null||d.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(E=this.deactivateFocusTrap)==null||E.call(this),this.focusBackToTrigger(),h.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}renderHeader(){return this.headerText?m` <div part="header-section">
          <div part="header">
            <slot name="header-prefix"></slot>
            <mdc-text
              part="header-text"
              tagname="${f[this.headerTagName.toUpperCase()]}"
              type="${A.BODY_LARGE_BOLD}"
            >
              ${this.headerText}
            </mdc-text>
          </div>
          ${this.descriptionText?m`<mdc-text
                part="description-text"
                tagname="${f[this.descriptionTagName.toUpperCase()]}"
                type="${A.BODY_MIDSIZE_REGULAR}"
              >
                ${this.descriptionText}
              </mdc-text>`:D}
        </div>`:D}renderBody(){return m` <div part="body">
      <slot name="dialog-body"></slot>
    </div>`}render(){return m`
      ${this.renderHeader()}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${n.CANCEL_ICON}"
        variant="${P.TERTIARY}"
        size="${N[20]}"
        aria-label="${C(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      ${this.renderBody()} ${this.renderFooter()}
    `}};x.styles=[...I.styles,...X];let r=x;a([i({type:String,reflect:!0})],r.prototype,"id",2);a([i({type:String,reflect:!0})],r.prototype,"triggerID",2);a([i({type:Boolean,reflect:!0})],r.prototype,"visible",2);a([i({type:Number,reflect:!0,attribute:"z-index"})],r.prototype,"zIndex",1);a([i({type:String,reflect:!0})],r.prototype,"size",1);a([i({type:String,reflect:!0})],r.prototype,"variant",2);a([i({type:String,attribute:"close-button-aria-label"})],r.prototype,"closeButtonAriaLabel",2);a([i({type:String,reflect:!0,attribute:"aria-label"})],r.prototype,"ariaLabel",2);a([i({type:String,reflect:!0,attribute:"aria-labelledby"})],r.prototype,"ariaLabelledby",2);a([i({type:String,reflect:!0,attribute:"aria-describedby"})],r.prototype,"ariaDescribedby",2);a([i({type:String,reflect:!0,attribute:"aria-description"})],r.prototype,"ariaDescription",2);a([i({type:String,reflect:!0,attribute:"header-text"})],r.prototype,"headerText",2);a([i({type:String,reflect:!0,attribute:"description-text"})],r.prototype,"descriptionText",2);a([i({type:String,reflect:!0,attribute:"header-tag-name"})],r.prototype,"headerTagName",2);a([i({type:String,reflect:!0,attribute:"description-tag-name"})],r.prototype,"descriptionTagName",2);a([i({type:String,reflect:!0})],r.prototype,"role",2);a([i({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],r.prototype,"disableAriaHasPopup",2);a([i({type:Boolean,reflect:!0,attribute:"focus-trap"})],r.prototype,"focusTrap",2);a([i({type:Boolean,reflect:!0,attribute:"hide-backdrop"})],r.prototype,"hideBackdrop",2);a([i({type:String,attribute:"stack-group-name",reflect:!0})],r.prototype,"stackGroupName",2);export{ot as D,rt as T,$ as V,n as a,K as b,at as c,r as d,H as e};
