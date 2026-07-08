import{C as i}from"./ControlTypeMixin-8Akt6mUT.js";import{C as d,k as l}from"./iframe-DlamQL43.js";import{p as a}from"./index-Dnk-VUcd.js";import"./index-CH_-Q6K_.js";import"./index-CIXQpXln.js";import"./preload-helper-C1FmrZbK.js";import"./index-sG7pxkDn.js";import"./index-DTrDRi1E.js";import"./menuitem.component-rCypWfaA.js";import"./listitem.component-DadPCQP0.js";import"./DisabledMixin-CwSPwUg9.js";import"./KeyDownHandledMixin-DbGrftqp.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DId07aVR.js";import"./index-B1P1j-mJ.js";import"./formfieldwrapper.constants-De-sG0Xt.js";import"./popover.constants-B7RW06LF.js";import"./statusmessage.constants-gZzFHwER.js";import"./toggle.constants-Y6qq2pH1.js";import"./index-QvGi2Q_A.js";import"./popover.component-BSCmM0FI.js";import"./BackdropMixin-CITm6xqQ.js";import"./menuitemcheckbox.constants-BHxZFZeN.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,F={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const G=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,G as __namedExportsOrder,F as default};
