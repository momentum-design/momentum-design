import{C as i}from"./index-Df9a3Z92.js";import{E as d,k as l}from"./iframe-CaqXL4mA.js";import{p as a}from"./index-B7oqDvDi.js";import"./index-DBE4LTmm.js";import"./index-DKgePyzc.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-ZvPRy-Ma.js";import"./DisabledMixin-Dps9fnDj.js";import"./formfieldwrapper.constants-DpWTTTFA.js";import"./toggle.constants-CYm8pPwv.js";import"./index-B6G7a6Tg.js";import"./popover.component-mRHNeWC3.js";import"./base-DIkkzJ-c.js";import"./if-defined-CmgCdheS.js";import"./BackdropMixin-Xu_Mm7Qi.js";import"./v4-CmTdKEVZ.js";import"./class-map-CiyxezPN.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-R4TC0gPs.js";import"./listitem.component-t645nEph.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-BF51J6Hz.js";import"./menuitemcheckbox.constants-DXeBeJOO.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
