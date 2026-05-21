import{C as l}from"./ControlTypeMixin-BFxgsSk2.js";import{C as d,k as i}from"./iframe-C8xpa8IM.js";import{p as a}from"./index-DSP_6cqO.js";import"./index-DwZG74SD.js";import"./index-DBq7MkKS.js";import"./preload-helper-C1FmrZbK.js";import"./index-CuTGvYTn.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DHKM8i4b.js";import"./listitem.component-CAkwhX8u.js";import"./query-assigned-elements-s5F0nVqY.js";import"./DisabledMixin-D1XMYTMj.js";import"./KeyDownHandledMixin-BeY9ikCi.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BBf0QGRa.js";import"./index-hsCcRC_O.js";import"./formfieldwrapper.constants-s7omBes8.js";import"./popover.constants-ChlCbXoY.js";import"./toggle.constants-CCt28F_v.js";import"./index-DPTxcvrG.js";import"./popover.component-BuHd8U2b.js";import"./if-defined-BMORz9nb.js";import"./BackdropMixin-Dxhc_1RK.js";import"./v4-CmTdKEVZ.js";import"./class-map-DeKmL0sc.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-a4wcbbKn.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
