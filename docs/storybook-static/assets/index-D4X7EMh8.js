import"./index-B1nOY4fG.js";import{u,aa as g,S as f,ab as b,W as x,k as n,h,q as p,n as r}from"./iframe-Dqi1znBL.js";import{t as v}from"./if-defined-DBaEJSn3.js";import{F as y}from"./FormInternalsMixin-BALd1K8Z.js";import{a as E,L as m}from"./listitem.component-BVAw3VRV.js";const T="check-bold",I=u.constructTagName("option"),L=[g,f`
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

    :host([data-focused]) {
      outline: none;
      position: relative;
      box-shadow: ${b};
    }
    :host([data-hidden]) {
      display: none;
    }
  `];var A=Object.defineProperty,o=(d,t,s,_)=>{for(var e=void 0,a=d.length-1,c;a>=0;a--)(c=d[a])&&(e=c(t,s,e)||e);return e&&A(t,s,e),e};const l=class l extends y(m){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role=x.OPTION,this.variant=E.INSET_RECTANGLE,this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}update(t){super.update(t),t.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.dispatchModifiedEvent(this.selected?"selected":"unselected"))}render(){const t=this.prefixIcon?n`
          <div part="leading-icon">
            <mdc-icon length-unit="rem" slot="leading-controls" name="${v(this.prefixIcon)}"></mdc-icon>
          </div>
        `:h,s=this.selected?n` <mdc-icon length-unit="rem" slot="trailing-controls" name="${T}"></mdc-icon> `:h;return n`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",p.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",p.BODY_SMALL_REGULAR,this.secondaryLabel)}
      </div>
      <div part="trailing">${s}</div>
    `}};l.styles=[...m.styles,...L];let i=l;o([r({type:Boolean,reflect:!0})],i.prototype,"selected");o([r({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");o([r({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");i.register(I);export{I as T};
