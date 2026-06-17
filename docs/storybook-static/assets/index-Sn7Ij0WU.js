import{a4 as n,k as d,T as c,V as f,z as A,R as p,C as b,n as D}from"./iframe-rWdaJlOd.js";import{o as T}from"./query-assigned-elements-q-LPC9At.js";import{D as u}from"./DataAriaLabelMixin-DZP2SP9k.js";import{D as y}from"./DisabledMixin-BXKdzVeB.js";import{T as E}from"./index-CC1zv4Z0.js";import{H as m,T as $}from"./optgroup.constants-Djk4FJs0.js";const v=n`
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
`,x=[v];var _=Object.defineProperty,h=(i,e,o,g)=>{for(var t=void 0,a=i.length-1,l;a>=0;a--)(l=i[a])&&(t=l(e,o,t)||t);return t&&_(e,o,t),t};const r=class r extends u(y(b)){setDisabledForAllOptions(){this.options.forEach(e=>{this.disabled?e.setAttribute("disabled",""):e.removeAttribute("disabled")})}updated(e){super.updated(e),e.has("disabled")&&this.setDisabledForAllOptions()}render(){const e=this.label?d`
          <mdc-text
            id="${m}"
            part="header-text"
            type="${c.BODY_MIDSIZE_BOLD}"
            tagname="${f.SPAN}"
            >${this.label}</mdc-text
          >
        `:A;return d`
      <div
        role="${p.GROUP}"
        aria-labelledby="${this.label?m:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${e}
        <slot role="${p.PRESENTATION}"></slot>
      </div>
    `}};r.styles=[...b.styles,...x];let s=r;h([D({type:String,reflect:!0})],s.prototype,"label");h([T({selector:E})],s.prototype,"options");s.register($);
