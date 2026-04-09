import{C as l}from"./ControlTypeMixin-CG0yxrNo.js";import{C as d,k as i}from"./iframe-CYySQeiU.js";import{p as a}from"./index-BSeEq29C.js";import"./index-OZISYC_Z.js";import"./index-CGui4JVI.js";import"./preload-helper-C1FmrZbK.js";import"./index-D_SvQ1mC.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Crp8XAq9.js";import"./listitem.component-2kz3m3lO.js";import"./query-assigned-elements-BRk6IqtI.js";import"./DisabledMixin-CYuDVwJu.js";import"./KeyDownHandledMixin-DujuZV6P.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-B7FPFROz.js";import"./index-CDUJr4YF.js";import"./formfieldwrapper.constants-B92ezA2m.js";import"./popover.constants-Cr6pC7ge.js";import"./toggle.constants-B39K9hrh.js";import"./index-Bs1uirj6.js";import"./popover.component-CBz2QjxT.js";import"./if-defined-B3Si03Tk.js";import"./BackdropMixin-BFpROQkD.js";import"./v4-CmTdKEVZ.js";import"./class-map-D_zN0J9q.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CndUO-iv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
