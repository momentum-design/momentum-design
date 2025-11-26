import{C as i}from"./ControlTypeMixin-DG6x5TYE.js";import{E as d,k as l}from"./iframe-BsXEur3E.js";import{p as a}from"./index-B8Q5kWEL.js";import"./index-vvUm8hod.js";import"./index-COcYq-X-.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dx-dfjAZ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-zsBSZs4K.js";import"./listitem.component-NqI6jCxR.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DvuoSTvP.js";import"./DisabledMixin-Be0iqgvH.js";import"./index-BVSZdchm.js";import"./formfieldwrapper.constants-DQyUPF8F.js";import"./toggle.constants-D1v9Njxk.js";import"./index-DDxWKM8V.js";import"./popover.component-C7UuKfDI.js";import"./if-defined-CxIP7MH_.js";import"./BackdropMixin-BOXBgQxf.js";import"./v4-CmTdKEVZ.js";import"./class-map-sCk-uBxI.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D0pkfYjb.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
