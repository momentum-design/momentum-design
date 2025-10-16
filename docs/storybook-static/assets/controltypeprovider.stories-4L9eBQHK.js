import{C as l}from"./ControlTypeMixin-CskNSj7Z.js";import{E as d,k as i}from"./iframe-D3L2EIcL.js";import{p as a}from"./index-C5wZlVUR.js";import"./index-CS8NNBXc.js";import"./index-Dqmrxjc6.js";import"./preload-helper-C1FmrZbK.js";import"./index-B238GFKR.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BM3NDLpt.js";import"./listitem.component-CpCdpXkP.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./keys-hFXe221I.js";import"./DisabledMixin-ddkrM22v.js";import"./TabIndexMixin-DiJS-G-U.js";import"./index-CSeNiPrN.js";import"./formfieldwrapper.constants-ChS1VMO2.js";import"./toggle.constants-B9YzXdCY.js";import"./index-DddqF6zl.js";import"./popover.component-C9Uw8mY_.js";import"./if-defined-BgYKrk0d.js";import"./BackdropMixin-Cxnganoh.js";import"./v4-CmTdKEVZ.js";import"./class-map-3KZkyNrK.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cp4Xkfjn.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
