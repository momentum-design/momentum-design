import{i as f,k as l,D as x}from"./lit-element-D5KKan5q.js";import{u as T,C as b,n as o}from"./index-C9z9WAEj.js";import{o as E}from"./query-assigned-elements-uEuc3rg8.js";import{D as L}from"./DisabledMixin-BZruwOeC.js";import{T as A}from"./TabIndexMixin-CsrHswKP.js";import{R as k}from"./roles-BH_hBfTz.js";import{V as I,T as n}from"./index-BrLJ_9IK.js";import{a as u}from"./index-DtB-8-Xs.js";import{P as S}from"./popover.component-C7-8N8j7.js";import{a as C}from"./index-B-GnYs90.js";import{v as y}from"./v4-CmTdKEVZ.js";const d={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SPACE:" ",TAB:"Tab"},K=T.constructTagName("listitem"),P={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},v={VARIANT:P.FULL_WIDTH,TOOLTIP_PLACEMENT:S.TOP},R=f`
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
`,_=[R,...C()],w=()=>`listitem-tooltip-popover-${y()}`,D=()=>`listitem-tooltip-triggerid-${y()}`;class c{static dispatchListItemEvent(t,i){i.dispatchEvent(new Event(t,{composed:!0,bubbles:!0}))}static onDisableListItem(t){this.dispatchListItemEvent("disabled",t)}static onEnableListItem(t){this.dispatchListItemEvent("enabled",t)}static onCreatedListItem(t){setTimeout(()=>this.dispatchListItemEvent("created",t),0)}static onDestroyedListItem(t){this.dispatchListItemEvent("destroyed",t)}}var O=Object.defineProperty,r=(p,t,i,a)=>{for(var s=void 0,h=p.length-1,g;h>=0;h--)(g=p[h])&&(s=g(t,i,s)||s);return s&&O(t,i,s),s};const m=class m extends L(A(b)){constructor(){super(),this.variant=v.VARIANT,this.tooltipPlacement=v.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseenter",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.role=this.role||k.LISTITEM,this.id=this.id||D(),c.onCreatedListItem(this)}disconnectedCallback(){super.disconnectedCallback(),c.onDestroyedListItem(this)}handleKeyDown(t){(t.key===d.ENTER||t.key===d.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(){var i,a;if(!this.tooltipText)return;this.hideTooltipOnLeave();const t=document.createElement(u);t.id=w(),t.textContent=this.tooltipText,t.setAttribute("triggerid",this.id),t.setAttribute("placement",this.tooltipPlacement),t.setAttribute("visible",""),t.setAttribute("show-arrow",""),(i=this.parentElement)!=null&&i.hasAttribute("slot")&&t.setAttribute("slot",this.parentElement.getAttribute("slot")||""),(a=this.parentElement)==null||a.after(t)}hideTooltipOnLeave(){const t=document.querySelector(`${u}[triggerid="${this.id}"]`);t&&t.remove()}getText(t,i,a){return l`
      <slot name="${t}">
        ${a?l`<mdc-text part="${t}" type="${i}" tagname="${I.SPAN}">${a}</mdc-text>`:x}
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
    `}};m.styles=[...b.styles,..._];let e=m;r([E({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");r([E({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");r([o({type:String,reflect:!0})],e.prototype,"variant");r([o({type:String,reflect:!0})],e.prototype,"label");r([o({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");r([o({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");r([o({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");r([o({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");r([o({type:Boolean,reflect:!0,attribute:"soft-disabled"})],e.prototype,"softDisabled");r([o({type:String,reflect:!0,attribute:"tooltip-text"})],e.prototype,"tooltipText");r([o({type:String,reflect:!0,attribute:"tooltip-placement"})],e.prototype,"tooltipPlacement");export{d as K,P as L,K as T,e as a};
