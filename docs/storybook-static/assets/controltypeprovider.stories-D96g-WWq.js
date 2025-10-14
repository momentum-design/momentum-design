import{C as i}from"./index-Cp7Qipby.js";import{E as d,k as l}from"./iframe-DmLJKHqi.js";import{p as a}from"./index-DGGYU7tf.js";import"./index-v6QchXHO.js";import"./index-D2sA77vY.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-XThTXGxI.js";import"./DisabledMixin-HMwAwQ4p.js";import"./toggle.constants-C9553ady.js";import"./index-Cfpl9WAt.js";import"./popover.component-BE-KEzCA.js";import"./base-DIkkzJ-c.js";import"./if-defined-_tidrUDI.js";import"./BackdropMixin-CeG_1hSg.js";import"./v4-CmTdKEVZ.js";import"./class-map-BoIg4a81.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-BoXo9gIr.js";import"./listitem.component-BSEqzFJb.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-jMnGaTL1.js";import"./menuitemcheckbox.constants-kox2YR9i.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
