import{u as m,W as u,U as f,X as b,k as p,F as d,n as r}from"./iframe-BceO9xBA.js";import{t as a}from"./if-defined-DJvvsfJY.js";import{D as g}from"./DataAriaLabelMixin-BnTYbWc3.js";import{D as y}from"./DisabledMixin-CJ7Qsp83.js";const $=m.constructTagName("linksimple"),v={INLINE:!1,INVERTED:!1},x=[u,f`
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
  `,...b(!0)];var k=Object.defineProperty,o=(s,t,c,N)=>{for(var n=void 0,l=s.length-1,h;l>=0;l--)(h=s[l])&&(n=h(t,c,n)||n);return n&&k(t,c,n),n};const i=class i extends g(y(d)){constructor(){super(...arguments),this.inline=v.INLINE,this.inverted=v.INVERTED,this.target="_self"}connectedCallback(){super.connectedCallback(),this.addEventListener("click",this.handleNavigation.bind(this)),this.addEventListener("keydown",this.handleNavigation.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleNavigation.bind(this)),this.removeEventListener("keydown",this.handleNavigation.bind(this))}handleNavigation(t){this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}setDisabled(t){t?this.setAttribute("aria-disabled","true"):this.removeAttribute("aria-disabled")}update(t){super.update(t),t.has("disabled")&&this.setDisabled(this.disabled)}renderAnchorContent(){return p`<slot></slot>`}render(){return p`
      <a
        class="mdc-focus-ring"
        part="anchor"
        href="${a(this.href)}"
        target="${this.target}"
        rel="${a(this.rel)}"
        download="${a(this.download)}"
        ping="${a(this.ping)}"
        hreflang="${a(this.hreflang)}"
        type="${a(this.type)}"
        referrerpolicy="${a(this.referrerpolicy)}"
        aria-label="${this.dataAriaLabel??""}"
        tabindex="${this.disabled?-1:0}"
      >
        ${this.renderAnchorContent()}
      </a>
    `}};i.styles=[...d.styles,...x],i.shadowRootOptions={...d.shadowRootOptions,delegatesFocus:!0};let e=i;o([r({type:Boolean,reflect:!0})],e.prototype,"inline");o([r({type:Boolean,reflect:!0})],e.prototype,"inverted");o([r({type:String,reflect:!0})],e.prototype,"href");o([r({type:String,reflect:!0})],e.prototype,"target");o([r({type:String,reflect:!0})],e.prototype,"rel");o([r({type:String,reflect:!0})],e.prototype,"download");o([r({type:String,reflect:!0})],e.prototype,"ping");o([r({type:String,reflect:!0})],e.prototype,"hreflang");o([r({type:String,reflect:!0})],e.prototype,"type");o([r({type:String,reflect:!0})],e.prototype,"referrerpolicy");export{v as D,e as L,$ as T};
