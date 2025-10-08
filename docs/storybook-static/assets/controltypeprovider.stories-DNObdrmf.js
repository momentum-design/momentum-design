import{C as i}from"./index-D6Ld4aLY.js";import{E as d,k as l}from"./iframe-DzqYamvY.js";import{p as a}from"./index-BTP5H-oT.js";import"./index-Djx5J2Jl.js";import"./index-CaEHn3uW.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-APXzi980.js";import"./DisabledMixin-CpkDI-ME.js";import"./toggle.constants-CVUhAdcK.js";import"./index-B7wkTwDe.js";import"./popover.component-DFpP0uJF.js";import"./base-DIkkzJ-c.js";import"./if-defined-B9rnUTwp.js";import"./BackdropMixin-B9sShFWL.js";import"./v4-CmTdKEVZ.js";import"./class-map-CYEmizhC.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-CRbdKWNZ.js";import"./listitem.component-Pg2ywbUm.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-CNVX9vbi.js";import"./menuitemcheckbox.constants-BilTJBVv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
