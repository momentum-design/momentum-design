import{C as i}from"./index-BoqYtXM4.js";import{E as d,k as l}from"./iframe-PAxJhFDH.js";import{p as a}from"./index-B_X5E31I.js";import"./index-CYHLNpQZ.js";import"./index-AlUfwEUP.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-BWvmIG4C.js";import"./DisabledMixin-BZQXf7FT.js";import"./formfieldwrapper.constants-DM_CsWFr.js";import"./toggle.constants-BLhRX3Sg.js";import"./index-CtU4bjMb.js";import"./popover.component-LFJFSEqI.js";import"./base-DIkkzJ-c.js";import"./if-defined-DHysbIWl.js";import"./BackdropMixin-5SDE6IuW.js";import"./v4-CmTdKEVZ.js";import"./class-map-CH_mhLb3.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-CQqJsuHe.js";import"./listitem.component-D9MWUkA1.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-BM_duI-h.js";import"./menuitemcheckbox.constants-DyngjkRO.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
