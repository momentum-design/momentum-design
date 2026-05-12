import{C as l}from"./ControlTypeMixin-7e0XLmHz.js";import{C as d,k as i}from"./iframe-h-8-pYpG.js";import{p as a}from"./index-_57btw-C.js";import"./index-q1pe6Q_l.js";import"./index-BY84Dvl-.js";import"./preload-helper-C1FmrZbK.js";import"./index-B2rM4TaK.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Ck6VAs7Z.js";import"./listitem.component-Dn6MVLSZ.js";import"./query-assigned-elements-KpeJJZIZ.js";import"./DisabledMixin-DNaExcQz.js";import"./KeyDownHandledMixin-GlAlsUtB.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B1kddbGA.js";import"./index-ChedO7Ld.js";import"./formfieldwrapper.constants-CZuh8amp.js";import"./popover.constants-BQH42geS.js";import"./toggle.constants-CcMnS5Kq.js";import"./index-BvY2thpJ.js";import"./popover.component-Cv8PbZAY.js";import"./if-defined-BFv5gqaQ.js";import"./BackdropMixin-DuNZeoSK.js";import"./v4-CmTdKEVZ.js";import"./class-map-BRcisE7Q.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DGPcHUEU.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
