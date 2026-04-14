import{a2 as m,u as f,R as u,k as E,C as p,n as a}from"./iframe-BMQAO-1d.js";import{L as I}from"./ListNavigationMixin-DzKNxM46.js";import{T as g}from"./listitem.constants-UG_zo5pu.js";import{C as T,E as y}from"./CaptureDestroyEventForChildElement-aVAGlOWN.js";import{L as v}from"./LifeCycleMixin-CkFTW4AQ.js";import{A as O}from"./KeyDownHandledMixin-D5ID8XRZ.js";const L=m`
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
`,b=[L],w=f.constructTagName("list"),A={VERTICAL:"vertical",HORIZONTAL:"horizontal"},r={LOOP:"true",INITIAL_FOCUS:0,ORIENTATION:A.VERTICAL};var S=Object.defineProperty,l=(c,t,i,o)=>{for(var e=void 0,n=c.length-1,h;n>=0;n--)(h=c[n])&&(e=h(t,i,e)||e);return e&&S(t,i,e),e};const d=class d extends I(T(p)){constructor(){super(),this.loop=r.LOOP,this.initialFocus=r.INITIAL_FOCUS,this.orientation=r.ORIENTATION,this.focusWithin=!1,this.handleModifiedEvent=t=>{const i=t.target;switch(t.detail.change){case"enabled":this.itemsStore.add(i);break;case"disabled":this.itemsStore.delete(i);break}},this.addEventListener(v.MODIFIED,this.handleModifiedEvent),this.addEventListener("keydown",this.handleKeyDown),this.addEventListener("focusin",this.handleFocusEvent),this.addEventListener("focusout",this.handleFocusEvent),this.itemsStore=new y(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}connectedCallback(){super.connectedCallback(),this.role=u.LIST}get navItems(){return this.itemsStore.items}onElementStoreUpdate(t,i,o){if(i==="added")t.tabIndex=-1,this.navItems.length===0&&(t.tabIndex=0);else if(i==="removed"&&t.tabIndex===0){let e=o+1;e>=this.navItems.length&&(e=o-1),this.resetTabIndexes(e,this.focusWithin)}}handleKeyDown(t){this.getActionForKeyEvent(t)===O.SPACE&&this.navItems.find(o=>o===t.target)&&(this.keyDownEventHandled(),t.stopPropagation(),t.preventDefault())}handleFocusEvent(t){t.type==="focusout"&&t.relatedTarget===null||(this.focusWithin=t.type==="focusin")}isValidItem(t){return t.matches(`${g}:not([disabled])`)}render(){return E`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};d.styles=[...p.styles,...b];let s=d;l([a({type:String,reflect:!0})],s.prototype,"loop");l([a({type:Number,reflect:!0,attribute:"initial-focus"})],s.prototype,"initialFocus");l([a({type:String,reflect:!0})],s.prototype,"orientation");export{s as L,A as O,w as T};
