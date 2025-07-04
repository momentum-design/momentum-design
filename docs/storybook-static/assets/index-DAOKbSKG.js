import{n as c}from"./index-C9z9WAEj.js";import{M as l}from"./menubar.component-uIUWWyzt.js";import{p as v}from"./index-2PiEGcHV.js";import{S as h,T as p,b as u}from"./index-cL2QOGhc.js";import{i as g}from"./lit-element-D5KKan5q.js";import{T as f}from"./listitem.component-Bh3_BYs0.js";import"./index-BrLJ_9IK.js";import"./index-C-R8YPZ6.js";import"./index-BmHe-T6f.js";const b=g`
  :host {
    gap: 0.25rem;
  }

  :host(:not([show-label])) ::slotted(mdc-text) {
    display: none;
  }

  :host(:dir(ltr)) ::slotted(mdc-text) {
    padding-left: 1.75rem;
  }

  :host(:dir(rtl)) ::slotted(mdc-text) {
    padding-right: 1.75rem;
  }

  ::slotted(mdc-divider) {
    margin: 0.75rem 0;
  }
`,N=[b];var C=Object.defineProperty,m=(o,t,e,a)=>{for(var i=void 0,r=o.length-1,d;r>=0;r--)(d=o[r])&&(i=d(t,e,i)||i);return i&&C(t,e,i),i};const n=class n extends l{constructor(){super(...arguments),this.ariaLabel=null,this.sideNavigationContext=v.consume({host:this,context:h.Context}),this.handleNestedNavItemActiveChange=t=>{var a;const e=this.findNav(this.navItems||[],t.detail.navId);(a=this.sideNavigationContext)!=null&&a.value&&this.sideNavigationContext.value.setCurrentActiveNavItem(e)},this.findNav=(t,e)=>t.find(a=>a.navId===e)}connectedCallback(){super.connectedCallback(),this.addEventListener("activechange",this.handleNestedNavItemActiveChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("activechange",this.handleNestedNavItemActiveChange)}updated(){var a;const t=(a=this.sideNavigationContext)==null?void 0:a.value;if(!t)return;const{expanded:e}=t;this.showLabel=e}get navItems(){return Array.from(this.querySelectorAll(`${p}:not([disabled])`))}};n.styles=[...l.styles,...N];let s=n;m([c({type:Boolean,reflect:!0,attribute:"show-label"})],s.prototype,"showLabel");m([c({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel");s.register(f);h.register(u);
