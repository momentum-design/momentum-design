import{C as l}from"./ControlTypeMixin-BAOZ3y8Z.js";import{C as d,k as i}from"./iframe-BV7DidLN.js";import{p as a}from"./index-DaTwCGbh.js";import"./index-CTUsaHaF.js";import"./index-DVLD3Y4m.js";import"./preload-helper-C1FmrZbK.js";import"./index-D1Qet_wC.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BV9KfnYw.js";import"./listitem.component-DVnDAGsl.js";import"./query-assigned-elements-Bh84Ov9l.js";import"./DisabledMixin-CFB-Ad_A.js";import"./KeyDownHandledMixin-DOYn_X21.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-C8azwNAe.js";import"./index-CXk1oEcJ.js";import"./formfieldwrapper.constants-DPxzLosz.js";import"./popover.constants-DiPcIeLp.js";import"./toggle.constants-CJk2pR45.js";import"./index-D87L6Rya.js";import"./popover.component-B7wtNSM3.js";import"./if-defined-CldWBRdg.js";import"./BackdropMixin-Gl5vXIzD.js";import"./v4-CmTdKEVZ.js";import"./class-map-q4_hNn03.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DnmajQ46.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
