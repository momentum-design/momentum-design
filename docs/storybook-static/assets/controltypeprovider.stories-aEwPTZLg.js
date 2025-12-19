import{C as l}from"./ControlTypeMixin-DbWPHGe-.js";import{F as d,k as i}from"./iframe-9aXjflsK.js";import{p as a}from"./index-CBhPvYzF.js";import"./index-DQ_R4dSo.js";import"./index-DMO1qHXM.js";import"./preload-helper-C1FmrZbK.js";import"./index-CqUpnfWh.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D4sOgjy-.js";import"./listitem.component-BseREfxt.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Cb4McNGQ.js";import"./DisabledMixin-DQy_gDXo.js";import"./index-DIq_Xxs7.js";import"./formfieldwrapper.constants-CM5uHc-x.js";import"./popover.constants-CJTJW8LN.js";import"./toggle.constants-emkWyYta.js";import"./index-BhNbnJez.js";import"./popover.component-Cmi9mjeU.js";import"./if-defined-Bys9X_mk.js";import"./BackdropMixin-DIbGakos.js";import"./v4-CmTdKEVZ.js";import"./class-map-D_HJr6_D.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CAZXwy8c.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
