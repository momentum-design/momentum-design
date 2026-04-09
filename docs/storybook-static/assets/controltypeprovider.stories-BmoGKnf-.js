import{C as l}from"./ControlTypeMixin-ClHmfRqt.js";import{C as d,k as i}from"./iframe-C10VdK12.js";import{p as a}from"./index-C6ZeKbPJ.js";import"./index-RUYdyJ3z.js";import"./index-jENjobTm.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bqh1to7c.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BWEpwmmO.js";import"./listitem.component-CqXl9ujW.js";import"./query-assigned-elements-DUUH7TJ1.js";import"./DisabledMixin-CO3LfEsk.js";import"./KeyDownHandledMixin-hNSgEOZt.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-rlqxq5My.js";import"./index-DWcQ_rVx.js";import"./formfieldwrapper.constants-BAbWPppI.js";import"./popover.constants-4s_E9pps.js";import"./toggle.constants-Ece6dFXp.js";import"./index-CbHlblxI.js";import"./popover.component-Cm61NnT4.js";import"./if-defined-CWVcm-XG.js";import"./BackdropMixin-LFMVB-On.js";import"./v4-CmTdKEVZ.js";import"./class-map-D0p-z5KF.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-VIdc0xb9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
