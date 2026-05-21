import{C as l}from"./ControlTypeMixin-DGvFkYUy.js";import{C as d,k as i}from"./iframe-BWgm79et.js";import{p as a}from"./index-DtaPCkBa.js";import"./index-GSLmAfIU.js";import"./index-BgZflPnn.js";import"./preload-helper-C1FmrZbK.js";import"./index-DsgHuplq.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BZFMIqvp.js";import"./listitem.component-CCpkFDc7.js";import"./query-assigned-elements-DHMZvTEH.js";import"./DisabledMixin-C9Xpu-Ne.js";import"./KeyDownHandledMixin-D5Yu5Kp0.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B2ZRCtO3.js";import"./index-CVuiQurr.js";import"./formfieldwrapper.constants-BLuaw7kj.js";import"./popover.constants-BjjEBvuT.js";import"./toggle.constants-DelvVTgw.js";import"./index-Dls9TkPk.js";import"./popover.component-C0E_DoQM.js";import"./if-defined-IxSQ8409.js";import"./BackdropMixin-CsCzrmqb.js";import"./v4-CmTdKEVZ.js";import"./class-map-CDTs4NES.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-a_wzwX6-.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
