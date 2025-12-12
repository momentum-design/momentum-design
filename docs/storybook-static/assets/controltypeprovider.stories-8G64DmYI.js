import{C as l}from"./ControlTypeMixin-Coyenkds.js";import{F as d,k as i}from"./iframe-E1lunX_E.js";import{p as a}from"./index-T1WrLezj.js";import"./index-YDKCdhdx.js";import"./index-BgaHsJQo.js";import"./preload-helper-C1FmrZbK.js";import"./index-D_vVtYUN.js";import"./index-DTrDRi1E.js";import"./menuitem.component-xPjl4X6d.js";import"./listitem.component--zCU-5pI.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-EvA1cca2.js";import"./DisabledMixin-DutBLYdm.js";import"./index-BtCtbknQ.js";import"./formfieldwrapper.constants-DG5De6w4.js";import"./popover.constants-COEDd5UF.js";import"./toggle.constants-BuI8R28t.js";import"./index-CNOb5arp.js";import"./popover.component-oiHJ_bnY.js";import"./if-defined-CeOZCovI.js";import"./BackdropMixin-DtZZ-ijw.js";import"./v4-CmTdKEVZ.js";import"./class-map-DWrppwlh.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-DLkVZw5q.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
