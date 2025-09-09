import{i as E,k as d,D as y}from"./lit-element-D5KKan5q.js";import{n as r}from"./property-Bj3TGwkg.js";import{o as v}from"./query-assigned-elements-uEuc3rg8.js";import{u as f,C as g}from"./provider.component-DrWB4byV.js";import{K as c}from"./keys-hFXe221I.js";import{D as x}from"./DisabledMixin-B-Cnza7-.js";import{T as L}from"./TabIndexMixin-DEwGeIeI.js";import{R as T}from"./roles-CJI3JVG-.js";import{V as k,T as n}from"./index-D2VIkDCb.js";import{a as I}from"./index-CqVtAZCJ.js";const p={CREATED:"created",DESTROYED:"destroyed",MODIFIED:"modified"},C=o=>{class t extends o{connectedCallback(){super.connectedCallback(),this.dispatchEvent(new Event(p.CREATED,{bubbles:!0,composed:!0}))}disconnectedCallback(){super.disconnectedCallback(),this.dispatchEvent(new Event(p.DESTROYED,{bubbles:!0,composed:!0}))}dispatchModifiedEvent(l){this.dispatchEvent(new CustomEvent(p.MODIFIED,{detail:{change:l},bubbles:!0,composed:!0}))}}return t},B=f.constructTagName("listitem"),D={FULL_WIDTH:"full-width",INSET_PILL:"inset-pill",INSET_RECTANGLE:"inset-rectangle"},S={VARIANT:D.FULL_WIDTH};class u{static dispatchListItemEvent(t,i){i.dispatchEvent(new Event(t,{composed:!0,bubbles:!0}))}static onDisableListItem(t){this.dispatchListItemEvent("disabled",t)}static onEnableListItem(t){this.dispatchListItemEvent("enabled",t)}static onCreatedListItem(t){setTimeout(()=>{this.dispatchListItemEvent("created",t)},0)}static onDestroyedListItem(t){this.dispatchListItemEvent("destroyed",t)}}const A=E`
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
`,w=[A,...I()];var R=Object.defineProperty,a=(o,t,i,l)=>{for(var s=void 0,h=o.length-1,b;h>=0;h--)(b=o[h])&&(s=b(t,i,s)||s);return s&&R(t,i,s),s};const m=class m extends x(L(C(g))){constructor(){super(),this.variant=S.VARIANT,this.addEventListener("keydown",this.handleKeyDown.bind(this)),this.addEventListener("click",this.handleClick.bind(this))}connectedCallback(){super.connectedCallback(),this.role=this.role||T.LISTITEM}handleClick(t){this.disabled&&(t.stopImmediatePropagation(),t.preventDefault())}handleKeyDown(t){(t.key===c.ENTER||t.key===c.SPACE)&&(this.triggerClickEvent(),t.preventDefault())}triggerClickEvent(){const t=new MouseEvent("click",{bubbles:!0,cancelable:!0,view:window});this.dispatchEvent(t)}getText(t,i,l){return d`
      <slot name="${t}">
        ${l?d`<mdc-text part="${t}" type="${i}" tagname="${k.SPAN}">${l}</mdc-text>`:y}
      </slot>
    `}disableSlottedChildren(t=!1){[...this.leadingControlsSlot,...this.trailingControlsSlot].forEach(i=>{t?(i.setAttribute("disabled",""),this.dispatchModifiedEvent("disabled"),u.onDisableListItem(this)):(i.removeAttribute("disabled"),this.dispatchModifiedEvent("enabled"),u.onEnableListItem(this))}),this.setAttribute("aria-disabled",`${t}`)}update(t){super.update(t),t.has("disabled")&&(this.tabIndex=this.disabled?-1:0,this.disableSlottedChildren(this.disabled)),t.has("softDisabled")&&this.disableSlottedChildren(this.softDisabled)}renderTrailingControls(){return d`<slot
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
    `}};m.styles=[...g.styles,...w];let e=m;a([v({slot:"leading-controls"})],e.prototype,"leadingControlsSlot");a([v({slot:"trailing-controls"})],e.prototype,"trailingControlsSlot");a([r({type:String,reflect:!0})],e.prototype,"variant");a([r({type:String,reflect:!0})],e.prototype,"label");a([r({type:String,reflect:!0,attribute:"secondary-label"})],e.prototype,"secondaryLabel");a([r({type:String,reflect:!0,attribute:"tertiary-label"})],e.prototype,"tertiaryLabel");a([r({type:String,reflect:!0,attribute:"side-header-text"})],e.prototype,"sideHeaderText");a([r({type:String,reflect:!0,attribute:"subline-text"})],e.prototype,"sublineText");a([r({type:Boolean,reflect:!0,attribute:"soft-disabled"})],e.prototype,"softDisabled");export{e as L,B as T,D as a,p as b};
