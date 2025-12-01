import{C as i}from"./ControlTypeMixin-DX9b3V95.js";import{E as d,k as l}from"./iframe-BBVjHSmF.js";import{p as a}from"./index-C76eqjue.js";import"./index-K7KoY1nv.js";import"./index-BS0BZwrw.js";import"./preload-helper-C1FmrZbK.js";import"./index-D3_byEY4.js";import"./index-DTrDRi1E.js";import"./menuitem.component-C4sULKed.js";import"./listitem.component-BNmHMEKN.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-ClSIyJRm.js";import"./DisabledMixin-gXp6PtL6.js";import"./index-BrS1nEM1.js";import"./formfieldwrapper.constants-B54V9Fp-.js";import"./toggle.constants-_wt9Zm1W.js";import"./index-CfnO7Anz.js";import"./popover.component-DjMN9nM4.js";import"./if-defined-DKvggsc9.js";import"./BackdropMixin-Dgoveofh.js";import"./v4-CmTdKEVZ.js";import"./class-map-Btv_Bxde.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DvspZUZ1.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:i.Context})}render(){return l` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>l`
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
