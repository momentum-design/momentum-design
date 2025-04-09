import{i as l,k as m}from"./lit-element-D5KKan5q.js";import{n as p,u}from"./index-C9z9WAEj.js";import{t as i}from"./if-defined-D5BV9-c0.js";import{a as h,A as d,D as f}from"./index-DxNpnB7M.js";import{I as b}from"./IconNameMixin-CujGSn0t.js";import{D as v}from"./button.constants--xhTiFYY.js";import{a as S}from"./buttonsimple.component-Djhz-GfJ.js";import{a as g,h as y}from"./index-MA1r3zrt.js";const $=[g,l`
  :host {
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
  }
`,...y()];var A=Object.defineProperty,T=(o,t,n,E)=>{for(var s=void 0,a=o.length-1,c;a>=0;a--)(c=o[a])&&(s=c(t,n,s)||s);return s&&A(t,n,s),s};const r=class r extends h(b(S)){constructor(){super(...arguments),this.ariaLabel=null}connectedCallback(){super.connectedCallback(),this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=v.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(d).includes(t)?`${t}`:f.SIZE.toString())}render(){return m`
      <mdc-avatar
        slot="prefixIcon"
        ?is-typing="${this.isTyping}"
        counter="${i(this.counter)}"
        icon-name="${i(this.iconName)}"
        initials="${i(this.initials)}"
        presence="${i(this.presence)}"
        size="${i(this.size)}"
        src="${i(this.src)}"
      ></mdc-avatar>
    `}};r.styles=[...$];let e=r;T([p({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");const z=u.constructTagName("avatarbutton");e.register(z);
