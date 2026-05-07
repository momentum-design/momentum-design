import{C as l}from"./ControlTypeMixin-Ckf3ObnP.js";import{C as d,k as i}from"./iframe-D0ScXF76.js";import{p as a}from"./index-2Amd9kF4.js";import"./index-D9wFdrIU.js";import"./index-CFqPw_qZ.js";import"./preload-helper-C1FmrZbK.js";import"./index-RvUU6tyZ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BLunHhu2.js";import"./listitem.component-C0EgK5dz.js";import"./query-assigned-elements-BEdPqiMz.js";import"./DisabledMixin-BVGI1sj0.js";import"./KeyDownHandledMixin-DklPTy77.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DCCuWNp3.js";import"./index-BBf6hxAs.js";import"./formfieldwrapper.constants-C4nuc87I.js";import"./popover.constants-BEXvo6iX.js";import"./toggle.constants-Dbh1yXCH.js";import"./index-CpGYBEGq.js";import"./popover.component-CA6sO_HV.js";import"./if-defined-DrTNBfmd.js";import"./BackdropMixin-DKtkOt5N.js";import"./v4-CmTdKEVZ.js";import"./class-map-Cpq0APhL.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D4It6c7w.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
