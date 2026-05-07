import{C as l}from"./ControlTypeMixin-DF4rvJ3X.js";import{C as d,k as i}from"./iframe-C3hfbzB2.js";import{p as a}from"./index-CTNWDOHR.js";import"./index-C_JvXfjC.js";import"./index-qaA7BfLS.js";import"./preload-helper-C1FmrZbK.js";import"./index-C_xp-PMw.js";import"./index-DTrDRi1E.js";import"./menuitem.component-B3rFsRaT.js";import"./listitem.component-D9UKokU4.js";import"./query-assigned-elements--IeAfbTp.js";import"./DisabledMixin-DlPI71mV.js";import"./KeyDownHandledMixin-CH4eF85E.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BsxuYGNh.js";import"./index-CgO7_r0k.js";import"./formfieldwrapper.constants-CofnPCGB.js";import"./popover.constants-B5JI1vrg.js";import"./toggle.constants-C2p10czK.js";import"./index-BD6Cu8xA.js";import"./popover.component-CI8o644Q.js";import"./if-defined-xbn7Vu_G.js";import"./BackdropMixin-BcS1tUc7.js";import"./v4-CmTdKEVZ.js";import"./class-map-q-0gKVW_.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-ZFQI-Jpv.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
