import{i as n,k as d,D as f}from"./lit-element-D5KKan5q.js";import{C as m,n as c}from"./index-C9z9WAEj.js";import{o as A}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{D as u}from"./DisabledMixin-BZruwOeC.js";import{R as p}from"./roles-BH_hBfTz.js";import{T as v,V as x}from"./index-D1yLszQ-.js";import{H as b,T as y}from"./optgroup.constants-CwoRKCZY.js";const E=n`
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
`,T=[E];var $=Object.defineProperty,h=(o,t,i,_)=>{for(var e=void 0,s=o.length-1,l;s>=0;s--)(l=o[s])&&(e=l(t,i,e)||e);return e&&$(t,i,e),e};const a=class a extends D(u(m)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?d`
      <mdc-text
        id="${b}"
        part="header-text"
        type="${v.BODY_MIDSIZE_BOLD}"
        tagname="${x.SPAN}"
      >${this.label}</mdc-text>
    `:f;return d`
      <div
        role="${p.GROUP}"
        aria-labelledby="${this.label?b:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${p.PRESENTATION}"></slot>
      </div>
    `}};a.styles=[...m.styles,...T];let r=a;h([c({type:String,reflect:!0})],r.prototype,"label");h([A({selector:"mdc-option"})],r.prototype,"options");r.register(y);
