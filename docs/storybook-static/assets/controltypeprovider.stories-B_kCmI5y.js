import{C as l}from"./ControlTypeMixin-DwxYMQVL.js";import{E as d,k as i}from"./iframe-CCrWkKwY.js";import{p as a}from"./index-Dh77g3mc.js";import"./index-BjcI64kd.js";import"./index-Uy7Eb8EJ.js";import"./preload-helper-C1FmrZbK.js";import"./index-DUJFe8Kg.js";import"./index-DTrDRi1E.js";import"./menuitem.component-K5wSsfmW.js";import"./listitem.component-C6RvAFmY.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-C4bLtOS_.js";import"./DisabledMixin-DS6t65lW.js";import"./index-CX5-c82n.js";import"./formfieldwrapper.constants-CsINULPA.js";import"./toggle.constants-C0iB9NNF.js";import"./index-CAZFAKVB.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-CX8rKlcv.js";import"./if-defined-pVzLBalz.js";import"./BackdropMixin-C4Dx_9R9.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dz1w4_lU.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BytoMFP9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
