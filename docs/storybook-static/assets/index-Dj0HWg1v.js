import{i as l,k as d}from"./lit-element-D5KKan5q.js";import{n as v}from"./property-Bj3TGwkg.js";import{t as a}from"./if-defined-D5BV9-c0.js";import{a as p,A as u,D as m}from"./index-JaoVlY5n.js";import{I as h}from"./IconNameMixin-Bk-Z_FTS.js";import{R as b}from"./roles-CJI3JVG-.js";import{D as g}from"./button.constants-BBlkZKjZ.js";import{B as y}from"./buttonsimple.component-1GEifFmP.js";import{h as f,a as k}from"./index-CqVtAZCJ.js";import{u as S}from"./provider.component-DrWB4byV.js";const T=[f,l`
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
  `,...k()];var $=Object.defineProperty,z=(i,t,n,E)=>{for(var r=void 0,e=i.length-1,c;e>=0;e--)(c=i[e])&&(r=c(t,n,r)||r);return r&&$(t,n,r),r};const s=class s extends p(h(y)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role=b.BUTTON,this.type=g.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(u).includes(t)?`${t}`:m.SIZE.toString())}render(){return d`
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
    `}};s.styles=[...T];let o=s;z([v({type:String,attribute:"aria-label"})],o.prototype,"ariaLabel");const A=S.constructTagName("avatarbutton");o.register(A);
