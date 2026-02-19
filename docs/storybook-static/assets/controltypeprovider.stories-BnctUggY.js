import{C as l}from"./ControlTypeMixin-LU7mgXbE.js";import{C as d,k as i}from"./iframe-CeDQ4RI4.js";import{p as a}from"./index-rYQn3BpT.js";import"./index-_J_YXuTh.js";import"./index--i6x2P2v.js";import"./preload-helper-C1FmrZbK.js";import"./index-CaAfbe5R.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CBM0wau8.js";import"./listitem.component-Blr2IaPC.js";import"./query-assigned-elements-CHrzl2AW.js";import"./DisabledMixin-DHC8T_R7.js";import"./KeyDownHandledMixin-XYXz5-oV.js";import"./index-WPT5k6dq.js";import"./formfieldwrapper.constants-CZTnpG8k.js";import"./popover.constants-m8BpQDhm.js";import"./toggle.constants-lkLjW1j8.js";import"./index-CqCo3uby.js";import"./popover.component-CVUHmWtI.js";import"./if-defined-Cl8xk6N7.js";import"./BackdropMixin-CnBW4YxJ.js";import"./v4-CmTdKEVZ.js";import"./class-map-SViuyjoQ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BPCb1QaF.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
