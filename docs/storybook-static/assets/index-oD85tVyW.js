import{i as h,k as d,D as c}from"./lit-element-D5KKan5q.js";import{u as f,C as p,n as u}from"./provider.component-BaQC7CJH.js";import{o as A}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{D as v}from"./DisabledMixin-DcYwkKYf.js";import{R as m}from"./roles-DU0xbrD4.js";import{T as x,V as y}from"./index-riA1qVWu.js";const E=f.constructTagName("optgroup"),b="header-id",T=h`
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
`,$=[T];var _=Object.defineProperty,n=(o,t,i,g)=>{for(var e=void 0,r=o.length-1,l;r>=0;r--)(l=o[r])&&(e=l(t,i,e)||e);return e&&_(t,i,e),e};const a=class a extends D(v(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?d`
          <mdc-text
            id="${b}"
            part="header-text"
            type="${x.BODY_MIDSIZE_BOLD}"
            tagname="${y.SPAN}"
            >${this.label}</mdc-text
          >
        `:c;return d`
      <div
        role="${m.GROUP}"
        aria-labelledby="${this.label?b:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${m.PRESENTATION}"></slot>
      </div>
    `}};a.styles=[...p.styles,...$];let s=a;n([u({type:String,reflect:!0})],s.prototype,"label");n([A({selector:"mdc-option"})],s.prototype,"options");s.register(E);
