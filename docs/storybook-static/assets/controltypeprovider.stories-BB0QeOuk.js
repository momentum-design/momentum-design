import{C as l}from"./ControlTypeMixin-l3TViQub.js";import{E as d,k as i}from"./iframe-CB9sX04z.js";import{p as a}from"./index-2xS_qDks.js";import"./index-DJq7Kx8x.js";import"./index-BiOsMARc.js";import"./preload-helper-C1FmrZbK.js";import"./index-BGeLnnap.js";import"./index-DTrDRi1E.js";import"./menuitem.component-HWMN35xI.js";import"./listitem.component-Bis4_let.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BibexCZG.js";import"./DisabledMixin-CiPsgT_4.js";import"./index-D1xW9LR4.js";import"./formfieldwrapper.constants-DtruONIB.js";import"./toggle.constants-BbwbwRC1.js";import"./index-B5KccKWT.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-CNSAIWKo.js";import"./if-defined-DiX5XKya.js";import"./BackdropMixin-D5aggB4a.js";import"./v4-CmTdKEVZ.js";import"./class-map-DQ5hDAZy.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DFd2zd86.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
