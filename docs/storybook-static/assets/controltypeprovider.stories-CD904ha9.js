import{C as i}from"./ControlTypeMixin-B3SvpYn1.js";import{C as d,k as l}from"./iframe-CNG6VSxf.js";import{p as a}from"./index-CXtCtykl.js";import"./index-DfVJpo6r.js";import"./index-DvuS6Vt9.js";import"./preload-helper-C1FmrZbK.js";import"./index-cqHw6aC_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DS1GlLoK.js";import"./listitem.component-CtW-wVs6.js";import"./DisabledMixin-CfRJujOM.js";import"./KeyDownHandledMixin-CPK6jEEv.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-pkZRPQ8v.js";import"./index-Cjlk5iPF.js";import"./formfieldwrapper.constants-NEri1RtW.js";import"./popover.constants-D8MVBnox.js";import"./statusmessage.constants-DZ2W228E.js";import"./toggle.constants-Bgbx5itf.js";import"./index-AGx8j2Sc.js";import"./popover.component-C9BUIyIB.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-CCjCIFfO.js";import"./menuitemcheckbox.constants-C_EVDlWQ.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
