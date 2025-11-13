import{C as i}from"./ControlTypeMixin-BcLgH4r8.js";import{E as d,k as l}from"./iframe-nms-y5_X.js";import{p as a}from"./index-DyCqEDpJ.js";import"./index-B2AQ1e7m.js";import"./index-Ca3yUZbw.js";import"./preload-helper-C1FmrZbK.js";import"./index-wwPCPOLP.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CKp92CMT.js";import"./listitem.component-KzXJb2Sr.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BkmkYcT3.js";import"./DisabledMixin-DCQQyJqL.js";import"./index-I2p-ucsr.js";import"./formfieldwrapper.constants-NS-cyK4Z.js";import"./toggle.constants-BvtvSEUN.js";import"./index-CXa8f8z1.js";import"./popover.component-SURJ6KsT.js";import"./if-defined-CrGxwZ5x.js";import"./BackdropMixin-DTViKQK_.js";import"./v4-CmTdKEVZ.js";import"./class-map-BNa-Ucvv.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-_DtDc3Nq.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
