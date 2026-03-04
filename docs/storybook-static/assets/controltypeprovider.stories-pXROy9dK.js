import{C as l}from"./ControlTypeMixin-CU1gcZXf.js";import{C as d,k as i}from"./iframe-TwM3RJg9.js";import{p as a}from"./index-CaIoQEmn.js";import"./index-LeJDGVDD.js";import"./index-C970yyEr.js";import"./preload-helper-C1FmrZbK.js";import"./index-DWu_m_X8.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CqjtF2FL.js";import"./listitem.component-B5tUmfbG.js";import"./query-assigned-elements-C9K0yGtv.js";import"./DisabledMixin-AWCBmPqx.js";import"./KeyDownHandledMixin-B4Lx4f46.js";import"./index-CNvFWGCh.js";import"./formfieldwrapper.constants-Cd2CLrMZ.js";import"./popover.constants-DOcYu1Pq.js";import"./toggle.constants-B9PoBpw5.js";import"./index-BMSLE1nr.js";import"./popover.component-DHvLuXbL.js";import"./if-defined-i7u2DWOz.js";import"./BackdropMixin-CB2SBnKp.js";import"./v4-CmTdKEVZ.js";import"./class-map-CFpTzikN.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D-VNeofp.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
