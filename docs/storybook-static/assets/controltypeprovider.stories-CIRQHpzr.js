import{C as l}from"./ControlTypeMixin-BES1qhHy.js";import{C as d,k as i}from"./iframe-BNuhQAvW.js";import{p as a}from"./index-D8bbfbgA.js";import"./index-BX7IMEbk.js";import"./index-DsWZApZB.js";import"./preload-helper-C1FmrZbK.js";import"./index-iIqfqlkl.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BaDavieW.js";import"./listitem.component-BfexXQ0H.js";import"./query-assigned-elements-DO68wlF4.js";import"./DisabledMixin-Cz75y2XI.js";import"./KeyDownHandledMixin-BVzuX7IE.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DCHewJrx.js";import"./index-BfW12UVO.js";import"./formfieldwrapper.constants-b7sJde5e.js";import"./popover.constants-DB5lx9bc.js";import"./toggle.constants-DhjejkCU.js";import"./index-CoczH1eN.js";import"./popover.component-4F5xown_.js";import"./if-defined-Bt1okdpN.js";import"./BackdropMixin-B0OYQyQK.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dn52rBMK.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BvqIZ8AH.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
