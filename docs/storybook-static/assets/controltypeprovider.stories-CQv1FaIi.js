import{C as l}from"./ControlTypeMixin-_uqJGGnb.js";import{C as d,k as i}from"./iframe-Dz4a6dNK.js";import{p as a}from"./index-Dg9Q50zk.js";import"./index-DbWVTu5X.js";import"./index-LZ8uLqRq.js";import"./preload-helper-C1FmrZbK.js";import"./index-CBPJrR0v.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DPakU1LS.js";import"./listitem.component-ma4hh9y9.js";import"./query-assigned-elements-lXwa_f5N.js";import"./DisabledMixin-BAirPdsU.js";import"./KeyDownHandledMixin-DeHZMei3.js";import"./index-MX4V-mL_.js";import"./formfieldwrapper.constants-sDZb5JwL.js";import"./popover.constants-DNsvfv_d.js";import"./toggle.constants-DRRUbaot.js";import"./index-B7sSv7Sk.js";import"./popover.component-DKGGAHtc.js";import"./if-defined-BIfV3Rdr.js";import"./BackdropMixin-DViOP0B2.js";import"./v4-CmTdKEVZ.js";import"./class-map-iLqmL0PK.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-gUyWY1du.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
