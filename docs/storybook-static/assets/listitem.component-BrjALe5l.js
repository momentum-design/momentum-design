import{i as T,D as x,k as d}from"./lit-element-D5KKan5q.js";import{u as v,C as u,n as a}from"./index-C9z9WAEj.js";import{o as E}from"./query-assigned-elements-uEuc3rg8.js";import{D as f}from"./DisabledMixin-BZruwOeC.js";import{T as L}from"./TabIndexMixin-CsrHswKP.js";import{R as A}from"./roles-BH_hBfTz.js";import{V as k,T as n}from"./index-D1yLszQ-.js";import{a as P}from"./index-C34JuzZ8.js";import{P as S}from"./popover.component-2fUXsfxE.js";import{h as _}from"./index-MA1r3zrt.js";const c={ARROW_DOWN:"ArrowDown",ARROW_LEFT:"ArrowLeft",ARROW_RIGHT:"ArrowRight",ARROW_UP:"ArrowUp",END:"End",ENTER:"Enter",ESCAPE:"Escape",HOME:"Home",PAGE_DOWN:"PageDown",PAGE_UP:"PageUp",SPACE:" ",TAB:"Tab"},R=v.constructTagName("navitemlist"),Y=v.constructTagName("listitem"),p="dynamic-listitem-tooltip-popover",b="dynamic-listitem-tooltip-triggerid",w={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},y={VARIANT:w.FULL_WIDTH,TOOLTIP_PLACEMENT:S.TOP},C=T`
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
`,O=[C,..._()];var I=Object.defineProperty,r=(m,t,e,l)=>{for(var o=void 0,s=m.length-1,g;s>=0;s--)(g=m[s])&&(o=g(t,e,o)||o);return o&&I(t,e,o),o};const h=class h extends f(L(u)){constructor(){super(),this.variant=y.VARIANT,this.tooltipPlacement=y.TOOLTIP_PLACEMENT,this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseover",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}connectedCallback(){super.connectedCallback(),this.role=this.role||A.LISTITEM}handleKeyDown(t){(t.key===c.ENTER||t.key===c.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(){var l,o,s;if(!this.tooltipText)return;this.id=this.id||b;const t=document.getElementById(p);t&&t.remove();const e=document.createElement(P);e.id=p,e.textContent=this.tooltipText,e.setAttribute("triggerid",this.id),e.setAttribute("placement",this.tooltipPlacement),e.setAttribute("visible",""),e.setAttribute("show-arrow",""),((o=(l=this.parentElement)==null?void 0:l.tagName)==null?void 0:o.toLowerCase())===R?this.before(e):(s=this.parentElement)==null||s.after(e)}hideTooltipOnLeave(){this.id=this.id===b?"":this.id;const t=document.querySelector(`#${p}`);t==null||t.remove()}getText(t,e,l){return l?d`
      <slot name="${t}">
        <mdc-text part="${t}" type="${e}" tagname="${k.SPAN}">${l}</mdc-text>
      </slot>
    `:x}disableSlottedChildren(t){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(e=>{t?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled),this.setAttribute("aria-disabled",`${this.disabled}`))}renderTrailingControls(){return d`<slot name="trailing-controls" 
    @click=${this.stopEventPropagation}
    @keyup=${this.stopEventPropagation}
    @keydown=${this.stopEventPropagation}></slot>`}renderLeadingControls(){return d`<slot name="leading-controls" 
    @click=${this.stopEventPropagation}
    @keyup=${this.stopEventPropagation}
    @keydown=${this.stopEventPropagation}></slot>`}stopEventPropagation(t){(t instanceof KeyboardEvent&&(t.key===c.ENTER||t.key===c.SPACE)||t instanceof MouseEvent)&&t.stopPropagation()}render(){return d`
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
    `}};h.styles=[...u.styles,...O];let i=h;r([E({slot:"leading-controls"})],i.prototype,"leadingControlsSlot");r([E({slot:"trailing-controls"})],i.prototype,"trailingControlsSlot");r([a({type:String,reflect:!0})],i.prototype,"variant");r([a({type:String,reflect:!0})],i.prototype,"label");r([a({type:String,reflect:!0,attribute:"secondary-label"})],i.prototype,"secondaryLabel");r([a({type:String,reflect:!0,attribute:"tertiary-label"})],i.prototype,"tertiaryLabel");r([a({type:String,reflect:!0,attribute:"side-header-text"})],i.prototype,"sideHeaderText");r([a({type:String,reflect:!0,attribute:"subline-text"})],i.prototype,"sublineText");r([a({type:String,reflect:!0,attribute:"tooltip-text"})],i.prototype,"tooltipText");r([a({type:String,reflect:!0,attribute:"tooltip-placement"})],i.prototype,"tooltipPlacement");export{c as K,w as L,R as T,i as a,Y as b};
