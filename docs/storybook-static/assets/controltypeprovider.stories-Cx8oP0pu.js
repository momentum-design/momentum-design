import{C as i}from"./ControlTypeMixin-DpcV5-Rs.js";import{E as d,k as l}from"./iframe-DvKTogpS.js";import{p as a}from"./index-9TWjxWg1.js";import"./index-CO_nFzh1.js";import"./index-DRgGSkM5.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dr0GIaqi.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D7nKY-Gr.js";import"./listitem.component-BzmXF5mu.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Di14qESw.js";import"./DisabledMixin-BcJ9Lxra.js";import"./index-B21sGM_L.js";import"./formfieldwrapper.constants-DhJLFAX6.js";import"./toggle.constants-wmAGSEb3.js";import"./index-ytaKLw35.js";import"./popover.component-DMR4UXvN.js";import"./if-defined-wAsZU8hK.js";import"./BackdropMixin-Cv9imm8x.js";import"./v4-CmTdKEVZ.js";import"./class-map-CwsIja0v.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CPgETtDr.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
