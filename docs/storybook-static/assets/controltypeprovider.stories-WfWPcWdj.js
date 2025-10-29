import{C as l}from"./ControlTypeMixin-B0WBPS4r.js";import{E as d,k as i}from"./iframe-Dc28Xrb1.js";import{p as a}from"./index-DlRBn3Wd.js";import"./index-BGqYaiMW.js";import"./index-BOmGFrsn.js";import"./preload-helper-C1FmrZbK.js";import"./index-D6AJipRQ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ERkG01gy.js";import"./listitem.component-C5KgqADI.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-JLXIfUOP.js";import"./DisabledMixin-CgpNJ15w.js";import"./index-BA6gUWfp.js";import"./formfieldwrapper.constants-g_pIiBZ5.js";import"./toggle.constants-Bxj9zJKa.js";import"./index-ChSUDjF9.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-DLeZxId9.js";import"./if-defined-DBtV9pXV.js";import"./BackdropMixin-BwkIFyL0.js";import"./v4-CmTdKEVZ.js";import"./class-map-DTglUrcM.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BQJqRJ7s.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
