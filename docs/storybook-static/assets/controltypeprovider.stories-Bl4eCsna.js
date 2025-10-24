import{C as l}from"./ControlTypeMixin-DtYHW09W.js";import{E as d,k as i}from"./iframe-BPwLWgIo.js";import{p as a}from"./index-KpFIBkg6.js";import"./index-BdHw_rmL.js";import"./index-CVIpRPka.js";import"./preload-helper-C1FmrZbK.js";import"./index-DKq9LV7l.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CdGOLnXk.js";import"./listitem.component-NC-9odwW.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-QOPx_rL9.js";import"./DisabledMixin--pSk0K2n.js";import"./index-Clwkqv-P.js";import"./formfieldwrapper.constants-D6NvcF9q.js";import"./toggle.constants-xJmMi0CA.js";import"./index-CK7jRy1d.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-DKA8cdHS.js";import"./if-defined-oxJKdKKV.js";import"./BackdropMixin-zptfLQVi.js";import"./v4-CmTdKEVZ.js";import"./class-map-EOsZSUeu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DuARFAI9.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
