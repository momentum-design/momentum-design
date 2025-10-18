import{C as l}from"./ControlTypeMixin-BHm454AP.js";import{E as d,k as i}from"./iframe-DepJTrFF.js";import{p as a}from"./index-D4VUuMr3.js";import"./index-D9aJq610.js";import"./index-B1ziOCir.js";import"./preload-helper-C1FmrZbK.js";import"./index-78n3r5Rn.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B_CK6deE.js";import"./listitem.component-CFSEboAV.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BP4zZzLh.js";import"./DisabledMixin-HPiC1yiU.js";import"./index-dRgxA8_e.js";import"./formfieldwrapper.constants-Dq2kOUVu.js";import"./toggle.constants-N4sWAty-.js";import"./index-CW5m5SKw.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-tnK7TeNi.js";import"./if-defined-DYFDEgLm.js";import"./BackdropMixin-D1AU6kRZ.js";import"./v4-CmTdKEVZ.js";import"./class-map-C3UfKHga.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CB2K3js3.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
