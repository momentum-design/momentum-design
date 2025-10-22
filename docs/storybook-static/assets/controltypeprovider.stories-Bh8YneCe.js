import{C as l}from"./ControlTypeMixin-BoP5Djbv.js";import{E as d,k as i}from"./iframe-DhGqAUJy.js";import{p as a}from"./index-DLnXiPEA.js";import"./index-B_hZerL7.js";import"./index-Cobu6QUy.js";import"./preload-helper-C1FmrZbK.js";import"./index-DviT2LAi.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C_hEdIlb.js";import"./listitem.component-C1MVtq8W.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Bv4GD8lE.js";import"./DisabledMixin-CrYPrAlK.js";import"./index-vjPNsj29.js";import"./formfieldwrapper.constants-ByYhGwl9.js";import"./toggle.constants-BG1I6fzl.js";import"./index-BAWtdVoN.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-oRta-e5F.js";import"./if-defined-CSf8oUlc.js";import"./BackdropMixin-DwiTpNLe.js";import"./v4-CmTdKEVZ.js";import"./class-map-WKHBl-hA.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D0P0OuYl.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
