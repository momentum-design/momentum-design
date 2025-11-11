import{C as i}from"./ControlTypeMixin-Dc-1Mjfx.js";import{E as d,k as l}from"./iframe-CbEfFyyc.js";import{p as a}from"./index-bldf74Iu.js";import"./index-DA4qv65K.js";import"./index-BxCWlXct.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTicpPWm.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CIzEyy0u.js";import"./listitem.component-CjuqkFrx.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BPjLaV0e.js";import"./DisabledMixin-Jpb1cGqz.js";import"./index-By1X1Ye7.js";import"./formfieldwrapper.constants--SQ7FybH.js";import"./toggle.constants-85AX_oxb.js";import"./index-BmMnfsAk.js";import"./popover.component-nSOHwol9.js";import"./if-defined-Ck4FCl7N.js";import"./BackdropMixin-B2bDszt_.js";import"./v4-CmTdKEVZ.js";import"./class-map-5iBJw0sz.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-QgXrKfpR.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
