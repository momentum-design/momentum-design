import{C as l}from"./ControlTypeMixin-Cyd48YZJ.js";import{C as d,k as i}from"./iframe-qMFey-4N.js";import{p as a}from"./index-D5rpDK7t.js";import"./index-EtTyALUl.js";import"./index-yo7FY7K5.js";import"./preload-helper-C1FmrZbK.js";import"./index-YlSjVWT7.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ZQQDVEef.js";import"./listitem.component-Dj4lM4BE.js";import"./query-assigned-elements-DW6v41sv.js";import"./DisabledMixin-DFNWVipU.js";import"./KeyDownHandledMixin-Ca_tehqy.js";import"./index-CuAVrMqq.js";import"./formfieldwrapper.constants-B53b75Aj.js";import"./popover.constants-6GVt1Dsr.js";import"./toggle.constants-CDS-OLau.js";import"./index-5FMwEcS2.js";import"./popover.component-Dfapqifq.js";import"./if-defined-Dt3SjqsG.js";import"./BackdropMixin-B92BGwqe.js";import"./v4-CmTdKEVZ.js";import"./class-map-D1qtapcX.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BjDpog_Y.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
