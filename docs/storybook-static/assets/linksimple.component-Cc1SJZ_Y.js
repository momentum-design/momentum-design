import{u,a3 as f,a2 as b,a4 as g,k as v,C as c,n as r}from"./iframe-ojQsro1_.js";import{t as n}from"./if-defined-CVMw9D_D.js";import{D as y}from"./DataAriaLabelMixin-BDsf-JHW.js";import{D as x}from"./DisabledMixin-DFNBhceF.js";const $=u.constructTagName("linksimple"),m={INLINE:!1,INVERTED:!1},k=[f,b`
    :host {
      --mdc-link-border-radius: 0.25rem;
      --mdc-link-color-active: var(--mds-color-theme-text-accent-active);
      --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
      --mdc-link-color-hover: var(--mds-color-theme-text-accent-hover);
      --mdc-link-color-normal: var(--mds-color-theme-text-accent-normal);
      --mdc-link-inverted-color-active: var(--mds-color-theme-inverted-text-accent-active);
      --mdc-link-inverted-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
      --mdc-link-inverted-color-hover: var(--mds-color-theme-inverted-text-accent-hover);
      --mdc-link-inverted-color-normal: var(--mds-color-theme-inverted-text-accent-normal);

      border-radius: var(--mdc-link-border-radius);
      cursor: pointer;
      line-height: var(--mds-font-apps-body-large-regular-line-height);
      text-underline-offset: auto;
      text-underline-position: from-font;
    }

    :host([inline]) {
      display: inline-flex;
    }

    /* Base anchor styles */
    :host::part(anchor) {
      color: var(--mdc-link-color-normal);
      font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
      font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
      line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
      text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
      border-radius: var(--mdc-link-border-radius);
      outline: none;
      text-decoration: none; /* Prevent default underline */
    }

    /* Inverted color base */
    :host([inverted])::part(anchor) {
      color: var(--mdc-link-inverted-color-normal);
    }

    /* Disabled state */
    :host([disabled])::part(anchor),
    :host([disabled]) {
      color: var(--mdc-link-color-disabled);
      pointer-events: none;
      text-decoration: none;
    }

    :host([inverted][disabled])::part(anchor) {
      color: var(--mdc-link-inverted-color-disabled);
    }

    /* Hover and active states for enabled links */
    :host(:not([disabled]):hover)::part(anchor) {
      color: var(--mdc-link-color-hover);
      text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    }

    :host(:not([disabled]):active)::part(anchor) {
      color: var(--mdc-link-color-active);
      box-shadow: none;
      text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    }

    /* Inverted variants hover & active */
    :host([inverted]:not([disabled]):hover)::part(anchor) {
      color: var(--mdc-link-inverted-color-hover);
      text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    }

    :host([inverted]:not([disabled]):active)::part(anchor) {
      color: var(--mdc-link-inverted-color-active);
      text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    }

    /* Inline variant always shows underline */
    :host([inline])::part(anchor) {
      text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    }
  `,...g(!0)];var w=Object.defineProperty,o=(h,e,i,l)=>{for(var a=void 0,s=h.length-1,p;s>=0;s--)(p=h[s])&&(a=p(e,i,a)||a);return a&&w(e,i,a),a};const d=class d extends y(x(c)){constructor(){super(...arguments),this.inline=m.INLINE,this.inverted=m.INVERTED,this.target="_self"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleNavigation.bind(this)),this.addEventListener("keydown",this.handleNavigation.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleNavigation.bind(this)),this.removeEventListener("keydown",this.handleNavigation.bind(this))}click(){var e,i,l,a;this.disabled||(a=(l=(i=(e=this.shadowRoot)==null?void 0:e.querySelector)==null?void 0:i.call(e,"a"))==null?void 0:l.click)==null||a.call(l)}handleNavigation(e){this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())}setDisabled(e){e?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}update(e){super.update(e),e.has("disabled")&&this.setDisabled(this.disabled)}renderAnchorContent(){return v`<slot></slot>`}render(){return v`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${n(this.href)}"
        target="${this.target}"
        rel="${n(this.rel)}"
        download="${n(this.download)}"
        ping="${n(this.ping)}"
        hreflang="${n(this.hreflang)}"
        type="${n(this.type)}"
        referrerpolicy="${n(this.referrerpolicy)}"
        aria-label="${this.dataAriaLabel??""}"
        tabindex="${this.disabled?-1:0}"
      >
        ${this.renderAnchorContent()}
      </a>
    `}};d.styles=[...c.styles,...k],d.shadowRootOptions={...c.shadowRootOptions,delegatesFocus:!0};let t=d;o([r({type:Boolean,reflect:!0})],t.prototype,"inline");o([r({type:Boolean,reflect:!0})],t.prototype,"inverted");o([r({type:String,reflect:!0})],t.prototype,"href");o([r({type:String,reflect:!0})],t.prototype,"target");o([r({type:String,reflect:!0})],t.prototype,"rel");o([r({type:String,reflect:!0})],t.prototype,"download");o([r({type:String,reflect:!0})],t.prototype,"ping");o([r({type:String,reflect:!0})],t.prototype,"hreflang");o([r({type:String,reflect:!0})],t.prototype,"type");o([r({type:String,reflect:!0})],t.prototype,"referrerpolicy");export{m as D,t as L,$ as T};
