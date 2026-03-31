import{a2 as m,u as f,R as u,k as I,C as p,n as a}from"./iframe-CoZufWyv.js";import{L as E}from"./ListNavigationMixin-BJFyfjbL.js";import{T as g}from"./listitem.constants-RV7P9Fxe.js";import{C as T,E as O}from"./CaptureDestroyEventForChildElement-DR5l64Pc.js";import{L as b}from"./LifeCycleMixin-CkFTW4AQ.js";const v=m`
  :host {
    display: flex;
    flex-direction: column;
    scroll-padding-top: 0.25rem;
    scroll-padding-bottom: 0.25rem;
  }

  :host([orientation='horizontal']) {
    scroll-padding-left: 0.25rem;
    scroll-padding-right: 0.25rem;
  }

  :host::part(container) {
    display: flex;
    flex-direction: column;
    gap: 0rem;
    scroll-padding-top: 0.25rem;
    scroll-padding-bottom: 0.25rem;
  }

  :host([orientation='horizontal'])::part(container) {
    flex-direction: row;
    scroll-padding-left: 0.25rem;
    scroll-padding-right: 0.25rem;
  }
`,L=[v],_=f.constructTagName("list"),y={VERTICAL:"vertical",HORIZONTAL:"horizontal"},n={LOOP:"true",INITIAL_FOCUS:0,ORIENTATION:y.VERTICAL};var N=Object.defineProperty,l=(c,t,i,o)=>{for(var e=void 0,r=c.length-1,h;r>=0;r--)(h=c[r])&&(e=h(t,i,e)||e);return e&&N(t,i,e),e};const d=class d extends E(T(p)){constructor(){super(),this.loop=n.LOOP,this.initialFocus=n.INITIAL_FOCUS,this.orientation=n.ORIENTATION,this.focusWithin=!1,this.handleModifiedEvent=t=>{const i=t.target;switch(t.detail.change){case"enabled":this.itemsStore.add(i);break;case"disabled":this.itemsStore.delete(i);break}},this.addEventListener(b.MODIFIED,this.handleModifiedEvent),this.addEventListener("focusin",this.handleFocusEvent),this.addEventListener("focusout",this.handleFocusEvent),this.itemsStore=new O(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}connectedCallback(){super.connectedCallback(),this.role=u.LIST}get navItems(){return this.itemsStore.items}onElementStoreUpdate(t,i,o){if(i==="added")t.tabIndex=-1,this.navItems.length===0&&(t.tabIndex=0);else if(i==="removed"&&t.tabIndex===0){let e=o+1;e>=this.navItems.length&&(e=o-1),this.resetTabIndexes(e,this.focusWithin)}}handleFocusEvent(t){t.type==="focusout"&&t.relatedTarget===null||(this.focusWithin=t.type==="focusin")}isValidItem(t){return t.matches(`${g}:not([disabled])`)}render(){return I`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};d.styles=[...p.styles,...L];let s=d;l([a({type:String,reflect:!0})],s.prototype,"loop");l([a({type:Number,reflect:!0,attribute:"initial-focus"})],s.prototype,"initialFocus");l([a({type:String,reflect:!0})],s.prototype,"orientation");export{s as L,y as O,_ as T};
