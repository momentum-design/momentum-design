import{i as x,k as d,D as T}from"./lit-element-D5KKan5q.js";import{n as s}from"./property-Bj3TGwkg.js";import{o as f}from"./query-assigned-elements-uEuc3rg8.js";import{u as L,C as g}from"./provider.component-DrWB4byV.js";import{K as c}from"./keys-hFXe221I.js";import{D as I}from"./DisabledMixin-B-Cnza7-.js";import{T as A}from"./TabIndexMixin-DEwGeIeI.js";import{R as k}from"./roles-CJI3JVG-.js";import{V as C,T as n}from"./index-D2VIkDCb.js";import{a as u}from"./index-DM9rY9pk.js";import{a as S}from"./popover.component-CWSuSUni.js";import{a as D}from"./index-B-GnYs90.js";import{v as y}from"./v4-CmTdKEVZ.js";const h={CREATED:"created",DESTROYED:"destroyed",MODIFIED:"modified"},w=l=>{class t extends l{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event(h.CREATED,{bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event(h.DESTROYED,{bubbles:!0,composed:!0}))}dispatchModifiedEvent(r){this.dispatchEvent(new CustomEvent(h.MODIFIED,{detail:{change:r},bubbles:!0,composed:!0}))}}return t},X=L.constructTagName("listitem"),_={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},v={VARIANT:_.FULL_WIDTH,TOOLTIP_PLACEMENT:S.TOP},$=x`
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
`,P=[$,...D()],M=()=>`listitem-tooltip-popover-${y()}`,R=()=>`listitem-tooltip-triggerid-${y()}`;class E{static dispatchListItemEvent(t,e){e.dispatchEvent(new Event(t,{composed:!0,bubbles:!0}))}static onDisableListItem(t){this.dispatchListItemEvent("disabled",t)}static onEnableListItem(t){this.dispatchListItemEvent("enabled",t)}static onCreatedListItem(t){setTimeout(()=>{this.dispatchListItemEvent("created",t)},0)}static onDestroyedListItem(t){this.dispatchListItemEvent("destroyed",t)}}var O=Object.defineProperty,o=(l,t,e,r)=>{for(var a=void 0,p=l.length-1,b;p>=0;p--)(b=l[p])&&(a=b(t,e,a)||a);return a&&O(t,e,a),a};const m=class m extends I(A(w(g))){constructor(){super(),this.variant=v.VARIANT,this.tooltipPlacement=v.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("focusin",this.displayTooltipForLongText.bind(this)),this.addEventListener("mouseenter",this.displayTooltipForLongText.bind(this)),this.addEventListener("focusout",this.hideTooltipOnLeave.bind(this)),this.addEventListener("mouseout",this.hideTooltipOnLeave.bind(this)),this.addEventListener("click",this.handleClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=this.role||k.LISTITEM,this.id=this.id||R()}handleKeyDown(t){(t.key===c.ENTER||t.key===c.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(t){if(this.disabled){t.stopImmediatePropagation(),t.preventDefault();return}this.hideTooltipOnLeave()}displayTooltipForLongText(){var e,r;if(!this.tooltipText)return;this.hideTooltipOnLeave();const t=document.createElement(u);t.id=M(),t.textContent=this.tooltipText,t.setAttribute("triggerid",this.id),t.setAttribute("placement",this.tooltipPlacement),t.setAttribute("visible",""),t.setAttribute("show-arrow",""),(e=this.parentElement)!=null&&e.hasAttribute("slot")&&t.setAttribute("slot",this.parentElement.getAttribute("slot")||""),(r=this.parentElement)==null||r.after(t)}hideTooltipOnLeave(){const t=document.querySelector(`${u}[triggerid="${this.id}"]`);t&&t.remove()}getText(t,e,r){return d`
      <slot name="${t}">
        ${r?d`<mdc-text part="${t}" type="${e}" tagname="${C.SPAN}">${r}</mdc-text>`:T}
      </slot>
    `}disableSlottedChildren(t=!1){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(e=>{t?(e.setAttribute("disabled",""),this.dispatchModifiedEvent("disabled"),E.onDisableListItem(this)):(e.removeAttribute("disabled"),this.dispatchModifiedEvent("enabled"),E.onEnableListItem(this))}),this.setAttribute("aria-disabled",`${t}`)}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled)),t.has("softDisabled")&&this.disableSlottedChildren(this.softDisabled)}renderTrailingControls(){return d`<slot
      name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}renderLeadingControls(){return d`<slot
      name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}stopEventPropagation(t){(t instanceof KeyboardEvent&&(t.key===c.ENTER||t.key===c.SPACE)||t instanceof MouseEvent)&&t.stopPropagation()}render(){return d`
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
    `}};m.styles=[...g.styles,...P];let i=m;o([f({slot:"leading-controls"})],i.prototype,"leadingControlsSlot");o([f({slot:"trailing-controls"})],i.prototype,"trailingControlsSlot");o([s({type:String,reflect:!0})],i.prototype,"variant");o([s({type:String,reflect:!0})],i.prototype,"label");o([s({type:String,reflect:!0,attribute:"secondary-label"})],i.prototype,"secondaryLabel");o([s({type:String,reflect:!0,attribute:"tertiary-label"})],i.prototype,"tertiaryLabel");o([s({type:String,reflect:!0,attribute:"side-header-text"})],i.prototype,"sideHeaderText");o([s({type:String,reflect:!0,attribute:"subline-text"})],i.prototype,"sublineText");o([s({type:Boolean,reflect:!0,attribute:"soft-disabled"})],i.prototype,"softDisabled");o([s({type:String,reflect:!0,attribute:"tooltip-text"})],i.prototype,"tooltipText");o([s({type:String,reflect:!0,attribute:"tooltip-placement"})],i.prototype,"tooltipPlacement");export{i as L,X as T,_ as a,h as b};
