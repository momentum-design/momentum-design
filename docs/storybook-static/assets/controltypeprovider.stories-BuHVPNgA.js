import{C as l}from"./ControlTypeMixin-B4CVD2IO.js";import{C as d,k as i}from"./iframe-CoZufWyv.js";import{p as a}from"./index-nMML2DHc.js";import"./index-DeU84AaD.js";import"./index-C2svhKmu.js";import"./preload-helper-C1FmrZbK.js";import"./index-CZnTnomU.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CnCEmxVF.js";import"./listitem.component-CcZqBYlI.js";import"./query-assigned-elements-Bb9V_31n.js";import"./DisabledMixin-oyOWrvDE.js";import"./KeyDownHandledMixin-C7VmcIzg.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-RV7P9Fxe.js";import"./index-D095-6xy.js";import"./formfieldwrapper.constants-DtC-mEhx.js";import"./popover.constants-C2NeOelP.js";import"./toggle.constants-aVVkucHw.js";import"./index-B-k8MRrJ.js";import"./popover.component-yjR190Q8.js";import"./if-defined-B0318-pP.js";import"./BackdropMixin-92KLvOLs.js";import"./v4-CmTdKEVZ.js";import"./class-map-BcQGTG2e.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-QEqxox9N.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
