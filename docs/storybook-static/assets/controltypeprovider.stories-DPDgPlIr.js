import{C as l}from"./ControlTypeMixin-CMKJkLSr.js";import{C as d,k as i}from"./iframe-B1KWnZCh.js";import{p as a}from"./index-Cr7Y8Kyi.js";import"./index-BmwkJblW.js";import"./index-Bwym-srS.js";import"./preload-helper-C1FmrZbK.js";import"./index-BHIwljMD.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BrDTbkRH.js";import"./listitem.component-CRHs5Iwc.js";import"./query-assigned-elements-Cr5kfRrf.js";import"./DisabledMixin-NZHSsDXC.js";import"./KeyDownHandledMixin-Dn46iWHe.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-kQWG-AxN.js";import"./index-CzQfyirc.js";import"./formfieldwrapper.constants-DNbD5Qme.js";import"./popover.constants-DROErG_h.js";import"./toggle.constants-DA53sY85.js";import"./index-NBiWmdA7.js";import"./popover.component-Bj4AE6Sa.js";import"./if-defined-BzRT1tOp.js";import"./BackdropMixin-DZnxeAl5.js";import"./v4-CmTdKEVZ.js";import"./class-map-fAfVqrJT.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BcNm-aIt.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
