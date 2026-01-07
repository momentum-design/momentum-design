import{C as l}from"./ControlTypeMixin-COCSaysz.js";import{F as d,k as i}from"./iframe-BceO9xBA.js";import{p as a}from"./index-ByQ9qkf1.js";import"./index-BNKTdc42.js";import"./index-CfiDcyqg.js";import"./preload-helper-C1FmrZbK.js";import"./index-C-PBsjQe.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BvHAac3X.js";import"./listitem.component-C8WVkIJH.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CLzlMbCP.js";import"./DisabledMixin-CJ7Qsp83.js";import"./index-BlZ9RlOP.js";import"./formfieldwrapper.constants-Bag4jpl3.js";import"./popover.constants-TDxUTn-L.js";import"./toggle.constants-CuwHR2ah.js";import"./index-DPIbp1YI.js";import"./popover.component-CQWL8Pns.js";import"./if-defined-DJvvsfJY.js";import"./BackdropMixin-CmuxcyPn.js";import"./v4-CmTdKEVZ.js";import"./class-map-CaTh44fb.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Caow4iUO.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
