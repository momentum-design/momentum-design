import{C as i}from"./ControlTypeMixin-Dw8fg2hU.js";import{E as d,k as l}from"./iframe-DCsOt2ns.js";import{p as a}from"./index-hABA-0Oh.js";import"./index-C0OftRwT.js";import"./index-CvOTpLNG.js";import"./preload-helper-C1FmrZbK.js";import"./index-DbwRZcF5.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CAaAKOtq.js";import"./listitem.component-CciGv-9M.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-D0AwrimY.js";import"./DisabledMixin-DxuDe5Ow.js";import"./index-CqRcPlHf.js";import"./formfieldwrapper.constants-CP_FDqd4.js";import"./toggle.constants-Dz2E_Puk.js";import"./index-DsVYJ4Rq.js";import"./popover.component-DpEj1WmO.js";import"./if-defined-BR9vSvcQ.js";import"./BackdropMixin-DpugTcam.js";import"./v4-CmTdKEVZ.js";import"./class-map-CDEcAGyq.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cq_P5wtW.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
