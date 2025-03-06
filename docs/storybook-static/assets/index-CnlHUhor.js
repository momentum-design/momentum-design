import{i as l,k as p}from"./lit-element-CHllvULs.js";import{n as u,u as c}from"./index-HW6KrQZO.js";import{t as i}from"./if-defined-C4tJgJ33.js";import{a as h,A as d,D as f}from"./index-DT07Y2Os.js";import{I as b}from"./IconNameMixin-DXlfdGtk.js";import{D as v}from"./button.constants-BtWRRBoE.js";import{a as S}from"./buttonsimple.component-BPMM56DO.js";import{h as y,a as $}from"./index-BGjwsboe.js";const g=[y,l`
  :host {
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
  }
`,...$()];var A=Object.defineProperty,T=(o,t,n,E)=>{for(var s=void 0,r=o.length-1,m;r>=0;r--)(m=o[r])&&(s=m(t,n,s)||s);return s&&A(t,n,s),s};const a=class a extends h(b(S)){constructor(){super(),this.ariaLabel=null,this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=v.TYPE}update(t){super.update(t),t.has("size")&&this.setSize(this.size)}setSize(t){this.setAttribute("size",Object.values(d).includes(t)?`${t}`:f.SIZE.toString())}render(){return p`
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
    `}};a.styles=[...g];let e=a;T([u({type:String,attribute:"aria-label"})],e.prototype,"ariaLabel");const z=c.constructTagName("avatarbutton");e.register(z);
