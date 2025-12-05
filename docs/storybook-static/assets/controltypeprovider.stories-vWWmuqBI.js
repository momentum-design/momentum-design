import{C as l}from"./ControlTypeMixin-a0LEOC9_.js";import{F as d,k as i}from"./iframe-C93ychXb.js";import{p as a}from"./index-bgO36agF.js";import"./index-Dp1N6yit.js";import"./index-BwwJlmkd.js";import"./preload-helper-C1FmrZbK.js";import"./index-B7qECx3P.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Z1k_B8v6.js";import"./listitem.component-B820RVE0.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-B6h01s2W.js";import"./DisabledMixin-BVCCD_zI.js";import"./index-DpSNCVgb.js";import"./formfieldwrapper.constants-Ct7UVwkh.js";import"./popover.constants-Dzrzzlst.js";import"./toggle.constants-CnLTftl5.js";import"./index-xg1gX4hi.js";import"./popover.component-SNyoClXb.js";import"./if-defined-CnyXlyTe.js";import"./BackdropMixin-BBVMbF3b.js";import"./v4-CmTdKEVZ.js";import"./class-map-PTPuF7lc.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-S72sfd1P.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
