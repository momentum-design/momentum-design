import{C as l}from"./ControlTypeMixin-BzrbIgkT.js";import{C as d,k as i}from"./iframe-BMQAO-1d.js";import{p as a}from"./index-DzaT7ri-.js";import"./index-BEbekLlZ.js";import"./index-DTT3I8se.js";import"./preload-helper-C1FmrZbK.js";import"./index-Ty40rxEB.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cr-3o4wn.js";import"./listitem.component-BENyeGrQ.js";import"./query-assigned-elements-BaVHZofh.js";import"./DisabledMixin-B6ArWvcr.js";import"./KeyDownHandledMixin-D5ID8XRZ.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-UG_zo5pu.js";import"./index-BMsNEBJ0.js";import"./formfieldwrapper.constants-DYQj1U_c.js";import"./popover.constants-BEuc21JW.js";import"./toggle.constants-_Brpuanq.js";import"./index-Dgy9qw7e.js";import"./popover.component-BWvZeF9F.js";import"./if-defined-DjrVqlJq.js";import"./BackdropMixin-DJbsX_HG.js";import"./v4-CmTdKEVZ.js";import"./class-map-CfGnNqh1.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CYqs2qcS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
