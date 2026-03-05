import{C as l}from"./ControlTypeMixin-CgnMbVdj.js";import{C as d,k as i}from"./iframe-DsWoryHe.js";import{p as a}from"./index-GGaP-Pa6.js";import"./index-DSEpV0zb.js";import"./index-DEzO7Rw7.js";import"./preload-helper-C1FmrZbK.js";import"./index-lON8L3bz.js";import"./index-DTrDRi1E.js";import"./menuitem.component-YDfWq078.js";import"./listitem.component-93KItFwW.js";import"./query-assigned-elements-DuiV1tcq.js";import"./DisabledMixin-B9yKoiUn.js";import"./KeyDownHandledMixin-BF4r5Kkx.js";import"./index-RXfCFVPC.js";import"./formfieldwrapper.constants-DyzdpwzF.js";import"./popover.constants-BWJNAg7I.js";import"./toggle.constants-BqisOQbz.js";import"./index-skZThrit.js";import"./popover.component-DFc__XFi.js";import"./if-defined-CG4Y3qK1.js";import"./BackdropMixin-B8k75P2r.js";import"./v4-CmTdKEVZ.js";import"./class-map-bQ-J64fb.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-HX2lcyv0.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
