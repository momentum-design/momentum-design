import{C as l}from"./ControlTypeMixin-BRZmdXPg.js";import{C as d,k as i}from"./iframe-BDHu_yvJ.js";import{p as a}from"./index-D-HwGd98.js";import"./index-B6Kcdb1u.js";import"./index-BrJcNzjA.js";import"./preload-helper-C1FmrZbK.js";import"./index-uvgfi3Jp.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DqRaatkv.js";import"./listitem.component-rUXzcRHg.js";import"./query-assigned-elements-Cxw9HJjR.js";import"./DisabledMixin-DBitIXox.js";import"./KeyDownHandledMixin-lfim3BWe.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-IZ3ajzmD.js";import"./index-Ci0ArnNr.js";import"./formfieldwrapper.constants-DY4Kt26_.js";import"./popover.constants-bfq-aWCY.js";import"./toggle.constants-COOE55k_.js";import"./index-DMtf99S_.js";import"./popover.component-0Zl7a4bR.js";import"./BackdropMixin-Bb5K80y3.js";import"./v4-CmTdKEVZ.js";import"./class-map-gVCwPNAJ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CXT1Z_mW.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
