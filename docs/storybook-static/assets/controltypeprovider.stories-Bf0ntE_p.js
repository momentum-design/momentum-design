import{C as l}from"./ControlTypeMixin-C9B-jp-p.js";import{C as d,k as i}from"./iframe-DpwhjFqY.js";import{p as a}from"./index-DQ83mzGH.js";import"./index-Hc8ii-Gb.js";import"./index-C3m_isVg.js";import"./preload-helper-C1FmrZbK.js";import"./index-CUATo73S.js";import"./index-DTrDRi1E.js";import"./menuitem.component-BORvxzyb.js";import"./listitem.component-FZIx2G3Z.js";import"./query-assigned-elements-BIXQGR76.js";import"./DisabledMixin-C-fL9D7b.js";import"./KeyDownHandledMixin-DCRA-ssO.js";import"./LifeCycleMixin-CkFTW4AQ.js";import"./listitem.constants-BMY3idk4.js";import"./index-KiRMbGb4.js";import"./formfieldwrapper.constants-ieU2GwY3.js";import"./popover.constants-Cqub46jY.js";import"./toggle.constants-QUoNp2bR.js";import"./index-DV0UMDJS.js";import"./popover.component-S4vw0V62.js";import"./if-defined-DNNAtBik.js";import"./BackdropMixin-DDQzKzNE.js";import"./v4-CmTdKEVZ.js";import"./class-map-_ktnNpfT.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-RC7wQhx3.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
