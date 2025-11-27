import{C as i}from"./ControlTypeMixin-wu39TvvY.js";import{E as d,k as l}from"./iframe-DHOQtyml.js";import{p as a}from"./index-CGHaPVXe.js";import"./index-CKhOz83D.js";import"./index-CnHZqDJA.js";import"./preload-helper-C1FmrZbK.js";import"./index-CTR5va3i.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DemX_Ry8.js";import"./listitem.component-8Ay7yom4.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CJnrukpa.js";import"./DisabledMixin-DvdaRsAD.js";import"./index-DDmC7mTe.js";import"./formfieldwrapper.constants-sxhKTaIN.js";import"./toggle.constants-CHaK-eI8.js";import"./index-BDboxI16.js";import"./popover.component-VS8Aqnx3.js";import"./if-defined-DClzWNv2.js";import"./BackdropMixin-DO-GzP2a.js";import"./v4-CmTdKEVZ.js";import"./class-map-DNdlmVg8.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-0t_TXcOD.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
