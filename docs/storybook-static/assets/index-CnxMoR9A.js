import{u as m,S as c,k as l,q as f,V as u,h as A,W as p,E as n,n as D}from"./iframe-D498-k7l.js";import{o as E}from"./query-assigned-elements-uEuc3rg8.js";import{D as T}from"./DataAriaLabelMixin-BVzmE9fW.js";import{D as x}from"./DisabledMixin-CZU7sAIv.js";import{T as y}from"./index-dU5o-V6e.js";const $=m.constructTagName("optgroup"),h="header-id",v=c`
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
`,_=[v];var g=Object.defineProperty,b=(o,t,i,N)=>{for(var e=void 0,a=o.length-1,d;a>=0;a--)(d=o[a])&&(e=d(t,i,e)||e);return e&&g(t,i,e),e};const r=class r extends T(x(n)){setDisabledForAllOptions(){this.options.forEach(t=>{this.disabled?t.setAttribute("disabled",""):t.removeAttribute("disabled")})}updated(t){super.updated(t),t.has("disabled")&&this.setDisabledForAllOptions()}render(){const t=this.label?l`
          <mdc-text
            id="${h}"
            part="header-text"
            type="${f.BODY_MIDSIZE_BOLD}"
            tagname="${u.SPAN}"
            >${this.label}</mdc-text
          >
        `:A;return l`
      <div
        role="${p.GROUP}"
        aria-labelledby="${this.label?h:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${t}
        <slot role="${p.PRESENTATION}"></slot>
      </div>
    `}};r.styles=[...n.styles,..._];let s=r;b([D({type:String,reflect:!0})],s.prototype,"label");b([E({selector:y})],s.prototype,"options");s.register($);export{$ as T};
