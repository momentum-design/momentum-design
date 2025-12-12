import{C as l}from"./ControlTypeMixin-GI2yfiZQ.js";import{F as d,k as i}from"./iframe-Dihsx-NL.js";import{p as a}from"./index-CGtjRWZl.js";import"./index-D8yyNWEg.js";import"./index-C3ZcwgOM.js";import"./preload-helper-C1FmrZbK.js";import"./index-DAxnXaXz.js";import"./index-DTrDRi1E.js";import"./menuitem.component-FNb4nyK7.js";import"./listitem.component-Ds0OmTjk.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-B9Csws3O.js";import"./DisabledMixin-BvD2odSx.js";import"./index-Tp3sJ5iN.js";import"./formfieldwrapper.constants-DrAaXlJS.js";import"./popover.constants-BshN2TV6.js";import"./toggle.constants-DtH5dqaN.js";import"./index-C0_1C_qP.js";import"./popover.component-Wqop1Uto.js";import"./if-defined-D-bzpMf3.js";import"./BackdropMixin-B6FOHqSR.js";import"./v4-CmTdKEVZ.js";import"./class-map-VeKJaZPo.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DXWNhWSI.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
