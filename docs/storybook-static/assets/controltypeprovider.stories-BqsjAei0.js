import{C as l}from"./ControlTypeMixin-B_lpUCdc.js";import{E as d,k as i}from"./iframe-DjzY12_L.js";import{p as a}from"./index-CgMPIEiu.js";import"./index-CEwom8PC.js";import"./index-zRgWd_9_.js";import"./preload-helper-C1FmrZbK.js";import"./index-B5-HI_5w.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BqeG9hjs.js";import"./listitem.component-B_vtfYdW.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-hkv6uRnr.js";import"./DisabledMixin-CqJJpo6w.js";import"./index-C300zGee.js";import"./formfieldwrapper.constants-Di3NPG1_.js";import"./toggle.constants-DpsoG7kC.js";import"./index-D2OhIbWr.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-BXVC1XXP.js";import"./if-defined-D4sqW-Mq.js";import"./BackdropMixin-DCHdriXX.js";import"./v4-CmTdKEVZ.js";import"./class-map-DZfvAvqo.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CmtJIbC3.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
