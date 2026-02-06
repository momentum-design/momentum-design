import{$ as s,X as l,a0 as v,R as u,a2 as m,k as b,n as g,u as h}from"./iframe-CDUGfpod.js";import{t as r}from"./if-defined-4tR0mpEg.js";import{a as p,A as y,D as f}from"./index-Cp0QNLJu.js";import{I as k}from"./IconNameMixin-cy8isjlW.js";import{B as S}from"./buttonsimple.component-DX6DqyQO.js";const $=[s,l`
    :host {
      --mdc-avatarbutton-overlay-background-color-rest: var(--mds-color-theme-avatar-ghost);
      --mdc-avatarbutton-overlay-background-color-hover: var(--mds-color-theme-avatar-hover);
      --mdc-avatarbutton-overlay-background-color-active: var(--mds-color-theme-avatar-pressed);

      --mdc-avatarbutton-default-background-color: var(--mds-color-theme-avatar-default);
      --mdc-avatarbutton-default-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatarbutton-loading-indicator-background-color: var(--mds-color-theme-common-text-primary-disabled);
      --mdc-avatarbutton-loading-indicator-foreground-color: var(--mds-color-theme-common-text-primary-normal);
      --mdc-avatarbutton-loading-overlay-background-color: var(--mds-color-theme-common-overlays-secondary-normal);
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
    mdc-avatar {
      --mdc-avatar-default-background-color: var(--mdc-avatarbutton-default-background-color);
      --mdc-avatar-default-foreground-color: var(--mdc-avatarbutton-default-foreground-color);
      --mdc-avatar-loading-indicator-background-color: var(--mdc-avatarbutton-loading-indicator-background-color);
      --mdc-avatar-loading-indicator-foreground-color: var(--mdc-avatarbutton-loading-indicator-foreground-color);
      --mdc-avatar-loading-overlay-background-color: var(--mdc-avatarbutton-loading-overlay-background-color);
    }
  `,...v()];var T=Object.defineProperty,x=(i,a,c,z)=>{for(var o=void 0,e=i.length-1,d;e>=0;e--)(d=i[e])&&(o=d(a,c,o)||o);return o&&T(a,c,o),o};const n=class n extends p(k(S)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role=u.BUTTON,this.type=m.TYPE}update(a){super.update(a),a.has("size")&&this.setSize(this.size)}setSize(a){this.setAttribute("size",Object.values(y).includes(a)?`${a}`:f.SIZE.toString())}render(){return b`
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
    `}};n.styles=[...$];let t=n;x([g({type:String,attribute:"aria-label"})],t.prototype,"ariaLabel");const A=h.constructTagName("avatarbutton");t.register(A);
