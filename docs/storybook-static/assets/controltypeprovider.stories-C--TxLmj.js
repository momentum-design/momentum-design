import{C as l}from"./ControlTypeMixin-Cp4cGvCL.js";import{E as d,k as i}from"./iframe-B2YnbzSa.js";import{p as a}from"./index-DO1SwZdn.js";import"./index-Dc2xhe9K.js";import"./index-C1S01Y7-.js";import"./preload-helper-C1FmrZbK.js";import"./index-DYGP0gK1.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BVyX15P7.js";import"./listitem.component-CmB4-zHD.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Bpn1jBm_.js";import"./DisabledMixin-D4sdQ94t.js";import"./index-B2jEIR9l.js";import"./formfieldwrapper.constants-BNdeJIj6.js";import"./toggle.constants-BOwmYVHy.js";import"./index-Dn02oovH.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-DV2_itj3.js";import"./if-defined-P6qiCRpl.js";import"./BackdropMixin-D360VNLr.js";import"./v4-CmTdKEVZ.js";import"./class-map-DYOUBv0G.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BUf8r-Ev.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
