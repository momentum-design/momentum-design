import{C as l}from"./ControlTypeMixin-iA1c8uj6.js";import{F as d,k as i}from"./iframe-DqI8R0T6.js";import{p as a}from"./index-DJBXnCCu.js";import"./index-CPiaDzUJ.js";import"./index-6_so11C3.js";import"./preload-helper-C1FmrZbK.js";import"./index-ByoG7FEj.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BzvJVBdg.js";import"./listitem.component-q6jtzwbl.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-eZI_-HVg.js";import"./DisabledMixin-DFXWJxZV.js";import"./index-BbP1lZ47.js";import"./formfieldwrapper.constants-CEGUuN8v.js";import"./popover.constants-D4yggTO2.js";import"./toggle.constants-CT0ulFaP.js";import"./index-Dnxbd2H6.js";import"./popover.component-DjSQM3rI.js";import"./if-defined-1FKA9-0t.js";import"./BackdropMixin-BplkIKcn.js";import"./v4-CmTdKEVZ.js";import"./class-map-CeSeOIP3.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-qu3RmOX5.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
