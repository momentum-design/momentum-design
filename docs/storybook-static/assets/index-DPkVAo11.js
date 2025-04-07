import{i as b,k as d,D as h}from"./lit-element-D5KKan5q.js";import{u as c,C as p,n as f}from"./index-C9z9WAEj.js";import{o as u}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{D as A}from"./DisabledMixin-BZruwOeC.js";import{T as x,V as v}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";const y=c.constructTagName("optgroup"),m="header-id",g=b`
  :host {
    --mdc-optgroup-disabled-color: var(--mds-color-theme-text-primary-disabled);
  }
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
    height: 2.25rem;
  }
  :host([disabled]),
  :host([disabled])::part(header-text) {
    color: var(--mdc-optgroup-disabled-color);
    cursor: default;
  }
`,T=[g];var _=Object.defineProperty,n=(o,t,i,$)=>{for(var e=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(e=l(t,i,e)||e);return e&&_(t,i,e),e};const a=class a extends D(A(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?d`
      <mdc-text
        id="${m}"
        part="header-text"
        type="${x.BODY_MIDSIZE_BOLD}"
        tagname="${v.SPAN}"
      >${this.label}</mdc-text>
    `:h;return d`
      <div
        role="group"
        aria-labelledby="${this.label?m:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="presentation"></slot>
      </div>
    `}};a.styles=[...p.styles,...T];let r=a;n([f({type:String,reflect:!0})],r.prototype,"label");n([u({selector:"mdc-option"})],r.prototype,"options");r.register(y);export{y as T};
