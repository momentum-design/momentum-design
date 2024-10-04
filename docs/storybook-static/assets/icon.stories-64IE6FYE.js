import{i as C,k as u}from"./lit-element-CPYlYYac.js";import{n as c,u as S,C as A}from"./index-CFYjfE6c.js";import{h as I}from"./index-LGKd4lo9.js";import{p as U}from"./index-BCUDnuze.js";import{I as F}from"./iconprovider.component-Dft1Ohz8.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function p(i){return c({...i,state:!0,attribute:!1})}const $=[I,C`
    svg {
      height: 100%;
      width: 100%;
      fill: currentColor;
    }
  `],D=async(i,t,e)=>fetch(`${i}/${t}.${e}`).then(s=>{if(!s.ok)throw new Error("There was a problem while fetching the icon!");return s.text()}).then(s=>new DOMParser().parseFromString(s,"text/html").body.children[0]),E=S.constructTagName("icon"),b={NAME:void 0,SIZE:1};var L=Object.defineProperty,n=(i,t,e,s)=>{for(var o=void 0,a=i.length-1,l;a>=0;a--)(l=i[a])&&(o=l(t,e,o)||o);return o&&L(t,e,o),o};const d=class d extends A{constructor(){super(...arguments),this.name=b.NAME,this.role=null,this.ariaLabel=null,this.iconProviderContext=U.consume({host:this,context:F.Context})}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:e}=this.iconProviderContext.value;if(e&&t&&this.name){const s=await D(e,this.name,t);this.iconData=s,this.setRoleOnIcon(),this.setAriaLabelOnIcon()}}}updateSize(){if(this.computedIconSize&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.computedIconSize}${this.lengthUnit??this.lengthUnitFromContext}`;this.style.width=t,this.style.height=t}}setRoleOnIcon(){var t,e;this.role?(t=this.iconData)==null||t.setAttribute("role",this.role):(e=this.iconData)==null||e.removeAttribute("role")}setAriaLabelOnIcon(){var t,e;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(e=this.iconData)==null||e.removeAttribute("aria-label")}get computedIconSize(){return this.size??this.sizeFromContext??b.SIZE}updated(t){var e,s,o,a;super.updated(t),t.has("name")&&this.getIconData().catch(l=>{console.error(l)}),t.has("role")&&this.setRoleOnIcon(),t.has("ariaLabel")&&this.setAriaLabelOnIcon(),(t.has("size")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((e=this.iconProviderContext.value)==null?void 0:e.lengthUnit)&&(this.lengthUnitFromContext=(s=this.iconProviderContext.value)==null?void 0:s.lengthUnit,this.updateSize()),this.sizeFromContext!==((o=this.iconProviderContext.value)==null?void 0:o.size)&&(this.sizeFromContext=(a=this.iconProviderContext.value)==null?void 0:a.size,this.updateSize())}render(){return u` ${this.iconData} `}};d.styles=$;let r=d;n([p()],r.prototype,"iconData");n([p()],r.prototype,"lengthUnitFromContext");n([p()],r.prototype,"sizeFromContext");n([c({type:String,reflect:!0})],r.prototype,"name");n([c({type:Number})],r.prototype,"size");n([c({type:String,attribute:"length-unit"})],r.prototype,"lengthUnit");n([c({type:String})],r.prototype,"role");n([c({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");r.register(E);const O=i=>u` <mdc-icon name="${i.name}" size="${i.size}"></mdc-icon> `,P=i=>u`
  <mdc-icon name="${i.name}" size="${i.size}" role="${i.role}" aria-label="${i["aria-label"]}"></mdc-icon>
`,R={title:"Work In Progress/icon",tags:["autodocs"],component:"mdc-icon",render:O,argTypes:{}},h={args:{name:"accessibility-regular",size:1}},m={render:P,args:{name:"accessibility-regular",size:1,role:"graphics-document","aria-label":"This is the accessibility icon"}};var y,g,f;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    name: 'accessibility-regular',
    size: 1
  }
}`,...(f=(g=h.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var v,x,z;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
  render: renderAccessibility,
  args: {
    name: 'accessibility-regular',
    size: 1,
    role: 'graphics-document',
    'aria-label': 'This is the accessibility icon'
  }
}`,...(z=(x=m.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const G=["Primary","Accessibility"];export{m as Accessibility,h as Primary,G as __namedExportsOrder,R as default};
