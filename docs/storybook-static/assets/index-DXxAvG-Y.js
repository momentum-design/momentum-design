import{i as h,k as l,D as c}from"./lit-element-D5KKan5q.js";import{u as f,C as p,n as u}from"./provider.component-BaQC7CJH.js";import{o as A}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-Cpdy3gUS.js";import{D as x}from"./DisabledMixin-DcYwkKYf.js";import{R as m}from"./roles-CJI3JVG-.js";import{T as y,V as T}from"./index-DHsMOcdX.js";const v=f.constructTagName("optgroup"),n="header-id",E=h`
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
  :host([data-hidden]) {
    display: none;
  }
`,$=[E];var _=Object.defineProperty,b=(o,t,i,g)=>{for(var e=void 0,r=o.length-1,d;r>=0;r--)(d=o[r])&&(e=d(t,i,e)||e);return e&&_(t,i,e),e};const a=class a extends D(x(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?l`
          <mdc-text
            id="${n}"
            part="header-text"
            type="${y.BODY_MIDSIZE_BOLD}"
            tagname="${T.SPAN}"
            >${this.label}</mdc-text
          >
        `:c;return l`
      <div
        role="${m.GROUP}"
        aria-labelledby="${this.label?n:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${m.PRESENTATION}"></slot>
      </div>
    `}};a.styles=[...p.styles,...$];let s=a;b([u({type:String,reflect:!0})],s.prototype,"label");b([A({selector:"mdc-option"})],s.prototype,"options");s.register(v);export{v as T};
