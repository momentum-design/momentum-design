import{C as i}from"./ControlTypeMixin-DxFivuwl.js";import{E as d,k as l}from"./iframe-C4SnPZjK.js";import{p as a}from"./index-BkBbgf4I.js";import"./index-CkrfbRus.js";import"./index-GCF4cdKD.js";import"./preload-helper-C1FmrZbK.js";import"./index-DcZuKoj_.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C4olPYv6.js";import"./listitem.component-DK2OCYhU.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BD1qw_sk.js";import"./DisabledMixin-Bn91i_Uu.js";import"./index-Czf4JcS8.js";import"./formfieldwrapper.constants-BrtlenK1.js";import"./toggle.constants-C4cqkpb2.js";import"./index-BDkoI4h-.js";import"./popover.component-DlVzKrPD.js";import"./if-defined-CZ4_WdhT.js";import"./BackdropMixin-8AJF_7l0.js";import"./v4-CmTdKEVZ.js";import"./class-map-DzFEwMZi.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cobld2gj.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
