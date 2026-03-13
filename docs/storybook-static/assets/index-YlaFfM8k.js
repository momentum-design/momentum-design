import{u,a3 as g,a2 as y,a8 as f,R as x,k as c,h as b,T as v,V as k,n as r}from"./iframe-D5_nhDxE.js";import{t as I}from"./if-defined-DPoTFAdO.js";import{g as A}from"./button.utils-rNW36Ji7.js";import{B as h}from"./buttonsimple.component-C1KDmBVv.js";import{I as N}from"./IconNameMixin-Vb2yY-ds.js";import{a as T}from"./LifeCycleMixin-CkFTW4AQ.js";import"./index-JE5oisxl.js";const S=u.constructTagName("tab"),p={GLASS:"glass",LINE:"line",PILL:"pill"},s={VARIANT:p.PILL,ACTIVE:!1},E=[g,y`
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
  `,...f()];var z=Object.defineProperty,i=(l,t,e,L)=>{for(var o=void 0,d=l.length-1,m;d>=0;d--)(m=l[d])&&(o=m(t,e,o)||o);return o&&z(t,e,o),o};const n=class n extends N(T(h)){constructor(){super(...arguments),this.active=s.ACTIVE,this.variant=s.VARIANT,this.handleTabActiveChange=t=>{const e=new CustomEvent("activechange",{detail:{tabId:this.tabId,active:t},bubbles:!0});this.dispatchEvent(e)}}connectedCallback(){super.connectedCallback(),this.role=x.TAB,this.size=void 0,this.type=void 0,this.ariaStateKey="aria-selected",!this.tabId&&this.onerror&&this.onerror("tab id is required")}setVariant(t){this.setAttribute("variant",Object.values(p).includes(t)?t:s.VARIANT)}getFilledIconName(){return!this.iconName||this.iconName.endsWith("-filled")?void 0:`${A(this.iconName)}-filled`}executeAction(){this.handleTabActiveChange(this.active)}update(t){super.update(t),t.has("variant")&&this.setVariant(this.variant)}render(){return c`
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
                      name="${I(this.getFilledIconName())}"
                      size="1"
                      length-unit="rem"
                      part="filled-icon"
                    ></mdc-icon>
                  </div>
                `:b}
          </slot>
          ${this.text?c` <mdc-text
                type=${this.active?v.BODY_MIDSIZE_BOLD:v.BODY_MIDSIZE_MEDIUM}
                tagname=${k.SPAN}
                data-text=${this.text}
                part="text"
                >${this.text}</mdc-text
              >`:b}
        </div>
        <slot name="postfix"></slot>
      </div>
      <div part="indicator"></div>
    `}};n.styles=[...h.styles,...E];let a=n;i([r({type:Boolean,reflect:!0})],a.prototype,"active");i([r({type:String,reflect:!0})],a.prototype,"text");i([r({type:String,reflect:!0})],a.prototype,"variant");i([r({type:String,reflect:!0,attribute:"tab-id"})],a.prototype,"tabId");a.register(S);export{p as T,a,S as b};
