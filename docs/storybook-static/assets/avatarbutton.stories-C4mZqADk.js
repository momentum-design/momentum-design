import{i as y,k as b}from"./lit-element-CHllvULs.js";import{n as f,u as v}from"./index-HW6KrQZO.js";import{t}from"./if-defined-C4tJgJ33.js";import{a as $,A as h,D as g}from"./index-tWnfLGx3.js";import{D as x}from"./button.constants-CA1KPfWk.js";import{B as A,a as o}from"./chunk-D5ZWXAHU-CgQFgVhR.js";import{h as T,a as z}from"./index-BW6Y21yA.js";import{T as S}from"./index-CZWhBZaO.js";import{c as E,s as D}from"./commonArgTypes-BluK8w5L.js";import{h as _}from"./utils-C8za8dl6.js";import"./state-CWckTc1X.js";import"./text.constants-DJu2q-6E.js";import"./index-CsrlL5z4.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./index-DcQ7scWP.js";import"./buttonsimple.constants-5FOanXlE.js";import"./v4-CQkTLCs1.js";const k=[T,y`
  :host {
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
  }
`,...z()];var C=Object.defineProperty,F=(e,s,p,I)=>{for(var i=void 0,n=e.length-1,l;n>=0;n--)(l=e[n])&&(i=l(s,p,i)||i);return i&&C(s,p,i),i};const c=class c extends $(A){constructor(){super(),this.ariaLabel=null,this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=x.TYPE}update(s){super.update(s),s.has("size")&&this.setSize(this.size)}setSize(s){this.setAttribute("size",Object.values(h).includes(s)?`${s}`:g.SIZE.toString())}render(){return b`
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
    `}};c.styles=[...k];let r=c;F([f({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");const O=v.constructTagName("avatarbutton");r.register(O);const j=e=>b`
  <mdc-avatarbutton
    @click="${o("onClick")}"
    @keydown="${o("onKeyDown")}"
    @keyup="${o("onKeyUp")}"
    @focus="${o("onFocus")}"
    counter="${t(e.counter)}"
    icon-name="${t(e["icon-name"])}"
    initials="${t(e.initials)}"
    presence="${t(e.presence)}"
    size="${t(e.size)}"
    src="${t(e.src)}"
    ?is-typing="${e["is-typing"]}"
    aria-label=${e["aria-label"]}
  ></mdc-avatarbutton>
`,tt={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:j,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(S)},size:{control:"select",options:Object.values(h)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},..._(["active","disabled","soft-disabled","tabIndex","role","type"]),...E,...D}},a={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const et=["Example"];export{a as Example,et as __namedExportsOrder,tt as default};
