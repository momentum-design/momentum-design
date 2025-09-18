import{i as l,k as d}from"./lit-element-D5KKan5q.js";import{n as v,u as p}from"./provider.component-BaQC7CJH.js";import{t as a}from"./if-defined-D5BV9-c0.js";import{a as u,A as m,D as h}from"./index-Bt73orpe.js";import{I as b}from"./IconNameMixin-CRlZlTtq.js";import{R as g}from"./roles-CJI3JVG-.js";import{D as y}from"./button.constants-B6suqA4v.js";import{B as f}from"./buttonsimple.component-CKyEWPbX.js";import{h as k,a as S}from"./index-CqVtAZCJ.js";const T=[k,l`
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
  `,...S()];var $=Object.defineProperty,z=(i,t,n,E)=>{for(var r=void 0,e=i.length-1,c;e>=0;e--)(c=i[e])&&(r=c(t,n,r)||r);return r&&$(t,n,r),r};const s=class s extends u(b(f)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role=g.BUTTON,this.type=y.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(m).includes(t)?`${t}`:h.SIZE.toString())}render(){return d`
      <div part="overlay" aria-hidden="true"></div>
      <mdc-avatar
        exportparts="content, photo, presence, loading-wrapper, loader"
        ?is-typing="${this.isTyping}"
        counter="${a(this.counter)}"
        icon-name="${a(this.iconName)}"
        initials="${a(this.initials)}"
        presence="${a(this.presence)}"
        size="${a(this.size)}"
        src="${a(this.src)}"
      ></mdc-avatar>
    `}};s.styles=[...T];let o=s;z([v({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");const A=p.constructTagName("avatarbutton");o.register(A);
