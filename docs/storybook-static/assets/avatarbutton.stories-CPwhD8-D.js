import{i as f,k as b}from"./lit-element-CHllvULs.js";import{n as y,u as v}from"./index-HW6KrQZO.js";import{t}from"./if-defined-C4tJgJ33.js";import{a as $,A as h,D as g}from"./index-DN6gMVdj.js";import{D as x}from"./button.constants-C4PVPP-B.js";import{B as A}from"./buttonsimple.component-DITj0SI7.js";import{h as T,a as z}from"./index-BNZgxKMr.js";import{a as o}from"./chunk-D5ZWXAHU-CGElDDNX.js";import{T as S}from"./index-Dzd38jZn.js";import{c as E,s as k}from"./commonArgTypes-BluK8w5L.js";import{h as D}from"./utils-D1SE5bce.js";import"./state-CWckTc1X.js";import"./text.constants-DJu2q-6E.js";import"./index-BOBIh5Rr.js";import"./index-BYMLCX4c.js";import"./iconprovider.component-CWYw8J7d.js";import"./create-context-89xeped_.js";import"./index-BGkqZMsC.js";import"./buttonsimple.constants-Biy6Bznc.js";import"./DisabledMixin-DBt9didn.js";import"./v4-CQkTLCs1.js";const _=[T,f`
  :host {
    padding: unset;
    margin: unset;
    outline: none;
    border-radius: 0.25rem;
  }
`,...z()];var C=Object.defineProperty,O=(e,i,p,I)=>{for(var s=void 0,n=e.length-1,l;n>=0;n--)(l=e[n])&&(s=l(i,p,s)||s);return s&&C(i,p,s),s};const c=class c extends $(A){constructor(){super(),this.ariaLabel=null,this.active=void 0,this.disabled=void 0,this.softDisabled=void 0,this.role="button",this.type=x.TYPE}update(i){super.update(i),i.has("size")&&this.setSize(this.size)}setSize(i){this.setAttribute("size",Object.values(h).includes(i)?`${i}`:g.SIZE.toString())}render(){return b`
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
    `}};c.styles=[..._];let r=c;O([y({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");const j=v.constructTagName("avatarbutton");r.register(j);const F=e=>b`
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
`,it={title:"Components/avatarbutton",tags:["autodocs"],component:"mdc-avatarbutton",render:F,parameters:{badges:["stable"]},argTypes:{src:{control:"text"},initials:{control:"text"},presence:{control:"select",options:Object.values(S)},size:{control:"select",options:Object.values(h)},"is-typing":{control:"boolean"},"icon-name":{control:"text"},counter:{control:"number"},"aria-label":{control:"text"},...D(["active","disabled","soft-disabled","tabIndex","role","type"]),...E,...k}},a={args:{src:"https://picsum.photos/id/63/256",initials:"MD",size:88,"icon-name":"","is-typing":"","aria-label":"Avatar Button"}};var m,u,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/id/63/256',
    initials: 'MD',
    size: 88,
    'icon-name': '',
    'is-typing': '',
    'aria-label': 'Avatar Button'
  }
}`,...(d=(u=a.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const st=["Example"];export{a as Example,st as __namedExportsOrder,it as default};
