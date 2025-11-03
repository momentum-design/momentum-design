import{C as i}from"./ControlTypeMixin-B7SPAPOz.js";import{E as d,k as l}from"./iframe-CntZQSOW.js";import{p as a}from"./index-BIOIFKwX.js";import"./index-Lj6Qf_K8.js";import"./index-BJgsoOGm.js";import"./preload-helper-C1FmrZbK.js";import"./index-BJHTAjgl.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DKXKIAWE.js";import"./listitem.component-Dl_p41kc.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CqIO6ICq.js";import"./DisabledMixin-C-eXDs22.js";import"./index-C7nOeSYX.js";import"./formfieldwrapper.constants-CGy7PSdB.js";import"./toggle.constants-CDR96SVF.js";import"./index-C0QZXB_W.js";import"./popover.component-cxqe1REV.js";import"./if-defined-BtXjAhE-.js";import"./BackdropMixin-q9EAzM6W.js";import"./v4-CmTdKEVZ.js";import"./class-map-DyCWbkrW.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DNTyJFaN.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
