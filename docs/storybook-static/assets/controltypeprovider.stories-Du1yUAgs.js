import{C as i}from"./ControlTypeMixin-BUcMHVAl.js";import{E as d,k as l}from"./iframe-B6TSCLlU.js";import{p as a}from"./index-PSUTFcz0.js";import"./index-BVg0DI2I.js";import"./index-C0mPatnq.js";import"./preload-helper-C1FmrZbK.js";import"./index-C_tS0rqd.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DSMU2TdZ.js";import"./listitem.component-D8PDkf0i.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-B0rMAGJz.js";import"./DisabledMixin-6dbjgJnq.js";import"./index-C1BGRrOv.js";import"./formfieldwrapper.constants-BcCAU07E.js";import"./toggle.constants-CMpdHJFq.js";import"./index-B9VVKLqO.js";import"./popover.component-BPuLEaRX.js";import"./if-defined-BXl5P2tt.js";import"./BackdropMixin-w7orPsJg.js";import"./v4-CmTdKEVZ.js";import"./class-map-Fl3lU5iQ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CtRYodyv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
