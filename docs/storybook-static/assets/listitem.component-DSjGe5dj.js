import{u as E,a2 as y,a4 as f,R as x,k as n,V as I,h as L,T as o,C as g,n as s}from"./iframe-CwHTiZJN.js";import{o as v}from"./query-assigned-elements-COV3vGvP.js";import{D as T}from"./DisabledMixin-DQyYsE82.js";import{K as k,a as C,T as D,A as c}from"./KeyDownHandledMixin-Bi1OpRtF.js";const h={CREATED:"created",FIRST_UPDATE_COMPLETED:"first-update-completed",DESTROYED:"destroyed",MODIFIED:"modified"},N=E.constructTagName("listitem"),S={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},A={VARIANT:S.FULL_WIDTH},_=l=>{class t extends l{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new CustomEvent(h.CREATED,{bubbles:!0,composed:!0,detail:{lifecycle:!0}})),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent(h.FIRST_UPDATE_COMPLETED,{bubbles:!0,composed:!0,detail:{lifecycle:!0}}))})}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new CustomEvent(h.DESTROYED,{bubbles:!0,composed:!0,detail:{lifecycle:!0}}))}dispatchModifiedEvent(d){this.dispatchEvent(new CustomEvent(h.MODIFIED,{detail:{change:d,lifecycle:!0},bubbles:!0,composed:!0}))}}return t};class u{static dispatchListItemEvent(t,e){e.dispatchEvent(new Event(t,{composed:!0,bubbles:!0}))}static onDisableListItem(t){this.dispatchListItemEvent("disabled",t)}static onEnableListItem(t){this.dispatchListItemEvent("enabled",t)}static onCreatedListItem(t){setTimeout(()=>{this.dispatchListItemEvent("created",t)},0)}static onDestroyedListItem(t){this.dispatchListItemEvent("destroyed",t)}}const w=y`
  :host {
    --mdc-listitem-default-background-color: var(--mds-color-theme-background-primary-ghost);
    --mdc-listitem-default-active-background-color: var(--mds-color-theme-background-primary-active);
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
  :host::part(leading-text),
  :host::part(trailing-text),
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
  :host([active]) {
    background-color: var(--mdc-listitem-default-active-background-color);
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
    min-width: 0;
  }
  :host::part(leading) {
    flex: 1;
  }
  :host::part(trailing) {
    flex: 0 1 auto;
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

  :host::part(trailing-text-side-header),
  :host::part(trailing-text-subline) {
    margin-inline-start: var(--mdc-listitem-column-gap);
  }

  ::slotted([slot='leading-controls']),
  ::slotted([slot='trailing-controls']) {
    align-items: center;
    column-gap: var(--mdc-listitem-column-gap);
    display: flex;
    flex-direction: row;
    flex-shrink: 0;
  }
`,R=[w,...f()];var M=Object.defineProperty,a=(l,t,e,d)=>{for(var r=void 0,p=l.length-1,b;p>=0;p--)(b=l[p])&&(r=b(t,e,r)||r);return r&&M(t,e,r),r};const m=class m extends k(C(T(D(_(g))))){constructor(){super(),this.variant=A.VARIANT,this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("click",this.handleClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=this.role||x.LISTITEM}handleClick(t){this.disabled&&(t.stopImmediatePropagation(),t.preventDefault())}handleKeyDown(t){const e=this.getActionForKeyEvent(t);!t.defaultPrevented&&(e===c.ENTER||e===c.SPACE)&&(this.isEventFromInsideListItem(t)||(this.keyDownEventHandled(),t.preventDefault(),this.triggerClickEvent(t)))}isEventFromInsideListItem(t){const e=t.target;return e!==this&&document.activeElement===e&&this.contains(e)}triggerClickEvent(t){if(this.isEventFromInsideListItem(t))return;const e=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(e)}getText(t,e,d){return n`
      <slot name="${t}">
        ${d?n`<mdc-text part="${t}" type="${e}" tagname="${I.SPAN}">${d}</mdc-text>`:L}
      </slot>
    `}disableSlottedChildren(t=!1){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(e=>{t?(e.setAttribute("disabled",""),u.onDisableListItem(this)):(e.removeAttribute("disabled"),u.onEnableListItem(this))}),this.setAttribute("aria-disabled",`${t}`)}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled),this.dispatchModifiedEvent(this.disabled?"disabled":"enabled")),t.has("softDisabled")&&this.disableSlottedChildren(this.softDisabled),t.has("dataIndex")&&(this.ariaPosInSet=`${this.dataIndex!==void 0?this.dataIndex+1:""}`)}renderTrailingControls(){return n`<slot
      name="trailing-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}renderLeadingControls(){return n`<slot
      name="leading-controls"
      @click=${this.stopEventPropagation}
      @keyup=${this.stopEventPropagation}
      @keydown=${this.stopEventPropagation}
    ></slot>`}stopEventPropagation(t){if(t instanceof KeyboardEvent){const e=this.getActionForKeyEvent(t);(e===c.ENTER||e===c.SPACE)&&t.stopPropagation()}else t instanceof MouseEvent&&t.stopPropagation()}click(){this.triggerClickEvent(new Event("click"))}render(){return n`
      <slot name="content">
        <div part="leading">
          ${this.renderLeadingControls()}
          <div part="leading-text">
            ${this.getText("leading-text-primary-label",this.active?o.BODY_MIDSIZE_BOLD:o.BODY_MIDSIZE_REGULAR,this.label)}
            ${this.getText("leading-text-secondary-label",o.BODY_SMALL_REGULAR,this.secondaryLabel)}
            ${this.getText("leading-text-tertiary-label",o.BODY_SMALL_REGULAR,this.tertiaryLabel)}
          </div>
        </div>
        <div part="trailing">
          <div part="trailing-text">
            ${this.getText("trailing-text-side-header",o.BODY_MIDSIZE_REGULAR,this.sideHeaderText)}
            ${this.getText("trailing-text-subline",o.BODY_SMALL_REGULAR,this.sublineText)}
          </div>
          ${this.renderTrailingControls()}
        </div>
      </slot>
    `}};m.styles=[...g.styles,...R];let i=m;a([v({slot:"leading-controls"})],i.prototype,"leadingControlsSlot");a([v({slot:"trailing-controls"})],i.prototype,"trailingControlsSlot");a([s({type:String,reflect:!0})],i.prototype,"variant");a([s({type:String,reflect:!0})],i.prototype,"label");a([s({type:String,reflect:!0,attribute:"secondary-label"})],i.prototype,"secondaryLabel");a([s({type:String,reflect:!0,attribute:"tertiary-label"})],i.prototype,"tertiaryLabel");a([s({type:String,reflect:!0,attribute:"side-header-text"})],i.prototype,"sideHeaderText");a([s({type:String,reflect:!0,attribute:"subline-text"})],i.prototype,"sublineText");a([s({type:Boolean,reflect:!0,attribute:"soft-disabled"})],i.prototype,"softDisabled");a([s({type:Number,reflect:!0,attribute:"data-index"})],i.prototype,"dataIndex");a([s({type:Boolean,reflect:!0,attribute:"active"})],i.prototype,"active");export{i as L,N as T,h as a,S as b};
