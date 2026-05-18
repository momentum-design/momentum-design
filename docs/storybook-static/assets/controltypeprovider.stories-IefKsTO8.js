import{C as l}from"./ControlTypeMixin-BYw7SmGm.js";import{C as d,k as i}from"./iframe-DVF1nujO.js";import{p as a}from"./index-RtGtO6Cx.js";import"./index-D18fP2mz.js";import"./index-Bfem4PEa.js";import"./preload-helper-C1FmrZbK.js";import"./index-D8XrbL9C.js";import"./index-DTrDRi1E.js";import"./menuitem.component-rJRI9JE7.js";import"./listitem.component-CYMabSC7.js";import"./query-assigned-elements-DCGwoZIh.js";import"./DisabledMixin-DkCdV4MU.js";import"./KeyDownHandledMixin-VaCWmTcy.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-KkeVDbsf.js";import"./index-BBpcGU98.js";import"./formfieldwrapper.constants-BUwVu_lL.js";import"./popover.constants-CN4krwz9.js";import"./toggle.constants-B7AkMPJP.js";import"./index-CpcKktYE.js";import"./popover.component-BNDnp2Wu.js";import"./if-defined-BUEc_hfM.js";import"./BackdropMixin-DDmRMs6K.js";import"./v4-CmTdKEVZ.js";import"./class-map-D3dIg5Wm.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Dvj99B3S.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
