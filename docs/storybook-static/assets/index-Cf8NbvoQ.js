import{W as y,U as A,X as w,h as n,k as d,T as h,V as x,n as a,$ as T}from"./iframe-DndUgZyo.js";import{t as v}from"./if-defined-DO6MNPEi.js";import{D as u,b as k,A as C,I as N,c as E}from"./menupopover.constants-BcGM1m89.js";import{M as b}from"./menuitem.component-Cl3VBroi.js";import{p as S}from"./index-BlpZ535v.js";import{S as $}from"./sidenavigation.component-CbgXKrds.js";import{a as g}from"./index-DU0zoEKa.js";import{g as I}from"./button.utils-rNW36Ji7.js";import{v as f}from"./v4-CmTdKEVZ.js";import"./index-ppk-2Wph.js";import"./index-Cll-x2TM.js";const L=[y,A`
    :host {
      --mdc-navmenuitem-in-sidenav-expanded-width: var(--mdc-sidenavigation-expanded-width, 100%);
      --mdc-navmenuitem-in-sidenav-expanded-margin-left: var(--mdc-sidenavigation-expanded-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-expanded-margin-right: var(--mdc-sidenavigation-expanded-right-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-width: var(--mdc-sidenavigation-collapsed-width, fit-content);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-left: var(--mdc-sidenavigation-collapsed-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-right: var(--mdc-sidenavigation-collapsed-right-padding, 1rem);

      --mdc-navmenuitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-disabled-color: var(--mds-color-theme-text-primary-disabled);

      /* Background color when in default (normal) or active state */
      --mdc-navmenuitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-navmenuitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navmenuitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-navmenuitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navmenuitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
      --mdc-navmenuitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-navmenuitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);

      position: relative;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: var(--mdc-navmenuitem-color);
      border-radius: 0.5rem;
      cursor: pointer;
    }

    :host::part(icon-container) {
      position: relative;
    }

    :host([active]:not([cannot-activate]))::part(regular-icon) {
      display: none;
    }

    :host([active]:not([cannot-activate]))::part(filled-icon) {
      display: block;
    }

    :host::part(regular-icon) {
      display: block;
    }

    :host::part(filled-icon) {
      display: none;
    }

    :host([in-menupopover]) {
      width: 100%;
    }

    :host(:not([in-menupopover])) {
      border-radius: 1.25rem;
    }

    :host([show-label]:not([in-menupopover])) {
      width: calc(
        var(--mdc-navmenuitem-in-sidenav-expanded-width) - var(--mdc-navmenuitem-in-sidenav-expanded-margin-left) - var(
            --mdc-navmenuitem-in-sidenav-expanded-margin-right
          )
      );

      margin-inline-start: var(--mdc-navmenuitem-in-sidenav-expanded-margin-left);
    }

    :host(:not([show-label]):not([in-menupopover])) {
      width: calc(
        var(--mdc-navmenuitem-in-sidenav-collapsed-width) - var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left) - var(
            --mdc-navmenuitem-in-sidenav-collapsed-margin-right
          )
      );

      margin-inline-start: var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left);
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

    :host([show-label]:dir(ltr))::before {
      left: calc(-1 * var(--mdc-navmenuitem-in-sidenav-expanded-margin-left));
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host([show-label]:dir(rtl))::before {
      right: calc(-1 * var(--mdc-navmenuitem-in-sidenav-expanded-margin-left));
      border-radius: 0.25rem 0 0 0.25rem;
    }

    :host(:not([show-label]):dir(ltr))::before {
      left: calc(-1 * var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left));
      border-radius: 0 0.25rem 0.25rem 0;
    }

    :host(:not([show-label]):dir(rtl))::before {
      right: calc(-1 * var(--mdc-navmenuitem-in-sidenav-collapsed-margin-left));
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
      flex-shrink: 0;

      position: absolute;
      inset-inline-end: -0.25rem;
      top: 0.875rem;
    }

    :host([show-label])::part(trailing-arrow) {
      flex-shrink: 0;
    }

    :host mdc-badge {
      --mdc-badge-dot-width: 1rem;
      --mdc-badge-dot-height: 1rem;
    }

    @media (forced-colors: active) {
      :host(:not([in-menupopover]))::before {
        background-color: ButtonText;
      }
    }
  `,...w()];var _=Object.defineProperty,i=(m,e,o,s)=>{for(var r=void 0,l=m.length-1,p;l>=0;l--)(p=m[l])&&(r=p(e,o,r)||r);return r&&_(e,o,r),r};const c=class c extends b{constructor(){super(),this.cannotActivate=u.CANNOT_ACTIVATE,this.maxCounter=u.MAX_COUNTER,this.ariaLabel=null,this.tooltipPlacement="right",this.tooltipAppearance="when-collapsed",this.hasActiveChild=!1,this.sideNavigationContext=S.consume({host:this,context:$.Context}),this.emitNavMenuItemActiveChange=e=>{const o=new CustomEvent("activechange",{detail:{navId:this.navId,active:e},bubbles:!0});this.dispatchEvent(o)},this.addEventListener("click",this.handleClickEvent.bind(this))}connectedCallback(){super.connectedCallback(),this.variant=void 0,!this.navId&&this.onerror&&this.onerror("[mdc-navmenuitem] navId is required and was not provided."),this.toggleAttribute("in-menupopover",this.isNested())}disconnectedCallback(){super.disconnectedCallback(),this.removeTooltip()}firstUpdated(e){super.firstUpdated(e),this.active&&!this.disableAriaCurrent&&!this.cannotActivate&&this.setAttribute("aria-current","page")}updated(e){var s;super.updated(e),(e.has("tooltipText")||e.has("showLabel")||e.has("hasActiveChild"))&&this.renderDynamicTooltip(),e.has("showLabel")&&!this.showLabel&&!this.getAttribute("aria-label")&&this.label&&this.setAttribute("aria-label",this.label);const o=(s=this.sideNavigationContext)==null?void 0:s.value;o&&(this.showLabel=this.isNested()?!0:o.expanded)}renderDynamicTooltip(){var o;if(this.removeTooltip(),this.hasActiveChild&&!this.isActiveParentTooltipText||!this.hasActiveChild&&(!this.tooltipText||this.tooltipAppearance==="when-collapsed"&&this.showLabel))return;this.id||(this.id=`mdc-navmenuitem-${f()}`);const e=document.createElement(g);e.id=`mdc-navmenuitem-tooltip-${f()}`,e.textContent=this.hasActiveChild?this.isActiveParentTooltipText:this.tooltipText,e.setAttribute("triggerid",this.id),e.setAttribute("show-arrow",""),e.setAttribute("placement",this.tooltipPlacement),this.tooltipType&&e.setAttribute("tooltip-type",this.tooltipType),e.setAttribute("boundary-padding",((o=this.tooltipBoundaryPadding)==null?void 0:o.toString())||"0"),this.hasAttribute("slot")&&e.setAttribute("slot",this.getAttribute("slot")||""),this.after(e)}removeTooltip(){const e=document.querySelector(`${g}[triggerid="${this.id}"]`);e&&e.remove()}isNested(){let e=this.parentElement;for(;e;){if(e.tagName.toLowerCase()===k)return!0;e=e.parentElement}return!1}handleClickEvent(){this.disabled||this.cannotActivate||this.emitNavMenuItemActiveChange(this.active)}getFilledIconName(){return!this.iconName||this.iconName.endsWith("-filled")?void 0:`${I(this.iconName)}-filled`}renderBadge(e){return Object.values(C).includes(this.badgeType)?d`
      <mdc-badge
        part="${e?"":"badge"}"
        type="${v(this.badgeType)}"
        counter="${v(this.counter)}"
        max-counter="${this.maxCounter}"
        aria-hidden="true"
      >
      </mdc-badge>
    `:n}render(){var o;const e=(o=this.sideNavigationContext)==null?void 0:o.value;return d`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="regular-icon"></mdc-icon>
        ${this.cannotActivate?n:d`<mdc-icon
              name="${this.getFilledIconName()}"
              size="1.5"
              length-unit="rem"
              part="filled-icon"
            ></mdc-icon>`}
        ${this.showLabel?n:this.renderBadge(this.showLabel)}
      </div>
      ${this.showLabel?d`
            <mdc-text
              type=${this.active?h.BODY_MIDSIZE_BOLD:h.BODY_MIDSIZE_MEDIUM}
              tagname=${x.SPAN}
              part="text-container"
            >
              ${this.label}
            </mdc-text>
            ${this.renderBadge(this.showLabel)}
          `:n}
      ${e!=null&&e.hasSiblingWithTriggerId(this)?d` <mdc-icon name=${N.RIGHT_ARROW} length-unit="rem" part="trailing-arrow"> </mdc-icon>`:n}
    `}};c.styles=[...b.styles,...L];let t=c;i([a({type:Boolean,reflect:!0})],t.prototype,"active");i([a({type:Boolean,reflect:!0,attribute:"cannot-activate"})],t.prototype,"cannotActivate");i([a({type:String,attribute:"icon-name",reflect:!0})],t.prototype,"iconName");i([a({type:String,reflect:!0,attribute:"badge-type"})],t.prototype,"badgeType");i([a({type:Number,reflect:!0})],t.prototype,"counter");i([a({type:Number,attribute:"max-counter",reflect:!0})],t.prototype,"maxCounter");i([a({type:String,reflect:!0,attribute:"nav-id"})],t.prototype,"navId");i([a({type:Boolean,reflect:!0,attribute:"show-label"})],t.prototype,"showLabel");i([a({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel");i([a({type:Boolean,reflect:!0,attribute:"disable-aria-current"})],t.prototype,"disableAriaCurrent");i([a({type:String,reflect:!0,attribute:"tooltip-text"})],t.prototype,"tooltipText");i([a({type:String,reflect:!0,attribute:"tooltip-placement"})],t.prototype,"tooltipPlacement");i([a({type:String,reflect:!0,attribute:"tooltip-type"})],t.prototype,"tooltipType");i([a({type:String,reflect:!0,attribute:"tooltip-appearance"})],t.prototype,"tooltipAppearance");i([a({type:Number,reflect:!0,attribute:"tooltip-boundary-padding"})],t.prototype,"tooltipBoundaryPadding");i([a({type:String,reflect:!0,attribute:"is-active-parent-tooltip-text"})],t.prototype,"isActiveParentTooltipText");i([T()],t.prototype,"hasActiveChild");t.register(E);
