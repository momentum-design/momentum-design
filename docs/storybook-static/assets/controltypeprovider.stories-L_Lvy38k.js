import{C as l}from"./ControlTypeMixin-Di3jPuAV.js";import{C as d,k as i}from"./iframe-DMKvmg4g.js";import{p as a}from"./index-BkefR7h9.js";import"./index-CwrW0Xbt.js";import"./index-BlqgWu3I.js";import"./preload-helper-C1FmrZbK.js";import"./index-Ds0UynS0.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CCRZyKEi.js";import"./listitem.component-BC1inffm.js";import"./query-assigned-elements-RO4OkMl_.js";import"./DisabledMixin-CDwnfp-E.js";import"./KeyDownHandledMixin-7ucnFMsl.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-fcNpD3U2.js";import"./index-CZ0z3Uo2.js";import"./formfieldwrapper.constants-DCkLar7x.js";import"./popover.constants-Cg498ayA.js";import"./toggle.constants-CSxfbFWA.js";import"./index-CaGQ-DNt.js";import"./popover.component-Dlahm4UF.js";import"./if-defined-CuJZRpWJ.js";import"./BackdropMixin-BGaY9fkp.js";import"./v4-CmTdKEVZ.js";import"./class-map-Cfajzu6t.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D8apsMaN.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
