import{C as i}from"./index-pzj9iuad.js";import{E as d,k as l}from"./iframe-j9ayNzzO.js";import{p as a}from"./index-DI7lsC5Y.js";import"./index-BUlBdX_F.js";import"./index-Dp5AKFXb.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-CwQxUgsq.js";import"./DisabledMixin-DtX-h40v.js";import"./toggle.constants-D0Sn_ZpY.js";import"./index-Dxxi_Sx4.js";import"./popover.component-D6eP1ymF.js";import"./base-DIkkzJ-c.js";import"./if-defined-DtMHkK-C.js";import"./BackdropMixin-Jwh1shHy.js";import"./v4-CmTdKEVZ.js";import"./class-map-FZ5TrmfG.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-CDJCmW7U.js";import"./listitem.component-BhNlCr4n.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-D4XU-0FZ.js";import"./menuitemcheckbox.constants-BnPstY7P.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,G={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const H=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,H as __namedExportsOrder,G as default};
