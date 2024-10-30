import{i as I,k as p}from"./lit-element-CPYlYYac.js";import{u as S,C as b,n as h}from"./index-BLShQaRP.js";import{r as d}from"./state-I_twzcUk.js";import{h as A}from"./index-yOpQnEvF.js";import{p as F}from"./index-BGH6lGYG.js";import{I as U}from"./iconprovider.component-DlI5gUhJ.js";import{c as $,s as D}from"./commonArgTypes-BluK8w5L.js";import{d as O}from"./utils-DCJ3yZC1.js";import"./create-context-89xeped_.js";const T=[A,I`
    :host {
      --mdc-icon-fill-color: currentColor;
    }
    svg {
      height: 100%;
      width: 100%;
      fill: var(--mdc-icon-fill-color);
    }
  `],w=async(e,t,i)=>{const a=await fetch(`${e}/${t}.${i}`);if(!a.ok)throw new Error("There was a problem while fetching the icon!");const s=await a.text();return new DOMParser().parseFromString(s,"text/html").body.children[0]},L=S.constructTagName("icon"),y={NAME:void 0,SIZE:1};var E=Object.defineProperty,o=(e,t,i,a)=>{for(var s=void 0,r=e.length-1,c;r>=0;r--)(c=e[r])&&(s=c(t,i,s)||s);return s&&E(t,i,s),s};const u=class u extends b{constructor(){super(...arguments),this.name=y.NAME,this.ariaLabel=null,this.iconProviderContext=F.consume({host:this,context:U.Context})}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:i}=this.iconProviderContext.value;if(i&&t&&this.name){const a=await w(i,this.name,t);this.iconData=a,this.setRoleOnIcon(),this.setAriaLabelOnIcon(),this.setAriaHiddenOnIcon()}}}updateSize(){if(this.computedIconSize&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.computedIconSize}${this.lengthUnit??this.lengthUnitFromContext}`;this.style.width=t,this.style.height=t}}setRoleOnIcon(){this.role=this.ariaLabel?"img":null}setAriaHiddenOnIcon(){var t;(t=this.iconData)==null||t.setAttribute("aria-hidden","true")}setAriaLabelOnIcon(){var t,i;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(i=this.iconData)==null||i.removeAttribute("aria-label")}get computedIconSize(){return this.size??this.sizeFromContext??y.SIZE}updated(t){var i,a,s,r;super.updated(t),t.has("name")&&this.getIconData().catch(c=>{console.error(c)}),t.has("ariaLabel")&&(this.setRoleOnIcon(),this.setAriaLabelOnIcon()),(t.has("size")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((i=this.iconProviderContext.value)==null?void 0:i.lengthUnit)&&(this.lengthUnitFromContext=(a=this.iconProviderContext.value)==null?void 0:a.lengthUnit,this.updateSize()),this.sizeFromContext!==((s=this.iconProviderContext.value)==null?void 0:s.size)&&(this.sizeFromContext=(r=this.iconProviderContext.value)==null?void 0:r.size,this.updateSize())}render(){return p` ${this.iconData} `}};u.styles=[...b.styles,...T];let n=u;o([d()],n.prototype,"iconData");o([d()],n.prototype,"lengthUnitFromContext");o([d()],n.prototype,"sizeFromContext");o([h({type:String,reflect:!0})],n.prototype,"name");o([h({type:Number})],n.prototype,"size");o([h({type:String,attribute:"length-unit"})],n.prototype,"lengthUnit");o([h({type:String,attribute:"aria-label"})],n.prototype,"ariaLabel");n.register(L);const P=e=>p`
  <mdc-icon
    class="${e.class}"
    name="${e.name}"
    size="${e.size}"
    style="${e.style}"
  ></mdc-icon> `,_=e=>p`
  <mdc-icon
    aria-label="${e["aria-label"]}"
    class="${e.class}"
    name="${e.name}"
    size="${e.size}"
  ></mdc-icon>
`,q={title:"Components/icon",tags:["autodocs"],component:"mdc-icon",render:P,parameters:{badges:["stable"]},argTypes:{...O(["iconData","lengthUnitFromContext","sizeFromContext","iconProviderContext","computedIconSize","--mdc-icon-fill-color"]),...$,...D}},l={argTypes:{"aria-label":{table:{disable:!0}}},args:{name:"accessibility-regular",size:2,class:"custom-classname",style:"margin: 0px;"}},m={render:_,args:{"aria-label":"This is the accessibility icon",name:"accessibility-regular",size:2,class:"custom-classname",style:"margin: 0px;"}};var g,f,x;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  argTypes: {
    'aria-label': {
      table: {
        disable: true
      }
    }
  },
  args: {
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;'
  }
}`,...(x=(f=l.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var v,C,z;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: renderAccessibility,
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;'
  }
}`,...(z=(C=m.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};const B=["Decorative","Informative"];export{l as Decorative,m as Informative,B as __namedExportsOrder,q as default};
