import{C as i}from"./ControlTypeMixin-B7l5Ak6w.js";import{E as d,k as l}from"./iframe-DcL-7sZw.js";import{p as a}from"./index-C4mMJMrZ.js";import"./index-CO_VIK8X.js";import"./index-Cu1qIMt_.js";import"./preload-helper-C1FmrZbK.js";import"./index-CMzlICtV.js";import"./index-DTrDRi1E.js";import"./menuitem.component-IIshxgJL.js";import"./listitem.component-C3mxbd_C.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-Dgrtj8Jf.js";import"./DisabledMixin-WZhekNHc.js";import"./index-DfmPOEuQ.js";import"./formfieldwrapper.constants-zB32RxRD.js";import"./toggle.constants-C-bB9APE.js";import"./index-lgX17yu-.js";import"./popover.component-DJZz-4Ge.js";import"./if-defined-ClgKFGqt.js";import"./BackdropMixin-aI4dmKsg.js";import"./v4-CmTdKEVZ.js";import"./class-map-CJN6aPRS.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-5kfIqXkX.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
