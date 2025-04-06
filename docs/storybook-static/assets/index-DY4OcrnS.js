import"./index-fgTGGUkO.js";import{i as m,k as l,D as p}from"./lit-element-D5KKan5q.js";import{u as b,n as o}from"./index-C9z9WAEj.js";import{t as f}from"./if-defined-D5BV9-c0.js";import{F as v}from"./FormInternalsMixin-Dg5j8Yib.js";import{L as g,a as u}from"./listitem.component-CyW_VFek.js";import{T as y}from"./text.constants-ZF0jM5wn.js";const A="check-bold",I=b.constructTagName("option"),x=m`
  :host::part(list-item) {
    height: 2.25rem;
  }
  :host::part(default-slot) {
    display: none; 
  }
`,T=[x];var E=Object.defineProperty,d=(c,t,e,a)=>{for(var i=void 0,r=c.length-1,h;r>=0;r--)(h=c[r])&&(i=h(t,e,i)||i);return i&&E(t,e,i),i};const n=class n extends v(u){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role="option",this.variant=g.INSET_RECTANGLE,this.updateAttribute("aria-selected",`${this.selected}`),this.updateAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.secondaryLabel=void 0,this.sideHeaderText=void 0,this.sublineText=void 0,this.dataAriaLabel=void 0}handleDefaultSlotChange(){var e,a,i;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&!this.label&&(this.label=(i=(a=t.assignedNodes()[0])==null?void 0:a.textContent)==null?void 0:i.trim())}updateAttribute(t,e){this.setAttribute(t,e)}update(t){super.update(t),t.has("disabled")&&this.updateAttribute("aria-disabled",`${this.disabled}`),t.has("selected")&&this.updateAttribute("aria-selected",`${this.selected}`)}render(){const t=this.selected?l`
      <mdc-icon slot="trailing-controls" name="${A}"></mdc-icon>
    `:p,e=this.prefixIcon?l`
      <mdc-icon slot="leading-controls" name="${f(this.prefixIcon)}"></mdc-icon>
    `:p;return l`
      <div part="leading">
        ${e}
        <div part="leading-text">
          ${this.getText("leading-text-primary-label",y.BODY_MIDSIZE_REGULAR,this.label)}
        </div>
      </div>
      <div part="trailing">
        ${t}
      </div>
      <slot part="default-slot" @slotchange="${this.handleDefaultSlotChange}"></slot>
    `}};n.styles=[...u.styles,...T];let s=n;d([o({type:Boolean,reflect:!0})],s.prototype,"selected");d([o({type:String,reflect:!0,attribute:"prefix-icon"})],s.prototype,"prefixIcon");d([o({type:String,reflect:!0,attribute:"aria-label"})],s.prototype,"ariaLabel");s.register(I);
