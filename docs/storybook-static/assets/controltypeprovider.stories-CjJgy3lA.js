import{C as i}from"./ControlTypeMixin-BvWsz2Vd.js";import{F as d,k as l}from"./iframe-DHJOsveJ.js";import{p as a}from"./index-wR2DKYge.js";import"./index-yR3HdAFI.js";import"./index-BrafdE7V.js";import"./preload-helper-C1FmrZbK.js";import"./index-FToFinYD.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CjbbTFBO.js";import"./listitem.component-CXEJexCH.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CtEo0PZs.js";import"./DisabledMixin-DjSARQtc.js";import"./index-DxytTFHH.js";import"./formfieldwrapper.constants-GQJVx4BE.js";import"./toggle.constants-DxaYMNDZ.js";import"./index-DhL3Hx6l.js";import"./popover.component-W_G0z3tn.js";import"./if-defined-BYhhUcmE.js";import"./BackdropMixin-2zdGgwKw.js";import"./v4-CmTdKEVZ.js";import"./class-map-BhAGFLhF.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CH7AzyFD.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
