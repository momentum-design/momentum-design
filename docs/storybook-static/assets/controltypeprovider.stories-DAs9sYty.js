import{C as i}from"./ControlTypeMixin-DioY-jlR.js";import{C as d,k as l}from"./iframe-Cdt4WgmD.js";import{p as a}from"./index-1B-lXjvD.js";import"./index-DkalqX0v.js";import"./index-CrhbEumT.js";import"./preload-helper-C1FmrZbK.js";import"./index-Dn-5tj2l.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BbwL9PoX.js";import"./listitem.component-DB6TBAZr.js";import"./query-assigned-elements-C7izZX_h.js";import"./DisabledMixin-CXbaHIym.js";import"./KeyDownHandledMixin-DVdfAO8c.js";import"./index-8IWdcG7d.js";import"./formfieldwrapper.constants-DGDWbotl.js";import"./popover.constants-BlmGq0cc.js";import"./toggle.constants-BE87W-uO.js";import"./index-Dh1x1jKj.js";import"./popover.component-BRGxUmw0.js";import"./if-defined-CTZ3E5Y4.js";import"./BackdropMixin-BV7mmXg_.js";import"./v4-CmTdKEVZ.js";import"./class-map-CLrBpCLR.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CANAIP7M.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Components/controltypeprovider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
