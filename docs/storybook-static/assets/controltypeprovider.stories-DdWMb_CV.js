import{C as l}from"./ControlTypeMixin-vos1rYK6.js";import{F as d,k as i}from"./iframe-Hv7IoejM.js";import{p as a}from"./index-CIODf6mm.js";import"./index-CrZ2Qz5d.js";import"./index-BGW89R-7.js";import"./preload-helper-C1FmrZbK.js";import"./index-DWkFIevN.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CLbv5ZoF.js";import"./listitem.component-uJBsFVFq.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-C3SjIrcs.js";import"./DisabledMixin-CqYnabgB.js";import"./index-DOQr8Rpk.js";import"./formfieldwrapper.constants-DXvpCjUn.js";import"./popover.constants-KmOmTc4A.js";import"./toggle.constants-C5LCVAtU.js";import"./index-DWR5G48I.js";import"./popover.component-C-5plnw-.js";import"./if-defined-DHscNqNO.js";import"./BackdropMixin-BfdLdJ7Y.js";import"./v4-CmTdKEVZ.js";import"./class-map-C6g7PZnI.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-E4vjey3G.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
