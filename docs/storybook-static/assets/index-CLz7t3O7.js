import{i as T,k as h,D as u}from"./lit-element-D5KKan5q.js";import{u as A,C as c,n as f}from"./index-C9z9WAEj.js";import{o as b}from"./query-assigned-elements-uEuc3rg8.js";import{D as p}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{T as m,a as y}from"./listitem.component-BQHoDai9.js";import{T as g,V as E}from"./text.constants-ZF0jM5wn.js";import{K as i}from"./keys-CuA-OPmH.js";import"./index-D3DhXfcW.js";const _=A.constructTagName("list"),x="header-id",v=T`
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
`,D=[v];var $=Object.defineProperty,I=(o,e,t,r)=>{for(var s=void 0,n=o.length-1,l;n>=0;n--)(l=o[n])&&(s=l(e,t,s)||s);return s&&$(e,t,s),s};const d=class d extends p(c){constructor(){super(),this.addEventListener("keydown",this.handleKeyDown)}handleKeyDown(e){var s;const t=this.getCurrentIndex(e.target),r=this.getNewIndexBasedOnKey(e.key,t,this.listItems.length);r!==void 0&&((s=this.listItems[r])==null||s.focus(),this.resetTabIndexAndSetActiveTabIndex(r))}getCurrentIndex(e){return this.listItems.findIndex(t=>t===e||t===e.parentElement)}getNewIndexBasedOnKey(e,t,r){switch(e){case i.ARROW_DOWN:return(t+1)%r;case i.ARROW_UP:return(t-1+r)%r;case i.HOME:return 0;case i.END:return r-1;default:return}}handleMouseClick(e){const t=this.getCurrentIndex(e.target);this.resetTabIndexAndSetActiveTabIndex(t)}resetTabIndexAndSetActiveTabIndex(e){this.listItems.forEach((t,r)=>{const s=e===r?"0":"-1";t==null||t.setAttribute("tabindex",s)})}firstUpdated(){this.resetTabIndexAndSetActiveTabIndex(0)}render(){const e=this.headerText?h`
      <mdc-text
        id="${x}"
        part="header-text"
        type="${g.BODY_MIDSIZE_BOLD}"
        tagname="${E.SPAN}"
      >${this.headerText}</mdc-text>
    `:u;return h`
      <div
        role="list"
        aria-labelledby="${this.headerText?x:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${e}
        <slot role="presentation" @click="${this.handleMouseClick}"></slot>
      </div>
    `}};d.styles=[...c.styles,...D];let a=d;I([b({selector:m})],a.prototype,"listItems");I([f({type:String,attribute:"header-text",reflect:!0})],a.prototype,"headerText");a.register(_);y.register(m);
