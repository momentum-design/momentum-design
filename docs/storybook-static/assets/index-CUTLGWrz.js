import{u as h,i as c,k as l,D as f,C as p,n as u}from"./iframe-BkJ5kS8N.js";import{o as A}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-D7KW1UC7.js";import{D as x}from"./DisabledMixin-rtnkKzcf.js";import{R as n}from"./roles-CJI3JVG-.js";import{T as y,V as T}from"./index-DPSnH-H_.js";const v=h.constructTagName("optgroup"),m="header-id",E=c`
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
`,$=[E];var _=Object.defineProperty,b=(o,t,i,g)=>{for(var e=void 0,a=o.length-1,d;a>=0;a--)(d=o[a])&&(e=d(t,i,e)||e);return e&&_(t,i,e),e};const r=class r extends D(x(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?l`
          <mdc-text
            id="${m}"
            part="header-text"
            type="${y.BODY_MIDSIZE_BOLD}"
            tagname="${T.SPAN}"
            >${this.label}</mdc-text
          >
        `:f;return l`
      <div
        role="${n.GROUP}"
        aria-labelledby="${this.label?m:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${n.PRESENTATION}"></slot>
      </div>
    `}};r.styles=[...p.styles,...$];let s=r;b([u({type:String,reflect:!0})],s.prototype,"label");b([A({selector:"mdc-option"})],s.prototype,"options");s.register(v);export{v as T};
