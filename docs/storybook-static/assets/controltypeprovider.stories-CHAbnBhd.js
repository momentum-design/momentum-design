import{C as l}from"./ControlTypeMixin-CpiBIGvh.js";import{C as d,k as i}from"./iframe-5H9qcZJ2.js";import{p as a}from"./index-5C1genq1.js";import"./index-CfCHuIcw.js";import"./index-BQyBGUDp.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bfir4c11.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DdkFrH_G.js";import"./listitem.component-DZXy3O22.js";import"./query-assigned-elements-Dim3kyMa.js";import"./DisabledMixin-C3uKy2QQ.js";import"./KeyDownHandledMixin-DQIM2UJ1.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D8cquwlD.js";import"./index-wSWuWW3Y.js";import"./formfieldwrapper.constants-C1aC3iz-.js";import"./popover.constants-CHOT-eA8.js";import"./toggle.constants-DL5oMnWQ.js";import"./index-DK_O2bM9.js";import"./popover.component-BHo8a8XX.js";import"./if-defined-B-PVuCb_.js";import"./BackdropMixin-Dm0DvBnm.js";import"./v4-CmTdKEVZ.js";import"./class-map-DrqJMtow.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Hp3nT-0s.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
