import{i as f,k as s,D as d,n as o}from"./iframe-CjQ7Po3D.js";import{t as u}from"./if-defined-nrQrlDVv.js";import{p as y}from"./index-BUV9ka-C.js";import{T as v,V as w}from"./index-Bl9rWpTe.js";import{D as k,b as x,I as T,A as N,c as A}from"./menupopover.constants-DLCkFZFb.js";import{I}from"./IconNameMixin-CTkF2V4Z.js";import{M as b}from"./menuitem.component-C8fB69UO.js";import{g as E}from"./button.utils-rNW36Ji7.js";import{S as L}from"./sidenavigation.component-TvHA2ucS.js";import{a as p}from"./index-DpwEhJ2T.js";import{h as C,a as $}from"./index-DD4vGOEX.js";import{v as g}from"./v4-CmTdKEVZ.js";import"./index-5L_Io860.js";import"./index-B_ibqgwr.js";const S=[C,f`
    :host {
      --mdc-navmenuitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-navmenuitem-border-color: var(--mds-color-theme-outline-button-normal);
      --mdc-navmenuitem-expanded-width: 12.75rem;

      /* Background color when in default (normal) or active state */
      --mdc-navmenuitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-navmenuitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navmenuitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-navmenuitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navmenuitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
      --mdc-navmenuitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-navmenuitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);

      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: var(--mdc-navmenuitem-color);
      border-color: var(--mdc-navmenuitem-border-color);
      border-radius: 0.5rem;
      cursor: pointer;
    }

    :host(:not([in-menupopover])) {
      border-radius: 1.25rem;
    }

    :host(:not([in-menupopover]):dir(ltr)) {
      margin-left: 1rem;
    }

    :host(:not([in-menupopover]):dir(rtl)) {
      margin-right: 1rem;
    }

    :host([show-label]) {
      width: var(--mdc-navmenuitem-expanded-width);
    }

    :host([active]) {
      background-color: var(--mdc-navmenuitem-rest-active-background-color);
    }

    :host([disabled]) {
      color: var(--mdc-navmenuitem-disabled-color);
      background-color: var(--mdc-navmenuitem-disabled-background-color);
    }

    :host([active][disabled]) {
      background-color: var(--mdc-navmenuitem-disabled-active-background-color);
      color: var(--mdc-navmenuitem-disabled-color);
    }

    :host(:hover) {
      background-color: var(--mdc-navmenuitem-hover-background-color);
    }

    :host(:hover[active]) {
      background-color: var(--mdc-navmenuitem-hover-active-background-color);
    }

    :host(:active) {
      background-color: var(--mdc-navmenuitem-pressed-background-color);
    }

    :host(:active[active]) {
      background-color: var(--mdc-navmenuitem-pressed-active-background-color);
    }

    :host(:not([in-menupopover]))::before {
      content: '';
      display: block;
      position: absolute;
      background-color: var(--mdc-navmenuitem-color);
      width: 0.25rem;
      height: 1rem;
      pointer-events: none;
      visibility: hidden;
    }

    :host(:dir(ltr))::before {
      left: -1rem;
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host(:dir(rtl))::before {
      right: -1rem;
      border-radius: 0.25rem 0 0 0.25rem;
    }

    :host([active])::before {
      visibility: visible;
    }

    :host([disabled])::before {
      background-color: var(--mdc-navmenuitem-disabled-color);
    }

    :host::part(text-container) {
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    :host::part(icon-container) {
      position: relative;
    }

    :host(:dir(ltr))::part(badge) {
      position: absolute;
      right: -0.375rem;
      top: -0.375rem;
    }

    :host(:dir(rtl))::part(badge) {
      position: absolute;
      left: -0.375rem;
      top: -0.375rem;
    }

    :host(:not([show-label]))::part(trailing-arrow) {
      --mdc-icon-size: 0.75rem;
    }

    :host([show-label])::part(trailing-arrow) {
      --mdc-icon-size: 1rem;
      flex-shrink: 0;
    }

    :host(:dir(ltr))::part(arrow) {
      position: absolute;
      right: -0.75rem;
      top: 0.875rem;
    }

    :host(:dir(rtl))::part(arrow) {
      position: absolute;
      left: -0.75rem;
      top: 0.875rem;
    }
  `,...$()];var _=Object.defineProperty,i=(l,e,t,n)=>{for(var a=void 0,c=l.length-1,h;c>=0;c--)(h=l[c])&&(a=h(e,t,a)||a);return a&&_(e,t,a),a};const m=class m extends I(b){constructor(){super(),this.maxCounter=k.MAX_COUNTER,this.ariaLabel=null,this.sideNavigationContext=y.consume({host:this,context:L.Context}),this.emitNavMenuItemActiveChange=e=>{const t=new CustomEvent("activechange",{detail:{navId:this.navId,active:e},bubbles:!0});this.dispatchEvent(t)},this.addEventListener("click",this.handleClickEvent.bind(this)),this.addEventListener("focusin",this.renderDynamicTooltip.bind(this)),this.addEventListener("mouseenter",this.renderDynamicTooltip.bind(this)),this.addEventListener("focusout",this.removeTooltip.bind(this)),this.addEventListener("mouseout",this.removeTooltip.bind(this))}connectedCallback(){super.connectedCallback(),this.variant=void 0,!this.navId&&this.onerror&&this.onerror("[mdc-navmenuitem] navId is required and was not provided."),this.toggleAttribute("in-menupopover",this.isNested())}disconnectedCallback(){super.disconnectedCallback(),this.removeTooltip()}updated(){var t;const e=(t=this.sideNavigationContext)==null?void 0:t.value;if(e)if(this.showLabel=this.isNested()?!0:e.expanded,this.showLabel)this.removeAttribute("aria-label");else{const n=this.label??"";this.ariaLabel=this.ariaLabel||n,this.setAttribute("aria-label",n)}}removeTooltip(){const e=document.querySelector(`${p}[triggerid="${this.id}"]`);e&&e.remove()}renderDynamicTooltip(){if(!this.tooltipText)return;this.id||(this.id=`mdc-navmenuitem-${g()}`),this.removeTooltip();const e=document.createElement(p);e.id=`mdc-navmenuitem-tooltip-${g()}`,e.textContent=this.tooltipText,e.setAttribute("triggerid",this.id),e.setAttribute("visible",""),e.setAttribute("show-arrow",""),this.hasAttribute("slot")&&e.setAttribute("slot",this.getAttribute("slot")||""),this.after(e)}isNested(){let e=this.parentElement;for(;e;){if(e.tagName.toLowerCase()===x)return!0;e=e.parentElement}return!1}modifyIconName(e){if(!this.iconName)return;const t=this.iconName.endsWith("-filled"),n=E(this.iconName);e?t||(this.prevIconName=this.iconName,this.iconName=`${n}-filled`):this.prevIconName&&(this.iconName=this.prevIconName)}handleClickEvent(){this.disabled||this.emitNavMenuItemActiveChange(this.active)}update(e){super.update(e),e.has("active")&&this.modifyIconName(this.active)}renderTextLabel(e){return s`
      <mdc-text
        type=${this.active?v.BODY_MIDSIZE_BOLD:v.BODY_MIDSIZE_MEDIUM}
        tagname=${w.SPAN}
        part="text-container"
      >
        ${e}
      </mdc-text>
    `}renderArrowIcon(e){return s`
      <mdc-icon
        name=${T.RIGHT_ARROW}
        length-unit="rem"
        part="trailing-arrow ${e?"":"arrow"}"
      ></mdc-icon>
    `}renderBadge(e){return Object.values(N).includes(this.badgeType)?s`
      <mdc-badge
        part="${e?"":"badge"}"
        type="${u(this.badgeType)}"
        counter="${u(this.counter)}"
        max-counter="${this.maxCounter}"
      >
      </mdc-badge>
    `:d}render(){var t;const e=(t=this.sideNavigationContext)==null?void 0:t.value;return s`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>
        ${this.showLabel?d:this.renderBadge(this.showLabel)}
      </div>
      ${this.showLabel?s`${this.renderTextLabel(this.label)}${this.renderBadge(this.showLabel)}`:d}
      ${e!=null&&e.hasSiblingWithTriggerId(this)?this.renderArrowIcon(this.showLabel):d}
    `}};m.styles=[...b.styles,...S];let r=m;i([o({type:Boolean,reflect:!0})],r.prototype,"active");i([o({type:String,reflect:!0,attribute:"badge-type"})],r.prototype,"badgeType");i([o({type:Number,reflect:!0})],r.prototype,"counter");i([o({type:Number,attribute:"max-counter",reflect:!0})],r.prototype,"maxCounter");i([o({type:String,reflect:!0,attribute:"nav-id"})],r.prototype,"navId");i([o({type:Boolean,reflect:!0,attribute:"show-label"})],r.prototype,"showLabel");i([o({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");i([o({type:Boolean,reflect:!0,attribute:"disable-aria-current"})],r.prototype,"disableAriaCurrent");i([o({type:String,reflect:!0,attribute:"tooltip-text"})],r.prototype,"tooltipText");r.register(A);
