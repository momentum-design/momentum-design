import{i as l,k as d}from"./lit-element-D5KKan5q.js";import{n as v,u}from"./index-C9z9WAEj.js";import{t as a}from"./if-defined-D5BV9-c0.js";import{a as m,A as h,D as p}from"./index-Bih5olPh.js";import{I as b}from"./IconNameMixin-CujGSn0t.js";import{R as g}from"./roles-BH_hBfTz.js";import{D as y}from"./button.constants-D0QAbDxL.js";import{B as f}from"./buttonsimple.component-UuTVCePh.js";import{a as k,h as S}from"./index-MA1r3zrt.js";const T=[k,l`
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
`,...S()];var $=Object.defineProperty,z=(i,t,n,E)=>{for(var r=void 0,e=i.length-1,c;e>=0;e--)(c=i[e])&&(r=c(t,n,r)||r);return r&&$(t,n,r),r};const s=class s extends m(b(f)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role=g.BUTTON,this.type=y.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(h).includes(t)?`${t}`:p.SIZE.toString())}render(){return d`
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
    `}};s.styles=[...T];let o=s;z([v({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");const A=u.constructTagName("avatarbutton");o.register(A);
