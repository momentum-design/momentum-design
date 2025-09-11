import"./index-XT4ftmUQ.js";import{T as m}from"./index-D2VIkDCb.js";import{i as u,k as a,D as p}from"./lit-element-D5KKan5q.js";import{n}from"./property-Bj3TGwkg.js";import{t as g}from"./if-defined-D5BV9-c0.js";import{F as f}from"./FormInternalsMixin-DHE-e7AC.js";import{a as b,L as h}from"./listitem.component-B3497azE.js";import{u as v}from"./provider.component-DrWB4byV.js";const x="check-bold",T=v.constructTagName("option"),y=u`
  :host {
    --mdc-listitem-column-gap: 0.75rem;
    --mdc-option-icon-width: 1rem;
    flex-shrink: 0;
  }

  :host::part(leading-icon),
  :host::part(trailing) {
    display: flex;
    align-items: center;
    width: var(--mdc-option-icon-width);
  }

  :host::part(leading-text) {
    flex: 1;
  }

  :host::part(leading-icon) {
    margin-inline-end: var(--mdc-listitem-column-gap);
  }
  :host::part(trailing) {
    margin-inline-start: var(--mdc-listitem-column-gap);
  }
`,E=[y];var I=Object.defineProperty,o=(c,t,s,A)=>{for(var e=void 0,r=c.length-1,d;r>=0;r--)(d=c[r])&&(e=d(t,s,e)||e);return e&&I(t,s,e),e};const l=class l extends f(h){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role="option",this.variant=b.INSET_RECTANGLE,this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}update(t){super.update(t),t.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.dispatchModifiedEvent(this.selected?"selected":"unselected"))}render(){const t=this.prefixIcon?a`
          <div part="leading-icon">
            <mdc-icon length-unit="rem" slot="leading-controls" name="${g(this.prefixIcon)}"></mdc-icon>
          </div>
        `:p,s=this.selected?a`
            <mdc-icon length-unit="rem" slot="trailing-controls" name="${x}"></mdc-icon>
        `:p;return a`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",m.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",m.BODY_SMALL_REGULAR,this.secondaryLabel)}
      </div>
      <div part="trailing">
        ${s}
      </div>
    `}};l.styles=[...h.styles,...E];let i=l;o([n({type:Boolean,reflect:!0})],i.prototype,"selected");o([n({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");o([n({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");i.register(T);export{T};
