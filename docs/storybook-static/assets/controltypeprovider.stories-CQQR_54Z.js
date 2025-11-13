import{C as i}from"./ControlTypeMixin-DnDWTGBQ.js";import{E as d,k as l}from"./iframe-CsOK8u4V.js";import{p as a}from"./index-CmDNt3kX.js";import"./index-CSql-AZd.js";import"./index-DYN42SMD.js";import"./preload-helper-C1FmrZbK.js";import"./index-BsRCuuMq.js";import"./index-DTrDRi1E.js";import"./menuitem.component-COzm8Qdb.js";import"./listitem.component-DiljlRM5.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-B70b3LdI.js";import"./DisabledMixin-BWrxvUSb.js";import"./index-BRBcjhpF.js";import"./formfieldwrapper.constants-bwxp1vqX.js";import"./toggle.constants-L_56SM-Z.js";import"./index-dYe7gag3.js";import"./popover.component-D4KMlB2t.js";import"./if-defined-BSnODMTJ.js";import"./BackdropMixin-DCn6gfH0.js";import"./v4-CmTdKEVZ.js";import"./class-map-CaR8-ZhX.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-hDWW9egw.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
