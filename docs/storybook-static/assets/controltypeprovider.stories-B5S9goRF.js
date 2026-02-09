import{C as i}from"./ControlTypeMixin-CFzcmCzA.js";import{C as d,k as l}from"./iframe-Bm4Ct3z4.js";import{p as a}from"./index-DfOtLkxK.js";import"./index--P6FQ-ec.js";import"./index-C1knFr0c.js";import"./preload-helper-C1FmrZbK.js";import"./index-CfAVHUCC.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DWlzbXfM.js";import"./listitem.component-C4ELX7Vt.js";import"./query-assigned-elements-bPRerVDu.js";import"./DisabledMixin-Be5V8p96.js";import"./KeyDownHandledMixin-B5nxB61D.js";import"./index-kcvCo2Ij.js";import"./formfieldwrapper.constants-lxp6bzgb.js";import"./popover.constants-DqRFTPgY.js";import"./toggle.constants-D2dV9Gh5.js";import"./index-BudxByu1.js";import"./popover.component-CACeywGW.js";import"./if-defined-a2k8tZZF.js";import"./BackdropMixin-3T6fMXZb.js";import"./v4-CmTdKEVZ.js";import"./class-map-m1Er3ru1.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-2UD-FNSX.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
