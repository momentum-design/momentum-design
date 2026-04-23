import{C as l}from"./ControlTypeMixin-swPRswUA.js";import{C as d,k as i}from"./iframe-BZP6WX1W.js";import{p as a}from"./index-G4UkceUF.js";import"./index-BP8rzTse.js";import"./index-BVdZmBpL.js";import"./preload-helper-C1FmrZbK.js";import"./index-BVHEHSJG.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BrxW72wQ.js";import"./listitem.component-C6hEOKfQ.js";import"./query-assigned-elements-Da9fYbq3.js";import"./DisabledMixin-BJwARYIU.js";import"./KeyDownHandledMixin-DzRyYMsy.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DsxrLWg1.js";import"./index-DBefrgzI.js";import"./formfieldwrapper.constants-Lhx4J_yp.js";import"./popover.constants-BYlCbcKi.js";import"./toggle.constants-dQPhRBxJ.js";import"./index-Ct2kOdRt.js";import"./popover.component-K86JqyjF.js";import"./if-defined-5PTGeIjh.js";import"./BackdropMixin-D9hVbecZ.js";import"./v4-CmTdKEVZ.js";import"./class-map-CizB0aiK.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DRTjXj3t.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
