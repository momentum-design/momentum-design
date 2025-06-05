import{i as I,k as h,D as T}from"./lit-element-D5KKan5q.js";import{u,C as c,n as A}from"./index-C9z9WAEj.js";import{o as b}from"./query-assigned-elements-uEuc3rg8.js";import{K as a,T as f}from"./listitem.component-PsU6agzW.js";import{D as p}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{R as y}from"./roles-DMFGbP5t.js";import{T as E,V as _}from"./index-D1yLszQ-.js";const w=u.constructTagName("list"),x="header-id",$=I`
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
`,g=[$];var v=Object.defineProperty,m=(o,e,t,s)=>{for(var r=void 0,i=o.length-1,l;i>=0;i--)(l=o[i])&&(r=l(e,t,r)||r);return r&&v(e,t,r),r};const d=class d extends p(c){constructor(){super(),this.dataRole=y.LIST,this.addEventListener("keydown",this.handleKeyDown)}handleKeyDown(e){var r;const t=this.getCurrentIndex(e.target),s=this.getNewIndexBasedOnKey(e.key,t,this.listItems.length);s!==void 0&&((r=this.listItems[s])==null||r.focus(),this.resetTabIndexAndSetActiveTabIndex(s))}getCurrentIndex(e){return this.listItems.findIndex(t=>t===e||t===e.parentElement)}getNewIndexBasedOnKey(e,t,s){switch(e){case a.ARROW_DOWN:return(t+1)%s;case a.ARROW_UP:return(t-1+s)%s;case a.HOME:return 0;case a.END:return s-1;default:return}}handleMouseClick(e){const t=this.getCurrentIndex(e.target);this.resetTabIndexAndSetActiveTabIndex(t)}resetTabIndexAndSetActiveTabIndex(e){this.listItems.forEach((t,s)=>{const r=e===s?"0":"-1";t==null||t.setAttribute("tabindex",r)})}firstUpdated(){this.resetTabIndexAndSetActiveTabIndex(0)}render(){const e=this.headerText?h`
      <mdc-text
        id="${x}"
        part="header-text"
        type="${E.BODY_MIDSIZE_BOLD}"
        tagname="${_.SPAN}"
      >${this.headerText}</mdc-text>
    `:T;return h`
      <div
        role="${this.dataRole}"
        aria-labelledby="${this.headerText?x:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${e}
        <slot role="presentation" @click="${this.handleMouseClick}"></slot>
      </div>
    `}};d.styles=[...c.styles,...g];let n=d;m([b({selector:`${f}:not([disabled])`})],n.prototype,"listItems");m([A({type:String,attribute:"header-text",reflect:!0})],n.prototype,"headerText");export{n as L,w as T};
