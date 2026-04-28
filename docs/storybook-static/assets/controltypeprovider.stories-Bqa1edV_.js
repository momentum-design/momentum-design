import{C as l}from"./ControlTypeMixin-D1r9XbcW.js";import{C as d,k as i}from"./iframe-DDdyYKcM.js";import{p as a}from"./index-BhcY06jc.js";import"./index-CY1NH324.js";import"./index-PPqTbcH-.js";import"./preload-helper-C1FmrZbK.js";import"./index-SSEGGe-_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CgUJuFFs.js";import"./listitem.component-GrNkl9y9.js";import"./query-assigned-elements-jBL5EVTj.js";import"./DisabledMixin-xgzT86Kg.js";import"./KeyDownHandledMixin-D_BymDsx.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BfNXnQA9.js";import"./index-DWEWJa3j.js";import"./formfieldwrapper.constants-Bvn-bJEY.js";import"./popover.constants-C7NqURGA.js";import"./toggle.constants-dfu-WE9s.js";import"./index-Ds8z8EDj.js";import"./popover.component-AncBSVYA.js";import"./if-defined-BbSBl4wr.js";import"./BackdropMixin-DAdP3NzV.js";import"./v4-CmTdKEVZ.js";import"./class-map-DWbheeZm.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BbuhABYH.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
