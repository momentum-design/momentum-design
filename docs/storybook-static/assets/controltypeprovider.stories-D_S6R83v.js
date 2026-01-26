import{C as l}from"./ControlTypeMixin-BwE4686w.js";import{H as d,k as i}from"./iframe-DBGUNv4F.js";import{p as a}from"./index-DYxC4i4C.js";import"./index-9nbVsZpp.js";import"./index-CUjmEr4w.js";import"./preload-helper-C1FmrZbK.js";import"./index-C-v37Hmt.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cfh0AK1h.js";import"./listitem.component-Bls8r32v.js";import"./query-assigned-elements-CTOlvWWT.js";import"./DisabledMixin-toBsO7Rw.js";import"./KeyToActionMixin-CyA1a_rM.js";import"./index-BtJf69YP.js";import"./formfieldwrapper.constants-CtuU3XED.js";import"./popover.constants-CQwJjFEb.js";import"./toggle.constants-C6Lwe8K8.js";import"./index-BjgVzaWt.js";import"./popover.component-BSR9kose.js";import"./if-defined-ByroiDkB.js";import"./BackdropMixin-pu4YriUi.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-DpTfBzB9.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D_hKBes-.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
