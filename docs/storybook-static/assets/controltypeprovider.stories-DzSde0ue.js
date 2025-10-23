import{C as l}from"./ControlTypeMixin-DpNAD8lT.js";import{E as d,k as i}from"./iframe-CJuJtO0W.js";import{p as a}from"./index-c7TmB17Z.js";import"./index-BP5x3Vio.js";import"./index-BtU_qYwS.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dz102O1-.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DZpl-y-O.js";import"./listitem.component-4dT2oHSg.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DDXzgXKq.js";import"./DisabledMixin-PZey5chR.js";import"./index-DZh3Q_4E.js";import"./formfieldwrapper.constants-ChaxLmEN.js";import"./toggle.constants-DmhacfHK.js";import"./index-BjQDfEEW.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-B0sMUDMu.js";import"./if-defined-BM3CSEcf.js";import"./BackdropMixin-Dtm26Bug.js";import"./v4-CmTdKEVZ.js";import"./class-map-DrqiN78Z.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DkD7D0a9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
