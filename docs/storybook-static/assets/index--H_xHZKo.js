import{i as T,k as h,D as u}from"./lit-element-D5KKan5q.js";import{u as A,C as c,n as b}from"./index-C9z9WAEj.js";import{o as f}from"./query-assigned-elements-uEuc3rg8.js";import{K as i}from"./keys-CuA-OPmH.js";import{D as p}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{R as y}from"./roles-DCpIf2k8.js";import{b as x,a as E}from"./listitem.component-C6iupxrL.js";import{T as g,V as _}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";const $=A.constructTagName("list"),m="header-id",v=T`
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
`,D=[v];var O=Object.defineProperty,I=(o,e,t,s)=>{for(var r=void 0,n=o.length-1,l;n>=0;n--)(l=o[n])&&(r=l(e,t,r)||r);return r&&O(e,t,r),r};const d=class d extends p(c){constructor(){super(),this.dataRole=y.LIST,this.addEventListener("keydown",this.handleKeyDown)}handleKeyDown(e){var r;const t=this.getCurrentIndex(e.target),s=this.getNewIndexBasedOnKey(e.key,t,this.listItems.length);s!==void 0&&((r=this.listItems[s])==null||r.focus(),this.resetTabIndexAndSetActiveTabIndex(s))}getCurrentIndex(e){return this.listItems.findIndex(t=>t===e||t===e.parentElement)}getNewIndexBasedOnKey(e,t,s){switch(e){case i.ARROW_DOWN:return(t+1)%s;case i.ARROW_UP:return(t-1+s)%s;case i.HOME:return 0;case i.END:return s-1;default:return}}handleMouseClick(e){const t=this.getCurrentIndex(e.target);this.resetTabIndexAndSetActiveTabIndex(t)}resetTabIndexAndSetActiveTabIndex(e){this.listItems.forEach((t,s)=>{const r=e===s?"0":"-1";t==null||t.setAttribute("tabindex",r)})}firstUpdated(){this.resetTabIndexAndSetActiveTabIndex(0)}render(){const e=this.headerText?h`
      <mdc-text
        id="${m}"
        part="header-text"
        type="${g.BODY_MIDSIZE_BOLD}"
        tagname="${_.SPAN}"
      >${this.headerText}</mdc-text>
    `:u;return h`
      <div
        role="${this.dataRole}"
        aria-labelledby="${this.headerText?m:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${e}
        <slot role="presentation" @click="${this.handleMouseClick}"></slot>
      </div>
    `}};d.styles=[...c.styles,...D];let a=d;I([f({selector:`${x}:not([disabled])`})],a.prototype,"listItems");I([b({type:String,attribute:"header-text",reflect:!0})],a.prototype,"headerText");a.register($);E.register(x);
