import"./index-DavZmJ1W.js";import{T as p}from"./index-D2VIkDCb.js";import{i as f,k as o,D as h}from"./lit-element-D5KKan5q.js";import{n as a}from"./property-Bj3TGwkg.js";import{t as u}from"./if-defined-D5BV9-c0.js";import{F as x}from"./FormInternalsMixin-DHE-e7AC.js";import{a as g,L as m}from"./listitem.component-CV5l_1p0.js";import{u as b}from"./provider.component-DrWB4byV.js";const v="check-bold",y=b.constructTagName("option"),T=f`
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
`,E=[T];var I=Object.defineProperty,n=(c,t,s,A)=>{for(var e=void 0,r=c.length-1,d;r>=0;r--)(d=c[r])&&(e=d(t,s,e)||e);return e&&I(t,s,e),e};const l=class l extends x(m){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role="option",this.variant=g.INSET_RECTANGLE,this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}update(t){super.update(t),t.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.dispatchModifiedEvent(this.selected?"selected":"unselected"))}render(){const t=this.prefixIcon?o`
          <div part="leading-icon">
            <mdc-icon length-unit="rem" slot="leading-controls" name="${u(this.prefixIcon)}"></mdc-icon>
          </div>
        `:h,s=this.selected?o` <mdc-icon length-unit="rem" slot="trailing-controls" name="${v}"></mdc-icon> `:h;return o`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",p.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",p.BODY_SMALL_REGULAR,this.secondaryLabel)}
      </div>
      <div part="trailing">${s}</div>
    `}};l.styles=[...m.styles,...E];let i=l;n([a({type:Boolean,reflect:!0})],i.prototype,"selected");n([a({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");n([a({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");i.register(y);export{y as T};
