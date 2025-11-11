import{C as i}from"./ControlTypeMixin-DmGqptYu.js";import{E as d,k as l}from"./iframe-CuUJoUXQ.js";import{p as a}from"./index-J8qpyfxx.js";import"./index-BIf7-wLx.js";import"./index-DjEzlEmu.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dpk1082Q.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BSP2GPE9.js";import"./listitem.component-VVpS57Zt.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DqUTM7io.js";import"./DisabledMixin-YOIh_EIm.js";import"./index-CqzPnxIz.js";import"./formfieldwrapper.constants-uH3MhTOz.js";import"./toggle.constants-Dyqgmo-h.js";import"./index-DMnuDsOM.js";import"./popover.component-C3ugb-i_.js";import"./if-defined-DatWz75s.js";import"./BackdropMixin-DFDBsoLi.js";import"./v4-CmTdKEVZ.js";import"./class-map-D7oIe5Ra.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CJuzzyuK.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
