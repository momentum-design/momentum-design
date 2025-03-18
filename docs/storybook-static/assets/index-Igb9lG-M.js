import"./index-3m0WlfBg.js";import{i as f,k as l,D as p}from"./lit-element-D5KKan5q.js";import{u as m,n as o}from"./index-C9z9WAEj.js";import{t as b}from"./if-defined-D5BV9-c0.js";import{F as v}from"./FormInternalsMixin-BezuNa1f.js";import{L as g,a as u}from"./listitem.component-D_F-zTFD.js";import{T as y}from"./text.constants-ZF0jM5wn.js";const A="check-bold",I=m.constructTagName("option"),x=f`
  :host::part(list-item) {
    height: 2.25rem;
  }
  :host::part(default-slot) {
    display: none; 
  }
`,T=[x];var E=Object.defineProperty,d=(c,t,e,a)=>{for(var i=void 0,r=c.length-1,h;r>=0;r--)(h=c[r])&&(i=h(t,e,i)||i);return i&&E(t,e,i),i};const n=class n extends v(u){constructor(){super(),this.selected=!1,this.ariaLabel=null,this.role="option",this.variant=g.INSET_RECTANGLE,this.updateAttribute("aria-selected",`${this.selected}`),this.updateAttribute("aria-disabled",`${this.disabled}`),this.name=void 0,this.secondaryLabel=void 0,this.sideHeaderText=void 0,this.sublineText=void 0,this.dataAriaLabel=void 0}handleDefaultSlotChange(){var e,a,i;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&!this.label&&(this.label=(i=(a=t.assignedNodes()[0])==null?void 0:a.textContent)==null?void 0:i.trim())}updateAttribute(t,e){this.setAttribute(t,e)}update(t){super.update(t),t.has("disabled")&&this.updateAttribute("aria-disabled",`${this.disabled}`),t.has("selected")&&this.updateAttribute("aria-selected",`${this.selected}`)}render(){const t=this.selected?l`
      <mdc-icon slot="trailing-controls" name="${A}"></mdc-icon>
    `:p,e=this.prefixIcon?l`
      <mdc-icon slot="leading-controls" name="${b(this.prefixIcon)}"></mdc-icon>
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
