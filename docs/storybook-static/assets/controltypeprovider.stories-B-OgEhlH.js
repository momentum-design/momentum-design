import{C as l}from"./ControlTypeMixin-xDVOfp6E.js";import{C as d,k as i}from"./iframe-CA49vxKm.js";import{p as a}from"./index-DyAcgCq6.js";import"./index-ElFSBW3F.js";import"./index-BCXEoIfz.js";import"./preload-helper-C1FmrZbK.js";import"./index-CWgSAvAz.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B6a9_tzi.js";import"./listitem.component-DBWrEZDE.js";import"./query-assigned-elements-IV_T3768.js";import"./DisabledMixin-B44Roi7E.js";import"./KeyDownHandledMixin-D048pw3a.js";import"./index-tEeAcgbC.js";import"./formfieldwrapper.constants-Y1X0iXr8.js";import"./popover.constants-DURGFxjr.js";import"./toggle.constants-vqjjcwGs.js";import"./index-Qa-3r8pM.js";import"./popover.component-2ZHcH2N0.js";import"./if-defined-LCCQDNil.js";import"./BackdropMixin-DxC5_lN2.js";import"./v4-CmTdKEVZ.js";import"./class-map-BFWF_tiw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CZMs2G5l.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
