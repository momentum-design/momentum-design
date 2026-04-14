import{C as l}from"./ControlTypeMixin-CWQl9GP4.js";import{C as d,k as i}from"./iframe-CwzjigLR.js";import{p as a}from"./index-D1bVmVCM.js";import"./index-hotVVCpD.js";import"./index-nB2Uq3PO.js";import"./preload-helper-C1FmrZbK.js";import"./index-BtzM2KCC.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DHJ1zFEv.js";import"./listitem.component-BnKZKExS.js";import"./query-assigned-elements-EfBJKIvG.js";import"./DisabledMixin-CyJRAUwj.js";import"./KeyDownHandledMixin-BvzLbuqF.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-C3RWdXJT.js";import"./index-BJdx7qbP.js";import"./formfieldwrapper.constants-BvfjrLPP.js";import"./popover.constants-BAxIiEoR.js";import"./toggle.constants-CmIth3CS.js";import"./index-Bo1xoi9A.js";import"./popover.component-BI_scSJb.js";import"./if-defined-DG6qR9lA.js";import"./BackdropMixin-tEZx2kG9.js";import"./v4-CmTdKEVZ.js";import"./class-map-DtxWxszz.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-n7al96Md.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
