import{C as l}from"./ControlTypeMixin-M4FFqoRO.js";import{C as d,k as i}from"./iframe-DZY0Eneb.js";import{p as a}from"./index-DsN-JZ3k.js";import"./index-Drhka_jJ.js";import"./index-CbK0Spme.js";import"./preload-helper-C1FmrZbK.js";import"./index-CIxqs-bu.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BoOF4GJn.js";import"./listitem.component-DCjaVafv.js";import"./query-assigned-elements-Cf3tLJom.js";import"./DisabledMixin-De6kEZSq.js";import"./KeyDownHandledMixin-VmShO6VS.js";import"./index-CTPYDnAY.js";import"./formfieldwrapper.constants-CwgWaoNM.js";import"./popover.constants-VlfpgApo.js";import"./toggle.constants-Bqga2lKY.js";import"./index-DGDTVGZ2.js";import"./popover.component-Ifa_UUGN.js";import"./if-defined-BZtiOCUR.js";import"./BackdropMixin-Cy6oTdnk.js";import"./v4-CmTdKEVZ.js";import"./class-map-BqXD2qR1.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-BGQeufRc.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
  <mdc-controltypeprovider control-type="${t["control-type"]}">
    <mdc-subcomponent-control-type></mdc-subcomponent-control-type>
    <div role="menu">
      <mdc-menuitemcheckbox label="example" indicator="checkbox"> </mdc-menuitemcheckbox>
    </div>
  </mdc-controltypeprovider>
`,H={title:"Providers/Control Type Provider",tags:["autodocs"],component:"mdc-controltypeprovider",render:y,argTypes:{"control-type":{control:"select",options:["controlled","uncontrolled"]}}},o={args:{"control-type":"uncontrolled"}},r={args:{"control-type":"controlled"}};var e,n,p;o.parameters={...o.parameters,docs:{...(e=o.parameters)==null?void 0:e.docs,source:{originalSource:`{
  args: {
    'control-type': 'uncontrolled'
  }
}`,...(p=(n=o.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,m,s;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    'control-type': 'controlled'
  }
}`,...(s=(m=r.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};const I=["Uncontrolled","Controlled"];export{r as Controlled,o as Uncontrolled,I as __namedExportsOrder,H as default};
