import{C as i}from"./index-DH0J6QCj.js";import{E as d,k as l}from"./iframe-CrBatVCQ.js";import{p as a}from"./index-DmnTGDGJ.js";import"./index-BHCEQtmZ.js";import"./index-BZedEIB5.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-BVQNG2IG.js";import"./DisabledMixin-DnkG3zmJ.js";import"./toggle.constants-Do8nHwA2.js";import"./index-CwbIce-3.js";import"./popover.component-DoMGn_er.js";import"./base-DIkkzJ-c.js";import"./if-defined-BeA6fpdh.js";import"./BackdropMixin-BMYpxaBf.js";import"./v4-CmTdKEVZ.js";import"./class-map-C2U_u3lI.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-CDYCZk7g.js";import"./listitem.component-B4g0QcIO.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-Ca95DdOZ.js";import"./menuitemcheckbox.constants-C1xgQJiy.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
