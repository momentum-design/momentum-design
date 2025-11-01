import{C as i}from"./ControlTypeMixin-Bq0kT3Ip.js";import{E as d,k as l}from"./iframe-vAJUMk4U.js";import{p as a}from"./index-Ddh9gXiO.js";import"./index-qkai1bzB.js";import"./index-paSZnO2t.js";import"./preload-helper-C1FmrZbK.js";import"./index-BoooHeSt.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D-Y29C5a.js";import"./listitem.component-CuDt2uY9.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BMKt4Rbs.js";import"./DisabledMixin-BESLbD74.js";import"./index-g3EbTZhr.js";import"./formfieldwrapper.constants-D-hvof3c.js";import"./toggle.constants-9k9YXxIw.js";import"./index-BfDxHvQk.js";import"./popover.component-BkRw7NWo.js";import"./if-defined-CrQmv4c0.js";import"./BackdropMixin-CL6DHw3K.js";import"./v4-CmTdKEVZ.js";import"./class-map-D52HVJ1G.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-WEoZkJ-j.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
