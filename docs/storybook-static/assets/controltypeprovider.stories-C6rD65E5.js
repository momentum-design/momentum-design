import{C as l}from"./ControlTypeMixin-CsuYtsxK.js";import{F as d,k as i}from"./iframe-Cj4hrJdq.js";import{p as a}from"./index-C3foafkU.js";import"./index-B3BNZU7i.js";import"./index-vYXxPv0L.js";import"./preload-helper-C1FmrZbK.js";import"./index-DWz9H2Ut.js";import"./index-DTrDRi1E.js";import"./menuitem.component-D8ZPV9Rn.js";import"./listitem.component-JpOEC7yY.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-D9s1m3NE.js";import"./DisabledMixin-gH1_r2zD.js";import"./index-yPf4NLSA.js";import"./formfieldwrapper.constants-BMN7tRZT.js";import"./popover.constants-Dq4ks0rB.js";import"./toggle.constants-BOY7AxR0.js";import"./index-D9zt5iAE.js";import"./popover.component-B6Tw1j--.js";import"./if-defined-BxiUPb8k.js";import"./BackdropMixin-BsmsYtl4.js";import"./v4-CmTdKEVZ.js";import"./class-map-DRXIsnNi.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cp842d1B.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
