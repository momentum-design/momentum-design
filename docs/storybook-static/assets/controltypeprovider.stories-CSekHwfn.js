import{C as l}from"./ControlTypeMixin-D0b-wg74.js";import{E as d,k as i}from"./iframe-C8zHd0pv.js";import{p as a}from"./index-CL0SJMLc.js";import"./index-CLOIoQVw.js";import"./index-BIMrUJzh.js";import"./preload-helper-C1FmrZbK.js";import"./index-cng3JtU0.js";import"./index-DTrDRi1E.js";import"./menuitem.component-nRPMP9O4.js";import"./listitem.component-C1IsJMqB.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BvPyw8u7.js";import"./DisabledMixin-DvV44Swy.js";import"./index-BKlofY8H.js";import"./formfieldwrapper.constants-CxwGPedd.js";import"./toggle.constants-CVbGB3Yc.js";import"./index-CerXWCms.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-DDoPL1ps.js";import"./if-defined-DlXdJuXq.js";import"./BackdropMixin-BgEQ8MDS.js";import"./v4-CmTdKEVZ.js";import"./class-map-DEVGCxKc.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-5ImgWIiX.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
