import{C as l}from"./ControlTypeMixin-CXx4ka7u.js";import{C as d,k as i}from"./iframe-n_pPM-AH.js";import{p as a}from"./index-Mza85U84.js";import"./index-HPIj6rY9.js";import"./index-CagPHaus.js";import"./preload-helper-C1FmrZbK.js";import"./index-DPX8NBux.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DHK09zyX.js";import"./listitem.component-CxQ4RKJ4.js";import"./query-assigned-elements-DK5RpBr_.js";import"./DisabledMixin-CSX0_rm2.js";import"./KeyDownHandledMixin-DZIjQ3jq.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-CHN0co3D.js";import"./index-BaB97zpC.js";import"./formfieldwrapper.constants-B8ILkPv5.js";import"./popover.constants-BG8BtsK7.js";import"./toggle.constants-DK1NqveL.js";import"./index-CU9w1pWm.js";import"./popover.component-BsPvCrCV.js";import"./if-defined-Ci9G1PLj.js";import"./BackdropMixin-B0-id4DG.js";import"./v4-CmTdKEVZ.js";import"./class-map-DCpQEf27.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DwvLqc-t.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
