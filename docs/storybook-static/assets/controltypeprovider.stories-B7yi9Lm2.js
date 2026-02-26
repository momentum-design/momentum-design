import{C as l}from"./ControlTypeMixin-BRTiQ_0x.js";import{C as d,k as i}from"./iframe-DLfB9FYH.js";import{p as a}from"./index-CilSaSXZ.js";import"./index-de4fbQTQ.js";import"./index-DUl1sQEv.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bo7bDdtg.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C3FvBQqI.js";import"./listitem.component-DAlD_UV7.js";import"./query-assigned-elements-B1JG_aId.js";import"./DisabledMixin-B8bLtRzX.js";import"./KeyDownHandledMixin-D8dzwUl5.js";import"./index-CRJhc-la.js";import"./formfieldwrapper.constants-CZrVRtIg.js";import"./popover.constants-Dz9-II2W.js";import"./toggle.constants-Bh_aYUp_.js";import"./index-DuKU1llb.js";import"./popover.component-D2cBzAI3.js";import"./if-defined-CdnasZhd.js";import"./BackdropMixin-Bz48HOOx.js";import"./v4-CmTdKEVZ.js";import"./class-map-Ax82pJYJ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CNc5OEw-.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
