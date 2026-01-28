import{C as l}from"./ControlTypeMixin-DQNERDni.js";import{H as d,k as i}from"./iframe-CM5v7A9W.js";import{p as a}from"./index-7nPJAxAt.js";import"./index-C6fGnO5t.js";import"./index-BVfQkhkD.js";import"./preload-helper-C1FmrZbK.js";import"./index-8eILrhn8.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DlIYPHsJ.js";import"./listitem.component-D3JP4vE0.js";import"./query-assigned-elements-CpgEA_Ma.js";import"./DisabledMixin-CLyN7JwY.js";import"./KeyToActionMixin-eZa7VV6_.js";import"./index-B-iBrAKP.js";import"./formfieldwrapper.constants-BXCNKWCp.js";import"./popover.constants-DAVJA-Mk.js";import"./toggle.constants-CXOZowYr.js";import"./index-Bm1frozx.js";import"./popover.component-DTgwRjCX.js";import"./if-defined-DgC6xmGR.js";import"./BackdropMixin-Bj9Wbfvj.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-CU_uzZx7.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Ci6MAjM9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
