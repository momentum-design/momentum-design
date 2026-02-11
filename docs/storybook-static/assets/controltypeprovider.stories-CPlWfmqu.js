import{C as i}from"./ControlTypeMixin-BvHzFNCo.js";import{C as d,k as l}from"./iframe-DdxUAY1B.js";import{p as a}from"./index-CdmTrLLA.js";import"./index-hMowSXDz.js";import"./index-CgL0ULPL.js";import"./preload-helper-C1FmrZbK.js";import"./index-D1jPjw4Q.js";import"./index-DTrDRi1E.js";import"./menuitem.component-1BFog5WS.js";import"./listitem.component-Dghsd2oP.js";import"./query-assigned-elements-B6ZX9QJS.js";import"./DisabledMixin-6xG8HQLy.js";import"./KeyDownHandledMixin-BChvhqno.js";import"./index-DpE7m4C2.js";import"./formfieldwrapper.constants-DIgFZEkP.js";import"./popover.constants-CxG_396l.js";import"./toggle.constants-CYCm9d05.js";import"./index-D9_PXQVh.js";import"./popover.component-DvcRymg8.js";import"./if-defined-Dx73VnWw.js";import"./BackdropMixin-CxLOt4LD.js";import"./v4-CmTdKEVZ.js";import"./class-map-DOAtiSIv.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BbNVClyo.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
