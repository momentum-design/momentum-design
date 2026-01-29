import{C as l}from"./ControlTypeMixin-BoBfraXU.js";import{H as d,k as i}from"./iframe-CkDSCEjt.js";import{p as a}from"./index-BkxbWL5q.js";import"./index-Dzv2cJ6v.js";import"./index-BdLj9og2.js";import"./preload-helper-C1FmrZbK.js";import"./index-BZE8OXC2.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C5kc12im.js";import"./listitem.component-BpPXYMXz.js";import"./query-assigned-elements-DTTXiUqc.js";import"./DisabledMixin-B2HXIz_U.js";import"./KeyToActionMixin-D50HlRl3.js";import"./index-9_6q8fdB.js";import"./formfieldwrapper.constants--P7WD5m-.js";import"./popover.constants-CBMvGRXF.js";import"./toggle.constants-D4y2GVT6.js";import"./index-j2dVkqlS.js";import"./popover.component-5KK-aGWf.js";import"./if-defined-0j_0xcOz.js";import"./BackdropMixin-BNxF4h03.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-CG1eKUfn.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-9XoEW-mQ.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
