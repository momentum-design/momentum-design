import"./index-BQHpR8ua.js";import"./index-D3DhXfcW.js";import"./index-w8B2CBxb.js";import{k as m}from"./lit-element-D5KKan5q.js";import{n as p}from"./index-C9z9WAEj.js";import{R as h}from"./roles-DMFGbP5t.js";import{M as l}from"./menuitem.component-udQZuTYl.js";import{T as c}from"./text.constants-ZF0jM5wn.js";import{A as n}from"./menusection.constants-CectB7Mc.js";import{T as E}from"./menuitemradio.constants-DzN5_ujm.js";var f=Object.defineProperty,b=(a,s,o,g)=>{for(var t=void 0,r=a.length-1,d;r>=0;r--)(d=a[r])&&(t=d(s,o,t)||t);return t&&f(s,o,t),t};const i=class i extends l{constructor(){super(...arguments),this.ariaChecked=n.FALSE}connectedCallback(){super.connectedCallback(),this.role=h.MENUITEMRADIO}render(){return m`
      <div part="leading-controls">
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.ariaChecked===n.TRUE}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      </div>
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",c.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",c.BODY_MIDSIZE_REGULAR,this.secondaryLabel)}
      </div>
    `}};i.styles=[...l.styles];let e=i;b([p({type:String,reflect:!0,attribute:"aria-checked"})],e.prototype,"ariaChecked");e.register(E);
