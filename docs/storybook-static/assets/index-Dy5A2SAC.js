import"./index-BQHpR8ua.js";import{T as l}from"./index-D1yLszQ-.js";import"./index-DlY34wWO.js";import{k as m}from"./lit-element-D5KKan5q.js";import{n as p}from"./index-C9z9WAEj.js";import{R as h}from"./roles-DMFGbP5t.js";import{M as c}from"./menuitem.component-DXg6aWC3.js";import{A as n}from"./menusection.constants-CectB7Mc.js";import{T as E}from"./menuitemradio.constants-DzN5_ujm.js";var f=Object.defineProperty,b=(i,s,o,g)=>{for(var t=void 0,r=i.length-1,d;r>=0;r--)(d=i[r])&&(t=d(s,o,t)||t);return t&&f(s,o,t),t};const a=class a extends c{constructor(){super(...arguments),this.ariaChecked=n.FALSE}connectedCallback(){super.connectedCallback(),this.role=h.MENUITEMRADIO}render(){return m`
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
    `}};a.styles=[...c.styles];let e=a;b([p({type:String,reflect:!0,attribute:"aria-checked"})],e.prototype,"ariaChecked");e.register(E);
