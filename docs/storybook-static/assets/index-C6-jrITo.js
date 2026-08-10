import{S as m,k as d,T as c,V as f,v as A,R as p,C as b,n as D,L as T}from"./iframe-1qtKO-Lg.js";import{D as u}from"./DataAriaLabelMixin-DdX1l2k6.js";import{D as v}from"./DisabledMixin-EZ3FaG-P.js";import{T as y}from"./index-BRWlFTRk.js";import{H as h,T as E}from"./optgroup.constants-D6Nq8dRz.js";const $=m`
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
`,x=[$];var _=Object.defineProperty,n=(i,e,o,g)=>{for(var t=void 0,a=i.length-1,l;a>=0;a--)(l=i[a])&&(t=l(e,o,t)||t);return t&&_(e,o,t),t};const r=class r extends u(v(b)){setDisabledForAllOptions(){this.options.forEach(e=>{this.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}updated(e){super.updated(e),e.has("disabled")&&this.setDisabledForAllOptions()}render(){const e=this.label?d`
          <mdc-text
            id="${h}"
            part="header-text"
            type="${c.BODY_MIDSIZE_BOLD}"
            tagname="${f.SPAN}"
            >${this.label}</mdc-text
          >
        `:A;return d`
      <div
        role="${p.GROUP}"
        aria-labelledby="${this.label?h:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${e}
        <slot role="${p.PRESENTATION}"></slot>
      </div>
    `}};r.styles=[...b.styles,...x];let s=r;n([D({type:String,reflect:!0})],s.prototype,"label");n([T({selector:y})],s.prototype,"options");s.register(E);
