import{C as l}from"./ControlTypeMixin-SVkmFBEv.js";import{H as d,k as i}from"./iframe-CfitjWUE.js";import{p as a}from"./index-C9SFOIud.js";import"./index-CN9vTtRB.js";import"./index-xeVgllRH.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cs_OuWm2.js";import"./index-DTrDRi1E.js";import"./menuitem.component-GMjAjT8e.js";import"./listitem.component-BxEI-N4E.js";import"./query-assigned-elements-DYg43Ijs.js";import"./DisabledMixin-W25vj83_.js";import"./KeyToActionMixin-CroOPhbe.js";import"./index-DEm_5BL1.js";import"./formfieldwrapper.constants-BgypaDPT.js";import"./popover.constants-BfURR8Av.js";import"./toggle.constants-D8Y7GS95.js";import"./index-1kG1CCc-.js";import"./popover.component-5fveDtIW.js";import"./if-defined-B92OEDYj.js";import"./BackdropMixin-CoG9kfZL.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-CTwj7QWi.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BR2DH72-.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
