import{C as i}from"./ControlTypeMixin-2F4xUd37.js";import{E as d,k as l}from"./iframe-C_acqUys.js";import{p as a}from"./index-CrQpdXBI.js";import"./index-mszXhPI5.js";import"./index-9nd-c9NE.js";import"./preload-helper-C1FmrZbK.js";import"./index-QTNPF7LG.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CdH1URxo.js";import"./listitem.component-CpA9W3OB.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CJ4BfYJM.js";import"./DisabledMixin-CXWNIArP.js";import"./index-cW81xtiw.js";import"./formfieldwrapper.constants-DdjyEB24.js";import"./toggle.constants-BAauZWiy.js";import"./index-DZrOWZ7e.js";import"./popover.component-ijlEMbpG.js";import"./if-defined-5ZqpHmyY.js";import"./BackdropMixin-CiOz4kDY.js";import"./v4-CmTdKEVZ.js";import"./class-map-n2_I5b5r.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Dv8Iddf1.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
