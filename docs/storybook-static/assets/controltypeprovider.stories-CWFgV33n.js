import{C as i}from"./ControlTypeMixin-i8Zx4Qye.js";import{C as d,k as l}from"./iframe-BJBhCjFe.js";import{p as a}from"./index-cTx9WVWq.js";import"./index-tJ8H-cPu.js";import"./index-BRyOvaNG.js";import"./preload-helper-C1FmrZbK.js";import"./index-B2sfePBq.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BwyJBDpH.js";import"./listitem.component-Ciw3kqL7.js";import"./DisabledMixin-B2hR8WV5.js";import"./KeyDownHandledMixin-BLspWFvk.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-Sn1UJROh.js";import"./index-BoAIimHQ.js";import"./formfieldwrapper.constants-CVJnfWHe.js";import"./popover.constants-DWw4zCs4.js";import"./statusmessage.constants-MTPI6JU4.js";import"./toggle.constants-HmujIvGV.js";import"./index-l5f5o1_h.js";import"./popover.component-C1gNgjl9.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-DYc95HfF.js";import"./menuitemcheckbox.constants-CPnFwpT9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
