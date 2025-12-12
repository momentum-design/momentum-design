import{C as l}from"./ControlTypeMixin-DoO386kn.js";import{F as d,k as i}from"./iframe-CBhtCltk.js";import{p as a}from"./index-DxZr9Rp5.js";import"./index-J2aInMCf.js";import"./index-BdfqHxE3.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bmp3b_DV.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CrroTkpd.js";import"./listitem.component-Dqnl4vaK.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-NmQKMLp7.js";import"./DisabledMixin-CwbipW_f.js";import"./index-BUxjeqzR.js";import"./formfieldwrapper.constants-qifjnvBp.js";import"./popover.constants-Do622m-w.js";import"./toggle.constants-WtMv91Dx.js";import"./index-CNb2fJdb.js";import"./popover.component-5kB4kAoJ.js";import"./if-defined-D9uZU33L.js";import"./BackdropMixin-DmZd3V3u.js";import"./v4-CmTdKEVZ.js";import"./class-map-C-Ixln2L.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CoHVVHDk.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
