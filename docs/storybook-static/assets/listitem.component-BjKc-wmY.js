import{i as f,D as x,k as n}from"./lit-element-D5KKan5q.js";import{u as E,C as m,n as o}from"./index-C9z9WAEj.js";import{o as y}from"./query-assigned-elements-uEuc3rg8.js";import{D as T}from"./DisabledMixin-BZruwOeC.js";import{T as A}from"./TabIndexMixin-CsrHswKP.js";import{R as L}from"./roles-BH_hBfTz.js";import{V as k,T as s}from"./index-BrLJ_9IK.js";import{a as b}from"./index-B1PkPhGs.js";import{P as S}from"./popover.component-Py8geaSk.js";import{a as P}from"./index-B-GnYs90.js";import{v}from"./v4-CmTdKEVZ.js";const d={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SPACE:" ",TAB:"Tab"},V=E.constructTagName("listitem"),R={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},u={VARIANT:R.FULL_WIDTH,TOOLTIP_PLACEMENT:S.TOP},_=f`
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
  :host([variant='inset-rectangle']) {
    border-radius: 0.5rem;
  }
  :host([variant='inset-pill']) {
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
`,C=[_,...P()],w=()=>`listitem-tooltip-popover-${v()}`,O=()=>`listitem-tooltip-triggerid-${v()}`;var D=Object.defineProperty,i=(h,t,r,a)=>{for(var l=void 0,p=h.length-1,g;p>=0;p--)(g=h[p])&&(l=g(t,r,l)||l);return l&&D(t,r,l),l};const c=class c extends T(A(m)){constructor(){super(),this.variant=u.VARIANT,this.tooltipPlacement=u.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseenter",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.role=this.role||L.LISTITEM,this.id=this.id||O()}handleKeyDown(t){(t.key===d.ENTER||t.key===d.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(){var r,a;if(!this.tooltipText)return;this.hideTooltipOnLeave();const t=document.createElement(b);t.id=w(),t.textContent=this.tooltipText,t.setAttribute("triggerid",this.id),t.setAttribute("placement",this.tooltipPlacement),t.setAttribute("visible",""),t.setAttribute("show-arrow",""),(r=this.parentElement)!=null&&r.hasAttribute("slot")&&t.setAttribute("slot",this.parentElement.getAttribute("slot")||""),(a=this.parentElement)==null||a.after(t)}hideTooltipOnLeave(){const t=document.querySelector(`${b}[triggerid="${this.id}"]`);t&&t.remove()}getText(t,r,a){return a?n`
      <slot name="${t}">
        <mdc-text part="${t}" type="${r}" tagname="${k.SPAN}">${a}</mdc-text>
      </slot>
    `:x}disableSlottedChildren(t=!1){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(r=>{t?r.setAttribute("disabled",""):r.removeAttribute("disabled")}),this.setAttribute("aria-disabled",`${t}`)}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled)),t.has("softDisabled")&&this.disableSlottedChildren(this.softDisabled)}renderTrailingControls(){return n`<slot
      name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}renderLeadingControls(){return n`<slot
      name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}stopEventPropagation(t){(t instanceof KeyboardEvent&&(t.key===d.ENTER||t.key===d.SPACE)||t instanceof MouseEvent)&&t.stopPropagation()}render(){return n`
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
    `}};c.styles=[...m.styles,...C];let e=c;i([y({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");i([y({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");i([o({type:String,reflect:!0})],e.prototype,"variant");i([o({type:String,reflect:!0})],e.prototype,"label");i([o({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");i([o({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");i([o({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");i([o({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");i([o({type:Boolean,reflect:!0,attribute:"soft-disabled"})],e.prototype,"softDisabled");i([o({type:String,reflect:!0,attribute:"tooltip-text"})],e.prototype,"tooltipText");i([o({type:String,reflect:!0,attribute:"tooltip-placement"})],e.prototype,"tooltipPlacement");export{d as K,R as L,V as T,e as a};
