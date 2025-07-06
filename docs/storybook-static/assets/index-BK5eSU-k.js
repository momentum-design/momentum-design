import{i as D,k as c,D as v}from"./lit-element-D5KKan5q.js";import{u as L,P as $,C as O,n as s}from"./index-C9z9WAEj.js";import{t as I}from"./if-defined-D5BV9-c0.js";import{p as _}from"./index-2PiEGcHV.js";import{T as f,V as E}from"./index-BrLJ_9IK.js";import{T as x}from"./menupopover.constants-Df21F9dQ.js";import{I as R}from"./IconNameMixin-CujGSn0t.js";import{M as w}from"./menuitem.component-C82Go1iM.js";import{g as P}from"./button.utils-rNW36Ji7.js";import{r as C}from"./state-CSSggq2n.js";import{b as p,D as V,a as B}from"./divider.constants-DyEGqhgz.js";import{R as M}from"./roles-BH_hBfTz.js";import{n as X}from"./create-context-89xeped_.js";import{a as F}from"./buttonsimple.constants-CGc1uJX6.js";import{T as k}from"./index-DMFol0xS.js";import{P as G}from"./popover.component-Bw5zQP8M.js";import{a as U,h as W}from"./index-Cx7wvr8C.js";import"./index-DiQBAA7b.js";import"./index-DfhuLnrm.js";const Y=L.constructTagName("sidenavigation"),l={FIXED_EXPANDED:"fixed-expanded",FIXED_COLLAPSED:"fixed-collapsed",FLEXIBLE:"flexible",HIDDEN:"hidden"},g={VARIANT:l.FLEXIBLE},S=L.constructTagName("navitem"),Z={DOT:k.DOT,COUNTER:k.COUNTER},j={RIGHT_ARROW:"arrow-right-bold"},H={MAX_COUNTER:99,TEXT_TYPE:f.BODY_MIDSIZE_REGULAR,TAG_NAME:E.SPAN,SIZE:F[24],VARIANT:l.FLEXIBLE},A=class A{constructor(t,e,i){this.variant=t,this.expanded=e,this.parentNavTooltipText=i}hasSiblingWithTriggerId(t){var r;const e=t==null?void 0:t.getAttribute("id");return e?Array.from(((r=t==null?void 0:t.parentElement)==null?void 0:r.children)??[]).some(a=>a!==t&&a.tagName.toLowerCase()===x&&a.getAttribute("triggerid")===e):!1}getParentNavItems(t){if(!t)return[];const e=[];let i=t;for(;i;){const r=i==null?void 0:i.closest(x);if(!r)break;const a=r.getAttribute("triggerid");if(!a)break;const o=document.getElementById(a);if(o&&o.tagName.toLowerCase()===S)e.push(o),i=o;else break}return e}setCurrentActiveNavItem(t){var a;const e=((a=this.currentActiveNavItem)==null?void 0:a.navId)===(t==null?void 0:t.navId),i=(t==null?void 0:t.disableAriaCurrent)||this.hasSiblingWithTriggerId(t);if(e||i||(this.currentActiveNavItem&&(this.currentActiveNavItem.removeAttribute("aria-current"),this.currentActiveNavItem.removeAttribute("active"),this.getParentNavItems(this.currentActiveNavItem).forEach(y=>{y.removeAttribute("tooltip-text"),y.removeAttribute("active")})),!t))return;this.currentActiveNavItem=t,t.setAttribute("aria-current","page"),t.setAttribute("active",""),this.getParentNavItems(t).forEach(o=>{o.setAttribute("tooltip-text",this.parentNavTooltipText||""),o.setAttribute("tooltip-placement",G.BOTTOM),o.setAttribute("active","")})}};A.context=X(Y);let u=A;const z=D`
  :host {
    --mdc-sidenavigation-expanded-width: 15rem;
    --mdc-sidenavigation-collapsed-width: 4.5rem;

    display: flex;
    height: 100%;
  }

  :host([expanded]) {
    width: var(--mdc-sidenavigation-expanded-width);
  }

  :host(:not([expanded])) {
    width: var(--mdc-sidenavigation-collapsed-width);
  }

  :host::part(side-navigation-container) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  :host::part(scrollable-section) {
    flex-grow: 1;
    overflow: auto;
    padding: 1rem 0;
    min-height: 0;
  }

  :host::part(fixed-section) {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1rem;
    gap: 0.5rem;
  }

  :host::part(brand-logo-container) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    border-radius: 1.25rem;
  }

  :host(:dir(ltr))::part(brand-logo-container) {
    padding: 0.5rem 0rem 0.5rem 1.5rem;
  }

  :host(:dir(rtl))::part(brand-logo-container) {
    padding: 0.5rem 1.5rem 0.5rem 0rem;
  }

  ::slotted([slot='brand-logo']) {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
  }

  :host::part(separator) {
    margin-bottom: 0.75rem;
  }
`,q=[z];var J=Object.defineProperty,m=(b,t,e,i)=>{for(var r=void 0,a=b.length-1,o;a>=0;a--)(o=b[a])&&(r=o(t,e,r)||r);return r&&J(t,e,r),r};const N=class N extends ${constructor(){super({context:u.context,initialValue:new u(g.VARIANT,!0)}),this.variant=g.VARIANT,this.customerName="",this.flexibleExpanded=this.variant===g.VARIANT,this.arrowDirection=this.flexibleExpanded?p.NEGATIVE:p.POSITIVE,this.updateExpansionState=()=>{switch(this.variant){case l.FLEXIBLE:this.expanded=this.flexibleExpanded;break;case l.FIXED_EXPANDED:this.expanded=!0;break;case l.FIXED_COLLAPSED:this.expanded=!1;break}}}connectedCallback(){super.connectedCallback(),this.role=M.NAVIGATION}static get Context(){return u.context}updated(t){super.updated(t),t.has("variant")&&(this.setVariant(this.variant),this.updateExpansionState()),(t.has("variant")||t.has("expanded"))&&this.updateContext()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.expanded!==this.expanded||this.context.value.parentNavTooltipText!==this.parentNavTooltipText)&&(this.context.value.variant=this.variant,this.context.value.expanded=this.expanded,this.context.value.parentNavTooltipText=this.parentNavTooltipText,this.context.updateObservers())}setVariant(t){this.setAttribute("variant",Object.values(l).includes(t)?t:g.VARIANT)}toggleSideNavigation(){this.flexibleExpanded=!this.flexibleExpanded,this.arrowDirection=this.arrowDirection===p.NEGATIVE?p.POSITIVE:p.NEGATIVE,this.updateExpansionState()}render(){return this.variant===l.HIDDEN?c``:c`
      <div part="side-navigation-container" id="side-nav-container">
        <div part="scrollable-section">
          <slot name="scrollable-section"></slot>
        </div>
        <mdc-divider variant="gradient" part="separator"></mdc-divider>
        <div part="fixed-section">
          <slot name="fixed-section"></slot>
          <div part="brand-logo-container">
            <slot name="brand-logo"></slot>
            ${this.expanded?c`<mdc-text type=${f.BODY_MIDSIZE_MEDIUM} tagname=${E.SPAN} part="label"
                  >${this.customerName}</mdc-text
                >`:v}
          </div>
        </div>
      </div>
      ${this.variant===l.FLEXIBLE?c`<mdc-divider
            orientation=${V.VERTICAL}
            variant=${B.GRADIENT}
            arrow-direction=${this.arrowDirection}
            button-position=${p.POSITIVE}
          >
            <mdc-button
              aria-label=${this.grabberBtnAriaLabel??""}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
              part="grabber-btn"
            ></mdc-button>
          </mdc-divider>`:v}
    `}};N.styles=[...O.styles,...q];let d=N;m([s({type:String,reflect:!0})],d.prototype,"variant");m([s({type:String,reflect:!0,attribute:"customer-name"})],d.prototype,"customerName");m([s({type:Boolean,reflect:!0})],d.prototype,"expanded");m([s({type:String,reflect:!0,attribute:"grabber-btn-aria-label"})],d.prototype,"grabberBtnAriaLabel");m([s({type:String,reflect:!0,attribute:"parent-nav-tooltip-text"})],d.prototype,"parentNavTooltipText");m([C()],d.prototype,"flexibleExpanded");m([C()],d.prototype,"arrowDirection");const K=[U,D`
    :host {
      --mdc-navitem-color: var(--mds-color-theme-text-primary-normal);
      --mdc-navitem-disabled-color: var(--mds-color-theme-text-primary-disabled);
      --mdc-navitem-border-color: var(--mds-color-theme-outline-button-normal);
      --mdc-navitem-expanded-width: 12.75rem;

      /* Background color when in default (normal) or active state */
      --mdc-navitem-rest-active-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-navitem-hover-background-color: var(--mds-color-theme-button-secondary-hover);
      --mdc-navitem-hover-active-background-color: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-navitem-pressed-background-color: var(--mds-color-theme-button-secondary-pressed);
      --mdc-navitem-pressed-active-background-color: var(--mds-color-theme-button-secondary-active-pressed);
      --mdc-navitem-disabled-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-navitem-disabled-active-background-color: var(--mds-color-theme-button-secondary-active-disabled);

      position: relative;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem;
      color: var(--mdc-navitem-color);
      border-color: var(--mdc-navitem-border-color);
      border-radius: 1.25rem;
      cursor: pointer;
    }

    :host(:dir(ltr)) {
      margin-left: 1rem;
    }

    :host(:dir(rtl)) {
      margin-right: 1rem;
    }

    :host([show-label]) {
      width: var(--mdc-navitem-expanded-width);
    }

    :host([active]) {
      background-color: var(--mdc-navitem-rest-active-background-color);
    }

    :host([disabled]) {
      color: var(--mdc-navitem-disabled-color);
      background-color: var(--mdc-navitem-disabled-background-color);
      pointer-events: none;
    }

    :host([active][disabled]) {
      background-color: var(--mdc-navitem-disabled-active-background-color);
      color: var(--mdc-navitem-disabled-color);
    }

    :host(:hover) {
      background-color: var(--mdc-navitem-hover-background-color);
    }

    :host(:hover[active]) {
      background-color: var(--mdc-navitem-hover-active-background-color);
    }

    :host(:active) {
      background-color: var(--mdc-navitem-pressed-background-color);
    }

    :host(:active[active]) {
      background-color: var(--mdc-navitem-pressed-active-background-color);
    }

    :host::before {
      content: '';
      display: block;
      position: absolute;
      background-color: var(--mdc-navitem-color);
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
      background-color: var(--mdc-navitem-disabled-color);
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
  `,...W()];var Q=Object.defineProperty,h=(b,t,e,i)=>{for(var r=void 0,a=b.length-1,o;a>=0;a--)(o=b[a])&&(r=o(t,e,r)||r);return r&&Q(t,e,r),r};const T=class T extends R(w){constructor(){super(...arguments),this.maxCounter=H.MAX_COUNTER,this.ariaLabel=null,this.sideNavigationContext=_.consume({host:this,context:d.Context}),this.emitNavItemActiveChange=t=>{const e=new CustomEvent("activechange",{detail:{navId:this.navId,active:t},bubbles:!0});this.dispatchEvent(e)}}connectedCallback(){super.connectedCallback(),this.variant=void 0,this.tooltipPlacement=void 0,this.addEventListener("click",this.handleClickEvent),!this.navId&&this.onerror&&this.onerror("[mdc-navitem] navId is required and was not provided.")}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleClickEvent)}updated(){var e;const t=(e=this.sideNavigationContext)==null?void 0:e.value;if(t)if(this.showLabel=this.isNested()?!0:t.expanded,this.showLabel)this.removeAttribute("aria-label");else{const i=this.label??"";this.ariaLabel=this.ariaLabel||i,this.setAttribute("aria-label",i)}}isNested(){let t=this.parentElement;for(;t;){if(t.tagName.toLowerCase()===x)return!0;t=t.parentElement}return!1}modifyIconName(t){if(!this.iconName)return;const e=this.iconName.endsWith("-filled"),i=P(this.iconName);t?e||(this.prevIconName=this.iconName,this.iconName=`${i}-filled`):this.prevIconName&&(this.iconName=this.prevIconName)}handleClickEvent(){this.disabled||this.emitNavItemActiveChange(this.active)}update(t){super.update(t),t.has("active")&&this.modifyIconName(this.active)}renderTextLabel(t){return c`
      <mdc-text
        type=${this.active?f.BODY_MIDSIZE_BOLD:f.BODY_MIDSIZE_MEDIUM}
        tagname=${E.SPAN}
        part="text-container"
      >
        ${t}
      </mdc-text>
    `}renderArrowIcon(t){const e=t?"":"arrow";return c`
      <mdc-icon name=${j.RIGHT_ARROW} length-unit="rem" part="trailing-arrow" class="${e}"> </mdc-icon>
    `}renderBadge(t){const e=t?"":"badge";return Object.values(Z).includes(this.badgeType)?c`
      <mdc-badge
        class="${e}"
        type="${I(this.badgeType)}"
        counter="${I(this.counter)}"
        max-counter="${this.maxCounter}"
      >
      </mdc-badge>
    `:v}render(){var e;const t=(e=this.sideNavigationContext)==null?void 0:e.value;return c`
      <div part="icon-container">
        <mdc-icon name="${this.iconName}" size="1.5" length-unit="rem" part="icon"></mdc-icon>
        ${this.showLabel?v:this.renderBadge(this.showLabel)}
      </div>
      ${this.showLabel?c`${this.renderTextLabel(this.label)}${this.renderBadge(this.showLabel)}`:v}
      ${t!=null&&t.hasSiblingWithTriggerId(this)?this.renderArrowIcon(this.showLabel):v}
    `}};T.styles=[...w.styles,...K];let n=T;h([s({type:Boolean,reflect:!0})],n.prototype,"active");h([s({type:String,reflect:!0,attribute:"badge-type"})],n.prototype,"badgeType");h([s({type:Number,reflect:!0})],n.prototype,"counter");h([s({type:Number,attribute:"max-counter",reflect:!0})],n.prototype,"maxCounter");h([s({type:String,reflect:!0,attribute:"nav-id"})],n.prototype,"navId");h([s({type:Boolean,reflect:!0,attribute:"show-label"})],n.prototype,"showLabel");h([s({type:String,attribute:"aria-label"})],n.prototype,"ariaLabel");h([s({type:Boolean,reflect:!0,attribute:"disable-aria-current"})],n.prototype,"disableAriaCurrent");n.register(S);export{Z as A,H as D,d as S,S as T,l as V,g as a,Y as b};
