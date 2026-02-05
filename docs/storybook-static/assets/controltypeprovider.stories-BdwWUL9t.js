import{C as l}from"./ControlTypeMixin-BumuUoRA.js";import{H as d,k as i}from"./iframe-Bay37rkC.js";import{p as a}from"./index-Dw0XfBY4.js";import"./index-SUjnjGvN.js";import"./index-Q20wGARK.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dzd9niSE.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DO3S9Goy.js";import"./listitem.component-Cr7OCsw5.js";import"./query-assigned-elements-BZyHbpF3.js";import"./DisabledMixin-DGD1GTFB.js";import"./KeyToActionMixin-C8CPt1j6.js";import"./index-ld5LYfa8.js";import"./formfieldwrapper.constants-MFXRhHOi.js";import"./popover.constants-CBMdmYuI.js";import"./toggle.constants-CLOroqKo.js";import"./index-gy-EpfP4.js";import"./popover.component-BqP-76wV.js";import"./if-defined-D3HSOGID.js";import"./BackdropMixin-B7-JS3DU.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-CTZHvure.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CZjj6H5r.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
