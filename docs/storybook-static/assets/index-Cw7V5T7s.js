import{i as p,k as s,D as d}from"./lit-element-D5KKan5q.js";import{n as o}from"./provider.component-BaQC7CJH.js";import{t as u}from"./if-defined-D5BV9-c0.js";import{p as g}from"./index-CbmtUAjA.js";import{T as v,V as f}from"./index-riA1qVWu.js";import{D as y,b as w,I as k,A as N,c as I}from"./menupopover.constants-DplmEFiq.js";import{I as x}from"./IconNameMixin-CRlZlTtq.js";import{M as b}from"./menuitem.component-CrwdV0Nd.js";import{g as A}from"./button.utils-rNW36Ji7.js";import{S as C}from"./sidenavigation.component-BuNp73vM.js";import{h as L,a as E}from"./index-B-GnYs90.js";import"./index-BJA_klWG.js";import"./index-BPhA6fY3.js";import"./index-6lPSeTCt.js";const T=[L,p`
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

    :host(:dir(ltr)) .badge {
      position: absolute;
      right: -0.375rem;
      top: -0.375rem;
    }

    :host(:dir(rtl)) .badge {
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

    :host(:dir(ltr)) .arrow {
      position: absolute;
      right: -0.75rem;
      top: 0.875rem;
    }

    :host(:dir(rtl)) .arrow {
      position: absolute;
      left: -0.75rem;
      top: 0.875rem;
    }
  `,...E()];var $=Object.defineProperty,i=(l,e,t,a)=>{for(var n=void 0,c=l.length-1,h;c>=0;c--)(h=l[c])&&(n=h(e,t,n)||n);return n&&$(e,t,n),n};const m=class m extends x(b){constructor(){super(),this.maxCounter=y.MAX_COUNTER,this.ariaLabel=null,this.sideNavigationContext=g.consume({host:this,context:C.Context}),this.emitNavMenuItemActiveChange=e=>{const t=new CustomEvent("activechange",{detail:{navId:this.navId,active:e},bubbles:!0});this.dispatchEvent(t)},this.addEventListener("click",this.handleClickEvent.bind(this))}connectedCallback(){super.connectedCallback(),this.variant=void 0,this.tooltipPlacement=void 0,!this.navId&&this.onerror&&this.onerror("[mdc-navmenuitem] navId is required and was not provided."),this.toggleAttribute("in-menupopover",this.isNested())}updated(){var t;const e=(t=this.sideNavigationContext)==null?void 0:t.value;if(e)if(this.showLabel=this.isNested()?!0:e.expanded,this.showLabel)this.removeAttribute("aria-label");else{const a=this.label??"";this.ariaLabel=this.ariaLabel||a,this.setAttribute("aria-label",a)}}isNested(){let e=this.parentElement;for(;e;){if(e.tagName.toLowerCase()===w)return!0;e=e.parentElement}return!1}modifyIconName(e){if(!this.iconName)return;const t=this.iconName.endsWith("-filled"),a=A(this.iconName);e?t||(this.prevIconName=this.iconName,this.iconName=`${a}-filled`):this.prevIconName&&(this.iconName=this.prevIconName)}handleClickEvent(){this.disabled||this.emitNavMenuItemActiveChange(this.active)}update(e){super.update(e),e.has("active")&&this.modifyIconName(this.active)}renderTextLabel(e){return s`
      <mdc-text
        type=${this.active?v.BODY_MIDSIZE_BOLD:v.BODY_MIDSIZE_MEDIUM}
        tagname=${f.SPAN}
        part="text-container"
      >
        ${e}
      </mdc-text>
    `}renderArrowIcon(e){const t=e?"":"arrow";return s`
      <mdc-icon name=${k.RIGHT_ARROW} length-unit="rem" part="trailing-arrow" class="${t}"> </mdc-icon>
    `}renderBadge(e){const t=e?"":"badge";return Object.values(N).includes(this.badgeType)?s`
      <mdc-badge
        class="${t}"
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
    `}};m.styles=[...b.styles,...T];let r=m;i([o({type:Boolean,reflect:!0})],r.prototype,"active");i([o({type:String,reflect:!0,attribute:"badge-type"})],r.prototype,"badgeType");i([o({type:Number,reflect:!0})],r.prototype,"counter");i([o({type:Number,attribute:"max-counter",reflect:!0})],r.prototype,"maxCounter");i([o({type:String,reflect:!0,attribute:"nav-id"})],r.prototype,"navId");i([o({type:Boolean,reflect:!0,attribute:"show-label"})],r.prototype,"showLabel");i([o({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");i([o({type:Boolean,reflect:!0,attribute:"disable-aria-current"})],r.prototype,"disableAriaCurrent");r.register(I);
