import{i as u,k as E}from"./lit-element-D5KKan5q.js";import{u as f,C as d,n as p}from"./provider.component-BaQC7CJH.js";import{R as I}from"./roles-CJI3JVG-.js";import{L as v}from"./ListNavigationMixin-DgCStHq0.js";import{b as m,T as y}from"./listitem.component-Cy9hWtov.js";import{C,E as g}from"./CaptureDestroyEventForChildElement-qq7X9vNO.js";const b=u`
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
`,x=[b],L=f.constructTagName("list"),c={LOOP:"true",INITIAL_FOCUS:0};var T=Object.defineProperty,h=(a,s,e,n)=>{for(var t=void 0,r=a.length-1,l;r>=0;r--)(l=a[r])&&(t=l(s,e,t)||t);return t&&T(s,e,t),t};const o=class o extends v(C(d)){constructor(){super(),this.loop=c.LOOP,this.initialFocus=c.INITIAL_FOCUS,this.handleCreatedEvent=s=>{const e=s.target;this.isValidItem(e)&&(e.tabIndex=-1)},this.handleDestroyEvent=s=>{const e=s.target;if(!this.isValidItem(e)||e.tabIndex!==0)return;const n=this.navItems.findIndex(r=>r===e);if(n===-1)return;let t=n+1;t>=this.navItems.length&&(t=n-1),this.resetTabIndexes(t)},this.addEventListener(m.CREATED,this.handleCreatedEvent),this.addEventListener(m.DESTROYED,this.handleDestroyEvent),this.itemsStore=new g(this,{isValidItem:this.isValidItem})}connectedCallback(){super.connectedCallback(),this.setAttribute("role",I.LIST)}get navItems(){return this.itemsStore.items}isValidItem(s){return s.matches(`${y}:not([disabled])`)}render(){return E`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};o.styles=[...d.styles,...x];let i=o;h([p({type:String,reflect:!0})],i.prototype,"loop");h([p({type:Number,reflect:!0,attribute:"initial-focus"})],i.prototype,"initialFocus");i.register(L);export{i as L};
