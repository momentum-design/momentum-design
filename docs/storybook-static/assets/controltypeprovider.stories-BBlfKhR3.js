import{C as l}from"./ControlTypeMixin-DO3DSBUQ.js";import{C as d,k as i}from"./iframe-CFjFFVnQ.js";import{p as a}from"./index-htg2JOVe.js";import"./index-CH80YYya.js";import"./index-BRs8Xsju.js";import"./preload-helper-C1FmrZbK.js";import"./index-CvbYr9a5.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DOG_MPNo.js";import"./listitem.component-DfWdUKVm.js";import"./query-assigned-elements-4Fz_lDDv.js";import"./DisabledMixin-DiYMPzxP.js";import"./KeyDownHandledMixin-DQLFGsB6.js";import"./index-BenWLest.js";import"./formfieldwrapper.constants-D_3VP715.js";import"./popover.constants-Bspv9wmU.js";import"./toggle.constants-DjmMFntk.js";import"./index-CBSFYXpI.js";import"./popover.component-PsT5ok-8.js";import"./if-defined-CoqXY0pa.js";import"./BackdropMixin-BjbBLkaY.js";import"./v4-CmTdKEVZ.js";import"./class-map-CEzOPy3c.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BLnJhcew.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
