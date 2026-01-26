import{C as l}from"./ControlTypeMixin-Cp2nkdbC.js";import{H as d,k as i}from"./iframe-Dxl5JR04.js";import{p as a}from"./index-D7Hd0FkL.js";import"./index-DWBXzKpi.js";import"./index-B7T77Y4K.js";import"./preload-helper-C1FmrZbK.js";import"./index-BW7z8kIE.js";import"./index-DTrDRi1E.js";import"./menuitem.component-iXcSsAKF.js";import"./listitem.component-DY0uLTU1.js";import"./query-assigned-elements-BITy9NLX.js";import"./DisabledMixin-CidSUaWv.js";import"./KeyToActionMixin-C-lGXqvj.js";import"./index-Df8-sJh5.js";import"./formfieldwrapper.constants-IAapizAX.js";import"./popover.constants-DQzcjyKr.js";import"./toggle.constants-Ac89mhTE.js";import"./index-DTURrGDY.js";import"./popover.component-DmBzfHXE.js";import"./if-defined-C0_rihGE.js";import"./BackdropMixin-B9iwA8Pd.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-CzTVluZW.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CLgpb53W.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
