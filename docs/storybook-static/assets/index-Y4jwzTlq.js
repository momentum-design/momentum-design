import"./index-Cll-x2TM.js";import{u as m,aa as g,U as b,ab as f,R as x,k as c,h,T as p,n as r}from"./iframe-DndUgZyo.js";import{F as v}from"./FormInternalsMixin-CVNmypp6.js";import{a as I,L as u}from"./listitem.component-DIjFUuJ7.js";const T="check-bold",y=m.constructTagName("option"),E=[g,b`
    :host {
      --mdc-listitem-column-gap: 0.75rem;
      --mdc-option-icon-width: 1rem;
      flex-shrink: 0;
    }

    :host::part(trailing) {
      display: flex;
      align-items: center;
      width: var(--mdc-option-icon-width);
    }

    :host::part(leading-text) {
      flex: 1;
    }

    :host::part(trailing) {
      margin-inline-start: var(--mdc-listitem-column-gap);
    }

    :host([data-focused]) {
      outline: none;
      position: relative;
      box-shadow: ${f};
    }
    :host([data-hidden]) {
      display: none;
    }
  `];var L=Object.defineProperty,n=(o,t,s,A)=>{for(var e=void 0,a=o.length-1,d;a>=0;a--)(d=o[a])&&(e=d(t,s,e)||e);return e&&L(t,s,e),e};const l=class l extends v(u){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role=x.OPTION,this.variant=I.INSET_RECTANGLE,this.setAttribute("aria-selected",`${this.selected}`),this.setAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}update(t){super.update(t),t.has("selected")&&(this.setAttribute("aria-selected",`${this.selected}`),this.dispatchModifiedEvent(this.selected?"selected":"unselected"))}renderIcon(t,s){return c` <mdc-icon length-unit="rem" slot="${t}" name="${s}"></mdc-icon> `}render(){const t=this.selected?this.renderIcon("trailing-controls",T):h;return c`
      <div part="leading">
        <slot name="leading-controls">
          ${this.prefixIcon?this.renderIcon("leading-controls",this.prefixIcon):h}
        </slot>
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",p.BODY_MIDSIZE_REGULAR,this.label)}
          ${this.getText("leading-text-secondary-label",p.BODY_SMALL_REGULAR,this.secondaryLabel)}
        </div>
      </div>
      <div part="trailing">${t}</div>
    `}};l.styles=[...u.styles,...E];let i=l;n([r({type:Boolean,reflect:!0})],i.prototype,"selected");n([r({type:String,reflect:!0,attribute:"prefix-icon"})],i.prototype,"prefixIcon");n([r({type:String,reflect:!0,attribute:"aria-label"})],i.prototype,"ariaLabel");i.register(y);export{y as T};
