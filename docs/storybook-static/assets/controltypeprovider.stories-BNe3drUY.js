import{C as l}from"./ControlTypeMixin-BqYUs702.js";import{C as d,k as i}from"./iframe-DpdbTchC.js";import{p as a}from"./index-CyXF7i9z.js";import"./index-DtKp7lF0.js";import"./index-Bhrd19qJ.js";import"./preload-helper-C1FmrZbK.js";import"./index-DZDhbmdk.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BTHbFq2M.js";import"./listitem.component-DRiAyb6X.js";import"./query-assigned-elements-_4KI8iPf.js";import"./DisabledMixin-CrZP289j.js";import"./KeyDownHandledMixin-B9W1g_ZS.js";import"./index-CPSVn_7g.js";import"./formfieldwrapper.constants-uQ-VKUm9.js";import"./popover.constants-abFICW6O.js";import"./toggle.constants-gS8_FMpV.js";import"./index-rUmcA6It.js";import"./popover.component--_-x2H2w.js";import"./if-defined-C59PxhCj.js";import"./BackdropMixin-BnOO9B-T.js";import"./v4-CmTdKEVZ.js";import"./class-map-tySjJKwe.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DV2R3xbS.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
