import{C as l}from"./ControlTypeMixin-BAFW96aR.js";import{C as d,k as i}from"./iframe-CSEbSeLd.js";import{p as a}from"./index-CFX7vLLY.js";import"./index-J6glfvNI.js";import"./index-Bx600MVU.js";import"./preload-helper-C1FmrZbK.js";import"./index-79A2f75A.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cfr_ugIF.js";import"./listitem.component-X9g0AhGq.js";import"./query-assigned-elements-zjJw2rW7.js";import"./DisabledMixin-BYOr4kmy.js";import"./KeyDownHandledMixin-BvrOgjpf.js";import"./index-C3guw4VT.js";import"./formfieldwrapper.constants-d11lojiF.js";import"./popover.constants-TqoNo-Pq.js";import"./toggle.constants-D4QREVTR.js";import"./index-C1feI1Mt.js";import"./popover.component-JK6CqS_M.js";import"./if-defined-DGbgoXGT.js";import"./BackdropMixin-93y7-T8N.js";import"./v4-CmTdKEVZ.js";import"./class-map--zZ3O8_v.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DBFCs5tQ.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
