import{C as i}from"./ControlTypeMixin-BuUhy9QJ.js";import{C as d,k as l}from"./iframe-Cgnjs7Wo.js";import{p as a}from"./index-B4M2EJx2.js";import"./index-CKA0eFoW.js";import"./index--q0fGyzZ.js";import"./preload-helper-C1FmrZbK.js";import"./index-CzFY6ATS.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dk5D2P9z.js";import"./listitem.component-CqrFkwTP.js";import"./query-assigned-elements-B0iRwnLd.js";import"./DisabledMixin-BLgOOnKX.js";import"./KeyDownHandledMixin-yqNFonEr.js";import"./index-DGUTxu7E.js";import"./formfieldwrapper.constants-DymGAlLV.js";import"./popover.constants-XNfCQcX_.js";import"./toggle.constants-CxwNgK5x.js";import"./index-DB_wB5kS.js";import"./popover.component-BEDzYT9p.js";import"./if-defined-f131Qllb.js";import"./BackdropMixin-Ifzym4Gk.js";import"./v4-CmTdKEVZ.js";import"./class-map-B9j1Qnzg.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-2AhtVz6u.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
