import{i as f,k as v,D as g}from"./lit-element-D5KKan5q.js";import{u,C as p,n as i}from"./index-C9z9WAEj.js";import{D as b}from"./DisabledMixin-BZruwOeC.js";import{I as y}from"./IconNameMixin-CujGSn0t.js";import{a as x,h as z}from"./index-MA1r3zrt.js";import{T as k}from"./TabIndexMixin-CsrHswKP.js";import"./index-C_rAiH13.js";const I=u.constructTagName("link"),l={LARGE:"large",MIDSIZE:"midsize",SMALL:"small"},n={LARGE:1,MIDSIZE:.875,SMALL:.75},s={INLINE:!1,INVERTED:!1,LINK_SIZE:l.LARGE},E=[x,f`
  :host {
    --mdc-link-border-radius: 0.25rem;
    --mdc-link-color-active: var(--mds-color-theme-text-accent-active);
    --mdc-link-color-disabled: var(--mds-color-theme-text-primary-disabled);
    --mdc-link-color-hover: var(--mds-color-theme-text-accent-hover);
    --mdc-link-color-normal: var(--mds-color-theme-text-accent-normal);
    --mdc-link-icon-margin-left: 0.25rem;
    --mdc-link-inverted-color-active: var(--mds-color-theme-inverted-text-accent-active);
    --mdc-link-inverted-color-disabled: var(--mds-color-theme-inverted-text-primary-disabled);
    --mdc-link-inverted-color-hover: var(--mds-color-theme-inverted-text-accent-hover);
    --mdc-link-inverted-color-normal: var(--mds-color-theme-inverted-text-accent-normal);
    --mdc-link-text-decoration-disabled: underline;

    border-radius: var(--mdc-link-border-radius);
    color: var(--mdc-link-color-normal);
    gap: var(--mdc-link-icon-margin-left);
    text-underline-offset: auto;
    text-underline-position: from-font;
    cursor: pointer;
  }

  :host([inline]) {
    display: inline-flex;
  }

  :host(:hover) {
    color: var(--mdc-link-color-hover);
  }

  :host(:active) {
    color: var(--mdc-link-color-active);
    box-shadow: none;
  }

  :host([inverted]) {
    color: var(--mdc-link-inverted-color-normal);
  }

  :host([inverted]:hover) {
    color: var(--mdc-link-inverted-color-hover);
  }

  :host([inverted]:active) {
    color: var(--mdc-link-inverted-color-active);
  }

  :host([disabled]) {
    color: var(--mdc-link-color-disabled);
    pointer-events: none;
  }

  :host([inverted][disabled]) {
    color: var(--mdc-link-inverted-color-disabled);
  }

  :host([size="large"]) {
    font-size: var(--mds-font-apps-body-large-regular-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-text-case);
  }

  :host([size="midsize"]) {
    font-size: var(--mds-font-apps-body-midsize-regular-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-text-case);
  }

  :host([size="small"]) {
    font-size: var(--mds-font-apps-body-small-regular-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-text-case);
  }

  :host([size="large"]:hover),
  :host([size="large"]:active),
  :host([size="large"][inline]) {
    font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
  }

  :host([size="midsize"]:hover),
  :host([size="midsize"]:active),
  :host([size="midsize"][inline]) {
    font-size: var(--mds-font-apps-body-midsize-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-midsize-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-midsize-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-midsize-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-midsize-regular-underline-text-case);
  }

  :host([size="small"]:hover),
  :host([size="small"]:active),
  :host([size="small"][inline]) {
    font-size: var(--mds-font-apps-body-small-regular-underline-font-size);
    font-weight: var(--mds-font-apps-body-small-regular-underline-font-weight);
    line-height: var(--mds-font-apps-body-small-regular-underline-line-height);
    text-decoration: var(--mds-font-apps-body-small-regular-underline-text-decoration);
    text-transform: var(--mds-font-apps-body-small-regular-underline-text-case);
  }
`,...z()];var S=Object.defineProperty,o=(c,e,m,L)=>{for(var r=void 0,a=c.length-1,h;a>=0;a--)(h=c[a])&&(r=h(e,m,r)||r);return r&&S(e,m,r),r};const d=class d extends b(k(y(p))){constructor(){super(...arguments),this.inline=s.INLINE,this.inverted=s.INVERTED,this.size=s.LINK_SIZE,this.href="#",this.target="_self",this.prevTabindex=0,this.handleNavigation=e=>{if((e.type==="click"||e instanceof KeyboardEvent&&e.key==="Enter")&&this.href){if(this.disabled)return;window.open(this.href,this.target,this.rel)}}}connectedCallback(){super.connectedCallback(),this.setAttribute("role","link"),this.addEventListener("click",this.handleNavigation),this.addEventListener("keydown",this.handleNavigation)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleNavigation),this.removeEventListener("keydown",this.handleNavigation)}getIconSize(){switch(this.size){case l.SMALL:return n.SMALL;case l.MIDSIZE:return n.MIDSIZE;default:return n.LARGE}}setDisabled(e){e?(this.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),this.removeAttribute("aria-disabled"))}update(e){super.update(e),e.has("disabled")&&this.setDisabled(this.disabled)}render(){return v`
      <slot></slot>
      ${this.iconName?v`
        <mdc-icon
          name=${this.iconName}
          size=${this.getIconSize()}
          length-unit="rem"
        ></mdc-icon>
      `:g}
    `}};d.styles=[...p.styles,...E];let t=d;o([i({type:Boolean,reflect:!0})],t.prototype,"inline");o([i({type:Boolean,reflect:!0})],t.prototype,"inverted");o([i({type:String,reflect:!0})],t.prototype,"size");o([i({type:String,reflect:!0})],t.prototype,"href");o([i({type:String,reflect:!0})],t.prototype,"target");o([i({type:String,reflect:!0})],t.prototype,"rel");t.register(I);export{l as L};
