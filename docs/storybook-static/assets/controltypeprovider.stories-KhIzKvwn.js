import{C as l}from"./ControlTypeMixin-CrJq0z8t.js";import{C as d,k as i}from"./iframe-D61tWz88.js";import{p as a}from"./index-wGikyYLb.js";import"./index-6zEhGX5A.js";import"./index-HqeBXtQt.js";import"./preload-helper-C1FmrZbK.js";import"./index-kFvPAsPu.js";import"./index-DTrDRi1E.js";import"./menuitem.component-WPd4awtB.js";import"./listitem.component-BTWXAVlp.js";import"./query-assigned-elements-D60FatDk.js";import"./DisabledMixin-BDA2PSvQ.js";import"./KeyDownHandledMixin-D8247ZP6.js";import"./index-ztt1-ThW.js";import"./formfieldwrapper.constants-Cw393Iyz.js";import"./popover.constants-D3jXDIUN.js";import"./toggle.constants-ZobIs9YK.js";import"./index-B2kwo2vi.js";import"./popover.component-CnHf7fLd.js";import"./if-defined-DQn5XqUV.js";import"./BackdropMixin-Do-_Tcp8.js";import"./v4-CmTdKEVZ.js";import"./class-map-DTajZy6B.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-r1EEXWcH.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
