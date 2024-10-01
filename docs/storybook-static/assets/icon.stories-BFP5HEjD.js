import{i as C,k as m}from"./lit-element-CPYlYYac.js";import{n as o,u as S,C as U}from"./index-CFYjfE6c.js";import{h as $}from"./index-LGKd4lo9.js";import{p as D}from"./index-BCUDnuze.js";import{I as L}from"./iconprovider.component-1kxMB-M8.js";import"./create-context-89xeped_.js";/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function A(i){return o({...i,state:!0,attribute:!1})}const I=[$,C`
    svg {
      height: 100%;
      width: 100%;
      fill: currentColor;
    }
  `],E=async(i,t,e)=>fetch(`${i}/${t}.${e}`).then(r=>{if(!r.ok)throw new Error("There was a problem while fetching the icon!");return r.text()}).then(r=>new DOMParser().parseFromString(r,"text/html").body.children[0]),O=S.constructTagName("icon"),d={NAME:void 0,SCALE:1};var w=Object.defineProperty,n=(i,t,e,r)=>{for(var a=void 0,h=i.length-1,p;h>=0;h--)(p=i[h])&&(a=p(t,e,a)||a);return a&&w(t,e,a),a};const u=class u extends U{constructor(){super(...arguments),this.name=d.NAME,this.scale=d.SCALE,this.role=null,this.ariaLabel=null,this.iconProviderContext=D.consume({host:this,context:L.Context})}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:e}=this.iconProviderContext.value;if(e&&t&&this.name){const r=await E(e,this.name,t);this.iconData=r,this.setRoleOnIcon(),this.setAriaLabelOnIcon()}}}updateSize(){if(this.scale&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.scale}${this.lengthUnit||this.lengthUnitFromContext}`;this.style.width=t,this.style.height=t}}setRoleOnIcon(){var t,e;this.role?(t=this.iconData)==null||t.setAttribute("role",this.role):(e=this.iconData)==null||e.removeAttribute("role")}setAriaLabelOnIcon(){var t,e;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(e=this.iconData)==null||e.removeAttribute("aria-label")}updated(t){var e,r;super.updated(t),t.has("name")&&this.getIconData().catch(a=>{console.error(a)}),t.has("role")&&this.setRoleOnIcon(),t.has("ariaLabel")&&this.setAriaLabelOnIcon(),(t.has("scale")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((e=this.iconProviderContext.value)==null?void 0:e.lengthUnit)&&(this.lengthUnitFromContext=(r=this.iconProviderContext.value)==null?void 0:r.lengthUnit,this.updateSize())}render(){return m` ${this.iconData} `}};u.styles=I;let s=u;n([A()],s.prototype,"iconData");n([A()],s.prototype,"lengthUnitFromContext");n([o({type:String,reflect:!0})],s.prototype,"name");n([o({type:Number})],s.prototype,"scale");n([o({type:String,attribute:"length-unit"})],s.prototype,"lengthUnit");n([o({type:String})],s.prototype,"role");n([o({type:String,attribute:"aria-label"})],s.prototype,"ariaLabel");s.register(O);const F=i=>m` <mdc-icon name="${i.name}" scale="${i.scale}"></mdc-icon> `,P=i=>m`
  <mdc-icon name="${i.name}" scale="${i.scale}" role="${i.role}" aria-label="${i["aria-label"]}"></mdc-icon>
`,R={title:"Work In Progress/icon",tags:["autodocs"],component:"mdc-icon",render:F,argTypes:{}},c={args:{name:"accessibility-regular",scale:1}},l={render:P,args:{name:"accessibility-regular",scale:1,role:"graphics-document","aria-label":"This is the accessibility icon"}};var b,y,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    name: 'accessibility-regular',
    scale: 1
  }
}`,...(g=(y=c.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var f,v,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: renderAccessibility,
  args: {
    name: 'accessibility-regular',
    scale: 1,
    role: 'graphics-document',
    'aria-label': 'This is the accessibility icon'
  }
}`,...(x=(v=l.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};const G=["Primary","Accessibility"];export{l as Accessibility,c as Primary,G as __namedExportsOrder,R as default};
