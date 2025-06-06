import"./index-BQHpR8ua.js";import{T as l}from"./index-D1yLszQ-.js";import"./index-BQIA-yjU.js";import{k as m}from"./lit-element-D5KKan5q.js";import{n as p,u as h}from"./index-C9z9WAEj.js";import{R as E}from"./roles-Ch6n0tol.js";import{M as c}from"./menuitem.component-BRf3IJAH.js";import{A as n}from"./menusection.constants-CectB7Mc.js";var f=Object.defineProperty,u=(i,s,o,T)=>{for(var t=void 0,r=i.length-1,d;r>=0;r--)(d=i[r])&&(t=d(s,o,t)||t);return t&&f(s,o,t),t};const a=class a extends c{constructor(){super(...arguments),this.ariaChecked=n.FALSE}connectedCallback(){super.connectedCallback(),this.role=E.MENUITEMRADIO}render(){return m`
      <div part="leading-controls">
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.ariaChecked===n.TRUE}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      </div>
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",l.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",l.BODY_MIDSIZE_REGULAR,this.secondaryLabel)}
      </div>
    `}};a.styles=[...c.styles];let e=a;u([p({type:String,reflect:!0,attribute:"aria-checked"})],e.prototype,"ariaChecked");const g=h.constructTagName("menuitemradio");e.register(g);export{g as T};
