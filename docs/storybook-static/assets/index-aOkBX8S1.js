import{u as g,a3 as y,a2 as f,a8 as x,R as k,k as c,h as b,T as h,V as I,n as i}from"./iframe-DDdyYKcM.js";import{t as A}from"./if-defined-BbSBl4wr.js";import{g as S}from"./button.utils-rNW36Ji7.js";import{B as v}from"./buttonsimple.component-2qLehltN.js";import{I as N}from"./IconNameMixin-BMkvk5fD.js";import{a as T}from"./LifeCycleMixin-CkFTW4AQ.js";import"./index-SSEGGe-_.js";const z=g.constructTagName("tab"),u={GLASS:"glass",LINE:"line",PILL:"pill"},p={32:32,28:28},r={VARIANT:u.PILL,ACTIVE:!1,SIZE:p[32]},E=[y,f`
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
      --mdc-tab-content-justification: center;

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

    :host([size='28']) {
      --mdc-tab-height: 1.75rem;
    }

    :host::part(container) {
      display: flex;
      width: 100%;
      align-items: center;
      flex-direction: row;
      gap: var(--mdc-tab-content-gap);
      justify-content: var(--mdc-tab-content-justification);
    }

    :host::part(icon-container) {
      position: relative;
    }

    :host([active])::part(regular-icon) {
      display: none;
    }

    :host([active])::part(filled-icon) {
      display: block;
    }

    :host::part(regular-icon) {
      display: block;
    }

    :host::part(filled-icon) {
      display: none;
    }

    :host::part(leading) {
      display: flex;
      align-items: center;
      gap: var(--mdc-tab-content-gap);
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
      inset-inline-start: 0;
      inset-block-end: 0;
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
  `,...x()];var _=Object.defineProperty,d=(l,t,e,L)=>{for(var o=void 0,s=l.length-1,m;s>=0;s--)(m=l[s])&&(o=m(t,e,o)||o);return o&&_(t,e,o),o};const n=class n extends N(T(v)){constructor(){super(...arguments),this.active=r.ACTIVE,this.variant=r.VARIANT,this.size=r.SIZE,this.handleTabActiveChange=t=>{const e=new CustomEvent("activechange",{detail:{tabId:this.tabId,active:t},bubbles:!0});this.dispatchEvent(e)}}connectedCallback(){super.connectedCallback(),this.role=k.TAB,this.type=void 0,this.ariaStateKey="aria-selected",!this.tabId&&this.onerror&&this.onerror("tab id is required")}setVariant(t){this.setAttribute("variant",Object.values(u).includes(t)?t:r.VARIANT)}setSize(t){this.setAttribute("size",Object.values(p).includes(t)?`${t}`:r.SIZE.toString())}getFilledIconName(){return!this.iconName||this.iconName.endsWith("-filled")?void 0:`${S(this.iconName)}-filled`}executeAction(){this.handleTabActiveChange(this.active)}update(t){super.update(t),t.has("size")&&this.setSize(this.size),t.has("variant")&&this.setVariant(this.variant)}render(){return c`
      <div part="container">
        <div part="leading">
          <slot name="prefix">
            ${this.iconName?c`
                  <div part="icon-container">
                    <mdc-icon
                      name="${this.iconName}"
                      size="1"
                      length-unit="rem"
                      part="regular-icon"
                    ></mdc-icon>
                    <mdc-icon
                      name="${A(this.getFilledIconName())}"
                      size="1"
                      length-unit="rem"
                      part="filled-icon"
                    ></mdc-icon>
                  </div>
                `:b}
          </slot>
          ${this.text?c` <mdc-text
                type=${this.active?h.BODY_MIDSIZE_BOLD:h.BODY_MIDSIZE_MEDIUM}
                tagname=${I.SPAN}
                data-text=${this.text}
                part="text"
                >${this.text}</mdc-text
              >`:b}
        </div>
        <slot name="postfix"></slot>
      </div>
      <div part="indicator"></div>
    `}};n.styles=[...v.styles,...E];let a=n;d([i({type:Boolean,reflect:!0})],a.prototype,"active");d([i({type:String,reflect:!0})],a.prototype,"text");d([i({type:String,reflect:!0})],a.prototype,"variant");d([i({type:Number,reflect:!0})],a.prototype,"size");d([i({type:String,reflect:!0,attribute:"tab-id"})],a.prototype,"tabId");a.register(z);export{p as T,u as a,a as b,z as c};
