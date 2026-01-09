import{C as l}from"./ControlTypeMixin-aJY168MZ.js";import{F as d,k as i}from"./iframe-c_i7I41_.js";import{p as a}from"./index-DBHhIbk2.js";import"./index-CDOh4yDh.js";import"./index-C2_BMvFN.js";import"./preload-helper-C1FmrZbK.js";import"./index-B-TyZsse.js";import"./index-DTrDRi1E.js";import"./menuitem.component-DzIv7QfU.js";import"./listitem.component-xBl86BLy.js";import"./query-assigned-elements-uEuc3rg8.js";import"./base-DIkkzJ-c.js";import"./TabIndexMixin-CHrFJxDJ.js";import"./DisabledMixin-BZSiUR0v.js";import"./index-VnT3B7w0.js";import"./formfieldwrapper.constants-FhJcR3rF.js";import"./popover.constants-DDMtGR2D.js";import"./toggle.constants-DsWdKiEM.js";import"./index-BNFt9T9v.js";import"./popover.component-fHHEeBTN.js";import"./if-defined-Cz0DV4mo.js";import"./BackdropMixin-BZsxHFaN.js";import"./v4-CmTdKEVZ.js";import"./class-map-D8N2lhZu.js";import"./directive-Ctav8iJK.js";import"./menuitemcheckbox.constants-B9I35gkP.js";class u extends d{constructor(){super(...arguments),this.controlTypeProviderContext=a.consume({host:this,context:l.Context})}render(){return i` <p>Context.value: ${this.controlTypeProviderContext.value}</p> `}}u.register("mdc-subcomponent-control-type");const y=t=>i`
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
