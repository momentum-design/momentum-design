import{C as l}from"./ControlTypeMixin-Bj_0OA9H.js";import{E as d,k as i}from"./iframe-MeD3DPBw.js";import{p as a}from"./index-MLR-_8aL.js";import"./index-BEfVRWT_.js";import"./index-DDCqlAeN.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dh2wrkbT.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cq9OweI4.js";import"./listitem.component-BgbKTIbf.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Bo6VnUsU.js";import"./DisabledMixin-BCertKWZ.js";import"./index-BeDd_8KD.js";import"./formfieldwrapper.constants-tKHwObe5.js";import"./toggle.constants-CNeB1Ckt.js";import"./index-CW7rncVl.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-1sj5LYp8.js";import"./if-defined-CUdZ4DdS.js";import"./BackdropMixin-COpDAvpl.js";import"./v4-CmTdKEVZ.js";import"./class-map-Dwnx0u9v.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BDduv-Qy.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
