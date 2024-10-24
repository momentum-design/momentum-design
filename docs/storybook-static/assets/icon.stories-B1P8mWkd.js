import{i as I,k as p}from"./lit-element-CPYlYYac.js";import{u as S,C as y,n as h}from"./index-BLShQaRP.js";import{r as d}from"./state-I_twzcUk.js";import{h as A}from"./index-DDAnDTrA.js";import{p as $}from"./index-BGH6lGYG.js";import{I as U}from"./iconprovider.component-DlI5gUhJ.js";import{c as D,s as F}from"./commonArgTypes-BluK8w5L.js";import{d as O}from"./utils-DCJ3yZC1.js";import"./create-context-89xeped_.js";const w=[A,I`
    :host {
      --mdc-icon-fill-color: currentColor;
    }
    svg {
      height: 100%;
      width: 100%;
      fill: var(--mdc-icon-fill-color);
    }
  `],L=async(e,t,i)=>{const o=await fetch(`${e}/${t}.${i}`);if(!o.ok)throw new Error("There was a problem while fetching the icon!");const s=await o.text();return new DOMParser().parseFromString(s,"text/html").body.children[0]},E=S.constructTagName("icon"),b={NAME:void 0,SIZE:1};var T=Object.defineProperty,a=(e,t,i,o)=>{for(var s=void 0,r=e.length-1,c;r>=0;r--)(c=e[r])&&(s=c(t,i,s)||s);return s&&T(t,i,s),s};const u=class u extends y{constructor(){super(...arguments),this.name=b.NAME,this.ariaLabel=null,this.iconProviderContext=$.consume({host:this,context:U.Context})}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:i}=this.iconProviderContext.value;if(i&&t&&this.name){const o=await L(i,this.name,t);this.iconData=o,this.setRoleOnIcon(),this.setAriaLabelOnIcon(),this.setAriaHiddenOnIcon()}}}updateSize(){if(this.computedIconSize&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.computedIconSize}${this.lengthUnit??this.lengthUnitFromContext}`;this.style.width=t,this.style.height=t}}setRoleOnIcon(){this.role=this.ariaLabel?"img":null}setAriaHiddenOnIcon(){var t;(t=this.iconData)==null||t.setAttribute("aria-hidden","true")}setAriaLabelOnIcon(){var t,i;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(i=this.iconData)==null||i.removeAttribute("aria-label")}get computedIconSize(){return this.size??this.sizeFromContext??b.SIZE}updated(t){var i,o,s,r;super.updated(t),t.has("name")&&this.getIconData().catch(c=>{console.error(c)}),t.has("ariaLabel")&&(this.setRoleOnIcon(),this.setAriaLabelOnIcon()),(t.has("size")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((i=this.iconProviderContext.value)==null?void 0:i.lengthUnit)&&(this.lengthUnitFromContext=(o=this.iconProviderContext.value)==null?void 0:o.lengthUnit,this.updateSize()),this.sizeFromContext!==((s=this.iconProviderContext.value)==null?void 0:s.size)&&(this.sizeFromContext=(r=this.iconProviderContext.value)==null?void 0:r.size,this.updateSize())}render(){return p` ${this.iconData} `}};u.styles=[...y.styles,...w];let n=u;a([d()],n.prototype,"iconData");a([d()],n.prototype,"lengthUnitFromContext");a([d()],n.prototype,"sizeFromContext");a([h({type:String,reflect:!0})],n.prototype,"name");a([h({type:Number})],n.prototype,"size");a([h({type:String,attribute:"length-unit"})],n.prototype,"lengthUnit");a([h({type:String,attribute:"aria-label"})],n.prototype,"ariaLabel");n.register(E);const P=e=>p`
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
`,q={title:"Components/icon",tags:["autodocs"],component:"mdc-icon",render:P,parameters:{badges:["stable"]},argTypes:{...O(["--mdc-icon-fill-color"]),...D,...F}},l={args:{name:"accessibility-regular",size:2,class:"custom-classname",style:"margin: 0px;"}},m={render:_,args:{"aria-label":"This is the accessibility icon",name:"accessibility-regular",size:2,class:"custom-classname",style:"margin: 0px;"}};var g,f,v;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;'
  }
}`,...(v=(f=l.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var x,z,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: renderAccessibility,
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;'
  }
}`,...(C=(z=m.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};const B=["Decorative","Informative"];export{l as Decorative,m as Informative,B as __namedExportsOrder,q as default};
