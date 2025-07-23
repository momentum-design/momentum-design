import{i as g,k as d,D as m}from"./lit-element-D5KKan5q.js";import{u as p,n as e}from"./index-C9z9WAEj.js";import{g as k}from"./button.utils-rNW36Ji7.js";import{B as v}from"./buttonsimple.component-q2YakOka.js";import{T as h,V as y}from"./index-BrLJ_9IK.js";import{I as f}from"./IconNameMixin-CujGSn0t.js";import{R as x}from"./roles-BH_hBfTz.js";import{h as I,a as A}from"./index-B-GnYs90.js";import"./index-CJNODA8N.js";const N=p.constructTagName("tab"),u={GLASS:"glass",LINE:"line",PILL:"pill"},l={VARIANT:u.PILL,ACTIVE:!1},T=[I,g`
    :host {
      --mdc-tab-content-gap: 0.5rem;
      --mdc-tab-height: 2rem;

      --mdc-tab-glass-active-background-color-disabled: var(--mds-color-theme-button-primary-disabled);
      --mdc-tab-glass-active-background-color-hover: var(--mds-color-theme-button-primary-hover);
      --mdc-tab-glass-active-background-color-normal: var(--mds-color-theme-button-primary-normal);
      --mdc-tab-glass-active-background-color-pressed: var(--mds-color-theme-button-primary-pressed);

      --mdc-tab-glass-active-color: var(--mds-color-theme-inverted-text-primary-normal);
      --mdc-tab-glass-active-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);

      --mdc-tab-glass-border-radius: 0.5rem;

      --mdc-tab-glass-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-glass-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
      --mdc-tab-glass-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-glass-inactive-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

      --mdc-tab-glass-inactive-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-tab-glass-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

      --mdc-tab-line-active-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-line-active-background-color-hover: var(--mds-color-theme-button-secondary-hover);
      --mdc-tab-line-active-background-color-normal: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-line-active-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

      --mdc-tab-line-active-color: var(--mds-color-theme-text-primary-normal);
      --mdc-tab-line-active-color-disabled: var(--mds-color-theme-text-primary-disabled);

      --mdc-tab-line-active-indicator-color: var(--mds-color-theme-outline-input-active);
      --mdc-tab-line-active-indicator-color-disabled: var(--mds-color-theme-outline-primary-disabled);
      --mdc-tab-line-active-indicator-height: 0.125rem;
      --mdc-tab-line-active-indicator-width: 100%;

      --mdc-tab-line-border-bottom-left-radius: 0;
      --mdc-tab-line-border-bottom-right-radius: 0;
      --mdc-tab-line-border-top-left-radius: 0.25rem;
      --mdc-tab-line-border-top-right-radius: 0.25rem;

      --mdc-tab-line-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-line-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
      --mdc-tab-line-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-line-inactive-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

      --mdc-tab-line-inactive-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-tab-line-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

      --mdc-tab-padding-left: 0.75rem;
      --mdc-tab-padding-right: 0.75rem;

      --mdc-tab-pill-active-background-color-disabled: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-tab-pill-active-background-color-hover: var(--mds-color-theme-button-secondary-active-hover);
      --mdc-tab-pill-active-background-color-normal: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-tab-pill-active-background-color-pressed: var(--mds-color-theme-button-secondary-active-pressed);

      --mdc-tab-pill-active-color: var(--mds-color-theme-text-primary-normal);
      --mdc-tab-pill-active-color-disabled: var(--mds-color-theme-text-primary-disabled);

      --mdc-tab-pill-border-radius: 0.5rem;

      --mdc-tab-pill-inactive-background-color-disabled: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-pill-inactive-background-color-hover: var(--mds-color-theme-button-secondary-hover);
      --mdc-tab-pill-inactive-background-color-normal: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-pill-inactive-background-color-pressed: var(--mds-color-theme-button-secondary-pressed);

      --mdc-tab-pill-inactive-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-tab-pill-inactive-color-disabled: var(--mds-color-theme-text-primary-disabled);

      flex-direction: column;
      flex-shrink: 0;
      height: var(--mdc-tab-height);
      padding-left: var(--mdc-tab-padding-left);
      padding-right: var(--mdc-tab-padding-right);
      position: relative;
      border: none;
    }

    :host::part(container) {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: var(--mdc-tab-content-gap);
      justify-content: center;
      width: fit-content;
    }

    :host::part(text) {
      display: flex;
      flex-direction: column;
    }

    :host mdc-text::after {
      content: attr(data-text);
      height: 0;
      visibility: hidden;
      overflow: hidden;
      user-select: none;
      pointer-events: none;
      /* body-midsize-bold font styling */
      font-size: var(--mds-font-apps-body-midsize-bold-font-size);
      font-weight: var(--mds-font-apps-body-midsize-bold-font-weight);
      line-height: var(--mds-font-apps-body-midsize-bold-line-height);
      text-decoration: var(--mds-font-apps-body-midsize-bold-text-decoration);
      text-transform: var(--mds-font-apps-body-midsize-bold-text-case);
    }

    :host::part(indicator) {
      width: var(--mdc-tab-line-active-indicator-width);
      height: var(--mdc-tab-line-active-indicator-height);
      bottom: 0;
      position: absolute;
      visibility: hidden;
    }

    :host([disabled]) {
      cursor: default;
    }

    :host([variant='glass']) {
      background-color: var(--mdc-tab-glass-inactive-background-color-normal);
      border-radius: var(--mdc-tab-glass-border-radius);
      color: var(--mdc-tab-glass-inactive-color);
    }

    :host([variant='glass']:hover) {
      background-color: var(--mdc-tab-glass-inactive-background-color-hover);
    }

    :host([variant='glass']:active) {
      background-color: var(--mdc-tab-glass-inactive-background-color-pressed);
    }

    :host([variant='glass'][disabled]) {
      background-color: var(--mdc-tab-glass-inactive-background-color-disabled);
      color: var(--mdc-tab-glass-inactive-color-disabled);
    }

    :host([variant='glass'][active]) {
      background-color: var(--mdc-tab-glass-active-background-color-normal);
      color: var(--mdc-tab-glass-active-color);
    }

    :host([variant='glass'][active]:hover) {
      background-color: var(--mdc-tab-glass-active-background-color-hover);
    }

    :host([variant='glass'][active]:active) {
      background-color: var(--mdc-tab-glass-active-background-color-pressed);
    }

    :host([variant='glass'][active][disabled]) {
      background-color: var(--mdc-tab-glass-active-background-color-disabled);
      color: var(--mdc-tab-glass-active-color-disabled);
    }

    :host([variant='line']) {
      background-color: var(--mdc-tab-line-inactive-background-color-normal);
      border-top-left-radius: var(--mdc-tab-line-border-top-left-radius);
      border-top-right-radius: var(--mdc-tab-line-border-top-right-radius);
      border-bottom-left-radius: var(--mdc-tab-line-border-bottom-left-radius);
      border-bottom-right-radius: var(--mdc-tab-line-border-bottom-right-radius);
      color: var(--mdc-tab-line-inactive-color);
    }

    :host([variant='line']:hover) {
      background-color: var(--mdc-tab-line-inactive-background-color-hover);
    }

    :host([variant='line']:active) {
      background-color: var(--mdc-tab-line-inactive-background-color-pressed);
    }

    :host([variant='line'][disabled]) {
      background-color: var(--mdc-tab-line-inactive-background-color-disabled);
      color: var(--mdc-tab-line-inactive-color-disabled);
    }

    :host([variant='line'][active]) {
      background-color: var(--mdc-tab-line-active-background-color-normal);
      color: var(--mdc-tab-line-active-color);
    }

    :host([variant='line'][active])::part(indicator) {
      background-color: var(--mdc-tab-line-active-indicator-color);
      visibility: visible;
    }

    :host([variant='line'][active]:hover) {
      background-color: var(--mdc-tab-line-active-background-color-hover);
    }

    :host([variant='line'][active]:active) {
      background-color: var(--mdc-tab-line-active-background-color-pressed);
    }

    :host([variant='line'][active][disabled]) {
      background-color: var(--mdc-tab-line-active-background-color-disabled);
      color: var(--mdc-tab-line-active-color-disabled);
    }

    :host([variant='line'][active][disabled])::part(indicator) {
      background-color: var(--mdc-tab-line-active-indicator-color-disabled);
    }

    :host([variant='pill']) {
      background-color: var(--mdc-tab-pill-inactive-background-color-normal);
      border-radius: var(--mdc-tab-pill-border-radius);
      color: var(--mdc-tab-pill-inactive-color);
    }

    :host([variant='pill']:hover) {
      background-color: var(--mdc-tab-pill-inactive-background-color-hover);
    }

    :host([variant='pill']:active) {
      background-color: var(--mdc-tab-pill-inactive-background-color-pressed);
    }

    :host([variant='pill'][disabled]) {
      background-color: var(--mdc-tab-pill-inactive-background-color-disabled);
      color: var(--mdc-tab-pill-inactive-color-disabled);
    }

    :host([variant='pill'][active]) {
      background-color: var(--mdc-tab-pill-active-background-color-normal);
      color: var(--mdc-tab-pill-active-color);
    }

    :host([variant='pill'][active]:hover) {
      background-color: var(--mdc-tab-pill-active-background-color-hover);
    }

    :host([variant='pill'][active]:active) {
      background-color: var(--mdc-tab-pill-active-background-color-pressed);
    }

    :host([variant='pill'][active][disabled]) {
      background-color: var(--mdc-tab-pill-active-background-color-disabled);
      color: var(--mdc-tab-pill-active-color-disabled);
    }
  `,...A()];var S=Object.defineProperty,i=(s,a,t,E)=>{for(var r=void 0,c=s.length-1,b;c>=0;c--)(b=s[c])&&(r=b(a,t,r)||r);return r&&S(a,t,r),r};const n=class n extends f(v){constructor(){super(...arguments),this.active=l.ACTIVE,this.variant=l.VARIANT,this.handleTabActiveChange=a=>{const t=new CustomEvent("activechange",{detail:{tabId:this.tabId,active:a},bubbles:!0});this.dispatchEvent(t)}}connectedCallback(){super.connectedCallback(),this.role=x.TAB,this.softDisabled=void 0,this.size=void 0,this.type=void 0,this.ariaStateKey="aria-selected",!this.tabId&&this.onerror&&this.onerror("tab id is required")}modifyIconName(a){this.iconName&&(a?(this.prevIconName=this.iconName,this.iconName=`${k(this.iconName)}-filled`):this.prevIconName&&(this.iconName=this.prevIconName))}setVariant(a){this.setAttribute("variant",Object.values(u).includes(a)?a:l.VARIANT)}setActive(a,t){super.setActive(a,t),this.modifyIconName(t)}executeAction(){this.handleTabActiveChange(this.active)}update(a){super.update(a),a.has("variant")&&this.setVariant(this.variant)}render(){return d`
      <div part="container">
        ${this.iconName?d` <mdc-icon name="${this.iconName}" size="1" length-unit="rem" part="icon"></mdc-icon>`:m}
        ${this.text?d` <mdc-text
              type=${this.active?h.BODY_MIDSIZE_BOLD:h.BODY_MIDSIZE_MEDIUM}
              tagname=${y.SPAN}
              data-text=${this.text}
              part="text"
              >${this.text}</mdc-text
            >`:m}
        <slot name="badge"></slot>
        <slot name="chip"></slot>
      </div>
      <div part="indicator"></div>
    `}};n.styles=[...v.styles,...T];let o=n;i([e({type:Boolean,reflect:!0})],o.prototype,"active");i([e({type:String,reflect:!0})],o.prototype,"text");i([e({type:String,reflect:!0})],o.prototype,"variant");i([e({type:String,reflect:!0,attribute:"tab-id"})],o.prototype,"tabId");o.register(N);export{u as T,o as a};
