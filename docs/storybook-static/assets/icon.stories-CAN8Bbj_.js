import{i as C,k as p}from"./lit-element-CPYlYYac.js";import{u as I,C as S,n as h}from"./index-fQJcZKNb.js";import{r as d}from"./state-GClRgdp0.js";import{h as A}from"./index-LGKd4lo9.js";import{p as $}from"./index-CQ1swJS0.js";import{I as U}from"./iconprovider.component-w_FmVHM-.js";import{d as D,c as F,s as w}from"./utils-D9Sovq17.js";import"./create-context-89xeped_.js";const O=[A,C`
    :host {
      --mdc-icon-fill-color: currentColor;
    }
    svg {
      height: 100%;
      width: 100%;
      fill: var(--mdc-icon-fill-color);
    }
  `],L=async(e,t,i)=>{const o=await fetch(`${e}/${t}.${i}`);if(!o.ok)throw new Error("There was a problem while fetching the icon!");const s=await o.text();return new DOMParser().parseFromString(s,"text/html").body.children[0]},E=I.constructTagName("icon"),y={NAME:void 0,SIZE:1};var T=Object.defineProperty,a=(e,t,i,o)=>{for(var s=void 0,r=e.length-1,c;r>=0;r--)(c=e[r])&&(s=c(t,i,s)||s);return s&&T(t,i,s),s};const u=class u extends S{constructor(){super(...arguments),this.name=y.NAME,this.ariaLabel=null,this.iconProviderContext=$.consume({host:this,context:U.Context})}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:i}=this.iconProviderContext.value;if(i&&t&&this.name){const o=await L(i,this.name,t);this.iconData=o,this.setRoleOnIcon(),this.setAriaLabelOnIcon(),this.setAriaHiddenOnIcon()}}}updateSize(){if(this.computedIconSize&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.computedIconSize}${this.lengthUnit??this.lengthUnitFromContext}`;this.style.width=t,this.style.height=t}}setRoleOnIcon(){this.role=this.ariaLabel?"img":null}setAriaHiddenOnIcon(){var t;(t=this.iconData)==null||t.setAttribute("aria-hidden","true")}setAriaLabelOnIcon(){var t,i;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(i=this.iconData)==null||i.removeAttribute("aria-label")}get computedIconSize(){return this.size??this.sizeFromContext??y.SIZE}updated(t){var i,o,s,r;super.updated(t),t.has("name")&&this.getIconData().catch(c=>{console.error(c)}),t.has("ariaLabel")&&(this.setRoleOnIcon(),this.setAriaLabelOnIcon()),(t.has("size")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((i=this.iconProviderContext.value)==null?void 0:i.lengthUnit)&&(this.lengthUnitFromContext=(o=this.iconProviderContext.value)==null?void 0:o.lengthUnit,this.updateSize()),this.sizeFromContext!==((s=this.iconProviderContext.value)==null?void 0:s.size)&&(this.sizeFromContext=(r=this.iconProviderContext.value)==null?void 0:r.size,this.updateSize())}render(){return p` ${this.iconData} `}};u.styles=O;let n=u;a([d()],n.prototype,"iconData");a([d()],n.prototype,"lengthUnitFromContext");a([d()],n.prototype,"sizeFromContext");a([h({type:String,reflect:!0})],n.prototype,"name");a([h({type:Number})],n.prototype,"size");a([h({type:String,attribute:"length-unit"})],n.prototype,"lengthUnit");a([h({type:String,attribute:"aria-label"})],n.prototype,"ariaLabel");n.register(E);const P=e=>p`
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
`,V={title:"Work In Progress/icon",tags:["autodocs"],component:"mdc-icon",render:P,parameters:{badges:["wip"]},argTypes:{...D(["--mdc-icon-fill-color"]),...F,...w}},l={args:{name:"accessibility-regular",size:2,class:"custom-classname",style:"margin: 0px;"}},m={render:_,args:{"aria-label":"This is the accessibility icon",name:"accessibility-regular",size:2,class:"custom-classname",style:"margin: 0px;"}};var g,b,f;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;'
  }
}`,...(f=(b=l.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var v,x,z;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: renderAccessibility,
  args: {
    'aria-label': 'This is the accessibility icon',
    name: 'accessibility-regular',
    size: 2,
    class: 'custom-classname',
    style: 'margin: 0px;'
  }
}`,...(z=(x=m.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const W=["Decorative","Informative"];export{l as Decorative,m as Informative,W as __namedExportsOrder,V as default};
