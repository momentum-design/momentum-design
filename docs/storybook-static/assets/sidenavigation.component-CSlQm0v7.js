import{an as _,a4 as B,ao as k,R as V,k as m,z as D,T as H,V as G,e as U,f as q,g as I,C as X,n as f}from"./iframe-CYZ064vw.js";import{T as W,S as E,b as w,c as b,a as A,V as c}from"./menupopover.constants-C5XzAs8k.js";import{a as K,A as g}from"./KeyDownHandledMixin-DGzJ0rYO.js";const L=class L{constructor(e,t,i){this.variant=e,this.expanded=t,this.submenuType=i}get isDropdownSubmenuType(){return this.submenuType===E.DROPDOWN}hasSiblingWithTriggerId(e){var s;const t=e==null?void 0:e.getAttribute("id");return t?Array.from(((s=e==null?void 0:e.parentElement)==null?void 0:s.children)??[]).some(r=>r!==e&&r.tagName.toLowerCase()===w&&r.getAttribute("triggerid")===t):!1}isDropDownParent(e){var s;const t=e==null?void 0:e.getAttribute("id");return t?Array.from(((s=e==null?void 0:e.parentElement)==null?void 0:s.children)??[]).some(r=>r!==e&&r.matches(`div[data-trigger="${t}"]`)):!1}getParentNavMenuItems(e){var s;if(!e)return[];const t=[];let i=e;for(;i;){let r=null;const o=i==null?void 0:i.closest(w);if(o)r=this.getTriggerElement(o,"triggerid");else{const u=(s=i==null?void 0:i.parentElement)==null?void 0:s.closest("div[data-trigger]");u&&(r=this.getTriggerElement(u,"data-trigger"))}if(r&&r.tagName.toLowerCase()===b)t.push(r),i=r;else break}return t}getTriggerElement(e,t){const i=e.getAttribute(t);return i?document.getElementById(i):null}setCurrentActiveNavMenuItem(e){var r;const t=((r=this.currentActiveNavMenuItem)==null?void 0:r.navId)===(e==null?void 0:e.navId),i=(e==null?void 0:e.cannotActivate)||this.hasSiblingWithTriggerId(e)||this.isDropdownSubmenuType&&this.expanded&&this.isDropDownParent(e)||(e==null?void 0:e.softDisabled);if(t||i||(this.currentActiveNavMenuItem&&(this.currentActiveNavMenuItem.removeAttribute("aria-current"),this.currentActiveNavMenuItem.removeAttribute("active"),this.getParentNavMenuItems(this.currentActiveNavMenuItem).forEach(u=>{u.hasActiveChild=!1,u.removeAttribute("active")})),!e))return;this.currentActiveNavMenuItem=e,e!=null&&e.disableAriaCurrent||e.setAttribute("aria-current","page"),e.setAttribute("active",""),this.getParentNavMenuItems(e).forEach(o=>{o.hasActiveChild=!0,o.setAttribute("active","")})}};L.context=_(W);let y=L;const Y=B`
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
`,j=[Y];class z extends k{}var Z=Object.defineProperty,x=(T,e,t,i)=>{for(var s=void 0,r=T.length-1,o;r>=0;r--)(o=T[r])&&(s=o(e,t,s)||s);return s&&Z(e,t,s),s};const F=class F extends K(z){constructor(){super({context:y.context,initialValue:new y(A.VARIANT,!0,A.SUBMENU_TYPE)}),this.variant=A.VARIANT,this.footerText="",this.hideFixedSectionDivider=!1,this.submenuType=A.SUBMENU_TYPE,this.isHovered=!1,this.isFocused=!1,this.handleMouseEnter=()=>{this.isHovered=!0,this.showGrabberButton()},this.handleMouseLeave=()=>{this.isHovered=!1,this.isFocused||this.hideGrabberButton()},this.handleFocusIn=e=>{if(!this.isFocused){if(this.navMenuItems.find(t=>t===e.target)&&!e.target.matches(":focus-visible"))return;this.isFocused=!0,this.showGrabberButton()}},this.handleFocusOut=e=>{this.contains(e.relatedTarget)||(this.isFocused=!1,this.isHovered||this.hideGrabberButton())},this.setupFlexibleOnHoverListeners=()=>{this.variant===c.FLEXIBLE_ON_HOVER&&(this.addEventListener("mouseenter",this.handleMouseEnter),this.addEventListener("mouseleave",this.handleMouseLeave),this.addEventListener("focusin",this.handleFocusIn),this.addEventListener("focusout",this.handleFocusOut))},this.removeFlexibleOnHoverListeners=()=>{this.removeEventListener("mouseenter",this.handleMouseEnter),this.removeEventListener("mouseleave",this.handleMouseLeave),this.removeEventListener("focusin",this.handleFocusIn),this.removeEventListener("focusout",this.handleFocusOut)},this.handleNestedNavMenuItemActiveChange=e=>{var t;if((t=this.context)!=null&&t.value){const i=this.findNav(this.navMenuItems,e.detail.navId);this.context.value.setCurrentActiveNavMenuItem(i)}},this.findNav=(e,t)=>e.find(i=>i.navId===t),this.addEventListener("activechange",this.handleNestedNavMenuItemActiveChange.bind(this)),this.addEventListener("keydown",this.handleDropdownKeyDown.bind(this))}connectedCallback(){super.connectedCallback(),this.role=V.NAVIGATION,this.setupFlexibleOnHoverListeners()}disconnectedCallback(){super.disconnectedCallback(),this.removeFlexibleOnHoverListeners()}showGrabberButton(){this.toggleAttribute("data-grabber-visible",!0)}hideGrabberButton(){this.toggleAttribute("data-grabber-visible",!1)}static get Context(){return y.context}updated(e){if(super.updated(e),e.has("variant"))switch(this.setVariant(this.variant),this.removeFlexibleOnHoverListeners(),this.setupFlexibleOnHoverListeners(),this.variant){case c.FIXED_EXPANDED:this.expanded=!0;break;case c.FIXED_COLLAPSED:this.expanded=!1;break}(e.has("variant")||e.has("expanded")||e.has("submenuType"))&&this.updateContext(),(e.has("expanded")||e.has("submenuType"))&&((!this.expanded||this.submenuType!==E.DROPDOWN)&&this.closeAllDropdowns(),this.submenuType===E.DROPDOWN?this.expanded?this.convertFlyoutsToDropdowns():this.convertDropdownsToFlyouts():this.convertFlyoutsToDropdowns())}firstUpdated(e){super.firstUpdated(e),(this.variant===c.FLEXIBLE||this.variant===c.FLEXIBLE_ON_HOVER)&&this.expanded===void 0&&(this.expanded=!0,this.updateContext()),this.hideAllDropdownContainers(),this.submenuType===E.DROPDOWN&&!this.expanded&&this.convertDropdownsToFlyouts()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.expanded!==this.expanded||this.context.value.submenuType!==this.submenuType)&&(this.context.value.variant=this.variant,this.context.value.expanded=this.expanded,this.context.value.submenuType=this.submenuType,this.context.updateObservers())}get navMenuItems(){return Array.from(this.querySelectorAll(`${b}:not([disabled])`))}closeAllDropdowns(){this.navMenuItems.filter(e=>this.context.value.isDropDownParent(e)).forEach(e=>e.closeDropdown()),this.hideAllDropdownContainers()}hideAllDropdownContainers(){this.querySelectorAll("div[data-trigger]").forEach(t=>{Object.assign(t.style,{display:"none",flexDirection:"column",gap:"0.25rem"})})}convertDropdownsToFlyouts(){this.querySelectorAll("div[data-trigger]").forEach(t=>{var o;const i=t.getAttribute("data-trigger");if(!i||((o=t.parentElement)==null?void 0:o.querySelector(`${w}[triggerid="${CSS.escape(i)}"][data-dynamic-popover]`)))return;const r=document.createElement(w);for(r.setAttribute("triggerid",i),r.setAttribute("data-dynamic-popover",""),r.setAttribute("placement","right-start");t.firstChild;)r.appendChild(t.firstChild);t.after(r),Object.assign(t.style,{display:"none"})})}convertFlyoutsToDropdowns(){this.querySelectorAll(`${w}[data-dynamic-popover]`).forEach(t=>{const i=t.getAttribute("triggerid");if(!i)return;const s=this.querySelector(`div[data-trigger="${CSS.escape(i)}"]`);if(s){for(;t.firstChild;)s.appendChild(t.firstChild);t.remove()}})}handleDropdownKeyDown(e){var P,$;if(this.submenuType!==E.DROPDOWN||!this.expanded)return;const t=e.target;if(!(t.tagName.toLowerCase()===b))return;const s=t,r=this.getActionForKeyEvent(e);if(r===g.ESCAPE){const a=t.closest("div[data-trigger]");if(!a)return;const d=a.getAttribute("data-trigger");if(!d)return;const h=this.querySelector(`${b}#${CSS.escape(d)}`);h&&(h.closeDropdown(),h.focus(),e.stopPropagation());return}const o=this.context.value,u=s.hasAttribute("in-dropdown-container"),R=s.getAttribute("aria-expanded")==="true",N=a=>{var d;return((d=a.parentElement)==null?void 0:d.querySelector(`div[data-trigger="${a.id}"]`))??null},S=a=>a==null?void 0:a.querySelector(`${b}:not([disabled])`);if(u){const a=t.closest("div[data-trigger]");if(!a)return;const d=Array.from(a.querySelectorAll(`${b}:not([disabled])`)),h=d.indexOf(s);if(h===-1)return;switch(r){case g.DOWN:{const l=h+1<d.length?h+1:0;d[l].focus(),e.preventDefault();break}case g.UP:{const l=h>0?h-1:d.length-1;d[l].focus(),e.preventDefault();break}case g.RIGHT:{const l=this.navMenuItems.filter(n=>!n.hasAttribute("in-dropdown-container")),O=a.getAttribute("data-trigger"),v=l.findIndex(n=>n.id===O);if(v!==-1&&v+1<l.length){const n=l[v+1];if(n.focus(),o.isDropDownParent(n)){n.openDropdown();const C=N(n);(P=S(C))==null||P.focus()}}break}case g.LEFT:{const l=this.navMenuItems.filter(n=>!n.hasAttribute("in-dropdown-container")),O=a.getAttribute("data-trigger"),v=l.findIndex(n=>n.id===O);if(v>0){const n=l[v-1];if(n.focus(),o.isDropDownParent(n)){n.openDropdown();const C=N(n);($=S(C))==null||$.focus()}}break}default:e.preventDefault()}}if(r===g.RIGHT){const a=N(s);if(a){R||s.openDropdown();const d=S(a);d&&(d.focus(),e.preventDefault())}}}setVariant(e){this.setAttribute("variant",Object.values(c).includes(e)?e:A.VARIANT)}toggleSideNavigation(e){this.expanded=!this.expanded,this.expanded===!1&&this.variant===c.FLEXIBLE_ON_HOVER&&e.pointerType==="mouse"&&(this.isHovered=!1,this.isFocused=!1,this.hideGrabberButton()),this.dispatchEvent(new CustomEvent("toggle",{detail:{expanded:this.expanded}}))}preventScrollOnSpace(e){this.getActionForKeyEvent(e)===g.SPACE&&e.preventDefault()}render(){return this.variant===c.HIDDEN?m``:m`
      <div part="side-navigation-container" id="side-nav-container">
        <div part="scrollable-section" tabindex="-1" @keydown=${this.preventScrollOnSpace}>
          <slot name="scrollable-section">
            <mdc-menubar part="scrollable-menubar">
              <slot name="scrollable-menubar"></slot>
            </mdc-menubar>
          </slot>
        </div>
        ${this.hideFixedSectionDivider?D:m`<mdc-divider variant="gradient" part="separator"></mdc-divider>`}
        <div part="fixed-section">
          <slot name="fixed-section">
            <mdc-menubar part="fixed-menubar">
              <slot name="fixed-menubar"></slot>
            </mdc-menubar>
          </slot>
          ${this.footerText?m`
                <div part="brand-logo-container">
                  <slot name="brand-logo"></slot>
                  ${this.expanded?m` <mdc-text
                        type=${H.BODY_MIDSIZE_MEDIUM}
                        tagname=${G.SPAN}
                        part="footer-text"
                        >${this.footerText}</mdc-text
                      >`:D}
                </div>
              `:D}
        </div>
      </div>
      ${this.variant===c.FLEXIBLE||this.variant===c.FLEXIBLE_ON_HOVER?m`<mdc-divider
            part="vertical-divider"
            orientation=${U.VERTICAL}
            variant=${q.GRADIENT}
            arrow-direction=${this.expanded?I.NEGATIVE:I.POSITIVE}
            button-position=${I.POSITIVE}
          >
            <mdc-button
              part="vertical-divider-button"
              aria-label=${this.grabberBtnAriaLabel??""}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
            ></mdc-button>
          </mdc-divider>`:D}
    `}};F.styles=[...X.styles,...j];let p=F;x([f({type:String,reflect:!0})],p.prototype,"variant");x([f({type:String,reflect:!0,attribute:"footer-text"})],p.prototype,"footerText");x([f({type:Boolean,reflect:!0,attribute:"expanded"})],p.prototype,"expanded");x([f({type:String,reflect:!0,attribute:"grabber-btn-aria-label"})],p.prototype,"grabberBtnAriaLabel");x([f({type:Boolean,reflect:!0,attribute:"hide-fixed-section-divider"})],p.prototype,"hideFixedSectionDivider");x([f({type:String,reflect:!0,attribute:"submenu-type"})],p.prototype,"submenuType");export{p as S};
