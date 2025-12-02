import{C as i}from"./ControlTypeMixin-D0fMEhbI.js";import{F as d,k as l}from"./iframe-bzVLHCLd.js";import{p as a}from"./index-BpeILGLU.js";import"./index-DjvRApmr.js";import"./index-CcrSmeb_.js";import"./preload-helper-C1FmrZbK.js";import"./index-BU65HlhD.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Dn5yJHZT.js";import"./listitem.component-Bgk5T-OQ.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BTpQ0FPl.js";import"./DisabledMixin-D3qipKRq.js";import"./index-DKrrGfZt.js";import"./formfieldwrapper.constants-CigjiCT9.js";import"./toggle.constants-DUoqydzc.js";import"./index-BxO0Hljk.js";import"./popover.component-BQxCRDrC.js";import"./if-defined-N96FXNFV.js";import"./BackdropMixin-B3nCByry.js";import"./v4-CmTdKEVZ.js";import"./class-map-BtDJy_zR.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-n1-k-9ku.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
