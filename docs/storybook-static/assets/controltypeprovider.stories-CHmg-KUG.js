import{C as l}from"./ControlTypeMixin-DzybLQol.js";import{F as d,k as i}from"./iframe-DCPKk3oI.js";import{p as a}from"./index-BXGUcG_7.js";import"./index-Wr679XaG.js";import"./index-BfqW8veG.js";import"./preload-helper-C1FmrZbK.js";import"./index-CYk6vpe5.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dh63xZDR.js";import"./listitem.component-BvBmzvoD.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DhZRORSg.js";import"./DisabledMixin-DzqxSWAY.js";import"./index-BEFmiM2s.js";import"./formfieldwrapper.constants-C-fjvUhQ.js";import"./popover.constants-48neESin.js";import"./toggle.constants-ZWIj6Z9J.js";import"./index-DnsU2Tf9.js";import"./popover.component-e8b2dTM0.js";import"./if-defined-Cxi43hJh.js";import"./BackdropMixin-oSLf-HFJ.js";import"./v4-CmTdKEVZ.js";import"./class-map-BmvdpeA5.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BPY7pX5O.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
