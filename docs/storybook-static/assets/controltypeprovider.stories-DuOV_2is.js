import{C as l}from"./ControlTypeMixin-CeRryzlF.js";import{F as d,k as i}from"./iframe-C1wx72SK.js";import{p as a}from"./index-DmOYDsR-.js";import"./index-DcoptUKF.js";import"./index-CxYcxl7t.js";import"./preload-helper-C1FmrZbK.js";import"./index-DZhWFQnP.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DRlKDYtA.js";import"./listitem.component-B4sSk6b9.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BS99JRjx.js";import"./DisabledMixin-C2MvVlDo.js";import"./index-CUhzrBt9.js";import"./formfieldwrapper.constants-Bwg9-Mt0.js";import"./popover.constants-B7HxLivy.js";import"./toggle.constants-C4KYGKQD.js";import"./index-B5ZU-5Oc.js";import"./popover.component-BxJ2OCQl.js";import"./if-defined-BHGuOObc.js";import"./BackdropMixin-D4TYnLy4.js";import"./v4-CmTdKEVZ.js";import"./class-map-2eDx9Mfw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BLb941pf.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
