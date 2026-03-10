import{C as l}from"./ControlTypeMixin-Dw2KPkOe.js";import{C as d,k as i}from"./iframe-CXCCK7zk.js";import{p as a}from"./index-CgrR2bZ8.js";import"./index-ByNQ3_k0.js";import"./index-CTem4aYe.js";import"./preload-helper-C1FmrZbK.js";import"./index-SjxeI1HO.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ChxVdQdP.js";import"./listitem.component-CJgnljlo.js";import"./query-assigned-elements-D3DjPdCI.js";import"./DisabledMixin-BsjtdTnc.js";import"./KeyDownHandledMixin-DSh9go4o.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DWIo6e-w.js";import"./index-CyadFqOl.js";import"./formfieldwrapper.constants-fLF02Z7M.js";import"./popover.constants-Dv1CTtVK.js";import"./toggle.constants-C1JdheCZ.js";import"./index-Mzt3XibD.js";import"./popover.component-CwmNKHCh.js";import"./if-defined-BuZDkRkv.js";import"./BackdropMixin-CHyoexZN.js";import"./v4-CmTdKEVZ.js";import"./class-map-8p5epLAh.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D_soa1h_.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
