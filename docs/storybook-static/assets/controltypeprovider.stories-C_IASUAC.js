import{C as l}from"./ControlTypeMixin-D53SZodW.js";import{H as d,k as i}from"./iframe-CKcPYDX0.js";import{p as a}from"./index-D1UNNNSQ.js";import"./index-ylbhlpii.js";import"./index-Duflcrcg.js";import"./preload-helper-C1FmrZbK.js";import"./index-D5QDCS5v.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C-Jto8qv.js";import"./listitem.component-DvDEoB3k.js";import"./query-assigned-elements-D_v0PDKU.js";import"./DisabledMixin-rQYJ1hZD.js";import"./KeyToActionMixin-g1CR4QE1.js";import"./index-BmUag3LX.js";import"./formfieldwrapper.constants-CQABijZy.js";import"./popover.constants-BwVQ2vI3.js";import"./toggle.constants-DYN0uD14.js";import"./index-BKOhwFro.js";import"./popover.component-Bb9c6_zU.js";import"./if-defined-9V2JNne-.js";import"./BackdropMixin-BDl90CET.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-a6odL7Gw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DLVSUUAg.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
