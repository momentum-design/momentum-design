import{u as p,W as g,U as y,X as f,R as x,k as s,h as b,T as v,V as k,n as r}from"./iframe-BK-lkp6o.js";import{g as I}from"./button.utils-rNW36Ji7.js";import{B as h}from"./buttonsimple.component-B1ZGlZCh.js";import{I as A}from"./IconNameMixin-DDQvG6hO.js";import"./index-CS5Q6hL0.js";const N=p.constructTagName("tab"),u={GLASS:"glass",LINE:"line",PILL:"pill"},c={VARIANT:u.PILL,ACTIVE:!1},T=[g,y`
    :host {
      --mdc-tab-content-gap: 0.5rem;
      --mdc-tab-height: 2rem;

      --mdc-tab-line-active-indicator-height: 0.125rem;
      --mdc-tab-line-active-indicator-width: 100%;

      --mdc-tab-padding-left: 0.75rem;
      --mdc-tab-padding-right: 0.75rem;

      --mdc-tab-line-border-bottom-left-radius: 0;
      --mdc-tab-line-border-bottom-right-radius: 0;
      --mdc-tab-line-border-top-left-radius: 0.25rem;
      --mdc-tab-line-border-top-right-radius: 0.25rem;

      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-color: var(--mds-color-theme-text-secondary-normal);
      --mdc-tab-border-radius: 0.5rem;

      flex-direction: column;
      flex-shrink: 0;
      height: var(--mdc-tab-height);
      padding-left: var(--mdc-tab-padding-left);
      padding-right: var(--mdc-tab-padding-right);
      position: relative;
      border: none;
      background-color: var(--mdc-tab-background-color);
      color: var(--mdc-tab-color);
      border-radius: var(--mdc-tab-border-radius);
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
      background-color: var(--mdc-tab-background-color);
      bottom: 0;
      position: absolute;
      visibility: hidden;
    }

    :host([disabled]),
    :host([soft-disabled]) {
      cursor: default;
    }

    :host([variant='glass']) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-color: var(--mds-color-theme-text-secondary-normal);
    }

    :host([variant='glass']:hover) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-hover);
    }

    :host([variant='glass']:active) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-pressed);
    }

    :host([variant='glass'][disabled]),
    :host([variant='glass'][soft-disabled]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([variant='glass'][active]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-primary-normal);
      --mdc-tab-color: var(--mds-color-theme-inverted-text-primary-normal);
    }

    :host([variant='glass'][active]:hover) {
      --mdc-tab-background-color: var(--mds-color-theme-button-primary-hover);
    }

    :host([variant='glass'][active]:active) {
      --mdc-tab-background-color: var(--mds-color-theme-button-primary-pressed);
    }

    :host([variant='glass'][active][disabled]),
    :host([variant='glass'][active][soft-disabled]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-primary-disabled);
      --mdc-tab-color: var(--mds-color-theme-inverted-text-primary-disabled);
    }

    :host([variant='line']) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-normal);
      border-top-left-radius: var(--mdc-tab-line-border-top-left-radius);
      border-top-right-radius: var(--mdc-tab-line-border-top-right-radius);
      border-bottom-left-radius: var(--mdc-tab-line-border-bottom-left-radius);
      border-bottom-right-radius: var(--mdc-tab-line-border-bottom-right-radius);
      --mdc-tab-color: var(--mds-color-theme-text-secondary-normal);
    }

    :host([variant='line']:hover) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-hover);
    }

    :host([variant='line']:active) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-pressed);
    }

    :host([variant='line'][disabled]),
    :host([variant='line'][soft-disabled]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([variant='line'][active]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([variant='line'][active])::part(indicator) {
      --mdc-tab-background-color: var(--mds-color-theme-outline-input-active);
      visibility: visible;
    }

    :host([variant='line'][active]:hover) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-hover);
    }

    :host([variant='line'][active]:active) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-pressed);
    }

    :host([variant='line'][active][disabled]),
    :host([variant='line'][active][soft-disabled]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([variant='line'][active][disabled])::part(indicator),
    :host([variant='line'][active][soft-disabled])::part(indicator) {
      --mdc-tab-background-color: var(--mds-color-theme-outline-primary-disabled);
    }

    :host([variant='pill']) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-normal);
      --mdc-tab-color: var(--mds-color-theme-text-secondary-normal);
    }

    :host([variant='pill']:hover) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-hover);
    }

    :host([variant='pill']:active) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-pressed);
    }

    :host([variant='pill'][disabled]),
    :host([variant='pill'][soft-disabled]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-disabled);
      --mdc-tab-color: var(--mds-color-theme-text-primary-disabled);
    }

    :host([variant='pill'][active]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-tab-color: var(--mds-color-theme-text-primary-normal);
    }

    :host([variant='pill'][active]:hover) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-active-hover);
    }

    :host([variant='pill'][active]:active) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-active-pressed);
    }

    :host([variant='pill'][active][disabled]),
    :host([variant='pill'][active][soft-disabled]) {
      --mdc-tab-background-color: var(--mds-color-theme-button-secondary-active-normal);
      --mdc-tab-color: var(--mds-color-theme-text-primary-disabled);
    }
  `,...f()];var S=Object.defineProperty,i=(l,t,a,E)=>{for(var e=void 0,d=l.length-1,m;d>=0;d--)(m=l[d])&&(e=m(t,a,e)||e);return e&&S(t,a,e),e};const n=class n extends A(h){constructor(){super(...arguments),this.active=c.ACTIVE,this.variant=c.VARIANT,this.handleTabActiveChange=t=>{const a=new CustomEvent("activechange",{detail:{tabId:this.tabId,active:t},bubbles:!0});this.dispatchEvent(a)}}connectedCallback(){super.connectedCallback(),this.role=x.TAB,this.size=void 0,this.type=void 0,this.ariaStateKey="aria-selected",!this.tabId&&this.onerror&&this.onerror("tab id is required")}modifyIconName(t){this.iconName&&(t?(this.prevIconName=this.iconName,this.iconName=`${I(this.iconName)}-filled`):this.prevIconName&&(this.iconName=this.prevIconName))}setVariant(t){this.setAttribute("variant",Object.values(u).includes(t)?t:c.VARIANT)}setActive(t,a){super.setActive(t,a),this.modifyIconName(a)}executeAction(){this.handleTabActiveChange(this.active)}update(t){super.update(t),t.has("variant")&&this.setVariant(this.variant)}render(){return s`
      <div part="container">
        <slot name="prefix">
          ${this.iconName?s` <mdc-icon name="${this.iconName}" size="1" length-unit="rem" part="icon"></mdc-icon>`:b}
        </slot>
        ${this.text?s` <mdc-text
              type=${this.active?v.BODY_MIDSIZE_BOLD:v.BODY_MIDSIZE_MEDIUM}
              tagname=${k.SPAN}
              data-text=${this.text}
              part="text"
              >${this.text}</mdc-text
            >`:b}
        <slot name="badge"></slot>
        <slot name="chip"></slot>
      </div>
      <div part="indicator"></div>
    `}};n.styles=[...h.styles,...T];let o=n;i([r({type:Boolean,reflect:!0})],o.prototype,"active");i([r({type:String,reflect:!0})],o.prototype,"text");i([r({type:String,reflect:!0})],o.prototype,"variant");i([r({type:String,reflect:!0,attribute:"tab-id"})],o.prototype,"tabId");o.register(N);export{u as T,o as a};
