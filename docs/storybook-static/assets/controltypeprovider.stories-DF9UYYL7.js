import{C as i}from"./ControlTypeMixin-pOe0BKKa.js";import{E as d,k as l}from"./iframe-C75P9SA2.js";import{p as a}from"./index-D1npLFpQ.js";import"./index-DAWtRZBV.js";import"./index-r4ermNkA.js";import"./preload-helper-C1FmrZbK.js";import"./index-C1AES1ef.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dtd-QYc5.js";import"./listitem.component-DH9CDDFm.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DrAohP6k.js";import"./DisabledMixin-BOa0uV5G.js";import"./index-B69u-rNp.js";import"./formfieldwrapper.constants-6Z3ajpXO.js";import"./toggle.constants-S_6VsLyU.js";import"./index-Dg3Pvlce.js";import"./popover.component-DbJvY94D.js";import"./if-defined-CZ8A3pCa.js";import"./BackdropMixin-DW6eTJQf.js";import"./v4-CmTdKEVZ.js";import"./class-map-9sx_XhFO.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CJk04Hfw.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
