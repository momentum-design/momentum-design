import{C as l}from"./ControlTypeMixin-m6v70e6Y.js";import{C as d,k as i}from"./iframe-D5_nhDxE.js";import{p as a}from"./index-CuCAJ8l7.js";import"./index-hxug2lV8.js";import"./index-BmRu51Oe.js";import"./preload-helper-C1FmrZbK.js";import"./index-JE5oisxl.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CUBIokBC.js";import"./listitem.component-BjkVMLca.js";import"./query-assigned-elements-CDpPAU4v.js";import"./DisabledMixin-BAU8JVJU.js";import"./KeyDownHandledMixin-sL_lJMjH.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DtEB3iJx.js";import"./index-RSYGqNYH.js";import"./formfieldwrapper.constants-DQfsjwj-.js";import"./popover.constants-DWb8CL7J.js";import"./toggle.constants-BahRn1dG.js";import"./index-C0MGa-5P.js";import"./popover.component-BxLUNmCo.js";import"./if-defined-DPoTFAdO.js";import"./BackdropMixin-74BKBgmd.js";import"./v4-CmTdKEVZ.js";import"./class-map-B33OyEhz.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CbeWWXnN.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
