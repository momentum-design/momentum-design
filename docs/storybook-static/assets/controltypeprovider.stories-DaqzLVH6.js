import{C as i}from"./ControlTypeMixin-BZ0oKTlg.js";import{E as d,k as l}from"./iframe-CEKo-JXY.js";import{p as a}from"./index-CFCvY7gN.js";import"./index-mqpFsqjy.js";import"./index-uwmqaYDU.js";import"./preload-helper-C1FmrZbK.js";import"./index-6vUjwAdH.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dl-D_3Bv.js";import"./listitem.component-CZNFgLGv.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CdhXJLRg.js";import"./DisabledMixin-BaIDnvgN.js";import"./index-Wy6atEKy.js";import"./formfieldwrapper.constants-rsoZlaBJ.js";import"./toggle.constants-DKg0y9eE.js";import"./index-B9IRq2YG.js";import"./popover.component-CY1GZ30k.js";import"./if-defined-D_LYpS0s.js";import"./BackdropMixin-CY_oOpXT.js";import"./v4-CmTdKEVZ.js";import"./class-map-B_67JOfd.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BYGjE92O.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
