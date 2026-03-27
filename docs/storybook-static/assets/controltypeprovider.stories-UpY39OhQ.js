import{C as l}from"./ControlTypeMixin-ByH73tF0.js";import{C as d,k as i}from"./iframe-DBAXEeb_.js";import{p as a}from"./index-Bul3jdd3.js";import"./index-taKc6xzd.js";import"./index-BSJNkYqf.js";import"./preload-helper-C1FmrZbK.js";import"./index-CyqGq4J2.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C6h9-cOv.js";import"./listitem.component-D2ouUEW9.js";import"./query-assigned-elements-BB93mBke.js";import"./DisabledMixin-CJ5fJ_db.js";import"./KeyDownHandledMixin-CGg5F37x.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DYVkDZAD.js";import"./index-DsDT7smO.js";import"./formfieldwrapper.constants-BmEaP_B-.js";import"./popover.constants-CJGZm9VD.js";import"./toggle.constants-BFoSHugt.js";import"./index-C6sB4SZe.js";import"./popover.component-C39K7qX2.js";import"./if-defined-BvKStZe5.js";import"./BackdropMixin-BXUTii33.js";import"./v4-CmTdKEVZ.js";import"./class-map-uxXEDmBg.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Dco5ZLjy.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
