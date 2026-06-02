import{C as l}from"./ControlTypeMixin-B83TbPOK.js";import{C as d,k as i}from"./iframe-CM38_vAi.js";import{p as a}from"./index-B8GminDG.js";import"./index-CdvUigpJ.js";import"./index-H91zdwM8.js";import"./preload-helper-C1FmrZbK.js";import"./index-CrMiPWwO.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C113mXGQ.js";import"./listitem.component-C6jqF6nw.js";import"./query-assigned-elements-CuRFTo0_.js";import"./DisabledMixin-C3ErfRAG.js";import"./KeyDownHandledMixin-D4YzfRFo.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-JYX9_5eF.js";import"./index-DBIQYFYd.js";import"./formfieldwrapper.constants-gVv_zQQp.js";import"./popover.constants-C0xuq14y.js";import"./toggle.constants-Chi-xcri.js";import"./index-DePTnaGc.js";import"./popover.component-jeeMFtcq.js";import"./if-defined-Bd66tGz9.js";import"./BackdropMixin-CV6c4MwB.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dk9VjmHj.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-D-HVsdAU.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
