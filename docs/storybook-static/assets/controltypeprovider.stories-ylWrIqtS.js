import{C as l}from"./ControlTypeMixin-CHnlVHDp.js";import{C as d,k as i}from"./iframe-C4M76I6Z.js";import{p as a}from"./index-B3hvV5Yv.js";import"./index-DBu3BhC9.js";import"./index-DztXYZmg.js";import"./preload-helper-C1FmrZbK.js";import"./index-DBNA5EcJ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BsaLMBpS.js";import"./listitem.component-Bsw47pFh.js";import"./query-assigned-elements-iS1s4lzd.js";import"./DisabledMixin-CA14EO2k.js";import"./KeyDownHandledMixin-D-I2CZXG.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-RiL7vBpf.js";import"./index-DpBWGo-T.js";import"./formfieldwrapper.constants-DWaJSKKg.js";import"./popover.constants-DqcONBx4.js";import"./toggle.constants-CZqUn_Z7.js";import"./index-C7K6UCtN.js";import"./popover.component-B_GNLQYI.js";import"./if-defined-CeXXTm78.js";import"./BackdropMixin-LLdgP9NL.js";import"./v4-CmTdKEVZ.js";import"./class-map-B4cK5gJ-.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CCzbE2AV.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
