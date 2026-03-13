import{C as l}from"./ControlTypeMixin-O70jlRM8.js";import{C as d,k as i}from"./iframe-D1ZM_2ni.js";import{p as a}from"./index-BN0mDG4v.js";import"./index-CrwouSUa.js";import"./index-DcOvhcgV.js";import"./preload-helper-C1FmrZbK.js";import"./index-DeK8fIda.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cextl7a8.js";import"./listitem.component-cRSvdt58.js";import"./query-assigned-elements-s3lqQTaI.js";import"./DisabledMixin-B0ewxrZ6.js";import"./KeyDownHandledMixin-CfBGD_Lz.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B08O-EXz.js";import"./index-A5dKLNPU.js";import"./formfieldwrapper.constants-tVXGwzYa.js";import"./popover.constants-cYgUUiSp.js";import"./toggle.constants-DfXHMKfC.js";import"./index-DRAtm-pK.js";import"./popover.component-BUdYSIr9.js";import"./if-defined-RtC1QEw6.js";import"./BackdropMixin-CCmC-TCm.js";import"./v4-CmTdKEVZ.js";import"./class-map-BdmLgYW_.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D0i8S3iA.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
