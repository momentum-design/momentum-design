import{C as i}from"./index-QFj3HbcK.js";import{E as d,k as l}from"./iframe-8kqUpADA.js";import{p as a}from"./index-CelDXb3G.js";import"./index-BvjltNux.js";import"./index-DDoXQLKD.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-DjVwH2rm.js";import"./DisabledMixin-CF3InGaq.js";import"./toggle.constants-FOpweFLD.js";import"./index-CQAMrxRF.js";import"./popover.component-DJCvoBjJ.js";import"./base-DIkkzJ-c.js";import"./if-defined-BsU8Vqar.js";import"./BackdropMixin-C9PuOA7g.js";import"./v4-CmTdKEVZ.js";import"./class-map-CyevkJ0V.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-C2S1YnPE.js";import"./listitem.component-Bm2wo-vk.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-B0wX-7IC.js";import"./menuitemcheckbox.constants-DnC84rJc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
