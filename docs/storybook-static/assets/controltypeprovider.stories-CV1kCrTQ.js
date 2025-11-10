import{C as i}from"./ControlTypeMixin-BxEtTq1v.js";import{E as d,k as l}from"./iframe-CN8BX08X.js";import{p as a}from"./index-Db8AwVSm.js";import"./index-CNhuc3gj.js";import"./index-CWJUbjBZ.js";import"./preload-helper-C1FmrZbK.js";import"./index-DYSq58IO.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BbtOf9ct.js";import"./listitem.component-B3cSl7wM.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-D9j366gx.js";import"./DisabledMixin-DwuxRxno.js";import"./index-Dqe-Kbq6.js";import"./formfieldwrapper.constants-Dm1Kauvo.js";import"./toggle.constants-DStXSHdB.js";import"./index-Cvit-woL.js";import"./popover.component-uWfkbMYp.js";import"./if-defined-ELOi9WTw.js";import"./BackdropMixin-QTfFZEFW.js";import"./v4-CmTdKEVZ.js";import"./class-map-D6GOf_OX.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CdTzQUv_.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
