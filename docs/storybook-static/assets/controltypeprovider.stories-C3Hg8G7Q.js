import{C as i}from"./ControlTypeMixin-Cq8VshPZ.js";import{C as d,k as l}from"./iframe-DoNkonBK.js";import{p as a}from"./index-BOEpt90i.js";import"./index-CTti2r0L.js";import"./index-K5gQPBiz.js";import"./preload-helper-C1FmrZbK.js";import"./index-ChETWKIm.js";import"./index-DTrDRi1E.js";import"./menuitem.component-crpV5ygi.js";import"./listitem.component-CSKpMlhF.js";import"./query-assigned-elements-C5HXlrtD.js";import"./DisabledMixin-CrQfIA6t.js";import"./KeyDownHandledMixin-CHVndGqH.js";import"./index-DEiHPT4K.js";import"./formfieldwrapper.constants-Bqn78fRr.js";import"./popover.constants-B9PQSOY9.js";import"./toggle.constants-CsbfSglP.js";import"./index-DpSCxgnF.js";import"./popover.component-CPMBaGtO.js";import"./if-defined-B36DAkUP.js";import"./BackdropMixin-DhDi1luQ.js";import"./v4-CmTdKEVZ.js";import"./class-map-CpmH3uT1.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DWRF7fwL.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
