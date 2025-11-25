import{C as i}from"./ControlTypeMixin-DNMf4tqg.js";import{E as d,k as l}from"./iframe-D498-k7l.js";import{p as a}from"./index-Ba9hZ_UX.js";import"./index-Cy9haGer.js";import"./index-Denl1ZmM.js";import"./preload-helper-C1FmrZbK.js";import"./index-B0je40HE.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CgljxNUQ.js";import"./listitem.component-CgyJKiN9.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DnY-shag.js";import"./DisabledMixin-CZU7sAIv.js";import"./index-DolItCwl.js";import"./formfieldwrapper.constants-hxdQGRLD.js";import"./toggle.constants-zGL5TVg0.js";import"./index-DHjFqm2O.js";import"./popover.component-BqP-chZ0.js";import"./if-defined-DmVFNqZU.js";import"./BackdropMixin-CPcm-Ith.js";import"./v4-CmTdKEVZ.js";import"./class-map-BAKSKn3M.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DgezFUeq.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
