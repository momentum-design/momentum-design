import{C as l}from"./ControlTypeMixin-CjP9XwYR.js";import{C as d,k as i}from"./iframe-q5YgjDld.js";import{p as a}from"./index-BAndwYFW.js";import"./index-DEPEWefU.js";import"./index-DWi7sI-6.js";import"./preload-helper-C1FmrZbK.js";import"./index-CEMlnyZJ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-dLqbqjgk.js";import"./listitem.component-CmiIqGA5.js";import"./query-assigned-elements-GuUXfDeP.js";import"./DisabledMixin-fbiLTt1z.js";import"./KeyDownHandledMixin-C-TUEG1Q.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CuZ8Y5A-.js";import"./index-U4aVLzOZ.js";import"./formfieldwrapper.constants-BjDZM3sR.js";import"./popover.constants-BXXJvqk9.js";import"./toggle.constants-DjJIfmEJ.js";import"./index-BqaSPv-Y.js";import"./popover.component-BM1Ac3-w.js";import"./if-defined-CcLsQsCq.js";import"./BackdropMixin-DjC6jDwl.js";import"./v4-CmTdKEVZ.js";import"./class-map-CbMcLV6r.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DBPOOLzD.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
