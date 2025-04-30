import{i as l,k as d}from"./lit-element-D5KKan5q.js";import{n as v,u}from"./index-C9z9WAEj.js";import{t as a}from"./if-defined-D5BV9-c0.js";import{a as h,A as m,D as p}from"./index-Bongvm-M.js";import{I as b}from"./IconNameMixin-CujGSn0t.js";import{D as g}from"./button.constants-5DPaNLmI.js";import{a as y}from"./buttonsimple.component-BXEhGPPe.js";import{a as f,h as k}from"./index-MA1r3zrt.js";const S=[f,l`
  :host {
    --mdc-avatarbutton-overlay-background-color-rest: var(--mds-color-theme-avatar-ghost);
    --mdc-avatarbutton-overlay-background-color-hover: var(--mds-color-theme-avatar-hover);
    --mdc-avatarbutton-overlay-background-color-active: var(--mds-color-theme-avatar-pressed);
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
    position: relative;
    cursor: pointer;
  }
  :host::part(overlay) {
    position: absolute;
    border-radius: 100vh;
    height: 100%;
    width: 100%;
    z-index: 1;
    background-color: var(--mdc-avatarbutton-overlay-background-color-rest);
  }
  :host(:not([is-typing]):hover)::part(overlay) {
    background-color: var(--mdc-avatarbutton-overlay-background-color-hover);
  }
  :host(:not([is-typing]):active)::part(overlay) {
    background-color: var(--mdc-avatarbutton-overlay-background-color-active);
  }
  :host::part(presence) {
    z-index: 2;
  }
`,...k()];var $=Object.defineProperty,z=(i,t,n,T)=>{for(var r=void 0,e=i.length-1,c;e>=0;e--)(c=i[e])&&(r=c(t,n,r)||r);return r&&$(t,n,r),r};const s=class s extends h(b(y)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=g.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(m).includes(t)?`${t}`:p.SIZE.toString())}render(){return d`
      <div part="overlay" aria-hidden="true"></div>
      <mdc-avatar
        ?is-typing="${this.isTyping}"
        counter="${a(this.counter)}"
        icon-name="${a(this.iconName)}"
        initials="${a(this.initials)}"
        presence="${a(this.presence)}"
        size="${a(this.size)}"
        src="${a(this.src)}"
      ></mdc-avatar>
    `}};s.styles=[...S];let o=s;z([v({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");const A=u.constructTagName("avatarbutton");o.register(A);
