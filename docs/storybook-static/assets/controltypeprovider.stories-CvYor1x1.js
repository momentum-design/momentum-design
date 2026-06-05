import{C as l}from"./ControlTypeMixin-CxdsmWZ6.js";import{C as d,k as i}from"./iframe-BWUGX0Bu.js";import{p as a}from"./index-lIa3bVCT.js";import"./index-I-wUuTOD.js";import"./index-DSQ3xrgm.js";import"./preload-helper-C1FmrZbK.js";import"./index-CrKWLrX9.js";import"./index-DTrDRi1E.js";import"./menuitem.component-rHPGPB_A.js";import"./listitem.component-B-uzx5DZ.js";import"./query-assigned-elements-DKVL0x6C.js";import"./DisabledMixin-DroOoHnv.js";import"./KeyDownHandledMixin-BR5Dt47J.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CdiPyv_P.js";import"./index-CWhBc6mR.js";import"./formfieldwrapper.constants-D-N-MIu_.js";import"./popover.constants-TwoWXAp6.js";import"./toggle.constants-D_QDYYti.js";import"./index-BIaw6DDB.js";import"./popover.component-bdJWF8J-.js";import"./if-defined-DYeAHZdU.js";import"./BackdropMixin--4n8bBhz.js";import"./v4-CmTdKEVZ.js";import"./class-map-BCGPfO9R.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-u9KR0yTG.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,J={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const K=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,K as __namedExportsOrder,J as default};
