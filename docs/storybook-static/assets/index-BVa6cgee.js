import{i as h,k as u}from"./lit-element-D5KKan5q.js";import{o as x}from"./query-assigned-elements-uEuc3rg8.js";import{C as c,u as I}from"./provider.component-DrWB4byV.js";import{K as r}from"./keys-hFXe221I.js";import{R as f}from"./roles-CJI3JVG-.js";import{T as m,a as p}from"./listitem.component-i7etquvF.js";import"./index-DeEenWCE.js";import"./index-DM9rY9pk.js";const b=h`
  :host {
    display: flex;
    flex-direction: column;
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
  }
`,A=[b];var y=Object.defineProperty,T=(l,t,e,s)=>{for(var n=void 0,a=l.length-1,d;a>=0;a--)(d=l[a])&&(n=d(t,e,n)||n);return n&&y(t,e,n),n};const o=class o extends c{constructor(){super(),this.addEventListener("keydown",this.handleKeyDown)}connectedCallback(){super.connectedCallback(),this.setAttribute("role",f.LIST)}handleKeyDown(t){var n;const e=this.getCurrentIndex(t.target),s=this.getNewIndexBasedOnKey(t.key,e,this.listItems.length);s!==void 0&&((n=this.listItems[s])==null||n.focus(),this.resetTabIndexAndSetActiveTabIndex(s))}getCurrentIndex(t){return this.listItems.findIndex(e=>e===t||e===t.parentElement)}getNewIndexBasedOnKey(t,e,s){switch(t){case r.ARROW_DOWN:return(e+1)%s;case r.ARROW_UP:return(e-1+s)%s;case r.HOME:return 0;case r.END:return s-1;default:return}}handleMouseClick(t){const e=this.getCurrentIndex(t.target);this.resetTabIndexAndSetActiveTabIndex(e)}resetTabIndexAndSetActiveTabIndex(t){this.listItems.forEach((e,s)=>{const n=t===s?"0":"-1";e==null||e.setAttribute("tabindex",n)})}firstUpdated(){this.resetTabIndexAndSetActiveTabIndex(0)}render(){return u`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" @click="${this.handleMouseClick}" role="presentation"></slot>
    `}};o.styles=[...c.styles,...A];let i=o;T([x({selector:`${m}:not([disabled])`})],i.prototype,"listItems");const g=I.constructTagName("list");i.register(g);p.register(m);
