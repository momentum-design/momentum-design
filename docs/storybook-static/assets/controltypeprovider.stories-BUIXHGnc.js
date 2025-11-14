import{C as i}from"./ControlTypeMixin-CccvvUsk.js";import{E as d,k as l}from"./iframe-CrnImR4G.js";import{p as a}from"./index-BPg1OG9M.js";import"./index-DkS7laqJ.js";import"./index-Woehu43v.js";import"./preload-helper-C1FmrZbK.js";import"./index-DP53CESZ.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BGrrdrI2.js";import"./listitem.component-D182heLy.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-BpHFDf7-.js";import"./DisabledMixin-BmiKlCWv.js";import"./index-DEYwI-78.js";import"./formfieldwrapper.constants-D0Da9cl0.js";import"./toggle.constants-CzJ9rU_m.js";import"./index-gSGaTv6H.js";import"./popover.component-B78cd_EW.js";import"./if-defined-DCu-IhVE.js";import"./BackdropMixin-Dde3aBbE.js";import"./v4-CmTdKEVZ.js";import"./class-map-0Qgz_ywX.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-Cy3nArge.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
