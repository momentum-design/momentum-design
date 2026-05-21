import{C as l}from"./ControlTypeMixin-B8lOXltu.js";import{C as d,k as i}from"./iframe-VWNazD7V.js";import{p as a}from"./index-G90SThPo.js";import"./index-gUREaKqB.js";import"./index-CywnZk-M.js";import"./preload-helper-C1FmrZbK.js";import"./index-GxNGqpjS.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BKn29faw.js";import"./listitem.component-DHyNCZRR.js";import"./query-assigned-elements-ByBPjGs7.js";import"./DisabledMixin-C7fQxQrJ.js";import"./KeyDownHandledMixin-CCpBAplV.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BD-pvYYf.js";import"./index-1gK-ZfIP.js";import"./formfieldwrapper.constants-bFCoRdqb.js";import"./popover.constants-DmkH2woa.js";import"./toggle.constants-BLOYUYHT.js";import"./index-BbmseBwk.js";import"./popover.component-DdY515gT.js";import"./if-defined-CrJY9-Ak.js";import"./BackdropMixin-C3VdSnLe.js";import"./v4-CmTdKEVZ.js";import"./class-map-Bl-wiflw.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-PYnfUhCK.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
