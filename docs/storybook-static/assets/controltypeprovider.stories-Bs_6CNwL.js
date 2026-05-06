import{C as l}from"./ControlTypeMixin-BuypBuYX.js";import{C as d,k as i}from"./iframe-CuwwjEPU.js";import{p as a}from"./index-BUAXZhb3.js";import"./index-Dd5c5l2d.js";import"./index-CAIxOEaB.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dz9WYf3C.js";import"./index-DTrDRi1E.js";import"./menuitem.component-f7bTVXie.js";import"./listitem.component-Y7UADEbZ.js";import"./query-assigned-elements-CV6qDgrd.js";import"./DisabledMixin-JRvZtrzz.js";import"./KeyDownHandledMixin-di-nWJH6.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DNHsG2Nl.js";import"./index-DSycAMzR.js";import"./formfieldwrapper.constants-CNXOReqC.js";import"./popover.constants-CEMNA4wO.js";import"./toggle.constants-C8PcKxMQ.js";import"./index-Ba1c_vvC.js";import"./popover.component-D0l3az6X.js";import"./if-defined-B4bOhVoh.js";import"./BackdropMixin-BMslCg1E.js";import"./v4-CmTdKEVZ.js";import"./class-map-b1ztp_cS.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DponPF9k.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
