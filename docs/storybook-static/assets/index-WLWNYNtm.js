import{X as n,k as d,T as c,V as f,h as A,R as p,H as b,n as D}from"./iframe-CM5v7A9W.js";import{o as T}from"./query-assigned-elements-CpgEA_Ma.js";import{D as u}from"./DataAriaLabelMixin-Bksih1qV.js";import{D as y}from"./DisabledMixin-CLyN7JwY.js";import{T as E}from"./index-DNnUPG5B.js";import{H as h,T as $}from"./optgroup.constants-ClCAcEV3.js";const v=n`
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
`,x=[v];var _=Object.defineProperty,m=(i,e,o,g)=>{for(var t=void 0,a=i.length-1,l;a>=0;a--)(l=i[a])&&(t=l(e,o,t)||t);return t&&_(e,o,t),t};const r=class r extends u(y(b)){setDisabledForAllOptions(){this.options.forEach(e=>{this.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}updated(e){super.updated(e),e.has("disabled")&&this.setDisabledForAllOptions()}render(){const e=this.label?d`
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
    `}};r.styles=[...b.styles,...x];let s=r;m([D({type:String,reflect:!0})],s.prototype,"label");m([T({selector:E})],s.prototype,"options");s.register($);
