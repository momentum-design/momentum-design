import{C as l}from"./ControlTypeMixin-CGh5BvSU.js";import{E as d,k as i}from"./iframe-NlBABg4Q.js";import{p as a}from"./index-DIx3RUoY.js";import"./index-By1doxVC.js";import"./index-oJU6yRsM.js";import"./preload-helper-C1FmrZbK.js";import"./index-BxtcjKKj.js";import"./index-DTrDRi1E.js";import"./menuitem.component-uQVjiDoK.js";import"./listitem.component-JeiMCdBy.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Ca5qNIVF.js";import"./DisabledMixin-87psLE8q.js";import"./index-OfCeNU4k.js";import"./formfieldwrapper.constants-DU1I0PVj.js";import"./toggle.constants-BHuoeBZt.js";import"./index-D194GI-8.js";import"./query-assigned-nodes-DgnTQRYW.js";import"./popover.component-DGAgtcyA.js";import"./if-defined-CBNUrURk.js";import"./BackdropMixin-Ddqr0uYz.js";import"./v4-CmTdKEVZ.js";import"./class-map-C_17WWnn.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CdA-PhFs.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
