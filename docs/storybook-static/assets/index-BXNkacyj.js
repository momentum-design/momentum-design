import"./index-Cdz8MLaY.js";import{T as n}from"./index-BrLJ_9IK.js";import"./index-5cASsYq0.js";import{k as E}from"./lit-element-D5KKan5q.js";import{n as h}from"./index-C9z9WAEj.js";import{R as f}from"./roles-BH_hBfTz.js";import{M as m}from"./menuitem.component-ICM-PeNX.js";import{A as r,T as A}from"./menusection.constants-CectB7Mc.js";import{T}from"./menupopover.constants-C3xzY-3O.js";import{T as k}from"./menuitemradio.constants-DzN5_ujm.js";var C=Object.defineProperty,p=(d,t,a,c)=>{for(var e=void 0,s=d.length-1,l;s>=0;s--)(l=d[s])&&(e=l(t,a,e)||e);return e&&C(t,a,e),e};const o=class o extends m{constructor(){super(),this.ariaChecked=r.FALSE,this.name="",this.menuitemradioHandleClick=()=>{if(this.disabled||this.ariaChecked===r.TRUE)return;const t=this.closest(`${A}, ${T}`);t&&Array.from(t.querySelectorAll(this.tagName)).forEach(c=>{const e=c;e.name===this.name&&(e.ariaChecked=r.FALSE)}),this.ariaChecked=r.TRUE},this.addEventListener("click",this.menuitemradioHandleClick)}connectedCallback(){super.connectedCallback(),this.role=f.MENUITEMRADIO}render(){return E`
      <div part="leading-controls">
        <mdc-staticradio
          slot="leading-controls"
          ?checked="${this.ariaChecked===r.TRUE}"
          ?disabled="${this.disabled}"
        ></mdc-staticradio>
      </div>
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",n.BODY_MIDSIZE_REGULAR,this.label)}
        ${this.getText("leading-text-secondary-label",n.BODY_MIDSIZE_REGULAR,this.secondaryLabel)}
      </div>
    `}};o.styles=[...m.styles];let i=o;p([h({type:String,reflect:!0,attribute:"aria-checked"})],i.prototype,"ariaChecked");p([h({type:String,reflect:!0})],i.prototype,"name");i.register(k);
