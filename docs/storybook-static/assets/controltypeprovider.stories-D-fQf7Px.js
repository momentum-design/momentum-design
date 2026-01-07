import{C as l}from"./ControlTypeMixin-AlArnQQN.js";import{F as d,k as i}from"./iframe-d_zaQfcU.js";import{p as a}from"./index-wTs15Rgo.js";import"./index-2FBsxYiN.js";import"./index-BUcKd_4g.js";import"./preload-helper-C1FmrZbK.js";import"./index-BGrZUgLa.js";import"./index-DTrDRi1E.js";import"./menuitem.component-H7Szmma9.js";import"./listitem.component-CTQKKGD8.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BJQMSLME.js";import"./DisabledMixin-ChCzWmbj.js";import"./index-Cmd805_a.js";import"./formfieldwrapper.constants-DijvEOmU.js";import"./popover.constants-Iwug4meC.js";import"./toggle.constants-DIi0hqeR.js";import"./index-DpPp7cif.js";import"./popover.component-Biy0H-U4.js";import"./if-defined-CJ88QP4X.js";import"./BackdropMixin-6MORrdZu.js";import"./v4-CmTdKEVZ.js";import"./class-map-DTzhny6V.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-C8ZH0wZ7.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
