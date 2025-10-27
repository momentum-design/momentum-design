import{C as l}from"./ControlTypeMixin-lNWwjzwJ.js";import{E as d,k as i}from"./iframe-D6lHhKC3.js";import{p as a}from"./index-BGot_E9v.js";import"./index-DwfGO7Wx.js";import"./index-B6xdNHAU.js";import"./preload-helper-C1FmrZbK.js";import"./index-Db1H6DQD.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Z3BZY8CX.js";import"./listitem.component-Tgl2nBVV.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CJsJut2d.js";import"./DisabledMixin-CJlycYIb.js";import"./index-BQyJyR1E.js";import"./formfieldwrapper.constants-BUOm1379.js";import"./toggle.constants-CAzFplB0.js";import"./index-DnTzDhdT.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-Jq_wylKh.js";import"./if-defined-BPDtHRBw.js";import"./BackdropMixin-2L6Aywa5.js";import"./v4-CmTdKEVZ.js";import"./class-map-Ddv7PeBu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BYItRElg.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
