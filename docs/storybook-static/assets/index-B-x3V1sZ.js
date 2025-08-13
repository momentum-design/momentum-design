import"./index-9Z2SQRnZ.js";import{V as b,T as f}from"./index-riA1qVWu.js";import{i as v,k as h,D as y}from"./lit-element-D5KKan5q.js";import{t as x}from"./if-defined-D5BV9-c0.js";import{u as A,C as E,n as a}from"./provider.component-BaQC7CJH.js";import{c as T,F as D}from"./popover.component-BcWkwQje.js";import{B as I,I as S}from"./button.constants-BpS-4nLb.js";import{F as L}from"./FooterMixin-9o7JZZe3.js";const _=A.constructTagName("dialog"),k={DEFAULT:"default",PROMOTIONAL:"promotional"},s={VISIBLE:!1,Z_INDEX:1e3,ROLE:"dialog",SIZE:"small",HEADER_TAG_NAME:"h2",DESCRIPTION_TAG_NAME:"p",CANCEL_ICON:"cancel-bold",VARIANT:k.DEFAULT,DISABLE_ARIA_HAS_POPUP:!1,FOCUS_TRAP:!0},G=["small","medium","large","xlarge","fullscreen"],H=["dialog","alertdialog"];class c{static dispatchDialogEvent(t,e,o=!0){e.dispatchEvent(new CustomEvent(t,{detail:{show:e.visible},composed:!0,bubbles:o}))}static onShowDialog(t){this.dispatchDialogEvent("shown",t)}static onHideDialog(t){this.dispatchDialogEvent("hidden",t)}static onCloseDialog(t,e=!0){this.dispatchDialogEvent("close",t,e)}static onCreatedDialog(t){this.dispatchDialogEvent("created",t)}static onDestroyedDialog(t){this.dispatchDialogEvent("destroyed",t)}}const C=v`
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
`,N=[C];var B=Object.defineProperty,r=(p,t,e,o)=>{for(var l=void 0,d=p.length-1,n;d>=0;d--)(n=p[d])&&(l=n(t,e,l)||l);return l&&B(t,e,l),l};const m=class m extends T(D(L(E))){constructor(){super(...arguments),this.id="",this.visible=s.VISIBLE,this.zIndex=s.Z_INDEX,this.size=s.SIZE,this.variant=s.VARIANT,this.closeButtonAriaLabel=null,this.ariaLabel=null,this.ariaLabelledby=null,this.ariaDescribedBy=null,this.ariaDescription=null,this.headerTagName=s.HEADER_TAG_NAME,this.descriptionTagName=s.DESCRIPTION_TAG_NAME,this.role=s.ROLE,this.disableAriaHasPopup=s.DISABLE_ARIA_HAS_POPUP,this.focusTrap=s.FOCUS_TRAP,this.preventScroll=!0,this.triggerElement=null,this.backdropElement=null,this.lastActiveElement=null,this.onEscapeKeydown=t=>{!this.visible||t.code!=="Escape"||(t.preventDefault(),t.stopPropagation(),this.closeDialog())}}connectedCallback(){super.connectedCallback(),this.addEventListener("keydown",this.onEscapeKeydown.bind(this))}disconnectedCallback(){var t,e,o;super.disconnectedCallback(),this.removeEventListener("keydown",this.onEscapeKeydown),(t=this.backdropElement)==null||t.remove(),this.backdropElement=null,(e=this.triggerElement)==null||e.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(o=this.deactivateFocusTrap)==null||o.call(this),this.focusBackToTrigger(),c.onDestroyedDialog(this)}applyZIndex(){var t;this.style.setProperty("z-index",`${this.zIndex}`),(t=this.backdropElement)==null||t.style.setProperty("z-index",`${this.zIndex-1}`)}async firstUpdated(t){super.firstUpdated(t),this.setAttribute("aria-modal","true"),this.setupAriaLabelledDescribedBy(),this.applyZIndex(),c.onCreatedDialog(this)}async updated(t){if(super.updated(t),t.has("triggerId")&&(this.triggerElement=this.getRootNode().querySelector(`[id="${this.triggerId}"]`),this.setupAriaHasPopup()),t.has("visible")){const e=t.get("visible");await this.isOpenUpdated(e,this.visible)}t.has("zIndex")&&(this.zIndex===null&&(this.zIndex=s.Z_INDEX),this.applyZIndex()),t.has("variant")&&this.updateFooterButtonColors(this.variant),(t.has("ariaLabel")||t.has("ariaLabelledBy")||t.has("ariaDescribedBy")||t.has("ariaDescription")||t.has("headerText")||t.has("descriptionText"))&&this.setupAriaLabelledDescribedBy(),t.has("focusTrap")&&!this.focusTrap&&this.visible&&this.deactivateFocusTrap()}setupAriaHasPopup(){var t,e;this.disableAriaHasPopup||(e=this.triggerElement)==null||e.setAttribute("aria-haspopup",((t=this.triggerElement)==null?void 0:t.getAttribute("aria-haspopup"))||"dialog")}setupAriaLabelledDescribedBy(){!this.ariaLabelledby&&!this.ariaLabel&&(this.headerText?this.setAttribute("aria-label",this.headerText):this.triggerId&&this.setAttribute("aria-labelledby",this.triggerId)),!this.ariaDescribedBy&&!this.ariaDescription&&(this.descriptionText?this.setAttribute("aria-description",this.descriptionText):this.triggerId&&this.setAttribute("aria-describedby",this.triggerId))}createBackdrop(){var o;this.backdropElement&&this.backdropElement.parentElement&&(this.backdropElement.parentElement.removeChild(this.backdropElement),this.backdropElement=null);const t=document.createElement("div");t.classList.add("dialog-backdrop");const e=document.createElement("style");e.textContent=`
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex-1};
      }
    `,t.appendChild(e),(o=this.parentElement)==null||o.appendChild(t),this.backdropElement=t}closeDialog(){c.onCloseDialog(this,!1)}async isOpenUpdated(t,e){var o,l,d,n,g,u;t!==e&&(e&&!t?(this.lastActiveElement=document.activeElement,this.createBackdrop(),this.activatePreventScroll(),await this.updateComplete,this.focusTrap&&((o=this.activateFocusTrap)==null||o.call(this)),(l=this.setInitialFocus)==null||l.call(this),(d=this.triggerElement)==null||d.setAttribute("aria-expanded","true"),c.onShowDialog(this)):!e&&t&&((n=this.backdropElement)==null||n.remove(),this.backdropElement=null,(g=this.triggerElement)==null||g.setAttribute("aria-expanded","false"),this.deactivatePreventScroll(),(u=this.deactivateFocusTrap)==null||u.call(this),this.focusBackToTrigger(),c.onHideDialog(this)))}focusBackToTrigger(){this.triggerElement?this.triggerElement.focus():this.lastActiveElement&&this.lastActiveElement.focus&&this.lastActiveElement.focus()}render(){return h`
      ${this.headerText?h` <div part="header-section">
            <div part="header">
              <slot name="header-prefix"></slot>
              <mdc-text
                part="header-text"
                tagname="${b[this.headerTagName.toUpperCase()]}"
                type="${f.BODY_LARGE_BOLD}"
              >
                ${this.headerText}
              </mdc-text>
            </div>
            ${this.descriptionText?h`<mdc-text
                  part="description-text"
                  tagname="${b[this.descriptionTagName.toUpperCase()]}"
                  type="${f.BODY_MIDSIZE_REGULAR}"
                >
                  ${this.descriptionText}
                </mdc-text>`:y}
          </div>`:y}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${s.CANCEL_ICON}"
        variant="${I.TERTIARY}"
        size="${S[20]}"
        aria-label="${x(this.closeButtonAriaLabel)||""}"
        @click="${this.closeDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `}};m.styles=[...E.styles,...N];let i=m;r([a({type:String,reflect:!0})],i.prototype,"id");r([a({type:String,reflect:!0})],i.prototype,"triggerId");r([a({type:Boolean,reflect:!0})],i.prototype,"visible");r([a({type:Number,reflect:!0,attribute:"z-index"})],i.prototype,"zIndex");r([a({type:String,reflect:!0})],i.prototype,"size");r([a({type:String,reflect:!0})],i.prototype,"variant");r([a({type:String,attribute:"close-button-aria-label"})],i.prototype,"closeButtonAriaLabel");r([a({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");r([a({type:String,reflect:!0,attribute:"aria-labelledby"})],i.prototype,"ariaLabelledby");r([a({type:String,reflect:!0,attribute:"aria-describedby"})],i.prototype,"ariaDescribedBy");r([a({type:String,reflect:!0,attribute:"aria-description"})],i.prototype,"ariaDescription");r([a({type:String,reflect:!0,attribute:"header-text"})],i.prototype,"headerText");r([a({type:String,reflect:!0,attribute:"description-text"})],i.prototype,"descriptionText");r([a({type:String,reflect:!0,attribute:"header-tag-name"})],i.prototype,"headerTagName");r([a({type:String,reflect:!0,attribute:"description-tag-name"})],i.prototype,"descriptionTagName");r([a({type:String,reflect:!0})],i.prototype,"role");r([a({type:Boolean,reflect:!0,attribute:"disable-aria-haspopup"})],i.prototype,"disableAriaHasPopup");r([a({type:Boolean,reflect:!0,attribute:"focus-trap"})],i.prototype,"focusTrap");i.register(_);export{k as D,H as a,G as b,s as c};
