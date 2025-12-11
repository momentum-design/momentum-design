import{a2 as A,U as N,a3 as L,R as w,k as o,h as v,T,V as F,e as O,f as y,g as p,F as I,n as c}from"./iframe-C9zBfpfZ.js";import{T as S,b as x,c as E,a as m,V as s}from"./menupopover.constants-BLpiYlpv.js";import{K as D}from"./TabIndexMixin-D7RnmEw2.js";const u=class u{constructor(e,t){this.variant=e,this.expanded=t}hasSiblingWithTriggerId(e){var a;const t=e==null?void 0:e.getAttribute("id");return t?Array.from(((a=e==null?void 0:e.parentElement)==null?void 0:a.children)??[]).some(r=>r!==e&&r.tagName.toLowerCase()===x&&r.getAttribute("triggerid")===t):!1}getParentNavMenuItems(e){if(!e)return[];const t=[];let i=e;for(;i;){const a=i==null?void 0:i.closest(x);if(!a)break;const r=a.getAttribute("triggerid");if(!r)break;const d=document.getElementById(r);if(d&&d.tagName.toLowerCase()===E)t.push(d),i=d;else break}return t}setCurrentActiveNavMenuItem(e){var r;const t=((r=this.currentActiveNavMenuItem)==null?void 0:r.navId)===(e==null?void 0:e.navId),i=(e==null?void 0:e.cannotActivate)||this.hasSiblingWithTriggerId(e)||(e==null?void 0:e.softDisabled);if(t||i||(this.currentActiveNavMenuItem&&(this.currentActiveNavMenuItem.removeAttribute("aria-current"),this.currentActiveNavMenuItem.removeAttribute("active"),this.getParentNavMenuItems(this.currentActiveNavMenuItem).forEach(f=>{f.hasActiveChild=!1,f.removeAttribute("active")})),!e))return;this.currentActiveNavMenuItem=e,e!=null&&e.disableAriaCurrent||e.setAttribute("aria-current","page"),e.setAttribute("active",""),this.getParentNavMenuItems(e).forEach(d=>{d.hasActiveChild=!0,d.setAttribute("active","")})}};u.context=A(S);let l=u;const C=N`
  :host {
    --mdc-sidenavigation-expanded-width: 14.5rem;
    --mdc-sidenavigation-expanded-left-padding: 1rem;
    --mdc-sidenavigation-expanded-right-padding: 1rem;
    --mdc-sidenavigation-collapsed-width: 4.5rem;
    --mdc-sidenavigation-collapsed-left-padding: 1rem;
    --mdc-sidenavigation-collapsed-right-padding: 1rem;
    --mdc-sidenavigation-vertical-divider-button-z-index: auto;
    --mdc-sidenavigation-top-padding: 1rem;
    --mdc-sidenavigation-bottom-padding: 1rem;

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
    overflow-y: auto;
    overflow-x: hidden;
    padding: var(--mdc-sidenavigation-top-padding) 0;
    min-height: 0;
  }

  :host::part(scrollable-menubar) {
    width: 100%;
  }

  ::slotted([slot='scrollable-menubar']) {
    --mdc-menusection-divider-margin-block: 0.5rem 0.75rem;
    --mdc-menusection-gap: 0.25rem;
  }

  ::slotted(mdc-navmenuitem[slot='scrollable-menubar']) {
    margin-bottom: 0.25rem;
  }

  :host([expanded]) ::slotted([slot='scrollable-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-expanded-width);
    --mdc-menusection-header-padding: 0.25rem calc(var(--mdc-sidenavigation-expanded-left-padding) + 0.5rem) 0
      calc(var(--mdc-sidenavigation-expanded-left-padding) + 0.5rem);
  }

  :host(:not([expanded])) ::slotted([slot='scrollable-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-collapsed-width);
  }

  :host::part(fixed-section) {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: var(--mdc-sidenavigation-bottom-padding);
    gap: 0.5rem;
  }

  :host::part(fixed-menubar) {
    width: 100%;
  }

  ::slotted([slot='fixed-menubar']) {
    --mdc-menusection-divider-margin-block: 0.5rem 0.75rem;
    --mdc-menusection-gap: 0.25rem;
  }

  :host([expanded]) ::slotted([slot='fixed-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-expanded-width);
    --mdc-menusection-header-padding: 0.25rem calc(var(--mdc-sidenavigation-expanded-left-padding) + 0.5rem) 0
      calc(var(--mdc-sidenavigation-expanded-left-padding) + 0.5rem);
  }

  :host(:not([expanded])) ::slotted([slot='fixed-menubar']) {
    --mdc-menusection-divider-width: var(--mdc-sidenavigation-collapsed-width);
  }

  :host::part(brand-logo-container) {
    display: flex;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
    border-radius: 1.25rem;
  }

  :host([expanded]:dir(ltr))::part(brand-logo-container) {
    padding: 0.5rem 0rem 0.5rem calc(var(--mdc-sidenavigation-expanded-left-padding) + 0.5rem);
  }

  :host([expanded]:dir(rtl))::part(brand-logo-container) {
    padding: 0.5rem calc(var(--mdc-sidenavigation-expanded-left-padding) + 0.5rem) 0.5rem 0rem;
  }

  :host(:not([expanded]):dir(ltr))::part(brand-logo-container) {
    padding: 0.5rem 0rem 0.5rem calc(var(--mdc-sidenavigation-collapsed-left-padding) + 0.5rem);
  }

  :host(:not([expanded]):dir(rtl))::part(brand-logo-container) {
    padding: 0.5rem calc(var(--mdc-sidenavigation-collapsed-left-padding) + 0.5rem) 0.5rem 0rem;
  }

  ::slotted([slot='brand-logo']) {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    aspect-ratio: 1 / 1;
  }

  :host::part(separator) {
    flex-shrink: 0;
    margin-bottom: 0.75rem;
  }

  :host::part(vertical-divider-button) {
    z-index: var(--mdc-sidenavigation-vertical-divider-button-z-index);
  }

  :host([variant='flexible-on-hover'])::part(vertical-divider),
  :host([variant='flexible-on-hover'])::part(vertical-divider-button) {
    opacity: 0;
  }

  :host([data-grabber-visible][variant='flexible-on-hover'])::part(vertical-divider),
  :host([data-grabber-visible][variant='flexible-on-hover'])::part(vertical-divider-button) {
    opacity: 1;
  }
`,V=[C];var _=Object.defineProperty,h=(g,e,t,i)=>{for(var a=void 0,r=g.length-1,d;r>=0;r--)(d=g[r])&&(a=d(e,t,a)||a);return a&&_(e,t,a),a};const b=class b extends L{constructor(){super({context:l.context,initialValue:new l(m.VARIANT,!0)}),this.variant=m.VARIANT,this.footerText="",this.hideFixedSectionDivider=!1,this.isHovered=!1,this.isFocused=!1,this.handleMouseEnter=()=>{this.isHovered=!0,this.showGrabberButton()},this.handleMouseLeave=()=>{this.isHovered=!1,this.isFocused||this.hideGrabberButton()},this.handleFocusIn=e=>{if(!this.isFocused){if(this.navMenuItems.find(t=>t===e.target)&&!e.target.matches(":focus-visible"))return;this.isFocused=!0,this.showGrabberButton()}},this.handleFocusOut=e=>{this.contains(e.relatedTarget)||(this.isFocused=!1,this.isHovered||this.hideGrabberButton())},this.setupFlexibleOnHoverListeners=()=>{this.variant===s.FLEXIBLE_ON_HOVER&&(this.addEventListener("mouseenter",this.handleMouseEnter),this.addEventListener("mouseleave",this.handleMouseLeave),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut))},this.removeFlexibleOnHoverListeners=()=>{this.removeEventListener("mouseenter",this.handleMouseEnter),this.removeEventListener("mouseleave",this.handleMouseLeave),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut)},this.handleNestedNavMenuItemActiveChange=e=>{var t;if((t=this.context)!=null&&t.value){const i=this.findNav(this.navMenuItems,e.detail.navId);this.context.value.setCurrentActiveNavMenuItem(i)}},this.findNav=(e,t)=>e.find(i=>i.navId===t),this.addEventListener("activechange",this.handleNestedNavMenuItemActiveChange.bind(this))}connectedCallback(){super.connectedCallback(),this.role=w.NAVIGATION,this.setupFlexibleOnHoverListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeFlexibleOnHoverListeners()}showGrabberButton(){this.toggleAttribute("data-grabber-visible",!0)}hideGrabberButton(){this.toggleAttribute("data-grabber-visible",!1)}static get Context(){return l.context}updated(e){if(super.updated(e),e.has("variant"))switch(this.setVariant(this.variant),this.removeFlexibleOnHoverListeners(),this.setupFlexibleOnHoverListeners(),this.variant){case s.FIXED_EXPANDED:this.expanded=!0;break;case s.FIXED_COLLAPSED:this.expanded=!1;break}(e.has("variant")||e.has("expanded"))&&this.updateContext()}firstUpdated(e){super.firstUpdated(e),(this.variant===s.FLEXIBLE||this.variant===s.FLEXIBLE_ON_HOVER)&&this.expanded===void 0&&(this.expanded=!0,this.updateContext())}updateContext(){(this.context.value.variant!==this.variant||this.context.value.expanded!==this.expanded)&&(this.context.value.variant=this.variant,this.context.value.expanded=this.expanded,this.context.updateObservers())}get navMenuItems(){return Array.from(this.querySelectorAll(`${E}:not([disabled])`))}setVariant(e){this.setAttribute("variant",Object.values(s).includes(e)?e:m.VARIANT)}toggleSideNavigation(e){this.expanded=!this.expanded,this.expanded===!1&&this.variant===s.FLEXIBLE_ON_HOVER&&e.pointerType==="mouse"&&(this.isHovered=!1,this.isFocused=!1,this.hideGrabberButton()),this.dispatchEvent(new CustomEvent("toggle",{detail:{expanded:this.expanded}}))}preventScrollOnSpace(e){e.key===D.SPACE&&e.preventDefault()}render(){return this.variant===s.HIDDEN?o``:o`
      <div part="side-navigation-container" id="side-nav-container">
        <div part="scrollable-section" tabindex="-1" @keydown=${this.preventScrollOnSpace}>
          <slot name="scrollable-section">
            <mdc-menubar part="scrollable-menubar">
              <slot name="scrollable-menubar"></slot>
            </mdc-menubar>
          </slot>
        </div>
        ${this.hideFixedSectionDivider?v:o`<mdc-divider variant="gradient" part="separator"></mdc-divider>`}
        <div part="fixed-section">
          <slot name="fixed-section">
            <mdc-menubar part="fixed-menubar">
              <slot name="fixed-menubar"></slot>
            </mdc-menubar>
          </slot>
          ${this.footerText?o`
                <div part="brand-logo-container">
                  <slot name="brand-logo"></slot>
                  ${this.expanded?o` <mdc-text
                        type=${T.BODY_MIDSIZE_MEDIUM}
                        tagname=${F.SPAN}
                        part="footer-text"
                        >${this.footerText}</mdc-text
                      >`:v}
                </div>
              `:v}
        </div>
      </div>
      ${this.variant===s.FLEXIBLE||this.variant===s.FLEXIBLE_ON_HOVER?o`<mdc-divider
            part="vertical-divider"
            orientation=${O.VERTICAL}
            variant=${y.GRADIENT}
            arrow-direction=${this.expanded?p.NEGATIVE:p.POSITIVE}
            button-position=${p.POSITIVE}
          >
            <mdc-button
              part="vertical-divider-button"
              aria-label=${this.grabberBtnAriaLabel??""}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
            ></mdc-button>
          </mdc-divider>`:v}
    `}};b.styles=[...I.styles,...V];let n=b;h([c({type:String,reflect:!0})],n.prototype,"variant");h([c({type:String,reflect:!0,attribute:"footer-text"})],n.prototype,"footerText");h([c({type:Boolean,reflect:!0,attribute:"expanded"})],n.prototype,"expanded");h([c({type:String,reflect:!0,attribute:"grabber-btn-aria-label"})],n.prototype,"grabberBtnAriaLabel");h([c({type:Boolean,reflect:!0,attribute:"hide-fixed-section-divider"})],n.prototype,"hideFixedSectionDivider");export{n as S};
