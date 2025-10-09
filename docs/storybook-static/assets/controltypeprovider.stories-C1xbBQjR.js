import{C as i}from"./index-DKCaAOn-.js";import{E as d,k as l}from"./iframe-gl2AV23u.js";import{p as a}from"./index-B0EZfEBL.js";import"./index-Ddj3z4_x.js";import"./index-DIedxVcG.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-YLB2FcmG.js";import"./DisabledMixin-Da9HdG9U.js";import"./toggle.constants-OqVHygED.js";import"./index-DkWjAK6H.js";import"./popover.component-CNuAeCjP.js";import"./base-DIkkzJ-c.js";import"./if-defined-D_Raxwq5.js";import"./BackdropMixin-BFaCZz5f.js";import"./v4-CmTdKEVZ.js";import"./class-map-kY2ieTaD.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-bdwrBQOH.js";import"./listitem.component-BMxKNAok.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-eMCoa_9l.js";import"./menuitemcheckbox.constants-hWA6-ndh.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
