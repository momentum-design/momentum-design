import{u as h,i as c,k as l,D as f,C as p,n as u}from"./iframe-Bxc2R5W_.js";import{o as A}from"./query-assigned-elements-uEuc3rg8.js";import{D}from"./DataAriaLabelMixin-BeqK3QPG.js";import{D as T}from"./DisabledMixin-EWLkxMJG.js";import{R as m}from"./roles-CJI3JVG-.js";import{T as x,V as y}from"./index-CRnj0VF_.js";import{T as E}from"./index-u--KhJ92.js";const $=h.constructTagName("optgroup"),n="header-id",v=c`
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
`,_=[v];var g=Object.defineProperty,b=(o,t,i,N)=>{for(var e=void 0,a=o.length-1,d;a>=0;a--)(d=o[a])&&(e=d(t,i,e)||e);return e&&g(t,i,e),e};const r=class r extends D(T(p)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?l`
          <mdc-text
            id="${n}"
            part="header-text"
            type="${x.BODY_MIDSIZE_BOLD}"
            tagname="${y.SPAN}"
            >${this.label}</mdc-text
          >
        `:f;return l`
      <div
        role="${m.GROUP}"
        aria-labelledby="${this.label?n:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${m.PRESENTATION}"></slot>
      </div>
    `}};r.styles=[...p.styles,..._];let s=r;b([u({type:String,reflect:!0})],s.prototype,"label");b([A({selector:E})],s.prototype,"options");s.register($);export{$ as T};
