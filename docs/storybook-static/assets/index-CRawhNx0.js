import{n as c}from"./index-C9z9WAEj.js";import{a as v,M as l}from"./menubar.component-D1Cp6oxe.js";import{O as p}from"./menubar.constants-Cq-jpWsM.js";import{p as u}from"./index-2PiEGcHV.js";import{S as h,T as f,b as g}from"./index-CYo7xlHa.js";import{i as N}from"./lit-element-D5KKan5q.js";import{T as b}from"./listitem.component-18vOGq9d.js";import"./index-BrLJ_9IK.js";import"./index-0qAI7wVm.js";import"./index-BmHe-T6f.js";const C=N`
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
`,A=[C];var x=Object.defineProperty,m=(o,t,e,i)=>{for(var a=void 0,r=o.length-1,d;r>=0;r--)(d=o[r])&&(a=d(t,e,a)||a);return a&&x(t,e,a),a};const n=class n extends v(l){constructor(){super(...arguments),this.ariaLabel=null,this.sideNavigationContext=u.consume({host:this,context:h.Context}),this.handleNestedNavItemActiveChange=t=>{var i;const e=this.findNav(this.navItems||[],t.detail.navId);(i=this.sideNavigationContext)!=null&&i.value&&this.sideNavigationContext.value.setCurrentActiveNavItem(e)},this.findNav=(t,e)=>t.find(i=>i.navId===e)}connectedCallback(){super.connectedCallback(),this.ariaOrientation=p.VERTICAL,this.addEventListener("activechange",this.handleNestedNavItemActiveChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("activechange",this.handleNestedNavItemActiveChange)}updated(){var i;const t=(i=this.sideNavigationContext)==null?void 0:i.value;if(!t)return;const{expanded:e}=t;this.showLabel=e}get navItems(){return Array.from(this.querySelectorAll(`${f}:not([disabled])`))}};n.styles=[...l.styles,...A];let s=n;m([c({type:Boolean,reflect:!0,attribute:"show-label"})],s.prototype,"showLabel");m([c({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel");s.register(b);h.register(g);
