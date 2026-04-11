import{C as l}from"./ControlTypeMixin-BqyXkMiW.js";import{C as d,k as i}from"./iframe-CPkQ1uno.js";import{p as a}from"./index-DVwYNVme.js";import"./index-BpCh5OA3.js";import"./index-Bs--JYyU.js";import"./preload-helper-C1FmrZbK.js";import"./index-BHHvC_VM.js";import"./index-DTrDRi1E.js";import"./menuitem.component-bcmfiDAF.js";import"./listitem.component-CmN0uy6b.js";import"./query-assigned-elements-ztUOwE8z.js";import"./DisabledMixin-D-5_vW5D.js";import"./KeyDownHandledMixin-DYALkms_.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-faq0WY6U.js";import"./index-BIBhYejC.js";import"./formfieldwrapper.constants-CdKDUV9V.js";import"./popover.constants-BWHK_vbC.js";import"./toggle.constants-Dn9adQ-A.js";import"./index-CQQZ-e0-.js";import"./popover.component-CzeRRZKO.js";import"./if-defined-DKPWSsFH.js";import"./BackdropMixin-DyH5Z2o5.js";import"./v4-CmTdKEVZ.js";import"./class-map-D7H7NiC0.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-nd2hFe8h.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
