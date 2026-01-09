import{C as l}from"./ControlTypeMixin-BuKxrdG0.js";import{F as d,k as i}from"./iframe-Dy-DGTYu.js";import{p as a}from"./index-BLcm5VWN.js";import"./index-DefxRlbp.js";import"./index-DGZrZkns.js";import"./preload-helper-C1FmrZbK.js";import"./index-CSzgdE39.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CsHw1fFp.js";import"./listitem.component-NDAaGLG5.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DL7nUMXR.js";import"./DisabledMixin-BSyc0IfY.js";import"./index-CLxXiP70.js";import"./formfieldwrapper.constants-BIpixm1A.js";import"./popover.constants-D2Fc9lE3.js";import"./toggle.constants-eEeArz4V.js";import"./index-M6MhrNcI.js";import"./popover.component-Bf8mL1YI.js";import"./if-defined-DQi-bxBl.js";import"./BackdropMixin-DUZhl0BJ.js";import"./v4-CmTdKEVZ.js";import"./class-map-CFZLgSUY.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BXytSG-R.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
