import{n as c}from"./index-C9z9WAEj.js";import{i as v}from"./lit-element-D5KKan5q.js";import{a as p,O as u,M as l}from"./menubar.component-C67RkLrg.js";import{p as g}from"./index-2PiEGcHV.js";import{S as h,T as f,b as N}from"./index-B5n8cum7.js";import{T as b}from"./listitem.component-BrjALe5l.js";import"./index-D1yLszQ-.js";import"./index-DSWD7uho.js";import"./index-CWciZxqh.js";const C=v`
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
`,A=[C];var x=Object.defineProperty,m=(o,t,e,a)=>{for(var i=void 0,n=o.length-1,d;n>=0;n--)(d=o[n])&&(i=d(t,e,i)||i);return i&&x(t,e,i),i};const r=class r extends p(l){constructor(){super(...arguments),this.ariaLabel=null,this.sideNavigationContext=g.consume({host:this,context:h.Context}),this.handleNestedNavItemActiveChange=t=>{var a;const e=this.findNav(this.navItems||[],t.detail.navId);(a=this.sideNavigationContext)!=null&&a.value&&this.sideNavigationContext.value.setCurrentActiveNavItem(e)},this.findNav=(t,e)=>t.find(a=>a.navId===e)}connectedCallback(){super.connectedCallback(),this.ariaOrientation=u.VERTICAL,this.addEventListener("activechange",this.handleNestedNavItemActiveChange)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("activechange",this.handleNestedNavItemActiveChange)}updated(){var a;const t=(a=this.sideNavigationContext)==null?void 0:a.value;if(!t)return;const{expanded:e}=t;this.showLabel=e}get navItems(){return Array.from(this.querySelectorAll(`${f}:not([disabled])`))}};r.styles=[...l.styles,...A];let s=r;m([c({type:Boolean,reflect:!0,attribute:"show-label"})],s.prototype,"showLabel");m([c({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel");s.register(b);h.register(N);
