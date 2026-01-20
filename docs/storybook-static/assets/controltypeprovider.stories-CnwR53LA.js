import{C as l}from"./ControlTypeMixin-BRbEUqgP.js";import{F as d,k as i}from"./iframe-DD1qd397.js";import{p as a}from"./index-DhKlRied.js";import"./index-DcVq3JqX.js";import"./index-DV_a3are.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTSLqutf.js";import"./index-DTrDRi1E.js";import"./menuitem.component-mm0yiwdJ.js";import"./listitem.component-U_9V-2lC.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./DisabledMixin-CYN0V68G.js";import"./KeyToActionMixin-D7mKMv1X.js";import"./index-RaMMsQBV.js";import"./formfieldwrapper.constants-ioeoQoCF.js";import"./popover.constants-IjUFgXmU.js";import"./toggle.constants-Cc4kFrBZ.js";import"./index-DAdE7Nj8.js";import"./popover.component-Dn23zOyI.js";import"./if-defined-Db4PuEEJ.js";import"./BackdropMixin-CQDU5Ra1.js";import"./dom-CCAb5pjN.js";import"./v4-CmTdKEVZ.js";import"./class-map-B-EmtZ-w.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Co63qMPc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
