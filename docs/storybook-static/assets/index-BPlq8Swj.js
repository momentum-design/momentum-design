import{S as p,u,W as f,k as E,E as d,n as h}from"./iframe-C04-hoFI.js";import{L as I}from"./ListNavigationMixin-BUTAPwCk.js";import{b,T as v}from"./listitem.component-Bn4MozIX.js";import{C as S,E as g}from"./CaptureDestroyEventForChildElement-SPIqaQ0R.js";const y=p`
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
`,L=[y],C=u.constructTagName("list"),c={LOOP:"true",INITIAL_FOCUS:0};var F=Object.defineProperty,m=(a,t,s,o)=>{for(var e=void 0,n=a.length-1,l;n>=0;n--)(l=a[n])&&(e=l(t,s,e)||e);return e&&F(t,s,e),e};const r=class r extends I(S(d)){constructor(){super(),this.loop=c.LOOP,this.initialFocus=c.INITIAL_FOCUS,this.focusWithin=!1,this.handleModifiedEvent=t=>{const s=t.target;switch(t.detail.change){case"enabled":this.itemsStore.add(s);break;case"disabled":this.itemsStore.delete(s);break}},this.addEventListener(b.MODIFIED,this.handleModifiedEvent),this.addEventListener("focusin",this.handleFocusEvent),this.addEventListener("focusout",this.handleFocusEvent),this.itemsStore=new g(this,{isValidItem:this.isValidItem,onStoreUpdate:this.onElementStoreUpdate.bind(this)})}connectedCallback(){super.connectedCallback(),this.role=f.LIST}get navItems(){return this.itemsStore.items}onElementStoreUpdate(t,s,o){if(s==="added")t.tabIndex=-1;else if(s==="removed"&&t.tabIndex===0){let e=o+1;e>=this.navItems.length&&(e=o-1),this.resetTabIndexes(e,this.focusWithin)}}handleFocusEvent(t){t.type==="focusout"&&t.relatedTarget===null||(this.focusWithin=t.type==="focusin")}isValidItem(t){return t.matches(`${v}:not([disabled])`)}render(){return E`
      <slot name="list-header"></slot>
      <!-- make the container slot role presentation to keep it ignored in a11y tree -->
      <slot part="container" role="presentation"></slot>
    `}};r.styles=[...d.styles,...L];let i=r;m([h({type:String,reflect:!0})],i.prototype,"loop");m([h({type:Number,reflect:!0,attribute:"initial-focus"})],i.prototype,"initialFocus");i.register(C);export{i as L};
