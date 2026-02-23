import{C as l}from"./ControlTypeMixin-D-CFuRLq.js";import{C as d,k as i}from"./iframe-D-ciOeUr.js";import{p as a}from"./index-mHg59Eox.js";import"./index-CdiErPjB.js";import"./index--TqUcLwe.js";import"./preload-helper-C1FmrZbK.js";import"./index-KW1aVgBN.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CWJERRyC.js";import"./listitem.component-Bz0cgDmy.js";import"./query-assigned-elements-DfrQxUJ6.js";import"./DisabledMixin-B71E26tS.js";import"./KeyDownHandledMixin-C2xnG8gd.js";import"./index-B2O8Hdja.js";import"./formfieldwrapper.constants-nSv8udFn.js";import"./popover.constants-BVdfqmrA.js";import"./toggle.constants-DhS9s0su.js";import"./index-DvaplSfk.js";import"./popover.component-BY902V5J.js";import"./if-defined-Vfrg044X.js";import"./BackdropMixin-DbleJJpK.js";import"./v4-CmTdKEVZ.js";import"./class-map-Ctxkp7vl.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BgQMTR66.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
