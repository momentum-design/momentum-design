import{C as l}from"./ControlTypeMixin-DT5KlnaZ.js";import{C as d,k as i}from"./iframe-B_1iNO5L.js";import{p as a}from"./index-DbWVkAPk.js";import"./index-CU0_qdqw.js";import"./index-Qz3GFl3n.js";import"./preload-helper-C1FmrZbK.js";import"./index-BKUw_YBw.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cx96BJUC.js";import"./listitem.component-BmXrpo_T.js";import"./query-assigned-elements-LwQvLyZC.js";import"./DisabledMixin-Y2ty_K_n.js";import"./KeyDownHandledMixin-BZXys10u.js";import"./index-D8IHeGMn.js";import"./formfieldwrapper.constants-Brb9kI2s.js";import"./popover.constants-DjAP9hMj.js";import"./toggle.constants-Dv71i2XB.js";import"./index-DC2aHQ8V.js";import"./popover.component-BkrvNi7V.js";import"./if-defined-CEYFYNWi.js";import"./BackdropMixin-CAVnleeZ.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dqv8sRS5.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DcpZImgQ.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
