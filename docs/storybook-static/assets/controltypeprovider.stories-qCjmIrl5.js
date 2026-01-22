import{C as l}from"./ControlTypeMixin-C3ScRry_.js";import{H as d,k as i}from"./iframe-DPiEtQC6.js";import{p as a}from"./index-DVeu7BgX.js";import"./index-DKviL1kx.js";import"./index-CW5ls5sA.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bbl3QEBF.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cz6RFJH6.js";import"./listitem.component-Cz7_3HRG.js";import"./query-assigned-elements-Cszj43US.js";import"./DisabledMixin-DcbfFkR8.js";import"./KeyToActionMixin-C0pScinA.js";import"./index-ClSnUyQn.js";import"./formfieldwrapper.constants-BPye36mV.js";import"./popover.constants-Cp404HBT.js";import"./toggle.constants-BvtyAHtZ.js";import"./index-PwQcXGaF.js";import"./popover.component-CKPUSr3G.js";import"./if-defined-BBKKqPaV.js";import"./BackdropMixin-8KzPOV1J.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-DTlvrlO6.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CI97kB_s.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
