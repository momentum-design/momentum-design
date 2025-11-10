import{C as i}from"./ControlTypeMixin-C9ea68Yu.js";import{E as d,k as l}from"./iframe-DMX3WSm5.js";import{p as a}from"./index-CkkV-EcI.js";import"./index-D45CVrj9.js";import"./index-CsjJNUoP.js";import"./preload-helper-C1FmrZbK.js";import"./index-BUZuAJf9.js";import"./index-DTrDRi1E.js";import"./menuitem.component-FxhGo2fH.js";import"./listitem.component-wHq-4hQW.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-C8klylZ5.js";import"./DisabledMixin-kEnOH2ur.js";import"./index-CK6SkMd8.js";import"./formfieldwrapper.constants-CtEueVIJ.js";import"./toggle.constants-B2g8hdUS.js";import"./index-BwI6HiO7.js";import"./popover.component-D2BHNvza.js";import"./if-defined-hRGbxhii.js";import"./BackdropMixin-B2aICKn4.js";import"./v4-CmTdKEVZ.js";import"./class-map-Duh5jsIS.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BPSqEK8f.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
