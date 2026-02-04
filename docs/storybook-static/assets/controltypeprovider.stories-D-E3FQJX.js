import{C as l}from"./ControlTypeMixin-CPkpn-mU.js";import{H as d,k as i}from"./iframe-8tieyzIg.js";import{p as a}from"./index-dkiGSyFD.js";import"./index-C-LQkizD.js";import"./index-BGddT1KX.js";import"./preload-helper-C1FmrZbK.js";import"./index-DblcVKBa.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DJKLRaFC.js";import"./listitem.component-C5ziluBk.js";import"./query-assigned-elements-Ck8phgt4.js";import"./DisabledMixin-B_AM2ryx.js";import"./KeyToActionMixin-l8VQhGET.js";import"./index-B5UpHdtH.js";import"./formfieldwrapper.constants-7kWDrmiy.js";import"./popover.constants-UaVl6CR-.js";import"./toggle.constants-Q_xbiVha.js";import"./index-C10VHij3.js";import"./popover.component-Di6QrzZj.js";import"./if-defined-PlGgwzOZ.js";import"./BackdropMixin-D8V_vC-j.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-BS5gRPpY.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-s7wAXpw5.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
