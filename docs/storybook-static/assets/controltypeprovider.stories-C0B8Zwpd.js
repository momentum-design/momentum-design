import{C as l}from"./ControlTypeMixin-CILlq56x.js";import{F as d,k as i}from"./iframe-C9zBfpfZ.js";import{p as a}from"./index-x4X1EYSm.js";import"./index-CnmQVdWQ.js";import"./index-1RubOCY_.js";import"./preload-helper-C1FmrZbK.js";import"./index-D5LOnZrI.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DzAFBuwl.js";import"./listitem.component-DLmkdHnD.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-D7RnmEw2.js";import"./DisabledMixin-5uIk7xY-.js";import"./index-DjeScPHl.js";import"./formfieldwrapper.constants-CjQ631D2.js";import"./popover.constants-DDO32NNp.js";import"./toggle.constants-BIU7yV23.js";import"./index-CvY0x5fh.js";import"./popover.component-CbSBswom.js";import"./if-defined-Cp73i_az.js";import"./BackdropMixin-Yj8-oC9G.js";import"./v4-CmTdKEVZ.js";import"./class-map-uVFY372Y.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DWtocKKS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
