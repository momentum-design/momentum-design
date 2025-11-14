import{C as i}from"./ControlTypeMixin-CFdJ-kVW.js";import{E as d,k as l}from"./iframe-CAO1nc6k.js";import{p as a}from"./index-uTItuQYB.js";import"./index-FRIxeyqi.js";import"./index-BSOnSeiX.js";import"./preload-helper-C1FmrZbK.js";import"./index-C-HPEIwZ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C5hz4JqR.js";import"./listitem.component-14sijShI.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DIuP2iPR.js";import"./DisabledMixin-Dii5RqmQ.js";import"./index-BtHBU_TU.js";import"./formfieldwrapper.constants-CIYgU5eT.js";import"./toggle.constants-CgM147VE.js";import"./index-DwGjYUw2.js";import"./popover.component-BhZJsw0I.js";import"./if-defined-CCxqi6St.js";import"./BackdropMixin-Dgch5RC-.js";import"./v4-CmTdKEVZ.js";import"./class-map-CGQ7trJM.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D7KbkxFE.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
