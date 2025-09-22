import"./index-DyTlZ_IO.js";import{T as m}from"./index-DHsMOcdX.js";import{i as u,k as r,D as p}from"./lit-element-D5KKan5q.js";import{u as f,n as o}from"./provider.component-BaQC7CJH.js";import{t as g}from"./if-defined-D5BV9-c0.js";import{F as b}from"./FormInternalsMixin-CvUI0OX_.js";import{R as x}from"./roles-CJI3JVG-.js";import{a as v,L as h}from"./listitem.component-Cy9hWtov.js";import{b as T,f as y}from"./index-CqVtAZCJ.js";const E="check-bold",I=f.constructTagName("option"),L=[T,u`
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
      box-shadow: ${y};
    }
    :host([data-hidden]) {
      display: none;
    }
  `];var A=Object.defineProperty,n=(d,t,s,_)=>{for(var e=void 0,a=d.length-1,c;a>=0;a--)(c=d[a])&&(e=c(t,s,e)||e);return e&&A(t,s,e),e};const l=class l extends b(h){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role=x.OPTION,this.variant=v.INSET_RECTANGLE,this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}update(t){super.update(t),t.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.dispatchModifiedEvent(this.selected?"selected":"unselected"))}render(){const t=this.prefixIcon?r`
          <div part="leading-icon">
            <mdc-icon length-unit="rem" slot="leading-controls" name="${g(this.prefixIcon)}"></mdc-icon>
          </div>
        `:p,s=this.selected?r` <mdc-icon length-unit="rem" slot="trailing-controls" name="${E}"></mdc-icon> `:p;return r`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",m.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",m.BODY_SMALL_REGULAR,this.secondaryLabel)}
      </div>
      <div part="trailing">${s}</div>
    `}};l.styles=[...h.styles,...L];let i=l;n([o({type:Boolean,reflect:!0})],i.prototype,"selected");n([o({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");n([o({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");i.register(I);export{I as T};
