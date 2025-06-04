import"./index-BuBAOxzU.js";import"./index-D3DhXfcW.js";import"./index-BtYs-q2U.js";import{i as u,k as r,D as p}from"./lit-element-D5KKan5q.js";import{u as f,n as l}from"./index-C9z9WAEj.js";import{t as g}from"./if-defined-D5BV9-c0.js";import{F as b}from"./FormInternalsMixin-CSixOKbK.js";import{L as x,a as m}from"./listitem.component-Bi_eCmxm.js";import{T as v}from"./text.constants-ZF0jM5wn.js";const y="check-bold",I=f.constructTagName("option"),T=u`
  :host {
    --mdc-option-icon-width: 1rem;

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
`,A=[T];var E=Object.defineProperty,n=(c,t,e,o)=>{for(var i=void 0,a=c.length-1,h;a>=0;a--)(h=c[a])&&(i=h(t,e,i)||i);return i&&E(t,e,i),i};const d=class d extends b(m){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role="option",this.variant=x.INSET_RECTANGLE,this.updateAttribute("aria-selected",`${this.selected}`),this.updateAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.secondaryLabel=void 0,this.sideHeaderText=void 0,this.sublineText=void 0}handleDefaultSlotChange(){var e,o,i;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&!this.label&&(this.label=(i=(o=t.assignedNodes()[0])==null?void 0:o.textContent)==null?void 0:i.trim())}updateAttribute(t,e){this.setAttribute(t,e)}update(t){super.update(t),t.has("selected")&&this.updateAttribute("aria-selected",`${this.selected}`)}render(){const t=this.prefixIcon?r`
      <div part="leading-icon">
        <mdc-icon length-unit="rem" slot="leading-controls" name="${g(this.prefixIcon)}"></mdc-icon>
      </div>
    `:p,e=this.selected?r`
      <mdc-icon length-unit="rem" slot="trailing-controls" name="${y}"></mdc-icon>
    `:p;return r`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",v.BODY_MIDSIZE_REGULAR,this.label)}
      </div>
      <div part="trailing">
        ${e}
      </div>
      <slot part="default-slot" @slotchange="${this.handleDefaultSlotChange}"></slot>
    `}};d.styles=[...m.styles,...A];let s=d;n([l({type:Boolean,reflect:!0})],s.prototype,"selected");n([l({type:String,reflect:!0,attribute:"prefix-icon"})],s.prototype,"prefixIcon");n([l({type:String,reflect:!0,attribute:"aria-label"})],s.prototype,"ariaLabel");s.register(I);export{I as T};
