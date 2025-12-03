import{C as l}from"./ControlTypeMixin-BwOUyq8E.js";import{F as d,k as i}from"./iframe-Zf8S4XXr.js";import{p as a}from"./index-9WskqfxG.js";import"./index-CofHtS60.js";import"./index-DWOpeGV5.js";import"./preload-helper-C1FmrZbK.js";import"./index-D7qh9X_j.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D_sOPCvB.js";import"./listitem.component-CCJX6-HA.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-D7wC9CdO.js";import"./DisabledMixin-DSsu06eJ.js";import"./index-D2redggu.js";import"./formfieldwrapper.constants-2ozCuejz.js";import"./popover.constants-Bap0emLb.js";import"./toggle.constants-DxC146JN.js";import"./index-DB1TdzTj.js";import"./popover.component-Cl6vr77l.js";import"./if-defined-BQWJj0RV.js";import"./BackdropMixin-BQuBw2vV.js";import"./v4-CmTdKEVZ.js";import"./class-map-CTT1HBts.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DH46JxK5.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
