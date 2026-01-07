import{C as l}from"./ControlTypeMixin-CEQAFDh9.js";import{F as d,k as i}from"./iframe-Ci39ks_7.js";import{p as a}from"./index-BYcvpXnX.js";import"./index-CIScIJzS.js";import"./index-ClZDwq1W.js";import"./preload-helper-C1FmrZbK.js";import"./index-BJmBoyrR.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DAQT9csm.js";import"./listitem.component-DR502wQW.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-QFZDRRE1.js";import"./DisabledMixin-BnT5U332.js";import"./index-D5c6EIc_.js";import"./formfieldwrapper.constants-DICTCUoR.js";import"./popover.constants-B0rTLfOw.js";import"./toggle.constants-C92pYuTG.js";import"./index-0f6dGCRd.js";import"./popover.component-BZdth0Na.js";import"./if-defined-Cx4K7iaJ.js";import"./BackdropMixin-BWMMZldR.js";import"./v4-CmTdKEVZ.js";import"./class-map-zM4MEWDH.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D3oYupNN.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
