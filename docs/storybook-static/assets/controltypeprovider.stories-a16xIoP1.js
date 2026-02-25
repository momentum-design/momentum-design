import{C as l}from"./ControlTypeMixin-j4080Lwi.js";import{C as d,k as i}from"./iframe-D_OBz_bG.js";import{p as a}from"./index-qc1F6ytw.js";import"./index-BrSELp5d.js";import"./index-BA25HLSP.js";import"./preload-helper-C1FmrZbK.js";import"./index-BXNYm2SZ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C8-oxI5o.js";import"./listitem.component-B5bHkvlt.js";import"./query-assigned-elements-BUr9t4tV.js";import"./DisabledMixin-DDjLwMnk.js";import"./KeyDownHandledMixin-Bf7ScF39.js";import"./index-0b83RDnP.js";import"./formfieldwrapper.constants-B6PA0dqn.js";import"./popover.constants-DoO5igJ1.js";import"./toggle.constants-Dy_3qy0r.js";import"./index-COaLUGD6.js";import"./popover.component-zxg-yDDh.js";import"./if-defined-B1zBGTv3.js";import"./BackdropMixin-D7CNQAPi.js";import"./v4-CmTdKEVZ.js";import"./class-map-DdZ75vau.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BAIH0ObT.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
