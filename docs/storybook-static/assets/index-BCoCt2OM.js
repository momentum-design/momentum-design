import{a5 as x,a4 as T,aa as C,z as d,k as s,t as h,T as u,V as D,U as y,n as r}from"./iframe-CYZ064vw.js";import{D as v,b as k,c as A,A as N,I as b}from"./menupopover.constants-C5XzAs8k.js";import{a as g}from"./index-B1RCHNN3.js";import{M as f}from"./menuitem.component-CEMs2qRx.js";import{p as S}from"./index-Cm4DuzN6.js";import{S as O}from"./sidenavigation.component-CSlQm0v7.js";import{g as $}from"./button.utils-rNW36Ji7.js";import{v as w}from"./v4-CmTdKEVZ.js";import"./index-CbK4qKYb.js";import"./index-C-a6jsM_.js";const E=[x,T`
    :host {
      --mdc-navmenuitem-in-sidenav-expanded-width: var(--mdc-sidenavigation-expanded-width, 100%);
      --mdc-navmenuitem-in-sidenav-expanded-margin-left: var(--mdc-sidenavigation-expanded-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-expanded-margin-right: var(--mdc-sidenavigation-expanded-right-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-width: var(--mdc-sidenavigation-collapsed-width, fit-content);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-left: var(--mdc-sidenavigation-collapsed-left-padding, 1rem);
      --mdc-navmenuitem-in-sidenav-collapsed-margin-right: var(--mdc-sidenavigation-collapsed-right-padding, 1rem);

      --mdc-navmenuitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navmenuitem-notch-color: var(--mds-color-theme-text-primary-normal);
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
      height: 2.5rem;
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

    :host([in-menupopover]),
    :host([in-dropdown-container]) {
      width: 100%;
      padding: 1rem;
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

    :host(:not([in-menupopover]))::before,
    :host([in-dropdown-container])::before {
      content: '';
      display: block;
      position: absolute;
      background-color: var(--mdc-navmenuitem-notch-color);
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
      inset-inline-end: -0.125rem;
      top: 0.875rem;
    }

    :host([show-label])::part(trailing-arrow),
    :host([show-label])::part(trailing-arrow-dropdown) {
      flex-shrink: 0;
    }

    /* Arrow rotation when dropdown is open */
    .arrow-rotated {
      transform: rotate(180deg);
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
  `,...C()];var I=Object.defineProperty,o=(p,e,t,a)=>{for(var n=void 0,l=p.length-1,m;l>=0;l--)(m=p[l])&&(n=m(e,t,n)||n);return n&&I(e,t,n),n};const c=class c extends f{constructor(){super(),this.cannotActivate=v.CANNOT_ACTIVATE,this.maxCounter=v.MAX_COUNTER,this.ariaLabel=null,this.tooltipPlacement="right",this.tooltipAppearance="when-collapsed",this.hasActiveChild=!1,this.dropdownOpen=!1,this.sideNavigationContext=S.consume({host:this,context:O.Context}),this.emitNavMenuItemActiveChange=e=>{const t=new CustomEvent("activechange",{detail:{navId:this.navId,active:e},bubbles:!0});this.dispatchEvent(t)},this.addEventListener("click",this.handleClickEvent.bind(this))}connectedCallback(){super.connectedCallback(),this.variant=void 0,!this.navId&&this.onerror&&this.onerror("[mdc-navmenuitem] navId is required and was not provided."),this.toggleAttribute("in-menupopover",this.isNested()),this.toggleAttribute("in-dropdown-container",this.isInsideDropdownContainer())}disconnectedCallback(){super.disconnectedCallback(),this.removeTooltip()}firstUpdated(e){super.firstUpdated(e),this.active&&!this.disableAriaCurrent&&!this.cannotActivate&&this.setAttribute("aria-current","page")}updated(e){var a;super.updated(e),(e.has("tooltipText")||e.has("showLabel")||e.has("hasActiveChild")||e.has("dropdownOpen"))&&this.renderDynamicTooltip(),e.has("showLabel")&&!this.showLabel&&!this.getAttribute("aria-label")&&this.label&&this.setAttribute("aria-label",this.label);const t=(a=this.sideNavigationContext)==null?void 0:a.value;t&&(this.showLabel=this.isNested()||this.isInsideDropdownContainer()?!0:t.expanded,!t.expanded&&this.dropdownOpen&&this.closeDropdown(),!t.isDropdownSubmenuType&&this.dropdownOpen&&this.closeDropdown(),t.isDropdownSubmenuType&&this.hasActiveChild&&t.isDropDownParent(this)&&(t.expanded&&this.dropdownOpen?(this.removeAttribute("active"),this.active=!1):(this.setAttribute("active",""),this.active=!0)))}renderDynamicTooltip(){var t;if(this.removeTooltip(),this.disabled||this.dropdownOpen||this.hasActiveChild&&!this.isActiveParentTooltipText||!this.hasActiveChild&&(!this.tooltipText||this.tooltipAppearance==="when-collapsed"&&this.showLabel))return;this.id||(this.id=`mdc-navmenuitem-${w()}`);const e=document.createElement(g);e.id=`mdc-navmenuitem-tooltip-${w()}`,e.textContent=this.hasActiveChild?this.isActiveParentTooltipText:this.tooltipText,e.setAttribute("triggerid",this.id),e.setAttribute("show-arrow",""),e.setAttribute("placement",this.tooltipPlacement),this.tooltipType&&e.setAttribute("tooltip-type",this.tooltipType),e.setAttribute("boundary-padding",((t=this.tooltipBoundaryPadding)==null?void 0:t.toString())||"0"),this.hasAttribute("slot")&&e.setAttribute("slot",this.getAttribute("slot")||""),this.after(e)}removeTooltip(){const e=document.querySelector(`${g}[triggerid="${this.id}"]`);e&&e.remove()}isNested(){let e=this.parentElement;for(;e;){if(e.tagName.toLowerCase()===k)return!0;e=e.parentElement}return!1}isInsideDropdownContainer(){let e=this.parentElement;for(;e;){if(e.matches("div[data-trigger]"))return!0;e=e.parentElement}return!1}handleClickEvent(){var t;if(this.disabled||this.cannotActivate||this.softDisabled)return;const e=(t=this.sideNavigationContext)==null?void 0:t.value;if(e!=null&&e.isDropdownSubmenuType&&(e!=null&&e.expanded)&&(e!=null&&e.isDropDownParent(this))){if(this.toggleDropdown(),this.dropdownOpen){const a=this.getDropdownContainer(),n=a==null?void 0:a.querySelector(A);n==null||n.focus()}return}this.emitNavMenuItemActiveChange(this.active)}toggleDropdown(){const e=this.getDropdownContainer();e&&(this.dropdownOpen=!this.dropdownOpen,e.style.display=this.dropdownOpen?"flex":"none",this.dropdownOpen?this.setAttribute("aria-expanded","true"):this.removeAttribute("aria-expanded"))}openDropdown(){if(this.dropdownOpen)return;const e=this.getDropdownContainer();e&&(e.style.display="flex"),this.dropdownOpen=!0,this.setAttribute("aria-expanded","true")}closeDropdown(){if(!this.dropdownOpen)return;const e=this.getDropdownContainer();e&&(e.style.display="none"),this.dropdownOpen=!1,this.removeAttribute("aria-expanded")}getDropdownContainer(){var e;return this.id?(e=this.parentElement)==null?void 0:e.querySelector(`div[data-trigger="${this.id}"]`):null}getFilledIconName(){return!this.iconName||this.iconName.endsWith("-filled")?void 0:`${$(this.iconName)}-filled`}renderBadge(e){return Object.values(N).includes(this.badgeType)?s`
      <mdc-badge
        part="${e?"":"badge"}"
        type="${h(this.badgeType)}"
        counter="${h(this.counter)}"
        max-counter="${this.maxCounter}"
        aria-hidden="true"
      >
      </mdc-badge>
    `:d}render(){var l;const e=(l=this.sideNavigationContext)==null?void 0:l.value,t=(e==null?void 0:e.isDropdownSubmenuType)&&(e==null?void 0:e.expanded),a=e==null?void 0:e.isDropDownParent(this),n=e==null?void 0:e.hasSiblingWithTriggerId(this);return s`
      <div part="icon-container">
        ${this.iconName?s`<mdc-icon
              name="${this.iconName}"
              size="1.5"
              length-unit="rem"
              part="regular-icon"
            ></mdc-icon>`:d}
        ${!this.cannotActivate&&this.iconName?s`<mdc-icon
              name="${this.getFilledIconName()}"
              size="1.5"
              length-unit="rem"
              part="filled-icon"
            ></mdc-icon>`:d}
        ${this.showLabel?d:this.renderBadge(this.showLabel)}
      </div>
      ${this.showLabel?s`
            <mdc-text
              type=${this.active?u.BODY_MIDSIZE_BOLD:u.BODY_MIDSIZE_MEDIUM}
              tagname=${D.SPAN}
              part="text-container"
            >
              ${this.label}
            </mdc-text>
            ${this.renderBadge(this.showLabel)}
          `:d}
      ${t&&a?s` <mdc-icon
            name=${b.DOWN_ARROW}
            length-unit="rem"
            part="trailing-arrow-dropdown"
            class="${this.dropdownOpen?"arrow-rotated":""}"
          >
          </mdc-icon>`:d}
      ${n?s` <mdc-icon name=${b.RIGHT_ARROW} length-unit="rem" part="trailing-arrow"> </mdc-icon>`:d}
    `}};c.styles=[...f.styles,...E];let i=c;o([r({type:Boolean,reflect:!0})],i.prototype,"active");o([r({type:Boolean,reflect:!0,attribute:"cannot-activate"})],i.prototype,"cannotActivate");o([r({type:String,attribute:"icon-name",reflect:!0})],i.prototype,"iconName");o([r({type:String,reflect:!0,attribute:"badge-type"})],i.prototype,"badgeType");o([r({type:Number,reflect:!0})],i.prototype,"counter");o([r({type:Number,attribute:"max-counter",reflect:!0})],i.prototype,"maxCounter");o([r({type:String,reflect:!0,attribute:"nav-id"})],i.prototype,"navId");o([r({type:Boolean,reflect:!0,attribute:"show-label"})],i.prototype,"showLabel");o([r({type:String,attribute:"aria-label"})],i.prototype,"ariaLabel");o([r({type:Boolean,reflect:!0,attribute:"disable-aria-current"})],i.prototype,"disableAriaCurrent");o([r({type:String,reflect:!0,attribute:"tooltip-text"})],i.prototype,"tooltipText");o([r({type:String,reflect:!0,attribute:"tooltip-placement"})],i.prototype,"tooltipPlacement");o([r({type:String,reflect:!0,attribute:"tooltip-type"})],i.prototype,"tooltipType");o([r({type:String,reflect:!0,attribute:"tooltip-appearance"})],i.prototype,"tooltipAppearance");o([r({type:Number,reflect:!0,attribute:"tooltip-boundary-padding"})],i.prototype,"tooltipBoundaryPadding");o([r({type:String,reflect:!0,attribute:"is-active-parent-tooltip-text"})],i.prototype,"isActiveParentTooltipText");o([y()],i.prototype,"hasActiveChild");o([y()],i.prototype,"dropdownOpen");i.register(A);
