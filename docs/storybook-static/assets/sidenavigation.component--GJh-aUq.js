import{B as T,i as N,P as E,k as p,D as g,C as I,n as l}from"./iframe-D-08lnMy.js";import{T as y,V as S}from"./index-lw_yf9bk.js";import{T as w,b as f,c as A,a as v,V as n}from"./menupopover.constants-BjgFNW4C.js";import{D,a as C,b as u}from"./divider.constants-DnLa9SM_.js";import{R as P}from"./roles-CJI3JVG-.js";import{K as V}from"./keys-hFXe221I.js";import{P as O}from"./popover.component-B9YFvuZy.js";const m=class m{constructor(t,e,i){this.variant=t,this.expanded=e,this.parentNavTooltipText=i}hasSiblingWithTriggerId(t){var r;const e=t==null?void 0:t.getAttribute("id");return e?Array.from(((r=t==null?void 0:t.parentElement)==null?void 0:r.children)??[]).some(a=>a!==t&&a.tagName.toLowerCase()===f&&a.getAttribute("triggerid")===e):!1}getParentNavMenuItems(t){if(!t)return[];const e=[];let i=t;for(;i;){const r=i==null?void 0:i.closest(f);if(!r)break;const a=r.getAttribute("triggerid");if(!a)break;const s=document.getElementById(a);if(s&&s.tagName.toLowerCase()===A)e.push(s),i=s;else break}return e}setCurrentActiveNavMenuItem(t){var a;const e=((a=this.currentActiveNavMenuItem)==null?void 0:a.navId)===(t==null?void 0:t.navId),i=(t==null?void 0:t.disableAriaCurrent)||this.hasSiblingWithTriggerId(t)||(t==null?void 0:t.softDisabled);if(e||i||(this.currentActiveNavMenuItem&&(this.currentActiveNavMenuItem.removeAttribute("aria-current"),this.currentActiveNavMenuItem.removeAttribute("active"),this.getParentNavMenuItems(this.currentActiveNavMenuItem).forEach(h=>{h.removeAttribute("tooltip-text"),h.removeAttribute("tooltip-placement"),h.removeAttribute("active")})),!t))return;this.currentActiveNavMenuItem=t,t.setAttribute("aria-current","page"),t.setAttribute("active",""),this.getParentNavMenuItems(t).forEach(s=>{s.setAttribute("tooltip-text",this.parentNavTooltipText||""),s.setAttribute("tooltip-placement",O.BOTTOM),s.setAttribute("active","")})}};m.context=T(w);let d=m;const $=N`
  :host {
    --mdc-sidenavigation-expanded-width: 15rem;
    --mdc-sidenavigation-collapsed-width: 4.5rem;
    --mdc-sidenavigation-vertical-divider-button-z-index: auto;

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

  :host::part(vertical-divider-button) {
    z-index: var(--mdc-sidenavigation-vertical-divider-button-z-index);
  }
`,L=[$];var k=Object.defineProperty,c=(b,t,e,i)=>{for(var r=void 0,a=b.length-1,s;a>=0;a--)(s=b[a])&&(r=s(t,e,r)||r);return r&&k(t,e,r),r};const x=class x extends E{constructor(){super({context:d.context,initialValue:new d(v.VARIANT,!0)}),this.variant=v.VARIANT,this.footerText="",this.handleNestedNavMenuItemActiveChange=t=>{var e;if((e=this.context)!=null&&e.value){const i=this.findNav(this.navMenuItems,t.detail.navId);this.context.value.setCurrentActiveNavMenuItem(i)}},this.findNav=(t,e)=>t.find(i=>i.navId===e),this.addEventListener("activechange",this.handleNestedNavMenuItemActiveChange.bind(this))}connectedCallback(){super.connectedCallback(),this.role=P.NAVIGATION}static get Context(){return d.context}updated(t){if(super.updated(t),t.has("variant"))switch(this.setVariant(this.variant),this.variant){case n.FIXED_EXPANDED:this.expanded=!0;break;case n.FIXED_COLLAPSED:this.expanded=!1;break}(t.has("variant")||t.has("expanded"))&&this.updateContext()}firstUpdated(t){super.firstUpdated(t),this.variant===n.FLEXIBLE&&this.expanded===void 0&&(this.expanded=!0,this.updateContext())}updateContext(){(this.context.value.variant!==this.variant||this.context.value.expanded!==this.expanded||this.context.value.parentNavTooltipText!==this.parentNavTooltipText)&&(this.context.value.variant=this.variant,this.context.value.expanded=this.expanded,this.context.value.parentNavTooltipText=this.parentNavTooltipText,this.context.updateObservers())}get navMenuItems(){return Array.from(this.querySelectorAll(`${A}:not([disabled])`))}setVariant(t){this.setAttribute("variant",Object.values(n).includes(t)?t:v.VARIANT)}toggleSideNavigation(){this.expanded=!this.expanded,this.dispatchEvent(new CustomEvent("toggle",{detail:{expanded:this.expanded}}))}preventScrollOnSpace(t){t.key===V.SPACE&&t.preventDefault()}render(){return this.variant===n.HIDDEN?p``:p`
      <div part="side-navigation-container" id="side-nav-container">
        <div part="scrollable-section" tabindex="-1" @keydown=${this.preventScrollOnSpace}>
          <slot name="scrollable-section">
            <mdc-menubar>
              <slot name="scrollable-menubar"></slot>
            </mdc-menubar>
          </slot>
        </div>
        <mdc-divider variant="gradient" part="separator"></mdc-divider>
        <div part="fixed-section">
          <slot name="fixed-section">
            <mdc-menubar>
              <slot name="fixed-menubar"></slot>
            </mdc-menubar>
          </slot>
          <div part="brand-logo-container">
            <slot name="brand-logo"></slot>
            ${this.expanded?p`<mdc-text type=${y.BODY_MIDSIZE_MEDIUM} tagname=${S.SPAN} part="footer-text"
                  >${this.footerText}</mdc-text
                >`:g}
          </div>
        </div>
      </div>
      ${this.variant===n.FLEXIBLE?p`<mdc-divider
            part="vertical-divider"
            orientation=${D.VERTICAL}
            variant=${C.GRADIENT}
            arrow-direction=${this.expanded?u.NEGATIVE:u.POSITIVE}
            button-position=${u.POSITIVE}
          >
            <mdc-button
              part="vertical-divider-button"
              aria-label=${this.grabberBtnAriaLabel??""}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
            ></mdc-button>
          </mdc-divider>`:g}
    `}};x.styles=[...I.styles,...L];let o=x;c([l({type:String,reflect:!0})],o.prototype,"variant");c([l({type:String,reflect:!0,attribute:"footer-text"})],o.prototype,"footerText");c([l({type:Boolean,reflect:!0})],o.prototype,"expanded");c([l({type:String,reflect:!0,attribute:"grabber-btn-aria-label"})],o.prototype,"grabberBtnAriaLabel");c([l({type:String,reflect:!0,attribute:"parent-nav-tooltip-text"})],o.prototype,"parentNavTooltipText");export{o as S};
