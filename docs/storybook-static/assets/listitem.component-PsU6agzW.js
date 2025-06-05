import{i as E,D as T,k as n}from"./lit-element-D5KKan5q.js";import{u as x,C as u,n as o}from"./index-C9z9WAEj.js";import{o as v}from"./query-assigned-elements-uEuc3rg8.js";import{D as f}from"./DisabledMixin-BZruwOeC.js";import{T as L}from"./TabIndexMixin-CsrHswKP.js";import{R as A}from"./roles-DMFGbP5t.js";import{V as k,T as s}from"./index-D1yLszQ-.js";import{a as P}from"./index-DlY34wWO.js";import{P as S}from"./popover.component-DqsEEw9E.js";import{h as _}from"./index-MA1r3zrt.js";const d={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SPACE:" "},Y=x.constructTagName("listitem"),p="dynamic-listitem-tooltip-popover",b="dynamic-listitem-tooltip-triggerid",R={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},y={VARIANT:R.FULL_WIDTH,TOOLTIP_PLACEMENT:S.TOP},w=E`
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
`,C=[w,..._()];var O=Object.defineProperty,r=(m,t,e,a)=>{for(var l=void 0,c=m.length-1,g;c>=0;c--)(g=m[c])&&(l=g(t,e,l)||l);return l&&O(t,e,l),l};const h=class h extends f(L(u)){constructor(){super(),this.variant=y.VARIANT,this.tooltipPlacement=y.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseover",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.role=this.role||A.LISTITEM}handleKeyDown(t){(t.key===d.ENTER||t.key===d.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(){var a;if(!this.tooltipText)return;this.id=this.id||b;const t=document.getElementById(p);t&&t.remove();const e=document.createElement(P);e.id=p,e.textContent=this.tooltipText,e.setAttribute("triggerid",this.id),e.setAttribute("placement",this.tooltipPlacement),e.setAttribute("visible",""),e.setAttribute("show-arrow",""),(a=this.parentElement)==null||a.after(e)}hideTooltipOnLeave(){this.id=this.id===b?"":this.id;const t=document.querySelector(`#${p}`);t==null||t.remove()}getText(t,e,a){return a?n`
      <slot name="${t}">
        <mdc-text part="${t}" type="${e}" tagname="${k.SPAN}">${a}</mdc-text>
      </slot>
    `:T}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(e=>{t?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled),this.setAttribute("aria-disabled",`${this.disabled}`))}renderTrailingControls(){return n`<slot name="trailing-controls" 
    @click=${this.stopEventPropagation}
    @keyup=${this.stopEventPropagation}
    @keydown=${this.stopEventPropagation}></slot>`}renderLeadingControls(){return n`<slot name="leading-controls" 
    @click=${this.stopEventPropagation}
    @keyup=${this.stopEventPropagation}
    @keydown=${this.stopEventPropagation}></slot>`}stopEventPropagation(t){(t instanceof KeyboardEvent&&(t.key===d.ENTER||t.key===d.SPACE)||t instanceof MouseEvent)&&t.stopPropagation()}render(){return n`
      <div part="leading">
        ${this.renderLeadingControls()}
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",s.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",s.BODY_SMALL_REGULAR,this.secondaryLabel)}
          ${this.getText("leading-text-tertiary-label",s.BODY_SMALL_REGULAR,this.tertiaryLabel)}
        </div>
      </div>
      <div part="trailing">
        <div part="trailing-text">
          ${this.getText("trailing-text-side-header",s.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
          ${this.getText("trailing-text-subline",s.BODY_SMALL_REGULAR,this.sublineText)}
        </div>
        ${this.renderTrailingControls()}
      </div>
    `}};h.styles=[...u.styles,...C];let i=h;r([v({slot:"leading-controls"})],i.prototype,"leadingControlsSlot");r([v({slot:"trailing-controls"})],i.prototype,"trailingControlsSlot");r([o({type:String,reflect:!0})],i.prototype,"variant");r([o({type:String,reflect:!0})],i.prototype,"label");r([o({type:String,reflect:!0,attribute:"secondary-label"})],i.prototype,"secondaryLabel");r([o({type:String,reflect:!0,attribute:"tertiary-label"})],i.prototype,"tertiaryLabel");r([o({type:String,reflect:!0,attribute:"side-header-text"})],i.prototype,"sideHeaderText");r([o({type:String,reflect:!0,attribute:"subline-text"})],i.prototype,"sublineText");r([o({type:String,reflect:!0,attribute:"tooltip-text"})],i.prototype,"tooltipText");r([o({type:String,reflect:!0,attribute:"tooltip-placement"})],i.prototype,"tooltipPlacement");export{d as K,R as L,Y as T,i as a};
