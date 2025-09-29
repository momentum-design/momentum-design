import{u as v,i as A,k as p,D as u,C as b,n as a}from"./iframe-BZzdMAZp.js";import{t as x}from"./if-defined-DZZrGFtM.js";import{B as E,P as T,F as D}from"./BackdropMixin-sWGUFycW.js";import{V as y,T as f}from"./index-BjB2ba7z.js";import{B as I,I as S}from"./button.constants-XDh12voX.js";import{F as _}from"./FooterMixin-Db6o9Dfg.js";const F=v.constructTagName("dialog"),B={DEFAULT:"default",PROMOTIONAL:"promotional"},s={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:B.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1,FOCUS_TRAP:!0},U=["small","medium","large","xlarge","fullscreen"],P=["dialog","alertdialog"];class c{static dispatchDialogEvent(t,i,d=!0){i.dispatchEvent(new CustomEvent(t,{detail:{show:i.visible},composed:!0,bubbles:d}))}static onShowDialog(t){this.dispatchDialogEvent("shown",t)}static onHideDialog(t){this.dispatchDialogEvent("hidden",t)}static onCloseDialog(t,i=!0){this.dispatchDialogEvent("close",t,i)}static onCreatedDialog(t){this.dispatchDialogEvent("created",t)}static onDestroyedDialog(t){this.dispatchDialogEvent("destroyed",t)}}const L=A`
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
    height: var(--mdc-dialog-height);
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
`,N=[L];var C=Object.defineProperty,r=(h,t,i,d)=>{for(var o=void 0,l=h.length-1,n;l>=0;l--)(n=h[l])&&(o=n(t,i,o)||o);return o&&C(t,i,o),o};const g=class g extends E(T(D(_(b)))){constructor(){super(...arguments),this.id="",this.visible=s.VISIBLE,this.zIndex=s.Z_INDEX,this.size=s.SIZE,this.variant=s.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=s.HEADER_TAG_NAME,this.descriptionTagName=s.DESCRIPTION_TAG_NAME,this.role=s.ROLE,this.disableAriaHasPopup=s.DISABLE_ARIA_HAS_POPUP,this.focusTrap=s.FOCUS_TRAP,this.preventScroll=!0,this.triggerElement=null,this.lastActiveElement=null,this.onEscapeKeydown=t=>{!this.visible||t.code!=="Escape"||(t.preventDefault(),t.stopPropagation(),this.closeDialog())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var t,i;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),this.removeBackdrop(),(t=this.triggerElement)==null||t.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(i=this.deactivateFocusTrap)==null||i.call(this),this.focusBackToTrigger(),c.onDestroyedDialog(this)}applyZIndex(){var t;this.style.setProperty("z-index",`${this.zIndex}`),(t=this.backdropElement)==null||t.style.setProperty("z-index",`${this.zIndex-1}`)}async firstUpdated(t){super.firstUpdated(t),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.applyZIndex(),c.onCreatedDialog(this)}async updated(t){if(super.updated(t),t.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),t.has("visible")){const i=t.get("visible");await this.isOpenUpdated(i,this.visible)}t.has("zIndex")&&(this.zIndex===null&&(this.zIndex=s.Z_INDEX),this.applyZIndex()),t.has("variant")&&this.updateFooterButtonColors(this.variant),(t.has("ariaLabel")||t.has("ariaLabelledBy")||t.has("ariaDescribedBy")||t.has("ariaDescription")||t.has("headerText")||t.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),t.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var t,i;this.disableAriaHasPopup||(i=this.triggerElement)==null||i.setAttribute("aria-haspopup",((t=this.triggerElement)==null?void 0:t.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}closeDialog(){c.onCloseDialog(this,!1)}async isOpenUpdated(t,i){var d,o,l,n,m;t!==i&&(i&&!t?(this.lastActiveElement=document.activeElement,this.removeBackdrop(),this.createBackdrop("dialog"),this.activatePreventScroll(),await this.updateComplete,this.focusTrap&&((d=this.activateFocusTrap)==null||d.call(this)),(o=this.setInitialFocus)==null||o.call(this),(l=this.triggerElement)==null||l.setAttribute("aria-expanded","true"),c.onShowDialog(this)):!i&&t&&(this.removeBackdrop(),(n=this.triggerElement)==null||n.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(m=this.deactivateFocusTrap)==null||m.call(this),this.focusBackToTrigger(),c.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}renderHeader(){return this.headerText?p` <div part="header-section">
          <div part="header">
            <slot name="header-prefix"></slot>
            <mdc-text
              part="header-text"
              tagname="${y[this.headerTagName.toUpperCase()]}"
              type="${f.BODY_LARGE_BOLD}"
            >
              ${this.headerText}
            </mdc-text>
          </div>
          ${this.descriptionText?p`<mdc-text
                part="description-text"
                tagname="${y[this.descriptionTagName.toUpperCase()]}"
                type="${f.BODY_MIDSIZE_REGULAR}"
              >
                ${this.descriptionText}
              </mdc-text>`:u}
        </div>`:u}renderBody(){return p` <div part="body">
      <slot name="dialog-body"></slot>
    </div>`}render(){return p`
      ${this.renderHeader()}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${s.CANCEL_ICON}"
        variant="${I.TERTIARY}"
        size="${S[20]}"
        aria-label="${x(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      ${this.renderBody()} ${this.renderFooter()}
    `}};g.styles=[...b.styles,...N];let e=g;r([a({type:String,reflect:!0})],e.prototype,"id");r([a({type:String,reflect:!0})],e.prototype,"triggerId");r([a({type:Boolean,reflect:!0})],e.prototype,"visible");r([a({type:Number,reflect:!0,attribute:"z-index"})],e.prototype,"zIndex");r([a({type:String,reflect:!0})],e.prototype,"size");r([a({type:String,reflect:!0})],e.prototype,"variant");r([a({type:String,attribute:"close-button-aria-label"})],e.prototype,"closeButtonAriaLabel");r([a({type:String,reflect:!0,attribute:"aria-label"})],e.prototype,"ariaLabel");r([a({type:String,reflect:!0,attribute:"aria-labelledby"})],e.prototype,"ariaLabelledby");r([a({type:String,reflect:!0,attribute:"aria-describedby"})],e.prototype,"ariaDescribedBy");r([a({type:String,reflect:!0,attribute:"aria-description"})],e.prototype,"ariaDescription");r([a({type:String,reflect:!0,attribute:"header-text"})],e.prototype,"headerText");r([a({type:String,reflect:!0,attribute:"description-text"})],e.prototype,"descriptionText");r([a({type:String,reflect:!0,attribute:"header-tag-name"})],e.prototype,"headerTagName");r([a({type:String,reflect:!0,attribute:"description-tag-name"})],e.prototype,"descriptionTagName");r([a({type:String,reflect:!0})],e.prototype,"role");r([a({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],e.prototype,"disableAriaHasPopup");r([a({type:Boolean,reflect:!0,attribute:"focus-trap"})],e.prototype,"focusTrap");export{B as D,F as T,P as a,U as b,s as c,e as d};
