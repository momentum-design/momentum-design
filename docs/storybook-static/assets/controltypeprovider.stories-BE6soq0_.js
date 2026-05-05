import{C as l}from"./ControlTypeMixin-Cf2W7-Aa.js";import{C as d,k as i}from"./iframe-DN1k4W8X.js";import{p as a}from"./index-BnT307RE.js";import"./index-CIxD4b1l.js";import"./index-Dg7UoukQ.js";import"./preload-helper-C1FmrZbK.js";import"./index-D23DQGIK.js";import"./index-DTrDRi1E.js";import"./menuitem.component-uxH_rumF.js";import"./listitem.component-C4ErEAz9.js";import"./query-assigned-elements-BMQyIwoJ.js";import"./DisabledMixin-Bs8Qw-yl.js";import"./KeyDownHandledMixin-B33si3O1.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BZ8L3udM.js";import"./index-ZaSnTtH4.js";import"./formfieldwrapper.constants-D6MXTeyd.js";import"./popover.constants-75zN0u0Y.js";import"./toggle.constants-ByK8UTa2.js";import"./index-CBsHhqes.js";import"./popover.component-gyt4qKyk.js";import"./if-defined-azXttZBh.js";import"./BackdropMixin-CNm8jVNU.js";import"./v4-CmTdKEVZ.js";import"./class-map-rH9ZL3rJ.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CXWZz9xe.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
