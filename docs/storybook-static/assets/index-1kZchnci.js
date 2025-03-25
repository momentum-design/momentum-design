import{i as A,k as h,D as T}from"./lit-element-D5KKan5q.js";import{u,C as c,n as b}from"./index-C9z9WAEj.js";import{o as f,T as m,a as p}from"./listitem.component-CNC5e_Ko.js";import{D as E}from"./DataAriaLabelMixin-D53Z5CZ7.js";import{T as y,V as _}from"./text.constants-ZF0jM5wn.js";import"./index-D3DhXfcW.js";const g=u.constructTagName("list"),a={ARROW_DOWN:"ArrowDown",ARROW_UP:"ArrowUp",HOME:"Home",END:"End"},x="header-id",D=A`
  :host::part(header-text) {
    padding: 0.5rem 0.75rem;
  }
`,O=[D];var v=Object.defineProperty,I=(o,e,t,r)=>{for(var s=void 0,i=o.length-1,l;i>=0;i--)(l=o[i])&&(s=l(e,t,s)||s);return s&&v(e,t,s),s};const d=class d extends E(c){constructor(){super(),this.addEventListener("keydown",this.handleKeyDown)}handleKeyDown(e){var s;const t=this.getCurrentIndex(e.target),r=this.getNewIndexBasedOnKey(e.key,t,this.listItems.length);r!==void 0&&((s=this.listItems[r])==null||s.focus(),this.resetTabIndexAndSetActiveTabIndex(r))}getCurrentIndex(e){return this.listItems.findIndex(t=>t===e||t===e.parentElement)}getNewIndexBasedOnKey(e,t,r){switch(e){case a.ARROW_DOWN:return(t+1)%r;case a.ARROW_UP:return(t-1+r)%r;case a.HOME:return 0;case a.END:return r-1;default:return}}handleMouseClick(e){const t=this.getCurrentIndex(e.target);this.resetTabIndexAndSetActiveTabIndex(t)}resetTabIndexAndSetActiveTabIndex(e){this.listItems.forEach((t,r)=>{const s=e===r?"0":"-1";t==null||t.setAttribute("tabindex",s)})}firstUpdated(){this.resetTabIndexAndSetActiveTabIndex(0)}render(){const e=this.headerText?h`
      <mdc-text
        id="${x}"
        part="header-text"
        type="${y.BODY_MIDSIZE_BOLD}"
        tagname="${_.SPAN}"
      >${this.headerText}</mdc-text>
    `:T;return h`
      <div
        role="list"
        aria-labelledby="${this.headerText?x:""}"
        aria-label="${this.dataAriaLabel??""}"
      >
        ${e}
        <slot role="presentation" @click="${this.handleMouseClick}"></slot>
      </div>
    `}};d.styles=[...c.styles,...O];let n=d;I([f({selector:m})],n.prototype,"listItems");I([b({type:String,attribute:"header-text",reflect:!0})],n.prototype,"headerText");n.register(g);p.register(m);
