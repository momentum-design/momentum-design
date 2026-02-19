import{C as l}from"./ControlTypeMixin-_-zX3Tiu.js";import{C as d,k as i}from"./iframe-M3ijzwy0.js";import{p as a}from"./index-BbwzIs6v.js";import"./index-ClsXh8U8.js";import"./index-CiN_yvc_.js";import"./preload-helper-C1FmrZbK.js";import"./index-JPpbG9nX.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DfCY4DBj.js";import"./listitem.component-WzphvcOv.js";import"./query-assigned-elements-DJCBQZB3.js";import"./DisabledMixin-7EXHhexm.js";import"./KeyDownHandledMixin-CnuZvsMv.js";import"./index-UmCxYoX7.js";import"./formfieldwrapper.constants-BayEAJRs.js";import"./popover.constants-53Sbideg.js";import"./toggle.constants-Drp3JzyF.js";import"./index-DibiTw7k.js";import"./popover.component-8kUPUpQF.js";import"./if-defined-D0L9-6S-.js";import"./BackdropMixin-snl_Hu5n.js";import"./v4-CmTdKEVZ.js";import"./class-map-BtHoiKvw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BZKEP3zt.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
