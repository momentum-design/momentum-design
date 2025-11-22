import{C as i}from"./ControlTypeMixin-NPswGCEq.js";import{E as d,k as l}from"./iframe-DJQ9QsE0.js";import{p as a}from"./index-n_2mx66T.js";import"./index-D0G_qHR5.js";import"./index-ioH6The8.js";import"./preload-helper-C1FmrZbK.js";import"./index-D1Pu2SQM.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CdYaA47e.js";import"./listitem.component-BGeiqgYp.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DECB1wvR.js";import"./DisabledMixin-BXYpOCIo.js";import"./index-DzXP-jJT.js";import"./formfieldwrapper.constants-BEbV-O-J.js";import"./toggle.constants-DQCgtJ9-.js";import"./index-C219V2IO.js";import"./popover.component-jORqmvI2.js";import"./if-defined-t5lRFX_k.js";import"./BackdropMixin-oFpL7kJx.js";import"./v4-CmTdKEVZ.js";import"./class-map-CL_ridQu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-lK5U5B1v.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
