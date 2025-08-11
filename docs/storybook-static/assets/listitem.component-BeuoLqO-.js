import{i as x,k as l,D as E}from"./lit-element-D5KKan5q.js";import{u as T,C as g,n as r}from"./provider.component-BaQC7CJH.js";import{o as y}from"./query-assigned-elements-uEuc3rg8.js";import{K as d}from"./keys-hFXe221I.js";import{D as L}from"./DisabledMixin-DcYwkKYf.js";import{T as A}from"./TabIndexMixin-TvgH_pmh.js";import{R as k}from"./roles-DU0xbrD4.js";import{V as I,T as n}from"./index-riA1qVWu.js";import{a as u}from"./index-ChH4-Or7.js";import{a as S}from"./popover.component-BcWkwQje.js";import{a as C}from"./index-B-GnYs90.js";import{v as f}from"./v4-CmTdKEVZ.js";const W=T.constructTagName("listitem"),$={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},v={VARIANT:$.FULL_WIDTH,TOOLTIP_PLACEMENT:S.TOP},w=x`
  :host {
    --mdc-listitem-default-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-listitem-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-listitem-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-listitem-primary-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-listitem-secondary-label-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-listitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-listitem-column-gap: 0.75rem;
    --mdc-listitem-padding-left-right: 0.75rem;
    --mdc-listitem-padding-top-bottom: 0.5rem;
    --mdc-listitem-cursor: pointer;
    --mdc-listitem-width: 100%;
    --mdc-listitem-height: auto;
  }
  :host {
    background-color: var(--mdc-listitem-default-background-color);
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    flex-direction: row;
    cursor: var(--mdc-listitem-cursor);
    padding: var(--mdc-listitem-padding-top-bottom) var(--mdc-listitem-padding-left-right);
    width: var(--mdc-listitem-width);
    height: var(--mdc-listitem-height);
  }
  :host([variant='inset-rectangle']) {
    border-radius: 0.5rem;
  }
  :host([variant='inset-pill']) {
    border-radius: 3.125rem;
  }
  :host::part(leading-text) {
    flex: 1;
    /** 2x of column gap on both ends of the listitem - 100% width */
    width: calc(100% - (2 * var(--mdc-listitem-padding-left-right)));
  }
  :host::part(leading-text-primary-label),
  :host::part(leading-text-secondary-label),
  :host::part(leading-text-tertiary-label),
  :host::part(trailing-text-side-header),
  :host::part(trailing-text-subline) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  :host([disabled]),
  :host([disabled]:hover),
  :host([disabled]:active),
  :host([disabled])::part(leading-text-secondary-label),
  :host([disabled])::part(leading-text-tertiary-label),
  :host([disabled])::part(leading-text-primary-label),
  :host([disabled])::part(trailing-text-side-header),
  :host([disabled])::part(trailing-text-subline),
  :host([soft-disabled]),
  :host([soft-disabled]:hover),
  :host([soft-disabled]:active),
  :host([soft-disabled])::part(leading-text-secondary-label),
  :host([soft-disabled])::part(leading-text-tertiary-label),
  :host([soft-disabled])::part(leading-text-primary-label),
  :host([soft-disabled])::part(trailing-text-side-header),
  :host([soft-disabled])::part(trailing-text-subline) {
    background-color: unset;
    color: var(--mdc-listitem-disabled-color);
    cursor: default;
  }
  :host(:hover) {
    background-color: var(--mdc-listitem-background-color-hover);
  }
  :host(:active) {
    background-color: var(--mdc-listitem-background-color-active);
  }
  :host::part(leading),
  :host::part(trailing) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    width: 100%;
  }
  :host::part(trailing) {
    justify-content: flex-end;
  }
  :host::part(leading-text-secondary-label),
  :host::part(leading-text-tertiary-label) {
    color: var(--mdc-listitem-secondary-label-color);
  }
  :host::part(leading-text-primary-label),
  :host::part(trailing-text-side-header),
  :host::part(trailing-text-subline) {
    color: var(--mdc-listitem-primary-label-color);
  }
  :host::part(trailing-text) {
    text-align: right;
  }
  ::slotted([slot='leading-controls']),
  ::slotted([slot='trailing-controls']) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    flex-direction: row;
  }
`,D=[w,...C()],P=()=>`listitem-tooltip-popover-${f()}`,_=()=>`listitem-tooltip-triggerid-${f()}`;class c{static dispatchListItemEvent(t,i){i.dispatchEvent(new Event(t,{composed:!0,bubbles:!0}))}static onDisableListItem(t){this.dispatchListItemEvent("disabled",t)}static onEnableListItem(t){this.dispatchListItemEvent("enabled",t)}static onCreatedListItem(t){setTimeout(()=>{this.dispatchListItemEvent("created",t)},0)}static onDestroyedListItem(t){this.dispatchListItemEvent("destroyed",t)}}var R=Object.defineProperty,o=(p,t,i,s)=>{for(var a=void 0,h=p.length-1,b;h>=0;h--)(b=p[h])&&(a=b(t,i,a)||a);return a&&R(t,i,a),a};const m=class m extends L(A(g)){constructor(){super(),this.variant=v.VARIANT,this.tooltipPlacement=v.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("focusin",this.displayTooltipForLongText.bind(this)),this.addEventListener("mouseenter",this.displayTooltipForLongText.bind(this)),this.addEventListener("focusout",this.hideTooltipOnLeave.bind(this)),this.addEventListener("mouseout",this.hideTooltipOnLeave.bind(this)),this.addEventListener("click",this.handleClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=this.role||k.LISTITEM,this.id=this.id||_(),c.onCreatedListItem(this)}disconnectedCallback(){super.disconnectedCallback(),c.onDestroyedListItem(this)}handleKeyDown(t){(t.key===d.ENTER||t.key===d.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(t){if(this.disabled){t.stopImmediatePropagation(),t.preventDefault();return}this.hideTooltipOnLeave()}displayTooltipForLongText(){var i,s;if(!this.tooltipText)return;this.hideTooltipOnLeave();const t=document.createElement(u);t.id=P(),t.textContent=this.tooltipText,t.setAttribute("triggerid",this.id),t.setAttribute("placement",this.tooltipPlacement),t.setAttribute("visible",""),t.setAttribute("show-arrow",""),(i=this.parentElement)!=null&&i.hasAttribute("slot")&&t.setAttribute("slot",this.parentElement.getAttribute("slot")||""),(s=this.parentElement)==null||s.after(t)}hideTooltipOnLeave(){const t=document.querySelector(`${u}[triggerid="${this.id}"]`);t&&t.remove()}getText(t,i,s){return l`
      <slot name="${t}">
        ${s?l`<mdc-text part="${t}" type="${i}" tagname="${I.SPAN}">${s}</mdc-text>`:E}
      </slot>
    `}disableSlottedChildren(t=!1){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(i=>{t?(i.setAttribute("disabled",""),c.onDisableListItem(this)):(i.removeAttribute("disabled"),c.onEnableListItem(this))}),this.setAttribute("aria-disabled",`${t}`)}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled)),t.has("softDisabled")&&this.disableSlottedChildren(this.softDisabled)}renderTrailingControls(){return l`<slot
      name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}renderLeadingControls(){return l`<slot
      name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}stopEventPropagation(t){(t instanceof KeyboardEvent&&(t.key===d.ENTER||t.key===d.SPACE)||t instanceof MouseEvent)&&t.stopPropagation()}render(){return l`
      <slot name="content">
        <div part="leading">
          ${this.renderLeadingControls()}
          <div part="leading-text">
            ${this.getText("leading-text-primary-label",n.BODY_MIDSIZE_REGULAR,this.label)}
            ${this.getText("leading-text-secondary-label",n.BODY_SMALL_REGULAR,this.secondaryLabel)}
            ${this.getText("leading-text-tertiary-label",n.BODY_SMALL_REGULAR,this.tertiaryLabel)}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${this.getText("trailing-text-side-header",n.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
            ${this.getText("trailing-text-subline",n.BODY_SMALL_REGULAR,this.sublineText)}
          </div>
          ${this.renderTrailingControls()}
        </div>
      </slot>
    `}};m.styles=[...g.styles,...D];let e=m;o([y({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");o([y({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");o([r({type:String,reflect:!0})],e.prototype,"variant");o([r({type:String,reflect:!0})],e.prototype,"label");o([r({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");o([r({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");o([r({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");o([r({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");o([r({type:Boolean,reflect:!0,attribute:"soft-disabled"})],e.prototype,"softDisabled");o([r({type:String,reflect:!0,attribute:"tooltip-text"})],e.prototype,"tooltipText");o([r({type:String,reflect:!0,attribute:"tooltip-placement"})],e.prototype,"tooltipPlacement");export{$ as L,W as T,e as a};
