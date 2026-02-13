import{C as i}from"./ControlTypeMixin-7XvloUtp.js";import{C as d,k as l}from"./iframe-CqwCe3Q0.js";import{p as a}from"./index-DESrcBLY.js";import"./index-DNLPGZvX.js";import"./index-BlrDirR2.js";import"./preload-helper-C1FmrZbK.js";import"./index-DRulujdx.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DLNC4cX1.js";import"./listitem.component-5iUha_4u.js";import"./query-assigned-elements-B-xKz1MP.js";import"./DisabledMixin-BRuycW9g.js";import"./KeyDownHandledMixin-Bkh1Su5p.js";import"./index-TUh5u3sg.js";import"./formfieldwrapper.constants-Cd3rVNgt.js";import"./popover.constants-Bb23WcUU.js";import"./toggle.constants-T2F7857L.js";import"./index-DzjHR3Ir.js";import"./popover.component-DE9NPdOb.js";import"./if-defined-B0TSLC8I.js";import"./BackdropMixin-BYVSUiL3.js";import"./v4-CmTdKEVZ.js";import"./class-map-BraIb1la.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BpNJb_mA.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
