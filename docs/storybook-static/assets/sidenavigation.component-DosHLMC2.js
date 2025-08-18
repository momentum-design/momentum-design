import{i as T,k as h,D as f}from"./lit-element-D5KKan5q.js";import{n as p}from"./property-Bj3TGwkg.js";import{r as A}from"./state-CmYk530Z.js";import{P as N,C as I}from"./provider.component-DrWB4byV.js";import{T as y,V as D}from"./index-DeEenWCE.js";import{b as g,c as E,T as S,a as b,V as d}from"./menupopover.constants-BCvF7ZAQ.js";import{b as l,D as w,a as V}from"./divider.constants-DXWnBz1m.js";import{R as O}from"./roles-CJI3JVG-.js";import{K as P}from"./keys-hFXe221I.js";import{n as C}from"./create-context-89xeped_.js";import{a as $}from"./popover.component-CWSuSUni.js";const v=class v{constructor(t,e,i){this.variant=t,this.expanded=e,this.parentNavTooltipText=i}hasSiblingWithTriggerId(t){var r;const e=t==null?void 0:t.getAttribute("id");return e?Array.from(((r=t==null?void 0:t.parentElement)==null?void 0:r.children)??[]).some(a=>a!==t&&a.tagName.toLowerCase()===g&&a.getAttribute("triggerid")===e):!1}getParentNavMenuItems(t){if(!t)return[];const e=[];let i=t;for(;i;){const r=i==null?void 0:i.closest(g);if(!r)break;const a=r.getAttribute("triggerid");if(!a)break;const s=document.getElementById(a);if(s&&s.tagName.toLowerCase()===E)e.push(s),i=s;else break}return e}setCurrentActiveNavMenuItem(t){var a;const e=((a=this.currentActiveNavMenuItem)==null?void 0:a.navId)===(t==null?void 0:t.navId),i=(t==null?void 0:t.disableAriaCurrent)||this.hasSiblingWithTriggerId(t)||(t==null?void 0:t.softDisabled);if(e||i||(this.currentActiveNavMenuItem&&(this.currentActiveNavMenuItem.removeAttribute("aria-current"),this.currentActiveNavMenuItem.removeAttribute("active"),this.getParentNavMenuItems(this.currentActiveNavMenuItem).forEach(m=>{m.removeAttribute("tooltip-text"),m.removeAttribute("tooltip-placement"),m.removeAttribute("active")})),!t))return;this.currentActiveNavMenuItem=t,t.setAttribute("aria-current","page"),t.setAttribute("active",""),this.getParentNavMenuItems(t).forEach(s=>{s.setAttribute("tooltip-text",this.parentNavTooltipText||""),s.setAttribute("tooltip-placement",$.BOTTOM),s.setAttribute("active","")})}};v.context=C(S);let c=v;const k=T`
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
`,L=[k];var R=Object.defineProperty,n=(u,t,e,i)=>{for(var r=void 0,a=u.length-1,s;a>=0;a--)(s=u[a])&&(r=s(t,e,r)||r);return r&&R(t,e,r),r};const x=class x extends N{constructor(){super({context:c.context,initialValue:new c(b.VARIANT,!0)}),this.variant=b.VARIANT,this.footerText="",this.flexibleExpanded=this.variant===b.VARIANT,this.arrowDirection=this.flexibleExpanded?l.NEGATIVE:l.POSITIVE,this.handleNestedNavMenuItemActiveChange=t=>{var e;if((e=this.context)!=null&&e.value){const i=this.findNav(this.navMenuItems,t.detail.navId);this.context.value.setCurrentActiveNavMenuItem(i)}},this.findNav=(t,e)=>t.find(i=>i.navId===e),this.updateExpansionState=()=>{switch(this.variant){case d.FLEXIBLE:this.expanded=this.flexibleExpanded;break;case d.FIXED_EXPANDED:this.expanded=!0;break;case d.FIXED_COLLAPSED:this.expanded=!1;break}},this.addEventListener("activechange",this.handleNestedNavMenuItemActiveChange.bind(this))}connectedCallback(){super.connectedCallback(),this.role=O.NAVIGATION}static get Context(){return c.context}updated(t){super.updated(t),t.has("variant")&&(this.setVariant(this.variant),this.updateExpansionState()),(t.has("variant")||t.has("expanded"))&&this.updateContext()}updateContext(){(this.context.value.variant!==this.variant||this.context.value.expanded!==this.expanded||this.context.value.parentNavTooltipText!==this.parentNavTooltipText)&&(this.context.value.variant=this.variant,this.context.value.expanded=this.expanded,this.context.value.parentNavTooltipText=this.parentNavTooltipText,this.context.updateObservers())}get navMenuItems(){return Array.from(this.querySelectorAll(`${E}:not([disabled])`))}setVariant(t){this.setAttribute("variant",Object.values(d).includes(t)?t:b.VARIANT)}toggleSideNavigation(){this.flexibleExpanded=!this.flexibleExpanded,this.arrowDirection=this.arrowDirection===l.NEGATIVE?l.POSITIVE:l.NEGATIVE,this.updateExpansionState()}preventScrollOnSpace(t){t.key===P.SPACE&&t.preventDefault()}render(){return this.variant===d.HIDDEN?h``:h`
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
            ${this.expanded?h`<mdc-text type=${y.BODY_MIDSIZE_MEDIUM} tagname=${D.SPAN} part="label"
                  >${this.footerText}</mdc-text
                >`:f}
          </div>
        </div>
      </div>
      ${this.variant===d.FLEXIBLE?h`<mdc-divider
            orientation=${w.VERTICAL}
            variant=${V.GRADIENT}
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
          </mdc-divider>`:f}
    `}};x.styles=[...I.styles,...L];let o=x;n([p({type:String,reflect:!0})],o.prototype,"variant");n([p({type:String,reflect:!0,attribute:"footer-text"})],o.prototype,"footerText");n([p({type:Boolean,reflect:!0})],o.prototype,"expanded");n([p({type:String,reflect:!0,attribute:"grabber-btn-aria-label"})],o.prototype,"grabberBtnAriaLabel");n([p({type:String,reflect:!0,attribute:"parent-nav-tooltip-text"})],o.prototype,"parentNavTooltipText");n([A()],o.prototype,"flexibleExpanded");n([A()],o.prototype,"arrowDirection");export{o as S};
