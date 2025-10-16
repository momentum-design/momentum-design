import{C as i}from"./index-CDVL3msL.js";import{E as d,k as l}from"./iframe-Bf6-IwAq.js";import{p as a}from"./index-7U_I6KX4.js";import"./index-DLUw99h4.js";import"./index-D_ECVX3R.js";import"./preload-helper-C1FmrZbK.js";import"./index-DTrDRi1E.js";import"./index-CdOQCQfF.js";import"./DisabledMixin-VQPUxNBU.js";import"./formfieldwrapper.constants-COFz-Mjg.js";import"./toggle.constants-DBt1BDuf.js";import"./index-BeK5xPCr.js";import"./popover.component-4uKr9v9E.js";import"./base-DIkkzJ-c.js";import"./if-defined-DdJfs53F.js";import"./BackdropMixin-C2wU_3qk.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dv8P_erx.js";import"./directive-Ctav8iJK.js";import"./menuitem.component-DeZSB-nX.js";import"./listitem.component-DfVtcUxi.js";import"./query-assigned-elements-uEuc3rg8.js";import"./keys-hFXe221I.js";import"./TabIndexMixin-DwRLYS46.js";import"./menuitemcheckbox.constants-kyugYcTn.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
