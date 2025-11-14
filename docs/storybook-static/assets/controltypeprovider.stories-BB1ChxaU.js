import{C as i}from"./ControlTypeMixin-CXCYrkDV.js";import{E as d,k as l}from"./iframe-DlYFcFkv.js";import{p as a}from"./index-CJmbjNWj.js";import"./index-Dbh93YET.js";import"./index-DjByScDp.js";import"./preload-helper-C1FmrZbK.js";import"./index-DXhJXG4u.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Bp37QKck.js";import"./listitem.component-DuA94CyS.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Dbb9xvTN.js";import"./DisabledMixin-CDRkWdxM.js";import"./index-DjijFqop.js";import"./formfieldwrapper.constants-CdwW2maq.js";import"./toggle.constants-CmjVr-i8.js";import"./index-Bc-6aRCS.js";import"./popover.component-98Mj_MN-.js";import"./if-defined-Ck0VLQTE.js";import"./BackdropMixin-DZ16Oa_V.js";import"./v4-CmTdKEVZ.js";import"./class-map-3hcH2ljV.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DRDZywl1.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
