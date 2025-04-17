import"./index-D0_fT5Rb.js";import"./index-D3DhXfcW.js";import{a as f}from"./index-BL7cBJOV.js";import{i as b,k as r,D as p}from"./lit-element-D5KKan5q.js";import{u as v,n as l}from"./index-C9z9WAEj.js";import{t as T}from"./if-defined-D5BV9-c0.js";import{F as g}from"./FormInternalsMixin-CSixOKbK.js";import{L,a as u}from"./listitem.component-CAQJg3uX.js";import{T as x}from"./text.constants-ZF0jM5wn.js";const E=v.constructTagName("select"),F={ARROW_UP:"arrow-up-bold",ARROW_DOWN:"arrow-down-bold"},y="check-bold",m="dynamic-option-tooltip-popover",A=v.constructTagName("option"),w=b`
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
  :host::part(leading-text-primary-label) {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`,C=[w];var I=Object.defineProperty,n=(c,t,e,o)=>{for(var i=void 0,s=c.length-1,h;s>=0;s--)(h=c[s])&&(i=h(t,e,i)||i);return i&&I(t,e,i),i};const d=class d extends g(u){constructor(){super(...arguments),this.selected=!1,this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.role="option",this.variant=L.INSET_RECTANGLE,this.updateAttribute("aria-selected",`${this.selected}`),this.updateAttribute("aria-disabled",`${!!this.disabled}`),this.name=void 0,this.secondaryLabel=void 0,this.sideHeaderText=void 0,this.sublineText=void 0,this.dataAriaLabel=void 0,this.addEventListener("focusin",this.displayTooltipForLongText),this.addEventListener("mouseover",this.displayTooltipForLongText),this.addEventListener("focusout",this.hideTooltipOnLeave),this.addEventListener("mouseout",this.hideTooltipOnLeave),this.addEventListener("click",this.handleClick)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("focusin",this.displayTooltipForLongText),this.removeEventListener("mouseover",this.displayTooltipForLongText),this.removeEventListener("focusout",this.hideTooltipOnLeave),this.removeEventListener("mouseout",this.hideTooltipOnLeave),this.removeEventListener("click",this.handleClick)}handleClick(){this.hideTooltipOnLeave()}displayTooltipForLongText(t){var s;const e=(s=t.target.shadowRoot)==null?void 0:s.querySelector('[part="leading-text-primary-label"]');if(e&&e.scrollWidth&&e.clientWidth&&e.scrollWidth<=(e==null?void 0:e.clientWidth))return;const o=document.createElement(f);o.id=m,o.textContent=this.label??"",o.setAttribute("triggerid",this.id),o.setAttribute("visible",""),o.setAttribute("show-arrow","");const i=this.closest(E)||this.parentElement;i==null||i.after(o)}hideTooltipOnLeave(){const t=document.querySelector(`#${m}`);t==null||t.remove()}handleDefaultSlotChange(){var e,o,i;const t=(e=this.shadowRoot)==null?void 0:e.querySelector("slot");t&&!this.label&&(this.label=(i=(o=t.assignedNodes()[0])==null?void 0:o.textContent)==null?void 0:i.trim())}updateAttribute(t,e){this.setAttribute(t,e)}update(t){super.update(t),t.has("disabled")&&this.updateAttribute("aria-disabled",`${this.disabled}`),t.has("selected")&&this.updateAttribute("aria-selected",`${this.selected}`)}render(){const t=this.prefixIcon?r`
      <div part="leading-icon">
        <mdc-icon slot="leading-controls" name="${T(this.prefixIcon)}"></mdc-icon>
      </div>
    `:p,e=this.selected?r`
      <mdc-icon slot="trailing-controls" name="${y}"></mdc-icon>
    `:p;return r`
      ${t}
      <div part="leading-text">
        ${this.getText("leading-text-primary-label",x.BODY_MIDSIZE_REGULAR,this.label)}
      </div>
      <div part="trailing">
        ${e}
      </div>
      <slot part="default-slot" @slotchange="${this.handleDefaultSlotChange}"></slot>
    `}};d.styles=[...u.styles,...C];let a=d;n([l({type:Boolean,reflect:!0})],a.prototype,"selected");n([l({type:String,reflect:!0,attribute:"prefix-icon"})],a.prototype,"prefixIcon");n([l({type:String,reflect:!0,attribute:"aria-label"})],a.prototype,"ariaLabel");a.register(A);export{F as A,A as T,E as a};
