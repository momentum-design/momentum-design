import{C as i}from"./ControlTypeMixin-MzHxyWUw.js";import{C as d,k as l}from"./iframe-CwldXf1M.js";import{p as a}from"./index-BZ-vQjHB.js";import"./index-DwkZHmkC.js";import"./index-Cnua-BQs.js";import"./preload-helper-C1FmrZbK.js";import"./index-DxF-zGA7.js";import"./index-DTrDRi1E.js";import"./menuitem.component-9RxZAQMK.js";import"./listitem.component-B8IFAmeH.js";import"./DisabledMixin-CwzXJxHS.js";import"./KeyDownHandledMixin-Da5hzdro.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BlhvxcSD.js";import"./index-DY2CpcuX.js";import"./formfieldwrapper.constants-Gy0GTCiA.js";import"./popover.constants-C0jdl7Tu.js";import"./statusmessage.constants-jX0AhZIy.js";import"./toggle.constants-CrD_enjQ.js";import"./index-CALBSd0M.js";import"./popover.component-BKX6VDd8.js";import"./BackdropMixin-r0_gKnDt.js";import"./FocusTrapMixin-D7hhtrmL.js";import"./menuitemcheckbox.constants-BE6nzT8L.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
