import{C as i}from"./ControlTypeMixin-CqJOVI0j.js";import{E as d,k as l}from"./iframe-CUMIo5cM.js";import{p as a}from"./index-CkiXzP_x.js";import"./index-DIaix9JN.js";import"./index-BxmoYwql.js";import"./preload-helper-C1FmrZbK.js";import"./index-CdRouVd5.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BEwSfuxw.js";import"./listitem.component-CPRdAsa-.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Ei9tTrXE.js";import"./DisabledMixin-B8BxQdXB.js";import"./index-B-cxr1Q5.js";import"./formfieldwrapper.constants-D_T4RsjT.js";import"./toggle.constants-Djo5Ti4-.js";import"./index-DhJnPdWe.js";import"./popover.component-fXRKekGd.js";import"./if-defined-BaB_VRQ0.js";import"./BackdropMixin-C-Q8TuX-.js";import"./v4-CmTdKEVZ.js";import"./class-map-CxjT8_rv.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DeTBQ_wE.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
