import{i as E,u,k as I,C as m,n as h}from"./iframe-CAPDL6NR.js";import{R as f}from"./roles-CJI3JVG-.js";import{L as v}from"./ListNavigationMixin-DgCStHq0.js";import{b as o,T as b}from"./listitem.component-BRu3j3sB.js";import{C as g,E as y}from"./CaptureDestroyEventForChildElement-gtjO_jBn.js";const C=E`
  :host {
    display: flex;
    flex-direction: column;
    scroll-padding-top: 0.25rem;
    scroll-padding-bottom: 0.25rem;
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    scroll-padding-top: 0.25rem;
    scroll-padding-bottom: 0.25rem;
  }
`,x=[C],L=u.constructTagName("list"),c={LOOP:"true",INITIAL_FOCUS:0};var S=Object.defineProperty,p=(l,e,t,n)=>{for(var s=void 0,i=l.length-1,d;i>=0;i--)(d=l[i])&&(s=d(e,t,s)||s);return s&&S(e,t,s),s};const a=class a extends v(g(m)){constructor(){super(),this.loop=c.LOOP,this.initialFocus=c.INITIAL_FOCUS,this.handleCreatedEvent=e=>{const t=e.target;this.isValidItem(t)&&(t.tabIndex=-1)},this.handleDestroyEvent=e=>{const t=e.target;if(!this.isValidItem(t)||t.tabIndex!==0)return;const n=this.navItems.findIndex(i=>i===t);if(n===-1)return;let s=n+1;s>=this.navItems.length&&(s=n-1),this.resetTabIndexes(s)},this.handleModifiedEvent=e=>{const t=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(t);break;case"disabled":this.itemsStore.delete(t);break}},this.addEventListener(o.CREATED,this.handleCreatedEvent),this.addEventListener(o.MODIFIED,this.handleModifiedEvent),this.addEventListener(o.DESTROYED,this.handleDestroyEvent),this.itemsStore=new y(this,{isValidItem:this.isValidItem})}connectedCallback(){super.connectedCallback(),this.setAttribute("role",f.LIST)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${b}:not([disabled])`)}render(){return I`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};a.styles=[...m.styles,...x];let r=a;p([h({type:String,reflect:!0})],r.prototype,"loop");p([h({type:Number,reflect:!0,attribute:"initial-focus"})],r.prototype,"initialFocus");r.register(L);export{r as L};
