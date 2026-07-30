import{C as i}from"./ControlTypeMixin-CZet9tp6.js";import{C as d,k as l}from"./iframe-D5qwq8cl.js";import{p as a}from"./index-BqZiOeq9.js";import"./index-CROJBIDd.js";import"./index-C32W-OkB.js";import"./preload-helper-C1FmrZbK.js";import"./index-BfDwIRea.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Bh5ZKuuc.js";import"./listitem.component-COMzI8hi.js";import"./DisabledMixin-D03aknaA.js";import"./KeyDownHandledMixin-BhPsZOr4.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CDNZR22p.js";import"./index-DkpPdBRj.js";import"./formfieldwrapper.constants-DOz-i57s.js";import"./popover.constants-BzuTErsF.js";import"./statusmessage.constants-vPXjPzcT.js";import"./toggle.constants-C3dGJVF9.js";import"./index-BeiOiDoq.js";import"./popover.component-CwItGqRa.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-cSDKf3hj.js";import"./menuitemcheckbox.constants-D8uLtDnP.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
