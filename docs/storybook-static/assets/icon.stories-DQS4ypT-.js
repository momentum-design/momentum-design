import{i as C,k as p}from"./lit-element-CPYlYYac.js";import{u as S,C as A,n as c}from"./index-CFYjfE6c.js";import{r as u}from"./state-CxB-wGrk.js";import{h as I}from"./index-LGKd4lo9.js";import{p as U}from"./index-BCUDnuze.js";import{I as F}from"./iconprovider.component-Dft1Ohz8.js";import"./create-context-89xeped_.js";const $=[I,C`
    svg {
      height: 100%;
      width: 100%;
      fill: currentColor;
    }
  `],D=async(i,t,e)=>fetch(`${i}/${t}.${e}`).then(s=>{if(!s.ok)throw new Error("There was a problem while fetching the icon!");return s.text()}).then(s=>new DOMParser().parseFromString(s,"text/html").body.children[0]),w=S.constructTagName("icon"),b={NAME:void 0,SIZE:1};var E=Object.defineProperty,n=(i,t,e,s)=>{for(var o=void 0,a=i.length-1,l;a>=0;a--)(l=i[a])&&(o=l(t,e,o)||o);return o&&E(t,e,o),o};const d=class d extends A{constructor(){super(...arguments),this.name=b.NAME,this.role=null,this.ariaLabel=null,this.iconProviderContext=U.consume({host:this,context:F.Context})}async getIconData(){if(this.iconProviderContext.value){const{fileExtension:t,url:e}=this.iconProviderContext.value;if(e&&t&&this.name){const s=await D(e,this.name,t);this.iconData=s,this.setRoleOnIcon(),this.setAriaLabelOnIcon()}}}updateSize(){if(this.computedIconSize&&(this.lengthUnit||this.lengthUnitFromContext)){const t=`${this.computedIconSize}${this.lengthUnit??this.lengthUnitFromContext}`;this.style.width=t,this.style.height=t}}setRoleOnIcon(){var t,e;this.role?(t=this.iconData)==null||t.setAttribute("role",this.role):(e=this.iconData)==null||e.removeAttribute("role")}setAriaLabelOnIcon(){var t,e;this.ariaLabel?(t=this.iconData)==null||t.setAttribute("aria-label",this.ariaLabel):(e=this.iconData)==null||e.removeAttribute("aria-label")}get computedIconSize(){return this.size??this.sizeFromContext??b.SIZE}updated(t){var e,s,o,a;super.updated(t),t.has("name")&&this.getIconData().catch(l=>{console.error(l)}),t.has("role")&&this.setRoleOnIcon(),t.has("ariaLabel")&&this.setAriaLabelOnIcon(),(t.has("size")||t.has("lengthUnit"))&&this.updateSize(),this.lengthUnitFromContext!==((e=this.iconProviderContext.value)==null?void 0:e.lengthUnit)&&(this.lengthUnitFromContext=(s=this.iconProviderContext.value)==null?void 0:s.lengthUnit,this.updateSize()),this.sizeFromContext!==((o=this.iconProviderContext.value)==null?void 0:o.size)&&(this.sizeFromContext=(a=this.iconProviderContext.value)==null?void 0:a.size,this.updateSize())}render(){return p` ${this.iconData} `}};d.styles=$;let r=d;n([u()],r.prototype,"iconData");n([u()],r.prototype,"lengthUnitFromContext");n([u()],r.prototype,"sizeFromContext");n([c({type:String,reflect:!0})],r.prototype,"name");n([c({type:Number})],r.prototype,"size");n([c({type:String,attribute:"length-unit"})],r.prototype,"lengthUnit");n([c({type:String})],r.prototype,"role");n([c({type:String,attribute:"aria-label"})],r.prototype,"ariaLabel");r.register(w);const L=i=>p` <mdc-icon name="${i.name}" size="${i.size}"></mdc-icon> `,O=i=>p`
  <mdc-icon name="${i.name}" size="${i.size}" role="${i.role}" aria-label="${i["aria-label"]}"></mdc-icon>
`,G={title:"Work In Progress/icon",tags:["autodocs"],component:"mdc-icon",render:L,parameters:{badges:["wip"]},argTypes:{}},h={args:{name:"accessibility-regular",size:1}},m={render:O,args:{name:"accessibility-regular",size:1,role:"graphics-document","aria-label":"This is the accessibility icon"}};var y,g,f;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(z=(x=m.parameters)==null?void 0:x.docs)==null?void 0:z.source}}};const Z=["Primary","Accessibility"];export{m as Accessibility,h as Primary,Z as __namedExportsOrder,G as default};
