import{C as l}from"./ControlTypeMixin-BB96K_8y.js";import{F as d,k as i}from"./iframe-BK-lkp6o.js";import{p as a}from"./index-3jTwZjJ7.js";import"./index-CjCCfQ_H.js";import"./index-BkJkRQu6.js";import"./preload-helper-C1FmrZbK.js";import"./index-CS5Q6hL0.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D-LD_61V.js";import"./listitem.component-BiNmCK-6.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Vwa8son6.js";import"./DisabledMixin-D7IzNGni.js";import"./index-RwwHvOd_.js";import"./formfieldwrapper.constants-DchxWGiC.js";import"./popover.constants-CBgOp1Ax.js";import"./toggle.constants-BDGaKUhk.js";import"./index-DMokHaoZ.js";import"./popover.component-Dd4TwQTG.js";import"./if-defined-CaiTIpCp.js";import"./BackdropMixin-Bpl3GIBU.js";import"./v4-CmTdKEVZ.js";import"./class-map-CjM-j1x7.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D5dD-t6u.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
