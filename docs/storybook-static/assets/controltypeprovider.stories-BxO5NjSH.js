import{C as l}from"./ControlTypeMixin-B-OGtuwl.js";import{E as d,k as i}from"./iframe-smnB6toM.js";import{p as a}from"./index-Dg-WFu4P.js";import"./index-tPPQU-SD.js";import"./index-BVB3PVPl.js";import"./preload-helper-C1FmrZbK.js";import"./index-MgEYcR_f.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BKICHHAJ.js";import"./listitem.component-D2yWJK9D.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CEnaSXUN.js";import"./DisabledMixin-COaDUKdG.js";import"./index-BI0xBF7H.js";import"./formfieldwrapper.constants-CGQVMaBE.js";import"./toggle.constants-BGweVPdX.js";import"./index-QN_X0ziT.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-CpI-fa7g.js";import"./if-defined-CkowoNDe.js";import"./BackdropMixin-CoDiFpRA.js";import"./v4-CmTdKEVZ.js";import"./class-map-C6rGKeGt.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BJrI-w31.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
