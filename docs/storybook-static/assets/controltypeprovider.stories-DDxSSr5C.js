import{C as l}from"./ControlTypeMixin-Dku1Sh2i.js";import{F as d,k as i}from"./iframe-CqrI13U9.js";import{p as a}from"./index-CeZqJBJZ.js";import"./index-CUIVfwVh.js";import"./index-BEyLlpee.js";import"./preload-helper-C1FmrZbK.js";import"./index-Bwut11Ud.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BP4MxdKp.js";import"./listitem.component-DkzqAF_z.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-cy2_g44-.js";import"./DisabledMixin-DlWJY35l.js";import"./index-CqhwrAWb.js";import"./formfieldwrapper.constants-CJzTakq_.js";import"./popover.constants-B-drNLuh.js";import"./toggle.constants-CVX-Qld7.js";import"./index-co31YXdg.js";import"./popover.component-DlOdf4gZ.js";import"./if-defined-Cxn4X8l_.js";import"./BackdropMixin-CyfveceT.js";import"./v4-CmTdKEVZ.js";import"./class-map-CThPCnJF.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cf1K6Kuh.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
