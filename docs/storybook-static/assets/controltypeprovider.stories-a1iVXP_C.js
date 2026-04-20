import{C as l}from"./ControlTypeMixin-BJAs21Pg.js";import{C as d,k as i}from"./iframe-BBG3qcb4.js";import{p as a}from"./index-BmO2MYnw.js";import"./index-O9cf7RJT.js";import"./index-CRCZmBLW.js";import"./preload-helper-C1FmrZbK.js";import"./index-BqmpaV6z.js";import"./index-DTrDRi1E.js";import"./menuitem.component-Cda85o1C.js";import"./listitem.component-KxnsPNBy.js";import"./query-assigned-elements-D7ujoTHT.js";import"./DisabledMixin-ehcp4VZr.js";import"./KeyDownHandledMixin-BGNAzqNt.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BlvwWBIJ.js";import"./index-CkrNINZT.js";import"./formfieldwrapper.constants-C6l5QYOi.js";import"./popover.constants-BH0TzLtN.js";import"./toggle.constants-BNvqiqc8.js";import"./index-BEaG4ioA.js";import"./popover.component-DSnqwE5S.js";import"./if-defined-Chk36-OD.js";import"./BackdropMixin-D4efo2QC.js";import"./v4-CmTdKEVZ.js";import"./class-map-BAvvROxV.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CqWPR30r.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
