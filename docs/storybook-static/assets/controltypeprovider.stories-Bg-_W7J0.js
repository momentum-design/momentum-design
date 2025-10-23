import{C as l}from"./ControlTypeMixin-PvV66jL3.js";import{E as d,k as i}from"./iframe-Bi1VXFcK.js";import{p as a}from"./index-D0GzKGTI.js";import"./index-CbNYxuTa.js";import"./index-D3Hp7BOA.js";import"./preload-helper-C1FmrZbK.js";import"./index-phe64fru.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CWCk8o2L.js";import"./listitem.component-CwevZkY6.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BhlLdX2t.js";import"./DisabledMixin-BppKOdkM.js";import"./index-Co0zt_NJ.js";import"./formfieldwrapper.constants-zpP3GovA.js";import"./toggle.constants-DsWFMuTe.js";import"./index-DmlOONwJ.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-QLOr4QYM.js";import"./if-defined-KwKmEakk.js";import"./BackdropMixin-D4DY2DBP.js";import"./v4-CmTdKEVZ.js";import"./class-map-0eos7byd.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Bq42PPZi.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
