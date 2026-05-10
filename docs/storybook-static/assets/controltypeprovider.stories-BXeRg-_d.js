import{C as l}from"./ControlTypeMixin-BMbczHbx.js";import{C as d,k as i}from"./iframe-Ca6rX5AR.js";import{p as a}from"./index-1d99oUaA.js";import"./index-CkwVVWEY.js";import"./index-DdlU0W5f.js";import"./preload-helper-C1FmrZbK.js";import"./index-CEPldZjp.js";import"./index-DTrDRi1E.js";import"./menuitem.component-HP4zplj7.js";import"./listitem.component-CBJ9cck2.js";import"./query-assigned-elements-B9a0AhsL.js";import"./DisabledMixin-B0YeDoL0.js";import"./KeyDownHandledMixin-Cu7q3axw.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BCUTiJ9z.js";import"./index-D_t_HPYP.js";import"./formfieldwrapper.constants-h8eGswk8.js";import"./popover.constants-CIal_de7.js";import"./toggle.constants-CMbJ5q3e.js";import"./index-CmRGQdAR.js";import"./popover.component-W5REBPXX.js";import"./if-defined-DgZfPEcJ.js";import"./BackdropMixin-Cph7LUXG.js";import"./v4-CmTdKEVZ.js";import"./class-map-B3NLWU-1.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B-A4vkr0.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
