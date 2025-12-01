import{C as i}from"./ControlTypeMixin-BoTyWxd7.js";import{E as d,k as l}from"./iframe-R3L7UhRQ.js";import{p as a}from"./index-DlOFhpRI.js";import"./index-CvUnzej6.js";import"./index-D3ftpNNf.js";import"./preload-helper-C1FmrZbK.js";import"./index-D2rYsLua.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DGm4A_HY.js";import"./listitem.component-CJiOdnq0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-217vQpdp.js";import"./DisabledMixin-8iYeFgf6.js";import"./index-CJjRsySC.js";import"./formfieldwrapper.constants-CuM-QC6e.js";import"./toggle.constants-D5JJb8Va.js";import"./index-DtnIrGKk.js";import"./popover.component-Cy6To2aI.js";import"./if-defined-Cp5jgcRU.js";import"./BackdropMixin-DLlIpirq.js";import"./v4-CmTdKEVZ.js";import"./class-map-BRR70bhG.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BkAOEl4B.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
