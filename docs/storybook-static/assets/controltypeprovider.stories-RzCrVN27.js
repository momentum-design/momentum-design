import{C as l}from"./ControlTypeMixin-UNO05gMx.js";import{C as d,k as i}from"./iframe-DyOAHjNf.js";import{p as a}from"./index-CaeVKSVA.js";import"./index-DHCUA1s9.js";import"./index-DEVJEjx6.js";import"./preload-helper-C1FmrZbK.js";import"./index-NDaHquKD.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BmTTWErt.js";import"./listitem.component-DK5mlZSk.js";import"./query-assigned-elements-D6RvelBl.js";import"./DisabledMixin-Dqod2-IJ.js";import"./KeyDownHandledMixin-BCqzWN8b.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-DWHPAXjk.js";import"./index-Fn5k0Jfs.js";import"./formfieldwrapper.constants-Dwy-a1Wn.js";import"./popover.constants-CThX5JGE.js";import"./toggle.constants-Q1CZqQQD.js";import"./index-9dYMnI1z.js";import"./popover.component-BtMDMbxK.js";import"./if-defined-BEvGEaEj.js";import"./BackdropMixin-BWf7ke6g.js";import"./v4-CmTdKEVZ.js";import"./class-map-DpYlFKA9.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-CAE6bzX5.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
