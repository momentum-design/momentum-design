import{C as i}from"./ControlTypeMixin-DC6VeofV.js";import{E as d,k as l}from"./iframe-DvTcXUMa.js";import{p as a}from"./index-D_p67YJU.js";import"./index-CFehH6On.js";import"./index-Dt--AaOm.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dzt4QOej.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Ae6cmNDo.js";import"./listitem.component-BOKgWPTE.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CKrTKoa0.js";import"./DisabledMixin-Ben_s5Hs.js";import"./index-DrSmuRMw.js";import"./formfieldwrapper.constants-Cdh8WBTF.js";import"./toggle.constants-DY7n-hXj.js";import"./index-QivAlKHZ.js";import"./popover.component-CxyEQz00.js";import"./if-defined-D2mRSnHE.js";import"./BackdropMixin-Ct1pZacH.js";import"./v4-CmTdKEVZ.js";import"./class-map-DbIHEsQY.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-mSBCf5-i.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
