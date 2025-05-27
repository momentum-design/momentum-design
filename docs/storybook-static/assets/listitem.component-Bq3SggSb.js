import{i as E,D as T,k as s}from"./lit-element-D5KKan5q.js";import{u as x,C as g,n as o}from"./index-C9z9WAEj.js";import{o as v}from"./query-assigned-elements-uEuc3rg8.js";import{D as f}from"./DisabledMixin-BZruwOeC.js";import{T as L}from"./TabIndexMixin-CsrHswKP.js";import{R as A}from"./roles-DMFGbP5t.js";import{V as k,T as l}from"./text.constants-ZF0jM5wn.js";import{a as S}from"./index-B78vnND0.js";import{a as P}from"./popover.component-CLVcAiaC.js";import{a as _}from"./index-CcXofQbA.js";const n={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SPACE:" "},Y=x.constructTagName("listitem"),u="dynamic-listitem-tooltip-popover",b="dynamic-listitem-tooltip-triggerid",R={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},y={VARIANT:R.FULL_WIDTH,TOOLTIP_PLACEMENT:P.TOP},w=E`
  :host {
    --mdc-listitem-default-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-listitem-background-color-hover: var(--mds-color-theme-background-primary-hover);
    --mdc-listitem-background-color-active: var(--mds-color-theme-background-primary-active);
    --mdc-listitem-primary-label-color: var(--mds-color-theme-text-primary-normal);
    --mdc-listitem-secondary-label-color: var(--mds-color-theme-text-secondary-normal);
    --mdc-listitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
    --mdc-listitem-column-gap: 0.75rem;
    --mdc-listitem-padding-left-and-right: 0.75rem;
  }
  :host {
    background-color: var(--mdc-listitem-default-background-color);
    column-gap: var(--mdc-listitem-column-gap);
    cursor: pointer;
    display: flex;
    flex-direction: row;
    padding: 0.5rem var(--mdc-listitem-padding-left-and-right);
    width: 100%;
  }
  :host([variant="inset-rectangle"]) {
    border-radius: 0.5rem;
  }
  :host([variant="inset-pill"]) {
    border-radius: 3.125rem;
  }
  :host::part(leading-text) {
    flex: 1;
    /** 2x of column gap on both ends of the listitem - 100% width */
    width: calc(100% - (2 * var(--mdc-listitem-padding-left-and-right)));
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
  :host([disabled])::part(trailing-text-subline) {
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
  :host::part(leading), :host::part(trailing) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    width: 100%;
  }
  :host::part(trailing) {
    justify-content: flex-end;
  }
  :host::part(leading-text-secondary-label), :host::part(leading-text-tertiary-label) {
    color: var(--mdc-listitem-secondary-label-color);
  }
  :host::part(leading-text-primary-label), :host::part(trailing-text-side-header), :host::part(trailing-text-subline) {
    color: var(--mdc-listitem-primary-label-color);
  }
  :host::part(trailing-text) {
    text-align: right;
  }
  ::slotted([slot="leading-controls"]), ::slotted([slot="trailing-controls"]) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    flex-direction: row;
  }
`,C=[w,..._()];var O=Object.defineProperty,r=(h,t,i,d)=>{for(var a=void 0,c=h.length-1,m;c>=0;c--)(m=h[c])&&(a=m(t,i,a)||a);return a&&O(t,i,a),a};const p=class p extends f(L(g)){constructor(){super(),this.variant=y.VARIANT,this.tooltipPlacement=y.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseover",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.role=this.role||A.LISTITEM}handleKeyDown(t){(t.key===n.ENTER||t.key===n.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(){var i;if(!this.tooltipText)return;this.id=this.id||b;const t=document.createElement(S);t.id=u,t.textContent=this.tooltipText,t.setAttribute("triggerid",this.id),t.setAttribute("placement",this.tooltipPlacement),t.setAttribute("visible",""),t.setAttribute("show-arrow",""),(i=this.parentElement)==null||i.after(t)}hideTooltipOnLeave(){this.id=this.id===b?"":this.id;const t=document.querySelector(`#${u}`);t==null||t.remove()}getText(t,i,d){return d?s`
      <slot name="${t}">
        <mdc-text part="${t}" type="${i}" tagname="${k.SPAN}">${d}</mdc-text>
      </slot>
    `:T}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(i=>{t?i.setAttribute("disabled",""):i.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled),this.setAttribute("aria-disabled",`${this.disabled}`))}renderTrailingControls(){return s`<slot name="trailing-controls" 
    @click=${this.stopEventPropagation}
    @keyup=${this.stopEventPropagation}
    @keydown=${this.stopEventPropagation}></slot>`}renderLeadingControls(){return s`<slot name="leading-controls" 
    @click=${this.stopEventPropagation}
    @keyup=${this.stopEventPropagation}
    @keydown=${this.stopEventPropagation}></slot>`}stopEventPropagation(t){(t instanceof KeyboardEvent&&(t.key===n.ENTER||t.key===n.SPACE)||t instanceof MouseEvent)&&t.stopPropagation()}render(){return s`
      <div part="leading">
        ${this.renderLeadingControls()}
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",l.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",l.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",l.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",l.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",l.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        ${this.renderTrailingControls()}
      </div>
    `}};p.styles=[...g.styles,...C];let e=p;r([v({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");r([v({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");r([o({type:String,reflect:!0})],e.prototype,"variant");r([o({type:String,reflect:!0})],e.prototype,"label");r([o({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");r([o({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");r([o({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");r([o({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");r([o({type:String,reflect:!0,attribute:"tooltip-text"})],e.prototype,"tooltipText");r([o({type:String,reflect:!0,attribute:"tooltip-placement"})],e.prototype,"tooltipPlacement");export{n as K,R as L,Y as T,e as a};
