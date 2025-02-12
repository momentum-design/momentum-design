import{i as f,k as b}from"./lit-element-CHllvULs.js";import{n as y,u as v}from"./index-HW6KrQZO.js";import{t}from"./if-defined-C4tJgJ33.js";import{a as $,A as h,D as g}from"./index-DfO6ixZl.js";import{I as x}from"./IconNameMixin-DXlfdGtk.js";import{D as A}from"./button.constants-CjxsrM-Y.js";import{B as T}from"./buttonsimple.component-DVyOksUm.js";import{h as z,a as S}from"./index-MYSkQ1zX.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{T as E}from"./index-D5OaWXvT.js";import{c as k,s as D}from"./commonArgTypes-BluK8w5L.js";import{h as _}from"./utils-D1SE5bce.js";import"./state-CWckTc1X.js";import"./text.constants-DJu2q-6E.js";import"./index-BnIP7Wfy.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-BFc9mT2k.js";import"./create-context-89xeped_.js";import"./index-BGkqZMsC.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./DisabledMixin-DBt9didn.js";import"./v4-CQkTLCs1.js";const I=[z,f`
  :host {
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
  }
`,...S()];var C=Object.defineProperty,M=(e,i,p,F)=>{for(var s=void 0,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=l(i,p,s)||s);return s&&C(i,p,s),s};const c=class c extends $(x(T)){constructor(){super(),this.ariaLabel=null,this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=A.TYPE}update(i){super.update(i),i.has("size")&&this.setSize(this.size)}setSize(i){this.setAttribute("size",Object.values(h).includes(i)?`${i}`:g.SIZE.toString())}render(){return b`
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
    `}};c.styles=[...I];let r=c;M([y({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");const O=v.constructTagName("avatarbutton");r.register(O);const j=e=>b`
  <mdc-avatarbutton
    @click="${o("onclick")}"
    @keydown="${o("onkeydown")}"
    @keyup="${o("onkeyup")}"
    @focus="${o("onfocus")}"
    counter="${t(e.counter)}"
    icon-name="${t(e["icon-name"])}"
    initials="${t(e.initials)}"
    presence="${t(e.presence)}"
    size="${t(e.size)}"
    src="${t(e.src)}"
    ?is-typing="${e["is-typing"]}"
    aria-label=${e["aria-label"]}
  ></mdc-avatarbutton>
`,ot={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:j,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(E)},size:{control:"select",options:Object.values(h)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},..._(["active","disabled","soft-disabled","tabIndex","role","type"]),...k,...D}},a={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const at=["Example"];export{a as Example,at as __namedExportsOrder,ot as default};
