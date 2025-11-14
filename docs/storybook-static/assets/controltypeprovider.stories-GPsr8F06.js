import{C as i}from"./ControlTypeMixin-CZjarOrh.js";import{E as d,k as l}from"./iframe-kINOlZoc.js";import{p as a}from"./index-2Vekin4W.js";import"./index-CzRljrRY.js";import"./index-DZgl7DbQ.js";import"./preload-helper-C1FmrZbK.js";import"./index-BflxikZN.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B2u_8sjI.js";import"./listitem.component-BnVTAS5x.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-ol1SRgdt.js";import"./DisabledMixin-Cszf8wsN.js";import"./index-Cf1Y8bXr.js";import"./formfieldwrapper.constants-Bokw_nTU.js";import"./toggle.constants-BCXaiqpv.js";import"./index-BXWk2LpY.js";import"./popover.component-DAPFYr5s.js";import"./if-defined-BnQECZFN.js";import"./BackdropMixin-Dd4LbKhP.js";import"./v4-CmTdKEVZ.js";import"./class-map-qSYdtQRp.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Rnoa4LN1.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
