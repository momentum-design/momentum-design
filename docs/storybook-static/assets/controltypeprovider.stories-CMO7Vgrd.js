import{C as i}from"./index-r9Ruo1tq.js";import{E as d,k as l}from"./iframe-D7ojHcDY.js";import{p as a}from"./index-BVPWEBMj.js";import"./index-DA7ZFDSh.js";import"./index-DEeT7GJd.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-A1n0EOKA.js";import"./DisabledMixin-CRYIZU9q.js";import"./formfieldwrapper.constants-CQftVIFF.js";import"./toggle.constants-DIBorXhz.js";import"./index-qlvzcsBZ.js";import"./popover.component-DQAFYQYE.js";import"./base-DIkkzJ-c.js";import"./if-defined-BS4u7X0m.js";import"./BackdropMixin-DmZOp8zy.js";import"./v4-CmTdKEVZ.js";import"./class-map-HVg4sH9l.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-Blsf6FUq.js";import"./listitem.component-JkfLgvwz.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-B5U5o4yE.js";import"./menuitemcheckbox.constants-B6Tu_voc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
