import{i as S,k as h,D as A}from"./lit-element-D5KKan5q.js";import{u as T,P as O,C as L,n as p}from"./provider.component-BaQC7CJH.js";import{r as g}from"./state-C0WmBOuD.js";import{T as N,V as I}from"./index-riA1qVWu.js";import{a as w}from"./buttonsimple.constants-CNAgWCp2.js";import{T as E}from"./badge.constants-Cr-5n44e.js";import{b as l,D as y,a as _}from"./divider.constants-DBMTjDho.js";import{R as P}from"./roles-DU0xbrD4.js";import{K as R}from"./keys-hFXe221I.js";import{n as V}from"./create-context-89xeped_.js";import{T as f}from"./menupopover.constants-D4HZx52I.js";import{a as C}from"./popover.component-BcWkwQje.js";const $=T.constructTagName("sidenavigation"),n={FIXED_EXPANDED:"fixed-expanded",FIXED_COLLAPSED:"fixed-collapsed",FLEXIBLE:"flexible",HIDDEN:"hidden"},m={VARIANT:n.FLEXIBLE},D=T.constructTagName("navmenuitem"),Q={DOT:E.DOT,COUNTER:E.COUNTER},M={RIGHT_ARROW:"arrow-right-bold"},tt={MAX_COUNTER:99,TEXT_TYPE:N.BODY_MIDSIZE_REGULAR,TAG_NAME:I.SPAN,SIZE:w[24],VARIANT:n.FLEXIBLE},b=class b{constructor(t,e,i){this.variant=t,this.expanded=e,this.parentNavTooltipText=i}hasSiblingWithTriggerId(t){var r;const e=t==null?void 0:t.getAttribute("id");return e?Array.from(((r=t==null?void 0:t.parentElement)==null?void 0:r.children)??[]).some(a=>a!==t&&a.tagName.toLowerCase()===f&&a.getAttribute("triggerid")===e):!1}getParentNavMenuItems(t){if(!t)return[];const e=[];let i=t;for(;i;){const r=i==null?void 0:i.closest(f);if(!r)break;const a=r.getAttribute("triggerid");if(!a)break;const s=document.getElementById(a);if(s&&s.tagName.toLowerCase()===D)e.push(s),i=s;else break}return e}setCurrentActiveNavMenuItem(t){var a;const e=((a=this.currentActiveNavMenuItem)==null?void 0:a.navId)===(t==null?void 0:t.navId),i=(t==null?void 0:t.disableAriaCurrent)||this.hasSiblingWithTriggerId(t)||(t==null?void 0:t.softDisabled);if(e||i||(this.currentActiveNavMenuItem&&(this.currentActiveNavMenuItem.removeAttribute("aria-current"),this.currentActiveNavMenuItem.removeAttribute("active"),this.getParentNavMenuItems(this.currentActiveNavMenuItem).forEach(x=>{x.removeAttribute("tooltip-text"),x.removeAttribute("tooltip-placement"),x.removeAttribute("active")})),!t))return;this.currentActiveNavMenuItem=t,t.setAttribute("aria-current","page"),t.setAttribute("active",""),this.getParentNavMenuItems(t).forEach(s=>{s.setAttribute("tooltip-text",this.parentNavTooltipText||""),s.setAttribute("tooltip-placement",C.BOTTOM),s.setAttribute("active","")})}};b.context=V($);let c=b;const k=S`
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
`,B=[k];var X=Object.defineProperty,d=(v,t,e,i)=>{for(var r=void 0,a=v.length-1,s;a>=0;a--)(s=v[a])&&(r=s(t,e,r)||r);return r&&X(t,e,r),r};const u=class u extends O{constructor(){super({context:c.context,initialValue:new c(m.VARIANT,!0)}),this.variant=m.VARIANT,this.footerText="",this.flexibleExpanded=this.variant===m.VARIANT,this.arrowDirection=this.flexibleExpanded?l.NEGATIVE:l.POSITIVE,this.handleNestedNavMenuItemActiveChange=t=>{var e;if((e=this.context)!=null&&e.value){const i=this.findNav(this.navMenuItems,t.detail.navId);this.context.value.setCurrentActiveNavMenuItem(i)}},this.findNav=(t,e)=>t.find(i=>i.navId===e),this.updateExpansionState=()=>{switch(this.variant){case n.FLEXIBLE:this.expanded=this.flexibleExpanded;break;case n.FIXED_EXPANDED:this.expanded=!0;break;case n.FIXED_COLLAPSED:this.expanded=!1;break}},this.addEventListener("activechange",this.handleNestedNavMenuItemActiveChange.bind(this))}connectedCallback(){super.connectedCallback(),this.role=P.NAVIGATION}static get Context(){return c.context}updated(t){super.updated(t),t.has("variant")&&(this.setVariant(this.variant),this.updateExpansionState()),(t.has("variant")||t.has("expanded"))&&this.updateContext()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.expanded!==this.expanded||this.context.value.parentNavTooltipText!==this.parentNavTooltipText)&&(this.context.value.variant=this.variant,this.context.value.expanded=this.expanded,this.context.value.parentNavTooltipText=this.parentNavTooltipText,this.context.updateObservers())}get navMenuItems(){return Array.from(this.querySelectorAll(`${D}:not([disabled])`))}setVariant(t){this.setAttribute("variant",Object.values(n).includes(t)?t:m.VARIANT)}toggleSideNavigation(){this.flexibleExpanded=!this.flexibleExpanded,this.arrowDirection=this.arrowDirection===l.NEGATIVE?l.POSITIVE:l.NEGATIVE,this.updateExpansionState()}preventScrollOnSpace(t){t.key===R.SPACE&&t.preventDefault()}render(){return this.variant===n.HIDDEN?h``:h`
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
            ${this.expanded?h`<mdc-text type=${N.BODY_MIDSIZE_MEDIUM} tagname=${I.SPAN} part="label"
                  >${this.footerText}</mdc-text
                >`:A}
          </div>
        </div>
      </div>
      ${this.variant===n.FLEXIBLE?h`<mdc-divider
            orientation=${y.VERTICAL}
            variant=${_.GRADIENT}
            arrow-direction=${this.arrowDirection}
            button-position=${l.POSITIVE}
          >
            <mdc-button
              aria-label=${this.grabberBtnAriaLabel??""}
              @click=${this.toggleSideNavigation}
              aria-expanded="${!!this.expanded}"
              aria-controls="side-nav-container"
              part="grabber-btn"
            ></mdc-button>
          </mdc-divider>`:A}
    `}};u.styles=[...L.styles,...B];let o=u;d([p({type:String,reflect:!0})],o.prototype,"variant");d([p({type:String,reflect:!0,attribute:"footer-text"})],o.prototype,"footerText");d([p({type:Boolean,reflect:!0})],o.prototype,"expanded");d([p({type:String,reflect:!0,attribute:"grabber-btn-aria-label"})],o.prototype,"grabberBtnAriaLabel");d([p({type:String,reflect:!0,attribute:"parent-nav-tooltip-text"})],o.prototype,"parentNavTooltipText");d([g()],o.prototype,"flexibleExpanded");d([g()],o.prototype,"arrowDirection");export{Q as A,tt as D,M as I,o as S,$ as T,n as V,m as a,D as b};
