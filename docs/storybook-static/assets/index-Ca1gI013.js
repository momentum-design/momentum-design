import{W as l,U as d,X as v,R as u,a0 as p,k as h,n as m,u as b}from"./iframe-DqI8R0T6.js";import{t as r}from"./if-defined-1FKA9-0t.js";import{a as g,A as y,D as k}from"./index-DJU-TrtA.js";import{I as f}from"./IconNameMixin--8ZKzNYl.js";import{B as S}from"./buttonsimple.component-Dx5XsFID.js";const T=[l,d`
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
  `,...v()];var $=Object.defineProperty,z=(i,t,n,E)=>{for(var a=void 0,o=i.length-1,c;o>=0;o--)(c=i[o])&&(a=c(t,n,a)||a);return a&&$(t,n,a),a};const s=class s extends g(f(S)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role=u.BUTTON,this.type=p.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(y).includes(t)?`${t}`:k.SIZE.toString())}render(){return h`
      <div part="overlay" aria-hidden="true"></div>
      <mdc-avatar
        exportparts="content, photo, presence, loading-wrapper, loader"
        ?is-typing="${this.isTyping}"
        counter="${r(this.counter)}"
        icon-name="${r(this.iconName)}"
        initials="${r(this.initials)}"
        presence="${r(this.presence)}"
        size="${r(this.size)}"
        src="${r(this.src)}"
      ></mdc-avatar>
    `}};s.styles=[...T];let e=s;z([m({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");const A=b.constructTagName("avatarbutton");e.register(A);
