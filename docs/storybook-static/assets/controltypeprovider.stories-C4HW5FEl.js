import{C as i}from"./ControlTypeMixin-DsFusjWS.js";import{C as d,k as l}from"./iframe-ojQsro1_.js";import{p as a}from"./index-CWGsCnx3.js";import"./index-BAqKKKux.js";import"./index-BqbtLPpp.js";import"./preload-helper-C1FmrZbK.js";import"./index-CBfQUMDE.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BoQ086gn.js";import"./listitem.component-DY_T-4DI.js";import"./query-assigned-elements-Ch3CugO5.js";import"./DisabledMixin-DFNBhceF.js";import"./KeyDownHandledMixin-CwWe2bID.js";import"./index-CFdOomjf.js";import"./formfieldwrapper.constants-DLC9PYne.js";import"./popover.constants-Bk1cvuYk.js";import"./toggle.constants-BS_emkYJ.js";import"./index-CPcbJ-7I.js";import"./popover.component-CgI2Li1_.js";import"./if-defined-CVMw9D_D.js";import"./BackdropMixin-wwWxqvnp.js";import"./v4-CmTdKEVZ.js";import"./class-map-DEbijC-h.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DYhvQyn8.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
