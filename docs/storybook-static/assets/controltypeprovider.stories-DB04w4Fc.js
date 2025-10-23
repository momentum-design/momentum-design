import{C as l}from"./ControlTypeMixin-B1exOLpO.js";import{E as d,k as i}from"./iframe-I75E1rZE.js";import{p as a}from"./index-CviCgKqj.js";import"./index-DAyr4yXI.js";import"./index-Bu53RL21.js";import"./preload-helper-C1FmrZbK.js";import"./index-BvvPAcUL.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DDKDvMd6.js";import"./listitem.component-EoJEWVag.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BRJTdvci.js";import"./DisabledMixin-FUMWD2el.js";import"./index-DKmRK5uC.js";import"./formfieldwrapper.constants-BoO3Fm1t.js";import"./toggle.constants-D4AKXdYM.js";import"./index-BRY0d9oY.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-CJF51NoC.js";import"./if-defined-DV4q595_.js";import"./BackdropMixin-sp_RNfmx.js";import"./v4-CmTdKEVZ.js";import"./class-map-ilLuaENn.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DI6hh1x8.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
