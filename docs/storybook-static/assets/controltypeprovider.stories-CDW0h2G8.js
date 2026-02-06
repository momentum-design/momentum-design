import{C as l}from"./ControlTypeMixin-BomUtsjC.js";import{H as d,k as i}from"./iframe-CDUGfpod.js";import{p as a}from"./index-CwpeCgfw.js";import"./index-iJckgp_8.js";import"./index-w5165bEB.js";import"./preload-helper-C1FmrZbK.js";import"./index-DKlCMvXJ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CM33xN12.js";import"./listitem.component-qTZNCNXy.js";import"./query-assigned-elements-CjG7Doqp.js";import"./DisabledMixin-BD7V_ocS.js";import"./KeyToActionMixin-Bw1bZoEt.js";import"./index-TsqJI7Fs.js";import"./formfieldwrapper.constants-BU2emjgk.js";import"./popover.constants-D3dXLwXr.js";import"./toggle.constants-DCQEfncn.js";import"./index-DCNeCPCa.js";import"./popover.component-Dcc9CLiV.js";import"./if-defined-4tR0mpEg.js";import"./BackdropMixin-DKkkte49.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-Bfp2a_Dv.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B71a1u1c.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
