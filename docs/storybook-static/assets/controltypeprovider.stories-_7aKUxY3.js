import{C as l}from"./ControlTypeMixin-BiaznRr-.js";import{C as d,k as i}from"./iframe-BRqcXwoo.js";import{p as a}from"./index-BGL0QfrZ.js";import"./index-Da8-0_kT.js";import"./index-CTq7HvXy.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cj3omeN_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-nP0UxzNh.js";import"./listitem.component-BB3JSE81.js";import"./query-assigned-elements-CfOpOrlJ.js";import"./DisabledMixin-MRxWtlyu.js";import"./KeyDownHandledMixin-CG-B7sf7.js";import"./index-BrKkvp5j.js";import"./formfieldwrapper.constants-WFR8Tzpb.js";import"./popover.constants-Cu7rgEpR.js";import"./toggle.constants-BUSDoQAG.js";import"./index-CiOU8icv.js";import"./popover.component-DzZbPPLl.js";import"./if-defined-BJKCYMNO.js";import"./BackdropMixin-CRfvYDCd.js";import"./v4-CmTdKEVZ.js";import"./class-map-CmKpFmBv.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BpyKaYFu.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
