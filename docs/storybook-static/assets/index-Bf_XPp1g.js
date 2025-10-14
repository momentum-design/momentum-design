import{S as E,u,W as I,k as f,E as c,n as h}from"./iframe-DmLJKHqi.js";import{L as v}from"./ListNavigationMixin-DuNaxkxz.js";import{b as a,T as b}from"./listitem.component-BSEqzFJb.js";import{C as g,E as y}from"./CaptureDestroyEventForChildElement-Dz9WDvZM.js";const C=E`
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
`,x=[C],L=u.constructTagName("list"),m={LOOP:"true",INITIAL_FOCUS:0};var S=Object.defineProperty,p=(l,e,t,n)=>{for(var s=void 0,i=l.length-1,d;i>=0;i--)(d=l[i])&&(s=d(e,t,s)||s);return s&&S(e,t,s),s};const o=class o extends v(g(c)){constructor(){super(),this.loop=m.LOOP,this.initialFocus=m.INITIAL_FOCUS,this.handleCreatedEvent=e=>{const t=e.target;this.isValidItem(t)&&(t.tabIndex=-1)},this.handleDestroyEvent=e=>{const t=e.detail.originalTarget;if(!this.isValidItem(t)||t.tabIndex!==0)return;const n=this.navItems.findIndex(i=>i===t);if(n===-1)return;let s=n+1;s>=this.navItems.length&&(s=n-1),this.resetTabIndexes(s)},this.handleModifiedEvent=e=>{const t=e.target;switch(e.detail.change){case"enabled":this.itemsStore.add(t);break;case"disabled":this.itemsStore.delete(t);break}},this.addEventListener(a.CREATED,this.handleCreatedEvent),this.addEventListener(a.MODIFIED,this.handleModifiedEvent),this.addEventListener(a.DESTROYED,this.handleDestroyEvent),this.itemsStore=new y(this,{isValidItem:this.isValidItem})}connectedCallback(){super.connectedCallback(),this.setAttribute("role",I.LIST)}get navItems(){return this.itemsStore.items}isValidItem(e){return e.matches(`${b}:not([disabled])`)}render(){return f`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};o.styles=[...c.styles,...x];let r=o;p([h({type:String,reflect:!0})],r.prototype,"loop");p([h({type:Number,reflect:!0,attribute:"initial-focus"})],r.prototype,"initialFocus");r.register(L);export{r as L};
