import"./index-8wZU13aH.js";import{T as p}from"./index-riA1qVWu.js";import"./index-ChH4-Or7.js";import{i as f,k as a,D as h}from"./lit-element-D5KKan5q.js";import{u,n as o}from"./provider.component-BaQC7CJH.js";import{t as x}from"./if-defined-D5BV9-c0.js";import{F as g}from"./FormInternalsMixin-BIoSiX4k.js";import{L as b,a as m}from"./listitem.component-BeuoLqO-.js";const v="check-bold",y=u.constructTagName("option"),T=f`
  :host {
    --mdc-option-icon-width: 1rem;

    flex-shrink: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
  :host::part(list-item) {
    height: 2.25rem;
  }
  :host::part(default-slot) {
    display: none;
  }
  :host::part(leading-icon),
  :host::part(trailing) {
    flex: 1;
    max-width: var(--mdc-option-icon-width);
  }
  :host::part(leading-text) {
    flex: 1;
    /** 2x of leading and trailing icon width + 2x of column gap on both sides of the label text */
    width: calc(100% - (2 * var(--mdc-option-icon-width)) - (2 * var(--mdc-listitem-column-gap)));
  }
`,I=[T];var E=Object.defineProperty,n=(c,t,s,A)=>{for(var e=void 0,r=c.length-1,d;r>=0;r--)(d=c[r])&&(e=d(t,s,e)||e);return e&&E(t,s,e),e};const l=class l extends g(m){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role="option",this.variant=b.INSET_RECTANGLE,this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}update(t){super.update(t),t.has("selected")&&this.setAttribute("aria-selected",`${this.selected}`)}render(){const t=this.prefixIcon?a`
          <div part="leading-icon">
            <mdc-icon length-unit="rem" slot="leading-controls" name="${x(this.prefixIcon)}"></mdc-icon>
          </div>
        `:h,s=this.selected?a` <mdc-icon length-unit="rem" slot="trailing-controls" name="${v}"></mdc-icon> `:h;return a`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",p.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",p.BODY_SMALL_REGULAR,this.secondaryLabel)}
      </div>
      <div part="trailing">${s}</div>
    `}};l.styles=[...m.styles,...I];let i=l;n([o({type:Boolean,reflect:!0})],i.prototype,"selected");n([o({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");n([o({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");i.register(y);export{y as T};
