import{C as l}from"./ControlTypeMixin-BnuvZful.js";import{C as d,k as i}from"./iframe-Ce3flZ0s.js";import{p as a}from"./index-BfBG_HRl.js";import"./index-CEV2QhWN.js";import"./index-CnkWpizC.js";import"./preload-helper-C1FmrZbK.js";import"./index-B_K7Z56W.js";import"./index-DTrDRi1E.js";import"./menuitem.component-j4r8orvt.js";import"./listitem.component-DUZlxqZP.js";import"./query-assigned-elements-CaqmIpjS.js";import"./DisabledMixin-Db1GaAks.js";import"./KeyDownHandledMixin-rpP34O3I.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-Cw9PJKa3.js";import"./index-Bk80YP04.js";import"./formfieldwrapper.constants-Cg1k6GXX.js";import"./popover.constants-BlIC3Ggo.js";import"./toggle.constants-DsydDT7e.js";import"./index-CLYGyRzD.js";import"./popover.component-DTSOzoa7.js";import"./if-defined-JThcPmUN.js";import"./BackdropMixin-CeL5ZTkG.js";import"./v4-CmTdKEVZ.js";import"./class-map-CoANZp_o.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CzAddUeU.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
