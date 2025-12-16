import{C as l}from"./ControlTypeMixin-CEXKiN0E.js";import{F as d,k as i}from"./iframe-DndUgZyo.js";import{p as a}from"./index-BlpZ535v.js";import"./index-C7o0zBMN.js";import"./index-BglqiLMW.js";import"./preload-helper-C1FmrZbK.js";import"./index-Cll-x2TM.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cl3VBroi.js";import"./listitem.component-DIjFUuJ7.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BYR6zMj6.js";import"./DisabledMixin-AhNA0Xer.js";import"./index-DsSkp40q.js";import"./formfieldwrapper.constants-Ci8iKcnt.js";import"./popover.constants-dqneBv_R.js";import"./toggle.constants-CKPeNZ2S.js";import"./index-DU0zoEKa.js";import"./popover.component-BImApegS.js";import"./if-defined-DO6MNPEi.js";import"./BackdropMixin-B-hq-sKx.js";import"./v4-CmTdKEVZ.js";import"./class-map-CA9LciLo.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-TjfaY_Qs.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
