import{C as l}from"./ControlTypeMixin-C6VTBaCP.js";import{C as d,k as i}from"./iframe-DtQcyENP.js";import{p as a}from"./index-CUoZFlTQ.js";import"./index-C4umEca7.js";import"./index-C7GUQZzy.js";import"./preload-helper-C1FmrZbK.js";import"./index-CBzeH68k.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CF7SBHIa.js";import"./listitem.component-B0BaE-T-.js";import"./query-assigned-elements-DLf8V-hN.js";import"./DisabledMixin-DvULDkzi.js";import"./KeyDownHandledMixin-DJh_NLQG.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-FdN3s6ka.js";import"./index-C4b2Hny9.js";import"./formfieldwrapper.constants-CRoi3Sw-.js";import"./popover.constants-Cbs_0rX2.js";import"./toggle.constants-XIvr43bo.js";import"./index-DSmrs7CH.js";import"./popover.component-DkX-5xlR.js";import"./if-defined-CsW2lzyU.js";import"./BackdropMixin-C-SOpW7n.js";import"./v4-CmTdKEVZ.js";import"./class-map-BSOCXa8-.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-S7OCj4iN.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
