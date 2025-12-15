import{C as l}from"./ControlTypeMixin-CkAveEIs.js";import{F as d,k as i}from"./iframe-DFrHSZxm.js";import{p as a}from"./index-aTQOAzgn.js";import"./index-DQMkIOOQ.js";import"./index-CbgKM5Zm.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dyqoh_OX.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BbL_T_FM.js";import"./listitem.component-CBoNkzUw.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-DfTHADxN.js";import"./DisabledMixin-BzNLu-18.js";import"./index-D1QTfFJR.js";import"./formfieldwrapper.constants-CZ5U_A4c.js";import"./popover.constants-BwM_FtyM.js";import"./toggle.constants-Cl5wINCD.js";import"./index-BIrROami.js";import"./popover.component-Bv1Tr3uL.js";import"./if-defined-DsJ518vR.js";import"./BackdropMixin-CHNgtpch.js";import"./v4-CmTdKEVZ.js";import"./class-map-IMxnLtcy.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-rQ_cccA6.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
