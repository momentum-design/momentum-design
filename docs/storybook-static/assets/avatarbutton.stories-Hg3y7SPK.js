import{i as h,k as d}from"./lit-element-CHllvULs.js";import{n as v,u as f}from"./index-HW6KrQZO.js";import{t}from"./if-defined-C4tJgJ33.js";import{a as y,A as b,D as $}from"./index-DBvNrUbO.js";import{D as g}from"./button.constants-CA1KPfWk.js";import{B as x}from"./index-CkJK-IP5.js";import{h as A,a as T}from"./index-CcvxQn6k.js";import{T as z}from"./index-CuV6gmVf.js";import{c as S,s as E}from"./commonArgTypes-BluK8w5L.js";import{h as D}from"./utils-C8za8dl6.js";import"./state-CWckTc1X.js";import"./text.constants-DJu2q-6E.js";import"./index-DsezohW9.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./index-DcQ7scWP.js";import"./buttonsimple.constants-5FOanXlE.js";const _=[A,h`
  :host {
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
  }
`,T];var C=Object.defineProperty,O=(e,s,c,I)=>{for(var i=void 0,r=e.length-1,p;r>=0;r--)(p=e[r])&&(i=p(s,c,i)||i);return i&&C(s,c,i),i};const n=class n extends y(x){constructor(){super(),this.ariaLabel=null,this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=g.TYPE}update(s){super.update(s),s.has("size")&&this.setSize(this.size)}setSize(s){this.setAttribute("size",Object.values(b).includes(s)?`${s}`:$.SIZE.toString())}render(){return d`
      <mdc-avatar
        slot="prefixIcon"
        ?is-typing="${this.isTyping}"
        counter="${t(this.counter)}"
        icon-name="${t(this.iconName)}"
        initials="${t(this.initials)}"
        presence="${t(this.presence)}"
        size="${t(this.size)}"
        src="${t(this.src)}"
      ></mdc-avatar>
    `}};n.styles=[..._];let a=n;O([v({type:String,attribute:"aria-label"})],a.prototype,"ariaLabel");const j=f.constructTagName("avatarbutton");a.register(j);const F=e=>d`
  <mdc-avatarbutton
    counter="${t(e.counter)}"
    icon-name="${t(e["icon-name"])}"
    initials="${t(e.initials)}"
    presence="${t(e.presence)}"
    size="${t(e.size)}"
    src="${t(e.src)}"
    ?is-typing="${e["is-typing"]}"
    aria-label=${e["aria-label"]}
  ></mdc-avatarbutton>
`,W={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:F,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(z)},size:{control:"select",options:Object.values(b)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},...D(["active","disabled","soft-disabled","tabIndex","role","type"]),...S,...E}},o={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var l,m,u;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const X=["Example"];export{o as Example,X as __namedExportsOrder,W as default};
