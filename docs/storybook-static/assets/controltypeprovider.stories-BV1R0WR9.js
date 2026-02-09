import{C as i}from"./ControlTypeMixin-DGubvEde.js";import{C as d,k as l}from"./iframe-lqtK641B.js";import{p as a}from"./index-IC5axiHf.js";import"./index-tlVt8lnq.js";import"./index-B_xSE9R4.js";import"./preload-helper-C1FmrZbK.js";import"./index-CKP4Olr3.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C_1zW4k1.js";import"./listitem.component-BeeueDiH.js";import"./query-assigned-elements-CgmFqUSx.js";import"./DisabledMixin-X-8L2ccJ.js";import"./KeyDownHandledMixin-U8QDj86m.js";import"./index-BSeCb9lg.js";import"./formfieldwrapper.constants-CAoyP15Q.js";import"./popover.constants-CGmF6nv-.js";import"./toggle.constants-Cb-JwSWa.js";import"./index-Tr5aUhft.js";import"./popover.component-BySjo-Lv.js";import"./if-defined-B9Bf-iG8.js";import"./BackdropMixin-CT1n56ho.js";import"./v4-CmTdKEVZ.js";import"./class-map-C6wU5LRk.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DyP21w21.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
