import{C as l}from"./ControlTypeMixin-Dz0DWNbw.js";import{C as d,k as i}from"./iframe-C-ScMBWt.js";import{p as a}from"./index-Bzx2pL7c.js";import"./index-D9QQhBr-.js";import"./index-C79lCWwI.js";import"./preload-helper-C1FmrZbK.js";import"./index-CpnsRmMk.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B5vk-MAU.js";import"./listitem.component-Dss2ph7H.js";import"./query-assigned-elements-Cq-zjaBr.js";import"./DisabledMixin-Bd0Kod_E.js";import"./KeyDownHandledMixin-B13HiPnP.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CkMg_zck.js";import"./index-BTRreeIg.js";import"./formfieldwrapper.constants-CJWkzW9T.js";import"./popover.constants-BMO7-Q45.js";import"./toggle.constants-DCjS31l2.js";import"./index-DLedpESV.js";import"./popover.component-BpKHG_KS.js";import"./if-defined-BNUT9LZm.js";import"./BackdropMixin-CRKbfqZD.js";import"./v4-CmTdKEVZ.js";import"./class-map-CaNaj-qx.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CKNBD0mc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
