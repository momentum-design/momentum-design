import{C as l}from"./ControlTypeMixin-i3Ysmm0d.js";import{F as d,k as i}from"./iframe-CpTqlRRA.js";import{p as a}from"./index-DBEBfmOO.js";import"./index-CH48BgUL.js";import"./index-vSsc9cg4.js";import"./preload-helper-C1FmrZbK.js";import"./index-U7uVTddP.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ChRd775q.js";import"./listitem.component-DLQyygCE.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Dsqe8mbd.js";import"./DisabledMixin-ADxYaI52.js";import"./index--htQ-kcY.js";import"./formfieldwrapper.constants-aj6mJglu.js";import"./popover.constants-BXsdP22-.js";import"./toggle.constants-DyTxxZuy.js";import"./index-BctStCui.js";import"./popover.component-Dpj6o6-s.js";import"./if-defined-D201r8_n.js";import"./BackdropMixin-DaSOPby4.js";import"./v4-CmTdKEVZ.js";import"./class-map-C5GbW1u6.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CI_nWV8j.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
