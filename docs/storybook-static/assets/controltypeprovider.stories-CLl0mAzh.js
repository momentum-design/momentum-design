import{C as l}from"./ControlTypeMixin-DzuvtXq_.js";import{H as d,k as i}from"./iframe-BStS_Y8s.js";import{p as a}from"./index-DrwJXeAu.js";import"./index-CtHIeZan.js";import"./index-pWNvZxQY.js";import"./preload-helper-C1FmrZbK.js";import"./index-DYKYj7GA.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C9mwSUWS.js";import"./listitem.component-BWWxYuMd.js";import"./query-assigned-elements-C0NBDQ8m.js";import"./DisabledMixin-CvGoz2-R.js";import"./KeyToActionMixin-DDHGwyRi.js";import"./index-FTlFMLL7.js";import"./formfieldwrapper.constants-Cupy-mJC.js";import"./popover.constants-CEz44EE7.js";import"./toggle.constants-Cz2iEDOq.js";import"./index-BFjFby73.js";import"./popover.component-CYDMN8yQ.js";import"./if-defined-D6-9s3Xi.js";import"./BackdropMixin-DRyLmDBq.js";import"./dom-BlZvhF8F.js";import"./v4-CmTdKEVZ.js";import"./class-map-DYVQkbOy.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BtmlOF3i.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
