import{C as l}from"./ControlTypeMixin-JXUM-PDt.js";import{C as d,k as i}from"./iframe-Cavcl6dQ.js";import{p as a}from"./index-hIrr8vyp.js";import"./index-CgE1YRe-.js";import"./index-CVJptL-X.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bb3JVo8y.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DnwmlbiY.js";import"./listitem.component-DDq6tZoK.js";import"./query-assigned-elements-CwX0J_6e.js";import"./DisabledMixin-CGNQC1UC.js";import"./KeyDownHandledMixin-CPPYubiG.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BC3w0Bvn.js";import"./index-RBq4jUTo.js";import"./formfieldwrapper.constants-exHR7UDh.js";import"./popover.constants-CYAM5Uqm.js";import"./toggle.constants-BFuE0Aow.js";import"./index-DAETxhnm.js";import"./popover.component-C9DXTgx2.js";import"./if-defined-s8LTUgFN.js";import"./BackdropMixin-B0QI4s-X.js";import"./v4-CmTdKEVZ.js";import"./class-map-DkfeFzR9.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-cB9ZKqkY.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
