import{C as l}from"./ControlTypeMixin-BRGznDCY.js";import{C as d,k as i}from"./iframe-WcBvx9Gg.js";import{p as a}from"./index-9EaVoxmk.js";import"./index-KMY7E3BH.js";import"./index-KFP8Rgmq.js";import"./preload-helper-C1FmrZbK.js";import"./index-DFRVgkBb.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B7eWA1Uo.js";import"./listitem.component-jAv5rDvV.js";import"./query-assigned-elements-DwmU_-qD.js";import"./DisabledMixin--b7yAl55.js";import"./KeyDownHandledMixin-B0Hl576L.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-ChZklIr2.js";import"./index-BgpbJsfw.js";import"./formfieldwrapper.constants-B1GP-QvE.js";import"./popover.constants-C9V_jCwN.js";import"./toggle.constants-Zd9C8oLC.js";import"./index-BmMZxnYH.js";import"./popover.component-Crnw61Or.js";import"./if-defined-CyyiHE6v.js";import"./BackdropMixin-DkMEOSho.js";import"./v4-CmTdKEVZ.js";import"./class-map-DPdHpp_k.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CFxisC1-.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
