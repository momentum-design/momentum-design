import{C as l}from"./ControlTypeMixin-DhI03YhY.js";import{C as d,k as i}from"./iframe-z54V7R-I.js";import{p as a}from"./index-BxJNj_9N.js";import"./index-CwV7gzj9.js";import"./index-e4-0mB2b.js";import"./preload-helper-C1FmrZbK.js";import"./index-B5KrUTtI.js";import"./index-DTrDRi1E.js";import"./menuitem.component-ClgOg7gH.js";import"./listitem.component-Bc2ro6kX.js";import"./query-assigned-elements-C1zIRLYq.js";import"./DisabledMixin-BPk196UL.js";import"./KeyDownHandledMixin-DzCOe6p0.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BYoKYJXd.js";import"./index-D7StbR9N.js";import"./formfieldwrapper.constants-0CYF99Rz.js";import"./popover.constants-h7bp5Fij.js";import"./toggle.constants-SO0AnDsq.js";import"./index-WD45Ip-P.js";import"./popover.component-BDwe_Bpv.js";import"./if-defined-tLTANQnt.js";import"./BackdropMixin-6LYYjBLx.js";import"./v4-CmTdKEVZ.js";import"./class-map-BmyYm30A.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BHt7opKv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
