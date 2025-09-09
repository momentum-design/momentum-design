import{i as v,k as m}from"./lit-element-D5KKan5q.js";import{n as i}from"./property-Bj3TGwkg.js";import{u as p,C as c}from"./provider.component-DrWB4byV.js";import{D as b}from"./DisabledMixin-B-Cnza7-.js";import{T as f}from"./TabIndexMixin-DEwGeIeI.js";import{h as u,a as g}from"./index-CqVtAZCJ.js";const w=p.constructTagName("linksimple"),h={INLINE:!1,INVERTED:!1},k=[u,v`
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
      color: var(--mdc-link-color-normal);
      text-underline-offset: auto;
      text-underline-position: from-font;
      cursor: pointer;

      /* based on default linksimple size (large) */
      line-height: var(--mds-font-apps-body-large-regular-line-height);
    }

    :host([inline]) {
      display: inline-flex;
    }

    :host([inverted]) {
      color: var(--mdc-link-inverted-color-normal);
    }

    :host(:hover) {
      color: var(--mdc-link-color-hover);
    }

    :host(:active) {
      color: var(--mdc-link-color-active);
      box-shadow: none;
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

    /* based on default linksimple size (large) */
    :host(:hover),
    :host(:active),
    :host([inline]) {
      font-size: var(--mds-font-apps-body-large-regular-underline-font-size);
      font-weight: var(--mds-font-apps-body-large-regular-underline-font-weight);
      line-height: var(--mds-font-apps-body-large-regular-underline-line-height);
      text-decoration: var(--mds-font-apps-body-large-regular-underline-text-decoration);
      text-transform: var(--mds-font-apps-body-large-regular-underline-text-case);
    }
  `,...g()];var y=Object.defineProperty,o=(s,e,l,x)=>{for(var r=void 0,n=s.length-1,d;n>=0;n--)(d=s[n])&&(r=d(e,l,r)||r);return r&&y(e,l,r),r};const a=class a extends b(f(c)){constructor(){super(...arguments),this.inline=h.INLINE,this.inverted=h.INVERTED,this.href="#",this.target="_self",this.prevTabindex=0}connectedCallback(){super.connectedCallback(),this.setAttribute("role","link"),this.addEventListener("click",this.handleNavigation.bind(this)),this.addEventListener("keydown",this.handleNavigation.bind(this))}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("click",this.handleNavigation.bind(this)),this.removeEventListener("keydown",this.handleNavigation.bind(this))}handleNavigation(e){if((e.type==="click"||e instanceof KeyboardEvent&&e.key==="Enter")&&this.href){if(this.disabled)return;window.open(this.href,this.target,this.rel)}}setDisabled(e){e?(this.setAttribute("aria-disabled","true"),this.prevTabindex=this.tabIndex,this.tabIndex=-1):(this.tabIndex===-1&&(this.tabIndex=this.prevTabindex),this.removeAttribute("aria-disabled"))}update(e){super.update(e),e.has("disabled")&&this.setDisabled(this.disabled)}render(){return m` <slot></slot> `}};a.styles=[...c.styles,...k];let t=a;o([i({type:Boolean,reflect:!0})],t.prototype,"inline");o([i({type:Boolean,reflect:!0})],t.prototype,"inverted");o([i({type:String,reflect:!0})],t.prototype,"href");o([i({type:String,reflect:!0})],t.prototype,"target");o([i({type:String,reflect:!0})],t.prototype,"rel");export{h as D,t as L,w as T};
