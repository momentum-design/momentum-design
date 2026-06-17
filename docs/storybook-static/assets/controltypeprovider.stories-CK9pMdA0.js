import{C as l}from"./ControlTypeMixin-Bm_hmVQG.js";import{C as d,k as i}from"./iframe-rWdaJlOd.js";import{p as a}from"./index-CETtjk-e.js";import"./index-DQeHPqdC.js";import"./index-DJUdEwuE.js";import"./preload-helper-C1FmrZbK.js";import"./index-CcPXd9fF.js";import"./index-DTrDRi1E.js";import"./menuitem.component-CQHWc7R9.js";import"./listitem.component-B5YVHITG.js";import"./query-assigned-elements-q-LPC9At.js";import"./DisabledMixin-BXKdzVeB.js";import"./KeyDownHandledMixin-DEGPFLrO.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-D9vceyvA.js";import"./index-BJ7z-Obn.js";import"./formfieldwrapper.constants-DVLlnXP5.js";import"./popover.constants-BcS6MLW2.js";import"./toggle.constants-BBhLBCq4.js";import"./index--sM_c4_u.js";import"./popover.component--4xRavKH.js";import"./BackdropMixin-C5KQqgMy.js";import"./v4-CmTdKEVZ.js";import"./class-map-D7NgFuiS.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-o10scpMy.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,I={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const J=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,J as __namedExportsOrder,I as default};
