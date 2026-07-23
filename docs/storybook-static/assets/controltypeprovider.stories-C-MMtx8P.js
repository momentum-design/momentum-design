import{C as i}from"./ControlTypeMixin-FDt0rgZ2.js";import{C as d,k as l}from"./iframe-D6Vt3Vpp.js";import{p as a}from"./index-C52gGSIp.js";import"./index-84_byaAq.js";import"./index-B2ru7FxM.js";import"./preload-helper-C1FmrZbK.js";import"./index-BZJA5iau.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B0wDd3l5.js";import"./listitem.component-COOTL_Fa.js";import"./DisabledMixin-BJe3KyEd.js";import"./KeyDownHandledMixin-B9erL2XF.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-Dj7zjHlu.js";import"./index-fukmER6b.js";import"./formfieldwrapper.constants-BDK9tktt.js";import"./popover.constants-qgU1I1Ql.js";import"./statusmessage.constants-CcABXQC5.js";import"./toggle.constants-BPSL7v83.js";import"./index-BehYJbfO.js";import"./popover.component-CHomPK2p.js";import"./BackdropMixin-DiB--SsI.js";import"./menuitemcheckbox.constants-CjRDyIdc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
